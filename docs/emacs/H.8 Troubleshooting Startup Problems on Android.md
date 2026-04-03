---
slug: Android-Troubleshooting
---

Since Android has no command line, there is normally no way to specify command-line arguments when starting Emacs. This is very nasty when you make a mistake in your Emacs initialization files that prevents Emacs from starting up at all, as the system generally prohibits other programs from accessing Emacs's home directory. See [Initial Options](/docs/emacs/Initial-Options).

However, Emacs can be started with the equivalent of either the option `--quick`, or `--debug-init` through a special preferences screen. Under Android 7.0 and later, this can be accessed through the Emacs "app info" page in the system settings program; on older systems, this is displayed as a separate icon on the desktop labeled "Emacs options".

Consult the manufacturer of your device for more details, as how to do this varies by device.

The first time any given copy of Emacs starts on a device, it spends a while loading the preloaded Lisp files which normally come with Emacs. This produces a "dump file" (see [Initial Options](/docs/emacs/Initial-Options)) in the files directory, containing an identifier unique to that copy of Emacs.

The next time that same copy of Emacs starts up, it simply loads the data contained in that dump file, greatly reducing start up time.

If by some unforeseen circumstance the dump file is corrupted, Emacs can crash. If that happens, the dump file stored in the Emacs files directory can be erased through the preferences screen described above.

Emacs supports an alternative method of rescuing broken Emacs installations on Android 4.4 and later: Emacs exports a "documents provider" which accesses the contents of Emacs's home directory, that can then be accessed by any file manager program.

If you can find out how to open that documents provider in the file manager that comes with your device, you can rename, delete, or edit your initialization or dump files from there instead.
