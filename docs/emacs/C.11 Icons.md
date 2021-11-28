---
slug: Icons-X
---

### ‘`-iconic`’

### ‘`--iconic`’

Start Emacs in an iconified state.

### ‘`-nbi`’

### ‘`--no-bitmap-icon`’

Disable the use of the Emacs icon.

Most window managers allow you to iconify (or “minimize") an Emacs frame, hiding it from sight. Some window managers replace iconified windows with tiny icons, while others remove them entirely from sight. The ‘`-iconic`’ option tells Emacs to begin running in an iconified state, rather than showing a frame right away. The text frame doesn’t appear until you deiconify (or “un-minimize") it.

By default, Emacs uses an icon containing the Emacs logo. On desktop environments such as Gnome, this icon is also displayed in other contexts, e.g., when switching into an Emacs frame. The ‘`-nbi`’ or ‘`--no-bitmap-icon`’ option tells Emacs to let the window manager choose what sort of icon to use—usually just a small rectangle containing the frame’s title.
