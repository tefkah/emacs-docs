---
slug: Mac-_002f-GNUstep-Customization
---

There are a few customization options that are specific to the Nextstep port. For example, they affect things such as the modifier keys and the fullscreen behavior. To see all such options, use `M-x customize-group RET ns RET`.

### F.2.1 Modifier keys

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

If the `symbol` is one of `control`, `meta`, `alt`, `super` or `hyper`, this describes the Emacs modifier it represents. If `symbol` is `none`, Emacs does not use the key, which retains its standard behavior. For instance, the `Option` key in macOS is then used for composing additional characters.

The variables for right-hand keys, like `ns-right-alternate-modifier`, may also be set to `left`, which means to use the same behavior as the corresponding left-hand key.

### F.2.2 Frame Variables

### `ns-use-proxy-icon`

This variable specifies whether to display the proxy icon in the titlebar.

### `ns-confirm-quit`

This variable specifies whether to display a graphical confirmation dialogue on quitting.

### `ns-auto-hide-menu-bar`

This variable specifies whether the macOS menu bar is hidden when an Emacs frame is selected. If non-nil the menu bar is not shown unless the mouse pointer is moved near to the top of the screen.

### `ns-use-native-fullscreen`

This variable controls whether to use native, or non-native fullscreen. Native fullscreen is only available on macOS 10.7 and above.

### F.2.3 macOS Trackpad/Mousewheel Variables

These variables only apply to macOS 10.7 (Lion) and above.

### `ns-use-mwheel-acceleration`

This variable controls whether Emacs ignores the system mousewheel acceleration. When nil each ‘click’ of the mousewheel will correspond exactly with one mousewheel event. When non-nil, the default, each ‘click’ may correspond with more than one mousewheel event, depending on the user’s input.

### `ns-use-mwheel-momentum`

This variable controls whether Emacs ignores the system ‘momentum’ when scrolling using a trackpad. When non-nil, the default, scrolling rapidly may result in the buffer continuing to scroll for a short while after the user has lifted their fingers off the trackpad.

### `ns-mwheel-line-height`

This variable controls the sensitivity of scrolling with the trackpad. Apple trackpads scroll by pixels, not lines, so Emacs converts the system’s pixel values into lines. When set to a number, this variable sets the number of pixels Emacs will consider as one line. When nil or a non-number the default line height is used.

Setting a lower number makes the trackpad more sensitive, and a higher number makes the trackpad less sensitive.

### F.2.4 Font Panel

The standard Mac / GNUstep font panel is accessible with `M-x ns-popup-font-panel` and will set the default font in the frame most recently used or clicked on.
