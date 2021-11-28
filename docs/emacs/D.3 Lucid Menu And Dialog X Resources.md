---
slug: Lucid-Resources
---

If Emacs is compiled with the X toolkit support using Lucid widgets, you can use X resources to customize the appearance of the menu bar (see [Menu Bar](Menu-Bar)), pop-up menus, and dialog boxes (see [Dialog Boxes](Dialog-Boxes)). The resources for the menu bar fall in the ‘`pane.menubar`’ class (following, as always, either the name of the Emacs executable or ‘`Emacs`’ for all Emacs invocations). The resources for the pop-up menu are in the ‘`menu*`’ class. The resources for dialog boxes are in the ‘`dialog*`’ class.

For example, to display menu bar entries with the ‘`Courier-12`’ font (see [Fonts](Fonts)), write this:

```lisp
Emacs.pane.menubar.font: Courier-12
```

Lucid widgets can display multilingual text in your locale. To enable this, specify a `fontSet` resource instead of a `font` resource. See [Fontsets](Fontsets). If both `font` and `fontSet` resources are specified, the `fontSet` resource is used.

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

### `horizontalSpacing`

Horizontal spacing in pixels between items. Default is 3.

### `verticalSpacing`

Vertical spacing in pixels between items. Default is 2.

### `arrowSpacing`

Horizontal spacing between the arrow (which indicates a submenu) and the associated text. Default is 10.

### `shadowThickness`

Thickness of shadow lines for 3D buttons, arrows, and other graphical elements. Default is 1.

### `margin`

Margin of the menu bar, in characters. Default is 1.
