---
slug: Windows-Processes
---

Emacs compiled as a native Windows application (as opposed to the DOS version) includes full support for asynchronous subprocesses. In the Windows version, synchronous and asynchronous subprocesses work fine on all versions of MS-Windows, as long as you run only 32-bit or 64-bit Windows applications. However, when you run a DOS application in a subprocess, you may encounter problems or be unable to run the application at all; and if you run two DOS applications at the same time in two subprocesses, you may have to reboot your system.

Since the standard command interpreter (and most command line utilities) on Windows 9X are DOS applications, these problems are significant when using that system. But there’s nothing we can do about them; only Microsoft can fix them.

If you run just one DOS application subprocess, the subprocess should work as expected as long as it is “well-behaved" and does not perform direct screen access or other unusual actions. If you have a CPU monitor application, your machine will appear to be 100% busy even when the DOS application is idle, but this is only an artifact of the way CPU monitors measure processor load.

You must terminate the DOS application before you start any other DOS application in a different subprocess. Emacs is unable to interrupt or terminate a DOS subprocess. The only way you can terminate such a subprocess is by giving it a command that tells its program to exit.

If you attempt to run two DOS applications at the same time in separate subprocesses, the second one that is started will be suspended until the first one finishes, even if either or both of them are asynchronous.

If you can go to the first subprocess, and tell it to exit, the second subprocess should continue normally. However, if the second subprocess is synchronous, Emacs itself will be hung until the first subprocess finishes. If it will not finish without user input, then you have no choice but to reboot if you are running on Windows 9X. If you are running on Windows NT and later, you can use a process viewer application to kill the appropriate instance of NTVDM instead (this will terminate both DOS subprocesses).

If you have to reboot Windows 9X in this situation, do not use the `Shutdown` command on the `Start` menu; that usually hangs the system. Instead, type `Ctrl-Alt-DEL` and then choose `Shutdown`. That usually works, although it may take a few minutes to do its job.

The variable `w32-quote-process-args` controls how Emacs quotes the process arguments. Non-`nil` means quote with the `"` character. If the value is a character, Emacs uses that character to escape any quote characters that appear; otherwise it chooses a suitable escape character based on the type of the program.

The variable `w32-pipe-buffer-size` controls the size of the buffer Emacs requests from the system when it creates pipes for communications with subprocesses. The default value is zero, which lets the OS choose the size. Any valid positive value will request a buffer of that size in bytes. This can be used to tailor communications with subprocesses to programs that exhibit unusual behavior with respect to buffering pipe I/O.

If you need to invoke MS-DOS programs as Emacs subprocesses, you may see low rate of reading data from such programs. Setting the variable `w32-pipe-read-delay` to a non-zero value may improve throughput in these cases; we suggest the value of 50 for such situations. The default is zero.

The function `w32-shell-execute` can be useful for writing customized commands that run MS-Windows applications registered to handle a certain standard Windows operation for a specific type of document or file. This function is a wrapper around the Windows `ShellExecute` API. See the MS-Windows API documentation for more details.
