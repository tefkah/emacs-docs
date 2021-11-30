---
slug: Expanding-a-file-to-show-the-diff-causes-it-to-disappear
---

This is probably caused by a change of a `diff.*` Git variable. You probably set that variable for a reason, and should therefore only undo that setting in Magit by customizing `magit-git-global-arguments`.
