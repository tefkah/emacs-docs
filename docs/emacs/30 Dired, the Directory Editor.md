---
slug: Dired
---

Dired makes an Emacs buffer containing a listing of a directory, and optionally some of its subdirectories as well. You can use the normal Emacs commands to move around in this buffer, and special Dired commands to operate on the listed files. Dired works with both local and remote directories.

The Dired buffer is normally read-only, and inserting text in it is not allowed (however, the Wdired mode allows that, see [Wdired](/docs/emacs/Wdired)). Ordinary printing characters such as `d` and `x` are redefined for special Dired commands. Some Dired commands *mark* or *flag* the *current file* (that is, the file on the current line); other commands operate on the marked files or on the flagged files. You first mark certain files in order to operate on all of them with one command.

The Dired-X package provides various extra features for Dired mode. See [Dired-X](https://www.gnu.org/software/emacs/manual/html_mono/dired-x.html#Top) in Dired Extra User’s Manual.

You can also view a list of files in a directory with `C-x C-d` (`list-directory`). Unlike Dired, this command does not allow you to operate on the listed files. See [Directories](/docs/emacs/Directories).

|                                                                  |    |                                                                              |
| :--------------------------------------------------------------- | -- | :--------------------------------------------------------------------------- |
| • [Enter](/docs/emacs/Dired-Enter)                               |    | How to invoke Dired.                                                         |
| • [Navigation](/docs/emacs/Dired-Navigation)                     |    | Special motion commands in the Dired buffer.                                 |
| • [Deletion](/docs/emacs/Dired-Deletion)                         |    | Deleting files with Dired.                                                   |
| • [Flagging Many Files](/docs/emacs/Flagging-Many-Files)         |    | Flagging files based on their names.                                         |
| • [Visit](/docs/emacs/Dired-Visiting)                            |    | Other file operations through Dired.                                         |
| • [Marks vs Flags](/docs/emacs/Marks-vs-Flags)                   |    | Flagging for deletion vs marking.                                            |
| • [Operating on Files](/docs/emacs/Operating-on-Files)           |    | How to copy, rename, print, compress, etc. either one file or several files. |
| • [Shell Commands in Dired](/docs/emacs/Shell-Commands-in-Dired) |    | Running a shell command on the marked files.                                 |
| • [Transforming File Names](/docs/emacs/Transforming-File-Names) |    | Using patterns to rename multiple files.                                     |
| • [Comparison in Dired](/docs/emacs/Comparison-in-Dired)         |    | Running `diff` by way of Dired.                                              |
| • [Subdirectories in Dired](/docs/emacs/Subdirectories-in-Dired) |    | Adding subdirectories to the Dired buffer.                                   |
| • [Subdir Switches](/docs/emacs/Subdir-Switches)                 |    | Subdirectory switches in Dired.                                              |
| • [Subdirectory Motion](/docs/emacs/Subdirectory-Motion)         |    | Moving across subdirectories, and up and down.                               |
| • [Hiding Subdirectories](/docs/emacs/Hiding-Subdirectories)     |    | Making subdirectories visible or invisible.                                  |
| • [Updating](/docs/emacs/Dired-Updating)                         |    | Discarding lines for files of no interest.                                   |
| • [Find](/docs/emacs/Dired-and-Find)                             |    | Using `find` to choose the files for Dired.                                  |
| • [Wdired](/docs/emacs/Wdired)                                   |    | Operating on files by editing the Dired buffer.                              |
| • [Image-Dired](/docs/emacs/Image_002dDired)                     |    | Viewing image thumbnails in Dired.                                           |
| • [Misc](/docs/emacs/Misc-Dired-Features)                        |    | Various other features.                                                      |
