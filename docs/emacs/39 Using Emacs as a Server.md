---
slug: Emacs-Server
---

Various programs can invoke your choice of editor to edit a particular piece of text. For instance, version control programs invoke an editor to enter version control logs (see [Version Control](/docs/emacs/Version-Control)), and the Unix `mail` utility invokes an editor to enter a message to send. By convention, your choice of editor is specified by the environment variable `EDITOR`. If you set `EDITOR` to ‘`emacs`’, Emacs would be invoked, but in an inconvenient way—by starting a new Emacs process. This is inconvenient because the new Emacs process doesn’t share buffers, a command history, or other kinds of information with any existing Emacs process.

You can solve this problem by setting up Emacs as an *edit server*, so that it “listens" for external edit requests and acts accordingly. There are various ways to start an Emacs server:

*   Run the command `server-start` in an existing Emacs process: either type `M-x server-start`, or put the expression `(server-start)` in your init file (see [Init File](/docs/emacs/Init-File)). The existing Emacs process is the server; when you exit Emacs, the server dies with the Emacs process.

*   Run Emacs as a *daemon*, using one of the ‘`--daemon`’ command-line options. See [Initial Options](/docs/emacs/Initial-Options). When Emacs is started this way, it calls `server-start` after initialization and does not open an initial frame. It then waits for edit requests from clients.

*   If your operating system uses `systemd` to manage startup, you can automatically start Emacs in daemon mode when you login using the supplied *systemd unit file*. To activate this:

    ```lisp
    systemctl --user enable emacs
    ```

    (If your Emacs was installed into a non-standard location, you may need to copy the `emacs.service` file to a standard directory such as `~/.config/systemd/user/`.)

*   An external process can invoke the Emacs server when a connection event occurs upon a specified socket and pass the socket to the new Emacs server process. An instance of this is the socket functionality of `systemd`: the `systemd` service creates a socket and listens for connections on it; when `emacsclient` connects to it for the first time, `systemd` can launch the Emacs server and hand over the socket to it for servicing `emacsclient` connections. A setup to use this functionality could be:

    `~/.config/systemd/user/emacs.socket`:

    ```lisp
    [Socket]
    ListenStream=/path/to/.emacs.socket

    [Install]
    WantedBy=sockets.target
    ```

    (The `emacs.service` file described above must also be installed.)

    The `ListenStream` path will be the path that Emacs listens for connections from `emacsclient`; this is a file of your choice.

Once an Emacs server is started, you can use a shell command called `emacsclient` to connect to the Emacs process and tell it to visit a file. You can then set the `EDITOR` environment variable to ‘`emacsclient`’, so that external programs will use the existing Emacs process for editing.[^1]

You can run multiple Emacs servers on the same machine by giving each one a unique *server name*, using the variable `server-name`. For example, `M-x set-variable RET server-name RET "foo" RET` sets the server name to ‘`foo`’. The `emacsclient` program can specify a server by name, using the ‘`-s`’ or the ‘`-f`’ option (see [emacsclient Options](/docs/emacs/emacsclient-Options)), depending on whether or not the server uses a TCP socket (see [TCP Emacs server](/docs/emacs/TCP-Emacs-server)).

If you want to run multiple Emacs daemons (see [Initial Options](/docs/emacs/Initial-Options)), you can give each daemon its own server name like this:

```lisp
  emacs --daemon=foo
```

If you have defined a server by a unique server name, it is possible to connect to the server from another Emacs instance and evaluate Lisp expressions on the server, using the `server-eval-at` function. For instance, `(server-eval-at "foo" '(+ 1 2))` evaluates the expression `(+ 1 2)` on the ‘`foo`’ server, and returns `3`. (If there is no server with that name, an error is signaled.) Currently, this feature is mainly useful for developers.

|                                                            |    |                                 |
| :--------------------------------------------------------- | -- | :------------------------------ |
| • [TCP Emacs server](/docs/emacs/TCP-Emacs-server)         |    | Listening to a TCP socket.      |
| • [Invoking emacsclient](/docs/emacs/Invoking-emacsclient) |    | Connecting to the Emacs server. |
| • [emacsclient Options](/docs/emacs/emacsclient-Options)   |    | Emacs client startup options.   |

[^1]: Some programs use a different environment variable; for example, to make TeX use ‘`emacsclient`’, set the `TEXEDIT` environment variable to ‘`emacsclient +%d %s`’.
