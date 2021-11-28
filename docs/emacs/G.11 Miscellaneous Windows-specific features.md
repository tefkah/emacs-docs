---
slug: Windows-Misc
---

This section describes Windows-specific features that don’t fit anywhere else.

The variable `w32-use-visible-system-caret` is a flag that determines whether to make the system caret visible. The default when no screen reader software is in use is `nil`, which means Emacs draws its own cursor to indicate the position of point. A non-`nil` value means Emacs will indicate point location with the system caret; this facilitates use of screen reader software, and is the default when such software is detected when running Emacs. When this variable is non-`nil`, other variables affecting the cursor display have no effect.

The variable `w32-grab-focus-on-raise`, if set to a non-`nil` value causes a frame to grab focus when it is raised. The default is `t`, which fits well with the Windows default click-to-focus policy.
