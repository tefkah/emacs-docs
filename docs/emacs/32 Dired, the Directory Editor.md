---
slug: Dired
---

Dired makes an Emacs buffer containing a listing of a directory, and optionally some of its subdirectories as well. You can use the normal Emacs commands to move around in this buffer, and special Dired commands to operate on the listed files. Dired works with both local and remote directories.

The Dired buffer is normally read-only, and inserting text in it is not allowed (however, the Wdired mode allows that, see [Editing the Dired Buffer](/docs/emacs/Wdired)). Ordinary printing characters such as `d` and `x` are redefined for special Dired commands. Some Dired commands *mark* or *flag* the *current file* (that is, the file on the current line); other commands operate on the marked files or on the flagged files. You first mark certain files in order to operate on all of them with one command.

The Dired-X package provides various extra features for Dired mode. See [Dired-X](https://www.gnu.org/software/emacs/manual/html_mono/dired-x.html#Top) in Dired Extra User's Manual.

You can also view a list of files in a directory with `C-x C-d` (`list-directory`). Unlike Dired, this command does not allow you to operate on the listed files. See [File Directories](/docs/emacs/Directories).
