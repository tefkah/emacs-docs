---
slug: Minibuffers
---

A *minibuffer* is a special buffer that Emacs commands use to read arguments more complicated than the single numeric prefix argument. These arguments include file names, buffer names, and command names (as in `M-x`). The minibuffer is displayed on the bottom line of the frame, in the same place as the echo area (see [The Echo Area](/docs/elisp/The-Echo-Area)), but only while it is in use for reading an argument.

|                                                                |    |                                                                  |
| :------------------------------------------------------------- | -- | :--------------------------------------------------------------- |
| • [Intro to Minibuffers](/docs/elisp/Intro-to-Minibuffers)     |    | Basic information about minibuffers.                             |
| • [Text from Minibuffer](/docs/elisp/Text-from-Minibuffer)     |    | How to read a straight text string.                              |
| • [Object from Minibuffer](/docs/elisp/Object-from-Minibuffer) |    | How to read a Lisp object or expression.                         |
| • [Minibuffer History](/docs/elisp/Minibuffer-History)         |    | Recording previous minibuffer inputs so the user can reuse them. |
| • [Initial Input](/docs/elisp/Initial-Input)                   |    | Specifying initial contents for the minibuffer.                  |
| • [Completion](/docs/elisp/Completion)                         |    | How to invoke and customize completion.                          |
| • [Yes-or-No Queries](/docs/elisp/Yes_002dor_002dNo-Queries)   |    | Asking a question with a simple answer.                          |
| • [Multiple Queries](/docs/elisp/Multiple-Queries)             |    | Asking complex questions.                                        |
| • [Reading a Password](/docs/elisp/Reading-a-Password)         |    | Reading a password from the terminal.                            |
| • [Minibuffer Commands](/docs/elisp/Minibuffer-Commands)       |    | Commands used as key bindings in minibuffers.                    |
| • [Minibuffer Windows](/docs/elisp/Minibuffer-Windows)         |    | Operating on the special minibuffer windows.                     |
| • [Minibuffer Contents](/docs/elisp/Minibuffer-Contents)       |    | How such commands access the minibuffer text.                    |
| • [Recursive Mini](/docs/elisp/Recursive-Mini)                 |    | Whether recursive entry to minibuffer is allowed.                |
| • [Minibuffer Misc](/docs/elisp/Minibuffer-Misc)               |    | Various customization hooks and variables.                       |
