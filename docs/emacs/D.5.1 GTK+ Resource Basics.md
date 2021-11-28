---
slug: GTK-Resource-Basics
---

In a GTK+ 2 resource file (usually `~/.emacs.d/gtkrc`), the simplest kind of a resource setting simply assigns a value to a variable. For example, putting the following line in the resource file changes the font on all GTK+ widgets to ‘`courier-12`’:

```lisp
gtk-font-name = "courier 12"
```

Note that in this case the font name must be supplied as a GTK font pattern (also called a *Pango font name*), not as a Fontconfig-style font name or XLFD. See [Fonts](Fonts).

To customize widgets you first define a *style*, and then apply the style to the widgets. Here is an example that sets the font for menus (‘`#`’ characters indicate comments):

```lisp
# Define the style ‘my_style’.
style "my_style"
{
  font_name = "helvetica bold 14"
}

# Specify that widget type ‘*emacs-menuitem*’ uses ‘my_style’.
widget "*emacs-menuitem*" style "my_style"
```

The widget name in this example contains wildcards, so the style is applied to all widgets matching ‘`*emacs-menuitem*`’. The widgets are named by the way they are contained, from the outer widget to the inner widget. Here is another example that applies ‘`my_style`’ specifically to the Emacs menu bar:

```lisp
widget "Emacs.pane.menubar.*" style "my_style"
```

Here is a more elaborate example, showing how to change the parts of the scroll bar:

```lisp
style "scroll"
{
  fg[NORMAL] = "red"     # Arrow color.
  bg[NORMAL] = "yellow"  # Thumb and background around arrow.
  bg[ACTIVE] = "blue"    # Trough color.
  bg[PRELIGHT] = "white" # Thumb color when the mouse is over it.
}

widget "*verticalScrollBar*" style "scroll"
```
