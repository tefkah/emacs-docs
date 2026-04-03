---
slug: Android-File-System
---

Emacs exposes a special directory on Android systems: the name of the directory is `/assets`, and it contains the `etc`, `lisp` and `info` directories which are normally installed in `/usr/share/emacs` directory on GNU and Unix systems. On Android systems, the Lisp emulation of `ls` (see [Emulation of `ls` on MS-Windows](/docs/emacs/ls-in-Lisp)) is also enabled by default, as the `ls` binary which comes with the system varies by manufacturer and usually does not support all of the features required by Emacs. One copy of `ls` distributed with some Android systems is even known to lack support for the `-l` flag.

This directory exists because Android does not extract the contents of application packages on to the file system while unpacking them, but instead requires programs like Emacs to access its contents using a special "asset manager" interface. Here are the peculiarities that result from such an implementation:

- Subprocesses (such as `ls`) can not run from the `/assets` directory; if you try to run a subprocess with `current-directory` set to `/assets`, `/content/storage` or a subdirectory thereof, it will run from the home directory instead.
- There are no `.` and `..` directories inside the `/assets` or `/content` directory.
- Files in the `/assets` directory are always read only, and may be read in to memory more than once each time they are opened.

Aside from the `/assets` directory, Android programs normally have access to four other directories. They are:

- The *app data* directory. This also serves as the home directory for Emacs, and is always accessible read-write.
- The *app library* directory. This is automatically appended to `exec-path` and made `exec-directory` upon startup, and contains utility executables alongside Emacs itself.
- The *external storage* directory. This is accessible to Emacs when the user grants the "Files and Media" permission to Emacs via system settings.
- Directories provided by *document providers* on Android 5.0 and later. These directories exist independently of the Unix virtual filesystem, containing files provided by external programs (see [Accessing Files from Other Programs on Android](/docs/emacs/Android-Document-Providers).)

Despite ordinary installations of Android not having files within the (normally read-only) root directory named `content` or `assets`, you may want to access real files by these names if the Android installation in use has been customized. These files will conflict with the aforementioned special directories, but can nevertheless be accessed by writing their names relative to the "parent" directory of the root directory, as so illustrated: `/../content`, `/../assets`.

The external storage directory is found at `/sdcard`. The other directories are not found at any fixed location (but see below), although the app data directory is typically symlinked to `/data/data/org.gnu.emacs/files`.

Older versions of Android used to place the app library directory under the name `lib` in the parent of the app data directory. Today, this directory is often placed in a directory with a randomly generated name under `/data/app`.

For the convenience of scripts running within applications sharing the same user ID as Emacs (which have no access to the `exec-directory` variable), a fairly considerable effort is made at startup to symlink the application library directory to its traditional location within the parent of the app data directory.

If Emacs is reinstalled and the location of the app library directory consequently changes, that symlink will also be updated to point to its new location the next time Emacs is started by the system.

On Android devices running very old (2.6.29) versions of the Linux kernel, Emacs needs to create files named starting with `temp~unlinked` in the temporary file directory in order to read from asset files. Do not create files with such names yourself, or they may be overwritten or removed.

On Android 11 and later, the Android system restricts applications from accessing files in the `/sdcard` directory using file-related system calls such as `open` and `readdir`.

This restriction is known as "Scoped Storage", and supposedly makes the system more secure. Unfortunately, it also means that Emacs cannot access files in those directories, despite holding the necessary permissions. Thankfully, the Open Handset Alliance's version of Android allows this restriction to be disabled on a per-program basis; the corresponding option in the system settings panel is:

```lisp
System -> Apps -> Special App Access -> All files access -> Emacs

```

After you disable or enable this setting as appropriate and grant Emacs the "Files and Media" permission, it will be able to access files under `/sdcard` as usual. These settings are not present on some proprietary versions of Android.
