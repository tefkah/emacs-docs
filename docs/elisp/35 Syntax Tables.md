---
slug: Syntax-Tables
---

A *syntax table* specifies the syntactic role of each character in a buffer. It can be used to determine where words, symbols, and other syntactic constructs begin and end. This information is used by many Emacs facilities, including Font Lock mode (see [Font Lock Mode](/docs/elisp/Font-Lock-Mode)) and the various complex movement commands (see [Motion](/docs/elisp/Motion)).

|                                                                |    |                                                      |
| :------------------------------------------------------------- | -- | :--------------------------------------------------- |
| • [Basics](/docs/elisp/Syntax-Basics)                          |    | Basic concepts of syntax tables.                     |
| • [Syntax Descriptors](/docs/elisp/Syntax-Descriptors)         |    | How characters are classified.                       |
| • [Syntax Table Functions](/docs/elisp/Syntax-Table-Functions) |    | How to create, examine and alter syntax tables.      |
| • [Syntax Properties](/docs/elisp/Syntax-Properties)           |    | Overriding syntax with text properties.              |
| • [Motion and Syntax](/docs/elisp/Motion-and-Syntax)           |    | Moving over characters with certain syntaxes.        |
| • [Parsing Expressions](/docs/elisp/Parsing-Expressions)       |    | Parsing balanced expressions using the syntax table. |
| • [Syntax Table Internals](/docs/elisp/Syntax-Table-Internals) |    | How syntax table information is stored.              |
| • [Categories](/docs/elisp/Categories)                         |    | Another way of classifying character syntax.         |
