---
slug: Exiting
---

### `C-x C-c`

Kill Emacs (`save-buffers-kill-terminal`).

### `C-z`

On a text terminal, suspend Emacs; on a graphical display, iconify (or “minimize") the selected frame (`suspend-frame`).

*Killing* Emacs means terminating the Emacs program. To do this, type `C-x C-c` (`save-buffers-kill-terminal`). A two-character key sequence is used to make it harder to type by accident. If there are any modified file-visiting buffers when you type `C-x C-c`, Emacs first offers to save these buffers. If you do not save them all, it asks for confirmation again, since the unsaved changes will be lost. Emacs also asks for confirmation if any subprocesses are still running, since killing Emacs will also kill the subprocesses (see [Shell](/docs/emacs/Shell)).

`C-x C-c` behaves specially if you are using Emacs as a server. If you type it from a client frame, it closes the client connection. See [Emacs Server](/docs/emacs/Emacs-Server).

Emacs can, optionally, record certain session information when you kill it, such as the files you were visiting at the time. This information is then available the next time you start Emacs. See [Saving Emacs Sessions](/docs/emacs/Saving-Emacs-Sessions).

If the value of the variable `confirm-kill-emacs` is non-`nil`, `C-x C-c` assumes that its value is a predicate function, and calls that function. If the result of the function call is non-`nil`, the session is killed, otherwise Emacs continues to run. One convenient function to use as the value of `confirm-kill-emacs` is the function `yes-or-no-p`. The default value of `confirm-kill-emacs` is `nil`.

If the value of the variable `confirm-kill-processes` is `nil`, `C-x C-c` does not ask for confirmation before killing subprocesses started by Emacs. The value is `t` by default.

To further customize what happens when Emacs is exiting, see [Killing Emacs](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Killing-Emacs) in The GNU Emacs Lisp Reference Manual.

To kill Emacs without being prompted about saving, type `M-x kill-emacs`.

`C-z` runs the command `suspend-frame`. On a graphical display, this command *minimizes* (or *iconifies*) the selected Emacs frame, hiding it in a way that lets you bring it back later (exactly how this hiding occurs depends on the window system). On a text terminal, the `C-z` command *suspends* Emacs, stopping the program temporarily and returning control to the parent process (usually a shell); in most shells, you can resume Emacs after suspending it with the shell command `%emacs`.

Text terminals usually listen for certain special characters whose meaning is to kill or suspend the program you are running. **This terminal feature is turned off while you are in Emacs.** The meanings of `C-z` and `C-x C-c` as keys in Emacs were inspired by the use of `C-z` and `C-c` on several operating systems as the characters for stopping or killing a program, but that is their only relationship with the operating system. You can customize these keys to run any commands of your choice (see [Keymaps](/docs/emacs/Keymaps)).
