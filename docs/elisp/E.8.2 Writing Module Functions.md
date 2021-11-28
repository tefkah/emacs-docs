---
slug: Module-Functions
---

The main reason for writing an Emacs module is to make additional functions available to Lisp programs that load the module. This subsection describes how to write such *module functions*.

A module function has the following general form and signature:

### <span className="tag function">`function`</span> *emacs\_value* **module\_func** *(emacs\_env \*`env`, ptrdiff\_t `nargs`, emacs\_value \*`args`, void \*`data`)*

The `env` argument provides a pointer to the API environment, needed to access Emacs objects and functions. The `nargs` argument is the required number of arguments, which can be zero (see `make_function` below for more flexible specification of the argument number), and `args` is a pointer to the array of the function arguments. The argument `data` points to additional data required by the function, which was arranged when `make_function` (see below) was called to create an Emacs function from `module_func`.

Module functions use the type `emacs_value` to communicate Lisp objects between Emacs and the module (see [Module Values](/docs/elisp/Module-Values)). The API, described below and in the following subsections, provides facilities for conversion between basic C data types and the corresponding `emacs_value` objects.

A module function always returns a value. If the function returns normally, the Lisp code which called it will see the Lisp object corresponding to the `emacs_value` value the function returned. However, if the user typed `C-g`, or if the module function or its callees signaled an error or exited nonlocally (see [Module Nonlocal](/docs/elisp/Module-Nonlocal)), Emacs will ignore the returned value and quit or throw as it does when Lisp code encounters the same situations.

After writing your C code for a module function, you should make a Lisp function object from it using the `make_function` function, whose pointer is provided in the environment (recall that the pointer to the environment is returned by `get_environment`). This is normally done in the module initialization function (see [module initialization function](/docs/elisp/module-initialization-function)), after verifying the API compatibility.

### <span className="tag function">`function`</span> *emacs\_value* **make\_function** *(emacs\_env \*`env`, ptrdiff\_t `min_arity`, ptrdiff\_t `max_arity`, subr `func`, const char \*`docstring`, void \*`data`)*

This returns an Emacs function created from the C function `func`, whose signature is as described for `module_func` above (assumed here to be `typedef`’ed as `subr`). The arguments `min_arity` and `max_arity` specify the minimum and maximum number of arguments that `func` can accept. The `max_arity` argument can have the special value `emacs_variadic_function`, which makes the function accept an unlimited number of arguments, like the `&rest` keyword in Lisp (see [Argument List](/docs/elisp/Argument-List)).

The argument `data` is a way to arrange for arbitrary additional data to be passed to `func` when it is called. Whatever pointer is passed to `make_function` will be passed unaltered to `func`.

The argument `docstring` specifies the documentation string for the function. It should be either an ASCII string, or a UTF-8 encoded non-ASCII string, or a `NULL` pointer; in the latter case the function will have no documentation. The documentation string can end with a line that specifies the advertised calling convention, see [Function Documentation](/docs/elisp/Function-Documentation).

Since every module function must accept the pointer to the environment as its first argument, the call to `make_function` could be made from any module function, but you will normally want to do that from the module initialization function, so that all the module functions are known to Emacs once the module is loaded.

Finally, you should bind the Lisp function to a symbol, so that Lisp code could call your function by name. For that, use the module API function `intern` (see [intern](/docs/elisp/intern)) whose pointer is also provided in the environment that module functions can access.

Combining the above steps, code that arranges for a C function `module_func` to be callable as `module-func` from Lisp will look like this, as part of the module initialization function:

```lisp
 emacs_env *env = ert->get_environment (ert);
 emacs_value func = env->make_function (env, min_arity, max_arity,
                                        module_func, docstring, data);
 emacs_value symbol = env->intern (env, "module-func");
 emacs_value args[] = {symbol, func};
 env->funcall (env, env->intern (env, "defalias"), 2, args);
```

This makes the symbol `module-func` known to Emacs by calling `env->intern`, then invokes `defalias` from Emacs to bind the function to that symbol. Note that it is possible to use `fset` instead of `defalias`; the differences are described in [defalias](/docs/elisp/Defining-Functions).

Module functions including the `emacs_module_init` function (see [module initialization function](/docs/elisp/module-initialization-function)) may only interact with Emacs by calling environment functions from some live `emacs_env` pointer while being called directly or indirectly from Emacs. In other words, if a module function wants to call Lisp functions or Emacs primitives, convert `emacs_value` objects to and from C datatypes (see [Module Values](/docs/elisp/Module-Values)), or interact with Emacs in any other way, some call from Emacs to `emacs_module_init` or to a module function must be in the call stack. Module function may not interact with Emacs while garbage collection is running; see [Garbage Collection](/docs/elisp/Garbage-Collection). They may only interact with Emacs from Lisp interpreter threads (including the main thread) created by Emacs; see [Threads](/docs/elisp/Threads). The `--module-assertions` command-line option can detect some violations of the above requirements. See [Initial Options](https://www.gnu.org/software/emacs/manual/html_mono/emacs.html#Initial-Options) in The GNU Emacs Manual.

Using the module API, it is possible to define more complex function and data types: interactive functions, inline functions, macros, etc. However, the resulting C code will be cumbersome and hard to read. Therefore, we recommend that you limit the module code which creates functions and data structures to the absolute minimum, and leave the rest for a Lisp package that will accompany your module, because doing these additional tasks in Lisp is much easier, and will produce a much more readable code. For example, given a module function `module-func` defined as above, one way of making an interactive command `module-cmd` based on it is with the following simple Lisp wrapper:

```lisp
(defun module-cmd (&rest args)
  "Documentation string for the command."
  (interactive spec)
  (apply 'module-func args))
```

The Lisp package which goes with your module could then load the module using the `load` primitive (see [Dynamic Modules](/docs/elisp/Dynamic-Modules)) when the package is loaded into Emacs.
