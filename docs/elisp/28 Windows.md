---
slug: Windows
---

This chapter describes the functions and variables related to Emacs windows. See [Frames](/docs/elisp/Frames), for how windows are assigned an area of screen available for Emacs to use. See [Display](/docs/elisp/Display), for information on how text is displayed in windows.

|                                                                              |    |                                                                                                                  |
| :--------------------------------------------------------------------------- | -- | :--------------------------------------------------------------------------------------------------------------- |
| • [Basic Windows](/docs/elisp/Basic-Windows)                                 |    | Basic information on using windows.                                                                              |
| • [Windows and Frames](/docs/elisp/Windows-and-Frames)                       |    | Relating windows to the frame they appear on.                                                                    |
| • [Window Sizes](/docs/elisp/Window-Sizes)                                   |    | Accessing a window’s size.                                                                                       |
| • [Resizing Windows](/docs/elisp/Resizing-Windows)                           |    | Changing the sizes of windows.                                                                                   |
| • [Preserving Window Sizes](/docs/elisp/Preserving-Window-Sizes)             |    | Preserving the size of windows.                                                                                  |
| • [Splitting Windows](/docs/elisp/Splitting-Windows)                         |    | Creating a new window.                                                                                           |
| • [Deleting Windows](/docs/elisp/Deleting-Windows)                           |    | Removing a window from its frame.                                                                                |
| • [Recombining Windows](/docs/elisp/Recombining-Windows)                     |    | Preserving the frame layout when splitting and deleting windows.                                                 |
| • [Selecting Windows](/docs/elisp/Selecting-Windows)                         |    | The selected window is the one that you edit in.                                                                 |
| • [Cyclic Window Ordering](/docs/elisp/Cyclic-Window-Ordering)               |    | Moving around the existing windows.                                                                              |
| • [Buffers and Windows](/docs/elisp/Buffers-and-Windows)                     |    | Each window displays the contents of a buffer.                                                                   |
| • [Switching Buffers](/docs/elisp/Switching-Buffers)                         |    | Higher-level functions for switching to a buffer.                                                                |
| • [Displaying Buffers](/docs/elisp/Displaying-Buffers)                       |    | Displaying a buffer in a suitable window.                                                                        |
| • [Window History](/docs/elisp/Window-History)                               |    | Each window remembers the buffers displayed in it.                                                               |
| • [Dedicated Windows](/docs/elisp/Dedicated-Windows)                         |    | How to avoid displaying another buffer in a specific window.                                                     |
| • [Quitting Windows](/docs/elisp/Quitting-Windows)                           |    | How to restore the state prior to displaying a buffer.                                                           |
| • [Side Windows](/docs/elisp/Side-Windows)                                   |    | Special windows on a frame’s sides.                                                                              |
| • [Atomic Windows](/docs/elisp/Atomic-Windows)                               |    | Preserving parts of the window layout.                                                                           |
| • [Window Point](/docs/elisp/Window-Point)                                   |    | Each window has its own location of point.                                                                       |
| • [Window Start and End](/docs/elisp/Window-Start-and-End)                   |    | Buffer positions indicating which text is on-screen in a window.                                                 |
| • [Textual Scrolling](/docs/elisp/Textual-Scrolling)                         |    | Moving text up and down through the window.                                                                      |
| • [Vertical Scrolling](/docs/elisp/Vertical-Scrolling)                       |    | Moving the contents up and down on the window.                                                                   |
| • [Horizontal Scrolling](/docs/elisp/Horizontal-Scrolling)                   |    | Moving the contents sideways on the window.                                                                      |
| • [Coordinates and Windows](/docs/elisp/Coordinates-and-Windows)             |    | Converting coordinates to windows.                                                                               |
| • [Mouse Window Auto-selection](/docs/elisp/Mouse-Window-Auto_002dselection) |    | Automatically selecting windows with the mouse.                                                                  |
| • [Window Configurations](/docs/elisp/Window-Configurations)                 |    | Saving and restoring the state of the screen.                                                                    |
| • [Window Parameters](/docs/elisp/Window-Parameters)                         |    | Associating additional information with windows.                                                                 |
| • [Window Hooks](/docs/elisp/Window-Hooks)                                   |    | Hooks for scrolling, window size changes, redisplay going past a certain point, or window configuration changes. |
