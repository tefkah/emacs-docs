---
slug: I-am-using-OS-X-and-SOMETHING-works-in-shell-but-not-in-Magit
---

This usually occurs because Emacs doesn’t have the same environment variables as your shell. Try installing and configuring [https://github.com/purcell/exec-path-from-shell](https://github.com/purcell/exec-path-from-shell). By default it synchronizes `$PATH`, which helps Magit find the same `git` as the one you are using on the shell.

If SOMETHING is "passphrase caching with gpg-agent for commit and/or tag signing", then you’ll also need to synchronize `$GPG_AGENT_INFO`.
