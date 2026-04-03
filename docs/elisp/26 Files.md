---
slug: Files
---

This chapter describes the Emacs Lisp functions and variables to find, create, view, save, and otherwise work with files and directories. A few other file-related functions are described in [Buffers](/docs/elisp/Buffers), and those related to backups and auto-saving are described in [Backups and Auto-Saving](/docs/elisp/Backups-and-Auto_002dSaving).

Many of the file functions take one or more arguments that are file names. A file name is a string. Most of these functions expand file name arguments using the function `expand-file-name`, so that `~` is handled correctly, as are relative file names (including `../` and the empty string). See [Functions that Expand Filenames](/docs/elisp/File-Name-Expansion).

In addition, certain *magic* file names are handled specially. For example, when a remote file name is specified, Emacs accesses the file over the network via an appropriate protocol. See [Remote Files](https://www.gnu.org/software/emacs/manual/html_mono/emacs.html#Remote-Files) in The GNU Emacs Manual. This handling is done at a very low level, so you may assume that all the functions described in this chapter accept magic file names as file name arguments, except where noted. See [Making Certain File Names "Magic"](/docs/elisp/Magic-File-Names), for details.

When file I/O functions signal Lisp errors, they usually use the condition `file-error` (see [Writing Code to Handle Errors](/docs/elisp/Handling-Errors)). The error message is in most cases obtained from the operating system, according to locale `system-messages-locale`, and decoded using coding system `locale-coding-system` (see [Locales](/docs/elisp/Locales)).
