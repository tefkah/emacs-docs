---
slug: Screen
---

On a graphical display, such as on GNU/Linux using the X Window System, Emacs occupies a graphical window. On a text terminal, Emacs occupies the entire terminal screen. We will use the term *frame* to mean a graphical window or terminal screen occupied by Emacs. Emacs behaves very similarly on both kinds of frames. It normally starts out with just one frame, but you can create additional frames if you wish (see [Frames](Frames)).

Each frame consists of several distinct regions. At the top of the frame is a *menu bar*, which allows you to access commands via a series of menus. On a graphical display, directly below the menu bar is a *tool bar*, a row of icons that perform editing commands when you click on them. At the very bottom of the frame is an *echo area*, where informative messages are displayed and where you enter information when Emacs asks for it.

The main area of the frame, below the tool bar (if one exists) and above the echo area, is called *the window*. Henceforth in this manual, we will use the word “window" in this sense. Graphical display systems commonly use the word “window" with a different meaning; but, as stated above, we refer to those graphical windows as “frames".

An Emacs window is where the *buffer*—the text or other graphics you are editing or viewing—is displayed. On a graphical display, the window possesses a *scroll bar* on one side, which can be used to scroll through the buffer. The last line of the window is a *mode line*. This displays various information about what is going on in the buffer, such as whether there are unsaved changes, the editing modes that are in use, the current line number, and so forth.

When you start Emacs, there is normally only one window in the frame. However, you can subdivide this window horizontally or vertically to create multiple windows, each of which can independently display a buffer (see [Windows](Windows)).

At any time, one window is the *selected window*. On a graphical display, the selected window shows a more prominent cursor (usually solid and blinking); other windows show a less prominent cursor (usually a hollow box). On a text terminal, there is only one cursor, which is shown in the selected window. The buffer displayed in the selected window is called the *current buffer*, and it is where editing happens. Most Emacs commands implicitly apply to the current buffer; the text displayed in unselected windows is mostly visible for reference. If you use multiple frames on a graphical display, selecting a particular frame selects a window in that frame.

|                          |    |                                                       |
| :----------------------- | -- | :---------------------------------------------------- |
| • [Point](Point)         |    | The place in the text where editing commands operate. |
| • [Echo Area](Echo-Area) |    | Short messages appear at the bottom of the screen.    |
| • [Mode Line](Mode-Line) |    | Interpreting the mode line.                           |
| • [Menu Bar](Menu-Bar)   |    | How to use the menu bar.                              |
