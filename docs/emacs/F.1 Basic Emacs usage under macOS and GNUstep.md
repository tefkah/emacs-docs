---
slug: Mac-_002f-GNUstep-Basics
---

By default, the `Alt` and `Option` keys are the same as `Meta`. The Mac `Cmd` key is the same as `Super`, and Emacs provides a set of key bindings using this modifier key that mimic other Mac / GNUstep applications (see [Windowing System Events under macOS / GNUstep](/docs/emacs/Mac-_002f-GNUstep-Events)). You can change these bindings in the usual way (see [Customizing Key Bindings](/docs/emacs/Key-Bindings)). The modifiers themselves can be customized; see [Mac / GNUstep Customization](/docs/emacs/Mac-_002f-GNUstep-Customization).

`S-mouse-1` adjusts the region to the click position, just like `mouse-3` (`mouse-save-then-kill`); it does not pop up a menu for changing the default face, as `S-mouse-1` normally does (see [Text Scale](/docs/emacs/Text-Scale)). This change makes Emacs behave more like other Mac / GNUstep applications.

When you open or save files using the menus, or using the `Cmd-o` and `Cmd-S` bindings, Emacs uses graphical file dialogs to read file names. However, if you use the regular Emacs key sequences, such as `C-x C-f`, Emacs uses the minibuffer to read file names.

On GNUstep, in an X-windows environment you need to use `Cmd-c` instead of one of the `C-w` or `M-w` commands to transfer text to the X primary selection; otherwise, Emacs will use the clipboard selection. Likewise, `Cmd-y` (instead of `C-y`) yanks from the X primary selection instead of the kill-ring or clipboard.
