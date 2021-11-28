---
slug: Keyboard-Macros
---

In this chapter we describe how to record a sequence of editing commands so you can repeat it conveniently later.

A *keyboard macro* is a command defined by an Emacs user to stand for another sequence of keys. For example, if you discover that you are about to type `C-n M-d C-d` forty times, you can speed your work by defining a keyboard macro to do `C-n M-d C-d`, and then executing it 39 more times.

You define a keyboard macro by executing and recording the commands which are its definition. Put differently, as you define a keyboard macro, the definition is being executed for the first time. This way, you can see the effects of your commands, so that you don’t have to figure them out in your head. When you close the definition, the keyboard macro is defined and also has been, in effect, executed once. You can then do the whole thing over again by invoking the macro.

Keyboard macros differ from ordinary Emacs commands in that they are written in the Emacs command language rather than in Lisp. This makes it easier for the novice to write them, and makes them more convenient as temporary hacks. However, the Emacs command language is not powerful enough as a programming language to be useful for writing anything intelligent or general. For such things, Lisp must be used.

|                                                            |    |                                                       |
| :--------------------------------------------------------- | -- | :---------------------------------------------------- |
| • [Basic Keyboard Macro](Basic-Keyboard-Macro)             |    | Defining and running keyboard macros.                 |
| • [Keyboard Macro Ring](Keyboard-Macro-Ring)               |    | Where previous keyboard macros are saved.             |
| • [Keyboard Macro Counter](Keyboard-Macro-Counter)         |    | Inserting incrementing numbers in macros.             |
| • [Keyboard Macro Query](Keyboard-Macro-Query)             |    | Making keyboard macros do different things each time. |
| • [Save Keyboard Macro](Save-Keyboard-Macro)               |    | Giving keyboard macros names; saving them in files.   |
| • [Edit Keyboard Macro](Edit-Keyboard-Macro)               |    | Editing keyboard macros.                              |
| • [Keyboard Macro Step-Edit](Keyboard-Macro-Step_002dEdit) |    | Interactively executing and editing a keyboard macro. |
