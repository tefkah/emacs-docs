---
slug: Text-and-Binary
---

GNU Emacs uses newline characters to separate text lines. This is the convention used on GNU, Unix, and other POSIX-compliant systems.

By contrast, MS-DOS and MS-Windows normally use carriage return followed by linefeed, a two-character sequence, to separate text lines. (Linefeed is the same character as newline.) Therefore, convenient editing of typical files with Emacs requires conversion of these end-of-line (EOL) sequences. And that is what Emacs normally does: it converts carriage return followed by linefeed into newline when reading files, and converts newline into carriage return followed by linefeed when writing files. The same mechanism that handles conversion of international character codes does this conversion also (see [Coding Systems](/docs/emacs/Coding-Systems)).

One consequence of this special format-conversion of most files is that character positions as reported by Emacs (see [Position Info](/docs/emacs/Position-Info)) do not agree with the file size information known to the operating system.

In addition, if Emacs recognizes from a file’s contents that it uses newline rather than carriage return followed by linefeed as its line separator, it does not perform EOL conversion when reading or writing that file. Thus, you can read and edit files from GNU and Unix systems on MS-DOS with no special effort, and they will retain their Unix-style end-of-line convention after you edit them.

The mode line indicates whether end-of-line translation was used for the current buffer. If MS-DOS end-of-line translation is in use for the buffer, the MS-Windows build of Emacs displays a backslash ‘`\`’ after the coding system mnemonic near the beginning of the mode line (see [Mode Line](/docs/emacs/Mode-Line)). If no EOL translation was performed, the string ‘`(Unix)`’ is displayed instead of the backslash, to alert you that the file’s EOL format is not the usual carriage return followed by linefeed.

To visit a file and specify whether it uses DOS-style or Unix-style end-of-line, specify a coding system (see [Text Coding](/docs/emacs/Text-Coding)). For example, `C-x RET c unix RET C-x C-f foobar.txt` visits the file `foobar.txt` without converting the EOLs; if some line ends with a carriage return followed by linefeed pair, Emacs will display ‘`^M`’ at the end of that line. Similarly, you can direct Emacs to save a buffer in a specified EOL format with the `C-x RET f` command. For example, to save a buffer with Unix EOL format, type `C-x RET f unix RET C-x C-s`. If you visit a file with DOS EOL conversion, then save it with Unix EOL format, that effectively converts the file to Unix EOL style, like the `dos2unix` program.

When you use NFS, Samba, or some other similar method to access file systems that reside on computers using GNU or Unix systems, Emacs should not perform end-of-line translation on any files in these file systems—not even when you create a new file. To request this, designate these file systems as *untranslated* file systems by calling the function `add-untranslated-filesystem`. It takes one argument: the file system name, including a drive letter and optionally a directory. For example,

```lisp
(add-untranslated-filesystem "Z:")
```

designates drive Z as an untranslated file system, and

```lisp
(add-untranslated-filesystem "Z:\\foo")
```

designates directory `\foo` on drive Z as an untranslated file system.

Most often you would use `add-untranslated-filesystem` in your `.emacs` or `init.el` init file, or in `site-start.el` so that all the users at your site get the benefit of it.

To countermand the effect of `add-untranslated-filesystem`, use the function `remove-untranslated-filesystem`. This function takes one argument, which should be a string just like the one that was used previously with `add-untranslated-filesystem`.

Designating a file system as untranslated does not affect character set conversion, only end-of-line conversion. Essentially, it directs Emacs to default to creating new files with the Unix-style convention of using newline at the end of a line. See [Coding Systems](/docs/emacs/Coding-Systems).
