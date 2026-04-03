---
slug: Host-Security
---

Emacs runs inside an operating system such as GNU/Linux, and relies on the operating system to check security constraints such as accesses to files. The default settings for Emacs are designed for typical use; they may require some tailoring in environments where security is more of a concern, or less of a concern, than usual. For example, file-local variables can be risky, and you can set the variable `enable-local-variables` to `:safe` or (even more conservatively) to `nil`; conversely, if your files can all be trusted and the default checking for these variables is irritating, you can set `enable-local-variables` to `:all`. See [Safety of File Variables](/docs/emacs/Safe-File-Variables).

Loading a file of Emacs Lisp code with `load-file` or `load-library` (see [Libraries of Lisp Code for Emacs](/docs/emacs/Lisp-Libraries)) can execute some of the Lisp code in the file being loaded, so you should only load Lisp files whose source you trust. However, some Emacs features can in certain situations execute Lisp code even without your explicit command or request. For example, Flymake, the on-the-fly syntax checker for Emacs (see [GNU Flymake](https://www.gnu.org/software/emacs/manual/html_mono/flymake.html#Top)), if it is enabled, can automatically execute some of the code in a Lisp file you visit as part of its syntax-checking job. Similarly, some completion commands (see [Completion](/docs/emacs/Completion)) in buffers visiting Lisp files sometimes need to expand Lisp macros for best results. In these cases, just visiting a Lisp file and performing some editing in it could trigger execution of Lisp code. If the visited file came from an untrusted source, it could include dangerous or even malicious code that Emacs would execute in those situations.

To protect against this, Emacs disables execution of Lisp code by Flymake, completion, and some other features, unless the visited file is *trusted*. It is up to you to specify which files on your system should be trusted, by customizing the user option `trusted-content`.

### User Option: **trusted-content**

The value of this option is `nil` by default, which means no file is trusted. You can customize the variable to be a list of one or more names of trusted files and directories. A file name that ends in a slash `/` is interpreted as a directory, which means all its files and subdirectories are also trusted. A special value `:all` means *all* the files and directories on your system should be trusted; **this is not recommended**, as it opens a gaping security hole.

See [Security Considerations](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Security-Considerations) in The Emacs Lisp Reference Manual, for more information about security considerations when using Emacs as part of a larger application.
