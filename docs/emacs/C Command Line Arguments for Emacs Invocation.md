---
slug: Emacs-Invocation
---

Emacs supports command line arguments to request various actions when invoking Emacs. These are for compatibility with other editors and for sophisticated activities. We don’t recommend using them for ordinary editing (See [Emacs Server](/docs/emacs/Emacs-Server), for a way to access an existing Emacs job from the command line).

Arguments starting with ‘`-`’ are *options*, and so is ‘`+linenum`’. All other arguments specify files to visit. Emacs visits the specified files while it starts up. The last file specified on the command line becomes the current buffer; the other files are also visited in other buffers. As with most programs, the special argument ‘`--`’ says that all subsequent arguments are file names, not options, even if they start with ‘`-`’.

Emacs command options can specify many things, such as the size and position of the X window Emacs uses, its colors, and so on. A few options support advanced usage, such as running Lisp functions on files in batch mode. The sections of this chapter describe the available options, arranged according to their purpose.

There are two ways of writing options: the short forms that start with a single ‘`-`’, and the long forms that start with ‘`--`’. For example, ‘`-d`’ is a short form and ‘`--display`’ is the corresponding long form.

The long forms with ‘`--`’ are easier to remember, but longer to type. However, you don’t have to spell out the whole option name; any unambiguous abbreviation is enough. When a long option requires an argument, you can use either a space or an equal sign to separate the option name and the argument. Thus, for the option ‘`--display`’, you can write either ‘`--display sugar-bombs:0.0`’ or ‘`--display=sugar-bombs:0.0`’. We recommend an equal sign because it makes the relationship clearer, and the tables below always show an equal sign.

Most options specify how to initialize Emacs, or set parameters for the Emacs session. We call them *initial options*. A few options specify things to do, such as loading libraries or calling Lisp functions. These are called *action options*. These and file names together are called *action arguments*. The action arguments are stored as a list of strings in the variable `command-line-args`. (Actually, when Emacs starts up, `command-line-args` contains all the arguments passed from the command line; during initialization, the initial arguments are removed from this list when they are processed, leaving only the action arguments.)

|                                                    |    |                                                               |
| :------------------------------------------------- | -- | :------------------------------------------------------------ |
| • [Action Arguments](/docs/emacs/Action-Arguments) |    | Arguments to visit files, load libraries, and call functions. |
| • [Initial Options](/docs/emacs/Initial-Options)   |    | Arguments that take effect while starting Emacs.              |
| • [Command Example](/docs/emacs/Command-Example)   |    | Examples of using command line arguments.                     |
| • [Environment](/docs/emacs/Environment)           |    | Environment variables that Emacs uses.                        |
| • [Display X](/docs/emacs/Display-X)               |    | Changing the default display and using remote login.          |
| • [Font X](/docs/emacs/Font-X)                     |    | Choosing a font for text, under X.                            |
| • [Colors X](/docs/emacs/Colors-X)                 |    | Choosing display colors.                                      |
| • [Window Size X](/docs/emacs/Window-Size-X)       |    | Start-up window size, under X.                                |
| • [Borders X](/docs/emacs/Borders-X)               |    | Internal and outer borders, under X.                          |
| • [Title X](/docs/emacs/Title-X)                   |    | Specifying the initial frame’s title.                         |
| • [Icons X](/docs/emacs/Icons-X)                   |    | Choosing what sort of icon to use, under X.                   |
| • [Misc X](/docs/emacs/Misc-X)                     |    | Other display options.                                        |
