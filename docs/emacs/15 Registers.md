---
slug: Registers
---

Emacs *registers* are compartments where you can save text, rectangles, positions, and other things for later use. Once you save text or a rectangle in a register, you can copy it into the buffer once or many times; once you save a position in a register, you can jump back to that position once or many times.

Each register has a name that consists of a single character, which we will denote by *r*; *r* can be a letter (such as '`a`') or a number (such as '`1`'); case matters, so register '`a`' is not the same as register '`A`'. You can also set a register in non-alphanumeric characters, for instance '`C-d`' by using for example `C-q` '`C-d`'.

A register can store a position, a piece of text, a rectangle, a number, a window or frame configuration, a buffer name, or a file name, but only one thing at any given time. Whatever you store in a register remains there until you store something else in that register. To see what register *r* contains, use `M-x view-register`:

### `M-x view-register RET r`

Display a description of what register *r* contains.

All of the commands that prompt for a register will by default display a preview window that lists the existing registers (if there are any) and their current values, after a short delay. This and other aspects of prompting for a register can be customized by setting the value of `register-use-preview`, which can have the following values:

### `traditional`

With this value, which is the default, Emacs behaves like it did in all the versions before Emacs 29: it shows a preview of existing registers after a delay, and lets you overwrite the values of existing registers by typing a single character, the name of the register. The preview appears after the delay determined by the customizable variable `register-preview-delay`, which specifies the delay in seconds; setting it to `nil` disables the preview (but you can still explicitly request a preview window by pressing `C-h` or `F1` when Emacs prompts for a register).

### `t`

This value requests a more flexible preview of existing registers. The preview appears immediately when Emacs prompts for a register (thus `register-preview-delay` has no effect), and the preview window provides navigation: by using `C-n` and `C-p` (or the `UP` and `DOWN` arrow keys), you can move between the registers in the preview window. To overwrite the value of an existing registers in this mode, you need to type `RET` after selecting the register by navigation or typing its name.

In addition, the registers shown by the preview are filtered according to the command that popped the preview: for example, the preview shown by `insert-register` will only show registers whose values can be inserted into the buffer, omitting registers which hold window configurations, positions, and other un-insertable values.

### `insist`

This value is like `t`, but in addition you can press the same key as the name of register one more time to exit the minibuffer, instead of pressing `RET`.

### `nil`

This value requests behavior similar to `traditional`, but the preview is shown without delay, and is filtered according to the command.

### `never`

This value is like `nil`, but it disables the preview.

*Bookmarks* record files and positions in them, so you can return to those positions when you look at the file again. Bookmarks are similar in spirit to registers, so they are also documented in this chapter.
