---
slug: Windows-Printing
---

Printing commands, such as `lpr-buffer` (see [Printing](/docs/emacs/Printing)) and `ps-print-buffer` (see [PostScript](/docs/emacs/PostScript)) work in MS-DOS and MS-Windows by sending the output to one of the printer ports, if a POSIX-style `lpr` program is unavailable. The same Emacs variables control printing on all systems, but in some cases they have different default values on MS-DOS and MS-Windows.

Emacs on MS Windows attempts to determine your default printer automatically (using the function `default-printer-name`). But in some rare cases this can fail, or you may wish to use a different printer from within Emacs. The rest of this section explains how to tell Emacs which printer to use.

If you want to use your local printer, then set the Lisp variable `lpr-command` to `""` (its default value on Windows) and `printer-name` to the name of the printer port—for example, `"PRN"`, the usual local printer port, or `"LPT2"`, or `"COM1"` for a serial printer. You can also set `printer-name` to a file name, in which case “printed" output is actually appended to that file. If you set `printer-name` to `"NUL"`, printed output is silently discarded (sent to the system null device).

You can also use a printer shared by another machine by setting `printer-name` to the UNC share name for that printer—for example, `"//joes_pc/hp4si"`. (It doesn’t matter whether you use forward slashes or backslashes here.) To find out the names of shared printers, run the command ‘`net view`’ from the command prompt to obtain a list of servers, and ‘`net view server-name`’ to see the names of printers (and directories) shared by that server. Alternatively, click the ‘`Network Neighborhood`’ icon on your desktop, and look for machines that share their printers via the network.

If the printer doesn’t appear in the output of ‘`net view`’, or if setting `printer-name` to the UNC share name doesn’t produce a hardcopy on that printer, you can use the ‘`net use`’ command to connect a local print port such as `"LPT2"` to the networked printer. For example, typing `net use LPT2: \\joes_pc\hp4si`[^1] causes Windows to *capture* the `LPT2` port and redirect the printed material to the printer connected to the machine `joes_pc`. After this command, setting `printer-name` to `"LPT2"` should produce the hardcopy on the networked printer.

With some varieties of Windows network software, you can instruct Windows to capture a specific printer port such as `"LPT2"`, and redirect it to a networked printer via the `Control Panel->Printers`<!-- /@w --> applet instead of ‘`net use`’.

If you set `printer-name` to a file name, it’s best to use an absolute file name. Emacs changes the working directory according to the default directory of the current buffer, so if the file name in `printer-name` is relative, you will end up with several such files, each one in the directory of the buffer from which the printing was done.

If the value of `printer-name` is correct, but printing does not produce the hardcopy on your printer, it is possible that your printer does not support printing plain text (some cheap printers omit this functionality). In that case, try the PostScript print commands, described below.

The commands `print-buffer` and `print-region` call the `pr` program, or use special switches to the `lpr` program, to produce headers on each printed page. MS-DOS and MS-Windows don’t normally have these programs, so by default, the variable `lpr-headers-switches` is set so that the requests to print page headers are silently ignored. Thus, `print-buffer` and `print-region` produce the same output as `lpr-buffer` and `lpr-region`, respectively. If you do have a suitable `pr` program (for example, from GNU Coreutils), set `lpr-headers-switches` to `nil`; Emacs will then call `pr` to produce the page headers, and print the resulting output as specified by `printer-name`.

Finally, if you do have an `lpr` work-alike, you can set the variable `lpr-command` to `"lpr"`. Then Emacs will use `lpr` for printing, as on other systems. (If the name of the program isn’t `lpr`, set `lpr-command` to the appropriate value.) The variable `lpr-switches` has its standard meaning when `lpr-command` is not `""`. If the variable `printer-name` has a string value, it is used as the value for the `-P` option to `lpr`, as on Unix.

A parallel set of variables, `ps-lpr-command`, `ps-lpr-switches`, and `ps-printer-name` (see [PostScript Variables](/docs/emacs/PostScript-Variables)), defines how PostScript files should be printed. These variables are used in the same way as the corresponding variables described above for non-PostScript printing. Thus, the value of `ps-printer-name` is used as the name of the device (or file) to which PostScript output is sent, just as `printer-name` is used for non-PostScript printing. (There are two distinct sets of variables in case you have two printers attached to two different ports, and only one of them is a PostScript printer.)

The default value of the variable `ps-lpr-command` is `""`, which causes PostScript output to be sent to the printer port specified by `ps-printer-name`; but `ps-lpr-command` can also be set to the name of a program which will accept PostScript files. Thus, if you have a non-PostScript printer, you can set this variable to the name of a PostScript interpreter program (such as Ghostscript). Any switches that need to be passed to the interpreter program are specified using `ps-lpr-switches`. (If the value of `ps-printer-name` is a string, it will be added to the list of switches as the value for the `-P` option. This is probably only useful if you are using `lpr`, so when using an interpreter typically you would set `ps-printer-name` to something other than a string so it is ignored.)

For example, to use Ghostscript for printing on the system’s default printer, put this in your `.emacs` file:

```lisp
(setq ps-printer-name t)
(setq ps-lpr-command "D:/gs6.01/bin/gswin32c.exe")
(setq ps-lpr-switches '("-q" "-dNOPAUSE" "-dBATCH"
                        "-sDEVICE=mswinpr2"
                        "-sPAPERSIZE=a4"))
```

(This assumes that Ghostscript is installed in the `D:/gs6.01` directory.)

[^1]: Note that the ‘`net use`’ command requires the UNC share name to be typed with the Windows-style backslashes, while the value of `printer-name` can be set with either forward- or backslashes.
