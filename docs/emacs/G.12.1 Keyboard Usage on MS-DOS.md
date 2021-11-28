---
slug: MS_002dDOS-Keyboard
---

The key that is called `DEL` in Emacs (because that’s how it is designated on most workstations) is known as `BS` (backspace) on a PC. That is why the PC-specific terminal initialization remaps the `BS` key to act as `DEL`; the `Delete` key is remapped to act as `C-d` for the same reasons.

Emacs built for MS-DOS recognizes `C-Break` as a quit character, just like `C-g`. This is because Emacs cannot detect that you have typed `C-g` until it is ready for more input. As a consequence, you cannot use `C-g` to stop a running command (see [Quitting](Quitting)). By contrast, `C-Break` *is* detected as soon as you type it (as `C-g` is on other systems), so it can be used to stop a running command and for emergency escape (see [Emergency Escape](Emergency-Escape)).

The PC keyboard maps use the left `Alt` key as the `Meta` key. You have two choices for emulating the `SUPER` and `Hyper` keys: choose either the right `Ctrl` key or the right `Alt` key by setting the variables `dos-hyper-key` and `dos-super-key` to 1 or 2 respectively. If neither `dos-super-key` nor `dos-hyper-key` is 1, then by default the right `Alt` key is also mapped to the `Meta` key. However, if the MS-DOS international keyboard support program `KEYB.COM` is installed, Emacs will *not* map the right `Alt` to `Meta`, since it is used for accessing characters like `~` and `@` on non-US keyboard layouts; in this case, you may only use the left `Alt` as `Meta` key.

The variable `dos-keypad-mode` is a flag variable that controls what key codes are returned by keys in the numeric keypad. You can also define the keypad `ENTER` key to act like `C-j`, by putting the following line into your `_emacs` file:

```lisp
;; Make the ENTER key from the numeric keypad act as C-j.
(define-key function-key-map [kp-enter] [?\C-j])
```
