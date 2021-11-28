---
slug: Library-Headers
---

Emacs has conventions for using special comments in Lisp libraries to divide them into sections and give information such as who wrote them. Using a standard format for these items makes it easier for tools (and people) to extract the relevant information. This section explains these conventions, starting with an example:

```lisp
;;; foo.el --- Support for the Foo programming language  -*- lexical-binding: t; -*-

;; Copyright (C) 2010-2021 Your Name
```

```lisp
;; Author: Your Name <yourname@example.com>
;; Maintainer: Someone Else <someone@example.com>
;; Created: 14 Jul 2010
```

```lisp
;; Keywords: languages
;; URL: https://example.com/foo

;; This file is not part of GNU Emacs.

;; This file is free software…
…
;; along with this file.  If not, see <https://www.gnu.org/licenses/>.
```

The very first line should have this format:

```lisp
;;; filename --- description  -*- lexical-binding: t; -*-
```

The description should be contained in one line. If the file needs to set more variables in the ‘`-*-`’ specification, add it after `lexical-binding`. If this would make the first line too long, use a Local Variables section at the end of the file.

The copyright notice usually lists your name (if you wrote the file). If you have an employer who claims copyright on your work, you might need to list them instead. Do not say that the copyright holder is the Free Software Foundation (or that the file is part of GNU Emacs) unless your file has been accepted into the Emacs distribution. For more information on the form of copyright and license notices, see [the guide on the GNU website](https://www.gnu.org/licenses/gpl-howto.html).

After the copyright notice come several *header comment* lines, each beginning with ‘`;; header-name:`’. Here is a table of the conventional possibilities for `header-name`:

### ‘`Author`’

This line states the name and email address of at least the principal author of the library. If there are multiple authors, list them on continuation lines led by `;;` and a tab or at least two spaces. We recommend including a contact email address, of the form ‘`<…>`’. For example:

```lisp
;; Author: Your Name <yourname@example.com>
;;      Someone Else <someone@example.com>
;;      Another Person <another@example.com>
```

### ‘`Maintainer`’

This header has the same format as the Author header. It lists the person(s) who currently maintain(s) the file (respond to bug reports, etc.).

If there is no maintainer line, the person(s) in the Author field is/are presumed to be the maintainers. Some files in Emacs use ‘`emacs-devel@gnu.org`’ for the maintainer, which means the author is no longer responsible for the file, and that it is maintained as part of Emacs.

### ‘`Created`’

This optional line gives the original creation date of the file, and is for historical interest only.

### ‘`Version`’

If you wish to record version numbers for the individual Lisp program, put them in this line. Lisp files distributed with Emacs generally do not have a ‘`Version`’ header, since the version number of Emacs itself serves the same purpose. If you are distributing a collection of multiple files, we recommend not writing the version in every file, but only the main one.

### ‘`Keywords`’

This line lists keywords for the `finder-by-keyword` help command. Please use that command to see a list of the meaningful keywords. The command `M-x checkdoc-package-keywords RET` will find and display any keywords that are not in `finder-known-keywords`. If you set the variable `checkdoc-package-keywords-flag` non-`nil`, checkdoc commands will include the keyword verification in its checks.

This field is how people will find your package when they’re looking for things by topic. To separate the keywords, you can use spaces, commas, or both.

The name of this field is unfortunate, since people often assume it is the place to write arbitrary keywords that describe their package, rather than just the relevant Finder keywords.

### ‘`Homepage`’

### ‘`URL`’

These lines state the homepage of the library.

### ‘`Package-Version`’

If ‘`Version`’ is not suitable for use by the package manager, then a package can define ‘`Package-Version`’; it will be used instead. This is handy if ‘`Version`’ is an RCS id or something else that cannot be parsed by `version-to-list`. See [Packaging Basics](Packaging-Basics).

### ‘`Package-Requires`’

If this exists, it names packages on which the current package depends for proper operation. See [Packaging Basics](Packaging-Basics). This is used by the package manager both at download time (to ensure that a complete set of packages is downloaded) and at activation time (to ensure that a package is only activated if all its dependencies have been).

Its format is a list of lists on a single line. The `car` of each sub-list is the name of a package, as a symbol. The `cadr` of each sub-list is the minimum acceptable version number, as a string that can be parsed by `version-to-list`. An entry that lacks a version (i.e., an entry which is just a symbol, or a sub-list of one element) is equivalent to entry with version "0". For instance:

```lisp
;; Package-Requires: ((gnus "1.0") (bubbles "2.7.2") cl-lib (seq))
```

The package code automatically defines a package named ‘`emacs`’ with the version number of the currently running Emacs. This can be used to require a minimal version of Emacs for a package.

Just about every Lisp library ought to have the ‘`Author`’ and ‘`Keywords`’ header comment lines. Use the others if they are appropriate. You can also put in header lines with other header names—they have no standard meanings, so they can’t do any harm.

We use additional stylized comments to subdivide the contents of the library file. These should be separated from anything else by blank lines. Here is a table of them:

### ‘`;;; Commentary:`’

This begins introductory comments that explain how the library works. It should come right after the copying permissions, terminated by a ‘`Change Log`’, ‘`History`’ or ‘`Code`’ comment line. This text is used by the Finder package, so it should make sense in that context.

### ‘`;;; Change Log:`’

This begins an optional log of changes to the file over time. Don’t put too much information in this section—it is better to keep the detailed logs in a version control system (as Emacs does) or in a separate `ChangeLog` file. ‘`History`’ is an alternative to ‘`Change Log`’.

### ‘`;;; Code:`’

This begins the actual code of the program.

### ‘`;;; filename ends here`’

This is the *footer line*; it appears at the very end of the file. Its purpose is to enable people to detect truncated versions of the file from the lack of a footer line.
