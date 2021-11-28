---
slug: Mark
---

Many Emacs commands operate on an arbitrary contiguous part of the current buffer. To specify the text for such a command to operate on, you set *the mark* at one end of it, and move point to the other end. The text between point and the mark is called *the region*. The region always extends between point and the mark, no matter which one comes earlier in the text; each time you move point, the region changes.

Setting the mark at a position in the text also *activates* it. When the mark is active, we say also that the region is active; Emacs indicates its extent by highlighting the text within it, using the `region` face (see [Face Customization](/docs/emacs/Face-Customization)).

This is one of the few faces that has the `:extend t` attribute by default, which implies that the same face is used to highlight the text and space between end of line and the window border. To highlight only the text you could set this attribute to `nil`.

After certain non-motion commands, including any command that changes the text in the buffer, Emacs automatically *deactivates* the mark; this turns off the highlighting. You can also explicitly deactivate the mark at any time, by typing `C-g` (see [Quitting](/docs/emacs/Quitting)).

The above default behavior is known as Transient Mark mode. Disabling Transient Mark mode switches Emacs to an alternative behavior, in which the region is usually not highlighted. See [Disabled Transient Mark](/docs/emacs/Disabled-Transient-Mark).

Setting the mark in one buffer has no effect on the marks in other buffers. When you return to a buffer with an active mark, the mark is at the same place as before. When multiple windows show the same buffer, they can have different values of point, and thus different regions, but they all share one common mark position. See [Windows](/docs/emacs/Windows). Ordinarily, only the selected window highlights its region; however, if the variable `highlight-nonselected-windows` is non-`nil`, each window highlights its own region.

There is another kind of region: the rectangular region. See [Rectangles](/docs/emacs/Rectangles).

|                                                                  |    |                                                         |
| :--------------------------------------------------------------- | -- | :------------------------------------------------------ |
| • [Setting Mark](/docs/emacs/Setting-Mark)                       |    | Commands to set the mark.                               |
| • [Marking Objects](/docs/emacs/Marking-Objects)                 |    | Commands to put region around textual units.            |
| • [Using Region](/docs/emacs/Using-Region)                       |    | Summary of ways to operate on contents of the region.   |
| • [Mark Ring](/docs/emacs/Mark-Ring)                             |    | Previous mark positions saved so you can go back there. |
| • [Global Mark Ring](/docs/emacs/Global-Mark-Ring)               |    | Previous mark positions in various buffers.             |
| • [Shift Selection](/docs/emacs/Shift-Selection)                 |    | Using shifted cursor motion keys.                       |
| • [Disabled Transient Mark](/docs/emacs/Disabled-Transient-Mark) |    | Leaving regions unhighlighted by default.               |
