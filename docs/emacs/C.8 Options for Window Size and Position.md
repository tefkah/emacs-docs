---
slug: Window-Size-X
---

Here is a list of the command-line options for specifying size and position of the initial Emacs frame:

### ‘`-g widthxheight[{+-}xoffset{+-}yoffset]]`’

### ‘`--geometry=widthxheight[{+-}xoffset{+-}yoffset]]`’

Specify the size `width` and `height` (measured in character columns and lines), and positions `xoffset` and `yoffset` (measured in pixels). The `width` and `height` parameters apply to all frames, whereas `xoffset` and `yoffset` only to the initial frame.

### ‘`-fs`’

### ‘`--fullscreen`’

Specify that width and height should be that of the screen. Normally no window manager decorations are shown. (After starting Emacs, you can toggle this state using `F11`, `toggle-frame-fullscreen`.)

### ‘`-mm`’

### ‘`--maximized`’

Specify that the Emacs frame should be maximized. This normally means that the frame has window manager decorations. (After starting Emacs, you can toggle this state using `M-F10`, `toggle-frame-maximized`.)

### ‘`-fh`’

### ‘`--fullheight`’

Specify that the height should be the height of the screen.

### ‘`-fw`’

### ‘`--fullwidth`’

Specify that the width should be the width of the screen.

In the ‘`--geometry`’ option, `{+-}` means either a plus sign or a minus sign. A plus sign before `xoffset` means it is the distance from the left side of the screen; a minus sign means it counts from the right side. A plus sign before `yoffset` means it is the distance from the top of the screen, and a minus sign there indicates the distance from the bottom. The values `xoffset` and `yoffset` may themselves be positive or negative, but that doesn’t change their meaning, only their direction.

Emacs uses the same units as `xterm` does to interpret the geometry. The `width` and `height` are measured in characters, so a large font creates a larger frame than a small font. (If you specify a proportional font, Emacs uses its maximum bounds width as the width unit.) The `xoffset` and `yoffset` are measured in pixels.

You do not have to specify all of the fields in the geometry specification. If you omit both `xoffset` and `yoffset`, the window manager decides where to put the Emacs frame, possibly by letting you place it with the mouse. For example, ‘`164x55`’ specifies a window 164 columns wide, enough for two ordinary width windows side by side, and 55 lines tall.

The default frame width is 80 characters and the default height is between 35 and 40 lines, depending on the OS and the window manager. You can omit either the width or the height or both. If you start the geometry with an integer, Emacs interprets it as the width. If you start with an ‘`x`’ followed by an integer, Emacs interprets it as the height. Thus, ‘`81`’ specifies just the width; ‘`x45`’ specifies just the height.

If you start the geometry with ‘`+`’ or ‘`-`’, that introduces an offset, which means both sizes are omitted. Thus, ‘`-3`’ specifies the `xoffset` only. (If you give just one offset, it is always `xoffset`.) ‘`+3-3`’ specifies both the `xoffset` and the `yoffset`, placing the frame near the bottom left of the screen.

You can specify a default for any or all of the fields in your X resource file (see [Resources](Resources)), and then override selected fields with a ‘`--geometry`’ option.

Since the mode line and the echo area occupy the last 2 lines of the frame, the height of the initial text window is 2 less than the height specified in your geometry. In non-X-toolkit versions of Emacs, the menu bar also takes one line of the specified number. But in the X toolkit version, the menu bar is additional and does not count against the specified height. The tool bar, if present, is also additional.

Enabling or disabling the menu bar or tool bar alters the amount of space available for ordinary text. Therefore, if Emacs starts up with a tool bar (which is the default), and handles the geometry specification assuming there is a tool bar, and then your initialization file disables the tool bar, you will end up with a frame geometry different from what you asked for. To get the intended size with no tool bar, use an X resource to specify “no tool bar" (see [Table of Resources](Table-of-Resources)); then Emacs will already know there’s no tool bar when it processes the specified geometry.

When using one of ‘`--fullscreen`’, ‘`--maximized`’, ‘`--fullwidth`’ or ‘`--fullheight`’, some window managers require you to set the variable `frame-resize-pixelwise` to a non-`nil` value to make a frame appear truly maximized or full-screen.

Some window managers have options that can make them ignore both program-specified and user-specified positions. If these are set, Emacs fails to position the window correctly.
