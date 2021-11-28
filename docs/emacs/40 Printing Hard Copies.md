---
slug: Printing
---

Emacs provides commands for printing hardcopies of either an entire buffer or part of one. You can invoke the printing commands directly, as detailed below, or using the ‘`File`’ menu on the menu bar.

Aside from the commands described in this section, you can also print hardcopies from Dired (see [Operating on Files](Operating-on-Files)) and the diary (see [Displaying the Diary](Displaying-the-Diary)). You can also “print" an Emacs buffer to HTML with the command `M-x htmlfontify-buffer`, which converts the current buffer to a HTML file, replacing Emacs faces with CSS-based markup. Furthermore, Org mode allows you to print Org files to a variety of formats, such as PDF (see [Org Mode](Org-Mode)).

### `M-x print-buffer`

Print hardcopy of current buffer with page headings containing the file name and page number.

### `M-x lpr-buffer`

Print hardcopy of current buffer without page headings.

### `M-x print-region`

Like `print-buffer` but print only the current region.

### `M-x lpr-region`

Like `lpr-buffer` but print only the current region.

On most operating systems, the above hardcopy commands submit files for printing by calling the `lpr` program. To change the printer program, customize the variable `lpr-command`. To specify extra switches to give the printer program, customize the list variable `lpr-switches`. Its value should be a list of option strings, each of which should start with ‘`-`’ (e.g., the option string `"-w80"` specifies a line width of 80 columns). The default is the empty list, `nil`.

To specify the printer to use, set the variable `printer-name`. The default, `nil`, specifies the default printer. If you set it to a printer name (a string), that name is passed to `lpr` with the ‘`-P`’ switch; if you are not using `lpr`, you should specify the switch with `lpr-printer-switch`.

The variable `lpr-headers-switches` similarly specifies the extra switches to use to make page headers. The variable `lpr-add-switches` controls whether to supply ‘`-T`’ and ‘`-J`’ options (suitable for `lpr`) to the printer program: `nil` means don’t add them (this should be the value if your printer program is not compatible with `lpr`).

|                                                |    |                                               |
| :--------------------------------------------- | -- | :-------------------------------------------- |
| • [PostScript](PostScript)                     |    | Printing buffers or regions as PostScript.    |
| • [PostScript Variables](PostScript-Variables) |    | Customizing the PostScript printing commands. |
| • [Printing Package](Printing-Package)         |    | An optional advanced printing interface.      |
