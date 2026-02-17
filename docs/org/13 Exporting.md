---
slug: Exporting
---

At some point you might want to print your notes, publish them on the web, or share them with people not using Org. Org can convert and export documents to a variety of other formats while retaining as much structure (see [Document Structure](/docs/org/Document-Structure)) and markup (see [Markup for Rich Contents](/docs/org/Markup-for-Rich-Contents)) as possible.

The libraries responsible for translating Org files to other formats are called *backends*. Org ships with support for the following backends:

*   *ascii* (ASCII format)
*   *beamer* (LaTeX Beamer format)
*   *html* (HTML format)
*   *icalendar* (iCalendar format)
*   *latex* (LaTeX format)
*   *md* (Markdown format)
*   *odt* (OpenDocument Text format)
*   *org* (Org format)
*   *texinfo* (Texinfo format)
*   *man* (Man page format)

Users can install libraries for additional formats from the Emacs packaging system. For easy discovery, these packages have a common naming scheme: `ox-NAME`, where `NAME` is a format. For example, `ox-koma-letter` for *koma-letter* backend. More libraries can be found in the ‘`org-contrib`’ repository (see [Installation](/docs/org/Installation)).

Org only loads backends for the following formats by default: ASCII, HTML, iCalendar, LaTeX, and ODT. Additional backends can be loaded in either of two ways: by configuring the `org-export-backends` variable, or by requiring libraries in the Emacs init file. For example, to load the Markdown backend, add this to your Emacs config:

```lisp
(require 'ox-md)
```

*   [The Export Dispatcher](/docs/org/The-Export-Dispatcher)
*   [Export Settings](/docs/org/Export-Settings)
*   [Table of Contents](/docs/org/Table-of-Contents)
*   [Include Files](/docs/org/Include-Files)
*   [Macro Replacement](/docs/org/Macro-Replacement)
*   [Comment Lines](/docs/org/Comment-Lines)
*   [ASCII/Latin-1/UTF-8 export](/docs/org/ASCII_002fLatin_002d1_002fUTF_002d8-export)
*   [Beamer Export](/docs/org/Beamer-Export)
*   [HTML Export](/docs/org/HTML-Export)
*   [LaTeX Export](/docs/org/LaTeX-Export)
*   [Markdown Export](/docs/org/Markdown-Export)
*   [OpenDocument Text Export](/docs/org/OpenDocument-Text-Export)
*   [Org Export](/docs/org/Org-Export)
*   [Texinfo Export](/docs/org/Texinfo-Export)
*   [iCalendar Export](/docs/org/iCalendar-Export)
*   [Other Built-in Backends](/docs/org/Other-Built_002din-Backends)
*   [Advanced Export Configuration](/docs/org/Advanced-Export-Configuration)
*   [Export Region](/docs/org/Export-Region)
