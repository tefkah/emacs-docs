---
slug: Saving-Emacs-Sessions
---

Use the desktop library to save the state of Emacs from one session to another. Once you save the Emacs *desktop*—the buffers, their file names, major modes, buffer positions, and so on—then subsequent Emacs sessions reload the saved desktop. By default, the desktop also tries to save the frame and window configuration. To disable this, set `desktop-restore-frames` to `nil`. (See that variable’s documentation for some related options that you can customize to fine-tune this behavior.)

Information about buffers visiting remote files is not saved by default. Customize the variable `desktop-files-not-to-save` to change this.

When the desktop restores the frame and window configuration, it uses the recorded values of frame parameters, disregarding any settings for those parameters you have in your init file (see [Init File](Init-File)). This means that frame parameters such as fonts and faces for the restored frames will come from the desktop file, where they were saved when you exited your previous Emacs session; any settings for those parameters in your init file will be ignored. To disable this, customize the value of `frameset-filter-alist` to filter out the frame parameters you don’t want to be restored.

You can save the desktop manually with the command `M-x desktop-save`. You can also enable automatic saving of the desktop when you exit Emacs, and automatic restoration of the last saved desktop when Emacs starts: use the Customization buffer (see [Easy Customization](Easy-Customization)) to set `desktop-save-mode` to `t` for future sessions, or add this line in your init file (see [Init File](Init-File)):

```lisp
(desktop-save-mode 1)
```

If you turn on `desktop-save-mode` in your init file, then when Emacs starts, it looks for a saved desktop in the current directory. (More precisely, it looks in the directories specified by `desktop-path`, and uses the first desktop it finds.) Thus, you can have separate saved desktops in different directories, and the starting directory determines which one Emacs reloads. You can save the current desktop and reload one saved in another directory by typing `M-x desktop-change-dir`. Typing `M-x desktop-revert` reverts to the desktop previously reloaded.

Specify the option ‘`--no-desktop`’ on the command line when you don’t want it to reload any saved desktop. This turns off `desktop-save-mode` for the current session. Starting Emacs with the ‘`--no-init-file`’ option also disables desktop reloading, since it bypasses the init file, where `desktop-save-mode` is usually turned on.

By default, all the buffers in the desktop are restored in one go. However, this may be slow if there are a lot of buffers in the desktop. You can specify the maximum number of buffers to restore immediately with the variable `desktop-restore-eager`; the remaining buffers are restored lazily, when Emacs is idle.

Type `M-x desktop-clear` to empty the Emacs desktop. This kills all buffers except for internal ones, and clears the global variables listed in `desktop-globals-to-clear`. If you want this to preserve certain buffers, customize the variable `desktop-clear-preserve-buffers-regexp`, whose value is a regular expression matching the names of buffers not to kill.

If you want to save minibuffer history from one session to another, use the `savehist` library.

While Emacs runs with `desktop-save-mode` turned on, it by default auto-saves the desktop whenever any of it changes. The variable `desktop-auto-save-timeout` determines how frequently Emacs checks for modifications to your desktop.

The file in which Emacs saves the desktop is locked while the session runs, to avoid inadvertently overwriting it from another Emacs session. That lock is normally removed when Emacs exits, but if Emacs or your system crashes, the lock stays, and when you restart Emacs, it will by default ask you whether to use the locked desktop file. You can avoid the question by customizing the variable `desktop-load-locked-desktop` to either `nil`, which means never load the desktop in this case, or `t`, which means load the desktop without asking.

When Emacs starts in daemon mode, it cannot ask you any questions, so if it finds the desktop file locked, it will not load it, unless `desktop-load-locked-desktop` is `t`. Note that restoring the desktop in daemon mode is somewhat problematic for other reasons: e.g., the daemon cannot use GUI features, so parameters such as frame position, size, and decorations cannot be restored. For that reason, you may wish to delay restoring the desktop in daemon mode until the first client connects, by calling `desktop-read` in a hook function that you add to `server-after-make-frame-hook` (see [Creating Frames](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Creating-Frames) in The Emacs Lisp Reference Manual).
