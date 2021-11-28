---
slug: Compilation-Tips
---

Here are ways of improving the execution speed of byte-compiled Lisp programs.

*   Profile your program, to find out where the time is being spent. See [Profiling](/docs/elisp/Profiling).

*   Use iteration rather than recursion whenever possible. Function calls are slow in Emacs Lisp even when a compiled function is calling another compiled function.

*   Using the primitive list-searching functions `memq`, `member`, `assq`, or `assoc` is even faster than explicit iteration. It can be worth rearranging a data structure so that one of these primitive search functions can be used.

*   Certain built-in functions are handled specially in byte-compiled code, avoiding the need for an ordinary function call. It is a good idea to use these functions rather than alternatives. To see whether a function is handled specially by the compiler, examine its `byte-compile` property. If the property is non-`nil`, then the function is handled specially.

    For example, the following input will show you that `aref` is compiled specially (see [Array Functions](/docs/elisp/Array-Functions)):

    ```lisp
    (get 'aref 'byte-compile)
         ⇒ byte-compile-two-args
    ```

    Note that in this case (and many others), you must first load the `bytecomp` library, which defines the `byte-compile` property.

*   If calling a small function accounts for a substantial part of your program’s running time, make the function inline. This eliminates the function call overhead. Since making a function inline reduces the flexibility of changing the program, don’t do it unless it gives a noticeable speedup in something slow enough that users care about the speed. See [Inline Functions](/docs/elisp/Inline-Functions).
