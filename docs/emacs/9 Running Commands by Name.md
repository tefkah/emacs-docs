---
slug: M_002dx
---

Every Emacs command has a name that you can use to run it. For convenience, many commands also have key bindings. You can run those commands by typing the keys, or run them by name. Most Emacs commands have no key bindings, so the only way to run them is by name. (See [Key Bindings](Key-Bindings), for how to set up key bindings.)

By convention, a command name consists of one or more words, separated by hyphens; for example, `auto-fill-mode` or `manual-entry`. Command names mostly use complete English words to make them easier to remember.

To run a command by name, start with `M-x`, type the command name, then terminate it with `RET`. `M-x` uses the minibuffer to read the command name. The string ‘`M-x`’ appears at the beginning of the minibuffer as a *prompt* to remind you to enter a command name to be run. `RET` exits the minibuffer and runs the command. See [Minibuffer](Minibuffer), for more information on the minibuffer.

You can use completion to enter the command name. For example, to invoke the command `forward-char`, you can type

```lisp
M-x forward-char RET
```

or

```lisp
M-x forw TAB c RET
```

Note that `forward-char` is the same command that you invoke with the key `C-f`. The existence of a key binding does not stop you from running the command by name.

When `M-x` completes on commands, it ignores the commands that are declared *obsolete*; for these, you will have to type their full name. Obsolete commands are those for which newer, better alternatives exist, and which are slated for removal in some future Emacs release.

To cancel the `M-x` and not run a command, type `C-g` instead of entering the command name. This takes you back to command level.

To pass a numeric argument to the command you are invoking with `M-x`, specify the numeric argument before `M-x`. The argument value appears in the prompt while the command name is being read, and finally `M-x` passes the argument to that command. For example, to pass the numeric argument of 42 to the command `forward-char` you can type `C-u 42 M-x forward-char RET`.

When the command you run with `M-x` has a key binding, Emacs mentions this in the echo area after running the command. For example, if you type `M-x forward-word`, the message says that you can run the same command by typing `M-f`. You can turn off these messages by setting the variable `suggest-key-bindings` to `nil`. The value of `suggest-key-bindings` can also be a number, in which case Emacs will show the binding for that many seconds before removing it from display. The default behavior is to display the binding for 2 seconds.

Commands that don’t have key bindings, can still be invoked after typing less than their full name at the ‘`M-x`’ prompt. Emacs mentions such shorthands in the echo area if they are significantly shorter than the full command name, and `extended-command-suggest-shorter` is non-`nil`. The setting of `suggest-key-bindings` affects these hints as well.

In this manual, when we speak of running a command by name, we often omit the `RET` that terminates the name. Thus we might say `M-x auto-fill-mode` rather than `M-x auto-fill-mode RET`<!-- /@w -->. We mention the `RET` only for emphasis, such as when the command is followed by arguments.

`M-x` works by running the command `execute-extended-command`, which is responsible for reading the name of another command and invoking it.
