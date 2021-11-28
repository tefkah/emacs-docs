---
slug: Table-of-Resources
---

The table below lists the X resource names that Emacs recognizes. Note that some of the resources have no effect in Emacs compiled with various X toolkits (GTK+, Lucid, etc.)—we indicate below when this is the case.

### `background` (class `Background`)

Background color (see [Colors](Colors)).

### `bitmapIcon` (class `BitmapIcon`)

Tell the window manager to display the Emacs icon if ‘`on`’; don’t do so if ‘`off`’. See [Icons X](Icons-X), for a description of the icon.

### `borderColor` (class `BorderColor`)

Color of the frame’s external border. This has no effect if Emacs is compiled with GTK+ support.

### `borderWidth` (class `BorderWidth`)

Width of the frame’s external border, in pixels. This has no effect if Emacs is compiled with GTK+ support.

### `cursorBlink` (class `CursorBlink`)

If the value of this resource is ‘`off`’ or ‘`false`’ or ‘`0`’ at startup, Emacs disables Blink Cursor mode (see [Cursor Display](Cursor-Display)).

### `cursorColor` (class `Foreground`)

Text cursor color. If this resource is specified when Emacs starts up, Emacs sets its value as the background color of the `cursor` face (see [Faces](Faces)).

### `font` (class `Font`)

Font name for the `default` face (see [Fonts](Fonts)). You can also specify a fontset name (see [Fontsets](Fontsets)).

### `fontBackend` (class `FontBackend`)

Comma-delimited list of backend(s) to use for drawing fonts, in order of precedence. For instance, the value ‘`x,xft`’ tells Emacs to draw fonts using the X core font driver, falling back on the Xft font driver if that fails. Normally, you should leave this resource unset, in which case Emacs tries using all available font backends.

### `foreground` (class `Foreground`)

Default foreground color for text.

### `fullscreen` (class `Fullscreen`)

The desired fullscreen size. The value can be one of `fullboth`, `maximized`, `fullwidth` or `fullheight`, which correspond to the command-line options ‘`-fs`’, ‘`-mm`’, ‘`-fw`’, and ‘`-fh`’ (see [Window Size X](Window-Size-X)). Note that this applies to the initial frame only.

### `geometry` (class `Geometry`)

Window size and position. The value should be a size and position specification, of the same form as in the ‘`-g`’ or ‘`--geometry`’ command-line option (see [Window Size X](Window-Size-X)).

The size applies to all frames in the Emacs session, but the position applies only to the initial Emacs frame (or, in the case of a resource for a specific frame name, only that frame).

Be careful not to specify this resource as ‘`emacs*geometry`’, as that may affect individual menus as well as the main Emacs frame.

### `horizontalScrollBars` (class `ScrollBars`)

If the value of this resource is ‘`off`’ or ‘`false`’ or ‘`0`’, Emacs disables Horizontal Scroll Bar mode at startup (see [Scroll Bars](Scroll-Bars)).

### `iconName` (class `Title`)

Name to display in the icon.

### `internalBorder` (class `BorderWidth`)

Width of the internal frame border, in pixels.

### `lineSpacing` (class `LineSpacing`)

Additional space between lines, in pixels.

### `menuBackground` (class `Background`)

The background color of the menus in non-toolkit versions of Emacs. (For toolkit versions, see [Lucid Resources](Lucid-Resources), also see [Motif Resources](Motif-Resources), and see [GTK resources](GTK-resources).)

### `menuBar` (class `MenuBar`)

If the value of this resource is ‘`off`’ or ‘`false`’ or ‘`0`’, Emacs disables Menu Bar mode at startup (see [Menu Bars](Menu-Bars)).

### `minibuffer` (class `Minibuffer`)

If ‘`none`’, Emacs will not make a minibuffer in this frame; it will use a separate minibuffer frame instead.

### `paneFont` (class `Font`)

Font name for menu pane titles, in non-toolkit versions of Emacs. (For toolkit versions, see [Lucid Resources](Lucid-Resources), also see [Motif Resources](Motif-Resources), and see [GTK resources](GTK-resources).)

### `paneForeground` (class `Foreground`)

Foreground color for menu pane titles, in non-toolkit versions of Emacs. (For toolkit versions, see [Lucid Resources](Lucid-Resources), also see [Motif Resources](Motif-Resources), and see [GTK resources](GTK-resources).)

### `pointerColor` (class `Foreground`)

Color of the mouse cursor. This has no effect in many graphical desktop environments, as they do not let Emacs change the mouse cursor this way.

### `privateColormap` (class `PrivateColormap`)

If ‘`on`’, use a private color map, in the case where the default visual of class PseudoColor and Emacs is using it.

### `reverseVideo` (class `ReverseVideo`)

Switch foreground and background default colors if ‘`on`’, use colors as specified if ‘`off`’.

### `screenGamma` (class `ScreenGamma`)

Gamma correction for colors, equivalent to the frame parameter `screen-gamma`.

### `scrollBar` (class `ScrollBar`)

If the value of this resource is ‘`off`’ or ‘`false`’ or ‘`0`’, Emacs disables Scroll Bar mode at startup (see [Scroll Bars](Scroll-Bars)).

### `scrollBarWidth` (class `ScrollBarWidth`)

The scroll bar width in pixels, equivalent to the frame parameter `scroll-bar-width`. Do not set this resource if Emacs is compiled with GTK+ support.

### `selectionFont` (class `SelectionFont`)

Font name for pop-up menu items, in non-toolkit versions of Emacs. (For toolkit versions, see [Lucid Resources](Lucid-Resources), also see [Motif Resources](Motif-Resources), and see [GTK resources](GTK-resources).)

### `selectionForeground` (class `SelectionForeground`)

Foreground color for pop-up menu items, in non-toolkit versions of Emacs. (For toolkit versions, see [Lucid Resources](Lucid-Resources), also see [Motif Resources](Motif-Resources), and see [GTK resources](GTK-resources).)

### `selectionTimeout` (class `SelectionTimeout`)

Number of milliseconds to wait for a selection reply. If the selection owner doesn’t reply in this time, we give up. A value of 0 means wait as long as necessary.

### `synchronous` (class `Synchronous`)

Run Emacs in synchronous mode if ‘`on`’. Synchronous mode is useful for debugging X problems.

### `title` (class `Title`)

Name to display in the title bar of the initial Emacs frame.

### `toolBar` (class `ToolBar`)

If the value of this resource is ‘`off`’ or ‘`false`’ or ‘`0`’, Emacs disables Tool Bar mode at startup (see [Tool Bars](Tool-Bars)).

### `tabBar` (class `TabBar`)

If the value of this resource is ‘`on`’ or ‘`yes`’ or ‘`1`’, Emacs enables Tab Bar mode at startup (see [Tab Bars](Tab-Bars)).

### `useXIM` (class `UseXIM`)

Disable use of X input methods (XIM) if ‘`false`’ or ‘`off`’. This is only relevant if your Emacs is built with XIM support. It might be useful to turn off XIM on slow X client/server links.

### `verticalScrollBars` (class `ScrollBars`)

Give frames scroll bars on the left if ‘`left`’, on the right if ‘`right`’; don’t have scroll bars if ‘`off`’ (see [Scroll Bars](Scroll-Bars)).

### `visualClass` (class `VisualClass`)

The *visual class* for X color display. If specified, the value should start with one of ‘`TrueColor`’, ‘`PseudoColor`’, ‘`DirectColor`’, ‘`StaticColor`’, ‘`GrayScale`’, and ‘`StaticGray`’, followed by ‘`-depth`’, where `depth` is the number of color planes.

You can also use X resources to customize individual Emacs faces (see [Faces](Faces)). For example, setting the resource ‘`face.attributeForeground`’ is equivalent to customizing the ‘`foreground`’ attribute of the face `face`. However, we recommend customizing faces from within Emacs, instead of using X resources. See [Face Customization](Face-Customization).
