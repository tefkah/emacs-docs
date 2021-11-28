---
slug: Files
---

The operating system stores data permanently in named *files*, so most of the text you edit with Emacs comes from a file and is ultimately stored in a file.

To edit a file, you must tell Emacs to read the file and prepare a buffer containing a copy of the file’s text. This is called *visiting* the file. Editing commands apply directly to text in the buffer; that is, to the copy inside Emacs. Your changes appear in the file itself only when you *save* the buffer back into the file.

In addition to visiting and saving files, Emacs can delete, copy, rename, and append to files, keep multiple versions of them, and operate on file directories.

|                                            |    |                                                       |
| :----------------------------------------- | -- | :---------------------------------------------------- |
| • [File Names](File-Names)                 |    | How to type and edit file-name arguments.             |
| • [Visiting](Visiting)                     |    | Visiting a file prepares Emacs to edit the file.      |
| • [Saving](Saving)                         |    | Saving makes your changes permanent.                  |
| • [Reverting](Reverting)                   |    | Reverting cancels all the changes not saved.          |
| • [Auto Revert](Auto-Revert)               |    | Keeping buffers automatically up-to-date.             |
| • [Auto Save](Auto-Save)                   |    | Auto Save periodically protects against loss of data. |
| • [File Aliases](File-Aliases)             |    | Handling multiple names for one file.                 |
| • [Directories](Directories)               |    | Creating, deleting, and listing file directories.     |
| • [Comparing Files](Comparing-Files)       |    | Finding where two files differ.                       |
| • [Diff Mode](Diff-Mode)                   |    | Mode for editing file differences.                    |
| • [Copying and Naming](Copying-and-Naming) |    | Copying, naming and renaming files.                   |
| • [Misc File Ops](Misc-File-Ops)           |    | Other things you can do on files.                     |
| • [Compressed Files](Compressed-Files)     |    | Accessing compressed files.                           |
| • [File Archives](File-Archives)           |    | Operating on tar, zip, jar etc. archive files.        |
| • [Remote Files](Remote-Files)             |    | Accessing files on other machines.                    |
| • [Quoted File Names](Quoted-File-Names)   |    | Quoting special characters in file names.             |
| • [File Name Cache](File-Name-Cache)       |    | Completion against a list of files you often use.     |
| • [File Conveniences](File-Conveniences)   |    | Convenience features for finding files.               |
| • [Image Mode](Image-Mode)                 |    | Viewing image files.                                  |
| • [Filesets](Filesets)                     |    | Handling sets of files.                               |
