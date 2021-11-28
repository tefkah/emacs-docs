---
slug: Windows-HOME
---

The Windows equivalent of `HOME` is the *user-specific application data directory*. The actual location depends on the Windows version; typical values are `C:\Documents and Settings\username\Application Data` on Windows 2000 up to XP, `C:\Users\username\AppData\Roaming` on Windows Vista and later, and either `C:\WINDOWS\Application Data` or `C:\WINDOWS\Profiles\username\Application Data` on Windows 9X/ME. If this directory does not exist or cannot be accessed, Emacs falls back to `C:\` as the default value of `HOME`.

You can override this default value of `HOME` by explicitly setting the environment variable `HOME` to point to any directory on your system. `HOME` can be set either from the command shell prompt or from ‘`Properties`’ dialog of ‘`My Computer`’. `HOME` can also be set in the system registry, see [MS-Windows Registry](MS_002dWindows-Registry).

For compatibility with older versions of Emacs[^1], if there is a file named `.emacs` in `C:\`, the root directory of drive `C:`, and `HOME` is set neither in the environment nor in the Registry, Emacs will treat `C:\` as the default `HOME` location, and will not look in the application data directory, even if it exists. Note that only `.emacs` is looked for in `C:\`; the older name `_emacs` (see below) is not. This use of `C:\.emacs` to define `HOME` is deprecated; Emacs will display a warning about its use during startup.

Whatever the final place is, Emacs sets the internal value of the `HOME` environment variable to point to it, and it will use that location for other files and directories it normally looks for or creates in your home directory.

You can always find out what Emacs thinks is your home directory’s location by typing `C-x d ~/ RET`. This should present the list of files in the home directory, and show its full name on the first line. Likewise, to visit your init file, type `C-x C-f ~/.emacs RET` (assuming the file’s name is `.emacs`).

Your init file can have any name mentioned in [Init File](Init-File).

Because MS-DOS does not allow file names with leading dots, and older Windows systems made it hard to create files with such names, the Windows port of Emacs supports an init file name `_emacs`, if such a file exists in the home directory and `.emacs` does not. This name is considered obsolete, so Emacs will display a warning if it is used.

[^1]: Older versions of Emacs didn’t check the application data directory.
