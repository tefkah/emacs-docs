---
slug: Mouse-Input
---

By default, Emacs supports all the normal mouse actions like setting the cursor by clicking on the left mouse button, and selecting an area by dragging the mouse pointer. All mouse actions can be used to bind commands in the same way you bind them to keyboard events (see [Keys](/docs/emacs/Keys)). This section provides a general overview of using the mouse in Emacs; see [Mouse Commands for Editing](/docs/emacs/Mouse-Commands), and the sections that follow it, for more details about mouse commands in Emacs.

When you click the left mouse button, Emacs receives a `mouse-1` event. To see what command is bound to that event, you can type `C-h c` and then press the left mouse button. Similarly, the middle mouse button is `mouse-2` and the right mouse button is `mouse-3`. If you have a mouse with a wheel, the wheel events are commonly bound to either `wheel-down` or `wheel-up`, or `mouse-4` and `mouse-5`, but that depends on the operating system configuration.

In general, legacy X systems and terminals (see [Using a Mouse in Text Terminals](/docs/emacs/Text_002dOnly-Mouse)) will report `mouse-4` and `mouse-5`, while all other systems will report `wheel-down` and `wheel-up`.

Some mice also have a horizontal scroll wheel, and touchpads usually support scrolling horizontally as well. These events are reported as `wheel-left` and `wheel-right` on all systems other than terminals and legacy X systems, where they are `mouse-6` and `mouse-7`.

You can also combine keyboard modifiers with mouse events, so you can bind a special command that triggers when you, for instance, holds down the Meta key and then uses the middle mouse button. In that case, the event name will be `M-mouse-2`.

On some systems, you can also bind commands for handling touch screen events. In that case, the events are called `touchscreen-update` and `touchscreen-end`.
