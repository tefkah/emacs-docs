---
slug: From-Carsten-1
---

Org was born in 2003, out of frustration over the user interface of the Emacs Outline mode. I was trying to organize my notes and projects, and using Emacs seemed to be the natural way to go. However, having to remember eleven different commands with two or three keys per command, only to hide and show parts of the outline tree, that seemed entirely unacceptable to me. Also, when using outlines to take notes, I constantly wanted to restructure the tree, organizing it parallel to my thoughts and plans. *Visibility cycling* and *structure editing* were originally implemented in the package ‘`outline-magic.el`’, but quickly moved to the more general ‘`org.el`’. As this environment became comfortable for project planning, the next step was adding *TODO entries*, basic *timestamps*, and *table support*. These areas highlighted the two main goals that Org still has today: to be a new, outline-based, plain text mode with innovative and intuitive editing features, and to incorporate project planning functionality directly into a notes file.

Since the first release, literally thousands of emails to me or to the [mailing list](mailto:mailto:emacs-orgmode@gnu.org) have provided a constant stream of bug reports, feedback, new ideas, and sometimes patches and add-on code. Many thanks to everyone who has helped to improve this package. I am trying to keep here a list of the people who had significant influence in shaping one or more aspects of Org. The list may not be complete, if I have forgotten someone, please accept my apologies and let me know.

Before I get to this list, a few special mentions are in order:

### Bastien Guerry

Bastien has written a large number of extensions to Org (most of them integrated into the core by now), including the LaTeX exporter and the plain list parser. His support during the early days was central to the success of this project. Bastien also invented Worg, helped establishing the Web presence of Org, and sponsored hosting costs for the orgmode.org website. Bastien stepped in as maintainer of Org between 2011 and 2013, at a time when I desperately needed a break.

### Eric Schulte and Dan Davison

Eric and Dan are jointly responsible for the Org Babel system, which turns Org into a multi-language environment for evaluating code and doing literate programming and reproducible research. This has become one of Org’s killer features that define what Org is today.

### John Wiegley

John has contributed a number of great ideas and patches directly to Org, including the attachment system (‘`org-attach.el`’), integration with Apple Mail (‘`org-mac-message.el`’), hierarchical dependencies of TODO items, habit tracking (‘`org-habits.el`’), and encryption (‘`org-crypt.el`’). Also, the capture system is really an extended copy of his great ‘`remember.el`’.

### Sebastian Rose

Without Sebastian, the HTML/XHTML publishing of Org would be the pitiful work of an ignorant amateur. Sebastian has pushed this part of Org onto a much higher level. He also wrote ‘`org-info.js`’, a JavaScript program for displaying webpages derived from Org using an Info-like or a folding interface with single-key navigation.

See below for the full list of contributions! Again, please let me know what I am missing here!
