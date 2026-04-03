---
slug: Windows-Misc
---

This section describes Windows-specific features that don't fit anywhere else.

The variable `w32-use-visible-system-caret` is a flag that determines whether to make the system caret visible. The default when no screen reader software is in use is `nil`, which means Emacs draws its own cursor to indicate the position of point. A non-`nil` value means Emacs will indicate point location with the system caret; this facilitates use of screen reader software, and is the default when such software is detected when running Emacs. When this variable is non-`nil`, other variables affecting the cursor display have no effect.

The variable `w32-grab-focus-on-raise`, if set to a non-`nil` value causes a frame to grab focus when it is raised. The default is `t`, which fits well with the Windows default click-to-focus policy.

On Windows 10 (version 1809 and higher) and Windows 11, Emacs title bars and scroll bars by default follow the system's Light or Dark mode, similar to other programs such as Explorer and Command Prompt. To change the color mode, select `Personalization` from `Windows Settings`<!-- /@w -->, then `Colors->Choose your color`<!-- /@w --> (or `Choose your default app mode`<!-- /@w --> or `Choose your mode`<!-- /@w -->); then restart Emacs. On Windows 11, you can select separate default modes for Windows and for applications.

If you don't want Emacs to follow the system's Dark mode setting, customize the variable `w32-follow-system-dark-mode` to a `nil` value; then Emacs will use the default Light mode regardless of system-wide settings. Changing the value of this variable affects only the Emacs frames created after the change, so you should set its value in your init file (see [The Emacs Initialization File](/docs/emacs/Init-File)), either directly or via `M-x customize-variable`, which lets you save the customized value, see [Saving Customizations](/docs/emacs/Saving-Customizations).
