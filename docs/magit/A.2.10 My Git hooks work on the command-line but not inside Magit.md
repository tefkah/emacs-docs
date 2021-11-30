---
slug: My-Git-hooks-work-on-the-command_002dline-but-not-inside-Magit
---

When Magit calls `git` it adds a few global arguments including `--literal-pathspecs` and the `git` process started by Magit then passes that setting on to other `git` process it starts itself. It does so by setting the environment variable `GIT_LITERAL_PATHSPECS`, not by calling subprocesses with the `--literal-pathspecs` argument. You can therefore override this setting in hook scripts using `unset GIT_LITERAL_PATHSPECS`.
