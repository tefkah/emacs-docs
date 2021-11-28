---
slug: Host-Security
---

Emacs runs inside an operating system such as GNU/Linux, and relies on the operating system to check security constraints such as accesses to files. The default settings for Emacs are designed for typical use; they may require some tailoring in environments where security is more of a concern, or less of a concern, than usual. For example, file-local variables can be risky, and you can set the variable `enable-local-variables` to `:safe` or (even more conservatively) to `nil`; conversely, if your files can all be trusted and the default checking for these variables is irritating, you can set `enable-local-variables` to `:all`. See [Safe File Variables](Safe-File-Variables).

See [Security Considerations](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Security-Considerations) in The Emacs Lisp Reference Manual, for more information about security considerations when using Emacs as part of a larger application.
