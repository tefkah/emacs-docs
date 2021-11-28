---
slug: MS_002dDOS-Mouse
---

Emacs on MS-DOS supports a mouse (on the default terminal only). The mouse commands work as documented, including those that use menus and the menu bar (see [Menu Bar](/docs/emacs/Menu-Bar)). Scroll bars don’t work in MS-DOS Emacs. PC mice usually have only two buttons; these act as `mouse-1` and `mouse-2`, but if you press both of them together, that has the effect of `mouse-3`. If the mouse does have 3 buttons, Emacs detects that at startup, and all the 3 buttons function normally, as on X.

Help strings for menu-bar and pop-up menus are displayed in the echo area when the mouse pointer moves across the menu items. Highlighting of mouse-sensitive text (see [Mouse References](/docs/emacs/Mouse-References)) is also supported.

Some versions of mouse drivers don’t report the number of mouse buttons correctly. For example, mice with a wheel report that they have 3 buttons, but only 2 of them are passed to Emacs; the clicks on the wheel, which serves as the middle button, are not passed. In these cases, you can use the `M-x msdos-set-mouse-buttons` command to tell Emacs how many mouse buttons to expect. You could make such a setting permanent by adding this fragment to your `_emacs` init file:

```lisp
;; Treat the mouse like a 2-button mouse.
(msdos-set-mouse-buttons 2)
```

Emacs built for MS-DOS supports clipboard operations when it runs on Windows. Commands that put text on the kill ring, or yank text from the ring, check the Windows clipboard first, just as Emacs does on the X Window System (see [Mouse Commands](/docs/emacs/Mouse-Commands)). Only the primary selection and the cut buffer are supported by MS-DOS Emacs on Windows; the secondary selection always appears as empty.

Due to the way clipboard access is implemented by Windows, the length of text you can put into the clipboard is limited by the amount of free DOS memory that is available to Emacs. Usually, up to 620KB of text can be put into the clipboard, but this limit depends on the system configuration and is lower if you run Emacs as a subprocess of another program. If the killed text does not fit, Emacs outputs a message saying so, and does not put the text into the clipboard.

Null characters also cannot be put into the Windows clipboard. If the killed text includes null characters, Emacs does not put such text into the clipboard, and displays in the echo area a message to that effect.

The variable `dos-display-scancodes`, when non-`nil`, directs Emacs to display the ASCII value and the keyboard scan code of each keystroke; this feature serves as a complement to the `view-lossage` command, for debugging.
