---
slug: Mac-_002f-GNUstep-Events
---

Nextstep applications receive a number of special events which have no X equivalent. These are sent as specially defined key events, which do not correspond to any sequence of keystrokes. Under Emacs, these key events can be bound to functions just like ordinary keystrokes. Here is a list of these events.

### `ns-open-file`

This event occurs when another Nextstep application requests that Emacs open a file. A typical reason for this would be a user double-clicking a file in the Finder application. By default, Emacs responds to this event by opening a new frame and visiting the file in that frame (`ns-find-file`). As an exception, if the selected buffer is the `*scratch*` buffer, Emacs visits the file in the selected frame.

You can change how Emacs responds to a `ns-open-file` event by changing the variable `ns-pop-up-frames`. Its default value, '`fresh`', is what we have just described. A value of `t` means to always visit the file in a new frame. A value of `nil` means to always visit the file in the selected frame.

### `ns-open-temp-file`

This event occurs when another application requests that Emacs open a temporary file. By default, this is handled by just generating a `ns-open-file` event, the results of which are described above.

### `ns-open-file-line`

Some applications, such as ProjectBuilder and gdb, request not only a particular file, but also a particular line or sequence of lines in the file. Emacs handles this by visiting that file and highlighting the requested line (`ns-open-file-select-line`).

### `ns-power-off`

This event occurs when the user logs out and Emacs is still running, or when "Quit Emacs" is chosen from the application menu. The default behavior is to save all file-visiting buffers.

### `ns-show-prefs`

This event occurs when the user selects "Preferences" from the application menu. By default, it is bound to the command `customize`.

Emacs also allows users to make use of Nextstep services, via a set of commands whose names begin with '`ns-service-`' and end with the name of the service. Type `M-x ns-service- TAB` to see a list of these commands. These functions either operate on marked text (replacing it with the result) or take a string argument and return the result as a string. You can also use the Lisp function `ns-perform-service` to pass arbitrary strings to arbitrary services and receive the results back. Note that you may need to restart Emacs to access newly-available services.
