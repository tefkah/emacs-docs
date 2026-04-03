---
slug: Module-Functions
---

The main reason for writing an Emacs module is to make additional functions available to Lisp programs that load the module. This subsection describes how to write such *module functions*.

A module function has the following general form and signature:

### Function: `emacs_value` **emacs\_function** `(emacs_env *env, ptrdiff_t nargs, emacs_value *args, void *data)`

The *env* argument provides a pointer to the API environment, needed to access Emacs objects and functions. The *nargs* argument is the required number of arguments, which can be zero (see `make_function` below for more flexible specification of the argument number), and *args* is a pointer to the array of the function arguments. The argument *data* points to additional data required by the function, which was arranged when `make_function` (see below) was called to create an Emacs function from `emacs_function`.

Module functions use the type `emacs_value` to communicate Lisp objects between Emacs and the module (see [Conversion Between Lisp and Module Values](/docs/elisp/Module-Values)). The API, described below and in the following subsections, provides facilities for conversion between basic C data types and the corresponding `emacs_value` objects.

In the module function's body, do *not* attempt to access elements of the *args* array beyond the index `nargs-1`: memory for the *args* array is allocated exactly to accommodate *nargs* values, and accessing beyond that will most probably crash your module. In particular, if the value of *nargs* passed to the function at run time is zero, it must not access *args* at all, as no memory will have been allocated for it in that case.

A module function always returns a value. If the function returns normally, the Lisp code which called it will see the Lisp object corresponding to the `emacs_value` value the function returned. However, if the user typed `C-g`, or if the module function or its callees signaled an error or exited nonlocally (see [Nonlocal Exits in Modules](/docs/elisp/Module-Nonlocal)), Emacs will ignore the returned value and quit or throw as it does when Lisp code encounters the same situations.

The header `emacs-module.h` provides the type `emacs_function` as an alias type for a function pointer to a module function.

After writing your C code for a module function, you should make a Lisp function object from it using the `make_function` function, whose pointer is provided in the environment (recall that the pointer to the environment is returned by `get_environment`). This is normally done in the module initialization function (see [module initialization function](/docs/elisp/module-initialization-function)), after verifying the API compatibility.

### Function: `emacs_value` **make\_function** `(emacs_env *env, ptrdiff_t min_arity, ptrdiff_t max_arity, emacs_function func, const char *docstring, void *data)`

This returns an Emacs function created from the C function *func*, whose signature is as described for `emacs_function` above. The arguments *min\_arity* and *max\_arity* specify the minimum and maximum number of arguments that *func* can accept. The *max\_arity* argument can have the special value `emacs_variadic_function`, which makes the function accept an unlimited number of arguments, like the `&rest` keyword in Lisp (see [Features of Argument Lists](/docs/elisp/Argument-List)).

The argument *data* is a way to arrange for arbitrary additional data to be passed to *func* when it is called. Whatever pointer is passed to `make_function` will be passed unaltered to *func*.

The argument *docstring* specifies the documentation string for the function. It should be either an ASCII string, or a UTF-8 encoded non-ASCII string, or a `NULL` pointer; in the latter case the function will have no documentation. The documentation string can end with a line that specifies the advertised calling convention, see [Documentation Strings of Functions](/docs/elisp/Function-Documentation).

Since every module function must accept the pointer to the environment as its first argument, the call to `make_function` could be made from any module function, but you will normally want to do that from the module initialization function, so that all the module functions are known to Emacs once the module is loaded.

Finally, you should bind the Lisp function to a symbol, so that Lisp code could call your function by name. For that, use the module API function `intern` (see [intern](/docs/elisp/intern)) whose pointer is also provided in the environment that module functions can access.

Combining the above steps, code that arranges for a C function `module_func` to be callable as `module-func` from Lisp will look like this, as part of the module initialization function:

```lisp
 emacs_env *env = runtime->get_environment (runtime);
 emacs_value func = env->make_function (env, min_arity, max_arity,
                                        module_func, docstring, data);
 emacs_value symbol = env->intern (env, "module-func");
 emacs_value args[] = {symbol, func};
 env->funcall (env, env->intern (env, "defalias"), 2, args);

```

This makes the symbol `module-func` known to Emacs by calling `env->intern`, then invokes `defalias` from Emacs to bind the function to that symbol. Note that it is possible to use `fset` instead of `defalias`; the differences are described in [defalias](/docs/elisp/Defining-Functions).

Module functions including the `emacs_module_init` function (see [module initialization function](/docs/elisp/module-initialization-function)) may only interact with Emacs by calling environment functions from some live `emacs_env` pointer while being called directly or indirectly from Emacs. In other words, if a module function wants to call Lisp functions or Emacs primitives, convert `emacs_value` objects to and from C datatypes (see [Conversion Between Lisp and Module Values](/docs/elisp/Module-Values)), or interact with Emacs in any other way, some call from Emacs to `emacs_module_init` or to a module function must be in the call stack. Module functions may not interact with Emacs while garbage collection is running; see [Garbage Collection](/docs/elisp/Garbage-Collection). They may only interact with Emacs from Lisp interpreter threads (including the main thread) created by Emacs; see [Threads](/docs/elisp/Threads). The `--module-assertions` command-line option can detect some violations of the above requirements. See [Initial Options](https://www.gnu.org/software/emacs/manual/html_mono/emacs.html#Initial-Options) in The GNU Emacs Manual.

Using the module API, it is possible to define more complex function and data types: inline functions, macros, etc. However, the resulting C code will be cumbersome and hard to read. Therefore, we recommend that you limit the module code which creates functions and data structures to the absolute minimum, and leave the rest for a Lisp package that will accompany your module, because doing these additional tasks in Lisp is much easier, and will produce a much more readable code. For example, given a module function `module-func` defined as above, one way of making a macro `module-macro` based on it is with the following simple Lisp wrapper:

```lisp
(defmacro module-macro (&rest args)
  "Documentation string for the macro."
  (module-func args))

```

The Lisp package which goes with your module could then load the module using the `load` primitive (see [Emacs Dynamic Modules](/docs/elisp/Dynamic-Modules)) when the package is loaded into Emacs.

By default, module functions created by `make_function` are not interactive. To make them interactive, you can use the following function.

### Function: `void` **make\_interactive** `(emacs_env *env, emacs_value function, emacs_value spec)`

This function, which is available since Emacs 28, makes the function *function* interactive using the interactive specification *spec*. Emacs interprets *spec* like the argument to the `interactive` form. [Using `interactive`](/docs/elisp/Using-Interactive), and see [Code Characters for `interactive`](/docs/elisp/Interactive-Codes). *function* must be an Emacs module function returned by `make_function`.

Note that there is no native module support for retrieving the interactive specification of a module function. Use the function `interactive-form` for that. [Using `interactive`](/docs/elisp/Using-Interactive). It is not possible to make a module function non-interactive once you have made it interactive using `make_interactive`.

If you want to run some code when a module function object (i.e., an object returned by `make_function`) is garbage-collected, you can install a *function finalizer*. Function finalizers are available since Emacs 28. For example, if you have passed some heap-allocated structure to the *data* argument of `make_function`, you can use the finalizer to deallocate the structure. See [(libc)Basic Allocation](https://www.gnu.org/software/libc/manual/html_mono/libc.html#Basic-Allocation), and see [(libc)Freeing after Malloc](https://www.gnu.org/software/libc/manual/html_mono/libc.html#Freeing-after-Malloc). The finalizer function has the following signature:

```lisp
void finalizer (void *data)

```

Here, *data* receives the value passed to *data* when calling `make_function`. Note that the finalizer can't interact with Emacs in any way.

Directly after calling `make_function`, the newly-created function doesn't have a finalizer. Use `set_function_finalizer` to add one, if desired.

### Function: `void` **emacs\_finalizer** `(void *ptr)`

The header `emacs-module.h` provides the type `emacs_finalizer` as a type alias for an Emacs finalizer function.

### Function: `emacs_finalizer` **get\_function\_finalizer** `(emacs_env *env, emacs_value arg)`

This function, which is available since Emacs 28, returns the function finalizer associated with the module function represented by *arg*. *arg* must refer to a module function, that is, an object returned by `make_function`. If no finalizer is associated with the function, `NULL` is returned.

### Function: `void` **set\_function\_finalizer** `(emacs_env *env, emacs_value arg, emacs_finalizer fin)`

This function, which is available since Emacs 28, sets the function finalizer associated with the module function represented by *arg* to *fin*. *arg* must refer to a module function, that is, an object returned by `make_function`. *fin* can either be `NULL` to clear *arg*'s function finalizer, or a pointer to a function to be called when the object represented by *arg* is garbage-collected. At most one function finalizer can be set per function; if *arg* already has a finalizer, it is replaced by *fin*.
