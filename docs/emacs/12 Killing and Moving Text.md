---
slug: Killing
---

In Emacs, *killing* means erasing text and copying it into the *kill ring*. *Yanking* means bringing text from the kill ring back into the buffer. (Some applications use the terms “cutting" and “pasting" for similar operations.) The kill ring is so-named because it can be visualized as a set of blocks of text arranged in a ring, which you can access in cyclic order. See [Kill Ring](/docs/emacs/Kill-Ring).

Killing and yanking are the most common way to move or copy text within Emacs. It is very versatile, because there are commands for killing many different types of syntactic units.

|                                                            |    |                                                 |
| :--------------------------------------------------------- | -- | :---------------------------------------------- |
| • [Deletion and Killing](/docs/emacs/Deletion-and-Killing) |    | Commands that remove text.                      |
| • [Yanking](/docs/emacs/Yanking)                           |    | Commands that insert text.                      |
| • [Cut and Paste](/docs/emacs/Cut-and-Paste)               |    | Clipboard and selections on graphical displays. |
| • [Accumulating Text](/docs/emacs/Accumulating-Text)       |    | Other methods to add text to the buffer.        |
| • [Rectangles](/docs/emacs/Rectangles)                     |    | Operating on text in rectangular areas.         |
| • [CUA Bindings](/docs/emacs/CUA-Bindings)                 |    | Using `C-x`/`C-c`/`C-v` to kill and yank.       |
