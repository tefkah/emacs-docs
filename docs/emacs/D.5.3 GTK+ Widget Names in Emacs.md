---
slug: GTK-Names-in-Emacs
---

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

```lisp
widget "Emacs.pane.menubar.*" style "my_style"
widget_class "GtkWindow.GtkVBox.GtkMenuBar.*" style "my_style"
```

For GTK+ dialogs, Emacs uses a widget named `emacs-dialog`, of class `GtkDialog`. For file selection, Emacs uses a widget named `emacs-filedialog`, of class `GtkFileSelection`.

Because the widgets for pop-up menus and dialogs are free-standing windows and not contained in the `Emacs` widget, their GTK+ absolute names do not start with ‘`Emacs`’. To customize these widgets, use wildcards like this:

```lisp
widget "*emacs-dialog*" style "my_dialog_style"
widget "*emacs-filedialog* style "my_file_style"
widget "*emacs-menuitem* style "my_menu_style"
```

If you want to apply a style to all menus in Emacs, use this:

```lisp
widget_class "*Menu*" style "my_menu_style"
```
