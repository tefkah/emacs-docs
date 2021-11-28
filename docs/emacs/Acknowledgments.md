---
slug: Acknowledgments
---

Many people have contributed code included in the Free Software Foundation’s distribution of GNU Emacs. To show our appreciation for their public spirit, we list here in alphabetical order those who have written substantial portions. Others too numerous to mention have reported and fixed bugs, and added features to many parts of Emacs. We thank them for their generosity as well.

This list is intended to mention every contributor of a major package or feature we currently distribute; if you know of someone we have omitted, please make a bug report. More comprehensive information is available in the `ChangeLog` files, summarized in the file `etc/AUTHORS` in the distribution.

*   Per Abrahamsen wrote the customization facilities, as well as `double.el`, for typing accented characters not normally available from the keyboard; `xt-mouse.el`, which allows mouse commands through Xterm; `gnus-cus.el`, which implements customization commands for Gnus; `gnus-cite.el`, a citation-parsing facility for news articles; `gnus-score.el`, scoring for Gnus; `cpp.el`, which hides or highlights parts of C programs according to preprocessor conditionals; and the widget library files `wid-browse.el`, `wid-edit.el`, `widget.el`. He also co-wrote `gnus-soup.el`.

*   Tomas Abrahamsson wrote `artist.el`, a package for producing ASCII art with a mouse or with keyboard keys.

*   Jay K. Adams wrote `jka-compr.el` and `jka-cmpr-hook.el`, providing automatic decompression and recompression for compressed files.

*   Michael Albinus wrote `dbus.el`, a package that implements the D-Bus message bus protocol; `zeroconf.el`, a mode for browsing Avahi services; `secrets.el`, an interface to keyring daemons for storing confidential data; and `filenotify.el` and the associated low-level interface routines, for watching file status changes. He and Kai Großjohann wrote the Tramp package, which provides transparent remote file editing using ssh, ftp, and other network protocols. He and Daniel Pittman wrote `tramp-cache.el`.

*   Ralf Angeli wrote `scroll-lock.el`, a minor mode which keeps the point vertically fixed by scrolling the window when moving up and down in the buffer.

*   Aurélien Aptel added dynamic module support to Emacs. Philipp Stephani and others also worked on the dynamic module code.

*   Joe Arceneaux wrote the original text property implementation, and implemented support for X11.

*   Emil Åström, Milan Zamaza, and Stefan Bruda wrote `prolog.el`, a mode for editing Prolog (and Mercury) code.

*   Miles Bader wrote `image-file.el`, support code for visiting image files; `minibuf-eldef.el`, a minor mode that hides the minibuffer default value when appropriate; `rfn-eshadow.el`, shadowing of `read-file-name` input; `mb-depth.el`, display of minibuffer depth; `button.el`, the library that implements clickable buttons; `face-remap.el`, a package for changing the default face in individual buffers; and `macroexp.el` for macro-expansion. He also worked on an early version of the lexical binding code.

*   David Bakhash wrote `strokes.el`, a mode for controlling Emacs by moving the mouse in particular patterns.

*   Juanma Barranquero wrote `emacs-lock.el` (based on the original version by Tom Wurgler), which makes it harder to exit with valuable buffers unsaved; and `frameset.el`, for saving and restoring the frame/window setup. He also made many other contributions to other areas, including MS Windows support.

*   Eli Barzilay wrote `calculator.el`, a desktop calculator for Emacs.

*   Steven L. Baur wrote `footnote.el` which lets you include footnotes in email messages; and `gnus-audio.el` and `earcon.el`, which provide sound effects for Gnus. He also wrote `gnus-setup.el`.

*   Alexander L. Belikoff, Sergey Berezin, Sacha Chua, David Edmondson, Noah Friedman, Andreas Fuchs, Mario Lang, Ben Mesander, Lawrence Mitchell, Gergely Nagy, Michael Olson, Per Persson, Jorgen Schäfer, Alex Schroeder, and Tom Tromey wrote ERC, an advanced Internet Relay Chat client (for more information, see the file `CREDITS` in the ERC distribution).

*   Scott Bender, Michael Brouwer, Christophe de Dinechin, Carl Edman, Christian Limpach and Adrian Robert developed and maintained the NeXTstep port of Emacs.

*   Stephen Berman wrote `todo-mode.el` (based on the original version by Oliver Seidel), a package for maintaining `TODO` list files.

*   Anna M. Bigatti wrote `cal-html.el`, which produces HTML calendars.

*   Ray Blaak and Simon South wrote `opascal.el`, a mode for editing Object Pascal source code.

*   Martin Blais, Stefan Merten, and David Goodger wrote `rst.el`, a mode for editing reStructuredText documents.

*   Jim Blandy wrote Emacs 19’s input system, brought its configuration and build process up to the GNU coding standards, and contributed to the frame support and multi-face support. Jim also wrote `tvi970.el`, terminal support for the TeleVideo 970 terminals; and co-wrote `wyse50.el` (q.v.).

*   Per Bothner wrote `term.el`, a terminal emulator in an Emacs buffer.

*   Terrence M. Brannon wrote `landmark.el`, a neural-network robot that learns landmarks.

*   Frank Bresz wrote `diff.el`, a program to display `diff` output.

*   Peter Breton implemented `dirtrack.el`, a library for tracking directory changes in shell buffers; `filecache.el`, which records which directories your files are in; `locate.el`, which interfaces to the `locate` command; `find-lisp.el`, an Emacs Lisp emulation of the `find` program; `net-utils.el`; and the generic mode feature.

*   Emmanuel Briot wrote `xml.el`, an XML parser for Emacs; and `ada-prj.el`, editing of Ada mode project files, as well as co-authoring `ada-mode.el` and `ada-xref.el`.

*   Kevin Broadey wrote `foldout.el`, providing folding extensions to Emacs’s outline modes.

*   David M. Brown wrote `array.el`, for editing arrays and other tabular data.

*   Włodek Bzyl and Ryszard Kubiak wrote `ogonek.el`, a package for changing the encoding of Polish characters.

*   Bill Carpenter provided `feedmail.el`, a package for massaging outgoing mail messages and sending them through various popular mailers.

*   Per Cederqvist and Inge Wallin wrote `ewoc.el`, an Emacs widget for manipulating object collections. Per Cederqvist, Inge Wallin, and Thomas Bellman wrote `avl-tree.el`, for balanced binary trees.

*   Hans Chalupsky wrote `advice.el`, an overloading mechanism for Emacs Lisp functions; and `trace.el`, a tracing facility for Emacs Lisp.

*   Chris Chase, Carsten Dominik, and J. D. Smith wrote IDLWAVE mode, for editing IDL and WAVE CL.

*   Bob Chassell wrote `texnfo-upd.el`, `texinfo.el`, and `makeinfo.el`, modes and utilities for working with Texinfo files; and `page-ext.el`, commands for extended page handling. He also wrote the Emacs Lisp introduction. See [Introduction to Programming in Emacs Lisp](https://www.gnu.org/software/emacs/manual/html_mono/eintr.html#Top).

*   Jihyun Cho wrote `hanja-util.el` and `hangul.el`, utilities for Korean Hanja.

*   Andrew Choi and Yamamoto Mitsuharu wrote the Carbon support, used prior to Emacs 23 for macOS. Yamamoto Mitsuharu continued to contribute to macOS support in the newer Nextstep port; and also improved support for multi-monitor displays.

*   Chong Yidong was the Emacs co-maintainer from Emacs 23 to 24.3. He made many improvements to the Emacs display engine. He also wrote `tabulated-list.el`, a generic major mode for lists of data; and improved support for themes and packages.

*   James Clark wrote SGML mode, a mode for editing SGML documents; and nXML mode, a mode for editing XML documents. He also contributed to Emacs’s dumping procedures.

*   Mike Clarkson wrote `edt.el`, an emulation of DEC’s EDT editor.

*   Glynn Clements provided `gamegrid.el` and a couple of games that use it, Snake and Tetris.

*   Andrew Cohen wrote `spam-wash.el`, to decode and clean email before it is analyzed for spam.

*   Daniel Colascione wrote the portable dumping code in `pdumper.c` and elsewhere. He also implemented double-buffering for X-based GUI frames, and the original support for loading shared-object modules into Emacs.

*   Theresa O’Connor wrote `json.el`, a file for parsing and generating JSON files.

*   Georges Brun-Cottan and Stefan Monnier wrote `easy-mmode.el`, a package for easy definition of major and minor modes.

*   Andrew Csillag wrote M4 mode (`m4-mode.el`).

*   Doug Cutting and Jamie Zawinski wrote `disass.el`, a disassembler for compiled Emacs Lisp code.

*   Mathias Dahl wrote `image-dired.el`, a package for viewing image files as thumbnails.

*   Julien Danjou wrote an implementation of desktop notifications (`notifications.el`, and related packages for ERC and Gnus); and `color.el`, a library for general color manipulation. He also made various contributions to Gnus.

*   Vivek Dasmohapatra wrote `htmlfontify.el`, to convert a buffer or source tree to HTML.

*   Matthieu Devin wrote `delsel.el`, a package to make newly-typed text replace the current selection.

*   Eric Ding wrote `goto-addr.el`,

*   Jan Djärv added support for the GTK+ toolkit and X drag-and-drop. He also wrote `dynamic-setting.el`.

*   Carsten Dominik wrote RefTeX, a package for setting up labels and cross-references in LaTeX documents; and co-wrote IDLWAVE mode (q.v.). He was the original author of Org mode, for maintaining notes, todo lists, and project planning. Bastien Guerry subsequently took over maintainership. Benjamin Andresen, Thomas Baumann, Joel Boehland, Jan Böcker, Lennart Borgman, Baoqiu Cui, Dan Davison, Christian Egli, Eric S. Fraga, Daniel German, Chris Gray, Konrad Hinsen, Tassilo Horn, Philip Jackson, Martyn Jago, Thorsten Jolitz, Jambunathan K, Tokuya Kameshima, Sergey Litvinov, David Maus, Ross Patterson, Juan Pechiar, Sebastian Rose, Eric Schulte, Paul Sexton, Ulf Stegemann, Andy Stewart, Christopher Suckling, David O’Toole, John Wiegley, Zhang Weize, Piotr Zieliński, and others also wrote various Org mode components. For more information, see [History and Acknowledgments](https://www.gnu.org/software/emacs/manual/html_mono/org.html#History-and-Acknowledgments) in The Org Manual.

*   Scott Draves wrote `tq.el`, help functions for maintaining transaction queues between Emacs and its subprocesses.

*   Benjamin Drieu wrote `pong.el`, an implementation of the classical pong game.

*   Viktor Dukhovni wrote support for dumping under SunOS version 4.

*   John Eaton and Kurt Hornik wrote Octave mode.

*   Rolf Ebert, Markus Heritsch, and Emmanuel Briot wrote Ada mode.

*   Paul Eggert integrated the Gnulib portability library, and made many other portability fixes to the C code; as well as his contributions to VC and the calendar.

*   Stephen Eglen wrote `mspools.el`, which tells you which Procmail folders have mail waiting in them.

*   Torbjörn Einarsson wrote `f90.el`, a mode for Fortran 90 files.

*   Tsugutomo Enami co-wrote the support for international character sets.

*   David Engster wrote `mairix.el` and `nnmairix.el`, an interface to the Mairix indexing tool.

*   Hans Henrik Eriksen wrote `simula.el`, a mode for editing SIMULA 87 code.

*   Michael Ernst wrote `reposition.el`, a command for recentering a function’s source code and preceding comment on the screen.

*   Ata Etemadi wrote `cdl.el`, functions for working with Common Data Language source code.

*   Frederick Farnbach implemented `morse.el`, which converts text to Morse code.

*   Oscar Figueiredo wrote EUDC, the Emacs Unified Directory Client, which is an interface to directory servers via LDAP, CCSO PH/QI, or BBDB; and `ldap.el`, the LDAP client interface.

*   Fred Fish wrote the support for dumping COFF executable files.

*   Karl Fogel wrote `bookmark.el`, which implements named placeholders; `mail-hist.el`, a history mechanism for outgoing mail messages; and `saveplace.el`, for preserving point’s location in files between editing sessions.

*   Gary Foster wrote `scroll-all.el`, a mode for scrolling several buffers together.

*   Romain Francoise contributed ACL (Access Control List) support, for preserving extended file attributes on backup and copy.

*   Noah Friedman wrote `rlogin.el`, an interface to Rlogin, `type-break.el`, which reminds you to take periodic breaks from typing, and `eldoc-mode`, a mode to show the defined parameters or the doc string for the Lisp function near point.

*   Shigeru Fukaya wrote a testsuite for the byte-compiler.

*   Keith Gabryelski wrote `hexl.el`, a mode for editing binary files.

*   Kevin Gallagher rewrote and enhanced the EDT emulation, and wrote `flow-ctrl.el`, a package for coping with unsuppressible XON/XOFF flow control.

*   Fabián E. Gallina rewrote `python.el`, the major mode for the Python programming language used in Emacs 24.3 onwards.

*   Kevin Gallo added multiple-frame support for Windows NT and wrote `w32-win.el`, support functions for the MS-Windows window system.

*   Juan León Lahoz García wrote `wdired.el`, a package for performing file operations by directly editing Dired buffers.

*   Howard Gayle wrote much of the C and Lisp code for display tables and case tables. He also wrote `rot13.el`, a command to display the plain-text form of a buffer encoded with the Caesar cipher; `vt100-led.el`, a package for controlling the LEDs on VT100-compatible terminals; and much of the support for ISO-8859 European character sets (which includes `iso-ascii.el`, `iso-insert.el`, `iso-swed.el`, `iso-syntax.el`, `iso-transl.el`, and `swedish.el`).

*   Stephen Gildea made the Emacs quick reference card, and made many contributions for `time-stamp.el`, a package for maintaining last-change time stamps in files.

*   Julien Gilles wrote `gnus-ml.el`, a mailing list minor mode for Gnus.

*   David Gillespie wrote the Common Lisp compatibility packages; `Calc`, an advanced calculator and mathematical tool, since maintained and developed by Jay Belanger; `complete.el`, a partial completion mechanism; and `edmacro.el`, a package for editing keyboard macros.

*   Bob Glickstein wrote `sregex.el`, a facility for writing regexps using a Lisp-like syntax.

*   Boris Goldowsky wrote `avoid.el`, a package to keep the mouse cursor out of the way of the text cursor; `shadowfile.el`, a package for keeping identical copies of files in more than one place; `format.el`, a package for reading and writing files in various formats; `enriched.el`, a package for saving text properties in files; `facemenu.el`, a package for specifying faces; and `descr-text.el`, describing text and character properties.

*   Michelangelo Grigni wrote `ffap.el` which visits a file, taking the file name from the buffer.

*   Odd Gripenstam wrote `dcl-mode.el` for editing DCL command files.

*   Michael Gschwind wrote `iso-cvt.el`, a package to convert between the ISO 8859-1 character set and the notations for non-ASCII characters used by TeX and net tradition.

*   Bastien Guerry wrote `gnus-bookmark.el`, bookmark support for Gnus; as well as helping to maintain Org mode (q.v.).

*   Henry Guillaume wrote `find-file.el`, a package to visit files related to the currently visited file.

*   Doug Gwyn wrote the portable `alloca` implementation.

*   Ken’ichi Handa implemented most of the support for international character sets, and wrote most of the Emacs 23 font handling code. He also wrote `composite.el`, which provides a minor mode that composes characters automatically when they are displayed; `isearch-x.el`, a facility for searching non-ASCII text; and `ps-bdf.el`, a BDF font support for printing non-ASCII text on a PostScript printer. Together with Naoto Takahashi, he wrote `quail.el`, an input facility for typing non-ASCII text from an ASCII keyboard.

*   Jesper Harder wrote `yenc.el`, for decoding yenc encoded messages.

*   Alexandru Harsanyi wrote a library for accessing SOAP web services.

*   K. Shane Hartman wrote `chistory.el` and `echistory.el`, packages for browsing command history lists; `electric.el` and `helper.el`, which provide an alternative command loop and appropriate help facilities; `emacsbug.el`, a package for reporting Emacs bugs; `picture.el`, a mode for editing ASCII pictures; and `view.el`, a package for perusing files and buffers without editing them.

*   John Heidemann wrote `mouse-copy.el` and `mouse-drag.el`, which provide alternative mouse-based editing and scrolling features.

*   Jon K Hellan wrote `utf7.el`, support for mail-safe transformation format of Unicode.

*   Karl Heuer wrote the original blessmail script, implemented the `intangible` text property, and rearranged the structure of the `Lisp_Object` type to allow for more data bits.

*   Manabu Higashida ported Emacs to MS-DOS.

*   Anders Holst wrote `hippie-exp.el`, a versatile completion and expansion package.

*   Tassilo Horn wrote DocView mode, allowing viewing of PDF, PostScript and DVI documents.

*   Khaled Hosny, Yamamoto Mitsuharu, and Eli Zaretskii implemented text shaping with HarfBuzz for Emacs.

*   Joakim Hove wrote `html2text.el`, a html to plain text converter.

*   Denis Howe wrote `browse-url.el`, a package for invoking a WWW browser to display a URL.

*   Lars Magne Ingebrigtsen did a major redesign of the Gnus news-reader and wrote many of its parts. Several of these are now general components of Emacs, including: `dns.el` for Domain Name Service lookups; `format-spec.el` for formatting arbitrary format strings; `netrc.el` for parsing of `.netrc` files; and `time-date.el` for general date and time handling. He also wrote `network-stream.el`, for opening network processes; `url-queue.el`, for controlling parallel downloads of URLs; and implemented libxml2 support. He also wrote `eww.el`, an Emacs Lisp web browser; and implemented native zlib decompression. Components of Gnus have also been written by: Nagy Andras, David Blacka, Scott Byer, Ludovic Courtès, Julien Danjou, Kevin Greiner, Kai Großjohann, Joe Hildebrand, Paul Jarc, Simon Josefsson, Sascha Lüdecke, David Moore, Jim Radford, Benjamin Rutt, Raymond Scholz, Thomas Steffen, Reiner Steib, Jan Tatarik, Didier Verna, Ilja Weis, Katsumi Yamaoka, Teodor Zlatanov, and others (see [Contributors](https://www.gnu.org/software/emacs/manual/html_mono/gnus.html#Contributors) in the Gnus Manual).

*   Andrew Innes contributed extensively to the MS-Windows support.

*   Seiichiro Inoue improved Emacs’s XIM support.

*   Philip Jackson wrote `find-cmd.el`, to build a `find` command-line.

*   Ulf Jasper wrote `icalendar.el`, a package for converting Emacs diary entries to and from the iCalendar format; `newsticker.el`, an RSS and Atom based Newsticker; and `bubbles.el`, a puzzle game.

*   Kyle Jones wrote `life.el`, a package to play Conway’s Game of Life.

*   Terry Jones wrote `shadow.el`, a package for finding potential load-path problems when some Lisp file shadows another.

*   Simon Josefsson wrote `dns-mode.el`, an editing mode for Domain Name System master files; `dig.el`, a Domain Name System interface; `flow-fill.el`, a package for interpreting RFC2646 formatted text in messages; `fringe.el`, a package for customizing the fringe; `imap.el`, an Emacs Lisp library for talking to IMAP servers; `password-cache.el`, a password reader; `nnimap.el`, the IMAP back-end for Gnus; `url-imap.el` for the URL library; `rfc2104.el`, a hashed message authentication facility; the Gnus S/MIME and Sieve components; and `tls.el` and `starttls.el` for the Transport Layer Security protocol.

*   Arne Jørgensen wrote `latexenc.el`, a package to automatically guess the correct coding system in LaTeX files.

*   Alexandre Julliard wrote `vc-git.el`, support for the Git version control system.

*   Tomoji Kagatani implemented `smtpmail.el`, used for sending out mail with SMTP.

*   Ivan Kanis wrote `vc-hg.el`, support for the Mercurial version control system.

*   Henry Kautz wrote `bib-mode.el`, a mode for maintaining bibliography databases compatible with `refer` (the `troff` version) and `lookbib`, and `refbib.el`, a package to convert those databases to the format used by the LaTeX text formatting package.

*   Taichi Kawabata added support for Devanagari script and the Indian languages, and wrote `ucs-normalize.el` for Unicode normalization.

*   Taro Kawagishi implemented the MD4 Message Digest Algorithm in Lisp; and wrote `ntlm.el` and `sasl-ntlm.el` for NT LanManager authentication support.

*   Howard Kaye wrote `sort.el`, commands to sort text in Emacs buffers.

*   Michael Kifer wrote `ediff`, an interactive interface to the `diff`, `patch`, and `merge` programs; and Viper, an emulator of the VI editor.

*   Richard King wrote the first version of `userlock.el` and `filelock.c`, which provide simple support for multiple users editing the same file. He also wrote the initial version of `uniquify.el`, a facility to make buffer names unique by adding parts of the file’s name to the buffer name.

*   Peter Kleiweg wrote `ps-mode.el`, a mode for editing PostScript files and running a PostScript interpreter interactively from within Emacs.

*   Karel Klíč contributed SELinux support, for preserving the Security-Enhanced Linux context of files on backup and copy.

*   Shuhei Kobayashi wrote `hex-util.el`, for operating on hexadecimal strings; and support for HMAC (Keyed-Hashing for Message Authentication).

*   Pavel Kobyakov wrote `flymake.el`, a minor mode for performing on-the-fly syntax checking.

*   David M. Koppelman wrote `hi-lock.el`, a minor mode for interactive automatic highlighting of parts of the buffer text.

*   Koseki Yoshinori wrote `iimage.el`, a minor mode for displaying inline images.

*   Robert Krawitz wrote the original `xmenu.c`, part of Emacs’s pop-up menu support.

*   Sebastian Kremer wrote `dired-mode`, with contributions by Lawrence R. Dodd. He also wrote `ls-lisp.el`, a Lisp emulation of the `ls` command for platforms that don’t have `ls` as a standard program.

*   David Kågedal wrote `tempo.el`, providing support for easy insertion of boilerplate text and other common constructions.

*   Igor Kuzmin wrote `cconv.el`, providing closure conversion for statically scoped Emacs lisp.

*   Daniel LaLiberte wrote `edebug.el`, a source-level debugger for Emacs Lisp; `cl-specs.el`, specifications to help `edebug` debug code written using David Gillespie’s Common Lisp support; and `isearch.el`, Emacs’s incremental search minor mode. He also co-wrote `hideif.el` (q.v.).

*   Karl Landstrom and Daniel Colascione wrote `js.el`, a mode for editing JavaScript.

*   Vinicius Jose Latorre wrote the Emacs printing facilities, as well as `ps-print` (with Jim Thompson, Jacques Duthen, and Kenichi Handa), a package for pretty-printing Emacs buffers to PostScript printers; `delim-col.el`, a package to arrange text into columns; `ebnf2ps.el`, a package that translates EBNF grammar to a syntactic chart that can be printed to a PostScript printer; and `whitespace.el`, a package that detects and cleans up excess whitespace in a file (building on an earlier version by Rajesh Vaidheeswarran).

*   Frederic Lepied wrote `expand.el`, which uses the abbrev mechanism for inserting programming constructs.

*   Peter Liljenberg wrote `elint.el`, a Lint-style code checker for Emacs Lisp programs.

*   Lars Lindberg wrote `msb.el`, which provides more flexible menus for buffer selection; co-wrote `imenu.el` (q.v.); and rewrote `dabbrev.el`, originally written by Don Morrison.

*   Anders Lindgren wrote `autorevert.el`, a package for automatically reverting files visited by Emacs that were changed on disk; `cwarn.el`, a package to highlight suspicious C and C`++` constructs; and `follow.el`, a minor mode to synchronize windows that show the same buffer.

*   Thomas Link wrote `filesets.el`, a package for handling sets of files.

*   Juri Linkov wrote `misearch.el`, extending isearch to multi-buffer searches; the code in `files-x.el` for handling file- and directory-local variables; and the `info-finder` feature that creates a virtual Info manual of package keywords. He also implemented the Tab Bar and window tab-lines, and added numerous enhancements and improvements in I-search.

*   Leo Liu wrote `pcmpl-x.el`, providing completion for miscellaneous external tools; and revamped support for Octave in Emacs 24.4.

*   Károly Lőrentey wrote the multi-terminal code, which allows Emacs to run on graphical and text terminals simultaneously.

*   Martin Lorentzon wrote `vc-annotate.el`, support for version control annotation.

*   Dave Love wrote much of the code dealing with Unicode support and Latin-N unification. He added support for many coding systems, including the various UTF-7 and UTF-16 coding systems. He also wrote `autoarg-mode`, a global minor mode whereby digit keys supply prefix arguments; `autoarg-kp-mode`, which redefines the keypad numeric keys to digit arguments; `autoconf.el`, a mode for editing Autoconf files; `cfengine.el`, a mode for editing Cfengine files; `elide-head.el`, a package for eliding boilerplate text from file headers; `hl-line.el`, a minor mode for highlighting the line in the current window on which point is; `cap-words.el`, a minor mode for motion in `CapitalizedWordIdentifiers`; `latin1-disp.el`, a package that lets you display ISO 8859 characters on Latin-1 terminals by setting up appropriate display tables; the version of `python.el` used prior to Emacs 24.3; `smiley.el`, a facility for displaying smiley faces; `sym-comp.el`, a library for performing mode-dependent symbol completion; `benchmark.el` for timing code execution; and `tool-bar.el`, a mode to control the display of the Emacs tool bar. With Riccardo Murri he wrote `vc-bzr.el`, support for the Bazaar version control system.

*   Eric Ludlam wrote the Speedbar package; `checkdoc.el`, for checking doc strings in Emacs Lisp programs; `dframe.el`, providing dedicated frame support modes; `ezimage.el`, a generalized way to place images over text; `chart.el` for drawing bar charts etc.; and the EIEIO (Enhanced Implementation of Emacs Interpreted Objects) package. He was also the main author of the CEDET (Collection of Emacs Development Environment Tools) package. Portions were also written by Jan Moringen, David Ponce, and Joakim Verona.

*   Roland McGrath wrote `compile.el` (since updated by Daniel Pfeiffer), a package for running compilations in a buffer, and then visiting the locations reported in error messages; `etags.el`, a package for jumping to function definitions and searching or replacing in all the files mentioned in a `TAGS` file; with Sebastian Kremer `find-dired.el`, for using `dired` commands on output from the `find` program; `grep.el` for running the `grep` command; `map-ynp.el`, a general purpose boolean question-asker; `autoload.el`, providing semi-automatic maintenance of autoload files.

*   Alan Mackenzie wrote the integrated AWK support in CC Mode, and maintained CC Mode from Emacs 22 onwards.

*   Michael McNamara and Wilson Snyder wrote Verilog mode.

*   Christopher J. Madsen wrote `decipher.el`, a package for cracking simple substitution ciphers.

*   Neil M. Mager wrote `appt.el`, functions to notify users of their appointments. It finds appointments recorded in the diary files used by the `calendar` package.

*   Ken Manheimer wrote `allout.el`, a mode for manipulating and formatting outlines, and `icomplete.el`, which provides incremental completion feedback in the minibuffer.

*   Bill Mann wrote `perl-mode.el`, a mode for editing Perl code.

*   Brian Marick and Daniel LaLiberte wrote `hideif.el`, support for hiding selected code within C `#ifdef` clauses.

*   Simon Marshall wrote `regexp-opt.el`, which generates a regular expression from a list of strings; and the fast-lock and lazy-lock font-lock support modes. He also extended `comint.el` and `shell.el`, originally written by Olin Shivers.

*   Bengt Martensson, Dirk Herrmann, Marc Shapiro, Mike Newton, Aaron Larson, and Stefan Schoef, wrote `bibtex.el`, a mode for editing BibTeX bibliography files.

*   Charlie Martin wrote `autoinsert.el`, which provides automatic mode-sensitive insertion of text into new files.

*   Yukihiro Matsumoto and Nobuyoshi Nakada wrote Ruby-mode.

*   Tomohiro Matsuyama wrote the native Elisp profiler.

*   Thomas May wrote `blackbox.el`, a version of the traditional blackbox game.

*   David Megginson wrote `derived.el`, which allows one to define new major modes by inheriting key bindings and commands from existing major modes.

*   Jimmy Aguilar Mena wrote the code to support the `:extend` face attribute, and also implemented the optional `display-fill-column-indicator` feature.

*   Will Mengarini wrote `repeat.el`, a command to repeat the preceding command with its arguments.

*   Richard Mlynarik wrote `cl-indent.el`, a package for indenting Common Lisp code; `ebuff-menu.el`, an electric browser for buffer listings; `ehelp.el`, bindings for browsing help screens; and `rfc822.el`, a parser for E-mail addresses in the format used in mail messages and news articles (Internet RFC 822 and its successors).

*   Gerd Möllmann was the Emacs maintainer from the beginning of Emacs 21 development until the release of 21.1. He wrote the new display engine used from Emacs 21 onwards, and the asynchronous timers facility. He also wrote `ebrowse`, the C`++` browser; `jit-lock.el`, the Just-In-Time font-lock support mode; `tooltip.el`, a package for displaying tooltips; `authors.el`, a package for maintaining the `AUTHORS` file; and `rx.el`, a regular expression constructor.

*   Stefan Monnier was the Emacs (co-)maintainer from Emacs 23 until late in the development of 25.1. He added support for Arch and Subversion to VC, re-wrote much of the Emacs server to use the built-in networking primitives, and re-wrote the abbrev and minibuffer completion code for Emacs 23. He also wrote `PCL-CVS`, a directory-level front end to the CVS version control system; `reveal.el`, a minor mode for automatically revealing invisible text; `smerge-mode.el`, a minor mode for resolving `diff3` conflicts; `diff-mode.el`, a mode for viewing and editing context diffs; `css-mode.el` for Cascading Style Sheets; `bibtex-style.el` for BibTeX Style files; `mpc.el`, a client for the Music Player Daemon (MPD); `smie.el`, a generic indentation engine; and `pcase.el`, implementing ML-style pattern matching. In Emacs 24, he integrated the lexical binding code, cleaned up the CL namespace (making it acceptable to use CL functions at runtime), added generalized variables to core Emacs Lisp, and implemented a new lightweight advice mechanism.

*   Morioka Tomohiko wrote several packages for MIME support in Gnus and elsewhere.

*   Sen Nagata wrote `crm.el`, a package for reading multiple strings with completion, and `rfc2368.el`, support for `mailto:` URLs.

*   Erik Naggum wrote the time-conversion functions. He also wrote `disp-table.el`, for dealing with display tables; `mailheader.el`, for parsing email headers; and `parse-time.el`, for parsing time strings.

*   Takahashi Naoto co-wrote `quail.el` (q.v.), and wrote `robin.el`, another input method.

*   Thomas Neumann and Eric Raymond wrote `make-mode.el`, a mode for editing makefiles.

*   Thien-Thi Nguyen and Dan Nicolaescu wrote `hideshow.el`, a minor mode for selectively displaying blocks of text.

*   Dan Nicolaescu added support for running Emacs as a daemon. He also wrote `romanian.el`, support for editing Romanian text; `iris-ansi.el`, support for running Emacs on SGI’s `xwsh` and `winterm` terminal emulators; and `vc-dir.el`, displaying the status of version-controlled directories.

*   Hrvoje Nikšić wrote `savehist.el`, for saving the minibuffer history between Emacs sessions.

*   Jeff Norden wrote `kermit.el`, a package to help the Kermit dialup communications program run comfortably in an Emacs shell buffer.

*   Andrew Norman wrote `ange-ftp.el`, providing transparent FTP support.

*   Kentaro Ohkouchi created the Emacs icons used beginning with Emacs 23.

*   Christian Ohler wrote `ert.el`, a library for automated regression testing.

*   Alexandre Oliva wrote `gnus-mlspl.el`, a group params-based mail splitting mechanism.

*   Takaaki Ota wrote `table.el`, a package for creating and editing embedded text-based tables.

*   Pieter E. J. Pareit wrote `mixal-mode.el`, an editing mode for the MIX assembly language.

*   David Pearson wrote `quickurl.el`, a simple method of inserting a URL into the current buffer based on text at point; `5x5.el`, a game to fill all squares on the field.

*   Jeff Peck wrote `sun.el`, key bindings for sunterm keys.

*   Damon Anton Permezel wrote `hanoi.el`, an animated demonstration of the Towers of Hanoi puzzle.

*   William M. Perry wrote `mailcap.el` (with Lars Magne Ingebrigtsen), a MIME media types configuration facility; `mwheel.el`, a package for supporting mouse wheels; co-wrote (with Dave Love) `socks.el`, a Socks v5 client; and developed the URL package.

*   Per Persson wrote `gnus-vm.el`, the VM interface for Gnus.

*   Jens Petersen wrote `find-func.el`, which makes it easy to find the source code for an Emacs Lisp function or variable.

*   Nicolas Petton wrote `map.el`, a library providing map-manipulation functions that work on alists, hash-table and arrays; `seq.el`, a library providing advanced sequence manipulation functions and macros; and `thunk.el`, a library providing functions and macros to delay the evaluation of forms. He also created the new icon in Emacs 25.

*   Daniel Pfeiffer wrote `conf-mode.el`, a mode for editing configuration files; `copyright.el`, a package for updating copyright notices in files; `executable.el`, a package for executing interpreter scripts; `sh-script.el`, a mode for editing shell scripts; `skeleton.el`, implementing a concise language for writing statement skeletons; and `two-column.el`, a minor mode for simultaneous two-column editing.

    Daniel also rewrote `apropos.el` (originally written by Joe Wells), for finding commands, functions, and variables matching a regular expression; and, together with Jim Blandy, co-authored `wyse50.el`, support for Wyse 50 terminals. He also co-wrote `compile.el` (q.v.) and `ada-stmt.el`.

*   Richard L. Pieri wrote `pop3.el`, a Post Office Protocol (RFC 1460) interface for Emacs.

*   Fred Pierresteguy and Paul Reilly made Emacs work with X Toolkit widgets.

*   François Pinard, Greg McGary, and Bruno Haible wrote `po.el`, support for PO translation files.

*   Christian Plaunt wrote `soundex.el`, an implementation of the Soundex algorithm for comparing English words by their pronunciation.

*   David Ponce wrote `recentf.el`, a package that puts a menu of recently visited files in the Emacs menu bar; `ruler-mode.el`, a minor mode for displaying a ruler in the header line; and `tree-widget.el`, a package to display hierarchical data structures.

*   Francesco A. Potortì wrote `cmacexp.el`, providing a command which runs the C preprocessor on a region of a file and displays the results. He also expanded and redesigned the `etags` program.

*   Michael D. Prange and Steven A. Wood wrote `fortran.el`, a mode for editing Fortran code.

*   Ashwin Ram wrote `refer.el`, commands to look up references in bibliography files by keyword.

*   Eric S. Raymond wrote `vc.el`, an interface to the RCS and SCCS source code version control systems, with Paul Eggert; `gud.el`, a package for running source-level debuggers like GDB and SDB in Emacs; `asm-mode.el`, a mode for editing assembly language code; `AT386.el`, terminal support package for IBM’s AT keyboards; `cookie1.el`, support for fortune-cookie programs like `yow.el` and `spook.el`; `finder.el`, a package for finding Emacs Lisp packages by keyword and topic; `keyswap.el`, code to swap the `BS` and `DEL` keys; `loadhist.el`, functions for loading and unloading Emacs features; `lisp-mnt.el`, functions for working with the special headers used in Emacs Lisp library files; and code to set and make use of the `load-history` lisp variable, which records the source file from which each lisp function loaded into Emacs came.

*   Edward M. Reingold wrote the calendar and diary support, with contributions from Stewart Clamen (`cal-mayan.el`), Nachum Dershowitz (`cal-hebrew.el`), Paul Eggert (`cal-dst.el`), Steve Fisk (`cal-tex.el`), Michael Kifer (`cal-x.el`), Lara Rios (`cal-menu.el`), and Denis B. Roegel (`solar.el`). Andy Oram contributed to its documentation. Reingold also contributed to `tex-mode.el`, a mode for editing TeX files, as did William F. Schelter, Dick King, Stephen Gildea, Michael Prange, and Jacob Gore.

*   David Reitter wrote `mailclient.el` which can send mail via the system’s designated mail client.

*   Alex Rezinsky wrote `which-func.el`, a mode that shows the name of the current function in the mode line.

*   Rob Riepel wrote `vt-control.el`, providing some control functions for the DEC VT line of terminals.

*   Nick Roberts wrote `t-mouse.el`, for mouse support in text terminals; and `gdb-ui.el`, a graphical user interface to GDB. Together with Dmitry Dzhus, he wrote `gdb-mi.el`, the successor to `gdb-ui.el`.

*   Danny Roozendaal implemented `handwrite.el`, which converts text into “handwriting".

*   Markus Rost wrote `cus-test.el`, a testing framework for customize.

*   Guillermo J. Rozas wrote `scheme.el`, a mode for editing Scheme and DSSSL code.

*   Martin Rudalics implemented improved display-buffer handling in Emacs 24; and implemented pixel-wise resizing of windows and frames.

*   Ivar Rummelhoff wrote `winner.el`, which records recent window configurations so you can move back to them.

*   Jason Rumney ported the Emacs 21 display engine to MS-Windows, and has contributed extensively to the MS-Windows port of Emacs.

*   Wolfgang Rupprecht wrote Emacs 19’s floating-point support (including `float-sup.el` and `floatfns.c`).

*   Kevin Ryde wrote `info-xref.el`, a library for checking references in Info files.

*   Phil Sainty wrote `so-long.el`, a set of features for easier editing of files with very long lines.

*   James B. Salem and Brewster Kahle wrote `completion.el`, providing dynamic word completion.

*   Holger Schauer wrote `fortune.el`, a package for using fortune in message signatures.

*   William Schelter wrote `telnet.el`, support for `telnet` sessions within Emacs.

*   Ralph Schleicher wrote `battery.el`, a package for displaying laptop computer battery status, and `info-look.el`, a package for looking up Info documentation for symbols in the buffer.

*   Michael Schmidt and Tom Perrine wrote `modula2.el`, a mode for editing Modula-2 code, based on work by Mick Jordan and Peter Robinson.

*   Ronald S. Schnell wrote `dunnet.el`, a text adventure game.

*   Philippe Schnoebelen wrote `gomoku.el`, a Go Moku game played against Emacs; and `mpuz.el`, a multiplication puzzle.

*   Jan Schormann wrote `solitaire.el`, an implementation of the Solitaire game.

*   Alex Schroeder wrote `ansi-color.el`, a package for translating ANSI color escape sequences to Emacs faces; `sql.el`, a package for interactively running an SQL interpreter in an Emacs buffer; `cus-theme.el`, an interface for custom themes; `master.el`, a package for making a buffer ‘`master`’ over another; and `spam-stat.el`, for statistical detection of junk email. He also wrote parts of the IRC client ERC (q.v.).

*   Randal Schwartz wrote `pp.el`, a pretty-printer for lisp objects.

*   Manuel Serrano wrote the Flyspell package, which does spell checking as you type.

*   Hovav Shacham wrote `windmove.el`, a set of commands for selecting windows based on their geometrical position on the frame.

*   Stanislav Shalunov wrote `uce.el`, for responding to unsolicited commercial email.

*   Richard Sharman wrote `hilit-chg.el`, which uses colors to show recent editing changes.

*   Olin Shivers wrote `comint.el`, a library for modes running interactive command-line-oriented subprocesses, and `shell.el`, for running inferior shells (both since extended by Simon Marshall); `cmuscheme.el`, for running inferior Scheme processes; `inf-lisp.el`, for running inferior Lisp process.

*   Espen Skoglund wrote `pascal.el`, a mode for editing Pascal code.

*   Rick Sladkey wrote `backquote.el`, a lisp macro for creating mostly-constant data.

*   Lynn Slater wrote `help-macro.el`, a macro for writing interactive help for key bindings.

*   Chris Smith wrote `icon.el`, a mode for editing Icon code.

*   David Smith wrote `ielm.el`, a mode for interacting with the Emacs Lisp interpreter as a subprocess.

*   Paul D. Smith wrote `snmp-mode.el`.

*   William Sommerfeld wrote `scribe.el`, a mode for editing Scribe files, and `server.el`, a package allowing programs to send files to an extant Emacs job to be edited.

*   Andre Spiegel made many contributions to the Emacs Version Control package, and in particular made it support multiple back ends.

*   Michael Staats wrote `pc-select.el`, which rebinds keys for selecting regions to follow many other systems.

*   Richard Stallman invented Emacs. He is the original author of GNU Emacs, and has been Emacs maintainer over several non-contiguous periods. In addition to much of the core Emacs code, he has written `easymenu.el`, a facility for defining Emacs menus; `image-mode.el`, support for visiting image files; `menu-bar.el`, the Emacs menu bar support code; `paren.el`, a package to make matching parentheses stand out in color; and also co-authored portions of CC mode.

*   Sam Steingold wrote `midnight.el`, a package for running a command every midnight.

*   Ake Stenhoff and Lars Lindberg wrote `imenu.el`, a framework for browsing indices made from buffer contents.

*   Peter Stephenson wrote `vcursor.el`, which implements a virtual cursor that you can move with the keyboard and use for copying text.

*   Ken Stevens wrote `ispell.el`, a spell-checker interface.

*   Kim F. Storm made many improvements to the Emacs display engine, process support, and networking support. He also wrote `bindat.el`, a package for encoding and decoding binary data; CUA mode, which allows Emacs to emulate the standard CUA key bindings; `ido.el`, a package for selecting buffers and files quickly; `keypad.el` for simplified keypad bindings; and `kmacro.el`, the keyboard macro facility.

*   Martin Stjernholm co-authored CC Mode, a major editing mode for C, C`++`, Objective-C, Java, Pike, CORBA IDL, and AWK code.

*   Steve Strassmann did not write `spook.el`, and even if he did, he really didn’t mean for you to use it in an anarchistic way.

*   Olaf Sylvester wrote `bs.el`, a package for manipulating Emacs buffers.

*   Tibor Šimko and Milan Zamazal wrote `slovak.el`, support for editing text in Slovak language.

*   João Távora wrote many improvements for `flymake.el`, an on-the-fly syntax-checking package.

*   Luc Teirlinck wrote `help-at-pt.el`, providing local help through the keyboard.

*   Jean-Philippe Theberge wrote `thumbs.el`, a package for viewing image files as thumbnails.

*   Spencer Thomas wrote the original `dabbrev.el`, providing a command which completes the partial word before point, based on other nearby words for which it is a prefix. He also wrote the original dumping support.

*   Toru Tomabechi contributed to Tibetan support.

*   Markus Triska wrote `linum.el`, a minor mode that displays line numbers in the left margin.

*   Tom Tromey and Chris Lindblad wrote `tcl.el`, a mode for editing Tcl/Tk source files and running a Tcl interpreter as an Emacs subprocess. Tom Tromey also wrote `bug-reference.el`, providing clickable links to bug reports; and the first version of the Emacs package system.

*   Eli Tziperman wrote `rmail-spam-filter.el`, a spam filter for RMAIL.

*   Daiki Ueno wrote `starttls.el`, support for Transport Layer Security protocol; `sasl-cram.el` and `sasl-digest.el` (with Kenichi Okada), and `sasl.el`, support for Simple Authentication and Security Layer (SASL); `plstore.el` for secure storage of property lists; and the EasyPG (and its predecessor PGG) package, for GnuPG and PGP support.

*   Masanobu Umeda wrote GNUS, a feature-rich reader for Usenet news that was the ancestor of the current Gnus package. He also wrote `rmailsort.el`, a package for sorting messages in RMAIL folders; `metamail.el`, an interface to the Metamail program; `gnus-kill.el`, the Kill File mode for Gnus; `gnus-mh.el`, an mh-e interface for Gnus; `gnus-msg.el`, a mail and post interface for Gnus; and `timezone.el`, providing functions for dealing with time zones.

*   Neil W. Van Dyke wrote `webjump.el`, a Web hotlist package.

*   Didier Verna wrote `rect.el`, a package of functions for operations on rectangle regions of text. He also contributed to Gnus (q.v.).

*   Joakim Verona implemented ImageMagick support.

*   Ulrik Vieth implemented `meta-mode.el`, for editing MetaFont code.

*   Geoffrey Voelker wrote the Windows NT support. He also wrote `dos-w32.el`, functions shared by the MS-DOS and MS-Windows ports of Emacs, and `w32-fns.el`, MS-Windows specific support functions.

*   Johan Vromans wrote `forms.el` and its associated files, a mode for filling in forms. He also wrote `iso-acc.el`, a minor mode providing electric accent keys.

*   Colin Walters wrote Ibuffer, an enhanced buffer menu.

*   Barry Warsaw wrote `cc-mode.el`, a mode for editing C, C`++`, and Java code, based on earlier work by Dave Detlefs, Stewart Clamen, and Richard Stallman; `elp.el`, a profiler for Emacs Lisp programs; `man.el`, a mode for reading Unix manual pages; `regi.el`, providing an AWK-like functionality for use in lisp programs; `reporter.el`, providing customizable bug reporting for lisp packages; and `supercite.el`, a minor mode for quoting sections of mail messages and news articles.

*   Christoph Wedler wrote `antlr-mode.el`, a major mode for ANTLR grammar files.

*   Morten Welinder helped port Emacs to MS-DOS, and introduced face support into the MS-DOS port of Emacs. He also wrote `desktop.el`, facilities for saving some of Emacs’s state between sessions; `timer.el`, the Emacs facility to run commands at a given time or frequency, or when Emacs is idle, and its C-level support code; `pc-win.el`, the MS-DOS “window-system" support; `internal.el`, an “internal terminal" emulator for the MS-DOS port of Emacs; `arc-mode.el`, the mode for editing compressed archives; `s-region.el`, commands for setting the region using the shift key and motion commands; and `dos-fns.el`, functions for use under MS-DOS.

*   Joe Wells wrote the original version of `apropos.el` (q.v.); `resume.el`, support for processing command-line arguments after resuming a suspended Emacs job; and `mail-extr.el`, a package for extracting names and addresses from mail headers, with contributions from Jamie Zawinski.

*   Rodney Whitby and Reto Zimmermann wrote `vhdl-mode.el`, a major mode for editing VHDL source code.

*   John Wiegley was the Emacs maintainer from Emacs 25 onwards. He wrote `align.el`, a set of commands for aligning text according to regular-expression based rules; `isearchb.el` for fast buffer switching; `timeclock.el`, a package for keeping track of time spent on projects; the Bahá’í calendar support; `pcomplete.el`, a programmable completion facility; `remember.el`, a mode for jotting down things to remember; `eudcb-mab.el`, an address book backend for the Emacs Unified Directory Client; and `eshell`, a command shell implemented entirely in Emacs Lisp. He also contributed to Org mode (q.v.).

*   Mike Williams wrote `thingatpt.el`, a library of functions for finding the “thing" (word, line, s-expression) at point.

*   Roland Winkler wrote `proced.el`, a system process editor.

*   Bill Wohler wrote MH-E, the Emacs interface to the MH mail system; making use of earlier work by James R. Larus. Satyaki Das, Peter S. Galbraith, Stephen Gildea, and Jeffrey C. Honig also wrote various MH-E components.

*   Dale R. Worley wrote `emerge.el`, a package for interactively merging two versions of a file.

*   Francis J. Wright wrote `woman.el`, a package for browsing manual pages without the `man` command.

*   Masatake Yamato wrote `ld-script.el`, an editing mode for GNU linker scripts, and contributed subword handling and style guessing in CC mode.

*   Jonathan Yavner wrote `testcover.el`, a package for keeping track of the testing status of Emacs Lisp code; `unsafep.el` to determine if a Lisp form is safe; and the SES spreadsheet package.

*   Ryan Yeske wrote `rcirc.el` a simple Internet Relay Chat client.

*   Ilya Zakharevich and Bob Olson wrote `cperl-mode.el`, a major mode for editing Perl code. Ilya Zakharevich also wrote `tmm.el`, a mode for accessing the Emacs menu bar on a text-mode terminal.

*   Milan Zamazal wrote `czech.el`, support for editing Czech text; `glasses.el`, a package for easier reading of source code that uses illegible identifier names; and `tildify.el`, commands for adding hard spaces to text, TeX, and SGML/HTML files.

*   Victor Zandy wrote `zone.el`, a package for people who like to zone out in front of Emacs.

*   Eli Zaretskii made many standard Emacs features work on MS-DOS and Microsoft Windows. He also wrote `tty-colors.el`, which implements transparent mapping of X colors to tty colors; and `rxvt.el`. He implemented support for bidirectional text, menus on text-mode terminals, and built-in display of line numbers.

*   Jamie Zawinski wrote much of the support for faces and X selections. With Hallvard Furuseth, he wrote the optimizing byte compiler used from Emacs 19 onwards. He also wrote `mailabbrev.el`, a package that provides automatic expansion of mail aliases, and `tar-mode.el`, which provides simple viewing and editing commands for tar files.

*   Andrew Zhilin created the Emacs 22 icons.

*   Shenghuo Zhu wrote `binhex.el`, a package for reading and writing binhex files; `mm-partial.el`, message/partial support for MIME messages; `rfc1843.el`, an HZ decoding package; `uudecode.el`, an Emacs Lisp decoder for uuencoded data; and `webmail.el`, an interface to Web mail. He also wrote several other Gnus components.

*   Ian T. Zimmerman wrote `gametree.el`.

*   Reto Zimmermann wrote `vera-mode.el`.

*   Neal Ziring and Felix S. T. Wu wrote `vi.el`, an emulation of the VI text editor.

*   Ted Zlatanov (as well as his contributions to the Gnus newsreader) wrote an interface to the GnuTLS library, for secure network connections; and a futures facility for the URL library.

*   Detlev Zundel wrote `re-builder.el`, a package for building regexps with visual feedback.
