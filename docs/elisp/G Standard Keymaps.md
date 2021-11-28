---
slug: Standard-Keymaps
---

In this section we list some of the more general keymaps. Many of these exist when Emacs is first started, but some are loaded only when the respective feature is accessed.

There are many other, more specialized, maps than these; in particular those associated with major and minor modes. The minibuffer uses several keymaps (see [Completion Commands](/docs/elisp/Completion-Commands)). For more details on keymaps, see [Keymaps](/docs/elisp/Keymaps).

### `2C-mode-map`

A sparse keymap for subcommands of the prefix `C-x 6`.\
See [Two-Column Editing](https://www.gnu.org/software/emacs/manual/html_mono/emacs.html#Two_002dColumn) in The GNU Emacs Manual.

### `abbrev-map`

A sparse keymap for subcommands of the prefix `C-x a`.\
See [Defining Abbrevs](https://www.gnu.org/software/emacs/manual/html_mono/emacs.html#Defining-Abbrevs) in The GNU Emacs Manual.

### `button-buffer-map`

A sparse keymap useful for buffers containing buffers.\
You may want to use this as a parent keymap. See [Buttons](/docs/elisp/Buttons).

### `button-map`

A sparse keymap used by buttons.

### `ctl-x-4-map`

A sparse keymap for subcommands of the prefix `C-x 4`.

### `ctl-x-5-map`

A sparse keymap for subcommands of the prefix `C-x 5`.

### `ctl-x-map`

A full keymap for `C-x` commands.

### `ctl-x-r-map`

A sparse keymap for subcommands of the prefix `C-x r`.\
See [Registers](https://www.gnu.org/software/emacs/manual/html_mono/emacs.html#Registers) in The GNU Emacs Manual.

### `esc-map`

A full keymap for `ESC` (or `Meta`) commands.

### `facemenu-keymap`

A sparse keymap used for the `M-o` prefix key.

### `function-key-map`

The parent keymap of all `local-function-key-map` (q.v.) instances.

### `global-map`

The full keymap containing default global key bindings.\
Modes should not modify the Global map.

### `goto-map`

A sparse keymap used for the `M-g` prefix key.

### `help-map`

A sparse keymap for the keys following the help character `C-h`.\
See [Help Functions](/docs/elisp/Help-Functions).

### `Helper-help-map`

A full keymap used by the help utility package.\
It has the same keymap in its value cell and in its function cell.

### `input-decode-map`

The keymap for translating keypad and function keys.\
If there are none, then it contains an empty sparse keymap. See [Translation Keymaps](/docs/elisp/Translation-Keymaps).

### `key-translation-map`

A keymap for translating keys. This one overrides ordinary key bindings, unlike `local-function-key-map`. See [Translation Keymaps](/docs/elisp/Translation-Keymaps).

### `kmacro-keymap`

A sparse keymap for keys that follows the `C-x C-k` prefix search.\
See [Keyboard Macros](https://www.gnu.org/software/emacs/manual/html_mono/emacs.html#Keyboard-Macros) in The GNU Emacs Manual.

### `local-function-key-map`

The keymap for translating key sequences to preferred alternatives.\
If there are none, then it contains an empty sparse keymap. See [Translation Keymaps](/docs/elisp/Translation-Keymaps).

### `menu-bar-file-menu`

### `menu-bar-edit-menu`

### `menu-bar-options-menu`

### `global-buffers-menu-map`

### `menu-bar-tools-menu`

### `menu-bar-help-menu`

These keymaps display the main, top-level menus in the menu bar.\
Some of them contain sub-menus. For example, the Edit menu contains `menu-bar-search-menu`, etc. See [Menu Bar](/docs/elisp/Menu-Bar).

### `minibuffer-inactive-mode-map`

A full keymap used in the minibuffer when it is not active.\
See [Editing in the Minibuffer](https://www.gnu.org/software/emacs/manual/html_mono/emacs.html#Minibuffer-Edit) in The GNU Emacs Manual.

### `mode-line-coding-system-map`

### `mode-line-input-method-map`

### `mode-line-column-line-number-mode-map`

These keymaps control various areas of the mode line.\
See [Mode Line Format](/docs/elisp/Mode-Line-Format).

### `mode-specific-map`

The keymap for characters following `C-c`. Note, this is in the global map. This map is not actually mode-specific: its name was chosen to be informative in `C-h b` (`display-bindings`), where it describes the main use of the `C-c` prefix key.

### `mouse-appearance-menu-map`

A sparse keymap used for the `S-mouse-1` key.

### `mule-keymap`

The global keymap used for the `C-x RET` prefix key.

### `narrow-map`

A sparse keymap for subcommands of the prefix `C-x n`.

### `prog-mode-map`

The keymap used by Prog mode.\
See [Basic Major Modes](/docs/elisp/Basic-Major-Modes).

### `query-replace-map`

### `multi-query-replace-map`

A sparse keymap used for responses in `query-replace` and related commands; also for `y-or-n-p` and `map-y-or-n-p`. The functions that use this map do not support prefix keys; they look up one event at a time. `multi-query-replace-map` extends `query-replace-map` for multi-buffer replacements. See [query-replace-map](/docs/elisp/Search-and-Replace).

### `search-map`

A sparse keymap that provides global bindings for search-related commands.

### `special-mode-map`

The keymap used by Special mode.\
See [Basic Major Modes](/docs/elisp/Basic-Major-Modes).

### `tab-prefix-map`

The global keymap used for the `C-x t` prefix key for tab-bar related commands.\
See [Tab Bars](https://www.gnu.org/software/emacs/manual/html_mono/emacs.html#Tab-Bars) in The GNU Emacs Manual.

### `tab-bar-map`

The keymap defining the contents of the tab bar.\
See [Tab Bars](https://www.gnu.org/software/emacs/manual/html_mono/emacs.html#Tab-Bars) in The GNU Emacs Manual.

### `tool-bar-map`

The keymap defining the contents of the tool bar.\
See [Tool Bar](/docs/elisp/Tool-Bar).

### `universal-argument-map`

A sparse keymap used while processing `C-u`.\
See [Prefix Command Arguments](/docs/elisp/Prefix-Command-Arguments).

### `vc-prefix-map`

The global keymap used for the `C-x v` prefix key.

### `x-alternatives-map`

A sparse keymap used to map certain keys under graphical frames.\
The function `x-setup-function-keys` uses this.
