---
slug: Threads
---

Emacs Lisp provides a limited form of concurrency, called *threads*. All the threads in a given instance of Emacs share the same memory. Concurrency in Emacs Lisp is “mostly cooperative", meaning that Emacs will only switch execution between threads at well-defined times. However, the Emacs thread support has been designed in a way to later allow more fine-grained concurrency, and correct programs should not rely on cooperative threading.

Currently, thread switching will occur upon explicit request via `thread-yield`, when waiting for keyboard input or for process output from asynchronous processes (e.g., during `accept-process-output`), or during blocking operations relating to threads, such as mutex locking or `thread-join`.

Emacs Lisp provides primitives to create and control threads, and also to create and control mutexes and condition variables, useful for thread synchronization.

While global variables are shared among all Emacs Lisp threads, local variables are not—a dynamic `let` binding is local. Each thread also has its own current buffer (see [Current Buffer](Current-Buffer)) and its own match data (see [Match Data](Match-Data)).

Note that `let` bindings are treated specially by the Emacs Lisp implementation. There is no way to duplicate this unwinding and rewinding behavior other than by using `let`. For example, a manual implementation of `let` written using `unwind-protect` cannot arrange for variable values to be thread-specific.

In the case of lexical bindings (see [Variable Scoping](Variable-Scoping)), a closure is an object like any other in Emacs Lisp, and bindings in a closure are shared by any threads invoking the closure.

|                                                    |    |                                         |
| :------------------------------------------------- | -- | :-------------------------------------- |
| • [Basic Thread Functions](Basic-Thread-Functions) |    | Basic thread functions.                 |
| • [Mutexes](Mutexes)                               |    | Mutexes allow exclusive access to data. |
| • [Condition Variables](Condition-Variables)       |    | Inter-thread events.                    |
| • [The Thread List](The-Thread-List)               |    | Show the active threads.                |
