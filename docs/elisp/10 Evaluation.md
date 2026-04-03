---
slug: Evaluation
---

The *evaluation* of expressions in Emacs Lisp is performed by the *Lisp interpreter*---a program that receives a Lisp object as input and computes its *value as an expression*. How it does this depends on the data type of the object, according to rules described in this chapter. The interpreter runs automatically to evaluate portions of your program, but can also be called explicitly via the Lisp primitive function `eval`.
