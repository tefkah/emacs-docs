---
slug: General-Variables
---

Here is an alphabetical list of environment variables that have special meanings in Emacs. Most of these variables are also used by some other programs. Emacs does not require any of these environment variables to be set, but it uses their values if they are set.

### `CDPATH`

Used by the `cd` command to search for the directory you specify, when you specify a relative directory,

### `DBUS_SESSION_BUS_ADDRESS`

Used by D-Bus when Emacs is compiled with it. Usually, there is no need to change it. Setting it to a dummy address, like ‘`unix:path=/dev/null`’, suppresses connections to the D-Bus session bus as well as autolaunching the D-Bus session bus if not running yet.

### `EMACSDATA`

Directory for the architecture-independent files that come with Emacs. This is used to initialize the variable `data-directory`.

### `EMACSDOC`

Directory for the documentation string file, which is used to initialize the Lisp variable `doc-directory`.

### `EMACSLOADPATH`

A colon-separated list of directories[^1] to search for Emacs Lisp files. If set, it modifies the usual initial value of the `load-path` variable (see [Lisp Libraries](/docs/emacs/Lisp-Libraries)). An empty element stands for the default value of `load-path`; e.g., using ‘`EMACSLOADPATH="/tmp:"`’ adds `/tmp` to the front of the default `load-path`. To specify an empty element in the middle of the list, use 2 colons in a row, as in ‘`EMACSLOADPATH="/tmp::/foo"`’.

### `EMACSPATH`

A colon-separated list of directories to search for executable files. If set, Emacs uses this in addition to `PATH` (see below) when initializing the variable `exec-path` (see [Shell](/docs/emacs/Shell)).

### `EMAIL`

Your email address; used to initialize the Lisp variable `user-mail-address`, which the Emacs mail interface puts into the ‘`From`’ header of outgoing messages (see [Mail Headers](/docs/emacs/Mail-Headers)).

### `ESHELL`

Used for shell-mode to override the `SHELL` environment variable (see [Interactive Shell](/docs/emacs/Interactive-Shell)).

### `HISTFILE`

The name of the file that shell commands are saved in between logins. This variable defaults to `~/.bash_history` if you use Bash, to `~/.sh_history` if you use ksh, and to `~/.history` otherwise.

### `HOME`

The location of your files in the directory tree; used for expansion of file names starting with a tilde (`~`). If set, it should be set to an absolute file name. (If set to a relative file name, Emacs interprets it relative to the directory where Emacs was started, but we don’t recommend to use this feature.) If unset, `HOME` normally defaults to the home directory of the user given by `LOGNAME`, `USER` or your user ID, or to `/` if all else fails. On MS-DOS, it defaults to the directory from which Emacs was started, with ‘`/bin`’ removed from the end if it was present. On Windows, the default value of `HOME` is the `Application Data` subdirectory of the user profile directory (normally, this is `C:/Documents and Settings/username/Application Data`, where `username` is your user name), though for backwards compatibility `C:/` will be used instead if a `.emacs` file is found there.

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

The user’s preferred locale. The locale has six categories, specified by the environment variables `LC_COLLATE` for sorting, `LC_CTYPE` for character encoding, `LC_MESSAGES` for system messages, `LC_MONETARY` for monetary formats, `LC_NUMERIC` for numbers, and `LC_TIME` for dates and times. If one of these variables is not set, the category defaults to the value of the `LANG` environment variable, or to the default ‘`C`’ locale if `LANG` is not set. But if `LC_ALL` is specified, it overrides the settings of all the other locale environment variables.

On MS-Windows and macOS, if `LANG` is not already set in the environment, Emacs sets it based on the system-wide default. You can set this in the “Regional Settings" Control Panel on some versions of MS-Windows, and in the “Language and Region" System Preference on macOS.

The value of the `LC_CTYPE` category is matched against entries in `locale-language-names`, `locale-charset-language-names`, and `locale-preferred-coding-systems`, to select a default language environment and coding system. See [Language Environments](/docs/emacs/Language-Environments).

### `LOGNAME`

The user’s login name. See also `USER`.

### `MAIL`

The name of your system mail inbox.

### `MH`

Name of setup file for the mh system. See [MH-E](https://www.gnu.org/software/emacs/manual/html_mono/mh-e.html#Top) in The Emacs Interface to MH.

### `NAME`

Your real-world name. This is used to initialize the variable `user-full-name` (see [Mail Headers](/docs/emacs/Mail-Headers)).

### `NNTPSERVER`

The name of the news server. Used by the mh and Gnus packages.

### `ORGANIZATION`

The name of the organization to which you belong. Used for setting the ‘`Organization:`’ header in your posts from the Gnus package.

### `PATH`

A colon-separated list of directories containing executable files. This is used to initialize the variable `exec-path` (see [Shell](/docs/emacs/Shell)).

### `PWD`

If set, this should be the default directory when Emacs was started.

### `REPLYTO`

If set, this specifies an initial value for the variable `mail-default-reply-to` (see [Mail Headers](/docs/emacs/Mail-Headers)).

### `SAVEDIR`

The name of a directory in which news articles are saved by default. Used by the Gnus package.

### `SHELL`

The name of an interpreter used to parse and execute programs run from inside Emacs.

### `SMTPSERVER`

The name of the outgoing mail server. This is used to initialize the variable `smtpmail-smtp-server` (see [Mail Sending](/docs/emacs/Mail-Sending)).

### `TERM`

The type of the terminal that Emacs is using. This variable must be set unless Emacs is run in batch mode. On MS-DOS, it defaults to ‘`internal`’, which specifies a built-in terminal emulation that handles the machine’s own display.

### `TERMCAP`

The name of the termcap library file describing how to program the terminal specified by `TERM`. This defaults to `/etc/termcap`.

### `TMPDIR`

### `TMP`

### `TEMP`

These environment variables are used to initialize the variable `temporary-file-directory`, which specifies a directory in which to put temporary files (see [Backup](/docs/emacs/Backup)). Emacs tries to use `TMPDIR` first. If that is unset, Emacs normally falls back on `/tmp`, but on MS-Windows and MS-DOS it instead falls back on `TMP`, then `TEMP`, and finally `c:/temp`.

### `TZ`

This specifies the default time zone and possibly also daylight saving time information. See [Time Zone Rules](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Time-Zone-Rules) in The GNU Emacs Lisp Reference Manual. On MS-DOS, if `TZ` is not set in the environment when Emacs starts, Emacs defines a default value as appropriate for the country code returned by DOS. On MS-Windows, Emacs does not use `TZ` at all.

### `USER`

The user’s login name. See also `LOGNAME`. On MS-DOS, this defaults to ‘`root`’.

### `VERSION_CONTROL`

Used to initialize the `version-control` variable (see [Backup Names](/docs/emacs/Backup-Names)).

[^1]: Here and below, whenever we say “colon-separated list of directories", it pertains to Unix and GNU/Linux systems. On MS-DOS and MS-Windows, the directories are separated by semi-colons instead, since DOS/Windows file names might include a colon after a drive letter.
