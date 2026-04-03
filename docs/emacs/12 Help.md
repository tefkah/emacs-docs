---
slug: Help
---

Emacs provides a wide variety of help commands, all accessible through the prefix key `C-h` (or, equivalently, the function key `F1`). These help commands are described in the following sections. You can also type `C-h C-h` to view a list of help commands (`help-for-help`). You can scroll the list with `SPC` and `DEL`, then type the help command you want. To cancel, type `C-g`.

Many help commands display their information in a special *help buffer*. In this buffer, you can type `SPC` and `DEL` to scroll and type `RET` to follow hyperlinks. See [Help Mode Commands](/docs/emacs/Help-Mode).

By default, help commands display the help buffer in a separate window without selecting that window. The variable `help-window-select` controls this: its default value is `nil`; if it's customized to the value `t`, the help window is unconditionally selected by help commands, and if its value is `other`, the help window is selected only if there are more than two windows on the selected frame.

Conversely, many commands in the '`*Help*`' buffer will pop up a new window to display the results. For instance, clicking on the link to show the source code, or using the `i` command to display the manual entry, will (by default) pop up a new window. If `help-window-keep-selected` is changed to non-`nil`, the window displaying the '`*Help*`' buffer will be reused instead.

If you are looking for a certain feature, but don't know what it is called or where to look, we recommend three methods. First, try apropos commands, then try searching the manual index, then look in the FAQ and the package keywords, and finally try listing external packages.

### `C-h a topics RET`

This searches for commands whose names match the argument *topics*. The argument can be a keyword, a list of keywords separated by whitespace, or a regular expression (see [Syntax of Regular Expressions](/docs/emacs/Regexps)). See [Apropos](/docs/emacs/Apropos).

### `C-h d topics RET`

Similar, but searches the *text* of the documentation strings rather than the names of commands and functions.

### `C-h r i topic RET`

This searches for *topic* in the indices of the Emacs Info manual, displaying the first match found. Press `,` to see subsequent matches. You can use a regular expression as *topic*.

### `C-h r s topic RET`

Similar, but searches the *text* of the manual rather than the indices.

### `C-h C-f`

This displays the Emacs FAQ, using Info.

### `C-h p`

This displays the available Emacs packages based on keywords. See [Keyword Search for Packages](/docs/emacs/Package-Keywords).

### `M-x list-packages`

This displays a list of external packages. See [Emacs Lisp Packages](/docs/emacs/Packages).

`C-h` or `F1` mean "help" in various other contexts as well. For instance, you can type them after a prefix key to view a list of the keys that can follow the prefix key. (You can also use `?` in this context. A few prefix keys don't support `C-h` or `?` in this way, because they define other meanings for those inputs, but they all support `F1`.)
