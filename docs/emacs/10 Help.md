---
slug: Help
---

Emacs provides a wide variety of help commands, all accessible through the prefix key `C-h` (or, equivalently, the function key `F1`). These help commands are described in the following sections. You can also type `C-h C-h` to view a list of help commands (`help-for-help`). You can scroll the list with `SPC` and `DEL`, then type the help command you want. To cancel, type `C-g`.

Many help commands display their information in a special *help buffer*. In this buffer, you can type `SPC` and `DEL` to scroll and type `RET` to follow hyperlinks. See [Help Mode](/docs/emacs/Help-Mode).

If you are looking for a certain feature, but don’t know what it is called or where to look, we recommend three methods. First, try an apropos command, then try searching the manual index, then look in the FAQ and the package keywords.

### `C-h a topics RET`

This searches for commands whose names match the argument `topics`. The argument can be a keyword, a list of keywords, or a regular expression (see [Regexps](/docs/emacs/Regexps)). See [Apropos](/docs/emacs/Apropos).

### `C-h i d m emacs RET i topic RET`

This searches for `topic` in the indices of the Emacs Info manual, displaying the first match found. Press `,` to see subsequent matches. You can use a regular expression as `topic`.

### `C-h i d m emacs RET s topic RET`

Similar, but searches the *text* of the manual rather than the indices.

### `C-h C-f`

This displays the Emacs FAQ, using Info.

### `C-h p`

This displays the available Emacs packages based on keywords. See [Package Keywords](/docs/emacs/Package-Keywords).

`C-h` or `F1` mean “help" in various other contexts as well. For instance, you can type them after a prefix key to view a list of the keys that can follow the prefix key. (You can also use `?` in this context. A few prefix keys don’t support `C-h` or `?` in this way, because they define other meanings for those inputs, but they all support `F1`.)

|                                                    |    |                                                    |
| :------------------------------------------------- | -- | :------------------------------------------------- |
| • [Help Summary](/docs/emacs/Help-Summary)         |    | Brief list of all Help commands.                   |
| • [Key Help](/docs/emacs/Key-Help)                 |    | Asking what a key does in Emacs.                   |
| • [Name Help](/docs/emacs/Name-Help)               |    | Asking about a command, variable or function name. |
| • [Apropos](/docs/emacs/Apropos)                   |    | Asking what pertains to a given topic.             |
| • [Help Mode](/docs/emacs/Help-Mode)               |    | Special features of Help mode and Help buffers.    |
| • [Package Keywords](/docs/emacs/Package-Keywords) |    | Finding Lisp libraries by keywords (topics).       |
| • [Language Help](/docs/emacs/Language-Help)       |    | Help relating to international language support.   |
| • [Misc Help](/docs/emacs/Misc-Help)               |    | Other help commands.                               |
| • [Help Files](/docs/emacs/Help-Files)             |    | Commands to display auxiliary help files.          |
| • [Help Echo](/docs/emacs/Help-Echo)               |    | Help on active text and tooltips (“balloon help"). |
