---
slug: Debugging-Tools
---

Magit and its dependencies provide a few debugging tools, and we appreciate it very much if you use those tools before reporting an issue. Please include all relevant output when reporting an issue.

### `M-x magit-version`     (`magit-version`)

This command shows the currently used versions of Magit, Git, and Emacs in the echo area. Non-interactively this just returns the Magit version.

### `M-x magit-emacs-Q-command`     (`magit-emacs-Q-command`)

This command shows a debugging shell command in the echo area and adds it to the kill ring. Paste that command into a shell and run it.

This shell command starts `emacs` with only `magit` and its dependencies loaded. Neither your configuration nor other installed packages are loaded. This makes it easier to determine whether some issue lays with Magit or something else.

If you run Magit from its Git repository, then you should be able to use `make emacs-Q` instead of the output of this command.

### `M-x magit-toggle-verbose-refresh`     (`magit-toggle-verbose-refresh`)

This command toggles whether Magit refreshes buffers verbosely. Enabling this helps figuring out which sections are bottlenecks. The additional output can be found in the `*Messages*` buffer.

### `M-x magit-debug-git-executable`     (`magit-debug-git-executable`)

This command displays a buffer containing information about the available and used `git` executable(s), and can be useful when investigating `exec-path` issues.

Also see [Git Executable](Git-Executable).

### `M-x with-editor-debug`     (`with-editor-debug`)

This command displays a buffer containing information about the available and used `emacsclient` executable(s), and can be useful when investigating why Magit (or rather `with-editor`) cannot find an appropriate `emacsclient` executable.

Also see [(with-editor)Debugging](https://magit.vc/manual/with-editor.html#Debugging).

Please also see the [FAQ](FAQ).
