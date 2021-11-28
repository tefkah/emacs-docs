---
slug: Display-X
---

The environment variable `DISPLAY` tells all X clients, including Emacs, where to display their windows. Its value is set by default in ordinary circumstances, when you start an X server and run jobs locally. You can specify the display yourself; one reason to do this is if you want to log into another system and run Emacs there, and have the window displayed at your local terminal.

`DISPLAY` has the syntax ‘`host:display.screen`’, where `host` is the host name of the X Window System server machine, `display` is an arbitrarily-assigned number that distinguishes your server (X terminal) from other servers on the same machine, and `screen` is a field that allows an X server to control multiple terminal screens. The period and the `screen` field are optional. If included, `screen` is usually zero.

For example, if your host is named ‘`glasperle`’ and your server is the first (or perhaps the only) server listed in the configuration, your `DISPLAY` is ‘`glasperle:0.0`’.

You can specify the display name explicitly when you run Emacs, either by changing the `DISPLAY` variable, or with the option ‘`-d display`’ or ‘`--display=display`’. Here is an example:

```lisp
emacs --display=glasperle:0 &
```

You can inhibit the use of the X window system with the ‘`-nw`’ option. Then Emacs uses its controlling text terminal for display. See [Initial Options](/docs/emacs/Initial-Options).

Sometimes, security arrangements prevent a program on a remote system from displaying on your local system. In this case, trying to run Emacs produces messages like this:

```lisp
Xlib:  connection to "glasperle:0.0" refused by server
```

You might be able to overcome this problem by using the `xhost` command on the local system to give permission for access from your remote machine.
