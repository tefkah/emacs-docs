---
slug: Motif-Resources
---

If Emacs is compiled with the X toolkit support using Motif or LessTif widgets, you can use X resources to customize the appearance of the menu bar (see [Menu Bar](Menu-Bar)), pop-up menus, and dialog boxes (see [Dialog Boxes](Dialog-Boxes)). However, the resources are organized differently from Lucid widgets.

The resource names for the menu bar are in the ‘`pane.menubar`’ class, and they must be specified in this form:

```lisp
Emacs.pane.menubar.subwidget.resource: value
```

For pop-up menus, the resources are in the ‘`menu*`’ class, instead of ‘`pane.menubar`’. For dialog boxes, they are in ‘`dialog`’. In each case, each individual menu string is a subwidget; the subwidget’s name is the same as the menu item string. For example, the ‘`File`’ menu in the menu bar is a subwidget named ‘`emacs.pane.menubar.File`’.

Typically, you want to specify the same resources for the whole menu bar. To do this, use ‘`*`’ instead of a specific subwidget name. For example, to specify the font ‘`8x16`’ for all menu bar items, including submenus, write this:

```lisp
Emacs.pane.menubar.*.fontList: 8x16
```

Each item in a submenu also has its own name for X resources; for example, the ‘`File`’ submenu has an item named ‘`Save (current buffer)`’. A resource specification for a submenu item looks like this:

```lisp
Emacs.pane.menubar.popup_*.menu.item.resource: value
```

For example, here’s how to specify the font for the ‘`Save (current buffer)`’ item:

```lisp
Emacs.pane.menubar.popup_*.File.Save (current buffer).fontList: 8x16
```

For an item in a second-level submenu, such as ‘`Complete Word`’ under ‘`Spell Checking`’ under ‘`Tools`’, the resource fits this template:

```lisp
Emacs.pane.menubar.popup_*.popup_*.menu.resource: value
```

For example,

```lisp
Emacs.pane.menubar.popup_*.popup_*.Spell Checking.Complete Word: value
```

(This should be one long line.)

If you want the submenu items to look different from the menu bar itself, you must first specify the resource for all of them, then override the value for submenus alone. Here is an example:

```lisp
Emacs.pane.menubar.*.fontList: 9x18
Emacs.pane.menubar.popup_*.fontList: 8x16
```

To specify resources for the LessTif file-selection box, use ‘`fsb*`’, like this:

```lisp
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
