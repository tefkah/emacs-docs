---
slug: GNU-Emacs-Internals
---

This chapter describes how the runnable Emacs executable is dumped with the preloaded Lisp libraries in it, how storage is allocated, and some internal aspects of GNU Emacs that may be of interest to C programmers.

|                                                          |    |                                                    |
| :------------------------------------------------------- | -- | :------------------------------------------------- |
| • [Building Emacs](Building-Emacs)                       |    | How the dumped Emacs is made.                      |
| • [Pure Storage](Pure-Storage)                           |    | Kludge to make preloaded Lisp functions shareable. |
| • [Garbage Collection](Garbage-Collection)               |    | Reclaiming space for Lisp objects no longer used.  |
| • [Stack-allocated Objects](Stack_002dallocated-Objects) |    | Temporary conses and strings on C stack.           |
| • [Memory Usage](Memory-Usage)                           |    | Info about total size of Lisp objects made so far. |
| • [C Dialect](C-Dialect)                                 |    | What C variant Emacs is written in.                |
| • [Writing Emacs Primitives](Writing-Emacs-Primitives)   |    | Writing C code for Emacs.                          |
| • [Writing Dynamic Modules](Writing-Dynamic-Modules)     |    | Writing loadable modules for Emacs.                |
| • [Object Internals](Object-Internals)                   |    | Data formats of buffers, windows, processes.       |
| • [C Integer Types](C-Integer-Types)                     |    | How C integer types are used inside Emacs.         |
