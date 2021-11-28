---
slug: Minibuffers
---

A *minibuffer* is a special buffer that Emacs commands use to read arguments more complicated than the single numeric prefix argument. These arguments include file names, buffer names, and command names (as in `M-x`). The minibuffer is displayed on the bottom line of the frame, in the same place as the echo area (see [The Echo Area](The-Echo-Area)), but only while it is in use for reading an argument.

|                                                    |    |                                                                  |
| :------------------------------------------------- | -- | :--------------------------------------------------------------- |
| • [Intro to Minibuffers](Intro-to-Minibuffers)     |    | Basic information about minibuffers.                             |
| • [Text from Minibuffer](Text-from-Minibuffer)     |    | How to read a straight text string.                              |
| • [Object from Minibuffer](Object-from-Minibuffer) |    | How to read a Lisp object or expression.                         |
| • [Minibuffer History](Minibuffer-History)         |    | Recording previous minibuffer inputs so the user can reuse them. |
| • [Initial Input](Initial-Input)                   |    | Specifying initial contents for the minibuffer.                  |
| • [Completion](Completion)                         |    | How to invoke and customize completion.                          |
| • [Yes-or-No Queries](Yes_002dor_002dNo-Queries)   |    | Asking a question with a simple answer.                          |
| • [Multiple Queries](Multiple-Queries)             |    | Asking complex questions.                                        |
| • [Reading a Password](Reading-a-Password)         |    | Reading a password from the terminal.                            |
| • [Minibuffer Commands](Minibuffer-Commands)       |    | Commands used as key bindings in minibuffers.                    |
| • [Minibuffer Windows](Minibuffer-Windows)         |    | Operating on the special minibuffer windows.                     |
| • [Minibuffer Contents](Minibuffer-Contents)       |    | How such commands access the minibuffer text.                    |
| • [Recursive Mini](Recursive-Mini)                 |    | Whether recursive entry to minibuffer is allowed.                |
| • [Minibuffer Misc](Minibuffer-Misc)               |    | Various customization hooks and variables.                       |
