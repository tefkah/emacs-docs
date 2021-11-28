---
slug: Adding-Export-Back_002dends
---

Org’s export engine makes it easy for writing new back-ends. The framework on which the engine was built makes it easy to derive new back-ends from existing ones.

The two main entry points to the export engine are: `org-export-define-backend` and `org-export-define-derived-backend`. To grok these functions, see ‘`ox-latex.el`’ for an example of defining a new back-end from scratch, and ‘`ox-beamer.el`’ for an example of deriving from an existing engine.

For creating a new back-end from scratch, first set its name as a symbol in an alist consisting of elements and export functions. To make the back-end visible to the export dispatcher, set `:menu-entry` keyword. For export options specific to this back-end, set the `:options-alist`.

For creating a new back-end from an existing one, set `:translate-alist` to an alist of export functions. This alist replaces the parent back-end functions.

For complete documentation, see [the Org Export Reference on Worg](https://orgmode.org/worg/dev/org-export-reference.html).
