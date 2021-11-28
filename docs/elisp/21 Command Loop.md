---
slug: Command-Loop
---

When you run Emacs, it enters the *editor command loop* almost immediately. This loop reads key sequences, executes their definitions, and displays the results. In this chapter, we describe how these things are done, and the subroutines that allow Lisp programs to do them.

|                                                                    |    |                                                           |
| :----------------------------------------------------------------- | -- | :-------------------------------------------------------- |
| • [Command Overview](/docs/elisp/Command-Overview)                 |    | How the command loop reads commands.                      |
| • [Defining Commands](/docs/elisp/Defining-Commands)               |    | Specifying how a function should read arguments.          |
| • [Interactive Call](/docs/elisp/Interactive-Call)                 |    | Calling a command, so that it will read arguments.        |
| • [Distinguish Interactive](/docs/elisp/Distinguish-Interactive)   |    | Making a command distinguish interactive calls.           |
| • [Command Loop Info](/docs/elisp/Command-Loop-Info)               |    | Variables set by the command loop for you to examine.     |
| • [Adjusting Point](/docs/elisp/Adjusting-Point)                   |    | Adjustment of point after a command.                      |
| • [Input Events](/docs/elisp/Input-Events)                         |    | What input looks like when you read it.                   |
| • [Reading Input](/docs/elisp/Reading-Input)                       |    | How to read input events from the keyboard or mouse.      |
| • [Special Events](/docs/elisp/Special-Events)                     |    | Events processed immediately and individually.            |
| • [Waiting](/docs/elisp/Waiting)                                   |    | Waiting for user input or elapsed time.                   |
| • [Quitting](/docs/elisp/Quitting)                                 |    | How `C-g` works. How to catch or defer quitting.          |
| • [Prefix Command Arguments](/docs/elisp/Prefix-Command-Arguments) |    | How the commands to set prefix args work.                 |
| • [Recursive Editing](/docs/elisp/Recursive-Editing)               |    | Entering a recursive edit, and why you usually shouldn’t. |
| • [Disabling Commands](/docs/elisp/Disabling-Commands)             |    | How the command loop handles disabled commands.           |
| • [Command History](/docs/elisp/Command-History)                   |    | How the command history is set up, and how accessed.      |
| • [Keyboard Macros](/docs/elisp/Keyboard-Macros)                   |    | How keyboard macros are implemented.                      |
