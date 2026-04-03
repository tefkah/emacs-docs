---
slug: Android-Software
---

An exceptionally limited set of Unix-like command line tools is distributed alongside default installations of Android. Several projects exist to augment this selection, providing options that range from improved reproductions of Unix command-line utilities to package repositories providing extensive collections of free GNU and Unix software.

[Busybox](https://busybox.net) provides Unix utilities and limited replicas of certain popular GNU programs such as `wget` in a single statically-linked Linux binary, which is capable of running under Android.

[Termux](https://termux.dev) provides a package manager based on the Debian project's `dpkg` system and a set of package repositories containing substantial amounts of free software for Unix systems, including compilers, debuggers, and runtimes for languages such as C, C++, Java, Python and Common Lisp. These packages are customarily installed from within a purpose-built terminal emulator application, but access is also granted to Emacs when it is built with the same application signing key, and its "shared user ID" is set to the same package name, as that of the terminal emulator program. The file `java/INSTALL` within the Emacs distribution illustrates how to build Emacs in this fashion.

[termux-packages](https://github.com/termux/termux-packages) provides the package definitions used by Termux to generate their package repositories, which may also be independently compiled for installation within Emacs's home directory.

In addition to the projects mentioned above, statically linked binaries for most Linux kernel-based systems can also be run on Android.

Emacs can be configured with support for viewing SVG image files by means of the `librsvg` library. In SVG files, there may be references to other images on the file-system, whose format `librsvg` cannot detect by default, and which will be rendered as blank squares unless an XDG-compliant *MIME database* is installed into the directory `.local/share/mime` within your home directory.

As the XDG `shared-mime-info` tools must be available to generate such a database, it is recommended to produce this database in a temporary directory on a GNU/Linux or Unix system, before transferring the same to the recipient Android device. With the latest release of `shared-mime-info` installed, create a temporary directory in which to generate the MIME database, copy the default `freedesktop.org.in` MIME catalog to a directory named `packages`, and execute `update-mime-info` to generate the database:

```lisp
$ mkdir -p my-mime-database/packages
$ cp /usr/share/mime/packages/freedesktop.org.xml my-mime-database/packages
$ update-mime-info my-mime-database

```

This may print a series of notices stating that the MIME database specified is not in the search path on your host system, which are of no consequence. Proceed by transferring the contents of the MIME database to the recipient system, e.g., to `/sdcard/Download/my-mime-database.tar.gz`:

```lisp
$ cd; mkdir -p .local/share
$ tar xfz /sdcard/Download/my-mime-database.tar.gz
$ mv my-mime-database .local/share/mime
$ rm /sdcard/Download/my-mime-database.tar.gz

```

If your Emacs session has already attempted to display an SVG image with embeds, Emacs must be restarted before the new MIME database will enter into effect.
