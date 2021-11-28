---
slug: Action-Arguments
---

Here is a table of action arguments:

### ‘`file`’

### ‘`--file=file`’

### ‘`--find-file=file`’

### ‘`--visit=file`’

Visit the specified `file`. See [Visiting](Visiting).

When Emacs starts up, it displays the startup buffer in one window, and the buffer visiting `file` in another window (see [Windows](Windows)). If you supply more than one file argument, the displayed file is the last one specified on the command line; the other files are visited but their buffers are not shown.

If the startup buffer is disabled (see [Entering Emacs](Entering-Emacs)), then starting Emacs with one file argument displays the buffer visiting `file` in a single window. With two file arguments, Emacs displays the files in two different windows. With more than two file arguments, Emacs displays the last file specified in one window, plus another window with a Buffer Menu showing all the other files (see [Several Buffers](Several-Buffers)). To inhibit using the Buffer Menu for this, change the variable `inhibit-startup-buffer-menu` to `t`.

### ‘`+linenum file`’

Visit the specified `file`, then go to line number `linenum` in it.

### ‘`+linenum:columnnum file`’

Visit the specified `file`, then go to line number `linenum` and put point at column number `columnnum`.

### ‘`-l file`’

### ‘`--load=file`’

Load a Lisp library named `file` with the function `load`. If `file` is not an absolute file name, Emacs first looks for it in the current directory, then in the directories listed in `load-path` (see [Lisp Libraries](Lisp-Libraries)).

**Warning:** If previous command-line arguments have visited files, the current directory is the directory of the last file visited.

### ‘`-L dir`’

### ‘`--directory=dir`’

Prepend directory `dir` to the variable `load-path`. If you specify multiple ‘`-L`’ options, Emacs preserves the relative order; i.e., using ‘`-L /foo -L /bar`’ results in a `load-path` of the form `("/foo" "/bar" …)`. If `dir` begins with ‘`:`’, Emacs removes the ‘`:`’ and appends (rather than prepends) the remainder to `load-path`. (On MS Windows, use ‘`;`’ instead of ‘`:`’; i.e., use the value of `path-separator`.)

### ‘`-f function`’

### ‘`--funcall=function`’

Call Lisp function `function`. If it is an interactive function (a command), it reads the arguments interactively just as if you had called the same function with a key sequence. Otherwise, it calls the function with no arguments.

### ‘`--eval=expression`’

### ‘`--execute=expression`’

Evaluate Lisp expression `expression`.

### ‘`--insert=file`’

Insert the contents of `file` into the buffer that is current when this command-line argument is processed. Usually, this is the `*scratch*` buffer (see [Lisp Interaction](Lisp-Interaction)), but if arguments earlier on the command line visit files or switch buffers, that might be a different buffer. The effect of this command-line argument is like what `M-x insert-file` does (see [Misc File Ops](Misc-File-Ops)).

### ‘`--kill`’

Exit from Emacs without asking for confirmation.

### ‘`--help`’

Print a usage message listing all available options, then exit successfully.

### ‘`--version`’

Print Emacs version, then exit successfully.
