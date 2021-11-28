---
slug: Exporting
---

At some point you might want to print your notes, publish them on the web, or share them with people not using Org. Org can convert and export documents to a variety of other formats while retaining as much structure (see [Document Structure](Document-Structure)) and markup (see [Markup for Rich Contents](Markup-for-Rich-Contents)) as possible.

The libraries responsible for translating Org files to other formats are called *back-ends*. Org ships with support for the following back-ends:

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

Users can install libraries for additional formats from the Emacs packaging system. For easy discovery, these packages have a common naming scheme: `ox-NAME`, where `NAME` is a format. For example, `ox-koma-letter` for *koma-letter* back-end. More libraries can be found in the ‘`contrib/`’ directory (see [Installation](Installation)).

Org only loads back-ends for the following formats by default: ASCII, HTML, iCalendar, LaTeX, and ODT. Additional back-ends can be loaded in either of two ways: by configuring the `org-export-backends` variable, or by requiring libraries in the Emacs init file. For example, to load the Markdown back-end, add this to your Emacs config:

```lisp
(require 'ox-md)
```

|                                                                            |    |                                            |
| :------------------------------------------------------------------------- | -- | :----------------------------------------- |
| • [The Export Dispatcher](The-Export-Dispatcher)                           |    | The main interface.                        |
| • [Export Settings](Export-Settings)                                       |    | Common export settings.                    |
| • [Table of Contents](Table-of-Contents)                                   |    | The if and where of the table of contents. |
| • [Include Files](Include-Files)                                           |    | Include additional files into a document.  |
| • [Macro Replacement](Macro-Replacement)                                   |    | Use macros to create templates.            |
| • [Comment Lines](Comment-Lines)                                           |    | What will not be exported.                 |
| • [ASCII/Latin-1/UTF-8 export](ASCII_002fLatin_002d1_002fUTF_002d8-export) |    | Exporting to flat files with encoding.     |
| • [Beamer Export](Beamer-Export)                                           |    | Producing presentations and slides.        |
| • [HTML Export](HTML-Export)                                               |    | Exporting to HTML.                         |
| • [LaTeX Export](LaTeX-Export)                                             |    | Exporting to LaTeX and processing to PDF.  |
| • [Markdown Export](Markdown-Export)                                       |    | Exporting to Markdown.                     |
| • [OpenDocument Text Export](OpenDocument-Text-Export)                     |    | Exporting to OpenDocument Text.            |
| • [Org Export](Org-Export)                                                 |    | Exporting to Org.                          |
| • [Texinfo Export](Texinfo-Export)                                         |    | Exporting to Texinfo.                      |
| • [iCalendar Export](iCalendar-Export)                                     |    | Exporting to iCalendar.                    |
| • [Other Built-in Back-ends](Other-Built_002din-Back_002dends)             |    | Exporting to a man page.                   |
| • [Advanced Export Configuration](Advanced-Export-Configuration)           |    | Fine-tuning the export output.             |
| • [Export in Foreign Buffers](Export-in-Foreign-Buffers)                   |    | Author tables and lists in Org syntax.     |
