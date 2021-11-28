---
slug: Processes
---

In the terminology of operating systems, a *process* is a space in which a program can execute. Emacs runs in a process. Emacs Lisp programs can invoke other programs in processes of their own. These are called *subprocesses* or *child processes* of the Emacs process, which is their *parent process*.

A subprocess of Emacs may be *synchronous* or *asynchronous*, depending on how it is created. When you create a synchronous subprocess, the Lisp program waits for the subprocess to terminate before continuing execution. When you create an asynchronous subprocess, it can run in parallel with the Lisp program. This kind of subprocess is represented within Emacs by a Lisp object which is also called a “process". Lisp programs can use this object to communicate with the subprocess or to control it. For example, you can send signals, obtain status information, receive output from the process, or send input to it.

In addition to processes that run programs, Lisp programs can open connections of several types to devices or processes running on the same machine or on other machines. The supported connection types are: TCP and UDP network connections, serial port connections, and pipe connections. Each such connection is also represented by a process object.

### <span className="tag function">`function`</span> **processp** *object*

This function returns `t` if `object` represents an Emacs process object, `nil` otherwise. The process object can represent a subprocess running a program or a connection of any supported type.

In addition to subprocesses of the current Emacs session, you can also access other processes running on your machine. See [System Processes](/docs/elisp/System-Processes).

|                                                                |    |                                                                          |
| :------------------------------------------------------------- | -- | :----------------------------------------------------------------------- |
| • [Subprocess Creation](/docs/elisp/Subprocess-Creation)       |    | Functions that start subprocesses.                                       |
| • [Shell Arguments](/docs/elisp/Shell-Arguments)               |    | Quoting an argument to pass it to a shell.                               |
| • [Synchronous Processes](/docs/elisp/Synchronous-Processes)   |    | Details of using synchronous subprocesses.                               |
| • [Asynchronous Processes](/docs/elisp/Asynchronous-Processes) |    | Starting up an asynchronous subprocess.                                  |
| • [Deleting Processes](/docs/elisp/Deleting-Processes)         |    | Eliminating an asynchronous subprocess.                                  |
| • [Process Information](/docs/elisp/Process-Information)       |    | Accessing run-status and other attributes.                               |
| • [Input to Processes](/docs/elisp/Input-to-Processes)         |    | Sending input to an asynchronous subprocess.                             |
| • [Signals to Processes](/docs/elisp/Signals-to-Processes)     |    | Stopping, continuing or interrupting an asynchronous subprocess.         |
| • [Output from Processes](/docs/elisp/Output-from-Processes)   |    | Collecting output from an asynchronous subprocess.                       |
| • [Sentinels](/docs/elisp/Sentinels)                           |    | Sentinels run when process run-status changes.                           |
| • [Query Before Exit](/docs/elisp/Query-Before-Exit)           |    | Whether to query if exiting will kill a process.                         |
| • [System Processes](/docs/elisp/System-Processes)             |    | Accessing other processes running on your system.                        |
| • [Transaction Queues](/docs/elisp/Transaction-Queues)         |    | Transaction-based communication with subprocesses.                       |
| • [Network](/docs/elisp/Network)                               |    | Opening network connections.                                             |
| • [Network Servers](/docs/elisp/Network-Servers)               |    | Network servers let Emacs accept net connections.                        |
| • [Datagrams](/docs/elisp/Datagrams)                           |    | UDP network connections.                                                 |
| • [Low-Level Network](/docs/elisp/Low_002dLevel-Network)       |    | Lower-level but more general function to create connections and servers. |
| • [Misc Network](/docs/elisp/Misc-Network)                     |    | Additional relevant functions for net connections.                       |
| • [Serial Ports](/docs/elisp/Serial-Ports)                     |    | Communicating with serial ports.                                         |
| • [Byte Packing](/docs/elisp/Byte-Packing)                     |    | Using bindat to pack and unpack binary data.                             |
