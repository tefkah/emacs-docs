---
slug: Control-Structures
---

A Lisp program consists of a set of *expressions*, or *forms* (see [Forms](/docs/elisp/Forms)). We control the order of execution of these forms by enclosing them in *control structures*. Control structures are special forms which control when, whether, or how many times to execute the forms they contain.

The simplest order of execution is sequential execution: first form `a`, then form `b`, and so on. This is what happens when you write several forms in succession in the body of a function, or at top level in a file of Lisp code—the forms are executed in the order written. We call this *textual order*. For example, if a function body consists of two forms `a` and `b`, evaluation of the function evaluates first `a` and then `b`. The result of evaluating `b` becomes the value of the function.

Explicit control structures make possible an order of execution other than sequential.

Emacs Lisp provides several kinds of control structure, including other varieties of sequencing, conditionals, iteration, and (controlled) jumps—all discussed below. The built-in control structures are special forms since their subforms are not necessarily evaluated or not evaluated sequentially. You can use macros to define your own control structure constructs (see [Macros](/docs/elisp/Macros)).

|                                                                                |    |                                   |
| :----------------------------------------------------------------------------- | -- | :-------------------------------- |
| • [Sequencing](/docs/elisp/Sequencing)                                         |    | Evaluation in textual order.      |
| • [Conditionals](/docs/elisp/Conditionals)                                     |    | `if`, `cond`, `when`, `unless`.   |
| • [Combining Conditions](/docs/elisp/Combining-Conditions)                     |    | `and`, `or`, `not`, and friends.  |
| • [Pattern-Matching Conditional](/docs/elisp/Pattern_002dMatching-Conditional) |    | How to use `pcase` and friends.   |
| • [Iteration](/docs/elisp/Iteration)                                           |    | `while` loops.                    |
| • [Generators](/docs/elisp/Generators)                                         |    | Generic sequences and coroutines. |
| • [Nonlocal Exits](/docs/elisp/Nonlocal-Exits)                                 |    | Jumping out of a sequence.        |
