---
slug: Programming-Tips
---

Following these conventions will make your program fit better into Emacs when it runs.

*   Don’t use `next-line` or `previous-line` in programs; nearly always, `forward-line` is more convenient as well as more predictable and robust. See [Text Lines](/docs/elisp/Text-Lines).

*   Don’t call functions that set the mark, unless setting the mark is one of the intended features of your program. The mark is a user-level feature, so it is incorrect to change the mark except to supply a value for the user’s benefit. See [The Mark](/docs/elisp/The-Mark).

    In particular, don’t use any of these functions:

    *   `beginning-of-buffer`, `end-of-buffer`
    *   `replace-string`, `replace-regexp`
    *   `insert-file`, `insert-buffer`

    If you just want to move point, or replace a certain string, or insert a file or buffer’s contents, without any of the other features intended for interactive users, you can replace these functions with one or two lines of simple Lisp code.

*   Use lists rather than vectors, except when there is a particular reason to use a vector. Lisp has more facilities for manipulating lists than for vectors, and working with lists is usually more convenient.

    Vectors are advantageous for tables that are substantial in size and are accessed in random order (not searched front to back), provided there is no need to insert or delete elements (only lists allow that).

*   The recommended way to show a message in the echo area is with the `message` function, not `princ`. See [The Echo Area](/docs/elisp/The-Echo-Area).

*   When you encounter an error condition, call the function `error` (or `signal`). The function `error` does not return. See [Signaling Errors](/docs/elisp/Signaling-Errors).

    Don’t use `message`, `throw`, `sleep-for`, or `beep` to report errors.

*   An error message should start with a capital letter but should not end with a period.

*   A question asked in the minibuffer with `yes-or-no-p` or `y-or-n-p` should start with a capital letter and end with ‘`? `’.

*   When you mention a default value in a minibuffer prompt, put it and the word ‘`default`’ inside parentheses. It should look like this:

    ```lisp
    Enter the answer (default 42):
    ```

*   In `interactive`, if you use a Lisp expression to produce a list of arguments, don’t try to provide the correct default values for region or position arguments. Instead, provide `nil` for those arguments if they were not specified, and have the function body compute the default value when the argument is `nil`. For instance, write this:

    ```lisp
    (defun foo (pos)
      (interactive
       (list (if specified specified-pos)))
      (unless pos (setq pos default-pos))
      ...)
    ```

    rather than this:

    ```lisp
    (defun foo (pos)
      (interactive
       (list (if specified specified-pos
                 default-pos)))
      ...)
    ```

    This is so that repetition of the command will recompute these defaults based on the current circumstances.

    You do not need to take such precautions when you use interactive specs ‘`d`’, ‘`m`’ and ‘`r`’, because they make special arrangements to recompute the argument values on repetition of the command.

*   Many commands that take a long time to execute display a message that says something like ‘`Operating...`’ when they start, and change it to ‘`Operating...done`’ when they finish. Please keep the style of these messages uniform: *no* space around the ellipsis, and *no* period after ‘`done`’. See [Progress](/docs/elisp/Progress), for an easy way to generate such messages.

*   Try to avoid using recursive edits. Instead, do what the Rmail `e` command does: use a new local keymap that contains a command defined to switch back to the old local keymap. Or simply switch to another buffer and let the user switch back at will. See [Recursive Editing](/docs/elisp/Recursive-Editing).
