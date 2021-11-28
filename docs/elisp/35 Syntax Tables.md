---
slug: Syntax-Tables
---

A *syntax table* specifies the syntactic role of each character in a buffer. It can be used to determine where words, symbols, and other syntactic constructs begin and end. This information is used by many Emacs facilities, including Font Lock mode (see [Font Lock Mode](Font-Lock-Mode)) and the various complex movement commands (see [Motion](Motion)).

|                                                    |    |                                                      |
| :------------------------------------------------- | -- | :--------------------------------------------------- |
| • [Basics](Syntax-Basics)                          |    | Basic concepts of syntax tables.                     |
| • [Syntax Descriptors](Syntax-Descriptors)         |    | How characters are classified.                       |
| • [Syntax Table Functions](Syntax-Table-Functions) |    | How to create, examine and alter syntax tables.      |
| • [Syntax Properties](Syntax-Properties)           |    | Overriding syntax with text properties.              |
| • [Motion and Syntax](Motion-and-Syntax)           |    | Moving over characters with certain syntaxes.        |
| • [Parsing Expressions](Parsing-Expressions)       |    | Parsing balanced expressions using the syntax table. |
| • [Syntax Table Internals](Syntax-Table-Internals) |    | How syntax table information is stored.              |
| • [Categories](Categories)                         |    | Another way of classifying character syntax.         |
