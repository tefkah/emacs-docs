---
slug: Macros
---

*Macros* enable you to define new control constructs and other language features. A macro is defined much like a function, but instead of telling how to compute a value, it tells how to compute another Lisp expression which will in turn compute the value. We call this expression the *expansion* of the macro.

Macros can do this because they operate on the unevaluated expressions for the arguments, not on the argument values as functions do. They can therefore construct an expansion containing these argument expressions or parts of them.

If you are using a macro to do something an ordinary function could do, just for the sake of speed, consider using an inline function instead. See [Inline Functions](/docs/elisp/Inline-Functions).

|                                                            |    |                                                                                     |
| :--------------------------------------------------------- | -- | :---------------------------------------------------------------------------------- |
| • [Simple Macro](/docs/elisp/Simple-Macro)                 |    | A basic example.                                                                    |
| • [Expansion](/docs/elisp/Expansion)                       |    | How, when and why macros are expanded.                                              |
| • [Compiling Macros](/docs/elisp/Compiling-Macros)         |    | How macros are expanded by the compiler.                                            |
| • [Defining Macros](/docs/elisp/Defining-Macros)           |    | How to write a macro definition.                                                    |
| • [Problems with Macros](/docs/elisp/Problems-with-Macros) |    | Don’t evaluate the macro arguments too many times. Don’t hide the user’s variables. |
| • [Indenting Macros](/docs/elisp/Indenting-Macros)         |    | Specifying how to indent macro calls.                                               |
