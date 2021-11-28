---
slug: Modes
---

Emacs contains many *editing modes* that alter its basic behavior in useful ways. These are divided into *major modes* and *minor modes*.

Major modes provide specialized facilities for working on a particular file type, such as a C source file (see [Programs](/docs/emacs/Programs)), or a particular type of non-file buffer, such as a shell buffer (see [Shell](/docs/emacs/Shell)). Major modes are mutually exclusive; each buffer has one and only one major mode at any time.

Minor modes are optional features which you can turn on or off, not necessarily specific to a type of file or buffer. For example, Auto Fill mode is a minor mode in which `SPC` breaks lines between words as you type (see [Auto Fill](/docs/emacs/Auto-Fill)). Minor modes are independent of one another, and of the selected major mode.

|                                                |    |                                                                           |
| :--------------------------------------------- | -- | :------------------------------------------------------------------------ |
| • [Major Modes](/docs/emacs/Major-Modes)       |    | Text mode vs. Lisp mode vs. C mode...                                     |
| • [Minor Modes](/docs/emacs/Minor-Modes)       |    | Each minor mode is a feature you can turn on independently of any others. |
| • [Choosing Modes](/docs/emacs/Choosing-Modes) |    | How modes are chosen when visiting files.                                 |
