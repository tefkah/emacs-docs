---
slug: Introduction
---

Org is a mode for keeping notes, maintaining TODO lists, and doing
project planning with a fast and effective plain-text system.  It is
also an authoring and publishing system, and it supports working with
source code for literate programming and reproducible research.


This document is a much compressed derivative of the [comprehensive Org
mode manual](https://www.gnu.org/software/emacs/manual/html_mono/org.html#Top).  It contains all basic features and commands, along with
important hints for customization.  It is intended for beginners who
would shy back from a 200 pages manual because of sheer size.


### Installation


> **Important:** If you are using a version of Org that is part of the Emacs
> distribution, please skip this section and go directly to [Activation](/docs/emacs/Activation).


If you have downloaded Org from the web, either as a distribution
'`.zip`' or '`.tar`' file, or as a Git archive, it is best to run it
directly from the distribution directory.  You need to add the '`lisp/`'
subdirectories to the Emacs load path.  To do this, add the following
line to your Emacs init file:


```
(add-to-list 'load-path "~/path/to/orgdir/lisp")
```


If you have been using git or a tar ball to get Org, you need to run
the following command to generate autoload information.


```
make autoloads
```


### Activation


Add the following lines to your Emacs init file to define *global*
keys for three commands that are useful in any Emacs buffer, not just
Org buffers.  Please choose suitable keys yourself.


```lisp
(global-set-key (kbd "C-c l") #'org-store-link)
(global-set-key (kbd "C-c a") #'org-agenda)
(global-set-key (kbd "C-c c") #'org-capture)
```


Files with extension '`.org`' will be put into Org mode automatically.


### Feedback


If you find problems with Org, or if you have questions, remarks, or
ideas about it, please mail to the Org mailing list
[mailto:emacs-orgmode@gnu.org](mailto:mailto:emacs-orgmode@gnu.org).  For information on how to submit bug
reports, see the [main manual](https://www.gnu.org/software/emacs/manual/html_mono/org.html#Top).
