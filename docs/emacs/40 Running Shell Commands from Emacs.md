---
slug: Shell
---

Emacs has commands for passing single command lines to shell subprocesses, and for running a shell interactively with input and output to an Emacs buffer, and for running a shell in a terminal emulator window.

### `M-! cmd RET`

Run the shell command *cmd* and display the output (`shell-command`).

### `M-| cmd RET`

Run the shell command *cmd* with region contents as input; optionally replace the region with the output (`shell-command-on-region`).

### `M-& cmd RET`

Run the shell command *cmd* asynchronously, and display the output (`async-shell-command`).

### `M-x shell`

Run a subshell with input and output through an Emacs buffer. You can then give commands interactively.

### `M-x term`

Run a subshell with input and output through an Emacs buffer. You can then give commands interactively. Full terminal emulation is available.

Whenever you specify a relative file name for an executable program (either in the *cmd* argument to one of the above commands, or in other contexts), Emacs searches for the program in the directories specified by the variable `exec-path`. The value of this variable must be a list of directories; the default value is initialized from the environment variable `PATH` when Emacs is started (see [General Variables](/docs/emacs/General-Variables)).

`M-x eshell` invokes a shell implemented entirely in Emacs. It is documented in its own manual. See [Eshell](https://www.gnu.org/software/emacs/manual/html_mono/eshell.html#Top) in Eshell: The Emacs Shell.
