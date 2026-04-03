---
slug: Android-Document-Providers
---

Android 5.0 introduces a new sort of program, the "document provider": these programs are small services that provide access to their own files independently of the asset manager and the Unix filesystem. Emacs supports accessing files and directories they provide, placing their files within the directory `/content/storage`.

Before Emacs is granted access to one of these directories, it must first request the right to access it. This is done by running the command (see [Running Commands by Name](/docs/emacs/M_002dx)) `android-request-directory-access`, which displays a file selection dialog.

If a directory is selected from this dialog, its contents are subsequently made available within a new directory named `/content/storage/authority/id`, where *authority* is the name of the document provider, and *id* is a unique identifier assigned to the directory by the document provider.

Such a directory can be deleted once no longer required by providing its name to the command `android-relinquish-directory-access`.

The same limitations applied to the `/assets` directory (see [What Files Emacs Can Access on Android](/docs/emacs/Android-File-System)) are applied when creating sub-processes within those directories, because they do not exist within the Unix file-system. In addition, although Emacs can normally write and create files inside these directories, it cannot create symlinks or hard links.

Since document providers are allowed to perform expensive network operations to obtain file contents, a file access operation within one of these directories has the potential to take a significant amount of time.
