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

For detailed information about the preview-latex subsystem of AUCTeX, see [(preview-latex)Top](Top) section ‘Introduction’ in The preview-latex Manual.

There is a mailing list for general discussion about AUCTeX: write a mail with “subscribe" in the subject to [auctex-request@gnu.org](mailto:auctex-request@gnu.org) to join it. Send contributions to [auctex@gnu.org](mailto:auctex@gnu.org).

Bug reports should go to [bug-auctex@gnu.org](mailto:bug-auctex@gnu.org), suggestions for new features, and pleas for help should go to either [auctex-devel@gnu.org](mailto:auctex-devel@gnu.org) (the AUCTeX developers), or to [auctex@gnu.org](mailto:auctex@gnu.org) if they might have general interest. Please use the command `M-x TeX-submit-bug-report RET` to report bugs if possible. You can subscribe to a low-volume announcement list by sending “subscribe" in the subject of a mail to [info-auctex-request@gnu.org](mailto:info-auctex-request@gnu.org).

|                                                                    |    |                                                            |
| :----------------------------------------------------------------- | -- | :--------------------------------------------------------- |
| [• Copying](Copying)                                               |    |                                                            |
| [• Introduction](Introduction)                                     |    | Introduction to AUCTeX                                     |
| [• Editing](Editing)                                               |    | Editing the Document Source                                |
| [• Display](Display)                                               |    | Controlling Screen Display                                 |
| [• Processing](Processing)                                         |    | Starting Processors, Viewers and Other Programs            |
| [• Customization](Customization)                                   |    | Customization and Extension                                |
| [• Appendices](Appendices)                                         |    | Copying, Changes, Development, FAQ, Texinfo mode           |
| [• Indices](Indices)                                               |    |                                                            |
| ```lisp
 — The Detailed Node Listing —  Introduction  
```         |    |                                                            |
| [• Summary](Summary)                                               |    | Overview of AUCTeX                                         |
| [• Installation](Installation)                                     |    | Installing AUCTeX                                          |
| [• Quick Start](Quick-Start)                                       |    |                                                            |
| ```lisp
Editing the Document Source  
```                          |    |                                                            |
| [• Quotes](Quotes)                                                 |    | Inserting double quotes                                    |
| [• Font Specifiers](Font-Specifiers)                               |    | Inserting Font Specifiers                                  |
| [• Sectioning](Sectioning)                                         |    | Inserting chapters, sections, etc.                         |
| [• Environments](Environments)                                     |    | Inserting Environment Templates                            |
| [• Mathematics](Mathematics)                                       |    | Entering Mathematics                                       |
| [• Completion](Completion)                                         |    | Completion of macros                                       |
| [• Commenting](Commenting)                                         |    | Commenting text                                            |
| [• Indenting](Indenting)                                           |    | Reflecting syntactic constructs with whitespace            |
| [• Filling](Filling)                                               |    | Automatic and manual line breaking                         |
| ```lisp
Inserting Environment Templates  
```                      |    |                                                            |
| [• Equations](Equations)                                           |    |                                                            |
| [• Floats](Floats)                                                 |    |                                                            |
| [• Itemize-like](Itemize_002dlike)                                 |    | Itemize-like Environments                                  |
| [• Tabular-like](Tabular_002dlike)                                 |    | Tabular-like Environments                                  |
| [• Customizing Environments](Customizing-Environments)             |    |                                                            |
| ```lisp
Controlling Screen Display  
```                           |    |                                                            |
| [• Font Locking](Font-Locking)                                     |    |                                                            |
| [• Folding](Folding)                                               |    | Folding Macros and Environments                            |
| [• Outline](Outline)                                               |    | Outlining the Document                                     |
| [• Narrowing](Narrowing)                                           |    | Restricting display and editing to a portion of the buffer |
| [• Prettifying](Prettifying)                                       |    | Displaying Greek and math macros as Unicode characters     |
| ```lisp
Font Locking  
```                                         |    |                                                            |
| [• Fontification of macros](Fontification-of-macros)               |    |                                                            |
| [• Fontification of quotes](Fontification-of-quotes)               |    |                                                            |
| [• Fontification of math](Fontification-of-math)                   |    | Fontification of math constructs                           |
| [• Verbatim content](Verbatim-content)                             |    | Verbatim macros and environments                           |
| [• Faces](Faces)                                                   |    | Faces used by font-latex                                   |
| [• Known problems](Known-problems)                                 |    | Known fontification problems                               |
| ```lisp
Starting Processors, Viewers and Other Programs  
```      |    |                                                            |
| [• Commands](Commands)                                             |    | Invoking external commands.                                |
| [• Viewing](Viewing)                                               |    | Invoking external viewers.                                 |
| [• Debugging](Debugging)                                           |    | Debugging TeX and LaTeX output.                            |
| [• Checking](Checking)                                             |    | Checking the document.                                     |
| [• Control](Control)                                               |    | Controlling the processes.                                 |
| [• Cleaning](Cleaning)                                             |    | Cleaning intermediate and output files.                    |
| [• Documentation](Documentation)                                   |    | Documentation about macros and packages.                   |
| ```lisp
Viewing the Formatted Output  
```                         |    |                                                            |
| [• Starting Viewers](Starting-Viewers)                             |    | Starting viewers                                           |
| [• I/O Correlation](I_002fO-Correlation)                           |    | Forward and inverse search                                 |
| ```lisp
Catching the errors  
```                                  |    |                                                            |
| [• Ignoring warnings](Ignoring-warnings)                           |    | Controlling warnings to be reported                        |
| [• Error overview](Error-overview)                                 |    | List of all errors and warnings                            |
| ```lisp
Customization and Extension  
```                          |    |                                                            |
| [• Multifile](Multifile)                                           |    | Multifile Documents                                        |
| [• Parsing Files](Parsing-Files)                                   |    | Automatic Parsing of TeX Files                             |
| [• Internationalization](Internationalization)                     |    | Language Support                                           |
| [• Automatic](Automatic)                                           |    | Automatic Customization                                    |
| [• Style Files](Style-Files)                                       |    | Writing Your Own Style Support                             |
| ```lisp
Language Support  
```                                     |    |                                                            |
| [• European](European)                                             |    | Using AUCTeX with European Languages                       |
| [• Japanese](Japanese)                                             |    | Using AUCTeX with Japanese                                 |
| ```lisp
Automatic Customization  
```                              |    |                                                            |
| [• Automatic Global](Automatic-Global)                             |    | Automatic Customization for the Site                       |
| [• Automatic Private](Automatic-Private)                           |    | Automatic Customization for a User                         |
| [• Automatic Local](Automatic-Local)                               |    | Automatic Customization for a Directory                    |
| ```lisp
Writing Your Own Style Support  
```                       |    |                                                            |
| [• Simple Style](Simple-Style)                                     |    | A Simple Style File                                        |
| [• Adding Macros](Adding-Macros)                                   |    | Adding Support for Macros                                  |
| [• Adding Environments](Adding-Environments)                       |    | Adding Support for Environments                            |
| [• Adding Other](Adding-Other)                                     |    | Adding Other Information                                   |
| [• Hacking the Parser](Hacking-the-Parser)                         |    | Automatic Extraction of New Things                         |
| ```lisp
Copying, Changes, Development, FAQ  
```                   |    |                                                            |
| [• Copying this Manual](Copying-this-Manual)                       |    |                                                            |
| [• Changes](Changes)                                               |    |                                                            |
| [• Development](Development)                                       |    |                                                            |
| [• FAQ](FAQ)                                                       |    |                                                            |
| [• Texinfo mode](Texinfo-mode)                                     |    |                                                            |
| ```lisp
Copying this Manual  
```                                  |    |                                                            |
| [• GNU Free Documentation License](GNU-Free-Documentation-License) |    | License for copying this manual.                           |
| ```lisp
Indices  
```                                              |    |                                                            |
| [• Key Index](Key-Index)                                           |    |                                                            |
| [• Function Index](Function-Index)                                 |    |                                                            |
| [• Variable Index](Variable-Index)                                 |    |                                                            |
| [• Concept Index](Concept-Index)                                   |    |                                                            |
|                                                                    |    |                                                            |
