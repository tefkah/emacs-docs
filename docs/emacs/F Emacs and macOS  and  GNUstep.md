---
slug: Mac-OS-_002f-GNUstep
---

This section describes the peculiarities of using Emacs built with the GNUstep libraries on GNU/Linux or other operating systems, or on macOS with native window system support. On macOS, Emacs can be built either without window system support, with X11, or with the Cocoa interface; this section only applies to the Cocoa build. This does not support versions before macOS 10.6.

GNUstep is free software; macOS is not. Because it is a non-free operating system, macOS denies its users the freedom that every computer user deserves. That is an injustice. For your freedom’s sake, we urge you to switch to a free operating system.

We support GNU Emacs on proprietary operating systems because we hope this taste of freedom will inspire users to escape from them.

For various historical and technical reasons, Emacs uses the term ‘`Nextstep`’ internally, instead of “Cocoa" or “macOS"; for instance, most of the commands and variables described in this section begin with ‘`ns-`’, which is short for ‘`Nextstep`’. NeXTstep was an application interface released by NeXT Inc. during the 1980s, of which Cocoa is a direct descendant. Apart from Cocoa, there is another NeXTstep-style system: GNUstep, which is free software. As of this writing, Emacs GNUstep support is in alpha status (see [GNUstep Support](/docs/emacs/GNUstep-Support)), but we hope to improve it in the future.

|                                                                              |    |                                           |
| :--------------------------------------------------------------------------- | -- | :---------------------------------------- |
| • [Mac / GNUstep Basics](/docs/emacs/Mac-_002f-GNUstep-Basics)               |    | Basic Emacs usage under GNUstep or macOS. |
| • [Mac / GNUstep Customization](/docs/emacs/Mac-_002f-GNUstep-Customization) |    | Customizations under GNUstep or macOS.    |
| • [Mac / GNUstep Events](/docs/emacs/Mac-_002f-GNUstep-Events)               |    | How window system events are handled.     |
| • [GNUstep Support](/docs/emacs/GNUstep-Support)                             |    | Details on status of GNUstep support.     |
