---
slug: Saving-Emacs-Sessions
---

You can use the desktop library to save the state of Emacs from one session to another. The saved Emacs *desktop configuration* includes the buffers, their file names, major modes, buffer positions, window and frame configuration, and some important global variables.

To enable this feature, use the Customization buffer (see [Easy Customization Interface](/docs/emacs/Easy-Customization)) to set `desktop-save-mode` to `t` for future sessions, or add this line in your init file (see [The Emacs Initialization File](/docs/emacs/Init-File)):

```
(desktop-save-mode 1)

```

If you turn on `desktop-save-mode` in your init file, then when Emacs starts, it looks for a saved desktop in `desktop-path` (which defaults to `user-emacs-directory` and then your home directory) and uses the first desktop it finds. While Emacs runs with `desktop-save-mode` turned on, it by default auto-saves the desktop whenever any of the desktop configuration changes. The variable `desktop-auto-save-timeout` determines how frequently Emacs checks for modifications to your desktop. The desktop is also saved when you exit Emacs.

Specify the option '`--no-desktop`' on the Emacs command line when you don't want it to reload any saved desktop configurations. This turns off `desktop-save-mode` for the current session. Starting Emacs with the '`--no-init-file`' option also disables desktop reloading, since it bypasses the init file, where `desktop-save-mode` is usually turned on.

You can have separate saved desktop configurations in different directories; starting Emacs from a directory where you have a saved desktop configuration will restore that configuration, provided that you customize `desktop-path` to prepend `.` (the current directory) to the other directories there. You can save the current desktop and reload the one saved in another directory by typing `M-x desktop-change-dir`. Typing `M-x desktop-revert` reverts to the previously reloaded desktop.

The file in which Emacs saves the desktop is locked while the session runs, to avoid inadvertently overwriting it from another Emacs session. That lock is normally removed when Emacs exits, but if Emacs or your system crashes, the lock stays, and when you restart Emacs, it will by default ask you whether to use the locked desktop file. You can avoid the question by customizing the variable `desktop-load-locked-desktop` to either `nil`, which means never load the desktop in this case, or `t`, which means load the desktop without asking. You can also customize the variable to the special value `check-pid`, which means to load the file if the Emacs process that has locked the desktop is not running on the local machine. This should not be used in circumstances where the locking Emacs might still be running on another machine, which could be the case in multi-user environments where your home directory is mounted remotely using NFS or similar.

When Emacs starts in daemon mode, it cannot ask you any questions, so if it finds the desktop file locked, it will not load it, unless `desktop-load-locked-desktop` is `t`. Note that restoring the desktop in daemon mode is somewhat problematic for other reasons: e.g., the daemon cannot use GUI features, so parameters such as frame position, size, and decorations cannot be restored. For that reason, you may wish to delay restoring the desktop in daemon mode until the first client connects, by calling `desktop-read` (see below) in a hook function that you add to `server-after-make-frame-hook` (see [Creating Frames](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Creating-Frames) in The Emacs Lisp Reference Manual).

Whenever you want, you can use the command `M-x desktop-save` to force immediate saving of the current desktop. This is useful either if you do not want to use the automatic desktop restoration, and thus don't turn on `desktop-save-mode`, or when you have made significant changes to the desktop, and want to make sure the configuration doesn't get lost if Emacs or your system crashes. You can use `M-x desktop-read` to restore a previously-saved desktop if the current Emacs session didn't load any desktop yet.

By default, the desktop tries to save and restore the frame and window configuration. To disable this, set `desktop-restore-frames` to `nil`. (See that variable's documentation for some related options that you can customize to fine-tune this behavior.)

When the desktop restores the frame and window configuration, it uses the recorded values of frame parameters, disregarding any settings for those parameters you have in your init file (see [The Emacs Initialization File](/docs/emacs/Init-File)). This means that frame parameters such as fonts and faces for the restored frames will come from the desktop file, where they were saved when you exited your previous Emacs session; any settings for those parameters in your init file will be ignored. To disable this, customize the value of `frameset-filter-alist` to filter out the frame parameters you don't want to be restored; they will then be set according to your customizations in the init file.

Information about buffers visiting remote files is not saved by default. Customize the variable `desktop-files-not-to-save` to change this. In this case, you might also consider customizing `remote-file-name-access-timeout`, which is the number of seconds after which buffer restoration of a remote file is stopped. This prevents Emacs from being blocked when restoring sessions that visited remote files.

By default, all the buffers in the desktop are restored in one go. However, this may be slow if there are a lot of buffers in the desktop. You can specify the maximum number of buffers to restore immediately with the variable `desktop-restore-eager`; the remaining buffers are restored lazily, when Emacs is idle.

Type `M-x desktop-clear` to empty the Emacs desktop; this can be useful, for example, if you want to switch to another desktop by invoking `M-x desktop-read` next. The `desktop-clear` command kills all buffers except for internal ones, and clears the global variables listed in `desktop-globals-to-clear`. If you want it to preserve certain buffers, customize the variable `desktop-clear-preserve-buffers`, whose value is a list of regular expressions matching the names of buffers not to kill.

If you want to save minibuffer history from one session to another, use the `savehist` library. You can also save selected minibuffer-history variables as part of `desktop-save-mode` if you add those variables to the value of `desktop-globals-to-save`.
