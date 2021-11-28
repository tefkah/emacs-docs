---
slug: Wishlist
---

*   Documentation lookup for macros

    A parser could gather information about which macros are defined in which LaTeX packages and store the information in a hashtable which can be used in a backend for `TeX-doc` in order to open the matching documentation for a given macro. The information could also be used to insert an appropriate ‘`\usepackage`’ statement if the user tries to insert a macro for which the respective package has not been requested yet.

*   Improvements to error reporting

    Fringe indicators for errors in the main text would be nice.

*   A math entry grid

    A separate frame with a table of math character graphics to click on in order to insert the respective sequence into the buffer (cf. the “grid" of x-symbol).

*   Crossreferencing support

    It would be nice if you could index process your favorite collection of ‘`.dtx`’ files (such as the LaTeX source), just call a command on arbitrary control sequence, and get either the DVI viewer opened right at the definition of that macro (using Source Specials), or the source code of the ‘`.dtx`’ file.

*   Better plain TeX support

    For starters, `LaTeX-math-mode` is not very LaTeX-specific in the first place, and similar holds for indentation and formatting.

*   Page count when compiling should (optionally) go to modeline of the window where the compilation command was invoked, instead of the output window. Suggested by Karsten Tinnefeld ﹤tinnefeld\@irb.informatik.uni-dortmund.de﹥.

*   Command to insert a macrodefinition in the preamble, without moving point from the current location. Suggested by "Jeffrey C. Ely" ﹤ely\@nwu.edu﹥.

*   A database of all commands defined in all stylefiles. When a command or environment gets entered that is provided in one of the styles, insert the appropriate `\usepackage` in the preamble.

*   A way to add and overwrite math mode entries in style files, and to decide where they should be. Suggested by Remo Badii ﹤Remo.Badii\@psi.ch﹥.

*   Create template for (first) line of tabular environment.

*   I think prompting for the master is the intended behaviour. It corresponds to a ‘shared’ value for TeX-master.

    There should probably be a ‘none’ value which wouldn’t query for the master, but instead disable all features that relies on TeX-master.

    This default value for TeX-master could then be controled with mapping based on the extension.

*   Use index files (when available) to speed up `C-c C-m include <RET>`.

*   Option not to calculate very slow completions like for `C-c C-m include <RET>`.

*   Font menu should be created from `TeX-font-list`.

*   Installation procedure written purely in emacs lisp.

*   Included PostScript files should also be counted as part of the document.

*   A nice hierarchical by-topic organization of all officially documented LaTeX macros, available from the menu bar.

*   `TeX-command-default` should be set from the master file, if not set locally. Suggested by Peter Whaite ‘`<peta@cim.mcgill.ca>`’.

*   Make AUCTeX work with ‘`crypt++`’. Suggested by Chris Moore ‘`<Chris.Moore@src.bae.co.uk>`’.

*   Make AUCTeX work with ‘`longlines`’. This would also apply to preview-latex, though it might make sense to unify error processing before attempting this.

*   The ‘`Spell`’ command should apply to all files in a document. Maybe it could try to restrict to files that have been modified since last spell check? Suggested by Ravinder Bhumbla ‘`<rbhumbla@ucsd.edu>`’.

*   Make ﹤.﹥ check for abbreviations and sentences ending with capital letters.

*   Use Emacs 19 minibuffer history to choose between previewers, and other stuff. Suggested by John Interrante ‘`<interran@uluru.Stanford.EDU>`’.

*   Documentation of variables that can be set in a style hook.

    We need a list of what can safely be done in an ordinary style hook. You can not set a variable that AUCTeX depends on, unless AUCTeX knows that it has to run the style hooks first.

    Here is the start of such a list.

    ### `LaTeX-add-environments`

    ### `TeX-add-symbols`

    ### `LaTeX-add-labels`

    ### `LaTeX-add-bibliographies`

    ### `LaTeX-largest-level`

*   Outline should be (better) supported in TeX mode.

    At least, support headers, trailers, as well as TeX-outline-extra.

*   `TeX-header-start` and `TeX-trailer-end`.

    We might want these, just for fun (and outlines)

*   Plain TeX and LaTeX specific header and trailer expressions.

    We should have a way to globally specify the default value of the header and trailer regexps.

*   Get closer to original `TeX-mode` keybindings.

    A third initialization file (‘`tex-mode.el`’) containing an emulator of the standard `TeX-mode` would help convince some people to change to AUCTeX.

*   Use markers in `TeX-error-list` to remember buffer positions in order to be more robust with regard to line numbers and changed files.

*   Finish the Texinfo mode. For one thing, many Texinfo mode commands do not accept braces around their arguments.

*   Hook up the letter environment with ‘`bbdb.el`’.
