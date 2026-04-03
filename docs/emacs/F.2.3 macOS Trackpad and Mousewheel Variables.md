---
slug: macOS-Trackpad_002fMousewheel-Variables
---

These variables only apply to macOS 10.7 (Lion) and above.

### `ns-use-mwheel-acceleration`

This variable controls whether Emacs ignores the system mousewheel acceleration. When `nil` each 'click' of the mousewheel will correspond exactly with one mousewheel event. When non-`nil`, the default, each 'click' may correspond with more than one mousewheel event, depending on the user's input.

### `ns-use-mwheel-momentum`

This variable controls whether Emacs ignores the system 'momentum' when scrolling using a trackpad. When non-`nil`, the default, scrolling rapidly may result in the buffer continuing to scroll for a short while after the user has lifted their fingers off the trackpad.

### `ns-mwheel-line-height`

This variable controls the sensitivity of scrolling with the trackpad. Apple trackpads scroll by pixels, not lines, so Emacs converts the system's pixel values into lines. When set to a number, this variable sets the number of pixels Emacs will consider as one line. When `nil` or a non-number the default line height is used.

Setting a lower number makes the trackpad more sensitive, and a higher number makes the trackpad less sensitive.
