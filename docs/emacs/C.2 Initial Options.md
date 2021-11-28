---
slug: Initial-Options
---

The initial options specify parameters for the Emacs session. This section describes the more general initial options; some other options specifically related to the X Window System appear in the following sections.

Some initial options affect the loading of the initialization file. Normally, Emacs first loads `site-start.el` if it exists, then your own initialization file if it exists, and finally the default initialization file `default.el` if it exists (see [Init File](Init-File)). Certain options prevent loading of some of these files or substitute other files for them.

### ‘`-chdir directory`’

### ‘`--chdir=directory`’

Change to `directory` before doing anything else. This is mainly used by session management in X so that Emacs starts in the same directory as it stopped. This makes desktop saving and restoring easier.

### ‘`-t device`’

### ‘`--terminal=device`’

Use `device` as the device for terminal input and output. This option implies ‘`--no-window-system`’.

### ‘`-d display`’

### ‘`--display=display`’

Use the X Window System and use the display named `display` to open the initial Emacs frame. See [Display X](Display-X), for more details.

### ‘`-nw`’

### ‘`--no-window-system`’

Don’t communicate directly with the window system, disregarding the `DISPLAY` environment variable even if it is set. This means that Emacs uses the terminal from which it was launched for all its display and input.

### ‘`-batch`’

### ‘`--batch`’

Run Emacs in *batch mode*. Batch mode is used for running programs written in Emacs Lisp from shell scripts, makefiles, and so on. To invoke a Lisp program, use the ‘`-batch`’ option in conjunction with one or more of ‘`-l`’, ‘`-f`’ or ‘`--eval`’ (see [Action Arguments](Action-Arguments)). See [Command Example](Command-Example), for an example.

In batch mode, Emacs does not display the text being edited, and the standard terminal interrupt characters such as `C-z` and `C-c` have their usual effect. Emacs functions that normally print a message in the echo area will print to either the standard output stream (`stdout`) or the standard error stream (`stderr`) instead. (To be precise, functions like `prin1`, `princ` and `print` print to `stdout`, while `message` and `error` print to `stderr`.) Functions that normally read keyboard input from the minibuffer take their input from the terminal’s standard input stream (`stdin`) instead.

‘`--batch`’ implies ‘`-q`’ (do not load an initialization file), but `site-start.el` is loaded nonetheless. It also causes Emacs to exit after processing all the command options. In addition, it disables auto-saving except in buffers for which auto-saving is explicitly requested, and when saving files it omits the `fsync` system call unless otherwise requested.

### ‘`--script file`’

Run Emacs in batch mode, like ‘`--batch`’, and then read and execute the Lisp code in `file`.

The normal use of this option is in executable script files that run Emacs. They can start with this text on the first line

```lisp
#!/usr/bin/emacs --script
```

which will invoke Emacs with ‘`--script`’ and supply the name of the script file as `file`. Emacs Lisp then treats the ‘`#!`’ on this first line as a comment delimiter.

### ‘`--no-build-details`’

Omit details like system name and build time from the Emacs executable, so that builds are more deterministic. This switch is not meant for regular (or interactive) use, since it makes commands like `system-name` return `nil`.

### ‘`-q`’

### ‘`--no-init-file`’

Do not load any initialization file (see [Init File](Init-File)). When Emacs is invoked with this option, the Customize facility does not allow options to be saved (see [Easy Customization](Easy-Customization)). This option does not disable loading `site-start.el`.

### ‘`--no-site-file`’

### ‘`-nsl`’

Do not load `site-start.el` (see [Init File](Init-File)). The ‘`-Q`’ option does this too, but other options like ‘`-q`’ do not.

### ‘`--no-site-lisp`’

Do not include the `site-lisp` directories in `load-path` (see [Init File](Init-File)). The ‘`-Q`’ option does this too.

### ‘`--no-splash`’

Do not display a startup screen. You can also achieve this effect by setting the variable `inhibit-startup-screen` to non-`nil` in your initialization file (see [Entering Emacs](Entering-Emacs)).

### ‘`--no-x-resources`’

Do not load X resources. You can also achieve this effect by setting the variable `inhibit-x-resources` to `t` in your initialization file (see [Resources](Resources)).

### ‘`-Q`’

### ‘`--quick`’

Start Emacs with minimum customizations. This is similar to using ‘`-q`’, ‘`--no-site-file`’, ‘`--no-site-lisp`’, ‘`--no-x-resources`’, and ‘`--no-splash`’ together.

### ‘`-daemon`’

### ‘`--daemon[=name]`’

### ‘`--bg-daemon[=name]`’

### ‘`--fg-daemon[=name]`’

Start Emacs as a daemon: after Emacs starts up, it starts the Emacs server without opening any frames. You can then use the `emacsclient` command to connect to Emacs for editing. (Optionally, you can specify an explicit `name` for the server; if you do, you will need to specify the same `name` when you invoke `emacsclient`, via its `--socket-name` option, see [emacsclient Options](emacsclient-Options).) See [Emacs Server](Emacs-Server), for information about using Emacs as a daemon. A “background" daemon disconnects from the terminal and runs in the background (‘`--daemon`’ is an alias for ‘`--bg-daemon`’).

### ‘`--no-desktop`’

Do not reload any saved desktop. See [Saving Emacs Sessions](Saving-Emacs-Sessions).

### ‘`-u user`’

### ‘`--user=user`’

Load `user`’s initialization file instead of your own[^1].

### ‘`--debug-init`’

Enable the Emacs Lisp debugger for errors in the init file. See [Entering the Debugger on an Error](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Error-Debugging) in The GNU Emacs Lisp Reference Manual.

### ‘`--module-assertions`’

Enable expensive correctness checks when dealing with dynamically loadable modules. This is intended for module authors that wish to verify that their module conforms to the module API requirements. The option makes Emacs abort if a module-related assertion triggers. See [Writing Dynamically-Loaded Modules](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Writing-Dynamic-Modules) in The GNU Emacs Lisp Reference Manual.

### ‘`--dump-file=file`’

Load the dumped Emacs state from the named `file`. By default, an installed Emacs will look for its dump state in a file named `emacs.pdmp` in the directory where the Emacs installation puts the architecture-dependent files; the variable `exec-directory` holds the name of that directory. `emacs` is the name of the Emacs executable file, normally just `emacs`. (When you invoke Emacs from the `src` directory where it was built without installing it, it will look for the dump file in the directory of the executable.) If you rename or move the dump file to a different place, you can use this option to tell Emacs where to find that file.

[^1]: This option has no effect on MS-Windows.
