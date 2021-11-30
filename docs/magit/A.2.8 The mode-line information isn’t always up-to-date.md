---
slug: The-mode_002dline-information-isn_0027t-always-up_002dto_002ddate
---

Magit is not responsible for the version control information that is being displayed in the mode-line and looks something like `Git-master`. The built-in "Version Control" package, also known as "VC", updates that information, and can be told to do so more often:

```lisp
(setq auto-revert-check-vc-info t)
```

But doing so isn’t good for performance. For more (overly optimistic) information see [(emacs)VC Mode Line](https://www.gnu.org/software/emacs/manual/html_mono/emacs.html#VC-Mode-Line).

If you don’t really care about seeing this information in the mode-line, but just don’t want to see *incorrect* information, then consider simply not displaying it in the mode-line:

```lisp
(setq-default mode-line-format
              (delete '(vc-mode vc-mode) mode-line-format))
```
