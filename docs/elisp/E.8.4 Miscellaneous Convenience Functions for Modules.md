---
slug: Module-Misc
---

This subsection describes a few convenience functions provided by the module API. Like the functions described in previous subsections, all of them are actually function pointers, and need to be called via the `emacs_env` pointer. Description of functions that were introduced after Emacs 25 calls out the first version where they became available.

### Function: `bool` **eq** `(emacs_env *env, emacs_value a, emacs_value b)`

This function returns `true` if the Lisp objects represented by *a* and *b* are identical, `false` otherwise. This is the same as the Lisp function `eq` (see [Equality Predicates](/docs/elisp/Equality-Predicates)), but avoids the need to intern the objects represented by the arguments.

There are no API functions for other equality predicates, so you will need to use `intern` and `funcall`, described below, to perform more complex equality tests.

### Function: `bool` **is\_not\_nil** `(emacs_env *env, emacs_value arg)`

This function tests whether the Lisp object represented by *arg* is non-`nil`; it returns `true` or `false` accordingly.

Note that you could implement an equivalent test by using `intern` to get an `emacs_value` representing `nil`, then use `eq`, described above, to test for equality. But using this function is more convenient.

### Function: `emacs_value` **type\_of** `(emacs_env *env, emacs_value arg)`

This function returns the type of *arg* as a value that represents a symbol: `string` for a string, `integer` for an integer, `process` for a process, etc. See [Type Predicates](/docs/elisp/Type-Predicates). You can use `intern` and `eq` to compare against known type symbols, if your code needs to depend on the object type.

### Function: `emacs_value` **intern** `(emacs_env *env, const char *name)`

This function returns an interned Emacs symbol whose name is *name*, which should be an ASCII null-terminated string. It creates a new symbol if one does not already exist.

Together with `funcall`, described below, this function provides a means for invoking any Lisp-callable Emacs function, provided that its name is a pure ASCII string. For example, here's how to intern a symbol whose name `name_str` is non-ASCII, by calling the more powerful Emacs `intern` function (see [Creating and Interning Symbols](/docs/elisp/Creating-Symbols)):

```lisp
emacs_value fintern = env->intern (env, "intern");
emacs_value sym_name =
  env->make_string (env, name_str, strlen (name_str));
emacs_value symbol = env->funcall (env, fintern, 1, &sym_name);

```

### Function: `emacs_value` **funcall** `(emacs_env *env, emacs_value func, ptrdiff_t nargs, emacs_value *args)`

This function calls the specified *func* passing it *nargs* arguments from the array pointed to by *args*. The argument *func* can be a function symbol (e.g., returned by `intern` described above), a module function returned by `make_function` (see [Writing Module Functions](/docs/elisp/Module-Functions)), a subroutine written in C, etc. If *nargs* is zero, *args* can be a `NULL` pointer.

The function returns the value that *func* returned.

If your module includes potentially long-running code, it is a good idea to check from time to time in that code whether the user wants to quit, e.g., by typing `C-g` (see [Quitting](/docs/elisp/Quitting)). The following function, which is available since Emacs 26.1, is provided for that purpose.

### Function: `bool` **should\_quit** `(emacs_env *env)`

This function returns `true` if the user wants to quit. In that case, we recommend that your module function aborts any on-going processing and returns as soon as possible. In most cases, use `process_input` instead.

To process input events in addition to checking whether the user wants to quit, use the following function, which is available since Emacs 27.1.

### Function: `enum emacs_process_input_result` **process\_input** `(emacs_env *env)`

This function processes pending input events. It returns `emacs_process_input_quit` if the user wants to quit or an error occurred while processing signals. In that case, we recommend that your module function aborts any on-going processing and returns as soon as possible. If the module code may continue running, `process_input` returns `emacs_process_input_continue`. The return value is `emacs_process_input_continue` if and only if there is no pending nonlocal exit in `env`. If the module continues after calling `process_input`, global state such as variable values and buffer content may have been modified in arbitrary ways.

### Function: `int` **open\_channel** `(emacs_env *env, emacs_value pipe_process)`

This function, which is available since Emacs 28, opens a channel to an existing pipe process. *pipe\_process* must refer to an existing pipe process created by `make-pipe-process`. [Pipe Processes](/docs/elisp/Pipe-Processes). If successful, the return value will be a new file descriptor that you can use to write to the pipe. Unlike all other module functions, you can use the returned file descriptor from arbitrary threads, even if no module environment is active. You can use the `write` function to write to the file descriptor. Once done, close the file descriptor using `close`. [(libc)Low-Level I/O](https://www.gnu.org/software/libc/manual/html_mono/libc.html#Low_002dLevel-I_002fO).
