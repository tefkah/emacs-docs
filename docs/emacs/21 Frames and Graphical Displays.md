---
slug: Frames
---

When Emacs is started on a graphical display, e.g., on the X Window System, it occupies a graphical system-level display region. In this manual, we call this a *frame*, reserving the word “window" for the part of the frame used for displaying a buffer. A frame initially contains one window, but it can be subdivided into multiple windows (see [Windows](/docs/emacs/Windows)). A frame normally also contains a menu bar, tool bar, and echo area.

You can also create additional frames (see [Creating Frames](/docs/emacs/Creating-Frames)). All frames created in the same Emacs session have access to the same underlying buffers and other data. For instance, if a buffer is being shown in more than one frame, any changes made to it in one frame show up immediately in the other frames too.

Typing `C-x C-c` closes all the frames on the current display, and ends the Emacs session if it has no frames open on any other displays (see [Exiting](/docs/emacs/Exiting)). To close just the selected frame, type `C-x 5 0` (that is zero, not `o`).

This chapter describes Emacs features specific to graphical displays (particularly mouse commands), and features for managing multiple frames. On text terminals, many of these features are unavailable. However, it is still possible to create multiple frames on text terminals; such frames are displayed one at a time, filling the entire terminal screen (see [Non-Window Terminals](/docs/emacs/Non_002dWindow-Terminals)). It is also possible to use the mouse on some text terminals (see [Text-Only Mouse](/docs/emacs/Text_002dOnly-Mouse), for doing so on GNU and Unix systems; and see [MS-DOS Mouse](/docs/emacs/MS_002dDOS-Mouse), for doing so on MS-DOS). Menus are supported on all text terminals.

|                                                                |    |                                                         |
| :------------------------------------------------------------- | -- | :------------------------------------------------------ |
| • [Mouse Commands](/docs/emacs/Mouse-Commands)                 |    | Moving, cutting, and pasting, with the mouse.           |
| • [Word and Line Mouse](/docs/emacs/Word-and-Line-Mouse)       |    | Mouse commands for selecting whole words or lines.      |
| • [Mouse References](/docs/emacs/Mouse-References)             |    | Using the mouse to select an item from a list.          |
| • [Menu Mouse Clicks](/docs/emacs/Menu-Mouse-Clicks)           |    | Mouse clicks that bring up menus.                       |
| • [Mode Line Mouse](/docs/emacs/Mode-Line-Mouse)               |    | Mouse clicks on the mode line.                          |
| • [Creating Frames](/docs/emacs/Creating-Frames)               |    | Creating additional Emacs frames with various contents. |
| • [Frame Commands](/docs/emacs/Frame-Commands)                 |    | Iconifying, deleting, and switching frames.             |
| • [Fonts](/docs/emacs/Fonts)                                   |    | Changing the frame font.                                |
| • [Speedbar](/docs/emacs/Speedbar)                             |    | How to make and use a speedbar frame.                   |
| • [Multiple Displays](/docs/emacs/Multiple-Displays)           |    | How one Emacs instance can talk to several displays.    |
| • [Frame Parameters](/docs/emacs/Frame-Parameters)             |    | Changing the colors and other modes of frames.          |
| • [Scroll Bars](/docs/emacs/Scroll-Bars)                       |    | How to enable and disable scroll bars; how to use them. |
| • [Window Dividers](/docs/emacs/Window-Dividers)               |    | Window separators that can be dragged with the mouse.   |
| • [Drag and Drop](/docs/emacs/Drag-and-Drop)                   |    | Using drag and drop to open files and insert text.      |
| • [Menu Bars](/docs/emacs/Menu-Bars)                           |    | Enabling and disabling the menu bar.                    |
| • [Tool Bars](/docs/emacs/Tool-Bars)                           |    | Enabling and disabling the tool bar.                    |
| • [Tab Bars](/docs/emacs/Tab-Bars)                             |    | Enabling and disabling the tab bar.                     |
| • [Dialog Boxes](/docs/emacs/Dialog-Boxes)                     |    | Controlling use of dialog boxes.                        |
| • [Tooltips](/docs/emacs/Tooltips)                             |    | Displaying information at the current mouse position.   |
| • [Mouse Avoidance](/docs/emacs/Mouse-Avoidance)               |    | Preventing the mouse pointer from obscuring text.       |
| • [Non-Window Terminals](/docs/emacs/Non_002dWindow-Terminals) |    | Multiple frames on terminals that show only one.        |
| • [Text-Only Mouse](/docs/emacs/Text_002dOnly-Mouse)           |    | Using the mouse in text terminals.                      |
