---
slug: How-to-show-diffs-for-gpg_002dencrypted-files_003f
---

Git supports showing diffs for encrypted files, but has to be told to do so. Since Magit just uses Git to get the diffs, configuring Git also affects the diffs displayed inside Magit.

```lisp
git config --global diff.gpg.textconv "gpg --no-tty --decrypt"
echo "*.gpg filter=gpg diff=gpg" > .gitattributes
```
