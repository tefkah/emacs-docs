---
slug: Colors-X
---

You can use the following command-line options to specify the colors to use for various parts of the Emacs display. Colors may be specified using either color names or RGB triplets (see [Colors](/docs/emacs/Colors)).

### ‘`-fg color`’

### ‘`--foreground-color=color`’

Specify the foreground color, overriding the color specified by the `default` face (see [Faces](/docs/emacs/Faces)).

### ‘`-bg color`’

### ‘`--background-color=color`’

Specify the background color, overriding the color specified by the `default` face.

### ‘`-bd color`’

### ‘`--border-color=color`’

Specify the color of the border of the X window. This has no effect if Emacs is compiled with GTK+ support.

### ‘`-cr color`’

### ‘`--cursor-color=color`’

Specify the color of the Emacs cursor which indicates where point is.

### ‘`-ms color`’

### ‘`--mouse-color=color`’

Specify the color for the mouse cursor when the mouse is in the Emacs window.

### ‘`-r`’

### ‘`-rv`’

### ‘`--reverse-video`’

Reverse video: swap the foreground and background colors.

### ‘`--color=mode`’

Set the *color support mode* when Emacs is run on a text terminal. This option overrides the number of supported colors that the character terminal advertises in its `termcap` or `terminfo` database. The parameter `mode` can be one of the following:

### ‘`never`’

### ‘`no`’

Don’t use colors even if the terminal’s capabilities specify color support.

### ‘`default`’

### ‘`auto`’

Same as when `--color` is not used at all: Emacs detects at startup whether the terminal supports colors, and if it does, turns on colored display.

### ‘`always`’

### ‘`yes`’

### ‘`ansi8`’

Turn on the color support unconditionally, and use color commands specified by the ANSI escape sequences for the 8 standard colors.

### ‘`num`’

Use color mode for `num` colors. If `num` is -1, turn off color support (equivalent to ‘`never`’); if it is 0, use the default color support for this terminal (equivalent to ‘`auto`’); otherwise use an appropriate standard mode for `num` colors. Depending on your terminal’s capabilities, Emacs might be able to turn on a color mode for 8, 16, 88, or 256 as the value of `num`. If there is no mode that supports `num` colors, Emacs acts as if `num` were 0, i.e., it uses the terminal’s default color support mode.

If `mode` is omitted, it defaults to `ansi8`.

For example, to use a coral mouse cursor and a slate blue text cursor, enter:

```lisp
emacs -ms coral -cr 'slate blue' &
```

You can reverse the foreground and background colors through the ‘`-rv`’ option or with the X resource ‘`reverseVideo`’.

The ‘`-fg`’, ‘`-bg`’, and ‘`-rv`’ options function on text terminals as well as on graphical displays.
