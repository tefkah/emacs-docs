---
slug: Mac-_002f-GNUstep-Events
---

Nextstep applications receive a number of special events which have no X equivalent. These are sent as specially defined key events, which do not correspond to any sequence of keystrokes. Under Emacs, these key events can be bound to functions just like ordinary keystrokes. Here is a list of these events.

### `ns-open-file`

This event occurs when another Nextstep application requests that Emacs open a file. A typical reason for this would be a user double-clicking a file in the Finder application. By default, Emacs responds to this event by opening a new frame and visiting the file in that frame (`ns-find-file`). As an exception, if the selected buffer is the `*scratch*` buffer, Emacs visits the file in the selected frame.

You can change how Emacs responds to a `ns-open-file` event by changing the variable `ns-pop-up-frames`. Its default value, ‘`fresh`’, is what we have just described. A value of `t` means to always visit the file in a new frame. A value of `nil` means to always visit the file in the selected frame.

### `ns-open-temp-file`

This event occurs when another application requests that Emacs open a temporary file. By default, this is handled by just generating a `ns-open-file` event, the results of which are described above.

### `ns-open-file-line`

Some applications, such as ProjectBuilder and gdb, request not only a particular file, but also a particular line or sequence of lines in the file. Emacs handles this by visiting that file and highlighting the requested line (`ns-open-file-select-line`).

### `ns-drag-n-drop`

This event occurs when a user drags an object from another application into an Emacs frame. The default behavior is to open a file in the window under the mouse, or to insert text at point of the window under the mouse.

The sending application has some limited ability to decide how Emacs handles the sent object, but the user may override the default behavior by holding one or more modifier key.

### `control`

Insert as text in the current buffer. If the object is a file, this will insert the filename.

### `alt/option`

Attempt to open the object as though it is a file or URL.

### `super/command`

Perform the default action for the type. This can be useful when an application is overriding the default behavior.

The modifier keys listed above are defined by macOS and are unaffected by user changes to the modifiers in Emacs.

### `ns-change-font`

This event occurs when the user selects a font in a Nextstep font panel (which can be opened with `Cmd-t`). The default behavior is to adjust the font of the selected frame (`ns-respond-to-changefont`). The name and size of the selected font are stored in the variables `ns-input-font` and `ns-input-fontsize`, respectively.

### `ns-power-off`

This event occurs when the user logs out and Emacs is still running, or when “Quit Emacs" is chosen from the application menu. The default behavior is to save all file-visiting buffers.

Emacs also allows users to make use of Nextstep services, via a set of commands whose names begin with ‘`ns-service-`’ and end with the name of the service. Type `M-x ns-service-TAB` to see a list of these commands. These functions either operate on marked text (replacing it with the result) or take a string argument and return the result as a string. You can also use the Lisp function `ns-perform-service` to pass arbitrary strings to arbitrary services and receive the results back. Note that you may need to restart Emacs to access newly-available services.
