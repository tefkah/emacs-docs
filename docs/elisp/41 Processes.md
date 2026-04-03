---
slug: Processes
---

In the terminology of operating systems, a *process* is a space in which a program can execute. Emacs runs in a process. Emacs Lisp programs can invoke other programs in processes of their own. These are called *subprocesses* or *child processes* of the Emacs process, which is their *parent process*.

A subprocess of Emacs may be *synchronous* or *asynchronous*, depending on how it is created. When you create a synchronous subprocess, the Lisp program waits for the subprocess to terminate before continuing execution. When you create an asynchronous subprocess, it can run in parallel with the Lisp program. This kind of subprocess is represented within Emacs by a Lisp object which is also called a "process". Lisp programs can use this object to communicate with the subprocess or to control it. For example, you can send signals, obtain status information, receive output from the process, or send input to it.

In addition to processes that run programs, Lisp programs can open connections of several types to devices or processes running on the same machine or on other machines. The supported connection types are: TCP and UDP network connections, serial port connections, and pipe connections. Each such connection is also represented by a process object.

### Function: **processp** *object*

This function returns `t` if *object* represents an Emacs process object, `nil` otherwise. The process object can represent a subprocess running a program or a connection of any supported type.

In addition to subprocesses of the current Emacs session, you can also access other processes running on your machine. See [Accessing Other Processes](/docs/elisp/System-Processes).
