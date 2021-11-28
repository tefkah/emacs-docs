---
slug: Variables
---

A *variable* is a name used in a program to stand for a value. In Lisp, each variable is represented by a Lisp symbol (see [Symbols](/docs/elisp/Symbols)). The variable name is simply the symbol’s name, and the variable’s value is stored in the symbol’s value cell[^1]. See [Symbol Components](/docs/elisp/Symbol-Components). In Emacs Lisp, the use of a symbol as a variable is independent of its use as a function name.

As previously noted in this manual, a Lisp program is represented primarily by Lisp objects, and only secondarily as text. The textual form of a Lisp program is given by the read syntax of the Lisp objects that constitute the program. Hence, the textual form of a variable in a Lisp program is written using the read syntax for the symbol representing the variable.

|                                                                                    |    |                                                                           |
| :--------------------------------------------------------------------------------- | -- | :------------------------------------------------------------------------ |
| • [Global Variables](/docs/elisp/Global-Variables)                                 |    | Variable values that exist permanently, everywhere.                       |
| • [Constant Variables](/docs/elisp/Constant-Variables)                             |    | Variables that never change.                                              |
| • [Local Variables](/docs/elisp/Local-Variables)                                   |    | Variable values that exist only temporarily.                              |
| • [Void Variables](/docs/elisp/Void-Variables)                                     |    | Symbols that lack values.                                                 |
| • [Defining Variables](/docs/elisp/Defining-Variables)                             |    | A definition says a symbol is used as a variable.                         |
| • [Tips for Defining](/docs/elisp/Tips-for-Defining)                               |    | Things you should think about when you define a variable.                 |
| • [Accessing Variables](/docs/elisp/Accessing-Variables)                           |    | Examining values of variables whose names are known only at run time.     |
| • [Setting Variables](/docs/elisp/Setting-Variables)                               |    | Storing new values in variables.                                          |
| • [Watching Variables](/docs/elisp/Watching-Variables)                             |    | Running a function when a variable is changed.                            |
| • [Variable Scoping](/docs/elisp/Variable-Scoping)                                 |    | How Lisp chooses among local and global values.                           |
| • [Buffer-Local Variables](/docs/elisp/Buffer_002dLocal-Variables)                 |    | Variable values in effect only in one buffer.                             |
| • [File Local Variables](/docs/elisp/File-Local-Variables)                         |    | Handling local variable lists in files.                                   |
| • [Directory Local Variables](/docs/elisp/Directory-Local-Variables)               |    | Local variables common to all files in a directory.                       |
| • [Connection Local Variables](/docs/elisp/Connection-Local-Variables)             |    | Local variables common for remote connections.                            |
| • [Variable Aliases](/docs/elisp/Variable-Aliases)                                 |    | Variables that are aliases for other variables.                           |
| • [Variables with Restricted Values](/docs/elisp/Variables-with-Restricted-Values) |    | Non-constant variables whose value can *not* be an arbitrary Lisp object. |
| • [Generalized Variables](/docs/elisp/Generalized-Variables)                       |    | Extending the concept of variables.                                       |

[^1]: To be precise, under the default *dynamic scoping* rule, the value cell always holds the variable’s current value, but this is not the case under the *lexical scoping* rule. See [Variable Scoping](/docs/elisp/Variable-Scoping), for details.
