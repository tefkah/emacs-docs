---
slug: Emacs-Invocation
---

Emacs supports command line arguments to request various actions when invoking Emacs. These are for compatibility with other editors and for sophisticated activities. We don't recommend using them for ordinary editing (See [Using Emacs as a Server](/docs/emacs/Emacs-Server), for a way to access an existing Emacs job from the command line).

Arguments starting with '`-`' are *options*, and so is '`+linenum`'. All other arguments specify files to visit. Emacs visits the specified files while it starts up. The last file specified on the command line becomes the current buffer; the other files are also visited in other buffers. As with most programs, the special argument '`--`' says that all subsequent arguments are file names, not options, even if they start with '`-`'.

Emacs command options can specify many things, such as the size and position of the X window Emacs uses, its colors, and so on. A few options support advanced usage, such as running Lisp functions on files in batch mode. The sections of this chapter describe the available options, arranged according to their purpose.

There are two ways of writing options: the short forms that start with a single '`-`', and the long forms that start with '`--`'. For example, '`-d`' is a short form and '`--display`' is the corresponding long form.

The long forms with '`--`' are easier to remember, but longer to type. However, you don't have to spell out the whole option name; any unambiguous abbreviation is enough. When a long option requires an argument, you can use either a space or an equal sign to separate the option name and the argument. Thus, for the option '`--display`', you can write either '`--display sugar-bombs:0.0`' or '`--display=sugar-bombs:0.0`'. We recommend an equal sign because it makes the relationship clearer, and the tables below always show an equal sign.

Most options specify how to initialize Emacs, or set parameters for the Emacs session. We call them *initial options*. A few options specify things to do, such as loading libraries or calling Lisp functions. These are called *action options*. These and file names together are called *action arguments*. The action arguments are stored as a list of strings in the variable `command-line-args`. (Actually, when Emacs starts up, `command-line-args` contains all the arguments passed from the command line; during initialization, the initial arguments are removed from this list when they are processed, leaving only the action arguments.)

### C.1 Action Arguments

Here is a table of action arguments:

### '`file`'

### '`--file=file`'

### '`--find-file=file`'

### '`--visit=file`'

Visit the specified *file*. See [Visiting Files](/docs/emacs/Visiting).

When Emacs starts up, it displays the startup buffer in one window, and the buffer visiting *file* in another window (see [Multiple Windows](/docs/emacs/Windows)). If you supply more than one file argument, the displayed file is the last one specified on the command line; the other files are visited but their buffers are not shown.

If the startup buffer is disabled (see [Entering Emacs](/docs/emacs/Entering-Emacs)), then starting Emacs with one file argument displays the buffer visiting *file* in a single window. With two file arguments, Emacs displays the files in two different windows. With more than two file arguments, Emacs displays the last file specified in one window, plus another window with a Buffer Menu showing all the other files (see [Operating on Several Buffers](/docs/emacs/Several-Buffers)). To inhibit using the Buffer Menu for this, change the variable `inhibit-startup-buffer-menu` to `t`.

### '`+linenum file`'

Visit the specified *file*, then go to line number *linenum* in it.

### '`+linenum:columnnum file`'

Visit the specified *file*, then go to line number *linenum* and put point at column number *columnnum*.

### '`-l file`'

### '`--load=file`'

Load a Lisp library named *file* with the function `load`. If *file* is not an absolute file name, Emacs first looks for it in the current directory, then in the directories listed in `load-path` (see [Libraries of Lisp Code for Emacs](/docs/emacs/Lisp-Libraries)).

**Warning:** If previous command-line arguments have visited files, the current directory is the directory of the last file visited.

### '`-L dir`'

### '`--directory=dir`'

Prepend directory *dir* to the variable `load-path`. If you specify multiple '`-L`' options, Emacs preserves the relative order; i.e., using '`-L /foo -L /bar`' results in a `load-path` of the form `("/foo" "/bar" ...)`. If *dir* begins with '`:`', Emacs removes the '`:`' and appends (rather than prepends) the remainder to `load-path`. (On MS Windows, use '`;`' instead of '`:`'; i.e., use the value of `path-separator`.)

Note that the changes to `load-path` as result of using this option do *not* affect the directories where Emacs looks for the site startup file and the Lisp packages loaded by the user's early-init and init files (see [The Emacs Initialization File](/docs/emacs/Init-File)), because `load-path` is changed by the '`-L`' option *after* these files are loaded and interpreted.

### '`-f function`'

### '`--funcall=function`'

Call Lisp function *function*. If it is an interactive function (a command), it reads the arguments interactively just as if you had called the same function with a key sequence. Otherwise, it calls the function with no arguments.

### '`--eval=expression`'

### '`--execute=expression`'

Evaluate Lisp expression *expression*.

### '`--insert=file`'

Insert the contents of *file* into the buffer that is current when this command-line argument is processed. Usually, this is the `*scratch*` buffer (see [Lisp Interaction Buffers](/docs/emacs/Lisp-Interaction)), but if arguments earlier on the command line visit files or switch buffers, that might be a different buffer. The effect of this command-line argument is like what `M-x insert-file` does (see [Miscellaneous File Operations](/docs/emacs/Misc-File-Ops)).

### '`--kill`'

Exit from Emacs without asking for confirmation.

### '`--help`'

Print a usage message listing all available options, then exit successfully.

### '`--version`'

Print Emacs version, then exit successfully.

### '`--fingerprint`'

Print the Emacs "fingerprint", which is used to uniquely identify the compiled version of Emacs.

---

### C.2 Initial Options

The initial options specify parameters for the Emacs session. This section describes the more general initial options; some other options specifically related to the X Window System appear in the following sections.

Some initial options affect the loading of the initialization file. Normally, Emacs first loads `site-start.el` if it exists, then your own initialization file if it exists, and finally the default initialization file `default.el` if it exists (see [The Emacs Initialization File](/docs/emacs/Init-File)). Certain options prevent loading of some of these files or substitute other files for them.

### '`-chdir directory`'

### '`--chdir=directory`'

Change to *directory* before doing anything else. This is mainly used by session management in X so that Emacs starts in the same directory as it stopped. This makes desktop saving and restoring easier.

### '`-t device`'

### '`--terminal=device`'

Use *device* as the device for terminal input and output. This option implies '`--no-window-system`'.

### '`-d display`'

### '`--display=display`'

Use the X Window System and use the display named *display* to open the initial Emacs frame. See [Specifying the Display Name](/docs/emacs/Display-X), for more details.

### '`-nw`'

### '`--no-window-system`'

Don't communicate directly with the window system, disregarding the `DISPLAY` environment variable even if it is set. This means that Emacs uses the terminal from which it was launched for all its display and input.

### '`-batch`'

### '`--batch`'

Run Emacs in *batch mode*. Batch mode is used for running programs written in Emacs Lisp from shell scripts, makefiles, and so on. To invoke a Lisp program, use the '`-batch`' option in conjunction with one or more of '`-l`', '`-f`' or '`--eval`' (see [Action Arguments](/docs/emacs/Action-Arguments)). See [Command Argument Example](/docs/emacs/Command-Example), for an example.

In batch mode, Emacs does not display the text being edited, and the standard terminal interrupt characters such as `C-z` and `C-c` have their usual effect. Emacs functions that normally print a message in the echo area will print to either the standard output stream (`stdout`) or the standard error stream (`stderr`) instead. (To be precise, functions like `prin1`, `princ` and `print` print to `stdout`, while `message` and `error` print to `stderr`.) Functions that normally read keyboard input from the minibuffer take their input from the terminal's standard input stream (`stdin`) instead.

'`--batch`' implies '`-q`' (do not load an initialization file), but `site-start.el` is loaded nonetheless. It also causes Emacs to exit after processing all the command options. In addition, it disables auto-saving except in buffers for which auto-saving is explicitly requested, and when saving files it omits the `fsync` system call unless otherwise requested.

Errors that occur when running a '`--batch`' Emacs will result in an Emacs Lisp backtrace being printed. To disable this behavior, set `backtrace-on-error-noninteractive` to `nil`.

### '`--script file`'

Run Emacs in batch mode, like '`--batch`', and then read and execute the Lisp code in *file*.

The normal use of this option is in executable script files that run Emacs. They can start with this text on the first line

```lisp
#!/usr/bin/emacs --script

```

which will invoke Emacs with '`--script`' and supply the name of the script file as *file*. Emacs Lisp then treats the '`#!`' on this first line as a comment delimiter.

### '`-x`'

This option can only be used in executable script files, and should be invoked like this:

```lisp
#!/usr/bin/emacs -x

```

This is like '`--script`', but suppresses loading the init files (like `--quick`), and can't be used on a normal command line (since it doesn't specify the script to load). In addition, when it reaches the end of the script, it exits Emacs and uses the value of the final form as the exit value from the script (if the final value is numerical). Otherwise, it will always exit with a zero value. Note that when Emacs reads the Lisp code in this case, it ignores any file-local variables (see [Specifying File Variables](/docs/emacs/Specifying-File-Variables)), both in the first line and in a local-variables section near the end of the file.

### '`--no-build-details`'

Omit details like system name and build time from the Emacs executable, so that builds are more deterministic. This switch is not meant for regular (or interactive) use, since it makes commands like `system-name` return `nil`.

### '`-q`'

### '`--no-init-file`'

Do not load any initialization file (see [The Emacs Initialization File](/docs/emacs/Init-File)). When Emacs is invoked with this option, the Customize facility does not allow options to be saved (see [Easy Customization Interface](/docs/emacs/Easy-Customization)). This option does not disable loading `site-start.el`.

### '`--no-site-file`'

### '`-nsl`'

Do not load `site-start.el` (see [The Emacs Initialization File](/docs/emacs/Init-File)). The '`-Q`' option does this too, but other options like '`-q`' do not.

### '`--no-site-lisp`'

Do not include the `site-lisp` directories in `load-path` (see [The Emacs Initialization File](/docs/emacs/Init-File)). The '`-Q`' option does this too.

### '`--init-directory`'

Specify the directory to use when looking for the Emacs init files. Note that this merely overrides the value of `user-emacs-directory`, the directory which Emacs usually determines as side effect of searching for your init file (see [How Emacs Finds Your Init File](/docs/emacs/Find-Init)), but does not change the search for the `~/.emacs` init file. In particular, if there's no `init.el` file in the directory named by this option, Emacs will find and use `init.el` it would have used without this option (but will search for your other per-user Emacs files in the directory specified by this option). If you want to force Emacs to use `init.el` file in this directory, make sure it exists there before starting Emacs with this option.

### '`--no-splash`'

Do not display a startup screen. You can also achieve this effect by setting the variable `inhibit-startup-screen` to non-`nil` in your initialization file (see [Entering Emacs](/docs/emacs/Entering-Emacs)).

### '`--no-x-resources`'

Do not load X resources. You can also achieve this effect by setting the variable `inhibit-x-resources` to `t` in your initialization file (see [X Resources](/docs/emacs/Resources)).

### '`-Q`'

### '`--quick`'

Start Emacs with minimum customizations. This is similar to using '`-q`', '`--no-site-file`', '`--no-site-lisp`', '`--no-x-resources`', and '`--no-splash`' together.

### '`-daemon`'

### '`--daemon[=name]`'

### '`--bg-daemon[=name]`'

### '`--fg-daemon[=name]`'

Start Emacs as a daemon: after Emacs starts up, it starts the Emacs server without opening any frames. You can then use the `emacsclient` command to connect to Emacs for editing. (Optionally, you can specify an explicit *name* for the server; if you do, you will need to specify the same *name* when you invoke `emacsclient`, via its `--socket-name` option, see [`emacsclient` Options](/docs/emacs/emacsclient-Options).) See [Using Emacs as a Server](/docs/emacs/Emacs-Server), for information about using Emacs as a daemon. A "background" daemon disconnects from the terminal and runs in the background ('`--daemon`' is an alias for '`--bg-daemon`').

### '`--no-desktop`'

Do not reload any saved desktop. See [Saving Emacs Sessions](/docs/emacs/Saving-Emacs-Sessions).

### '`-u user`'

### '`--user=user`'

Load *user*'s initialization file instead of your own\[^27].

### '`--debug-init`'

Enable the Emacs Lisp debugger for errors in the init file. See [Entering the Debugger on an Error](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Error-Debugging) in The GNU Emacs Lisp Reference Manual.

### '`--module-assertions`'

Enable expensive correctness checks when dealing with dynamically loadable modules. This is intended for module authors that wish to verify that their module conforms to the module API requirements. The option makes Emacs abort if a module-related assertion triggers. See [Writing Dynamically-Loaded Modules](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Writing-Dynamic-Modules) in The GNU Emacs Lisp Reference Manual.

### '`--dump-file=file`'

Load the dumped Emacs state from the named *file*. By default, an installed Emacs will look for its dump state in a file named `emacs.pdmp` in the directory where the Emacs installation puts the architecture-dependent files; the variable `exec-directory` holds the name of that directory. *emacs* is the name of the Emacs executable file, normally just `emacs`. (When you invoke Emacs from the `src` directory where it was built without installing it, it will look for the dump file in the directory of the executable.) If you rename or move the dump file to a different place, you can use this option to tell Emacs where to find that file.

---

### C.3 Command Argument Example

Here is an example of using Emacs with arguments and options. It assumes you have a Lisp program file called `hack-c.el` which, when loaded, performs some useful operation on the current buffer, expected to be a C program.

```lisp
emacs --batch foo.c -l hack-c -f save-buffer >& log

```

This says to visit `foo.c`, load `hack-c.el` (which makes changes in the visited file), save `foo.c` (note that `save-buffer` is the function that `C-x C-s` is bound to), and then exit back to the shell (because of '`--batch`'). '`--batch`' also guarantees there will be no problem redirecting output to `log`, because Emacs will not assume that it has a display terminal to work with.

---

### C.4 Environment Variables

The *environment* is a feature of the operating system; it consists of a collection of variables with names and values. Each variable is called an *environment variable*; environment variable names are case-sensitive, and it is conventional to use upper case letters only. The values are all text strings.

What makes the environment useful is that subprocesses inherit the environment automatically from their parent process. This means you can set up an environment variable in your login shell, and all the programs you run (including Emacs) will automatically see it. Subprocesses of Emacs (such as shells, compilers, and version control programs) inherit the environment from Emacs, too.

Inside Emacs, the command `M-x getenv` reads the name of an environment variable, and prints its value in the echo area. `M-x setenv` sets a variable in the Emacs environment, and `C-u M-x setenv` removes a variable. (Environment variable substitutions with '`$`' work in the value just as in file names; see [File Names with $](/docs/emacs/File-Names-with-_0024).) The variable `initial-environment` stores the initial environment inherited by Emacs.

The way to set environment variables outside of Emacs depends on the operating system, and especially the shell that you are using. For example, here's how to set the environment variable `ORGANIZATION` to '`not very much`' using Bash:

```lisp
export ORGANIZATION="not very much"

```

and here's how to do it in csh or tcsh:

```lisp
setenv ORGANIZATION "not very much"

```

When Emacs is using the X Window System, various environment variables that control X work for Emacs as well. See the X documentation for more information.

- [General Variables](/docs/emacs/General-Variables)
- [Miscellaneous Variables](/docs/emacs/Misc-Variables)
- [The MS-Windows System Registry](/docs/emacs/MS_002dWindows-Registry)

---

#### C.4.1 General Variables

Here is an alphabetical list of environment variables that have special meanings in Emacs. Most of these variables are also used by some other programs. Emacs does not require any of these environment variables to be set, but it uses their values if they are set.

### `CDPATH`

Used by the `cd` command to search for the directory you specify, when you specify a relative directory.

### `COLORTERM`

If this variable is set to the value '`truecolor`', it tells Emacs to use 24-bit true color on text-mode displays even if the terminfo database is not installed. Emacs will use built-in commands to request true color by RGB values instead of the missing terminfo information.

### `DBUS_SESSION_BUS_ADDRESS`

Used by D-Bus when Emacs is compiled with it. Usually, there is no need to change it. Setting it to a dummy address, like '`unix:path=/dev/null`', suppresses connections to the D-Bus session bus as well as autolaunching the D-Bus session bus if not running yet.

### `EMACSDATA`

Directory for the architecture-independent files that come with Emacs. This is used to initialize the variable `data-directory`.

### `EMACSDOC`

Directory for the documentation string file, which is used to initialize the Lisp variable `doc-directory`.

### `EMACSLOADPATH`

A colon-separated list of directories\[^28] to search for Emacs Lisp files. If set, it replaces the usual initial value of the `load-path` variable (see [Libraries of Lisp Code for Emacs](/docs/emacs/Lisp-Libraries)). An empty element stands for the default value of `load-path`; e.g., using '`EMACSLOADPATH="/tmp:"`' adds `/tmp` to the front of the default `load-path`. To specify an empty element in the middle of the list, use 2 colons in a row, as in '`EMACSLOADPATH="/tmp::/foo"`'.

### `EMACSPATH`

A colon-separated list of directories to search for executable files. If set, Emacs uses this in addition to `PATH` (see below) when initializing the variable `exec-path` (see [Running Shell Commands from Emacs](/docs/emacs/Shell)).

### `EMAIL`

Your email address; used to initialize the Lisp variable `user-mail-address`, which the Emacs mail interface puts into the '`From`' header of outgoing messages (see [Mail Header Fields](/docs/emacs/Mail-Headers)).

### `ESHELL`

Used for shell-mode to override the `SHELL` environment variable (see [Interactive Subshell](/docs/emacs/Interactive-Shell)).

### `HISTFILE`

The name of the file that shell commands are saved in between logins. This variable defaults to `~/.bash_history` if you use Bash, to `~/.sh_history` if you use ksh, and to `~/.history` otherwise.

### `HOME`

The location of your files in the directory tree; used for expansion of file names starting with a tilde (`~`). If set, it should be set to an absolute file name. (If set to a relative file name, Emacs interprets it relative to the directory where Emacs was started, but we don't recommend to use this feature.) If unset, `HOME` normally defaults to the home directory of the user given by `LOGNAME`, `USER` or your user ID, or to `/` if all else fails. On MS-DOS, it defaults to the directory from which Emacs was started, with '`/bin`' removed from the end if it was present. On Windows, the default value of `HOME` is the `Application Data` subdirectory of the user profile directory (normally, this is `C:/Documents and Settings/username/Application Data`, where *username* is your user name), though for backwards compatibility `C:/` will be used instead if a `.emacs` file is found there.

### `HOSTNAME`

The name of the machine that Emacs is running on.

### `INFOPATH`

A colon-separated list of directories in which to search for Info files.

### `LC_ALL`

### `LC_COLLATE`

### `LC_CTYPE`

### `LC_MESSAGES`

### `LC_MONETARY`

### `LC_NUMERIC`

### `LC_TIME`

### `LANG`

The user's preferred locale. The locale has six categories, specified by the environment variables `LC_COLLATE` for sorting, `LC_CTYPE` for character encoding, `LC_MESSAGES` for system messages, `LC_MONETARY` for monetary formats, `LC_NUMERIC` for numbers, and `LC_TIME` for dates and times. If one of these variables is not set, the category defaults to the value of the `LANG` environment variable, or to the default '`C`' locale if `LANG` is not set. But if `LC_ALL` is specified, it overrides the settings of all the other locale environment variables.

On MS-Windows and macOS, if `LANG` is not already set in the environment, Emacs sets it based on the system-wide default. You can set this in the "Regional Settings" Control Panel on some versions of MS-Windows, and in the "Language and Region" System Preference on macOS.

When running a GUI session on Android, `LANG` is set to a fixed value, but the language and locale environment is derived from the system's "Languages & Input" preferences. See [Running Emacs under Android](/docs/emacs/Android-Environment).

The value of the `LC_CTYPE` category is matched against entries in `locale-language-names`, `locale-charset-language-names`, and `locale-preferred-coding-systems`, to select a default language environment and coding system. See [Language Environments](/docs/emacs/Language-Environments).

### `LOGNAME`

The user's login name. See also `USER`.

### `MAIL`

The name of your system mail inbox.

### `MH`

Name of setup file for the mh system. See [MH-E](https://www.gnu.org/software/emacs/manual/html_mono/mh-e.html#Top) in The Emacs Interface to MH.

### `NAME`

Your real-world name. This is used to initialize the variable `user-full-name` (see [Mail Header Fields](/docs/emacs/Mail-Headers)).

### `NNTPSERVER`

The name of the news server. Used by the mh and Gnus packages.

### `ORGANIZATION`

The name of the organization to which you belong. Used for setting the '`Organization:`' header in your posts from the Gnus package.

### `PATH`

A colon-separated list of directories containing executable files. This is used to initialize the variable `exec-path` (see [Running Shell Commands from Emacs](/docs/emacs/Shell)).

### `PWD`

If set, this should be the default directory when Emacs was started.

### `REPLYTO`

If set, this specifies an initial value for the variable `mail-default-reply-to` (see [Mail Header Fields](/docs/emacs/Mail-Headers)).

### `SAVEDIR`

The name of a directory in which news articles are saved by default. Used by the Gnus package.

### `SHELL`

The name of an interpreter used to parse and execute programs run from inside Emacs. This is used to initialize the variable `shell-file-name` (see [Single Shell Commands](/docs/emacs/Single-Shell)).

### `SMTPSERVER`

The name of the outgoing mail server. This is used to initialize the variable `smtpmail-smtp-server` (see [Mail Sending](/docs/emacs/Mail-Sending)).

### `TERM`

The type of the terminal that Emacs is using. This variable must be set unless Emacs is run in batch mode. On MS-DOS, it defaults to '`internal`', which specifies a built-in terminal emulation that handles the machine's own display.

### `TERMCAP`

The name of the termcap library file describing how to program the terminal specified by `TERM`. This defaults to `/etc/termcap`.

### `TMPDIR`

### `TMP`

### `TEMP`

These environment variables are used to initialize the variable `temporary-file-directory`, which specifies a directory in which to put temporary files (see [Backup Files](/docs/emacs/Backup)). Emacs tries to use `TMPDIR` first. If that is unset, Emacs normally falls back on `/tmp`, but on MS-Windows and MS-DOS it instead falls back on `TMP`, then `TEMP`, and finally `c:/temp`.

### `TZ`

This specifies the default time zone and possibly also daylight saving time information. See [Time Zone Rules](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Time-Zone-Rules) in The GNU Emacs Lisp Reference Manual. On MS-DOS, if `TZ` is not set in the environment when Emacs starts, Emacs defines a default value as appropriate for the country code returned by DOS. On MS-Windows, Emacs does not use `TZ` at all.

### `USER`

The user's login name. See also `LOGNAME`. On MS-DOS, this defaults to '`root`'.

### `VERSION_CONTROL`

Used to initialize the `version-control` variable (see [Single or Numbered Backups](/docs/emacs/Backup-Names)).

---

#### C.4.2 Miscellaneous Variables

These variables are used only on particular configurations:

### `COMSPEC`

On MS-DOS and MS-Windows, the name of the command interpreter to use when invoking batch files and commands internal to the shell. On MS-DOS this is also used to make a default value for the `SHELL` environment variable.

### `NAME`

On MS-DOS, this variable defaults to the value of the `USER` variable.

### `EMACSTEST`

On MS-DOS, this specifies a file to use to log the operation of the internal terminal emulator. This feature is useful for submitting bug reports.

### `EMACSCOLORS`

On MS-DOS, this specifies the screen colors. It is useful to set them this way, since otherwise Emacs would display the default colors momentarily when it starts up.

The value of this variable should be the two-character encoding of the foreground (the first character) and the background (the second character) colors of the default face. Each character should be the hexadecimal code for the desired color on a standard PC text-mode display. For example, to get blue text on a light gray background, specify '`EMACSCOLORS=17`', since 1 is the code of the blue color and 7 is the code of the light gray color.

The PC display usually supports only eight background colors. However, Emacs switches the DOS display to a mode where all 16 colors can be used for the background, so all four bits of the background color are actually used.

### `PRELOAD_WINSOCK`

On MS-Windows, if you set this variable, Emacs will load and initialize the network library at startup, instead of waiting until the first time it is required.

### `WAYLAND_DISPLAY`

Pgtk Emacs (built with `--with-pgtk`) can run on Wayland natively. `WAYLAND_DISPLAY` specifies the connection to the compositor.

### `emacs_dir`

On MS-Windows, `emacs_dir` is a special environment variable, which indicates the full path of the directory in which Emacs is installed. If Emacs is installed in the standard directory structure, it calculates this value automatically. It is not much use setting this variable yourself unless your installation is non-standard, since unlike other environment variables, it will be overridden by Emacs at startup. When setting other environment variables, such as `EMACSLOADPATH`, you may find it useful to use `emacs_dir` rather than hard-coding an absolute path. This allows multiple versions of Emacs to share the same environment variable settings, and it allows you to move the Emacs installation directory, without changing any environment or registry settings.

---

#### C.4.3 The MS-Windows System Registry

On MS-Windows, the environment variables `emacs_dir`, `EMACSLOADPATH`, `EMACSDATA`, `EMACSPATH`, `EMACSDOC`, `SHELL`, `TERM`, `HOME`, `LANG`, and `PRELOAD_WINSOCK` can also be set in the `HKEY_CURRENT_USER` or the `HKEY_LOCAL_MACHINE` section of the system registry, under the `/Software/GNU/Emacs` key. When Emacs starts, as well as checking the environment, it also checks the system registry for those variables.

To determine the value of those variables, Emacs goes through the following procedure. First, it checks the environment. If the variable is not found there, Emacs looks for a registry key by the name of the variable under `/Software/GNU/Emacs`; first in the `HKEY_CURRENT_USER` section of the registry, and if not found there, in the `HKEY_LOCAL_MACHINE` section. Finally, if Emacs still cannot determine the values, it uses the compiled-in defaults.

Note that the registry settings have global system-wide effect: they will affect all Emacs sessions run on the system. Thus, if you run different Emacs versions, or use both installed and un-installed Emacs executables, or build newer versions of Emacs, the settings in the registry will cause all of them to use the same directories, which is probably not what you want. For this reason, *we recommend against setting these variables in the registry*. If you have such settings in the registry, we recommend that you remove them.

If you run the Emacs MS-Windows installation program `addpm.exe`, it will update any existing registry settings of the `emacs_dir`, `EMACSLOADPATH`, `EMACSDATA`, `EMACSPATH`, `EMACSDOC`, `SHELL`, and `TERM` variables to have the values suitable for the installed Emacs version with which `addpm.exe` came. Note that `addpm.exe` will *not* create any registry setting that didn't exist, it will only update existing settings, which are most probably inherited from an old Emacs installation, so that they are compatible with the newly installed Emacs version. Running `addpm.exe` is no longer necessary when installing recent versions of Emacs, so we only recommend doing that if you are upgrading from an older version, and cannot remove these settings from the registry for some reason.

In addition to the environment variables above, you can also add settings to the `/Software/GNU/Emacs` registry key to specify X resources (see [X Options and Resources](/docs/emacs/X-Resources)). Most of the settings you can specify in your `.Xdefaults` file can be set from that registry key.

---

### C.5 Specifying the Display Name

The environment variable `DISPLAY` tells all X clients, including Emacs, where to display their windows. Its value is set by default in ordinary circumstances, when you start an X server and run jobs locally. You can specify the display yourself; one reason to do this is if you want to log into another system and run Emacs there, and have the window displayed at your local terminal.

`DISPLAY` has the syntax '`host:display.screen`', where *host* is the host name of the X Window System server machine, *display* is an arbitrarily-assigned number that distinguishes your server (X terminal) from other servers on the same machine, and *screen* is a field that allows an X server to control multiple terminal screens. The period and the *screen* field are optional. If included, *screen* is usually zero.

For example, if your host is named '`glasperle`' and your server is the first (or perhaps the only) server listed in the configuration, your `DISPLAY` is '`glasperle:0.0`'.

You can specify the display name explicitly when you run Emacs, either by changing the `DISPLAY` variable, or with the option '`-d display`' or '`--display=display`'. Here is an example:

```lisp
emacs --display=glasperle:0 &

```

You can inhibit the use of the X window system with the '`-nw`' option. Then Emacs uses its controlling text terminal for display. See [Initial Options](/docs/emacs/Initial-Options).

Sometimes, security arrangements prevent a program on a remote system from displaying on your local system. In this case, trying to run Emacs produces messages like this:

```lisp
Xlib:  connection to "glasperle:0.0" refused by server

```

You might be able to overcome this problem by using the `xhost` command on the local system to give permission for access from your remote machine.

---

### C.6 Font Specification Options

You can use the command line option '`-fn font`' (or '`--font`', which is an alias for '`-fn`') to specify a default font:

### '`-fn font`'

### '`--font=font`'

Use *font* as the default font.

When passing a font name to Emacs on the command line, you may need to quote it, by enclosing it in quotation marks, if it contains characters that the shell treats specially (e.g., spaces). For example:

```lisp
emacs -fn "DejaVu Sans Mono-12"

```

See [Fonts](/docs/emacs/Fonts), for details about font names and other ways to specify the default font.

---

### C.7 Window Color Options

You can use the following command-line options to specify the colors to use for various parts of the Emacs display. Colors may be specified using either color names or RGB triplets (see [Colors for Faces](/docs/emacs/Colors)).

### '`-fg color`'

### '`--foreground-color=color`'

Specify the foreground color, overriding the color specified by the `default` face (see [Text Faces](/docs/emacs/Faces)).

### '`-bg color`'

### '`--background-color=color`'

Specify the background color, overriding the color specified by the `default` face.

### '`-bd color`'

### '`--border-color=color`'

Specify the color of the border of the X window. This has no effect if Emacs is compiled with GTK+ support.

### '`-cr color`'

### '`--cursor-color=color`'

Specify the color of the Emacs cursor which indicates where point is.

### '`-ms color`'

### '`--mouse-color=color`'

Specify the color for the mouse cursor when the mouse is in the Emacs window.

### '`-r`'

### '`-rv`'

### '`--reverse-video`'

Reverse video: swap the foreground and background colors.

### '`--color=mode`'

Set the *color support mode* when Emacs is run on a text terminal. This option overrides the number of supported colors that the character terminal advertises in its `termcap` or `terminfo` database. The parameter *mode* can be one of the following:

### '`never`'

### '`no`'

Don't use colors even if the terminal's capabilities specify color support.

### '`default`'

### '`auto`'

Same as when `--color` is not used at all: Emacs detects at startup whether the terminal supports colors, and if it does, turns on colored display.

### '`always`'

### '`yes`'

### '`ansi8`'

Turn on the color support unconditionally, and use color commands specified by the ANSI escape sequences for the 8 standard colors.

### '`num`'

Use color mode for *num* colors. If *num* is −1, turn off color support (equivalent to '`never`'); if it is 0, use the default color support for this terminal (equivalent to '`auto`'); otherwise use an appropriate standard mode for *num* colors. Depending on your terminal's capabilities, Emacs might be able to turn on a color mode for 8, 16, 88, or 256 as the value of *num*. If there is no mode that supports *num* colors, Emacs acts as if *num* were 0, i.e., it uses the terminal's default color support mode.

This option has no effect on MS-Windows and MS-DOS.

If *mode* is omitted, it defaults to *ansi8*.

The color mode can be changed dynamically during a running Emacs session: the current mode is available via the `tty-color-mode` frame parameter, and it can be changed by modifying that frame parameter.\[^29] This means you can also specify the initial value via `default-frame-alist` instead of the command-line option.

For example, to use a coral mouse cursor and a slate blue text cursor, enter:

```lisp
emacs -ms coral -cr 'slate blue' &

```

You can reverse the foreground and background colors through the '`-rv`' option or with the X resource '`reverseVideo`'.

The '`-fg`', '`-bg`', and '`-rv`' options function on text terminals as well as on graphical displays.

---

### C.8 Options for Window Size and Position

Here is a list of the command-line options for specifying size and position of the initial Emacs frame:

### '`-g widthxheight[{+-}xoffset{+-}yoffset]]`'

### '`--geometry=widthxheight[{+-}xoffset{+-}yoffset]]`'

Specify the size *width* and *height* (measured in character columns and lines), and positions *xoffset* and *yoffset* (measured in pixels). The *width* and *height* parameters apply to all frames, whereas *xoffset* and *yoffset* only to the initial frame.

### '`-fs`'

### '`--fullscreen`'

Specify that width and height should be that of the screen. Normally no window manager decorations are shown. (After starting Emacs, you can toggle this state using `F11`, `toggle-frame-fullscreen`.)

### '`-mm`'

### '`--maximized`'

Specify that the Emacs frame should be maximized. This normally means that the frame has window manager decorations. (After starting Emacs, you can toggle this state using `M-F10`, `toggle-frame-maximized`.)

### '`-fh`'

### '`--fullheight`'

Specify that the height should be the height of the screen.

### '`-fw`'

### '`--fullwidth`'

Specify that the width should be the width of the screen.

In the '`--geometry`' option, `{+-}` means either a plus sign or a minus sign. A plus sign before *xoffset* means it is the distance from the left side of the screen; a minus sign means it counts from the right side. A plus sign before *yoffset* means it is the distance from the top of the screen, and a minus sign there indicates the distance from the bottom. The values *xoffset* and *yoffset* may themselves be positive or negative, but that doesn't change their meaning, only their direction.

Emacs uses the same units as `xterm` does to interpret the geometry. The *width* and *height* are measured in characters, so a large font creates a larger frame than a small font. (If you specify a proportional font, Emacs uses its maximum bounds width as the width unit.) The *xoffset* and *yoffset* are measured in pixels.

You do not have to specify all of the fields in the geometry specification. If you omit both *xoffset* and *yoffset*, the window manager decides where to put the Emacs frame, possibly by letting you place it with the mouse. For example, '`164x55`' specifies a window 164 columns wide, enough for two ordinary width windows side by side, and 55 lines tall.

The default frame width is 80 characters and the default height is between 35 and 40 lines, depending on the OS and the window manager. You can omit either the width or the height or both. If you start the geometry with an integer, Emacs interprets it as the width. If you start with an '`x`' followed by an integer, Emacs interprets it as the height. Thus, '`81`' specifies just the width; '`x45`' specifies just the height.

If you start the geometry with '`+`' or '`-`', that introduces an offset, which means both sizes are omitted. Thus, '`-3`' specifies the *xoffset* only. (If you give just one offset, it is always *xoffset*.) '`+3-3`' specifies both the *xoffset* and the *yoffset*, placing the frame near the bottom left of the screen.

You can specify a default for any or all of the fields in your X resource file (see [X Resources](/docs/emacs/Resources)), and then override selected fields with a '`--geometry`' option.

Since the mode line and the echo area occupy the last 2 lines of the frame, the height of the initial text window is 2 less than the height specified in your geometry. In non-X-toolkit versions of Emacs, the menu bar also takes one line of the specified number. But in the X toolkit version, the menu bar is additional and does not count against the specified height. The tool bar, if present, is also additional.

Enabling or disabling the menu bar or tool bar alters the amount of space available for ordinary text. Therefore, if Emacs starts up with a tool bar (which is the default), and handles the geometry specification assuming there is a tool bar, and then your initialization file disables the tool bar, you will end up with a frame geometry different from what you asked for. To get the intended size with no tool bar, use an X resource to specify "no tool bar" (see [Table of X Resources for Emacs](/docs/emacs/Table-of-Resources)); then Emacs will already know there's no tool bar when it processes the specified geometry.

When using one of '`--fullscreen`', '`--maximized`', '`--fullwidth`' or '`--fullheight`', some window managers require you to set the variable `frame-resize-pixelwise` to a non-`nil` value to make a frame appear truly maximized or full-screen.

Some window managers have options that can make them ignore both program-specified and user-specified positions. If these are set, Emacs fails to position the window correctly.

---

### C.9 Internal and Outer Borders

An Emacs frame has an internal border and an outer border. The internal border is an extra strip of the background color around the text portion of the frame. Emacs itself draws the internal border. The outer border is drawn by X outside the tool and menu bars of the frame. There is also an external border which is drawn by the window manager. The size of the external border cannot be set from within Emacs.

### '`-ib width`'

### '`--internal-border=width`'

Specify *width* as the width of the internal border (around the frame's text area), in pixels.

### '`-bw width`'

### '`--border-width=width`'

Specify *width* as the width of the outer border, in pixels.

When you specify the size of the frame, that does not count the borders. The frame's position is measured from the outside edge of the external border.

Use the '`-ib n`' option to specify an internal border *n* pixels wide. The default is 1. Use '`-bw n`' to specify the width of the outer border (though the window manager may not pay attention to what you specify). The default width of the outer border is 2.

---

### C.10 Frame Titles

Each Emacs frame always has a title, which appears in window decorations and icons as the name of the frame. The default title is of the form '`invocation-name@machine`' (if there is only one frame) or shows the selected window's buffer name (if there is more than one frame).

You can specify a non-default title for the initial Emacs frame with a command line option:

### '`-T title`'

### '`--title=title`'

Specify *title* as the title for the initial Emacs frame.

The '`--name`' option (see [X Resources](/docs/emacs/Resources)) also specifies the title for the initial Emacs frame.

---

### C.11 Icons

### '`-iconic`'

### '`--iconic`'

Start Emacs in an iconified state.

### '`-nbi`'

### '`--no-bitmap-icon`'

Disable the use of the Emacs icon.

Most window managers allow you to iconify (or "minimize") an Emacs frame, hiding it from sight. Some window managers replace iconified windows with tiny icons, while others remove them entirely from sight. The '`-iconic`' option tells Emacs to begin running in an iconified state, rather than showing a frame right away. The text frame doesn't appear until you deiconify (or "un-minimize") it.

By default, Emacs uses an icon containing the Emacs logo. On desktop environments such as Gnome, this icon is also displayed in other contexts, e.g., when switching into an Emacs frame. The '`-nbi`' or '`--no-bitmap-icon`' option tells Emacs to let the window manager choose what sort of icon to use---usually just a small rectangle containing the frame's title.

---

### C.12 Other Display Options

### '`--parent-id id`'

Open Emacs as a client X window via the XEmbed protocol, with *id* as the parent X window id. Currently, this option is mainly useful for developers.

### '`-vb`'

### '`--vertical-scroll-bars`'

Enable vertical scroll bars.

### '`-lsp pixels`'

### '`--line-spacing=pixels`'

Specify *pixels* as additional space to put between lines, in pixels.

### '`-nbc`'

### '`--no-blinking-cursor`'

Disable the blinking cursor on graphical displays.

### '`-D`'

### '`--basic-display`'

Disable the menu-bar, the tool-bar, the scroll-bars, tool tips, and turn off font-lock-mode and the blinking cursor. This can be useful for making a test case that simplifies debugging of display problems.

The '`--xrm`' option (see [X Resources](/docs/emacs/Resources)) specifies additional X resource values.

---


[^1]: This option has no effect on MS-Windows.

[^2]: Here and below, whenever we say "colon-separated list of directories", it pertains to Unix and GNU/Linux systems. On MS-DOS and MS-Windows, the directories are separated by semi-colons instead, since DOS/Windows file names might include a colon after a drive letter.

[^3]: This does not work on MS-Windows and MS-DOS text-mode terminals.
