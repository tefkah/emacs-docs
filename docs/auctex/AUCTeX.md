---
slug: Top
---

This manual is for AUCTeX (version 12.3 from 2020-10-10), a sophisticated TeX environment for Emacs.

Copyright © 1992-1995, 2001, 2002, 2004-2020 Free Software Foundation, Inc.

> Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts and no Back-Cover Texts. A copy of the license is included in the section entitled “GNU Free Documentation License."

AUCTeX is an integrated environment for editing LaTeX, ConTeXt, docTeX, Texinfo, and TeX files.

Although AUCTeX contains a large number of features, there are no reasons to despair. You can continue to write TeX and LaTeX documents the way you are used to, and only start using the multiple features in small steps. AUCTeX is not monolithic, each feature described in this manual is useful by itself, but together they provide an environment where you will make very few LaTeX errors, and makes it easy to find the errors that may slip through anyway.

It is a good idea to make a printout of AUCTeX’s reference card ‘`tex-ref.tex`’ or one of its typeset versions.

If you want to make AUCTeX aware of style files and multi-file documents right away, insert the following in your ‘`.emacs`’ file.

```lisp
(setq TeX-auto-save t) (setq TeX-parse-self t) (setq-default TeX-master nil)
```

Another thing you should enable is RefTeX, a comprehensive solution for managing cross references, bibliographies, indices, document navigation and a few other things. (see [(reftex)Installation](https://www.gnu.org/software/auctex/manual/reftex.html#Installation) section ‘Installation’ in The RefTeX manual)

For detailed information about the preview-latex subsystem of AUCTeX, see [(preview-latex)Top](/docs/auctex/Top) section ‘Introduction’ in The preview-latex Manual.

There is a mailing list for general discussion about AUCTeX: write a mail with “subscribe" in the subject to [auctex-request@gnu.org](/docs/auctex/mailto:auctex-request@gnu.org) to join it. Send contributions to [auctex@gnu.org](/docs/auctex/mailto:auctex@gnu.org).

Bug reports should go to [bug-auctex@gnu.org](/docs/auctex/mailto:bug-auctex@gnu.org), suggestions for new features, and pleas for help should go to either [auctex-devel@gnu.org](/docs/auctex/mailto:auctex-devel@gnu.org) (the AUCTeX developers), or to [auctex@gnu.org](/docs/auctex/mailto:auctex@gnu.org) if they might have general interest. Please use the command `M-x TeX-submit-bug-report RET` to report bugs if possible. You can subscribe to a low-volume announcement list by sending “subscribe" in the subject of a mail to [info-auctex-request@gnu.org](/docs/auctex/mailto:info-auctex-request@gnu.org).

|                                               |     |                                                  |
| :-------------------------------------------- | --- | :----------------------------------------------- |
| [• Copying](/docs/auctex/Copying)             |     |                                                  |
| [• Introduction](/docs/auctex/Introduction)   |     | Introduction to AUCTeX                           |
| [• Editing](/docs/auctex/Editing)             |     | Editing the Document Source                      |
| [• Display](/docs/auctex/Display)             |     | Controlling Screen Display                       |
| [• Processing](/docs/auctex/Processing)       |     | Starting Processors, Viewers and Other Programs  |
| [• Customization](/docs/auctex/Customization) |     | Customization and Extension                      |
| [• Appendices](/docs/auctex/Appendices)       |     | Copying, Changes, Development, FAQ, Texinfo mode |
| [• Indices](/docs/auctex/Indices)             |     |                                                  |

| ```lisp
— The Detailed Node Listing — Introduction

````| |                                                            |
| [• Summary](/docs/auctex/Summary)                                               |    | Overview of AUCTeX                                         |
| [• Installation](/docs/auctex/Installation)                                     |    | Installing AUCTeX                                          |
| [• Quick Start](/docs/auctex/Quick-Start)                                       |    |                                                            |
| ```lisp
Editing the Document Source
```                                       |    |                                                            |
| [• Quotes](/docs/auctex/Quotes)                                                 |    | Inserting double quotes                                    |
| [• Font Specifiers](/docs/auctex/Font-Specifiers)                               |    | Inserting Font Specifiers                                  |
| [• Sectioning](/docs/auctex/Sectioning)                                         |    | Inserting chapters, sections, etc.                         |
| [• Environments](/docs/auctex/Environments)                                     |    | Inserting Environment Templates                            |
| [• Mathematics](/docs/auctex/Mathematics)                                       |    | Entering Mathematics                                       |
| [• Completion](/docs/auctex/Completion)                                         |    | Completion of macros                                       |
| [• Commenting](/docs/auctex/Commenting)                                         |    | Commenting text                                            |
| [• Indenting](/docs/auctex/Indenting)                                           |    | Reflecting syntactic constructs with whitespace            |
| [• Filling](/docs/auctex/Filling)                                               |    | Automatic and manual line breaking                         |
| ```lisp
Inserting Environment Templates
```                                   |    |                                                            |
| [• Equations](/docs/auctex/Equations)                                           |    |                                                            |
| [• Floats](/docs/auctex/Floats)                                                 |    |                                                            |
| [• Itemize-like](/docs/auctex/Itemize_002dlike)                                 |    | Itemize-like Environments                                  |
| [• Tabular-like](/docs/auctex/Tabular_002dlike)                                 |    | Tabular-like Environments                                  |
| [• Customizing Environments](/docs/auctex/Customizing-Environments)             |    |                                                            |
| ```lisp
Controlling Screen Display
```                                        |    |                                                            |
| [• Font Locking](/docs/auctex/Font-Locking)                                     |    |                                                            |
| [• Folding](/docs/auctex/Folding)                                               |    | Folding Macros and Environments                            |
| [• Outline](/docs/auctex/Outline)                                               |    | Outlining the Document                                     |
| [• Narrowing](/docs/auctex/Narrowing)                                           |    | Restricting display and editing to a portion of the buffer |
| [• Prettifying](/docs/auctex/Prettifying)                                       |    | Displaying Greek and math macros as Unicode characters     |
| ```lisp
Font Locking
```                                                      |    |                                                            |
| [• Fontification of macros](/docs/auctex/Fontification-of-macros)               |    |                                                            |
| [• Fontification of quotes](/docs/auctex/Fontification-of-quotes)               |    |                                                            |
| [• Fontification of math](/docs/auctex/Fontification-of-math)                   |    | Fontification of math constructs                           |
| [• Verbatim content](/docs/auctex/Verbatim-content)                             |    | Verbatim macros and environments                           |
| [• Faces](/docs/auctex/Faces)                                                   |    | Faces used by font-latex                                   |
| [• Known problems](/docs/auctex/Known-problems)                                 |    | Known fontification problems                               |
| ```lisp
Starting Processors, Viewers and Other Programs
```                   |    |                                                            |
| [• Commands](/docs/auctex/Commands)                                             |    | Invoking external commands.                                |
| [• Viewing](/docs/auctex/Viewing)                                               |    | Invoking external viewers.                                 |
| [• Debugging](/docs/auctex/Debugging)                                           |    | Debugging TeX and LaTeX output.                            |
| [• Checking](/docs/auctex/Checking)                                             |    | Checking the document.                                     |
| [• Control](/docs/auctex/Control)                                               |    | Controlling the processes.                                 |
| [• Cleaning](/docs/auctex/Cleaning)                                             |    | Cleaning intermediate and output files.                    |
| [• Documentation](/docs/auctex/Documentation)                                   |    | Documentation about macros and packages.                   |
| ```lisp
Viewing the Formatted Output
```                                      |    |                                                            |
| [• Starting Viewers](/docs/auctex/Starting-Viewers)                             |    | Starting viewers                                           |
| [• I/O Correlation](/docs/auctex/I_002fO-Correlation)                           |    | Forward and inverse search                                 |
| ```lisp
Catching the errors
```                                               |    |                                                            |
| [• Ignoring warnings](/docs/auctex/Ignoring-warnings)                           |    | Controlling warnings to be reported                        |
| [• Error overview](/docs/auctex/Error-overview)                                 |    | List of all errors and warnings                            |
| ```lisp
Customization and Extension
```                                       |    |                                                            |
| [• Multifile](/docs/auctex/Multifile)                                           |    | Multifile Documents                                        |
| [• Parsing Files](/docs/auctex/Parsing-Files)                                   |    | Automatic Parsing of TeX Files                             |
| [• Internationalization](/docs/auctex/Internationalization)                     |    | Language Support                                           |
| [• Automatic](/docs/auctex/Automatic)                                           |    | Automatic Customization                                    |
| [• Style Files](/docs/auctex/Style-Files)                                       |    | Writing Your Own Style Support                             |
| ```lisp
Language Support
```                                                  |    |                                                            |
| [• European](/docs/auctex/European)                                             |    | Using AUCTeX with European Languages                       |
| [• Japanese](/docs/auctex/Japanese)                                             |    | Using AUCTeX with Japanese                                 |
| ```lisp
Automatic Customization
```                                           |    |                                                            |
| [• Automatic Global](/docs/auctex/Automatic-Global)                             |    | Automatic Customization for the Site                       |
| [• Automatic Private](/docs/auctex/Automatic-Private)                           |    | Automatic Customization for a User                         |
| [• Automatic Local](/docs/auctex/Automatic-Local)                               |    | Automatic Customization for a Directory                    |
| ```lisp
Writing Your Own Style Support
```                                    |    |                                                            |
| [• Simple Style](/docs/auctex/Simple-Style)                                     |    | A Simple Style File                                        |
| [• Adding Macros](/docs/auctex/Adding-Macros)                                   |    | Adding Support for Macros                                  |
| [• Adding Environments](/docs/auctex/Adding-Environments)                       |    | Adding Support for Environments                            |
| [• Adding Other](/docs/auctex/Adding-Other)                                     |    | Adding Other Information                                   |
| [• Hacking the Parser](/docs/auctex/Hacking-the-Parser)                         |    | Automatic Extraction of New Things                         |
| ```lisp
Copying, Changes, Development, FAQ
```                                |    |                                                            |
| [• Copying this Manual](/docs/auctex/Copying-this-Manual)                       |    |                                                            |
| [• Changes](/docs/auctex/Changes)                                               |    |                                                            |
| [• Development](/docs/auctex/Development)                                       |    |                                                            |
| [• FAQ](/docs/auctex/FAQ)                                                       |    |                                                            |
| [• Texinfo mode](/docs/auctex/Texinfo-mode)                                     |    |                                                            |
| ```lisp
Copying this Manual
```                                               |    |                                                            |
| [• GNU Free Documentation License](/docs/auctex/GNU-Free-Documentation-License) |    | License for copying this manual.                           |
| ```lisp
Indices
```                                                           |    |                                                            |
| [• Key Index](/docs/auctex/Key-Index)                                           |    |                                                            |
| [• Function Index](/docs/auctex/Function-Index)                                 |    |                                                            |
| [• Variable Index](/docs/auctex/Variable-Index)                                 |    |                                                            |
| [• Concept Index](/docs/auctex/Concept-Index)                                   |    |                                                            |
|                                                                                 |    |                                                            |
````
