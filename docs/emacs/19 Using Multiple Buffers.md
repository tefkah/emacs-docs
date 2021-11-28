---
slug: Buffers
---

The text you are editing in Emacs resides in an object called a *buffer*. Each time you visit a file, a buffer is used to hold the file’s text. Each time you invoke Dired, a buffer is used to hold the directory listing. If you send a message with `C-x m`, a buffer is used to hold the text of the message. When you ask for a command’s documentation, that appears in a buffer named `*Help*`.

Buffers exist as long as they are in use, and are deleted (“killed") when no longer needed, either by you (see [Kill Buffer](Kill-Buffer)) or by Emacs (e.g., when you exit Emacs, see [Exiting](Exiting)).

Each buffer has a unique name, which can be of any length. When a buffer is displayed in a window, its name is shown in the mode line (see [Mode Line](Mode-Line)). The distinction between upper and lower case matters in buffer names. Most buffers are made by visiting files, and their names are derived from the files’ names; however, you can also create an empty buffer with any name you want. A newly started Emacs has several buffers, including one named `*scratch*`, which can be used for evaluating Lisp expressions and is not associated with any file (see [Lisp Interaction](Lisp-Interaction)).

At any time, one and only one buffer is *selected*; we call it the *current buffer*. We sometimes say that a command operates on “the buffer"; this really means that it operates on the current buffer. When there is only one Emacs window, the buffer displayed in that window is current. When there are multiple windows, the buffer displayed in the *selected window* is current. See [Windows](Windows).

A buffer’s *contents* consist of a series of characters, each of which optionally carries a set of text properties (see [Text properties](International-Chars)) that can specify more information about that character.

Aside from its textual contents, each buffer records several pieces of information, such as what file it is visiting (if any), whether it is modified, and what major mode and minor modes are in effect (see [Modes](Modes)). These are stored in *buffer-local variables*—variables that can have a different value in each buffer. See [Locals](Locals).

A buffer’s size cannot be larger than some maximum, which is defined by the largest buffer position representable by *Emacs integers*. This is because Emacs tracks buffer positions using that data type. For typical 64-bit machines, this maximum buffer size is *2^\{61} - 2* bytes, or about 2 EiB. For typical 32-bit machines, the maximum is usually *2^\{29} - 2* bytes, or about 512 MiB. Buffer sizes are also limited by the amount of memory in the system.

|                                            |    |                                                                                     |
| :----------------------------------------- | -- | :---------------------------------------------------------------------------------- |
| • [Select Buffer](Select-Buffer)           |    | Creating a new buffer or reselecting an old one.                                    |
| • [List Buffers](List-Buffers)             |    | Getting a list of buffers that exist.                                               |
| • [Misc Buffer](Misc-Buffer)               |    | Renaming; changing read-only status; copying text.                                  |
| • [Kill Buffer](Kill-Buffer)               |    | Killing buffers you no longer need.                                                 |
| • [Several Buffers](Several-Buffers)       |    | How to go through the list of all buffers and operate variously on several of them. |
| • [Indirect Buffers](Indirect-Buffers)     |    | An indirect buffer shares the text of another buffer.                               |
| • [Buffer Convenience](Buffer-Convenience) |    | Convenience and customization features for buffer handling.                         |
