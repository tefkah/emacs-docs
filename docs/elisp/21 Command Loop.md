---
slug: Command-Loop
---

When you run Emacs, it enters the *editor command loop* almost immediately. This loop reads key sequences, executes their definitions, and displays the results. In this chapter, we describe how these things are done, and the subroutines that allow Lisp programs to do them.

|                                                        |    |                                                           |
| :----------------------------------------------------- | -- | :-------------------------------------------------------- |
| • [Command Overview](Command-Overview)                 |    | How the command loop reads commands.                      |
| • [Defining Commands](Defining-Commands)               |    | Specifying how a function should read arguments.          |
| • [Interactive Call](Interactive-Call)                 |    | Calling a command, so that it will read arguments.        |
| • [Distinguish Interactive](Distinguish-Interactive)   |    | Making a command distinguish interactive calls.           |
| • [Command Loop Info](Command-Loop-Info)               |    | Variables set by the command loop for you to examine.     |
| • [Adjusting Point](Adjusting-Point)                   |    | Adjustment of point after a command.                      |
| • [Input Events](Input-Events)                         |    | What input looks like when you read it.                   |
| • [Reading Input](Reading-Input)                       |    | How to read input events from the keyboard or mouse.      |
| • [Special Events](Special-Events)                     |    | Events processed immediately and individually.            |
| • [Waiting](Waiting)                                   |    | Waiting for user input or elapsed time.                   |
| • [Quitting](Quitting)                                 |    | How `C-g` works. How to catch or defer quitting.          |
| • [Prefix Command Arguments](Prefix-Command-Arguments) |    | How the commands to set prefix args work.                 |
| • [Recursive Editing](Recursive-Editing)               |    | Entering a recursive edit, and why you usually shouldn’t. |
| • [Disabling Commands](Disabling-Commands)             |    | How the command loop handles disabled commands.           |
| • [Command History](Command-History)                   |    | How the command history is set up, and how accessed.      |
| • [Keyboard Macros](Keyboard-Macros)                   |    | How keyboard macros are implemented.                      |
