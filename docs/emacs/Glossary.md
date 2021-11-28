---
slug: Glossary
---

### Abbrev

An abbrev is a text string that expands into a different text string when present in the buffer. For example, you might define a few letters as an abbrev for a long phrase that you want to insert frequently. See [Abbrevs](/docs/emacs/Abbrevs).

### Aborting

Aborting means getting out of a recursive edit (q.v.). The commands `C-]` and `M-x top-level` are used for this. See [Quitting](/docs/emacs/Quitting).

### Active Region

Setting the mark (q.v.) at a position in the text also activates it. When the mark is active, we call the region an active region. See [Mark](/docs/emacs/Mark).

### `Alt`

Alt is the name of a modifier bit that a keyboard input character may have. To make a character Alt, type it while holding down the `Alt` key. Such characters are given names that start with `Alt-` (usually written `A-` for short). (Note that many terminals have a key labeled `Alt` that is really a `Meta` key.) See [Alt](/docs/emacs/User-Input).

### Argument

See [Glossary---Numeric Argument](/docs/emacs/Glossary_002d_002d_002dNumeric-Argument).

### ASCII character

An ASCII character is either an ASCII control character or an ASCII printing character. See [User Input](/docs/emacs/User-Input).

### ASCII control character

An ASCII control character is the Control version of an upper-case letter, or the Control version of one of the characters ‘`@[\]^_?`’.

### ASCII printing character

ASCII letters, digits, space, and the following punctuation characters: ‘``!@#$%^&*()_-+=|\~`{}[]:;"'<>,.?/``’.

### Auto Fill Mode

Auto Fill mode is a minor mode (q.v.) in which text that you insert is automatically broken into lines of a given maximum width. See [Filling](/docs/emacs/Filling).

### Auto Saving

Auto saving is the practice of periodically saving the contents of an Emacs buffer in a specially-named file, so that the information will be preserved if the buffer is lost due to a system error or user error. See [Auto Save](/docs/emacs/Auto-Save).

### Autoloading

Emacs can automatically load Lisp libraries when a Lisp program requests a function from those libraries. This is called “autoloading". See [Lisp Libraries](/docs/emacs/Lisp-Libraries).

### Backtrace

A backtrace is a trace of a series of function calls showing how a program arrived at a certain point. It is used mainly for finding and correcting bugs (q.v.). Emacs can display a backtrace when it signals an error or when you type `C-g` (see [Glossary---Quitting](/docs/emacs/Glossary_002d_002d_002dQuitting)). See [Checklist](/docs/emacs/Checklist).

### Backup File

A backup file records the contents that a file had before the current editing session. Emacs makes backup files automatically to help you track down or cancel changes you later regret making. See [Backup](/docs/emacs/Backup).

### Balancing Parentheses

Emacs can balance parentheses (or other matching delimiters) either manually or automatically. You do manual balancing with the commands to move over parenthetical groupings (see [Moving by Parens](/docs/emacs/Moving-by-Parens)). Automatic balancing works by blinking or highlighting the delimiter that matches the one you just inserted, or inserting the matching delimiter for you (see [Matching Parens](/docs/emacs/Matching)).

### Balanced Expressions

A balanced expression is a syntactically recognizable expression, such as a symbol, number, string constant, block, or parenthesized expression in C. See [Balanced Expressions](/docs/emacs/Expressions).

### Balloon Help

See [Glossary---Tooltips](/docs/emacs/Glossary_002d_002d_002dTooltips).

### Base Buffer

A base buffer is a buffer whose text is shared by an indirect buffer (q.v.).

### Bidirectional Text

Some human languages, such as English, are written from left to right. Others, such as Arabic, are written from right to left. Emacs supports both of these forms, as well as any mixture of them—this is “bidirectional text". See [Bidirectional Editing](/docs/emacs/Bidirectional-Editing).

### Bind

To bind a key sequence means to give it a binding (q.v.). See [Rebinding](/docs/emacs/Rebinding).

### Binding

A key sequence gets its meaning in Emacs by having a binding, which is a command (q.v.)—a Lisp function that is run when you type that sequence. See [Binding](/docs/emacs/Commands). Customization often involves rebinding a character to a different command function. The bindings of all key sequences are recorded in the keymaps (q.v.). See [Keymaps](/docs/emacs/Keymaps).

### Blank Lines

Blank lines are lines that contain only whitespace. Emacs has several commands for operating on the blank lines in the buffer. See [Blank Lines](/docs/emacs/Blank-Lines).

### Bookmark

Bookmarks are akin to registers (q.v.) in that they record positions in buffers to which you can return later. Unlike registers, bookmarks persist between Emacs sessions. See [Bookmarks](/docs/emacs/Bookmarks).

### Border

A border is a thin space along the edge of the frame, used just for spacing, not for displaying anything. An Emacs frame has an ordinary external border, outside of everything including the menu bar, plus an internal border that surrounds the text windows, their scroll bars and fringes, and separates them from the menu bar and tool bar. You can customize both borders with options and resources (see [Borders X](/docs/emacs/Borders-X)). Borders are not the same as fringes (q.v.).

### Buffer

The buffer is the basic editing unit; one buffer corresponds to one text being edited. You normally have several buffers, but at any time you are editing only one, the current buffer, though several can be visible when you are using multiple windows or frames (q.v.). Most buffers are visiting (q.v.) some file. See [Buffers](/docs/emacs/Buffers).

### Buffer Selection History

Emacs keeps a buffer selection history that records how recently each Emacs buffer has been selected. This is used for choosing which buffer to select. See [Buffers](/docs/emacs/Buffers).

### Bug

A bug is an incorrect or unreasonable behavior of a program, or inaccurate or confusing documentation. Emacs developers treat bug reports, both in Emacs code and its documentation, very seriously and ask you to report any bugs you find. See [Bugs](/docs/emacs/Bugs).

### Button Down Event

A button down event is the kind of input event (q.v.) generated right away when you press down on a mouse button. See [Mouse Buttons](/docs/emacs/Mouse-Buttons).

### By Default

See [Glossary---Default](/docs/emacs/Glossary_002d_002d_002dDefault).

### Byte Compilation

See [Glossary---Compilation](/docs/emacs/Glossary_002d_002d_002dCompilation).

### cf.

### c.f.

Short for “confer" in Latin, which means “compare with" or “compare to". The second variant, “c.f.", is a widespread misspelling.

### `C-`

`C-` in the name of a character is an abbreviation for Control. See [C-](/docs/emacs/User-Input).

### `C-M-`

`C-M-` in the name of a character is an abbreviation for Control-Meta. If your terminal lacks a real `Meta` key, you type a Control-Meta character by typing `ESC` and then typing the corresponding Control character. See [C-M-](/docs/emacs/User-Input).

### Case Conversion

Case conversion means changing text from upper case to lower case or vice versa. See [Case](/docs/emacs/Case).

### Case Folding

Case folding means ignoring the differences between case variants of the same letter: upper-case, lower-case, and title-case. Emacs performs case folding by default in text search. See [Lax Search](/docs/emacs/Lax-Search).

### Character

Characters form the contents of an Emacs buffer. Also, key sequences (q.v.) are usually made up of characters (though they may include other input events as well). See [User Input](/docs/emacs/User-Input).

### Character Folding

Character folding means ignoring differences between similarly looking characters, such as between `a`, and `ä` and `á`. Emacs performs character folding by default in text search. See [Lax Search](/docs/emacs/Lax-Search).

### Character Set

Emacs supports a number of character sets, each of which represents a particular alphabet or script. See [International](/docs/emacs/International).

### Character Terminal

See [Glossary---Text Terminal](/docs/emacs/Glossary_002d_002d_002dText-Terminal).

### Click Event

A click event is the kind of input event (q.v.) generated when you press a mouse button and release it without moving the mouse. See [Mouse Buttons](/docs/emacs/Mouse-Buttons).

### Client

See [Glossary---Server](/docs/emacs/Glossary_002d_002d_002dServer).

### Clipboard

A clipboard is a buffer provided by the window system for transferring text between applications. On the X Window System, the clipboard is provided in addition to the primary selection (q.v.); on MS-Windows and Mac, the clipboard is used *instead* of the primary selection. See [Clipboard](/docs/emacs/Clipboard).

### Coding System

A coding system is a way to encode text characters in a file or in a stream of information. Emacs has the ability to convert text to or from a variety of coding systems when reading or writing it. See [Coding Systems](/docs/emacs/Coding-Systems).

### Command

A command is a Lisp function specially defined to be able to serve as a key binding in Emacs or to be invoked by its name (see [Glossary---Command Name](/docs/emacs/Glossary_002d_002d_002dCommand-Name)). When you type a key sequence (q.v.), its binding (q.v.) is looked up in the relevant keymaps (q.v.) to find the command to run. See [Commands](/docs/emacs/Commands).

### Command History

See [Glossary---Minibuffer History](/docs/emacs/Glossary_002d_002d_002dMinibuffer-History).

### Command Name

A command name is the name of a Lisp symbol that is a command (see [Commands](/docs/emacs/Commands)). You can invoke any command by its name using `M-x` (see [Running Commands by Name](/docs/emacs/M_002dx)).

### Comment

A comment is text in a program which is intended only for humans reading the program, and which is specially marked so that it will be ignored when the program is loaded or compiled. Emacs offers special commands for creating, aligning and killing comments. See [Comments](/docs/emacs/Comments).

### Common Lisp

Common Lisp is a dialect of Lisp (q.v.) much larger and more powerful than Emacs Lisp. Emacs provides a subset of Common Lisp in the CL package. See [Overview](https://www.gnu.org/software/emacs/manual/html_mono/cl.html#Top) in Common Lisp Extensions.

### Compilation

Compilation is the process of creating an executable program from source code. Emacs has commands for compiling files of Emacs Lisp code (see [Byte Compilation](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Byte-Compilation) in the Emacs Lisp Reference Manual) and programs in C and other languages (see [Compilation](/docs/emacs/Compilation)). Byte-compiled Emacs Lisp code loads and executes faster.

### Complete Key

A complete key is a key sequence that fully specifies one action to be performed by Emacs. For example, `X` and `C-f` and `C-x m` are complete keys. Complete keys derive their meanings from being bound (see [Glossary---Bind](/docs/emacs/Glossary_002d_002d_002dBind)) to commands (q.v.). Thus, `X` is conventionally bound to a command to insert ‘`X`’ in the buffer; `C-x m` is conventionally bound to a command to begin composing a mail message. See [Keys](/docs/emacs/Keys).

### Completion

Completion is what Emacs does when it automatically expands an abbreviation for a name into the entire name. Completion is done for minibuffer (q.v.) arguments when the set of possible valid inputs is known; for example, on command names, buffer names, and file names. Completion usually occurs when `TAB`, `SPC` or `RET` is typed. See [Completion](/docs/emacs/Completion).

### Continuation Line

When a line of text is longer than the width of the window, it normally takes up more than one screen line when displayed (but see [Glossary---Truncation](/docs/emacs/Glossary_002d_002d_002dTruncation)). We say that the text line is continued, and all screen lines used for it after the first are called continuation lines. See [Continuation Lines](/docs/emacs/Continuation-Lines). A related Emacs feature is filling (q.v.).

### Control Character

A control character is a character that you type by holding down the `Ctrl` key. Some control characters also have their own keys, so that you can type them without using `Ctrl`. For example, `RET`, `TAB`, `ESC` and `DEL` are all control characters. See [User Input](/docs/emacs/User-Input).

### Copyleft

A copyleft is a notice giving the public legal permission to redistribute and modify a program or other work of art, but requiring modified versions to carry similar permission. Copyright is normally used to keep users divided and helpless; with copyleft we turn that around to empower users and encourage them to cooperate.

The particular form of copyleft used by the GNU project is called the GNU General Public License. See [Copying](/docs/emacs/Copying).

### `Ctrl`

The `Ctrl` or control key is what you hold down in order to enter a control character (q.v.). See [Glossary---C-](/docs/emacs/Glossary_002d_002d_002dC_002d).

### Current Buffer

The current buffer in Emacs is the Emacs buffer on which most editing commands operate. You can select any Emacs buffer as the current one. See [Buffers](/docs/emacs/Buffers).

### Current Line

The current line is the line that point is on (see [Point](/docs/emacs/Point)).

### Current Paragraph

The current paragraph is the paragraph that point is in. If point is between two paragraphs, the current paragraph is the one that follows point. See [Paragraphs](/docs/emacs/Paragraphs).

### Current Defun

The current defun is the defun (q.v.) that point is in. If point is between defuns, the current defun is the one that follows point. See [Defuns](/docs/emacs/Defuns).

### Cursor

The cursor is the rectangle on the screen which indicates the position (called point; q.v.) at which insertion and deletion takes place. The cursor is on or under the character that follows point. Often people speak of “the cursor" when, strictly speaking, they mean “point". See [Cursor](/docs/emacs/Point).

### Customization

Customization is making minor changes in the way Emacs works, to reflect your preferences or needs. It is often done by setting variables (see [Variables](/docs/emacs/Variables)) or faces (see [Face Customization](/docs/emacs/Face-Customization)), or by rebinding key sequences (see [Keymaps](/docs/emacs/Keymaps)).

### Cut and Paste

See [Glossary---Killing](/docs/emacs/Glossary_002d_002d_002dKilling), and [Glossary---Yanking](/docs/emacs/Glossary_002d_002d_002dYanking).

### Daemon

A daemon is a standard term for a system-level process that runs in the background. Daemons are often started when the system first starts up. When Emacs runs in daemon-mode, it does not open a display. You connect to it with the `emacsclient` program. See [Emacs Server](/docs/emacs/Emacs-Server).

### Default Argument

The default for an argument is the value that will be assumed if you do not specify one. When the minibuffer is used to read an argument, the default argument is used if you just type `RET`. See [Minibuffer](/docs/emacs/Minibuffer).

### Default

A default is the value that is used for a certain purpose when you do not explicitly specify a value to use.

### Default Directory

When you specify a file name that does not start with ‘`/`’ or ‘`~`’, it is interpreted relative to the current buffer’s default directory. (On MS systems, file names that start with a drive letter ‘`x:`’ are treated as absolute, not relative.) See [Default Directory](/docs/emacs/Minibuffer-File).

### Defun

A defun is a major definition at the top level in a program. The name “defun" comes from Lisp, where most such definitions use the construct `defun`. See [Defuns](/docs/emacs/Defuns).

### `DEL`

`DEL` is a character that runs the command to delete one character of text before the cursor. It is typically either the `Delete` key or the `BACKSPACE` key, whichever one is easy to type. See [DEL](/docs/emacs/Erasing).

### Deletion

Deletion means erasing text without copying it into the kill ring (q.v.). The alternative is killing (q.v.). See [Deletion](/docs/emacs/Killing).

### Deletion of Files

Deleting a file means erasing it from the file system. (Note that some systems use the concept of a trash can, or recycle bin, to allow you to undelete files.) See [Miscellaneous File Operations](/docs/emacs/Misc-File-Ops).

### Deletion of Messages

Deleting a message (in Rmail, and other mail clients) means flagging it to be eliminated from your mail file. Until you expunge (q.v.) the Rmail file, you can still undelete the messages you have deleted. See [Rmail Deletion](/docs/emacs/Rmail-Deletion).

### Deletion of Windows

Deleting a window means eliminating it from the screen. Other windows expand to use up the space. The text that was in the window is not lost, and you can create a new window with the same dimensions as the old if you wish. See [Windows](/docs/emacs/Windows).

### Directory

File directories are named collections in the file system, within which you can place individual files or subdirectories. They are sometimes referred to as “folders". See [Directories](/docs/emacs/Directories).

### Directory Local Variable

A directory local variable is a local variable (q.v.) that applies to all the files within a certain directory. See [Directory Variables](/docs/emacs/Directory-Variables).

### Directory Name

On GNU and other Unix-like systems, directory names are strings that end in ‘`/`’. For example, `/no-such-dir/` is a directory name whereas `/tmp` is not, even though `/tmp` names a file that happens to be a directory. On MS-Windows the relationship is more complicated. See [Directory Names](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Directory-Names) in the Emacs Lisp Reference Manual.

### Dired

Dired is the Emacs facility that displays the contents of a file directory and allows you to “edit the directory", performing operations on the files in the directory. See [Dired](/docs/emacs/Dired).

### Disabled Command

A disabled command is one that you may not run without special confirmation. The usual reason for disabling a command is that it is confusing for beginning users. See [Disabling](/docs/emacs/Disabling).

### Down Event

Short for “button down event" (q.v.).

### Drag Event

A drag event is the kind of input event (q.v.) generated when you press a mouse button, move the mouse, and then release the button. See [Mouse Buttons](/docs/emacs/Mouse-Buttons).

### Dribble File

A dribble file is a file into which Emacs writes all the characters that you type on the keyboard. Dribble files can be used to make a record for debugging Emacs bugs. Emacs does not make a dribble file unless you tell it to. See [Bugs](/docs/emacs/Bugs).

### e.g.

Short for “exempli gratia" in Latin, which means “for example".

### Echo Area

The echo area is the bottom line of the screen, used for echoing the arguments to commands, for asking questions, and showing brief messages (including error messages). The messages are stored in the buffer `*Messages*` so you can review them later. See [Echo Area](/docs/emacs/Echo-Area).

### Echoing

Echoing is acknowledging the receipt of input events by displaying them (in the echo area). Emacs never echoes single-character key sequences; longer key sequences echo only if you pause while typing them.

### Electric

We say that a character is electric if it is normally self-inserting (q.v.), but the current major mode (q.v.) redefines it to do something else as well. For example, some programming language major modes define particular delimiter characters to reindent the line, or insert one or more newlines in addition to self-insertion.

### End Of Line

End of line is a character or a sequence of characters that indicate the end of a text line. On GNU and Unix systems, this is a newline (q.v.), but other systems have other conventions. See [end-of-line](/docs/emacs/Coding-Systems). Emacs can recognize several end-of-line conventions in files and convert between them.

### Environment Variable

An environment variable is one of a collection of variables stored by the operating system, each one having a name and a value. Emacs can access environment variables set by its parent shell, and it can set variables in the environment it passes to programs it invokes. See [Environment](/docs/emacs/Environment).

### EOL

See [Glossary---End Of Line](/docs/emacs/Glossary_002d_002d_002dEnd-Of-Line).

### Error

An error occurs when an Emacs command cannot execute in the current circumstances. When an error occurs, execution of the command stops (unless the command has been programmed to do otherwise) and Emacs reports the error by displaying an error message (q.v.).

### Error Message

An error message is output displayed by Emacs when you ask it to do something impossible (such as, killing text forward when point is at the end of the buffer), or when a command malfunctions in some way. Such messages appear in the echo area, accompanied by a beep.

### `ESC`

`ESC` is a character used as a prefix for typing Meta characters on keyboards lacking a `Meta` key. Unlike the `Meta` key (which, like the `SHIFT` key, is held down while another character is typed), you press the `ESC` key as you would press a letter key, and it applies to the next character you type.

### etc.

Short for “et cetera" in Latin, which means “and so on".

### Expression

See [Glossary---Balanced Expression](/docs/emacs/Glossary_002d_002d_002dBalanced-Expression).

### Expunging

Expunging an Rmail, Gnus newsgroup, or Dired buffer is an operation that truly discards the messages or files you have previously flagged for deletion.

### Face

A face is a style of displaying characters. It specifies attributes such as font family and size, foreground and background colors, underline and strike-through, background stipple, etc. Emacs provides features to associate specific faces with portions of buffer text, in order to display that text as specified by the face attributes. See [Faces](/docs/emacs/Faces).

### File Local Variable

A file local variable is a local variable (q.v.) specified in a given file. See [File Variables](/docs/emacs/File-Variables), and [Glossary---Directory Local Variable](/docs/emacs/Glossary_002d_002d_002dDirectory-Local-Variable).

### File Locking

Emacs uses file locking to notice when two different users start to edit one file at the same time. See [Interlocking](/docs/emacs/Interlocking).

### File Name

A file name is a name that refers to a file. File names may be relative or absolute; the meaning of a relative file name depends on the current directory, but an absolute file name refers to the same file regardless of which directory is current. On GNU and Unix systems, an absolute file name starts with a slash (the root directory) or with ‘`~/`’ or ‘`~user/`’ (a home directory). On MS-Windows/MS-DOS, an absolute file name can also start with a drive letter and a colon, e.g., ‘`d:`’.

Some people use the term “pathname" for file names, but we do not; we use the word “path" only in the term “search path" (q.v.).

### File-Name Component

A file-name component names a file directly within a particular directory. On GNU and Unix systems, a file name is a sequence of file-name components, separated by slashes. For example, `foo/bar` is a file name containing two components, ‘`foo`’ and ‘`bar`’; it refers to the file named ‘`bar`’ in the directory named ‘`foo`’ in the current directory. MS-DOS/MS-Windows file names can also use backslashes to separate components, as in `foo\bar`.

### Fill Prefix

The fill prefix is a string that should be expected at the beginning of each line when filling is done. It is not regarded as part of the text to be filled. See [Filling](/docs/emacs/Filling).

### Filling

Filling text means adjusting the position of line-breaks to shift text between consecutive lines, so that all the lines are approximately the same length. See [Filling](/docs/emacs/Filling). Some other editors call this feature “line wrapping".

### Font Lock

Font Lock is a mode that highlights parts of buffer text in different faces, according to the syntax. Some other editors refer to this as “syntax highlighting". For example, all comments (q.v.) might be colored red. See [Font Lock](/docs/emacs/Font-Lock).

### Fontset

A fontset is a named collection of fonts. A fontset specification lists character sets and which font to use to display each of them. Fontsets make it easy to change several fonts at once by specifying the name of a fontset, rather than changing each font separately. See [Fontsets](/docs/emacs/Fontsets).

### Formfeed Character

See [Glossary---Page](/docs/emacs/Glossary_002d_002d_002dPage).

### Frame

A frame is a rectangular cluster of Emacs windows. Emacs starts out with one frame, but you can create more. You can subdivide each frame into Emacs windows (q.v.). When you are using a window system (q.v.), more than one frame can be visible at the same time. See [Frames](/docs/emacs/Frames). Some other editors use the term “window" for this, but in Emacs a window means something else.

### Free Software

Free software is software that gives you the freedom to share, study and modify it. Emacs is free software, part of the GNU project (q.v.), and distributed under a copyleft (q.v.) license called the GNU General Public License. See [Copying](/docs/emacs/Copying).

### Free Software Foundation

The Free Software Foundation (FSF) is a charitable foundation dedicated to promoting the development of free software (q.v.). For more information, see [the FSF website](https://fsf.org/).

### Fringe

On a graphical display (q.v.), there’s a narrow portion of the frame (q.v.) between the text area and the window’s border. These “fringes" are used to display symbols that provide information about the buffer text (see [Fringes](/docs/emacs/Fringes)). Emacs displays the fringe using a special face (q.v.) called `fringe`. See [fringe](/docs/emacs/Faces).

### FSF

See [Glossary---Free Software Foundation](/docs/emacs/Glossary_002d_002d_002dFree-Software-Foundation).

### FTP

FTP is an acronym for File Transfer Protocol. This is one standard method for retrieving remote files (q.v.).

### Function Key

A function key is a key on the keyboard that sends input but does not correspond to any character. See [Function Keys](/docs/emacs/Function-Keys).

### Global

Global means “independent of the current environment; in effect throughout Emacs". It is the opposite of local (q.v.). Particular examples of the use of “global" appear below.

### Global Abbrev

A global definition of an abbrev (q.v.) is effective in all major modes that do not have local (q.v.) definitions for the same abbrev. See [Abbrevs](/docs/emacs/Abbrevs).

### Global Keymap

The global keymap (q.v.) contains key bindings that are in effect everywhere, except when overridden by local key bindings in a major mode’s local keymap (q.v.). See [Keymaps](/docs/emacs/Keymaps).

### Global Mark Ring

The global mark ring records the series of buffers you have recently set a mark (q.v.) in. In many cases you can use this to backtrack through buffers you have been editing, or in which you have found tags (see [Glossary---Tags Table](/docs/emacs/Glossary_002d_002d_002dTags-Table)). See [Global Mark Ring](/docs/emacs/Global-Mark-Ring).

### Global Substitution

Global substitution means replacing each occurrence of one string by another string throughout a large amount of text. See [Replace](/docs/emacs/Replace).

### Global Variable

The global value of a variable (q.v.) takes effect in all buffers that do not have their own local (q.v.) values for the variable. See [Variables](/docs/emacs/Variables).

### GNU

GNU is a recursive acronym for GNU’s Not Unix, and it refers to a Unix-compatible operating system which is free software (q.v.). See [Manifesto](/docs/emacs/Manifesto). GNU is normally used with Linux as the kernel since Linux works better than the GNU kernel. For more information, see [the GNU website](https://www.gnu.org/).

### Graphic Character

Graphic characters are those assigned pictorial images rather than just names. All the non-Meta (q.v.) characters except for the Control (q.v.) characters are graphic characters. These include letters, digits, punctuation, and spaces; they do not include `RET` or `ESC`. In Emacs, typing a graphic character inserts that character (in ordinary editing modes). See [Inserting Text](/docs/emacs/Inserting-Text).

### Graphical Display

A graphical display is one that can display images and multiple fonts. Usually it also has a window system (q.v.).

### Highlighting

Highlighting text means displaying it with a different foreground and/or background color to make it stand out from the rest of the text in the buffer.

Emacs uses highlighting in several ways. It highlights the region whenever it is active (see [Mark](/docs/emacs/Mark)). Incremental search also highlights matches (see [Incremental Search](/docs/emacs/Incremental-Search)). See [Glossary---Font Lock](/docs/emacs/Glossary_002d_002d_002dFont-Lock).

### Hardcopy

Hardcopy means printed output. Emacs has various commands for printing the contents of Emacs buffers. See [Printing](/docs/emacs/Printing).

### `HELP`

`HELP` is the Emacs name for `C-h` or `F1`. You can type `HELP` at any time to ask what options you have, or to ask what a command does. See [Help](/docs/emacs/Help).

### Help Echo

Help echo is a short message displayed in the echo area (q.v.) when the mouse pointer is located on portions of display that require some explanations. Emacs displays help echo for menu items, parts of the mode line, tool-bar buttons, etc. On graphical displays, the messages can be displayed as tooltips (q.v.). See [Tooltips](/docs/emacs/Tooltips).

### Home Directory

Your home directory contains your personal files. On a multi-user GNU or Unix system, each user has his or her own home directory. When you start a new login session, your home directory is the default directory in which to start. A standard shorthand for your home directory is ‘`~`’. Similarly, ‘`~user`’ represents the home directory of some other user.

### Hook

A hook is a list of functions to be called on specific occasions, such as saving a buffer in a file, major mode activation, etc. By customizing the various hooks, you can modify Emacs’s behavior without changing any of its code. See [Hooks](/docs/emacs/Hooks).

### Hyper

Hyper is the name of a modifier bit that a keyboard input character may have. To make a character Hyper, type it while holding down the `Hyper` key. Such characters are given names that start with `Hyper-` (usually written `H-` for short). See [Modifier Keys](/docs/emacs/Modifier-Keys).

### i.e.

Short for “id est" in Latin, which means “that is".

### Iff

“Iff" means “if and only if". This terminology comes from mathematics. Try to avoid using this term in documentation, since many are unfamiliar with it and mistake it for a typo.

### Inbox

An inbox is a file in which mail is delivered by the operating system. Rmail transfers mail from inboxes to Rmail files in which the mail is then stored permanently or until explicitly deleted. See [Rmail Inbox](/docs/emacs/Rmail-Inbox).

### Incremental Search

Emacs provides an incremental search facility, whereby Emacs begins searching for a string as soon as you type the first character. As you type more characters, it refines the search. See [Incremental Search](/docs/emacs/Incremental-Search).

### Indentation

Indentation means blank space at the beginning of a line. Most programming languages have conventions for using indentation to illuminate the structure of the program, and Emacs has special commands to adjust indentation. See [Indentation](/docs/emacs/Indentation).

### Indirect Buffer

An indirect buffer is a buffer that shares the text of another buffer, called its base buffer (q.v.). See [Indirect Buffers](/docs/emacs/Indirect-Buffers).

### Info

Info is the hypertext format used by the GNU project for writing documentation.

### Input Event

An input event represents, within Emacs, one action taken by the user on the terminal. Input events include typing characters, typing function keys, pressing or releasing mouse buttons, and switching between Emacs frames. See [User Input](/docs/emacs/User-Input).

### Input Method

An input method is a system for entering non-ASCII text characters by typing sequences of ASCII characters (q.v.). See [Input Methods](/docs/emacs/Input-Methods).

### Insertion

Insertion means adding text into the buffer, either from the keyboard or from some other place in Emacs.

### Interlocking

See [Glossary---File Locking](/docs/emacs/Glossary_002d_002d_002dFile-Locking).

### Isearch

See [Glossary---Incremental Search](/docs/emacs/Glossary_002d_002d_002dIncremental-Search).

### Justification

Justification means adding extra spaces within lines of text in order to adjust the position of the text edges. See [Fill Commands](/docs/emacs/Fill-Commands).

### Key Binding

See [Glossary---Binding](/docs/emacs/Glossary_002d_002d_002dBinding).

### Keyboard Macro

Keyboard macros are a way of defining new Emacs commands from sequences of existing ones, with no need to write a Lisp program. You can use a macro to record a sequence of commands, then play them back as many times as you like. See [Keyboard Macros](/docs/emacs/Keyboard-Macros).

### Keyboard Shortcut

A keyboard shortcut is a key sequence (q.v.) that invokes a command. What some programs call “assigning a keyboard shortcut", Emacs calls “binding a key sequence". See [Glossary---Binding](/docs/emacs/Glossary_002d_002d_002dBinding).

### Key Sequence

A key sequence (key, for short) is a sequence of input events (q.v.) that are meaningful as a single unit. If the key sequence is enough to specify one action, it is a complete key (q.v.); if it is not enough, it is a prefix key (q.v.). See [Keys](/docs/emacs/Keys).

### Keymap

The keymap is the data structure that records the bindings (q.v.) of key sequences to the commands that they run. For example, the global keymap binds the character `C-n` to the command function `next-line`. See [Keymaps](/docs/emacs/Keymaps).

### Keyboard Translation Table

The keyboard translation table is an array that translates the character codes that come from the terminal into the character codes that make up key sequences.

### Kill Ring

The kill ring is where all text you have killed (see [Glossary---Killing](/docs/emacs/Glossary_002d_002d_002dKilling)) recently is saved. You can reinsert any of the killed text still in the ring; this is called yanking (q.v.). See [Yanking](/docs/emacs/Yanking).

### Killing

Killing means erasing text and saving it on the kill ring so it can be yanked (q.v.) later. Some other systems call this “cutting". Most Emacs commands that erase text perform killing, as opposed to deletion (q.v.). See [Killing](/docs/emacs/Killing).

### Killing a Job

Killing a job (such as, an invocation of Emacs) means making it cease to exist. Any data within it, if not saved in a file, is lost. See [Exiting](/docs/emacs/Exiting).

### Language Environment

Your choice of language environment specifies defaults for the input method (q.v.) and coding system (q.v.). See [Language Environments](/docs/emacs/Language-Environments). These defaults are relevant if you edit non-ASCII text (see [International](/docs/emacs/International)).

### Line Wrapping

See [Glossary---Filling](/docs/emacs/Glossary_002d_002d_002dFilling).

### Lisp

Lisp is a programming language. Most of Emacs is written in a dialect of Lisp, called Emacs Lisp, which is extended with special features that make it especially suitable for text editing tasks.

### List

A list is, approximately, a text string beginning with an open parenthesis and ending with the matching close parenthesis. In C mode and other non-Lisp modes, groupings surrounded by other kinds of matched delimiters appropriate to the language, such as braces, are also considered lists. Emacs has special commands for many operations on lists. See [Moving by Parens](/docs/emacs/Moving-by-Parens).

### Local

Local means “in effect only in a particular context"; the relevant kind of context is a particular function execution, a particular buffer, or a particular major mode. It is the opposite of “global" (q.v.). Specific uses of “local" in Emacs terminology appear below.

### Local Abbrev

A local abbrev definition is effective only if a particular major mode is selected. In that major mode, it overrides any global definition for the same abbrev. See [Abbrevs](/docs/emacs/Abbrevs).

### Local Keymap

A local keymap is used in a particular major mode; the key bindings (q.v.) in the current local keymap override global bindings of the same key sequences. See [Keymaps](/docs/emacs/Keymaps).

### Local Variable

A local value of a variable (q.v.) applies to only one buffer. See [Locals](/docs/emacs/Locals).

### `M-`

`M-` in the name of a character is an abbreviation for `Meta`, one of the modifier keys that can accompany any character. See [M-](/docs/emacs/User-Input).

### `M-C-`

`M-C-` in the name of a character is an abbreviation for Control-Meta; it means the same thing as `C-M-` (q.v.).

### `M-x`

`M-x` is the key sequence that is used to call an Emacs command by name. This is how you run commands that are not bound to key sequences. See [Running Commands by Name](/docs/emacs/M_002dx).

### Mail

Mail means messages sent from one user to another through the computer system, to be read at the recipient’s convenience. Emacs has commands for composing and sending mail, and for reading and editing the mail you have received. See [Sending Mail](/docs/emacs/Sending-Mail). See [Rmail](/docs/emacs/Rmail), for one way to read mail with Emacs.

### Mail Composition Method

A mail composition method is a program runnable within Emacs for editing and sending a mail message. Emacs lets you select from several alternative mail composition methods. See [Mail Methods](/docs/emacs/Mail-Methods).

### Major Mode

The Emacs major modes are a mutually exclusive set of options, each of which configures Emacs for editing a certain sort of text. Ideally, each programming language has its own major mode. See [Major Modes](/docs/emacs/Major-Modes).

### Margin

The space between the usable part of a window (including the fringe) and the window edge.

### Mark

The mark points to a position in the text. It specifies one end of the region (q.v.), point being the other end. Many commands operate on all the text from point to the mark. Each buffer has its own mark. See [Mark](/docs/emacs/Mark).

### Mark Ring

The mark ring is used to hold several recent previous locations of the mark, in case you want to move back to them. Each buffer has its own mark ring; in addition, there is a single global mark ring (q.v.). See [Mark Ring](/docs/emacs/Mark-Ring).

### Menu Bar

The menu bar is a line at the top of an Emacs frame. It contains words you can click on with the mouse to bring up menus, or you can use a keyboard interface to navigate it. See [Menu Bars](/docs/emacs/Menu-Bars).

### Message

See [Glossary---Mail](/docs/emacs/Glossary_002d_002d_002dMail).

### Meta

Meta is the name of a modifier bit which you can use in a command character. To enter a meta character, you hold down the `Meta` key while typing the character. We refer to such characters with names that start with `Meta-` (usually written `M-` for short). For example, `M-<` is typed by holding down `Meta` and at the same time typing `<` (which itself is done, on most terminals, by holding down `SHIFT` and typing `,`). See [Meta](/docs/emacs/User-Input).

On some terminals, the `Meta` key is actually labeled `Alt` or `Edit`.

### Meta Character

A Meta character is one whose character code includes the Meta bit.

### Minibuffer

The minibuffer is the window that appears when necessary inside the echo area (q.v.), used for reading arguments to commands. See [Minibuffer](/docs/emacs/Minibuffer).

### Minibuffer History

The minibuffer history records the text you have specified in the past for minibuffer arguments, so you can conveniently use the same text again. See [Minibuffer History](/docs/emacs/Minibuffer-History).

### Minor Mode

A minor mode is an optional feature of Emacs, which can be switched on or off independently of all other features. Each minor mode has a command to turn it on or off. Some minor modes are global (q.v.), and some are local (q.v.). See [Minor Modes](/docs/emacs/Minor-Modes).

### Minor Mode Keymap

A minor mode keymap is a keymap that belongs to a minor mode and is active when that mode is enabled. Minor mode keymaps take precedence over the buffer’s local keymap, just as the local keymap takes precedence over the global keymap. See [Keymaps](/docs/emacs/Keymaps).

### Mode Line

The mode line is the line at the bottom of each window (q.v.), giving status information on the buffer displayed in that window. See [Mode Line](/docs/emacs/Mode-Line).

### Modified Buffer

A buffer (q.v.) is modified if its text has been changed since the last time the buffer was saved (or since it was created, if it has never been saved). See [Saving](/docs/emacs/Saving).

### Moving Text

Moving text means erasing it from one place and inserting it in another. The usual way to move text is by killing (q.v.) it and then yanking (q.v.) it. See [Killing](/docs/emacs/Killing).

### MULE

Prior to Emacs 23, MULE was the name of a software package which provided a *MULtilingual Enhancement* to Emacs, by adding support for multiple character sets (q.v.). MULE was later integrated into Emacs, and much of it was replaced when Emacs gained internal Unicode support in version 23.

Some parts of Emacs that deal with character set support still use the MULE name. See [International](/docs/emacs/International).

### Multibyte Character

A multibyte character is a character that takes up several bytes in a buffer. Emacs uses multibyte characters to represent non-ASCII text, since the number of non-ASCII characters is much more than 256. See [International Characters](/docs/emacs/International-Chars).

### Named Mark

A named mark is a register (q.v.), in its role of recording a location in text so that you can move point to that location. See [Registers](/docs/emacs/Registers).

### Narrowing

Narrowing means creating a restriction (q.v.) that limits editing in the current buffer to only a part of the text. Text outside that part is inaccessible for editing (or viewing) until the boundaries are widened again, but it is still there, and saving the file saves it all. See [Narrowing](/docs/emacs/Narrowing).

### Newline

Control-J characters in the buffer terminate lines of text and are therefore also called newlines. See [Glossary---End Of Line](/docs/emacs/Glossary_002d_002d_002dEnd-Of-Line).

### `nil`

`nil` is a value usually interpreted as a logical “false". Its opposite is `t`, interpreted as “true".

### Numeric Argument

A numeric argument is a number, specified before a command, to change the effect of the command. Often the numeric argument serves as a repeat count. See [Arguments](/docs/emacs/Arguments).

### Overwrite Mode

Overwrite mode is a minor mode. When it is enabled, ordinary text characters replace the existing text after point rather than pushing it to one side. See [Minor Modes](/docs/emacs/Minor-Modes).

### Package

A package is a collection of Lisp code that you download and automatically install from within Emacs. Packages provide a convenient way to add new features. See [Packages](/docs/emacs/Packages).

### Page

A page is a unit of text, delimited by formfeed characters (ASCII control-L, code 014) at the beginning of a line. Some Emacs commands are provided for moving over and operating on pages. See [Pages](/docs/emacs/Pages).

### Paragraph

Paragraphs are the medium-size unit of human-language text. There are special Emacs commands for moving over and operating on paragraphs. See [Paragraphs](/docs/emacs/Paragraphs).

### Parsing

We say that certain Emacs commands parse words or expressions in the text being edited. Really, all they know how to do is find the other end of a word or expression.

### Point

Point is the place in the buffer at which insertion and deletion occur. Point is considered to be between two characters, not at one character. The terminal’s cursor (q.v.) indicates the location of point. See [Point](/docs/emacs/Point).

### Prefix Argument

See [Glossary---Numeric Argument](/docs/emacs/Glossary_002d_002d_002dNumeric-Argument).

### Prefix Key

A prefix key is a key sequence (q.v.) whose sole function is to introduce a set of longer key sequences. `C-x` is an example of prefix key; any two-character sequence starting with `C-x` is therefore a legitimate key sequence. See [Keys](/docs/emacs/Keys).

### Primary Selection

The primary selection is one particular X selection (q.v.); it is the selection that most X applications use for transferring text to and from other applications.

The Emacs commands that mark or select text set the primary selection, and clicking the mouse inserts text from the primary selection when appropriate. See [Shift Selection](/docs/emacs/Shift-Selection).

### Prompt

A prompt is text used to ask you for input. Displaying a prompt is called prompting. Emacs prompts always appear in the echo area (q.v.). One kind of prompting happens when the minibuffer is used to read an argument (see [Minibuffer](/docs/emacs/Minibuffer)); the echoing that happens when you pause in the middle of typing a multi-character key sequence is also a kind of prompting (see [Echo Area](/docs/emacs/Echo-Area)).

### q.v.

Short for “quod vide" in Latin, which means “which see".

### Query-Replace

Query-replace is an interactive string replacement feature provided by Emacs. See [Query Replace](/docs/emacs/Query-Replace).

### Quitting

Quitting means canceling a partially typed command or a running command, using `C-g` (or `C-BREAK` on MS-DOS). See [Quitting](/docs/emacs/Quitting).

### Quoting

Quoting means depriving a character of its usual special significance. The most common kind of quoting in Emacs is with `C-q`. What constitutes special significance depends on the context and on convention. For example, an ordinary character as an Emacs command inserts itself; so in this context, a special character is any character that does not normally insert itself (such as `DEL`, for example), and quoting it makes it insert itself as if it were not special. Not all contexts allow quoting. See [Quoting](/docs/emacs/Inserting-Text).

### Quoting File Names

Quoting a file name turns off the special significance of constructs such as ‘`$`’, ‘`~`’ and ‘`:`’. See [Quoted File Names](/docs/emacs/Quoted-File-Names).

### Read-Only Buffer

A read-only buffer is one whose text you are not allowed to change. Normally Emacs makes buffers read-only when they contain text which has a special significance to Emacs; for example, Dired buffers. Visiting a file that is write-protected also makes a read-only buffer. See [Buffers](/docs/emacs/Buffers).

### Rectangle

A rectangle consists of the text in a given range of columns on a given range of lines. Normally you specify a rectangle by putting point at one corner and putting the mark at the diagonally opposite corner. See [Rectangles](/docs/emacs/Rectangles).

### Recursive Editing Level

A recursive editing level is a state in which part of the execution of a command involves asking you to edit some text. This text may or may not be the same as the text to which the command was applied. The mode line (q.v.) indicates recursive editing levels with square brackets (‘`[`’ and ‘`]`’). See [Recursive Edit](/docs/emacs/Recursive-Edit).

### Redisplay

Redisplay is the process of correcting the image on the screen to correspond to changes that have been made in the text being edited. See [Redisplay](/docs/emacs/Screen).

### Regexp

See [Glossary---Regular Expression](/docs/emacs/Glossary_002d_002d_002dRegular-Expression).

### Region

The region is the text between point (q.v.) and the mark (q.v.). Many commands operate on the text of the region. See [Region](/docs/emacs/Mark).

### Register

Registers are named slots in which text, buffer positions, or rectangles can be saved for later use. See [Registers](/docs/emacs/Registers). A related Emacs feature is bookmarks (q.v.).

### Regular Expression

A regular expression is a pattern that can match various text strings; for example, ‘`a[0-9]+`’ matches ‘`a`’ followed by one or more digits. See [Regexps](/docs/emacs/Regexps).

### Remote File

A remote file is a file that is stored on a system other than your own. Emacs can access files on other computers provided that they are reachable from your machine over the network, and (obviously) that you have a supported method to gain access to those files. See [Remote Files](/docs/emacs/Remote-Files).

### Repeat Count

See [Glossary---Numeric Argument](/docs/emacs/Glossary_002d_002d_002dNumeric-Argument).

### Replacement

See [Glossary---Global Substitution](/docs/emacs/Glossary_002d_002d_002dGlobal-Substitution).

### Restriction

A buffer’s restriction is the amount of text, at the beginning or the end of the buffer, that is temporarily inaccessible. Giving a buffer a nonzero amount of restriction is called narrowing (q.v.); removing a restriction is called widening (q.v.). See [Narrowing](/docs/emacs/Narrowing).

### `RET`

`RET` is a character that in Emacs runs the command to insert a newline into the text. It is also used to terminate most arguments read in the minibuffer (q.v.). See [Return](/docs/emacs/User-Input).

### Reverting

Reverting means returning to the original state. For example, Emacs lets you revert a buffer by re-reading its file from disk. See [Reverting](/docs/emacs/Reverting).

### Saving

Saving a buffer means copying its text into the file that was visited (q.v.) in that buffer. This is the way text in files actually gets changed by your Emacs editing. See [Saving](/docs/emacs/Saving).

### Scroll Bar

A scroll bar is a tall thin hollow box that appears at the side of a window. You can use mouse commands in the scroll bar to scroll the window. The scroll bar feature is supported only under windowing systems. See [Scroll Bars](/docs/emacs/Scroll-Bars).

### Scrolling

Scrolling means shifting the text in the Emacs window so as to see a different part of the buffer. See [Scrolling](/docs/emacs/Scrolling).

### Searching

Searching means moving point to the next occurrence of a specified string or the next match for a specified regular expression. See [Search](/docs/emacs/Search).

### Search Path

A search path is a list of directories, to be used for searching for files for certain purposes. For example, the variable `load-path` holds a search path for finding Lisp library files. See [Lisp Libraries](/docs/emacs/Lisp-Libraries).

### Secondary Selection

The secondary selection is one particular X selection (q.v.); some X applications can use it for transferring text to and from other applications. Emacs has special mouse commands for transferring text using the secondary selection. See [Secondary Selection](/docs/emacs/Secondary-Selection).

### Selected Frame

The selected frame is the one your input currently operates on. See [Frames](/docs/emacs/Frames).

### Selected Window

The selected window is the one your input currently operates on. See [Basic Window](/docs/emacs/Basic-Window).

### Selecting a Buffer

Selecting a buffer means making it the current (q.v.) buffer. See [Select Buffer](/docs/emacs/Select-Buffer).

### Selection

Windowing systems allow an application program to specify selections whose values are text. A program can also read the selections that other programs have set up. This is the principal way of transferring text between window applications. Emacs has commands to work with the primary (q.v.) selection and the secondary (q.v.) selection, and also with the clipboard (q.v.).

### Self-Documentation

Self-documentation is the feature of Emacs that can tell you what any command does, or give you a list of all commands related to a topic you specify. You ask for self-documentation with the help character, `C-h`. See [Help](/docs/emacs/Help).

### Self-Inserting Character

A character is self-inserting if typing that character inserts that character in the buffer. Ordinary printing and whitespace characters are self-inserting in Emacs, except in certain special major modes.

### Sentences

Emacs has commands for moving by or killing by sentences. See [Sentences](/docs/emacs/Sentences).

### Server

Within Emacs, you can start a “server" process, which listens for connections from “clients". This offers a faster alternative to starting several Emacs instances. See [Emacs Server](/docs/emacs/Emacs-Server), and [Glossary---Daemon](/docs/emacs/Glossary_002d_002d_002dDaemon).

### Sexp

A sexp (short for “s-expression") is the basic syntactic unit of Lisp in its textual form: either a list, or Lisp atom. Sexps are also the balanced expressions (q.v.) of the Lisp language; this is why the commands for editing balanced expressions have ‘`sexp`’ in their name. See [Sexps](/docs/emacs/Expressions).

### Simultaneous Editing

Simultaneous editing means two users modifying the same file at once. Simultaneous editing, if not detected, can cause one user to lose his or her work. Emacs detects all cases of simultaneous editing, and warns one of the users to investigate. See [Simultaneous Editing](/docs/emacs/Interlocking).

### `SPC`

`SPC` is the space character, which you enter by pressing the space bar.

### Speedbar

The speedbar is a special tall frame that provides fast access to Emacs buffers, functions within those buffers, Info nodes, and other interesting parts of text within Emacs. See [Speedbar](/docs/emacs/Speedbar).

### Spell Checking

Spell checking means checking correctness of the written form of each one of the words in a text. Emacs can use various external spelling-checker programs to check the spelling of parts of a buffer via a convenient user interface. See [Spelling](/docs/emacs/Spelling).

### String

A string is a kind of Lisp data object that contains a sequence of characters. Many Emacs variables are intended to have strings as values. The Lisp syntax for a string consists of the characters in the string with a ‘`"`’ before and another ‘`"`’ after. A ‘`"`’ that is part of the string must be written as ‘`\"`’ and a ‘`\`’ that is part of the string must be written as ‘`\\`’. All other characters, including newline, can be included just by writing them inside the string; however, backslash sequences as in C, such as ‘`\n`’ for newline or ‘`\241`’ using an octal character code, are allowed as well.

### String Substitution

See [Glossary---Global Substitution](/docs/emacs/Glossary_002d_002d_002dGlobal-Substitution).

### Syntax Highlighting

See [Glossary---Font Lock](/docs/emacs/Glossary_002d_002d_002dFont-Lock).

### Syntax Table

The syntax table tells Emacs which characters are part of a word, which characters balance each other like parentheses, etc. See [Syntax Tables](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Syntax-Tables) in The Emacs Lisp Reference Manual.

### Super

Super is the name of a modifier bit that a keyboard input character may have. To make a character Super, type it while holding down the `SUPER` key. Such characters are given names that start with `Super-` (usually written `s-` for short). See [Modifier Keys](/docs/emacs/Modifier-Keys).

### Suspending

Suspending Emacs means stopping it temporarily and returning control to its parent process, which is usually a shell. Unlike killing a job (q.v.), you can later resume the suspended Emacs job without losing your buffers, unsaved edits, undo history, etc. See [Exiting](/docs/emacs/Exiting).

### `TAB`

`TAB` is the tab character. In Emacs it is typically used for indentation or completion.

### Tab Bar

The tab bar is a row of tabs at the top of an Emacs frame. Clicking on one of these tabs switches named persistent window configurations. See [Tab Bars](/docs/emacs/Tab-Bars).

### Tab Line

The tab line is a line of tabs at the top of an Emacs window. Clicking on one of these tabs switches window buffers. See [Tab Line](/docs/emacs/Tab-Line).

### Tag

A tag is an identifier in a program source. See [Xref](/docs/emacs/Xref).

### Tags Table

A tags table is a file that serves as an index to identifiers: definitions of functions, macros, data structures, etc., in one or more other files. See [Tags Tables](/docs/emacs/Tags-Tables).

### Termscript File

A termscript file contains a record of all characters sent by Emacs to the terminal. It is used for tracking down bugs in Emacs redisplay. Emacs does not make a termscript file unless you tell it to. See [Bugs](/docs/emacs/Bugs).

### Text

“Text" has two meanings (see [Text](/docs/emacs/Text)):

*   Data consisting of a sequence of characters, as opposed to binary numbers, executable programs, and the like. The basic contents of an Emacs buffer (aside from the text properties, q.v.) are always text in this sense.
*   Data consisting of written human language (as opposed to programs), or following the stylistic conventions of human language.

### Text Terminal

A text terminal, or character terminal, is a display that is limited to displaying text in character units. Such a terminal cannot control individual pixels it displays. Emacs supports a subset of display features on text terminals.

### Text Properties

Text properties are annotations recorded for particular characters in the buffer. Images in the buffer are recorded as text properties; they also specify formatting information. See [Editing Format Info](/docs/emacs/Editing-Format-Info).

### Theme

A theme is a set of customizations (q.v.) that give Emacs a particular appearance or behavior. For example, you might use a theme for your favorite set of faces (q.v.).

### Tool Bar

The tool bar is a line (sometimes multiple lines) of icons at the top of an Emacs frame. Clicking on one of these icons executes a command. You can think of this as a graphical relative of the menu bar (q.v.). See [Tool Bars](/docs/emacs/Tool-Bars).

### Tooltips

Tooltips are small windows displaying a help echo (q.v.) text, which explains parts of the display, lists useful options available via mouse clicks, etc. See [Tooltips](/docs/emacs/Tooltips).

### Top Level

Top level is the normal state of Emacs, in which you are editing the text of the file you have visited. You are at top level whenever you are not in a recursive editing level (q.v.) or the minibuffer (q.v.), and not in the middle of a command. You can get back to top level by aborting (q.v.) and quitting (q.v.). See [Quitting](/docs/emacs/Quitting).

### Transient Mark Mode

The default behavior of the mark (q.v.) and region (q.v.), in which setting the mark activates it and highlights the region, is called Transient Mark mode. In GNU Emacs 23 and onwards, it is enabled by default. See [Disabled Transient Mark](/docs/emacs/Disabled-Transient-Mark).

### Transposition

Transposing two units of text means putting each one into the place formerly occupied by the other. There are Emacs commands to transpose two adjacent characters, words, balanced expressions (q.v.) or lines (see [Transpose](/docs/emacs/Transpose)).

### Trash Can

See [Glossary---Deletion of Files](/docs/emacs/Glossary_002d_002d_002dDeletion-of-Files).

### Truncation

Truncating text lines in the display means leaving out any text on a line that does not fit within the right margin of the window displaying it. See [Truncation](/docs/emacs/Continuation-Lines), and [Glossary---Continuation Line](/docs/emacs/Glossary_002d_002d_002dContinuation-Line).

### TTY

See [Glossary---Text Terminal](/docs/emacs/Glossary_002d_002d_002dText-Terminal).

### Undoing

Undoing means making your previous editing go in reverse, bringing back the text that existed earlier in the editing session. See [Undo](/docs/emacs/Undo).

### Unix

Unix is a class of multi-user computer operating systems with a long history. There are several implementations today. The GNU project (q.v.) aims to develop a complete Unix-like operating system that is free software (q.v.).

### User Option

A user option is a face (q.v.) or a variable (q.v.) that exists so that you can customize Emacs by setting it to a new value. See [Easy Customization](/docs/emacs/Easy-Customization).

### Variable

A variable is an object in Lisp that can store an arbitrary value. Emacs uses some variables for internal purposes, and has others (known as “user options"; q.v.) just so that you can set their values to control the behavior of Emacs. The variables used in Emacs that you are likely to be interested in are listed in the Variables Index in this manual (see [Variable Index](/docs/emacs/Variable-Index)). See [Variables](/docs/emacs/Variables), for information on variables.

### Version Control

Version control systems keep track of multiple versions of a source file. They provide a more powerful alternative to keeping backup files (q.v.). See [Version Control](/docs/emacs/Version-Control).

### Visiting

Visiting a file means loading its contents into a buffer (q.v.) where they can be edited. See [Visiting](/docs/emacs/Visiting).

### Whitespace

Whitespace is any run of consecutive formatting characters (space, tab, newline, backspace, etc.).

### Widening

Widening is removing any restriction (q.v.) on the current buffer; it is the opposite of narrowing (q.v.). See [Narrowing](/docs/emacs/Narrowing).

### Window

Emacs divides a frame (q.v.) into one or more windows, each of which can display the contents of one buffer (q.v.) at any time. See [Screen](/docs/emacs/Screen), for basic information on how Emacs uses the screen. See [Windows](/docs/emacs/Windows), for commands to control the use of windows. Some other editors use the term “window" for what we call a “frame" in Emacs.

### Window System

A window system is software that operates on a graphical display (q.v.), to subdivide the screen so that multiple applications can have their own windows at the same time. All modern operating systems include a window system.

### Word Abbrev

See [Glossary---Abbrev](/docs/emacs/Glossary_002d_002d_002dAbbrev).

### Word Search

Word search is searching for a sequence of words, considering the punctuation between them as insignificant. See [Word Search](/docs/emacs/Word-Search).

### Yanking

Yanking means reinserting text previously killed (q.v.). It can be used to undo a mistaken kill, or for copying or moving text. Some other systems call this “pasting". See [Yanking](/docs/emacs/Yanking).
