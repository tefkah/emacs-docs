---
slug: X-Resources
---

You can customize some X-related aspects of Emacs behavior using X resources, as is usual for programs that use X.

When Emacs is compiled with GTK+ support, the appearance of various graphical widgets, such as the menu-bar, scroll-bar, and dialog boxes, is determined by GTK+ resources, which we will also describe. When Emacs is built without GTK+ support, the appearance of these widgets is determined by additional X resources.

On MS-Windows, you can customize some of the same aspects using the system registry (see [The MS-Windows System Registry](/docs/emacs/MS_002dWindows-Registry)).

### D.1 X Resources

Programs running under the X Window System organize their user options under a hierarchy of classes and resources. You can specify default values for these options in your *X resource file*, usually named `~/.Xdefaults` or `~/.Xresources`. Changes in this file do not take effect immediately, because the X server stores its own list of resources; to update it, use the command `xrdb`---for instance, '`xrdb ~/.Xdefaults`'.

Settings specified via X resources in general override the equivalent settings in Emacs init files (see [The Emacs Initialization File](/docs/emacs/Init-File)), in particular for parameters of the initial frame (see [Frame Parameters](/docs/emacs/Frame-Parameters)).

(MS-Windows systems do not support X resource files; on such systems, Emacs looks for X resources in the Windows Registry, first under the key '`HKEY_CURRENT_USER\SOFTWARE\GNU\Emacs`', which affects only the current user and override the system-wide settings, and then under the key '`HKEY_LOCAL_MACHINE\SOFTWARE\GNU\Emacs`', which affects all users of the system. The menu and scroll bars are native widgets on MS-Windows, so they are only customizable via the system-wide settings in the Display Control Panel. You can also set resources using the '`-xrm`' command line option, as explained below.)

Each line in the X resource file specifies a value for one option or for a collection of related options. The order in which the lines appear in the file does not matter. Each resource specification consists of a *program name* and a *resource name*. Case distinctions are significant in each of these names. Here is an example:

```
emacs.cursorColor: dark green

```

The program name is the name of the executable file to which the resource applies. For Emacs, this is normally '`emacs`'. To specify a definition that applies to all instances of Emacs, regardless of the name of the Emacs executable, use '`Emacs`'.

The resource name is the name of a program setting. For instance, Emacs recognizes a '`cursorColor`' resource that controls the color of the text cursor.

Resources are grouped into named classes. For instance, the '`Foreground`' class contains the '`cursorColor`', '`foreground`' and '`pointerColor`' resources (see [Table of X Resources for Emacs](/docs/emacs/Table-of-Resources)). Instead of using a resource name, you can use a class name to specify the default value for all resources in that class, like this:

```
emacs.Foreground: dark green

```

Emacs does not process X resources at all if you set the variable `inhibit-x-resources` to a non-`nil` value. If you invoke Emacs with the '`-Q`' (or '`--quick`') command-line option, `inhibit-x-resources` is automatically set to `t` (see [Initial Options](/docs/emacs/Initial-Options)).

In addition, you can use the following command-line options to override the X resources file:

### '`-name name`'

### '`--name=name`'

This option sets the program name of the initial Emacs frame to *name*. It also sets the title of the initial frame to *name*. This option does not affect subsequent frames.

If you don't specify this option, the default is to use the Emacs executable's name as the program name.

For consistency, '`-name`' also specifies the name to use for other resource values that do not belong to any particular frame.

The resources that name Emacs invocations also belong to a class, named '`Emacs`'. If you write '`Emacs`' instead of '`emacs`', the resource applies to all frames in all Emacs jobs, regardless of frame titles and regardless of the name of the executable file.

### '`-xrm resource-value`'

### '`--xrm=resource-value`'

This option specifies X resource values for the present Emacs job.

*resource-value* should have the same format that you would use inside a file of X resources. Several '`-xrm`' options are possible to include multiple resource specifications. You can also use '`#include "filename"`' as *resource-value* to include a file full of resource specifications. Resource values specified with '`-xrm`' take precedence over all other resource specifications.

---

### D.2 Table of X Resources for Emacs

The table below lists the X resource names that Emacs recognizes. Note that some of the resources have no effect in Emacs compiled with various X toolkits (GTK+, Lucid, etc.)---we indicate below when this is the case.

### `alpha` (class `Alpha`)

Sets the '`alpha`' frame parameter, determining frame transparency (see [Frame Parameters](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Frame-Parameters) in The Emacs Lisp Reference Manual).

### `alphaBackground` (class `AlphaBackground`)

Sets the '`alpha-background`' frame parameter, determining background transparency (see [Frame Parameters](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Frame-Parameters) in The Emacs Lisp Reference Manual).

### `background` (class `Background`)

Background color (see [Colors for Faces](/docs/emacs/Colors)).

### `bitmapIcon` (class `BitmapIcon`)

Tell the window manager to display the Emacs icon if '`on`'; don't do so if '`off`'. See [Icons](/docs/emacs/Icons-X), for a description of the icon.

### `borderColor` (class `BorderColor`)

Color of the frame's external border. This has no effect if Emacs is compiled with GTK+ support.

### `borderWidth` (class `BorderWidth`)

Width of the frame's external border, in pixels. This has no effect if Emacs is compiled with GTK+ support.

### `cursorBlink` (class `CursorBlink`)

If the value of this resource is '`off`' or '`false`' or '`0`' at startup, Emacs disables Blink Cursor mode (see [Displaying the Cursor](/docs/emacs/Cursor-Display)).

### `cursorColor` (class `Foreground`)

Text cursor color. If this resource is specified when Emacs starts up, Emacs sets its value as the background color of the `cursor` face (see [Text Faces](/docs/emacs/Faces)).

### `font` (class `Font`)

Font name for the `default` face (see [Fonts](/docs/emacs/Fonts)). You can also specify a fontset name (see [Fontsets](/docs/emacs/Fontsets)).

### `fontBackend` (class `FontBackend`)

Comma-delimited list of backend(s) to use for drawing fonts, in order of precedence. For instance, the value '`x,xft`' tells Emacs to draw fonts using the X core font driver, falling back on the Xft font driver if that fails. Normally, you should leave this resource unset, in which case Emacs tries using all available font backends.

### `foreground` (class `Foreground`)

Default foreground color for text.

### `fullscreen` (class `Fullscreen`)

The desired fullscreen size. The value can be one of `fullboth`, `maximized`, `fullwidth` or `fullheight`, which correspond to the command-line options '`-fs`', '`-mm`', '`-fw`', and '`-fh`' (see [Options for Window Size and Position](/docs/emacs/Window-Size-X)). Note that this applies to the initial frame only.

### `geometry` (class `Geometry`)

Window size and position. The value should be a size and position specification, of the same form as in the '`-g`' or '`--geometry`' command-line option (see [Options for Window Size and Position](/docs/emacs/Window-Size-X)).

The size applies to all frames in the Emacs session, but the position applies only to the initial Emacs frame (or, in the case of a resource for a specific frame name, only that frame).

Be careful not to specify this resource as '`emacs*geometry`', as that may affect individual menus as well as the main Emacs frame.

### `horizontalScrollBars` (class `ScrollBars`)

If the value of this resource is '`off`' or '`false`' or '`0`', Emacs disables Horizontal Scroll Bar mode at startup (see [Scroll Bars](/docs/emacs/Scroll-Bars)).

### `iconName` (class `Title`)

Name to display in the icon.

### `internalBorder` (class `BorderWidth`)

Width of the internal frame border, in pixels.

### `lineSpacing` (class `LineSpacing`)

Additional space between lines, in pixels.

### `menuBackground` (class `Background`)

The background color of the menus in non-toolkit versions of Emacs. (For toolkit versions, see [Lucid Menu And Dialog X Resources](/docs/emacs/Lucid-Resources), also see [Motif Menu X Resources](/docs/emacs/Motif-Resources), and see [GTK+ resources](/docs/emacs/GTK-resources).)

### `menuBar` (class `MenuBar`)

If the value of this resource is '`off`' or '`false`' or '`0`', Emacs disables Menu Bar mode at startup (see [Menu Bars](/docs/emacs/Menu-Bars)).

### `minibuffer` (class `Minibuffer`)

If '`none`', Emacs will not make a minibuffer in this frame; it will use a separate minibuffer frame instead.

### `paneFont` (class `Font`)

Font name for menu pane titles, in non-toolkit versions of Emacs. (For toolkit versions, see [Lucid Menu And Dialog X Resources](/docs/emacs/Lucid-Resources), also see [Motif Menu X Resources](/docs/emacs/Motif-Resources), and see [GTK+ resources](/docs/emacs/GTK-resources).)

### `paneForeground` (class `Foreground`)

Foreground color for menu pane titles, in non-toolkit versions of Emacs. (For toolkit versions, see [Lucid Menu And Dialog X Resources](/docs/emacs/Lucid-Resources), also see [Motif Menu X Resources](/docs/emacs/Motif-Resources), and see [GTK+ resources](/docs/emacs/GTK-resources).)

### `pointerColor` (class `Foreground`)

Color of the mouse cursor. This has no effect in many graphical desktop environments, as they do not let Emacs change the mouse cursor this way.

### `privateColormap` (class `PrivateColormap`)

If '`on`', use a private color map, in the case where the default visual of class PseudoColor and Emacs is using it.

### `reverseVideo` (class `ReverseVideo`)

Switch foreground and background default colors if '`on`', use colors as specified if '`off`'.

### `screenGamma` (class `ScreenGamma`)

Gamma correction for colors, equivalent to the frame parameter `screen-gamma`.

### `scrollBar` (class `ScrollBar`)

If the value of this resource is '`off`' or '`false`' or '`0`', Emacs disables Scroll Bar mode at startup (see [Scroll Bars](/docs/emacs/Scroll-Bars)).

### `scrollBarWidth` (class `ScrollBarWidth`)

The scroll bar width in pixels, equivalent to the frame parameter `scroll-bar-width`. Do not set this resource if Emacs is compiled with GTK+ support.

### `selectionFont` (class `SelectionFont`)

Font name for pop-up menu items, in non-toolkit versions of Emacs. (For toolkit versions, see [Lucid Menu And Dialog X Resources](/docs/emacs/Lucid-Resources), also see [Motif Menu X Resources](/docs/emacs/Motif-Resources), and see [GTK+ resources](/docs/emacs/GTK-resources).)

### `selectionForeground` (class `SelectionForeground`)

Foreground color for pop-up menu items, in non-toolkit versions of Emacs. (For toolkit versions, see [Lucid Menu And Dialog X Resources](/docs/emacs/Lucid-Resources), also see [Motif Menu X Resources](/docs/emacs/Motif-Resources), and see [GTK+ resources](/docs/emacs/GTK-resources).)

### `selectionTimeout` (class `SelectionTimeout`)

Number of milliseconds to wait for a selection reply. If the selection owner doesn't reply in this time, we give up. A value of 0 means wait as long as necessary.

### `synchronous` (class `Synchronous`)

Run Emacs in synchronous mode if '`on`'. Synchronous mode is useful for debugging X problems.

### `title` (class `Title`)

Name to display in the title bar of the initial Emacs frame.

### `toolBar` (class `ToolBar`)

If the value of this resource is '`off`' or '`false`' or '`0`', Emacs disables Tool Bar mode at startup (see [Tool Bars](/docs/emacs/Tool-Bars)).

### `tabBar` (class `TabBar`)

If the value of this resource is '`on`' or '`yes`' or '`1`', Emacs enables Tab Bar mode at startup (see [Tab Bars](/docs/emacs/Tab-Bars)).

### `useXIM` (class `UseXIM`)

Disable use of X input methods (XIM) if '`false`' or '`off`'. This is only relevant if your Emacs is built with XIM support. It might be useful to turn off XIM on slow X client/server links.

### `inputStyle` (class `InputStyle`)

This resource controls how preview text generated by X input methods is displayed. Its value can be on of the following:

### '`callback`'

Display the contents of the preview text in the current buffer.

### '`offthespot`'

Display the preview text inside a separate area of the display provided by Emacs.

### '`overthespot`'

Display the preview text inside a popup window at the location of point in the current window.

### '`none`'

Let the input method decide how to display itself. This is usually equivalent to '`overthespot`', but it might work with more input methods.

### '`native`'

Use the toolkit for handling input methods. This is currently implemented only on GTK.

### '`root`'

Use some location on display specific to the input method for displaying the preview text.

### `synchronizeResize` (class `SynchronizeResize`)

If '`off`' or '`false`', Emacs will not try to tell the window manager when it has finished redrawing the display in response to a frame being resized. Otherwise, the window manager will postpone drawing a frame that was just resized until its contents are updated, which prevents blank areas of a frame that have not yet been painted from being displayed. If set to '`extended`', it will enable use of an alternative frame synchronization protocol, which might be supported by some compositing window managers that don't support the protocol Emacs uses by default, and causes Emacs to synchronize display with the monitor refresh rate when a compatible compositing window manager is in use.

### `verticalScrollBars` (class `ScrollBars`)

Give frames scroll bars on the left if '`left`', on the right if '`right`'; don't have scroll bars if '`off`' (see [Scroll Bars](/docs/emacs/Scroll-Bars)).

### `visualClass` (class `VisualClass`)

The *visual class* for X color display. If specified, the value should start with one of '`TrueColor`', '`PseudoColor`', '`DirectColor`', '`StaticColor`', '`GrayScale`', and '`StaticGray`', followed by '`-depth`', where *depth* is the number of color planes.

You can also use X resources to customize individual Emacs faces (see [Text Faces](/docs/emacs/Faces)). For example, setting the resource '`face.attributeForeground`' is equivalent to customizing the '`foreground`' attribute of the face *face*. However, we recommend customizing faces from within Emacs, instead of using X resources. See [Customizing Faces](/docs/emacs/Face-Customization).

---

### D.3 Lucid Menu And Dialog X Resources

If Emacs is compiled with the X toolkit support using Lucid widgets, you can use X resources to customize the appearance of the menu bar (see [The Menu Bar](/docs/emacs/Menu-Bar)), pop-up menus, and dialog boxes (see [Using Dialog Boxes](/docs/emacs/Dialog-Boxes)). The resources for the menu bar fall in the '`pane.menubar`' class (following, as always, either the name of the Emacs executable or '`Emacs`' for all Emacs invocations). The resources for the pop-up menu are in the '`menu*`' class. The resources for dialog boxes are in the '`dialog*`' class.

For example, to display menu bar entries with the '`Courier-12`' font (see [Fonts](/docs/emacs/Fonts)), write this:

```
Emacs.pane.menubar.font: Courier-12

```

Lucid widgets can display multilingual text in your locale. To enable this, specify a `fontSet` resource instead of a `font` resource. See [Fontsets](/docs/emacs/Fontsets). If both `font` and `fontSet` resources are specified, the `fontSet` resource is used.

Here is a list of resources for menu bars, pop-up menus, and dialogs:

### `font`

Font for menu item text.

### `fontSet`

Fontset for menu item text.

### `background`

Background color.

### `buttonForeground`

Foreground color for a selected item.

### `foreground`

Foreground color.

### `disabledForeground`

Foreground color for a disabled menu item.

### `highlightForeground`

Foreground color for a menu item highlighted by the mouse or key navigation.

### `highlightBackground`

Background color for a menu item highlighted by the mouse or key navigation.

### `horizontalSpacing`

Horizontal spacing in pixels between items. Default is 3.

### `verticalSpacing`

Vertical spacing in pixels between items. Default is 2.

### `arrowSpacing`

Horizontal spacing between the arrow (which indicates a submenu) and the associated text. Default is 10.

### `shadowThickness`

Thickness of shadow lines for 3D buttons, arrows, and other graphical elements. Default is 1.

### `borderThickness`

Thickness of the external borders of the menu bars and pop-up menus. Default is 1.

### `cursor`

Name of the cursor to use in the menu bars and pop-up menus. Default is `"right_ptr"`.

### `margin`

Margin of the menu bar, in characters. Default is 1.

---

### D.4 Motif Menu X Resources

If Emacs is compiled with the X toolkit support using Motif or LessTif widgets, you can use X resources to customize the appearance of the menu bar (see [The Menu Bar](/docs/emacs/Menu-Bar)), pop-up menus, and dialog boxes (see [Using Dialog Boxes](/docs/emacs/Dialog-Boxes)). However, the resources are organized differently from Lucid widgets.

The resource names for the menu bar are in the '`pane.menubar`' class, and they must be specified in this form:

```
Emacs.pane.menubar.subwidget.resource: value

```

For pop-up menus, the resources are in the '`menu*`' class, instead of '`pane.menubar`'. For dialog boxes, they are in '`dialog`'. In each case, each individual menu string is a subwidget; the subwidget's name is the same as the menu item string. For example, the '`File`' menu in the menu bar is a subwidget named '`emacs.pane.menubar.File`'.

Typically, you want to specify the same resources for the whole menu bar. To do this, use '`*`' instead of a specific subwidget name. For example, to specify the font '`8x16`' for all menu bar items, including submenus, write this:

```
Emacs.pane.menubar.*.fontList: 8x16

```

Each item in a submenu also has its own name for X resources; for example, the '`File`' submenu has an item named '`Save (current buffer)`'. A resource specification for a submenu item looks like this:

```
Emacs.pane.menubar.popup_*.menu.item.resource: value

```

For example, here's how to specify the font for the '`Save (current buffer)`' item:

```
Emacs.pane.menubar.popup_*.File.Save (current buffer).fontList: 8x16

```

For an item in a second-level submenu, such as '`Complete Word`' under '`Spell Checking`' under '`Tools`', the resource fits this template:

```
Emacs.pane.menubar.popup_*.popup_*.menu.resource: value

```

For example,

```
Emacs.pane.menubar.popup_*.popup_*.Spell Checking.Complete Word: value

```

(This should be one long line.)

If you want the submenu items to look different from the menu bar itself, you must first specify the resource for all of them, then override the value for submenus alone. Here is an example:

```
Emacs.pane.menubar.*.fontList: 9x18
Emacs.pane.menubar.popup_*.fontList: 8x16

```

To specify resources for the LessTif file-selection box, use '`fsb*`', like this:

```
Emacs.fsb*.fontList: 8x16

```

Here is a list of resources for LessTif menu bars and pop-up menus:

### `armColor`

The color to show in an armed button.

### `fontList`

The font to use.

### `marginBottom`

### `marginHeight`

### `marginLeft`

### `marginRight`

### `marginTop`

### `marginWidth`

Amount of space to leave around the item, within the border.

### `borderWidth`

The width of the border around the menu item, on all sides.

### `shadowThickness`

The width of the border shadow.

### `bottomShadowColor`

The color for the border shadow, on the bottom and the right.

### `topShadowColor`

The color for the border shadow, on the top and the left.

---

### D.5 GTK+ resources

If Emacs is compiled with GTK+ toolkit support, the simplest way to customize its GTK+ widgets (e.g., menus, dialogs, tool bars and scroll bars) is to choose an appropriate GTK+ theme, for example with the GNOME theme selector.

In GTK+ version 2, you can also use *GTK+ resources* to customize the appearance of GTK+ widgets used by Emacs. These resources are specified in either the file `~/.emacs.d/gtkrc` (for Emacs-specific GTK+ resources), or `~/.gtkrc-2.0` (for general GTK+ resources). We recommend using `~/.emacs.d/gtkrc`, since GTK+ seems to ignore `~/.gtkrc-2.0` when running GConf with GNOME. Note, however, that some GTK+ themes may override customizations in `~/.emacs.d/gtkrc`; there is nothing we can do about this. GTK+ resources do not affect aspects of Emacs unrelated to GTK+ widgets, such as fonts and colors in the main Emacs window; those are governed by normal X resources (see [X Resources](/docs/emacs/Resources)).

The following sections describe how to customize GTK+ resources for Emacs. For details about GTK+ resources, see the GTK+ API document at <https://developer-old.gnome.org/gtk2/stable/gtk2-Resource-Files.html>.

In GTK+ version 3, GTK+ resources have been replaced by a completely different system. The appearance of GTK+ widgets is now determined by CSS-like style files: `gtk-3.0/gtk.css` in the GTK+ installation directory, and `~/.themes/theme/gtk-3.0/gtk.css` for local style settings (where *theme* is the name of the current GTK+ theme). Therefore, the description of GTK+ resources in this section does not apply to GTK+ 3. For details about the GTK+ 3 styling system, see <https://developer-old.gnome.org/gtk3/3.0/GtkCssProvider.html>.

- [GTK+ Resource Basics](/docs/emacs/GTK-Resource-Basics)
- [GTK+ widget names](/docs/emacs/GTK-Widget-Names)
- [GTK+ Widget Names in Emacs](/docs/emacs/GTK-Names-in-Emacs)
- [GTK+ styles](/docs/emacs/GTK-styles)

---

#### D.5.1 GTK+ Resource Basics

In a GTK+ 2 resource file (usually `~/.emacs.d/gtkrc`), the simplest kind of a resource setting simply assigns a value to a variable. For example, putting the following line in the resource file changes the font on all GTK+ widgets to '`courier-12`':

```
gtk-font-name = "courier 12"

```

Note that in this case the font name must be supplied as a GTK font pattern (also called a *Pango font name*), not as a Fontconfig-style font name or XLFD. See [Fonts](/docs/emacs/Fonts).

To customize widgets you first define a *style*, and then apply the style to the widgets. Here is an example that sets the font for menus ('`#`' characters indicate comments):

```
# Define the style 'my_style'.
style "my_style"
{
  font_name = "helvetica bold 14"
}

# Specify that widget type '*emacs-menuitem*' uses 'my_style'.
widget "*emacs-menuitem*" style "my_style"

```

The widget name in this example contains wildcards, so the style is applied to all widgets matching '`*emacs-menuitem*`'. The widgets are named by the way they are contained, from the outer widget to the inner widget. Here is another example that applies '`my_style`' specifically to the Emacs menu bar:

```
widget "Emacs.pane.menubar.*" style "my_style"

```

Here is a more elaborate example, showing how to change the parts of the scroll bar:

```
style "scroll"
{
  fg[NORMAL] = "red"     # Arrow color.
  bg[NORMAL] = "yellow"  # Thumb and background around arrow.
  bg[ACTIVE] = "blue"    # Trough color.
  bg[PRELIGHT] = "white" # Thumb color when the mouse is over it.
}

widget "*verticalScrollBar*" style "scroll"

```

---

#### D.5.2 GTK+ widget names

A GTK+ widget is specified by a *widget name* and a *widget class*. The widget name refers to a specific widget (e.g., '`emacs-menuitem`'), while the widget class refers to a collection of similar widgets (e.g., '`GtkMenuItem`'). A widget always has a class, but need not have a name.

*Absolute names* are sequences of widget names or widget classes, corresponding to hierarchies of widgets embedded within other widgets. For example, if a `GtkWindow` named `top` contains a `GtkVBox` named `box`, which in turn contains a `GtkMenuBar` called `menubar`, the absolute class name of the menu-bar widget is `GtkWindow.GtkVBox.GtkMenuBar`, and its absolute widget name is `top.box.menubar`.

GTK+ resource files can contain two types of commands for specifying widget appearances:

### `widget`

specifies a style for widgets based on the class name, or just the class.

### `widget_class`

specifies a style for widgets based on the class name.

See the previous subsection for examples of using the `widget` command; the `widget_class` command is used similarly. Note that the widget name/class and the style must be enclosed in double-quotes, and these commands must be at the top level in the GTK+ resource file.

As previously noted, you may specify a widget name or class with shell wildcard syntax: '`*`' matches zero or more characters and '`?`' matches one character. This example assigns a style to all widgets:

```
widget "*" style "my_style"

```

---

#### D.5.3 GTK+ Widget Names in Emacs

The GTK+ widgets used by an Emacs frame are listed below:

### `Emacs` (class `GtkWindow`)

### `pane` (class `GtkVBox`)

### `menubar` (class `GtkMenuBar`)

### \[menu item widgets]

### \[unnamed widget] (class `GtkHandleBox`)

### `emacs-toolbar` (class `GtkToolbar`)

### \[tool bar item widgets]

### `emacs` (class `GtkFixed`)

### `verticalScrollBar` (class `GtkVScrollbar`)

The contents of Emacs windows are drawn in the `emacs` widget. Note that even if there are multiple Emacs windows, each scroll bar widget is named `verticalScrollBar`.

For example, here are two different ways to set the menu bar style:

```
widget "Emacs.pane.menubar.*" style "my_style"
widget_class "GtkWindow.GtkVBox.GtkMenuBar.*" style "my_style"

```

For GTK+ dialogs, Emacs uses a widget named `emacs-dialog`, of class `GtkDialog`. For file selection, Emacs uses a widget named `emacs-filedialog`, of class `GtkFileSelection`.

Because the widgets for pop-up menus and dialogs are free-standing windows and not contained in the `Emacs` widget, their GTK+ absolute names do not start with '`Emacs`'. To customize these widgets, use wildcards like this:

```
widget "*emacs-dialog*" style "my_dialog_style"
widget "*emacs-filedialog* style "my_file_style"
widget "*emacs-menuitem* style "my_menu_style"

```

If you want to apply a style to all menus in Emacs, use this:

```
widget_class "*Menu*" style "my_menu_style"

```

---

#### D.5.4 GTK+ styles

Here is an example of two GTK+ style declarations:

```
pixmap_path "/usr/share/pixmaps:/usr/include/X11/pixmaps"

style "default"
{
  font_name = "helvetica 12"

  bg[NORMAL] = { 0.83, 0.80, 0.73 }
  bg[SELECTED] = { 0.0, 0.55, 0.55 }
  bg[INSENSITIVE] = { 0.77, 0.77, 0.66 }
  bg[ACTIVE] = { 0.0, 0.55, 0.55 }
  bg[PRELIGHT] = { 0.0, 0.55, 0.55 }

  fg[NORMAL] = "black"
  fg[SELECTED] = { 0.9, 0.9, 0.9 }
  fg[ACTIVE] = "black"
  fg[PRELIGHT] = { 0.9, 0.9, 0.9 }

  base[INSENSITIVE] = "#777766"
  text[INSENSITIVE] = { 0.60, 0.65, 0.57 }

  bg_pixmap[NORMAL] = "background.xpm"
  bg_pixmap[INSENSITIVE] = "background.xpm"
  bg_pixmap[ACTIVE] = "background.xpm"
  bg_pixmap[PRELIGHT] = "<none>"

}

style "ruler" = "default"
{
  font_name = "helvetica 8"
}


```

The style '`ruler`' inherits from '`default`'. This way you can build on existing styles. The syntax for fonts and colors is described below.

As this example shows, it is possible to specify several values for foreground and background depending on the widget's *state*. The possible states are:

### `NORMAL`

This is the default state for widgets.

### `ACTIVE`

This is the state for a widget that is ready to do something. It is also for the trough of a scroll bar, i.e., `bg[ACTIVE] = "red"` sets the scroll bar trough to red. Buttons that have been armed (pressed but not released yet) are in this state.

### `PRELIGHT`

This is the state for a widget that can be manipulated, when the mouse pointer is over it---for example when the mouse is over the thumb in the scroll bar or over a menu item. When the mouse is over a button that is not pressed, the button is in this state.

### `SELECTED`

This is the state for data that has been selected by the user. It can be selected text or items selected in a list. This state is not used in Emacs.

### `INSENSITIVE`

This is the state for widgets that are visible, but they cannot be manipulated in the usual way---for example, buttons that can't be pressed, and disabled menu items. To display disabled menu items in yellow, use `fg[INSENSITIVE] = "yellow"`.

Here are the things that can go in a style declaration:

### `bg[state] = color`

This specifies the background color for the widget. Note that editable text doesn't use `bg`; it uses `base` instead.

### `base[state] = color`

This specifies the background color for editable text. In Emacs, this color is used for the background of the text fields in the file dialog.

### `bg_pixmap[state] = "pixmap"`

This specifies an image background (instead of a background color). *pixmap* should be the image file name. GTK+ can use a number of image file formats, including XPM, XBM, GIF, JPEG and PNG. If you want a widget to use the same image as its parent, use '`<parent>`'. If you don't want any image, use '`<none>`'. '`<none>`' is the way to cancel a background image inherited from a parent style.

You can't specify the file by its absolute file name. GTK+ looks for the pixmap file in directories specified in `pixmap_path`. `pixmap_path` is a colon-separated list of directories within double quotes, specified at the top level in a `gtkrc` file (i.e., not inside a style definition; see example above):

```
pixmap_path "/usr/share/pixmaps:/usr/include/X11/pixmaps"

```

### `fg[state] = color`

This specifies the foreground color for widgets to use. It is the color of text in menus and buttons, and the color for the arrows in the scroll bar. For editable text, use `text`.

### `text[state] = color`

This is the color for editable text. In Emacs, this color is used for the text fields in the file dialog.

### `font_name = "font"`

This specifies the font for text in the widget. *font* is a GTK-style (or Pango) font name, like '`Sans Italic 10`'. See [Fonts](/docs/emacs/Fonts). The names are case insensitive.

There are three ways to specify a color: a color name, an RGB triplet, or a GTK-style RGB triplet. See [Colors for Faces](/docs/emacs/Colors), for a description of color names and RGB triplets. Color names should be enclosed with double quotes, e.g., '`"red"`'. RGB triplets should be written without double quotes, e.g., '`#ff0000`'. GTK-style RGB triplets have the form `{ r, g, b }`<!-- /@w -->, where *r*, *g* and *b* are either integers in the range 0--65535 or floats in the range 0.0--1.0.

---
