---
slug: Byte-Compilation
---

Emacs Lisp has a *compiler* that translates functions written in Lisp into a special representation called *byte-code* that can be executed more efficiently. The compiler replaces Lisp function definitions with byte-code. When a byte-code function is called, its definition is evaluated by the *byte-code interpreter*.

Because the byte-compiled code is evaluated by the byte-code interpreter, instead of being executed directly by the machine’s hardware (as true compiled code is), byte-code is completely transportable from machine to machine without recompilation. It is not, however, as fast as true compiled code.

In general, any version of Emacs can run byte-compiled code produced by recent earlier versions of Emacs, but the reverse is not true.

If you do not want a Lisp file to be compiled, ever, put a file-local variable binding for `no-byte-compile` into it, like this:

```lisp
;; -*-no-byte-compile: t; -*-
```

|                                                  |    |                                                 |
| :----------------------------------------------- | -- | :---------------------------------------------- |
| • [Speed of Byte-Code](Speed-of-Byte_002dCode)   |    | An example of speedup from byte compilation.    |
| • [Compilation Functions](Compilation-Functions) |    | Byte compilation functions.                     |
| • [Docs and Compilation](Docs-and-Compilation)   |    | Dynamic loading of documentation strings.       |
| • [Dynamic Loading](Dynamic-Loading)             |    | Dynamic loading of individual functions.        |
| • [Eval During Compile](Eval-During-Compile)     |    | Code to be evaluated when you compile.          |
| • [Compiler Errors](Compiler-Errors)             |    | Handling compiler error messages.               |
| • [Byte-Code Objects](Byte_002dCode-Objects)     |    | The data type used for byte-compiled functions. |
| • [Disassembly](Disassembly)                     |    | Disassembling byte-code; how to read byte-code. |
