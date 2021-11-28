---
slug: MS_002dDOS-Printing
---

Printing commands, such as `lpr-buffer` (see [Printing](/docs/emacs/Printing)) and `ps-print-buffer` (see [PostScript](/docs/emacs/PostScript)) can work on MS-DOS by sending the output to one of the printer ports, if a POSIX-style `lpr` program is unavailable. The same Emacs variables control printing on all systems, but in some cases they have different default values on MS-DOS.

See [Windows Printing](/docs/emacs/Windows-Printing), for details about setting up printing to a networked printer.

Some printers expect DOS codepage encoding of non-ASCII text, even though they are connected to a Windows machine that uses a different encoding for the same locale. For example, in the Latin-1 locale, DOS uses codepage 850 whereas Windows uses codepage 1252. See [MS-DOS and MULE](/docs/emacs/MS_002dDOS-and-MULE). When you print to such printers from Windows, you can use the `C-x RET c` (`universal-coding-system-argument`) command before `M-x lpr-buffer`; Emacs will then convert the text to the DOS codepage that you specify. For example, `C-x RET c cp850-dos RET M-x lpr-region RET` will print the region while converting it to the codepage 850 encoding.

For backwards compatibility, the value of `dos-printer` (`dos-ps-printer`), if it has a value, overrides the value of `printer-name` (`ps-printer-name`), on MS-DOS.
