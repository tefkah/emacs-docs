---
slug: Frames
---

When Emacs is started on a graphical display, e.g., on the X Window System, it occupies a graphical system-level display region. In this manual, we call this a *frame*, reserving the word "window" for the part of the frame used for displaying a buffer. A frame initially contains one window, but it can be subdivided into multiple windows (see [Multiple Windows](/docs/emacs/Windows)). A frame normally also contains a menu bar, tool bar, and echo area.

You can also create additional frames (see [Creating Frames](/docs/emacs/Creating-Frames)). All frames created in the same Emacs session have access to the same underlying buffers and other data. For instance, if a buffer is being shown in more than one frame, any changes made to it in one frame show up immediately in the other frames too.

Typing `C-x C-c` closes all the frames on the current display, and ends the Emacs session if it has no frames open on any other displays (see [Exiting Emacs](/docs/emacs/Exiting)). To close just the selected frame, type `C-x 5 0` (that is zero, not `o`).

This chapter describes Emacs features specific to graphical displays (particularly mouse commands), and features for managing multiple frames. On text terminals, many of these features are unavailable. However, it is still possible to create multiple frames on text terminals; such frames are displayed one at a time, filling the entire terminal screen (see [Text Terminals](/docs/emacs/Text-Terminals)). It is also possible to use the mouse on some text terminals (see [Using a Mouse in Text Terminals](/docs/emacs/Text_002dOnly-Mouse), for doing so on GNU and Unix systems; and see [Mouse Usage on MS-DOS](/docs/emacs/MS_002dDOS-Mouse), for doing so on MS-DOS). Menus are supported on all text terminals.
