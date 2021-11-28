---
slug: Symbols
---

A *symbol* is an object with a unique name. This chapter describes symbols, their components, their property lists, and how they are created and interned. Separate chapters describe the use of symbols as variables and as function names; see [Variables](Variables), and [Functions](Functions). For the precise read syntax for symbols, see [Symbol Type](Symbol-Type).

You can test whether an arbitrary Lisp object is a symbol with `symbolp`:

### <span className="tag function">`function`</span> **symbolp** *object*

This function returns `t` if `object` is a symbol, `nil` otherwise.

|                                          |    |                                                                          |
| :--------------------------------------- | -- | :----------------------------------------------------------------------- |
| • [Symbol Components](Symbol-Components) |    | Symbols have names, values, function definitions and property lists.     |
| • [Definitions](Definitions)             |    | A definition says how a symbol will be used.                             |
| • [Creating Symbols](Creating-Symbols)   |    | How symbols are kept unique.                                             |
| • [Symbol Properties](Symbol-Properties) |    | Each symbol has a property list for recording miscellaneous information. |
