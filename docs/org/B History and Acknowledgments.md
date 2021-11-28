---
slug: History-and-Acknowledgments
---

### B.1 From Carsten

Org was born in 2003, out of frustration over the user interface of the Emacs Outline mode. I was trying to organize my notes and projects, and using Emacs seemed to be the natural way to go. However, having to remember eleven different commands with two or three keys per command, only to hide and show parts of the outline tree, that seemed entirely unacceptable to me. Also, when using outlines to take notes, I constantly wanted to restructure the tree, organizing it parallel to my thoughts and plans. *Visibility cycling* and *structure editing* were originally implemented in the package ‘`outline-magic.el`’, but quickly moved to the more general ‘`org.el`’. As this environment became comfortable for project planning, the next step was adding *TODO entries*, basic *timestamps*, and *table support*. These areas highlighted the two main goals that Org still has today: to be a new, outline-based, plain text mode with innovative and intuitive editing features, and to incorporate project planning functionality directly into a notes file.

Since the first release, literally thousands of emails to me or to the [mailing list](/docs/org/mailto:emacs-orgmode@gnu.org) have provided a constant stream of bug reports, feedback, new ideas, and sometimes patches and add-on code. Many thanks to everyone who has helped to improve this package. I am trying to keep here a list of the people who had significant influence in shaping one or more aspects of Org. The list may not be complete, if I have forgotten someone, please accept my apologies and let me know.

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

### B.2 From Bastien

I (Bastien) have been maintaining Org between 2011 and 2013. This appendix would not be complete without adding a few more acknowledgments and thanks.

I am first grateful to Carsten for his trust while handing me over the maintainership of Org. His unremitting support is what really helped me getting more confident over time, with both the community and the code.

When I took over maintainership, I knew I would have to make Org more collaborative than ever, as I would have to rely on people that are more knowledgeable than I am on many parts of the code. Here is a list of the persons I could rely on, they should really be considered co-maintainers, either of the code or the community:

### Eric Schulte

Eric is maintaining the Babel parts of Org. His reactivity here kept me away from worrying about possible bugs here and let me focus on other parts.

### Nicolas Goaziou

Nicolas is maintaining the consistency of the deepest parts of Org. His work on ‘`org-element.el`’ and ‘`ox.el`’ has been outstanding, and it opened the doors for many new ideas and features. He rewrote many of the old exporters to use the new export engine, and helped with documenting this major change. More importantly (if that’s possible), he has been more than reliable during all the work done for Org 8.0, and always very reactive on the mailing list.

### Achim Gratz

Achim rewrote the building process of Org, turning some *ad hoc* tools into a flexible and conceptually clean process. He patiently coped with the many hiccups that such a change can create for users.

### Nick Dokos

The Org mode mailing list would not be such a nice place without Nick, who patiently helped users so many times. It is impossible to overestimate such a great help, and the list would not be so active without him.

I received support from so many users that it is clearly impossible to be fair when shortlisting a few of them, but Org’s history would not be complete if the ones above were not mentioned in this manual.

### B.3 List of Contributions

*   Russell Adams came up with the idea for drawers.
*   Thomas Baumann wrote ‘`ol-bbdb.el`’ and ‘`ol-mhe.el`’.
*   Christophe Bataillon created the great unicorn logo that we use on the Org mode website.
*   Alex Bochannek provided a patch for rounding timestamps.
*   Jan Böcker wrote ‘`ol-docview.el`’.
*   Brad Bozarth showed how to pull RSS feed data into Org files.
*   Tom Breton wrote ‘`org-choose.el`’.
*   Charles Cave’s suggestion sparked the implementation of templates for Remember, which are now templates for capture.
*   Pavel Chalmoviansky influenced the agenda treatment of items with specified time.
*   Gregory Chernov patched support for Lisp forms into table calculations and improved XEmacs compatibility, in particular by porting ‘`nouline.el`’ to XEmacs.
*   Sacha Chua suggested copying some linking code from Planner.
*   Baoqiu Cui contributed the DocBook exporter.
*   Eddward DeVilla proposed and tested checkbox statistics. He also came up with the idea of properties, and that there should be an API for them.
*   Nick Dokos tracked down several nasty bugs.
*   Kees Dullemond used to edit projects lists directly in HTML and so inspired some of the early development, including HTML export. He also asked for a way to narrow wide table columns.
*   Thomas S. Dye contributed documentation on Worg and helped integrating the Org Babel documentation into the manual.
*   Christian Egli converted the documentation into Texinfo format, inspired the agenda, patched CSS formatting into the HTML exporter, and wrote ‘`org-taskjuggler.el`’.
*   David Emery provided a patch for custom CSS support in exported HTML agendas.
*   Nic Ferrier contributed mailcap and XOXO support.
*   Miguel A. Figueroa-Villanueva implemented hierarchical checkboxes.
*   John Foerch figured out how to make incremental search show context around a match in a hidden outline tree.
*   Raimar Finken wrote ‘`org-git-line.el`’.
*   Mikael Fornius works as a mailing list moderator.
*   Austin Frank works as a mailing list moderator.
*   Eric Fraga drove the development of Beamer export with ideas and testing.
*   Barry Gidden did proofreading the manual in preparation for the book publication through Network Theory Ltd.
*   Niels Giesen had the idea to automatically archive DONE trees.
*   Nicolas Goaziou rewrote much of the plain list code.
*   Kai Grossjohann pointed out key-binding conflicts with other packages.
*   Brian Gough of Network Theory Ltd publishes the Org mode manual as a book.
*   Bernt Hansen has driven much of the support for auto-repeating tasks, task state change logging, and the clocktable. His clear explanations have been critical when we started to adopt the Git version control system.
*   Manuel Hermenegildo has contributed various ideas, small fixes and patches.
*   Phil Jackson wrote ‘`ol-irc.el`’.
*   Scott Jaderholm proposed footnotes, control over whitespace between folded entries, and column view for properties.
*   Matt Jones wrote MobileOrg Android.
*   Tokuya Kameshima wrote ‘`org-wl.el`’ and ‘`org-mew.el`’.
*   Shidai Liu (“Leo") asked for embedded LaTeX and tested it. He also provided frequent feedback and some patches.
*   Matt Lundin has proposed last-row references for table formulas and named invisible anchors. He has also worked a lot on the FAQ.
*   David Maus wrote ‘`org-atom.el`’, maintains the issues file for Org, and is a prolific contributor on the mailing list with competent replies, small fixes and patches.
*   Jason F. McBrayer suggested agenda export to CSV format.
*   Max Mikhanosha came up with the idea of refiling.
*   Dmitri Minaev sent a patch to set priority limits on a per-file basis.
*   Stefan Monnier provided a patch to keep the Emacs Lisp compiler happy.
*   Richard Moreland wrote MobileOrg for the iPhone.
*   Rick Moynihan proposed allowing multiple TODO sequences in a file and being able to quickly restrict the agenda to a subtree.
*   Todd Neal provided patches for links to Info files and Elisp forms.
*   Greg Newman refreshed the unicorn logo into its current form.
*   Tim O’Callaghan suggested in-file links, search options for general file links, and tags.
*   Osamu Okano wrote ‘`orgcard2ref.pl`’, a Perl program to create a text version of the reference card.
*   Takeshi Okano translated the manual and David O’Toole’s tutorial into Japanese.
*   Oliver Oppitz suggested multi-state TODO items.
*   Scott Otterson sparked the introduction of descriptive text for links, among other things.
*   Pete Phillips helped during the development of the TAGS feature, and provided frequent feedback.
*   Martin Pohlack provided the code snippet to bundle character insertion into bundles of 20 for undo.
*   T. V. Raman reported bugs and suggested improvements.
*   Matthias Rempe (Oelde) provided ideas, Windows support, and quality control.
*   Paul Rivier provided the basic implementation of named footnotes. He also acted as mailing list moderator for some time.
*   Kevin Rogers contributed code to access VM files on remote hosts.
*   Frank Ruell solved the mystery of the ‘`keymapp nil`’ bug, a conflict with ‘`allout.el`’.
*   Jason Riedy generalized the send-receive mechanism for Orgtbl tables with extensive patches.
*   Philip Rooke created the Org reference card, provided lots of feedback, developed and applied standards to the Org documentation.
*   Christian Schlauer proposed angular brackets around links, among other things.
*   Paul Sexton wrote ‘`org-ctags.el`’.
*   Tom Shannon’s ‘`organizer-mode.el`’ inspired linking to VM/BBDB/Gnus.
*   Ilya Shlyakhter proposed the Archive Sibling, line numbering in literal examples, and remote highlighting for referenced code lines.
*   Stathis Sideris wrote the ‘`ditaa.jar`’ ASCII to PNG converter that is now packaged into Org’s ‘`contrib/`’ directory.
*   Daniel Sinder came up with the idea of internal archiving by locking subtrees.
*   Dale Smith proposed link abbreviations.
*   James TD Smith has contributed a large number of patches for useful tweaks and features.
*   Adam Spiers asked for global linking commands, inspired the link extension system, added support for Mairix, and proposed the mapping API.
*   Ulf Stegemann created the table to translate special symbols to HTML, LaTeX, UTF-8, Latin-1 and ASCII.
*   Andy Stewart contributed code to ‘`ol-w3m.el`’, to copy HTML content with links transformation to Org syntax.
*   David O’Toole wrote ‘`org-publish.el`’ and drafted the manual chapter about publishing.
*   Jambunathan K. contributed the ODT exporter.
*   Sebastien Vauban reported many issues with LaTeX and Beamer export and enabled source code highlighting in Gnus.
*   Stefan Vollmar organized a video-recorded talk at the Max-Planck-Institute for Neurology. He also inspired the creation of a concept index for HTML export.
*   Jürgen Vollmer contributed code generating the table of contents in HTML output.
*   Samuel Wales has provided important feedback and bug reports.
*   Chris Wallace provided a patch implementing the ‘`QUOTE`’ block.
*   David Wainberg suggested archiving, and improvements to the linking system.
*   Carsten Wimmer suggested some changes and helped fix a bug in linking to Gnus.
*   Roland Winkler requested additional key bindings to make Org work on a TTY.
*   Piotr Zielinski wrote ‘`org-mouse.el`’, proposed agenda blocks and contributed various ideas and code snippets.
*   Marco Wahl wrote ‘`ol-eww.el`’.
