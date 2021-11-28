---
slug: User-Input
---

GNU Emacs is primarily designed for use with the keyboard. While it is possible to use the mouse to issue editing commands through the menu bar and tool bar, that is not as efficient as using the keyboard. Therefore, this manual mainly documents how to edit with the keyboard.

Keyboard input into Emacs is based on a heavily-extended version of ASCII. Simple characters, like ‘`a`’, ‘`B`’, ‘`3`’, ‘`=`’, and the space character (denoted as `SPC`), are entered by typing the corresponding key. *Control characters*, such as `RET`, `TAB`, `DEL`, `ESC`, `F1`, `Home`, and `LEFT`, are also entered this way, as are certain characters found on non-English keyboards (see [International](/docs/emacs/International)).

Emacs also recognizes control characters that are entered using *modifier keys*. Two commonly-used modifier keys are `Control` (usually labeled `Ctrl`), and `Meta` (usually labeled `Alt`)[^1]. For example, `Control-a` is entered by holding down the `Ctrl` key while pressing `a`; we will refer to this as `C-a` for short. Similarly, `Meta-a`, or `M-a` for short, is entered by holding down the `Alt` key and pressing `a`. Modifier keys can also be applied to non-alphanumerical characters, e.g., `C-F1` or `M-LEFT`.

You can also type Meta characters using two-character sequences starting with `ESC`. Thus, you can enter `M-a` by typing `ESC a`. You can enter `C-M-a` (holding down both `Ctrl` and `Alt`, then pressing `a`) by typing `ESC C-a`. Unlike `Meta`, `ESC` is entered as a separate character. You don’t hold down `ESC` while typing the next character; instead, press `ESC` and release it, then enter the next character. This feature is useful on certain text terminals where the `Meta` key does not function reliably.

Emacs supports 3 additional modifier keys, see [Modifier Keys](/docs/emacs/Modifier-Keys).

On graphical displays, the window manager might block some keyboard inputs, including `M-TAB`, `M-SPC`, `C-M-d` and `C-M-l`. If you have this problem, you can either customize your window manager to not block those keys, or rebind the affected Emacs commands (see [Customization](/docs/emacs/Customization)).

Simple characters and control characters, as well as certain non-keyboard inputs such as mouse clicks, are collectively referred to as *input events*. For details about how Emacs internally handles input events, see [Input Events](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Input-Events) in The Emacs Lisp Reference Manual.

[^1]: We refer to `Alt` as `Meta` for historical reasons.
