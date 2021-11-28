---
slug: Editing-Binary-Files
---

There is a special major mode for editing binary files: Hexl mode. To use it, use `M-x hexl-find-file` instead of `C-x C-f` to visit the file. This command converts the file’s contents to hexadecimal and lets you edit the translation. When you save the file, it is converted automatically back to binary.

You can also use `M-x hexl-mode` to translate an existing buffer into hex. This is useful if you visit a file normally and then discover it is a binary file.

Inserting text always overwrites in Hexl mode. This is to reduce the risk of accidentally spoiling the alignment of data in the file. Ordinary text characters insert themselves (i.e., overwrite with themselves). There are commands for insertion of special characters by their code. Most cursor motion keys, as well as `C-x C-s`, are bound in Hexl mode to commands that produce the same effect. Here is a list of other important commands special to Hexl mode:

### `C-M-d`

Insert a byte with a code typed in decimal.

### `C-M-o`

Insert a byte with a code typed in octal.

### `C-M-x`

Insert a byte with a code typed in hex.

### `C-M-a`

Move to the beginning of a 512-byte page.

### `C-M-e`

Move to the end of a 512-byte page.

### `C-x [`

Move to the beginning of a 1k-byte page.

### `C-x ]`

Move to the end of a 1k-byte page.

### `M-g`

Move to an address specified in hex.

### `M-j`

Move to an address specified in decimal.

### `C-c C-c`

Leave Hexl mode, going back to the major mode this buffer had before you invoked `hexl-mode`.

Other Hexl commands let you insert strings (sequences) of binary bytes, move by `short`s or `int`s, etc.; type `C-h a hexl-RET` for details.
