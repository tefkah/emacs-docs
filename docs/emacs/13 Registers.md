---
slug: Registers
---

Emacs *registers* are compartments where you can save text, rectangles, positions, and other things for later use. Once you save text or a rectangle in a register, you can copy it into the buffer once or many times; once you save a position in a register, you can jump back to that position once or many times.

Each register has a name that consists of a single character, which we will denote by `r`; `r` can be a letter (such as ‘`a`’) or a number (such as ‘`1`’); case matters, so register ‘`a`’ is not the same as register ‘`A`’. You can also set a register in non-alphanumeric characters, for instance ‘`*`’ or ‘`C-d`’. Note, it’s not possible to set a register in ‘`C-g`’ or ‘`ESC`’, because these keys are reserved for quitting (see [Quitting](Quitting)).

A register can store a position, a piece of text, a rectangle, a number, a window configuration, or a file name, but only one thing at any given time. Whatever you store in a register remains there until you store something else in that register. To see what register `r` contains, use `M-x view-register`:

### `M-x view-register RET r`

Display a description of what register `r` contains.

All of the commands that prompt for a register will display a preview window that lists the existing registers (if there are any) after a short delay. To change the length of the delay, customize `register-preview-delay`. To prevent this display, set that option to `nil`. You can explicitly request a preview window by pressing `C-h` or `F1`.

*Bookmarks* record files and positions in them, so you can return to those positions when you look at the file again. Bookmarks are similar in spirit to registers, so they are also documented in this chapter.

|                                                        |    |                                               |
| :----------------------------------------------------- | -- | :-------------------------------------------- |
| • [Position Registers](Position-Registers)             |    | Saving positions in registers.                |
| • [Text Registers](Text-Registers)                     |    | Saving text in registers.                     |
| • [Rectangle Registers](Rectangle-Registers)           |    | Saving rectangles in registers.               |
| • [Configuration Registers](Configuration-Registers)   |    | Saving window configurations in registers.    |
| • [Number Registers](Number-Registers)                 |    | Numbers in registers.                         |
| • [File Registers](File-Registers)                     |    | File names in registers.                      |
| • [Keyboard Macro Registers](Keyboard-Macro-Registers) |    | Keyboard macros in registers.                 |
| • [Bookmarks](Bookmarks)                               |    | Bookmarks are like registers, but persistent. |
