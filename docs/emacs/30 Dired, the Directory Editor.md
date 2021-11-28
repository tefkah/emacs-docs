---
slug: Dired
---

Dired makes an Emacs buffer containing a listing of a directory, and optionally some of its subdirectories as well. You can use the normal Emacs commands to move around in this buffer, and special Dired commands to operate on the listed files. Dired works with both local and remote directories.

The Dired buffer is normally read-only, and inserting text in it is not allowed (however, the Wdired mode allows that, see [Wdired](Wdired)). Ordinary printing characters such as `d` and `x` are redefined for special Dired commands. Some Dired commands *mark* or *flag* the *current file* (that is, the file on the current line); other commands operate on the marked files or on the flagged files. You first mark certain files in order to operate on all of them with one command.

The Dired-X package provides various extra features for Dired mode. See [Dired-X](https://www.gnu.org/software/emacs/manual/html_mono/dired-x.html#Top) in Dired Extra User’s Manual.

You can also view a list of files in a directory with `C-x C-d` (`list-directory`). Unlike Dired, this command does not allow you to operate on the listed files. See [Directories](Directories).

|                                                      |    |                                                                              |
| :--------------------------------------------------- | -- | :--------------------------------------------------------------------------- |
| • [Enter](Dired-Enter)                               |    | How to invoke Dired.                                                         |
| • [Navigation](Dired-Navigation)                     |    | Special motion commands in the Dired buffer.                                 |
| • [Deletion](Dired-Deletion)                         |    | Deleting files with Dired.                                                   |
| • [Flagging Many Files](Flagging-Many-Files)         |    | Flagging files based on their names.                                         |
| • [Visit](Dired-Visiting)                            |    | Other file operations through Dired.                                         |
| • [Marks vs Flags](Marks-vs-Flags)                   |    | Flagging for deletion vs marking.                                            |
| • [Operating on Files](Operating-on-Files)           |    | How to copy, rename, print, compress, etc. either one file or several files. |
| • [Shell Commands in Dired](Shell-Commands-in-Dired) |    | Running a shell command on the marked files.                                 |
| • [Transforming File Names](Transforming-File-Names) |    | Using patterns to rename multiple files.                                     |
| • [Comparison in Dired](Comparison-in-Dired)         |    | Running `diff` by way of Dired.                                              |
| • [Subdirectories in Dired](Subdirectories-in-Dired) |    | Adding subdirectories to the Dired buffer.                                   |
| • [Subdir Switches](Subdir-Switches)                 |    | Subdirectory switches in Dired.                                              |
| • [Subdirectory Motion](Subdirectory-Motion)         |    | Moving across subdirectories, and up and down.                               |
| • [Hiding Subdirectories](Hiding-Subdirectories)     |    | Making subdirectories visible or invisible.                                  |
| • [Updating](Dired-Updating)                         |    | Discarding lines for files of no interest.                                   |
| • [Find](Dired-and-Find)                             |    | Using `find` to choose the files for Dired.                                  |
| • [Wdired](Wdired)                                   |    | Operating on files by editing the Dired buffer.                              |
| • [Image-Dired](Image_002dDired)                     |    | Viewing image thumbnails in Dired.                                           |
| • [Misc](Misc-Dired-Features)                        |    | Various other features.                                                      |
