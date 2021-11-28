---
slug: Lisp-Data-Types
---

A Lisp *object* is a piece of data used and manipulated by Lisp programs. For our purposes, a *type* or *data type* is a set of possible objects.

Every object belongs to at least one type. Objects of the same type have similar structures and may usually be used in the same contexts. Types can overlap, and objects can belong to two or more types. Consequently, we can ask whether an object belongs to a particular type, but not for *the* type of an object.

A few fundamental object types are built into Emacs. These, from which all other types are constructed, are called *primitive types*. Each object belongs to one and only one primitive type. These types include *integer*, *float*, *cons*, *symbol*, *string*, *vector*, *hash-table*, *subr*, *byte-code function*, and *record*, plus several special types, such as *buffer*, that are related to editing. (See [Editing Types](Editing-Types).)

Each primitive type has a corresponding Lisp function that checks whether an object is a member of that type.

Lisp is unlike many other languages in that its objects are *self-typing*: the primitive type of each object is implicit in the object itself. For example, if an object is a vector, nothing can treat it as a number; Lisp knows it is a vector, not a number.

In most languages, the programmer must declare the data type of each variable, and the type is known by the compiler but not represented in the data. Such type declarations do not exist in Emacs Lisp. A Lisp variable can have any type of value, and it remembers whatever value you store in it, type and all. (Actually, a small number of Emacs Lisp variables can only take on values of a certain type. See [Variables with Restricted Values](Variables-with-Restricted-Values).)

This chapter describes the purpose, printed representation, and read syntax of each of the standard types in GNU Emacs Lisp. Details on how to use these types can be found in later chapters.

|                                                    |    |                                            |
| :------------------------------------------------- | -- | :----------------------------------------- |
| • [Printed Representation](Printed-Representation) |    | How Lisp objects are represented as text.  |
| • [Special Read Syntax](Special-Read-Syntax)       |    | An overview of all the special sequences.  |
| • [Comments](Comments)                             |    | Comments and their formatting conventions. |
| • [Programming Types](Programming-Types)           |    | Types found in all Lisp systems.           |
| • [Editing Types](Editing-Types)                   |    | Types specific to Emacs.                   |
| • [Circular Objects](Circular-Objects)             |    | Read syntax for circular structure.        |
| • [Type Predicates](Type-Predicates)               |    | Tests related to types.                    |
| • [Equality Predicates](Equality-Predicates)       |    | Tests of equality between any two objects. |
| • [Mutability](Mutability)                         |    | Some objects should not be modified.       |
