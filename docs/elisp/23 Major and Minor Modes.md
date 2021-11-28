---
slug: Modes
---

A *mode* is a set of definitions that customize Emacs behavior in useful ways. There are two varieties of modes: *minor modes*, which provide features that users can turn on and off while editing; and *major modes*, which are used for editing or interacting with a particular kind of text. Each buffer has exactly one *major mode* at a time.

This chapter describes how to write both major and minor modes, how to indicate them in the mode line, and how they run hooks supplied by the user. For related topics such as keymaps and syntax tables, see [Keymaps](/docs/elisp/Keymaps), and [Syntax Tables](/docs/elisp/Syntax-Tables).

|                                                        |    |                                                               |
| :----------------------------------------------------- | -- | :------------------------------------------------------------ |
| • [Hooks](/docs/elisp/Hooks)                           |    | How to use hooks; how to write code that provides hooks.      |
| • [Major Modes](/docs/elisp/Major-Modes)               |    | Defining major modes.                                         |
| • [Minor Modes](/docs/elisp/Minor-Modes)               |    | Defining minor modes.                                         |
| • [Mode Line Format](/docs/elisp/Mode-Line-Format)     |    | Customizing the text that appears in the mode line.           |
| • [Imenu](/docs/elisp/Imenu)                           |    | Providing a menu of definitions made in a buffer.             |
| • [Font Lock Mode](/docs/elisp/Font-Lock-Mode)         |    | How modes can highlight text according to syntax.             |
| • [Auto-Indentation](/docs/elisp/Auto_002dIndentation) |    | How to teach Emacs to indent for a major mode.                |
| • [Desktop Save Mode](/docs/elisp/Desktop-Save-Mode)   |    | How modes can have buffer state saved between Emacs sessions. |
