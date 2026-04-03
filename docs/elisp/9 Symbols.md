---
slug: Symbols
---

A *symbol* is an object with a unique name. This chapter describes symbols, their components, their property lists, and how they are created and interned. Separate chapters describe the use of symbols as variables and as function names; see [Variables](/docs/elisp/Variables), and [Functions](/docs/elisp/Functions). For the precise read syntax for symbols, see [Symbol Type](/docs/elisp/Symbol-Type).

You can test whether an arbitrary Lisp object is a symbol with `symbolp`:

### Function: **symbolp** *object*

This function returns `t` if *object* is a symbol, `nil` otherwise.
