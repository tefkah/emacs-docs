---
slug: How-to-show-git_0027s-output_003f
---

To show the output of recently run git commands, press `$` (or, if that isn’t available, `M-x magit-process-buffer`). This will show a buffer containing a section per git invocation; as always press `TAB` to expand or collapse them.

By default, git’s output is only inserted into the process buffer if it is run for side-effects. When the output is consumed in some way, also inserting it into the process buffer would be too expensive. For debugging purposes, it’s possible to do so anyway by setting `magit-git-debug` to `t`.
