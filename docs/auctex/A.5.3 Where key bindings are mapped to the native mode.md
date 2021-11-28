---
slug: Mapping
---

This node follows the native Texinfo mode summary (see [(texinfo)Texinfo Mode Summary](/docs/auctex/Texinfo-Mode-Summary)) and lists only those commands to which AUCTeX provides a keybinding.

Basically all commands of the native mode related to producing menus and interlinking nodes are mapped to same or similar keys in AUCTeX, while a few insertion commands are mapped to AUCTeX-like keys.

### `@item` insertion

The binding `C-c C-c i` for the insertion of `@item` in the native mode is mapped to `M-<RET>` or `C-c C-j` in AUCTeX, similar to other AUCTeX modes.

### `@end` insertion

The binding `C-c C-c e` for closing a `@foo` command by a corresponding `@end foo` statement in the native mode is mapped to `C-c C-]` in AUCTeX, similar to other AUCTeX modes.

### Move out of balanced braces

The binding `C-}` (`up-list`) is available both in the native mode and in AUCTeX. (This is because the command is not implemented in either mode but a native Emacs command.) However, in AUCTeX, you cannot use `C-]` for this, as it is used for `@end` insertion.

### Update pointers

The bindings `C-c C-u C-n` (`texinfo-update-node`) and `C-c C-u C-e` (`texinfo-every-node-update`) from the native mode are available in AUCTeX as well.

### Update menus

The bindings `C-c C-u m` (`texinfo-master-menu`), `C-c C-u C-m` (`texinfo-make-menu`), and `C-c C-u C-a` (`texinfo-all-menus-update`) from the native mode are available in AUCTeX as well. The command `texinfo-start-menu-description`, bound to `C-c C-c C-d` in the native mode, is bound to `C-c C-u C-d` in AUCTeX instead.
