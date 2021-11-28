---
slug: Tips
---

This chapter describes no additional features of Emacs Lisp. Instead it gives advice on making effective use of the features described in the previous chapters, and describes conventions Emacs Lisp programmers should follow.

You can automatically check some of the conventions described below by running the command `M-x checkdoc RET` when visiting a Lisp file. It cannot check all of the conventions, and not all the warnings it gives necessarily correspond to problems, but it is worth examining them all. Alternatively, use the command `M-x checkdoc-current-buffer RET` to check the conventions in the current buffer, or `checkdoc-file` when you want to check a file in batch mode, e.g., with a command run by `M-x compile RET`.

|                                                                  |    |                                               |
| :--------------------------------------------------------------- | -- | :-------------------------------------------- |
| • [Coding Conventions](/docs/elisp/Coding-Conventions)           |    | Conventions for clean and robust programs.    |
| • [Key Binding Conventions](/docs/elisp/Key-Binding-Conventions) |    | Which keys should be bound by which programs. |
| • [Programming Tips](/docs/elisp/Programming-Tips)               |    | Making Emacs code fit smoothly in Emacs.      |
| • [Compilation Tips](/docs/elisp/Compilation-Tips)               |    | Making compiled code run fast.                |
| • [Warning Tips](/docs/elisp/Warning-Tips)                       |    | Turning off compiler warnings.                |
| • [Documentation Tips](/docs/elisp/Documentation-Tips)           |    | Writing readable documentation strings.       |
| • [Comment Tips](/docs/elisp/Comment-Tips)                       |    | Conventions for writing comments.             |
| • [Library Headers](/docs/elisp/Library-Headers)                 |    | Standard headers for library packages.        |
