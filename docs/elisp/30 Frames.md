---
slug: Frames
---

A *frame* is a screen object that contains one or more Emacs windows (see [Windows](/docs/elisp/Windows)). It is the kind of object called a "window" in the terminology of graphical environments; but we can't call it a "window" here, because Emacs uses that word in a different way. In Emacs Lisp, a *frame object* is a Lisp object that represents a frame on the screen. See [Frame Type](/docs/elisp/Frame-Type).

A frame initially contains a single main window and/or a minibuffer window; you can subdivide the main window vertically or horizontally into smaller windows. See [Splitting Windows](/docs/elisp/Splitting-Windows).

A *terminal* is a display device capable of displaying one or more Emacs frames. In Emacs Lisp, a *terminal object* is a Lisp object that represents a terminal. See [Terminal Type](/docs/elisp/Terminal-Type).

There are two classes of terminals: *text terminals* and *graphical terminals*. Text terminals are non-graphics-capable displays, including `xterm` and other terminal emulators. On a text terminal, each Emacs frame occupies the terminal's entire screen; although you can create additional frames and switch between them, the terminal only shows one frame at a time. Graphical terminals, on the other hand, are managed by graphical display systems such as the X Window System, which allow Emacs to show multiple frames simultaneously on the same display.

On GNU and Unix systems, you can create additional frames on any available terminal, within a single Emacs session, regardless of whether Emacs was started on a text or graphical terminal. Emacs can display on both graphical and text terminals simultaneously. This comes in handy, for instance, when you connect to the same session from several remote locations. See [Multiple Terminals](/docs/elisp/Multiple-Terminals).

### Function: **framep** *object*

This predicate returns a non-`nil` value if *object* is a frame, and `nil` otherwise. For a frame, the value indicates which kind of display the frame uses:

### `t`

The frame is displayed on a text terminal.

### `x`

The frame is displayed on an X graphical terminal.

### `w32`

The frame is displayed on a MS-Windows graphical terminal.

### `ns`

The frame is displayed on a GNUstep or Macintosh Cocoa graphical terminal.

### `pc`

The frame is displayed on an MS-DOS terminal.

### `haiku`

The frame is displayed using the Haiku Application Kit.

### `pgtk`

The frame is displayed using pure GTK facilities.

### `android`

The frame is displayed on an Android device.

### Function: **frame-terminal** *\&optional frame*

This function returns the terminal object that displays *frame*. If *frame* is `nil` or unspecified, it defaults to the selected frame.

### Function: **terminal-live-p** *object*

This predicate returns a non-`nil` value if *object* is a terminal that is live (i.e., not deleted), and `nil` otherwise. For live terminals, the return value indicates what kind of frames are displayed on that terminal; the list of possible values is the same as for `framep` above.

On a graphical terminal we distinguish two types of frames: A normal *top-level frame* is a frame whose window-system window is a child of the window-system's root window for that terminal. A child frame is a frame whose window-system window is the child of the window-system window of another Emacs frame. See [Child Frames](/docs/elisp/Child-Frames).
