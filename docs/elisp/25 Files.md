---
slug: Files
---

This chapter describes the Emacs Lisp functions and variables to find, create, view, save, and otherwise work with files and directories. A few other file-related functions are described in [Buffers](Buffers), and those related to backups and auto-saving are described in [Backups and Auto-Saving](Backups-and-Auto_002dSaving).

Many of the file functions take one or more arguments that are file names. A file name is a string. Most of these functions expand file name arguments using the function `expand-file-name`, so that `~` is handled correctly, as are relative file names (including `../` and the empty string). See [File Name Expansion](File-Name-Expansion).

In addition, certain *magic* file names are handled specially. For example, when a remote file name is specified, Emacs accesses the file over the network via an appropriate protocol. See [Remote Files](https://www.gnu.org/software/emacs/manual/html_mono/emacs.html#Remote-Files) in The GNU Emacs Manual. This handling is done at a very low level, so you may assume that all the functions described in this chapter accept magic file names as file name arguments, except where noted. See [Magic File Names](Magic-File-Names), for details.

When file I/O functions signal Lisp errors, they usually use the condition `file-error` (see [Handling Errors](Handling-Errors)). The error message is in most cases obtained from the operating system, according to locale `system-messages-locale`, and decoded using coding system `locale-coding-system` (see [Locales](Locales)).

|                                                      |    |                                                                             |
| :--------------------------------------------------- | -- | :-------------------------------------------------------------------------- |
| • [Visiting Files](Visiting-Files)                   |    | Reading files into Emacs buffers for editing.                               |
| • [Saving Buffers](Saving-Buffers)                   |    | Writing changed buffers back into files.                                    |
| • [Reading from Files](Reading-from-Files)           |    | Reading files into buffers without visiting.                                |
| • [Writing to Files](Writing-to-Files)               |    | Writing new files from parts of buffers.                                    |
| • [File Locks](File-Locks)                           |    | Locking and unlocking files, to prevent simultaneous editing by two people. |
| • [Information about Files](Information-about-Files) |    | Testing existence, accessibility, size of files.                            |
| • [Changing Files](Changing-Files)                   |    | Renaming files, changing permissions, etc.                                  |
| • [Files and Storage](Files-and-Storage)             |    | Surviving power and media failures                                          |
| • [File Names](File-Names)                           |    | Decomposing and expanding file names.                                       |
| • [Contents of Directories](Contents-of-Directories) |    | Getting a list of the files in a directory.                                 |
| • [Create/Delete Dirs](Create_002fDelete-Dirs)       |    | Creating and Deleting Directories.                                          |
| • [Magic File Names](Magic-File-Names)               |    | Special handling for certain file names.                                    |
| • [Format Conversion](Format-Conversion)             |    | Conversion to and from various file formats.                                |
