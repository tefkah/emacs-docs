---
slug: Debugging
---

There are several ways to find and investigate problems in an Emacs Lisp program.

*   If a problem occurs when you run the program, you can use the built-in Emacs Lisp debugger to suspend the Lisp evaluator, and examine and/or alter its internal state.
*   You can use Edebug, a source-level debugger for Emacs Lisp.
*   You can trace the execution of functions involved in the problem using the tracing facilities provided by the `trace.el` package. This package provides the functions `trace-function-foreground` and `trace-function-background` for tracing function calls, and `trace-values` for adding values of select variables to the trace. For the details, see the documentation of these facilities in `trace.el`.
*   If a syntactic problem is preventing Lisp from even reading the program, you can locate it using Lisp editing commands.
*   You can look at the error and warning messages produced by the byte compiler when it compiles the program. See [Compiler Errors](/docs/elisp/Compiler-Errors).
*   You can use the Testcover package to perform coverage testing on the program.
*   You can use the ERT package to write regression tests for the program. See [the ERT manual](https://www.gnu.org/software/emacs/manual/html_mono/ert.html#Top) in ERT: Emacs Lisp Regression Testing.
*   You can profile the program to get hints about how to make it more efficient.

Other useful tools for debugging input and output problems are the dribble file (see [Terminal Input](/docs/elisp/Terminal-Input)) and the `open-termscript` function (see [Terminal Output](/docs/elisp/Terminal-Output)).

|                                              |    |                                                     |
| :------------------------------------------- | -- | :-------------------------------------------------- |
| • [Debugger](/docs/elisp/Debugger)           |    | A debugger for the Emacs Lisp evaluator.            |
| • [Edebug](/docs/elisp/Edebug)               |    | A source-level Emacs Lisp debugger.                 |
| • [Syntax Errors](/docs/elisp/Syntax-Errors) |    | How to find syntax errors.                          |
| • [Test Coverage](/docs/elisp/Test-Coverage) |    | Ensuring you have tested all branches in your code. |
| • [Profiling](/docs/elisp/Profiling)         |    | Measuring the resources that your code uses.        |
