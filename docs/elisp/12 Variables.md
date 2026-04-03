---
slug: Variables
---

A *variable* is a name used in a program to stand for a value. In Lisp, each variable is represented by a Lisp symbol (see [Symbols](/docs/elisp/Symbols)). The variable name is simply the symbol's name, and the variable's value is stored in the symbol's value cell\[^10]. See [Symbol Components](/docs/elisp/Symbol-Components). In Emacs Lisp, the use of a symbol as a variable is independent of its use as a function name.

As previously noted in this manual, a Lisp program is represented primarily by Lisp objects, and only secondarily as text. The textual form of a Lisp program is given by the read syntax of the Lisp objects that constitute the program. Hence, the textual form of a variable in a Lisp program is written using the read syntax for the symbol representing the variable.


[^1]: To be precise, under the default *dynamic scoping* rule, the value cell always holds the variable's current value, but this is not the case under the *lexical scoping* rule. See [Scoping Rules for Variable Bindings](/docs/elisp/Variable-Scoping), for details.
