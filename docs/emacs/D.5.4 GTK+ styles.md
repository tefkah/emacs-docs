---
slug: GTK-styles
---

Here is an example of two GTK+ style declarations:

```lisp
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

The style ‘`ruler`’ inherits from ‘`default`’. This way you can build on existing styles. The syntax for fonts and colors is described below.

As this example shows, it is possible to specify several values for foreground and background depending on the widget’s *state*. The possible states are:

### `NORMAL`

This is the default state for widgets.

### `ACTIVE`

This is the state for a widget that is ready to do something. It is also for the trough of a scroll bar, i.e., `bg[ACTIVE] = "red"` sets the scroll bar trough to red. Buttons that have been armed (pressed but not released yet) are in this state.

### `PRELIGHT`

This is the state for a widget that can be manipulated, when the mouse pointer is over it—for example when the mouse is over the thumb in the scroll bar or over a menu item. When the mouse is over a button that is not pressed, the button is in this state.

### `SELECTED`

This is the state for data that has been selected by the user. It can be selected text or items selected in a list. This state is not used in Emacs.

### `INSENSITIVE`

This is the state for widgets that are visible, but they cannot be manipulated in the usual way—for example, buttons that can’t be pressed, and disabled menu items. To display disabled menu items in yellow, use `fg[INSENSITIVE] = "yellow"`.

Here are the things that can go in a style declaration:

### `bg[state] = color`

This specifies the background color for the widget. Note that editable text doesn’t use `bg`; it uses `base` instead.

### `base[state] = color`

This specifies the background color for editable text. In Emacs, this color is used for the background of the text fields in the file dialog.

### `bg_pixmap[state] = "pixmap"`

This specifies an image background (instead of a background color). `pixmap` should be the image file name. GTK+ can use a number of image file formats, including XPM, XBM, GIF, JPEG and PNG. If you want a widget to use the same image as its parent, use ‘`<parent>`’. If you don’t want any image, use ‘`<none>`’. ‘`<none>`’ is the way to cancel a background image inherited from a parent style.

You can’t specify the file by its absolute file name. GTK+ looks for the pixmap file in directories specified in `pixmap_path`. `pixmap_path` is a colon-separated list of directories within double quotes, specified at the top level in a `gtkrc` file (i.e., not inside a style definition; see example above):

```lisp
pixmap_path "/usr/share/pixmaps:/usr/include/X11/pixmaps"
```

### `fg[state] = color`

This specifies the foreground color for widgets to use. It is the color of text in menus and buttons, and the color for the arrows in the scroll bar. For editable text, use `text`.

### `text[state] = color`

This is the color for editable text. In Emacs, this color is used for the text fields in the file dialog.

### `font_name = "font"`

This specifies the font for text in the widget. `font` is a GTK-style (or Pango) font name, like ‘`Sans Italic 10`’. See [Fonts](Fonts). The names are case insensitive.

There are three ways to specify a color: a color name, an RGB triplet, or a GTK-style RGB triplet. See [Colors](Colors), for a description of color names and RGB triplets. Color names should be enclosed with double quotes, e.g., ‘`"red"`’. RGB triplets should be written without double quotes, e.g., ‘`#ff0000`’. GTK-style RGB triplets have the form `{ r, g, b }`<!-- /@w -->, where `r`, `g` and `b` are either integers in the range 0–65535 or floats in the range 0.0–1.0.
