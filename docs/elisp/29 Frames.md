---
slug: Frames
---

A *frame* is a screen object that contains one or more Emacs windows (see [Windows](/docs/elisp/Windows)). It is the kind of object called a “window" in the terminology of graphical environments; but we can’t call it a “window" here, because Emacs uses that word in a different way. In Emacs Lisp, a *frame object* is a Lisp object that represents a frame on the screen. See [Frame Type](/docs/elisp/Frame-Type).

A frame initially contains a single main window and/or a minibuffer window; you can subdivide the main window vertically or horizontally into smaller windows. See [Splitting Windows](/docs/elisp/Splitting-Windows).

A *terminal* is a display device capable of displaying one or more Emacs frames. In Emacs Lisp, a *terminal object* is a Lisp object that represents a terminal. See [Terminal Type](/docs/elisp/Terminal-Type).

There are two classes of terminals: *text terminals* and *graphical terminals*. Text terminals are non-graphics-capable displays, including `xterm` and other terminal emulators. On a text terminal, each Emacs frame occupies the terminal’s entire screen; although you can create additional frames and switch between them, the terminal only shows one frame at a time. Graphical terminals, on the other hand, are managed by graphical display systems such as the X Window System, which allow Emacs to show multiple frames simultaneously on the same display.

On GNU and Unix systems, you can create additional frames on any available terminal, within a single Emacs session, regardless of whether Emacs was started on a text or graphical terminal. Emacs can display on both graphical and text terminals simultaneously. This comes in handy, for instance, when you connect to the same session from several remote locations. See [Multiple Terminals](/docs/elisp/Multiple-Terminals).

### <span className="tag function">`function`</span> **framep** *object*

This predicate returns a non-`nil` value if `object` is a frame, and `nil` otherwise. For a frame, the value indicates which kind of display the frame uses:

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

### <span className="tag function">`function`</span> **frame-terminal** *\&optional frame*

This function returns the terminal object that displays `frame`. If `frame` is `nil` or unspecified, it defaults to the selected frame.

### <span className="tag function">`function`</span> **terminal-live-p** *object*

This predicate returns a non-`nil` value if `object` is a terminal that is live (i.e., not deleted), and `nil` otherwise. For live terminals, the return value indicates what kind of frames are displayed on that terminal; the list of possible values is the same as for `framep` above.

On a graphical terminal we distinguish two types of frames: A normal *top-level frame* is a frame whose window-system window is a child of the window-system’s root window for that terminal. A child frame is a frame whose window-system window is the child of the window-system window of another Emacs frame. See [Child Frames](/docs/elisp/Child-Frames).

|                                                                    |    |                                                |
| :----------------------------------------------------------------- | -- | :--------------------------------------------- |
| • [Creating Frames](/docs/elisp/Creating-Frames)                   |    | Creating additional frames.                    |
| • [Multiple Terminals](/docs/elisp/Multiple-Terminals)             |    | Displaying on several different devices.       |
| • [Frame Geometry](/docs/elisp/Frame-Geometry)                     |    | Geometric properties of frames.                |
| • [Frame Parameters](/docs/elisp/Frame-Parameters)                 |    | Controlling frame size, position, font, etc.   |
| • [Terminal Parameters](/docs/elisp/Terminal-Parameters)           |    | Parameters common for all frames on terminal.  |
| • [Frame Titles](/docs/elisp/Frame-Titles)                         |    | Automatic updating of frame titles.            |
| • [Deleting Frames](/docs/elisp/Deleting-Frames)                   |    | Frames last until explicitly deleted.          |
| • [Finding All Frames](/docs/elisp/Finding-All-Frames)             |    | How to examine all existing frames.            |
| • [Minibuffers and Frames](/docs/elisp/Minibuffers-and-Frames)     |    | How a frame finds the minibuffer to use.       |
| • [Input Focus](/docs/elisp/Input-Focus)                           |    | Specifying the selected frame.                 |
| • [Visibility of Frames](/docs/elisp/Visibility-of-Frames)         |    | Frames may be visible or invisible, or icons.  |
| • [Raising and Lowering](/docs/elisp/Raising-and-Lowering)         |    | Raising, Lowering and Restacking Frames.       |
| • [Frame Configurations](/docs/elisp/Frame-Configurations)         |    | Saving the state of all frames.                |
| • [Child Frames](/docs/elisp/Child-Frames)                         |    | Making a frame the child of another.           |
| • [Mouse Tracking](/docs/elisp/Mouse-Tracking)                     |    | Getting events that say when the mouse moves.  |
| • [Mouse Position](/docs/elisp/Mouse-Position)                     |    | Asking where the mouse is, or moving it.       |
| • [Pop-Up Menus](/docs/elisp/Pop_002dUp-Menus)                     |    | Displaying a menu for the user to select from. |
| • [Dialog Boxes](/docs/elisp/Dialog-Boxes)                         |    | Displaying a box to ask yes or no.             |
| • [Pointer Shape](/docs/elisp/Pointer-Shape)                       |    | Specifying the shape of the mouse pointer.     |
| • [Window System Selections](/docs/elisp/Window-System-Selections) |    | Transferring text to and from other X clients. |
| • [Drag and Drop](/docs/elisp/Drag-and-Drop)                       |    | Internals of Drag-and-Drop implementation.     |
| • [Color Names](/docs/elisp/Color-Names)                           |    | Getting the definitions of color names.        |
| • [Text Terminal Colors](/docs/elisp/Text-Terminal-Colors)         |    | Defining colors for text terminals.            |
| • [Resources](/docs/elisp/Resources)                               |    | Getting resource values from the server.       |
| • [Display Feature Testing](/docs/elisp/Display-Feature-Testing)   |    | Determining the features of a terminal.        |
