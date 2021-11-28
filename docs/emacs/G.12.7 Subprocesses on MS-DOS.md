---
slug: MS_002dDOS-Processes
---

Because MS-DOS is a single-process “operating system", asynchronous subprocesses are not available. In particular, Shell mode and its variants do not work. Most Emacs features that use asynchronous subprocesses also don’t work on MS-DOS, including Shell mode and GUD. When in doubt, try and see; commands that don’t work output an error message saying that asynchronous processes aren’t supported.

Compilation under Emacs with `M-x compile`, searching files with `M-x grep` and displaying differences between files with `M-x diff` do work, by running the inferior processes synchronously. This means you cannot do any more editing until the inferior process finishes.

Spell checking also works, by means of special support for synchronous invocation of the `ispell` program. This is slower than the asynchronous invocation on other platforms.

Instead of the Shell mode, which doesn’t work on MS-DOS, you can use the `M-x eshell` command. This invokes the Eshell package that implements a POSIX-like shell entirely in Emacs Lisp.

By contrast, Emacs compiled as a native Windows application **does** support asynchronous subprocesses. See [Windows Processes](/docs/emacs/Windows-Processes).

Printing commands, such as `lpr-buffer` (see [Printing](/docs/emacs/Printing)) and `ps-print-buffer` (see [PostScript](/docs/emacs/PostScript)), work in MS-DOS by sending the output to one of the printer ports. See [MS-DOS Printing](/docs/emacs/MS_002dDOS-Printing).

When you run a subprocess synchronously on MS-DOS, make sure the program terminates and does not try to read keyboard input. If the program does not terminate on its own, you will be unable to terminate it, because MS-DOS provides no general way to terminate a process. Pressing `C-c` or `C-Break` might sometimes help in these cases.

Accessing files on other machines is not supported on MS-DOS. Other network-oriented commands such as sending mail, Web browsing, remote login, etc., don’t work either, unless network access is built into MS-DOS with some network redirector.

Dired on MS-DOS uses the `ls-lisp` package (see [ls in Lisp](/docs/emacs/ls-in-Lisp)). Therefore, Dired on MS-DOS supports only some of the possible options you can mention in the `dired-listing-switches` variable. The options that work are ‘`-A`’, ‘`-a`’, ‘`-c`’, ‘`-i`’, ‘`-r`’, ‘`-S`’, ‘`-s`’, ‘`-t`’, and ‘`-u`’.
