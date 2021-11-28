---
slug: Coding-Conventions
---

Here are conventions that you should follow when writing Emacs Lisp code intended for widespread use:

*   Simply loading a package should not change Emacs’s editing behavior. Include a command or commands to enable and disable the feature, or to invoke it.

    This convention is mandatory for any file that includes custom definitions. If fixing such a file to follow this convention requires an incompatible change, go ahead and make the incompatible change; don’t postpone it.

*   You should choose a short word to distinguish your program from other Lisp programs. The names of all global symbols in your program, that is the names of variables, constants, and functions, should begin with that chosen prefix. Separate the prefix from the rest of the name with a hyphen, ‘`-`’. This practice helps avoid name conflicts, since all global variables in Emacs Lisp share the same name space, and all functions share another name space[^1]. Use two hyphens to separate prefix and name if the symbol is not meant to be used by other packages.

    Occasionally, for a command name intended for users to use, it is more convenient if some words come before the package’s name prefix. For example, it is our convention to have commands that list objects named as ‘`list-something`’, e.g., a package called ‘`frob`’ could have a command ‘`list-frobs`’, when its other global symbols begin with ‘`frob-`’. Also, constructs that define functions, variables, etc., work better if they start with ‘`defun`’ or ‘`defvar`’, so put the name prefix later on in the name.

    This recommendation applies even to names for traditional Lisp primitives that are not primitives in Emacs Lisp—such as `copy-list`. Believe it or not, there is more than one plausible way to define `copy-list`. Play it safe; append your name prefix to produce a name like `foo-copy-list` or `mylib-copy-list` instead.

    If you write a function that you think ought to be added to Emacs under a certain name, such as `twiddle-files`, don’t call it by that name in your program. Call it `mylib-twiddle-files` in your program, and send mail to ‘`bug-gnu-emacs@gnu.org`’ suggesting we add it to Emacs. If and when we do, we can change the name easily enough.

    If one prefix is insufficient, your package can use two or three alternative common prefixes, so long as they make sense.

*   We recommend enabling `lexical-binding` in new code, and converting existing Emacs Lisp code to enable `lexical-binding` if it doesn’t already. See [Using Lexical Binding](/docs/elisp/Using-Lexical-Binding).

*   Put a call to `provide` at the end of each separate Lisp file. See [Named Features](/docs/elisp/Named-Features).

*   If a file requires certain other Lisp programs to be loaded beforehand, then the comments at the beginning of the file should say so. Also, use `require` to make sure they are loaded. See [Named Features](/docs/elisp/Named-Features).

*   If a file `foo` uses a macro defined in another file `bar`, but does not use any functions or variables defined in `bar`, then `foo` should contain the following expression:

    ```lisp
    (eval-when-compile (require 'bar))
    ```

    This tells Emacs to load `bar` just before byte-compiling `foo`, so that the macro definition is available during compilation. Using `eval-when-compile` avoids loading `bar` when the compiled version of `foo` is *used*. It should be called before the first use of the macro in the file. See [Compiling Macros](/docs/elisp/Compiling-Macros).

*   Avoid loading additional libraries at run time unless they are really needed. If your file simply cannot work without some other library, then just `require` that library at the top-level and be done with it. But if your file contains several independent features, and only one or two require the extra library, then consider putting `require` statements inside the relevant functions rather than at the top-level. Or use `autoload` statements to load the extra library when needed. This way people who don’t use those aspects of your file do not need to load the extra library.

*   If you need Common Lisp extensions, use the `cl-lib` library rather than the old `cl` library. The latter does not use a clean namespace (i.e., its definitions do not start with a ‘`cl-`’ prefix). If your package loads `cl` at run time, that could cause name clashes for users who don’t use that package.

    There is no problem with using the `cl` package at *compile* time, with `(eval-when-compile (require 'cl))`. That’s sufficient for using the macros in the `cl` package, because the compiler expands them before generating the byte-code. It is still better to use the more modern `cl-lib` in this case, though.

*   When defining a major mode, please follow the major mode conventions. See [Major Mode Conventions](/docs/elisp/Major-Mode-Conventions).

*   When defining a minor mode, please follow the minor mode conventions. See [Minor Mode Conventions](/docs/elisp/Minor-Mode-Conventions).

*   If the purpose of a function is to tell you whether a certain condition is true or false, give the function a name that ends in ‘`p`’ (which stands for “predicate"). If the name is one word, add just ‘`p`’; if the name is multiple words, add ‘`-p`’. Examples are `framep` and `frame-live-p`. We recommend to avoid using this `-p` suffix in boolean variable names, unless the variable is bound to a predicate function; instead, use a `-flag` suffix or names like `is-foo`.

*   If the purpose of a variable is to store a single function, give it a name that ends in ‘`-function`’. If the purpose of a variable is to store a list of functions (i.e., the variable is a hook), please follow the naming conventions for hooks. See [Hooks](/docs/elisp/Hooks).

*   If loading the file adds functions to hooks, define a function `feature-unload-function`, where `feature` is the name of the feature the package provides, and make it undo any such changes. Using `unload-feature` to unload the file will run this function. See [Unloading](/docs/elisp/Unloading).

*   It is a bad idea to define aliases for the Emacs primitives. Normally you should use the standard names instead. The case where an alias may be useful is where it facilitates backwards compatibility or portability.

*   If a package needs to define an alias or a new function for compatibility with some other version of Emacs, name it with the package prefix, not with the raw name with which it occurs in the other version. Here is an example from Gnus, which provides many examples of such compatibility issues.

    ```lisp
    (defalias 'gnus-point-at-bol
      (if (fboundp 'point-at-bol)
          'point-at-bol
        'line-beginning-position))
    ```

*   Redefining or advising an Emacs primitive is a bad idea. It may do the right thing for a particular program, but there is no telling what other programs might break as a result.

*   It is likewise a bad idea for one Lisp package to advise a function in another Lisp package (see [Advising Functions](/docs/elisp/Advising-Functions)).

*   Avoid using `eval-after-load` and `with-eval-after-load` in libraries and packages (see [Hooks for Loading](/docs/elisp/Hooks-for-Loading)). This feature is meant for personal customizations; using it in a Lisp program is unclean, because it modifies the behavior of another Lisp file in a way that’s not visible in that file. This is an obstacle for debugging, much like advising a function in the other package.

*   If a file does replace any of the standard functions or library programs of Emacs, prominent comments at the beginning of the file should say which functions are replaced, and how the behavior of the replacements differs from that of the originals.

*   Constructs that define a function or variable should be macros, not functions, and their names should start with ‘`define-`’. The macro should receive the name to be defined as the first argument. That will help various tools find the definition automatically. Avoid constructing the names in the macro itself, since that would confuse these tools.

*   In some other systems there is a convention of choosing variable names that begin and end with ‘`*`’. We don’t use that convention in Emacs Lisp, so please don’t use it in your programs. (Emacs uses such names only for special-purpose buffers.) People will find Emacs more coherent if all libraries use the same conventions.

*   The default file coding system for Emacs Lisp source files is UTF-8 (see [Text Representations](/docs/elisp/Text-Representations)). In the rare event that your program contains characters which are *not* in UTF-8, you should specify an appropriate coding system in the source file’s ‘`-*-`’ line or local variables list. See [Local Variables in Files](https://www.gnu.org/software/emacs/manual/html_mono/emacs.html#File-Variables) in The GNU Emacs Manual.

*   Indent the file using the default indentation parameters.

*   Don’t make a habit of putting close-parentheses on lines by themselves; Lisp programmers find this disconcerting.

*   Please put a copyright notice and copying permission notice on the file if you distribute copies. See [Library Headers](/docs/elisp/Library-Headers).

[^1]: The benefits of a Common Lisp-style package system are considered not to outweigh the costs.
