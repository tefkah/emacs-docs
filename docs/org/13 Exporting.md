---
slug: Exporting
---

At some point you might want to print your notes, publish them on the web, or share them with people not using Org. Org can convert and export documents to a variety of other formats while retaining as much structure (see [Document Structure](/docs/org/Document-Structure)) and markup (see [Markup for Rich Contents](/docs/org/Markup-for-Rich-Contents)) as possible.

The libraries responsible for translating Org files to other formats are called *backends*. Org ships with support for the following backends:

- *ascii* (ASCII format)
- *beamer* (LaTeX Beamer format)
- *html* (HTML format)
- *icalendar* (iCalendar format)
- *latex* (LaTeX format)
- *md* (Markdown format)
- *odt* (OpenDocument Text format)
- *org* (Org format)
- *texinfo* (Texinfo format)
- *man* (Man page format)

Users can install libraries for additional formats from the Emacs packaging system. For easy discovery, these packages have a common naming scheme: `ox-NAME`, where *NAME* is a format. For example, `ox-koma-letter` for *koma-letter* backend. More libraries can be found in the '`org-contrib`' repository (see [Installation](/docs/org/Installation)).

Org only loads backends for the following formats by default: ASCII, HTML, iCalendar, LaTeX, and ODT. Additional backends can be loaded in either of two ways: by configuring the `org-export-backends` variable, or by requiring libraries in the Emacs init file. For example, to load the Markdown backend, add this to your Emacs config:

```lisp
(require 'ox-md)

```
