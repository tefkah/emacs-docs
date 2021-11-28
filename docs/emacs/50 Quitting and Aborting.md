---
slug: Quitting
---

### `C-g`

### `C-Break (MS-DOS only)`

Quit: cancel running or partially typed command.

### `C-]`

Abort innermost recursive editing level and cancel the command which invoked it (`abort-recursive-edit`).

### `ESC ESC ESC`

Either quit or abort, whichever makes sense (`keyboard-escape-quit`).

### `M-x top-level`

Abort all recursive editing levels that are currently executing.

### `C-/`

### `C-x u`

### `C-_`

Cancel a previously made change in the buffer contents (`undo`).

There are two ways of canceling a command before it has finished: *quitting* with `C-g`, and *aborting* with `C-]` or `M-x top-level`. Quitting cancels a partially typed command, or one which is still running. Aborting exits a recursive editing level and cancels the command that invoked the recursive edit (see [Recursive Edit](/docs/emacs/Recursive-Edit)).

Quitting with `C-g` is the way to get rid of a partially typed command, or a numeric argument that you don’t want. Furthermore, if you are in the middle of a command that is running, `C-g` stops the command in a relatively safe way. For example, if you quit out of a kill command that is taking a long time, either your text will *all* still be in the buffer, or it will *all* be in the kill ring, or maybe both. If the region is active, `C-g` deactivates the mark, unless Transient Mark mode is off (see [Disabled Transient Mark](/docs/emacs/Disabled-Transient-Mark)). If you are in the middle of an incremental search, `C-g` behaves specially; it may take two successive `C-g` characters to get out of a search. See [Incremental Search](/docs/emacs/Incremental-Search), for details.

On MS-DOS, the character `C-Break` serves as a quit character like `C-g`. The reason is that it is not feasible, on MS-DOS, to recognize `C-g` while a command is running, between interactions with the user. By contrast, it *is* feasible to recognize `C-Break` at all times. See [MS-DOS Keyboard](/docs/emacs/MS_002dDOS-Keyboard).

`C-g` works by setting the variable `quit-flag` to `t` the instant `C-g` is typed; Emacs Lisp checks this variable frequently, and quits if it is non-`nil`. `C-g` is only actually executed as a command if you type it while Emacs is waiting for input. In that case, the command it runs is `keyboard-quit`.

On a text terminal, if you quit with `C-g` a second time before the first `C-g` is recognized, you activate the emergency-escape feature and return to the shell. See [Emergency Escape](/docs/emacs/Emergency-Escape).

There are some situations where you cannot quit. When Emacs is waiting for the operating system to do something, quitting is impossible unless special pains are taken for the particular system call within Emacs where the waiting occurs. We have done this for the system calls that users are likely to want to quit from, but it’s possible you will encounter a case not handled. In one very common case—waiting for file input or output using NFS—Emacs itself knows how to quit, but many NFS implementations simply do not allow user programs to stop waiting for NFS when the NFS server is hung.

Aborting with `C-]` (`abort-recursive-edit`) is used to get out of a recursive editing level and cancel the command which invoked it. Quitting with `C-g` does not do this, and could not do this, because it is used to cancel a partially typed command *within* the recursive editing level. Both operations are useful. For example, if you are in a recursive edit and type `C-u 8` to enter a numeric argument, you can cancel that argument with `C-g` and remain in the recursive edit.

The sequence `ESC ESC ESC` (`keyboard-escape-quit`) can either quit or abort. (We defined it this way because `ESC` means “get out" in many PC programs.) It can cancel a prefix argument, clear a selected region, or get out of a Query Replace, like `C-g`. It can get out of the minibuffer or a recursive edit, like `C-]`. It can also get out of splitting the frame into multiple windows, as with `C-x 1`. One thing it cannot do, however, is stop a command that is running. That’s because it executes as an ordinary command, and Emacs doesn’t notice it until it is ready for the next command.

The command `M-x top-level` is equivalent to enough `C-]` commands to get you out of all the levels of recursive edits that you are in; it also exits the minibuffer if it is active. `C-]` gets you out one level at a time, but `M-x top-level` goes out all levels at once. Both `C-]` and `M-x top-level` are like all other commands, and unlike `C-g`, in that they take effect only when Emacs is ready for a command. `C-]` is an ordinary key and has its meaning only because of its binding in the keymap. See [Recursive Edit](/docs/emacs/Recursive-Edit).

`C-/` (`undo`) is not strictly speaking a way of canceling a command, but you can think of it as canceling a command that already finished executing. See [Undo](/docs/emacs/Undo), for more information about the undo facility.
