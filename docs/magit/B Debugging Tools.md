---
slug: Debugging-Tools
---

Magit and its dependencies provide a few debugging tools, and we appreciate it very much if you use those tools before reporting an issue. Please include all relevant output when reporting an issue.

### `M-x magit-version`

This command shows the currently used versions of Magit, Git, and Emacs in the echo area. Non-interactively this just returns the Magit version.

### `M-x magit-emacs-Q-command`

This command shows a debugging shell command in the echo area and adds it to the kill ring. Paste that command into a shell and run it.

This shell command starts `emacs` with only `magit` and its dependencies loaded. Neither your configuration nor other installed packages are loaded. This makes it easier to determine whether some issue lays with Magit or something else.

If you run Magit from its Git repository, then you should be able to use `make emacs-Q` instead of the output of this command.

### `M-x magit-toggle-git-debug`

This command toggles whether additional git errors are reported.

Magit basically calls git for one of these two reasons: for side-effects or to do something with its standard output.

When git is run for side-effects then its output, including error messages, go into the process buffer which is shown when using `$`.

When git's output is consumed in some way, then it would be too expensive to also insert it into this buffer, but with this command that can be enabled temporarily. In that case, if git returns with a non-zero exit status, then at least its standard error is inserted into this buffer.

Also note that just because git exits with a non-zero status and prints an error message, that usually doesn't mean that it is an error as far as Magit is concerned, which is another reason we usually hide these error messages. Whether some error message is relevant in the context of some unexpected behavior has to be judged on a case by case basis.

### `M-x magit-toggle-verbose-refresh`

This command toggles whether Magit refreshes buffers verbosely. Enabling this helps figuring out which sections are bottlenecks. The additional output can be found in the `*Messages*` buffer.

### `M-x magit-toggle-subprocess-record`

This command toggles whether subprocess invocations are recorded.

When enabled, all subprocesses started by `magit-process-file` are logged into the buffer specified by `magit-process-record-buffer-name` using the format `magit-process-record-entry-format`. This is for debugging purposes.

This is in addition to and distinct from the default logging done by default, and additional logging enabled with `magit-toggle-git-debug`.

### `M-x magit-debug-git-executable`

This command displays a buffer containing information about the available and used `git` executable(s), and can be useful when investigating `exec-path` issues.

Also see [Git Executable](/docs/magit/Git-Executable).

### `M-x magit-profile-refresh-buffer`

This command profiles refreshing the current Magit buffer and then displays the results.

### `M-x magit-toggle-profiling`

This command starts profiling Magit and Forge, or if profiling is already in progress, it instead stops that and displays the results.

### `M-x with-editor-debug`

This command displays a buffer containing information about the available and used `emacsclient` executable(s), and can be useful when investigating why Magit (or rather `with-editor`) cannot find an appropriate `emacsclient` executable.

Also see [(with-editor)Debugging](https://docs.magit.vc/with-editor/Debugging.html#Debugging).

Please also see [FAQ](/docs/magit/FAQ).
