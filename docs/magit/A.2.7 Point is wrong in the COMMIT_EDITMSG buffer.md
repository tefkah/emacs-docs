---
slug: Point-is-wrong-in-the-COMMIT_005fEDITMSG-buffer
---

Neither Magit nor ‘git-commit‘ fiddle with point in the buffer used to write commit messages, so something else must be doing it.

You have probably globally enabled a mode which does restore point in file-visiting buffers. It might be a bit surprising, but when you write a commit message, then you are actually editing a file.

So you have to figure out which package is doing. `saveplace`, `pointback`, and `session` are likely candidates. These snippets might help:

```lisp
(setq session-name-disable-regexp "\\(?:\\`'\\.git/[A-Z_]+\\'\\)")

(with-eval-after-load 'pointback
  (lambda ()
    (when (or git-commit-mode git-rebase-mode)
      (pointback-mode -1))))
```
