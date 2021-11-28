---
slug: Files
---

The operating system stores data permanently in named *files*, so most of the text you edit with Emacs comes from a file and is ultimately stored in a file.

To edit a file, you must tell Emacs to read the file and prepare a buffer containing a copy of the file’s text. This is called *visiting* the file. Editing commands apply directly to text in the buffer; that is, to the copy inside Emacs. Your changes appear in the file itself only when you *save* the buffer back into the file.

In addition to visiting and saving files, Emacs can delete, copy, rename, and append to files, keep multiple versions of them, and operate on file directories.

|                                                        |    |                                                       |
| :----------------------------------------------------- | -- | :---------------------------------------------------- |
| • [File Names](/docs/emacs/File-Names)                 |    | How to type and edit file-name arguments.             |
| • [Visiting](/docs/emacs/Visiting)                     |    | Visiting a file prepares Emacs to edit the file.      |
| • [Saving](/docs/emacs/Saving)                         |    | Saving makes your changes permanent.                  |
| • [Reverting](/docs/emacs/Reverting)                   |    | Reverting cancels all the changes not saved.          |
| • [Auto Revert](/docs/emacs/Auto-Revert)               |    | Keeping buffers automatically up-to-date.             |
| • [Auto Save](/docs/emacs/Auto-Save)                   |    | Auto Save periodically protects against loss of data. |
| • [File Aliases](/docs/emacs/File-Aliases)             |    | Handling multiple names for one file.                 |
| • [Directories](/docs/emacs/Directories)               |    | Creating, deleting, and listing file directories.     |
| • [Comparing Files](/docs/emacs/Comparing-Files)       |    | Finding where two files differ.                       |
| • [Diff Mode](/docs/emacs/Diff-Mode)                   |    | Mode for editing file differences.                    |
| • [Copying and Naming](/docs/emacs/Copying-and-Naming) |    | Copying, naming and renaming files.                   |
| • [Misc File Ops](/docs/emacs/Misc-File-Ops)           |    | Other things you can do on files.                     |
| • [Compressed Files](/docs/emacs/Compressed-Files)     |    | Accessing compressed files.                           |
| • [File Archives](/docs/emacs/File-Archives)           |    | Operating on tar, zip, jar etc. archive files.        |
| • [Remote Files](/docs/emacs/Remote-Files)             |    | Accessing files on other machines.                    |
| • [Quoted File Names](/docs/emacs/Quoted-File-Names)   |    | Quoting special characters in file names.             |
| • [File Name Cache](/docs/emacs/File-Name-Cache)       |    | Completion against a list of files you often use.     |
| • [File Conveniences](/docs/emacs/File-Conveniences)   |    | Convenience features for finding files.               |
| • [Image Mode](/docs/emacs/Image-Mode)                 |    | Viewing image files.                                  |
| • [Filesets](/docs/emacs/Filesets)                     |    | Handling sets of files.                               |
