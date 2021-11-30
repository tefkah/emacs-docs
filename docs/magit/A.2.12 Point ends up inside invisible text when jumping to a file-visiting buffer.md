---
slug: Point-ends-up-inside-invisible-text-when-jumping-to-a-file_002dvisiting-buffer
---

This can happen when you type `RET` on a hunk to visit the respective file at the respective position. One solution to this problem is to use `global-reveal-mode`. It makes sure that text around point is always visible. If that is too drastic for your taste, then you may instead use `magit-diff-visit-file-hook` to reveal the text, possibly using `reveal-post-command` or for Org buffers `org-reveal`.
