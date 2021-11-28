---
slug: Entering-Emacs
---

The usual way to invoke Emacs is with the shell command `emacs`. From a terminal window running a Unix shell on a GUI terminal, you can run Emacs in the background with `emacs &`; this way, Emacs won’t tie up the terminal window, so you can use it to run other shell commands. (For comparable methods of starting Emacs on MS-Windows, see [Windows Startup](/docs/emacs/Windows-Startup).)

When Emacs starts up, the initial frame displays a special buffer named ‘`*GNU Emacs*`’. This *startup screen* contains information about Emacs and *links* to common tasks that are useful for beginning users. For instance, activating the ‘`Emacs Tutorial`’ link opens the Emacs tutorial; this does the same thing as the command `C-h t` (`help-with-tutorial`). To activate a link, either move point onto it and type `RET`, or click on it with `mouse-1` (the left mouse button).

Using a command line argument, you can tell Emacs to visit one or more files as soon as it starts up. For example, `emacs foo.txt` starts Emacs with a buffer displaying the contents of the file ‘`foo.txt`’. This feature exists mainly for compatibility with other editors, which are designed to be launched from the shell for short editing sessions. If you call Emacs this way, the initial frame is split into two windows—one showing the specified file, and the other showing the startup screen. See [Windows](/docs/emacs/Windows).

Generally, it is unnecessary and wasteful to start Emacs afresh each time you want to edit a file. The recommended way to use Emacs is to start it just once, just after you log in, and do all your editing in the same Emacs session. See [Files](/docs/emacs/Files), for information on visiting more than one file. If you use Emacs this way, the Emacs session accumulates valuable context, such as the kill ring, registers, undo history, and mark ring data, which together make editing more convenient. These features are described later in the manual.

To edit a file from another program while Emacs is running, you can use the `emacsclient` helper program to open a file in the existing Emacs session. See [Emacs Server](/docs/emacs/Emacs-Server).

Emacs accepts other command line arguments that tell it to load certain Lisp files, where to put the initial frame, and so forth. See [Emacs Invocation](/docs/emacs/Emacs-Invocation).

If the variable `inhibit-startup-screen` is non-`nil`, Emacs does not display the startup screen. In that case, if one or more files were specified on the command line, Emacs simply displays those files; otherwise, it displays a buffer named `*scratch*`, which can be used to evaluate Emacs Lisp expressions interactively. See [Lisp Interaction](/docs/emacs/Lisp-Interaction). You can set the variable `inhibit-startup-screen` using the Customize facility (see [Easy Customization](/docs/emacs/Easy-Customization)), or by editing your initialization file (see [Init File](/docs/emacs/Init-File)).[^1]

You can also force Emacs to display a file or directory at startup by setting the variable `initial-buffer-choice` to a string naming that file or directory. The value of `initial-buffer-choice` may also be a function (of no arguments) that should return a buffer which is then displayed. If `initial-buffer-choice` is non-`nil`, then if you specify any files on the command line, Emacs still visits them, but does not display them initially.

[^1]: Setting `inhibit-startup-screen` in `site-start.el` doesn’t work, because the startup screen is set up before reading `site-start.el`. See [Init File](/docs/emacs/Init-File), for information about `site-start.el`.
