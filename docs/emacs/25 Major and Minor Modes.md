---
slug: Modes
---

Emacs contains many *editing modes* that alter its basic behavior in useful ways. These are divided into *major modes* and *minor modes*.

Major modes provide specialized facilities for working on a particular file type, such as a C source file (see [Editing Programs](/docs/emacs/Programs)), or a particular type of non-file buffer, such as a shell buffer (see [Running Shell Commands from Emacs](/docs/emacs/Shell)). Major modes are mutually exclusive; each buffer has one and only one major mode at any time.

Minor modes are optional features which you can turn on or off, not necessarily specific to a type of file or buffer. For example, Auto Fill mode is a minor mode in which `SPC` breaks lines between words as you type (see [Auto Fill Mode](/docs/emacs/Auto-Fill)). Minor modes are independent of one another, and of the selected major mode.
