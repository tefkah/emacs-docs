---
slug: Modifier-keys
---

The following variables control the behavior of the actual modifier keys:

### `ns-alternate-modifier`

### `ns-right-alternate-modifier`

The left and right `Option` or `Alt` keys.

### `ns-command-modifier`

### `ns-right-command-modifier`

The left and right `Command` keys.

### `ns-control-modifier`

### `ns-right-control-modifier`

The left and right `Control` keys.

### `ns-function-modifier`

The `Function` (fn) key.

The value of each variable is either a symbol, describing the key for any purpose, or a list of the form `(:ordinary symbol :function symbol :mouse symbol)`, which describes the modifier when used with ordinary keys, function keys (that do not produce a character, such as arrow keys), and mouse clicks.

If the *symbol* is one of `control`, `meta`, `alt`, `super` or `hyper`, this describes the Emacs modifier it represents. If *symbol* is `none`, Emacs does not use the key, which retains its standard behavior. For instance, the `Option` key in macOS is then used for composing additional characters.

The variables for right-hand keys, like `ns-right-alternate-modifier`, may also be set to `left`, which means to use the same behavior as the corresponding left-hand key.
