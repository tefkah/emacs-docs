---
slug: How-to-install-the-gitman-info-manual_003f
---

Git’s manpages can be exported as an info manual called `gitman`. Magit’s own info manual links to nodes in that manual instead of the actual manpages because Info doesn’t support linking to manpages.

Unfortunately some distributions do not install the `gitman` manual by default and you will have to install a separate documentation package to get it.

Magit patches Info adding the ability to visit links to the `gitman` Info manual by instead viewing the respective manpage. If you prefer that approach, then set the value of `magit-view-git-manual-method` to one of the supported packages `man` or `woman`, e.g.:

```lisp
(setq magit-view-git-manual-method 'man)
```
