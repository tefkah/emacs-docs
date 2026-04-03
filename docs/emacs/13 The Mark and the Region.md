---
slug: Mark
---

Emacs, like many other applications, lets you select some arbitrary part of the buffer text and invoke commands that operate on such *selected text*. In Emacs, we call the selected text *the region*; its handling is very similar to that of selected text in other programs, but there are also important differences.

The region is the portion of the buffer between *the mark* and the current *point*. You define a region by setting the mark somewhere (with, for instance, the `C-SPC` command), and then moving point to where you want the region to end. (Or you can use the mouse to define a region.)

The region always extends between point and the mark, no matter which of them comes earlier in the text; each time you move point, the region changes.

Setting the mark at a position in the text *activates* it. When the mark is active, we say also that the region is active; Emacs indicates its extent by highlighting the text within it, using the `region` face (see [Customizing Faces](/docs/emacs/Face-Customization)).

After certain non-motion commands, including any command that changes the text in the buffer, Emacs automatically *deactivates* the mark; this turns off the highlighting. You can also explicitly deactivate the mark at any time, by typing `C-g` (see [Quitting and Aborting](/docs/emacs/Quitting)).

Many commands limit the text on which they operate to the active region. For instance, the `M-%` command (which replaces matching text) normally works on the entire accessible portion of the buffer, but if you have an active region, it'll work only on that region instead.

The mark is useful even if it is not active. For example, you can move to previous mark locations using the mark ring. See [The Mark Ring](/docs/emacs/Mark-Ring). Additionally, some commands will have an effect even on an inactive region (for example *upcase-region*). You can also reactivate the region with commands like `C-x C-x`.

The above behavior, which is the default in interactive sessions, is known as Transient Mark mode. Disabling Transient Mark mode switches Emacs to an alternative behavior, in which the region is usually not highlighted. See [Disabling Transient Mark Mode](/docs/emacs/Disabled-Transient-Mark).

Setting the mark in one buffer has no effect on the marks in other buffers. When you return to a buffer with an active mark, the mark is at the same place as before. When multiple windows show the same buffer, they can have different values of point, and thus different regions, but they all share one common mark position. See [Multiple Windows](/docs/emacs/Windows). Ordinarily, only the selected window highlights its region; however, if the variable `highlight-nonselected-windows` is non-`nil`, each window highlights its own region.

There is another kind of region: the rectangular region. See [Rectangles](/docs/emacs/Rectangles).
