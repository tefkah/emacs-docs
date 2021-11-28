---
slug: Document-View
---

DocView mode is a major mode for viewing DVI, PostScript (PS), PDF, OpenDocument, and Microsoft Office documents. It provides features such as slicing, zooming, and searching inside documents. It works by converting the document to a set of images using the `gs` (GhostScript) or `mudraw`/`pdfdraw` (MuPDF) commands and other external tools [^1], and displaying those images.

When you visit a document file that can be displayed with DocView mode, Emacs automatically uses that mode [^2]. As an exception, when you visit a PostScript file, Emacs switches to PS mode, a major mode for editing PostScript files as text; however, it also enables DocView minor mode, so you can type `C-c C-c` to view the document with DocView. In either DocView mode or DocView minor mode, repeating `C-c C-c` (`doc-view-toggle-display`) toggles between DocView and the underlying file contents.

When you visit a file which would normally be handled by DocView mode but some requirement is not met (e.g., you operate in a terminal frame or Emacs has no PNG support), you are queried if you want to view the document’s contents as plain text. If you confirm, the buffer is put in text mode and DocView minor mode is activated. Thus, by typing `C-c C-c` you switch to the fallback mode. With another `C-c C-c` you return to DocView mode. The plain text contents can also be displayed from within DocView mode by typing `C-c C-t` (`doc-view-open-text`).

You can explicitly enable DocView mode with the command `M-x doc-view-mode`. You can toggle DocView minor mode with `M-x doc-view-minor-mode`.

When DocView mode starts, it displays a welcome screen and begins formatting the file, page by page. It displays the first page once that has been formatted.

To kill the DocView buffer, type `k` (`doc-view-kill-proc-and-buffer`). To bury it, type `q` (`quit-window`).

|                                                |    |                                               |
| :--------------------------------------------- | -- | :-------------------------------------------- |
| • [Navigation](/docs/emacs/DocView-Navigation) |    | Navigating DocView buffers.                   |
| • [Searching](/docs/emacs/DocView-Searching)   |    | Searching inside documents.                   |
| • [Slicing](/docs/emacs/DocView-Slicing)       |    | Specifying which part of a page is displayed. |
| • [Conversion](/docs/emacs/DocView-Conversion) |    | Influencing and triggering conversion.        |

[^1]: For PostScript files, GhostScript is a hard requirement. For DVI files, `dvipdf` or `dvipdfm` is needed. For OpenDocument and Microsoft Office documents, the `unoconv` tool is needed.

[^2]: The needed external tools for the document type must be available, and Emacs must be running in a graphical frame and have PNG image support. If these requirements is not fulfilled, Emacs falls back to another major mode.
