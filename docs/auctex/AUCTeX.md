---
slug: AUCTeX
---

This manual is for AUCTeX (version 14.1.2 from 2026-01-14\_16:20:49), a sophisticated TeX environment for Emacs.

Copyright © 1992-1995, 2001, 2002, 2004-2024 Free Software Foundation, Inc.

> Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts and no Back-Cover Texts. A copy of the license is included in the section entitled "GNU Free Documentation License."

AUCTeX is an integrated environment for editing LaTeX, ConTeXt, docTeX, Texinfo, and TeX files.

Although AUCTeX contains a large number of features, there are no reasons to despair. You can continue to write TeX and LaTeX documents the way you are used to, and only start using the multiple features in small steps. AUCTeX is not monolithic, each feature described in this manual is useful by itself, but together they provide an environment where you will make very few LaTeX errors, and makes it easy to find the errors that may slip through anyway.

It is a good idea to make a printout of AUCTeX's reference card `tex-ref.tex` or one of its typeset versions.

If you want to make AUCTeX aware of style files and multifile documents right away, insert the following in your init file (usually `~/.emacs.d/init.el`).

```lisp
(setq TeX-auto-save t)
(setq TeX-parse-self t)
(setq-default TeX-master nil)

```

Another thing you should enable is RefTeX, a comprehensive solution for managing cross references, bibliographies, indices, document navigation and a few other things. (See [Installation](https://www.gnu.org/software/emacs/manual/html_mono/reftex.html#Installation) in The RefTeX manual.)

For detailed information about the preview-latex subsystem of AUCTeX, see [Introduction](/docs/auctex/preview-latex#Top) in The preview-latex Manual.

There is a mailing list for general discussion about AUCTeX: write a mail with "subscribe" in the subject to <auctex-request@gnu.org> to join it. Send contributions to <auctex@gnu.org>.

Bug reports should go to <bug-auctex@gnu.org>, suggestions for new features, and pleas for help should go to either <auctex-devel@gnu.org> (the AUCTeX developers), or to <auctex@gnu.org> if they might have general interest. Please use the command `M-x TeX-submit-bug-report RET` to report bugs if possible. You can subscribe to a low-volume announcement list by sending "subscribe" in the subject of a mail to <info-auctex-request@gnu.org>.
