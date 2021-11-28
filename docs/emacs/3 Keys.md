---
slug: Keys
---

Some Emacs commands are invoked by just one input event; for example, `C-f` moves forward one character in the buffer. Other commands take two or more input events to invoke, such as `C-x C-f` and `C-x 4 C-f`.

A *key sequence*, or *key* for short, is a sequence of one or more input events that is meaningful as a unit. If a key sequence invokes a command, we call it a *complete key*; for example, `C-f`, `C-x C-f` and `C-x 4 C-f` are all complete keys. If a key sequence isn’t long enough to invoke a command, we call it a *prefix key*; from the preceding example, we see that `C-x` and `C-x 4` are prefix keys. Every key sequence is either a complete key or a prefix key.

A prefix key combines with the following input event to make a longer key sequence. For example, `C-x` is a prefix key, so typing `C-x` alone does not invoke a command; instead, Emacs waits for further input (if you pause for longer than a second, it echoes the `C-x` key to prompt for that input; see [Echo Area](/docs/emacs/Echo-Area)). `C-x` combines with the next input event to make a two-event key sequence, which could itself be a prefix key (such as `C-x 4`), or a complete key (such as `C-x C-f`). There is no limit to the length of key sequences, but in practice they are seldom longer than three or four input events.

You can’t add input events onto a complete key. For example, because `C-f` is a complete key, the two-event sequence `C-f C-k` is two key sequences, not one.

By default, the prefix keys in Emacs are `C-c`, `C-h`, `C-x`, `C-x RET`, `C-x @`, `C-x a`, `C-x n`, `C-x r`, `C-x t`, `C-x v`, `C-x 4`, `C-x 5`, `C-x 6`, `ESC`, `M-g`, and `M-o`. (`F1` and `F2` are aliases for `C-h` and `C-x 6`.) This list is not cast in stone; if you customize Emacs, you can make new prefix keys. You could even eliminate some of the standard ones, though this is not recommended for most users; for example, if you remove the prefix definition of `C-x 4`, then `C-x 4 C-f` becomes an invalid key sequence. See [Key Bindings](/docs/emacs/Key-Bindings).

Typing the help character (`C-h` or `F1`) after a prefix key displays a list of the commands starting with that prefix. The sole exception to this rule is `ESC`: `ESC C-h` is equivalent to `C-M-h`, which does something else entirely. You can, however, use `F1` to display a list of commands starting with `ESC`.
