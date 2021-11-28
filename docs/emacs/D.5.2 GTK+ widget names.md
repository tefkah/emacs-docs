---
slug: GTK-Widget-Names
---

A GTK+ widget is specified by a *widget name* and a *widget class*. The widget name refers to a specific widget (e.g., ‘`emacs-menuitem`’), while the widget class refers to a collection of similar widgets (e.g., ‘`GtkMenuItem`’). A widget always has a class, but need not have a name.

*Absolute names* are sequences of widget names or widget classes, corresponding to hierarchies of widgets embedded within other widgets. For example, if a `GtkWindow` named `top` contains a `GtkVBox` named `box`, which in turn contains a `GtkMenuBar` called `menubar`, the absolute class name of the menu-bar widget is `GtkWindow.GtkVBox.GtkMenuBar`, and its absolute widget name is `top.box.menubar`.

GTK+ resource files can contain two types of commands for specifying widget appearances:

### `widget`

specifies a style for widgets based on the class name, or just the class.

### `widget_class`

specifies a style for widgets based on the class name.

See the previous subsection for examples of using the `widget` command; the `widget_class` command is used similarly. Note that the widget name/class and the style must be enclosed in double-quotes, and these commands must be at the top level in the GTK+ resource file.

As previously noted, you may specify a widget name or class with shell wildcard syntax: ‘`*`’ matches zero or more characters and ‘`?`’ matches one character. This example assigns a style to all widgets:

```lisp
widget "*" style "my_style"
```
