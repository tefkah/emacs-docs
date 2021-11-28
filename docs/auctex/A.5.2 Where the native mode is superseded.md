---
slug: Superseding
---

This section is directed to users of the native Texinfo mode switching to AUCTeX. It follows the summary of the native mode (see [(texinfo)Texinfo Mode Summary](/docs/auctex/Texinfo-Mode-Summary)) and lists which of its commands are no longer of use.

### Insert commands

In the native Texinfo mode, frequently used Texinfo commands can be inserted with key bindings of the form `C-c C-c k` where `k` differs for each Texinfo command; `c` inserts @code, `d` inserts @dfn, `k` @kbd, etc.

In AUCTeX commands are inserted with the key binding `C-c C-m` instead which prompts for the macro to be inserted. For font selection commands (like @b, @i, or @emph) and a few related ones (like @var, @key or @code) there are bindings which insert the respective macros directly. They have the form `C-c C-f k` or `C-c C-f C-k` and call the function `TeX-font`. Type `C-c C-f <RET>` to get a list of supported commands.

Note that the prefix argument is not handled the same way by AUCTeX. Note also that the node insertion command from the native mode (`texinfo-insert-@node`) can still accessed from the Texinfo menu in AUCTeX.

### Insert braces

In AUCTeX braces can be inserted with the same key binding as in the native Texinfo mode: `C-c {`. But AUCTeX uses its own function for the feature: `TeX-insert-braces`.

### Insert environments

The native Texinfo mode does not insert full environments. Instead, it provides the function `texinfo-insert-@end` (mapped to `C-c C-c e`) for closing an open environment with a matching @end statement.

In AUCTeX you can insert full environments, i.e. both the opening and closing statements, with the function `Texinfo-environment` (mapped to `C-c C-e`).

### Format info files with makeinfo and TeX

In the native Texinfo mode there are various functions and bindings to format a region or the whole buffer for info or to typeset the respective text. For example, there is `makeinfo-buffer` (mapped to `C-c C-m C-b`) which runs ‘`makeinfo`’ on the buffer or there is `texinfo-tex-buffer` (mapped to `C-c C-t C-b`) which runs TeX on the buffer in order to produce a DVI file.

In AUCTeX different commands for formatting or typesetting can be invoked through the function `TeX-command-master` (mapped to `C-c C-c`). After typing `C-c C-c`, you can select the desired command, e.g ‘`Makeinfo`’ or ‘`TeX`’, through a prompt in the mini buffer. Note that you can make, say ‘`Makeinfo`’, the default by adding this statement in your init file:

```lisp
(add-hook 'Texinfo-mode-hook            (lambda () (setq TeX-command-default "Makeinfo"))) 
```

Note also that `C-c C-c Makeinfo <RET>` is not completely functionally equivalent to `makeinfo-buffer` as the latter will display the resulting info file in Emacs, showing the node corresponding to the position in the source file, just after a successful compilation. This is why, while using AUCTeX, invoking `makeinfo-buffer` might still be more convenient.

Note also that in the case of a multifile document, `C-c C-c` in AUCTeX will work on the whole document (provided that the file variable `TeX-master` is set correctly), while `makeinfo-buffer` in the native mode will process only the current buffer, provided at the `@setfilename` statement is provided.

### Produce indexes and print

The native Texinfo mode provides the binding `C-c C-t C-i` (`texinfo-texindex`) for producing an index and the bindings `C-c C-t C-p` (`texinfo-tex-print`) and `C-c C-t C-q` (`tex-show-print-queue`) for printing and showing the printer queue. These are superseded by the respective commands available through `C-c C-c` (`TeX-command-master`) in AUCTeX: Index, Print, and Queue.

### Kill jobs

The command `C-c C-t C-k` (`tex-kill-job`) in the native mode is superseded by `C-c C-k` (`TeX-kill-job`) in AUCTeX.
