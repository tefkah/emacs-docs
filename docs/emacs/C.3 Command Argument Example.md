---
slug: Command-Example
---

Here is an example of using Emacs with arguments and options. It assumes you have a Lisp program file called `hack-c.el` which, when loaded, performs some useful operation on the current buffer, expected to be a C program.

```lisp
emacs --batch foo.c -l hack-c -f save-buffer >& log
```

This says to visit `foo.c`, load `hack-c.el` (which makes changes in the visited file), save `foo.c` (note that `save-buffer` is the function that `C-x C-s` is bound to), and then exit back to the shell (because of ‘`--batch`’). ‘`--batch`’ also guarantees there will be no problem redirecting output to `log`, because Emacs will not assume that it has a display terminal to work with.
