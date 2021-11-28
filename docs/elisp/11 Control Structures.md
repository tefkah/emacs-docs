---
slug: Control-Structures
---

A Lisp program consists of a set of *expressions*, or *forms* (see [Forms](Forms)). We control the order of execution of these forms by enclosing them in *control structures*. Control structures are special forms which control when, whether, or how many times to execute the forms they contain.

The simplest order of execution is sequential execution: first form `a`, then form `b`, and so on. This is what happens when you write several forms in succession in the body of a function, or at top level in a file of Lisp code—the forms are executed in the order written. We call this *textual order*. For example, if a function body consists of two forms `a` and `b`, evaluation of the function evaluates first `a` and then `b`. The result of evaluating `b` becomes the value of the function.

Explicit control structures make possible an order of execution other than sequential.

Emacs Lisp provides several kinds of control structure, including other varieties of sequencing, conditionals, iteration, and (controlled) jumps—all discussed below. The built-in control structures are special forms since their subforms are not necessarily evaluated or not evaluated sequentially. You can use macros to define your own control structure constructs (see [Macros](Macros)).

|                                                                    |    |                                   |
| :----------------------------------------------------------------- | -- | :-------------------------------- |
| • [Sequencing](Sequencing)                                         |    | Evaluation in textual order.      |
| • [Conditionals](Conditionals)                                     |    | `if`, `cond`, `when`, `unless`.   |
| • [Combining Conditions](Combining-Conditions)                     |    | `and`, `or`, `not`, and friends.  |
| • [Pattern-Matching Conditional](Pattern_002dMatching-Conditional) |    | How to use `pcase` and friends.   |
| • [Iteration](Iteration)                                           |    | `while` loops.                    |
| • [Generators](Generators)                                         |    | Generic sequences and coroutines. |
| • [Nonlocal Exits](Nonlocal-Exits)                                 |    | Jumping out of a sequence.        |
