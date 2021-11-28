---
slug: GTK-resources
---

If Emacs is compiled with GTK+ toolkit support, the simplest way to customize its GTK+ widgets (e.g., menus, dialogs, tool bars and scroll bars) is to choose an appropriate GTK+ theme, for example with the GNOME theme selector.

In GTK+ version 2, you can also use *GTK+ resources* to customize the appearance of GTK+ widgets used by Emacs. These resources are specified in either the file `~/.emacs.d/gtkrc` (for Emacs-specific GTK+ resources), or `~/.gtkrc-2.0` (for general GTK+ resources). We recommend using `~/.emacs.d/gtkrc`, since GTK+ seems to ignore `~/.gtkrc-2.0` when running GConf with GNOME. Note, however, that some GTK+ themes may override customizations in `~/.emacs.d/gtkrc`; there is nothing we can do about this. GTK+ resources do not affect aspects of Emacs unrelated to GTK+ widgets, such as fonts and colors in the main Emacs window; those are governed by normal X resources (see [Resources](/docs/emacs/Resources)).

The following sections describe how to customize GTK+ resources for Emacs. For details about GTK+ resources, see the GTK+ API document at [https://developer.gnome.org/gtk2/stable/gtk2-Resource-Files.html](https://developer.gnome.org/gtk2/stable/gtk2-Resource-Files.html).

In GTK+ version 3, GTK+ resources have been replaced by a completely different system. The appearance of GTK+ widgets is now determined by CSS-like style files: `gtk-3.0/gtk.css` in the GTK+ installation directory, and `~/.themes/theme/gtk-3.0/gtk.css` for local style settings (where `theme` is the name of the current GTK+ theme). Therefore, the description of GTK+ resources in this section does not apply to GTK+ 3. For details about the GTK+ 3 styling system, see [https://developer.gnome.org/gtk3/3.0/GtkCssProvider.html](https://developer.gnome.org/gtk3/3.0/GtkCssProvider.html).

|                                                          |    |                                          |
| :------------------------------------------------------- | -- | :--------------------------------------- |
| • [GTK Resource Basics](/docs/emacs/GTK-Resource-Basics) |    | Basic usage of GTK+ resources.           |
| • [GTK Widget Names](/docs/emacs/GTK-Widget-Names)       |    | How GTK+ widgets are named.              |
| • [GTK Names in Emacs](/docs/emacs/GTK-Names-in-Emacs)   |    | GTK+ widgets used by Emacs.              |
| • [GTK styles](/docs/emacs/GTK-styles)                   |    | What can be customized in a GTK+ widget. |
