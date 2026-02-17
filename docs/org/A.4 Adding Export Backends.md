---
slug: Adding-Export-Backends
---

Org’s export engine makes it easy for writing new backends. The framework on which the engine was built makes it easy to derive new backends from existing ones.

The two main entry points to the export engine are: `org-export-define-backend` and `org-export-define-derived-backend`. To grok these functions, see ‘`ox-latex.el`’ for an example of defining a new backend from scratch, and ‘`ox-beamer.el`’ for an example of deriving from an existing engine.

For creating a new backend from scratch, first set its name as a symbol in an alist consisting of elements and export functions. To make the backend visible to the export dispatcher, set `:menu-entry` keyword. For export options specific to this backend, set the `:options-alist`.

For creating a new backend from an existing one, set `:translate-alist` to an alist of export functions. This alist replaces the parent backend functions.

For complete documentation, see [the Org Export Reference on Worg](https://orgmode.org/worg/dev/org-export-reference.html).
