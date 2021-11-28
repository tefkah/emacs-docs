---
slug: FAQ
---

1.  Something is not working correctly. What should I do?

    Well, you might have guessed it, the first place to look is in the available documentation packaged with AUCTeX. This could be the release notes (in the ‘`RELEASE`’ file) or the news section of the manual in case you are experiencing problems after an upgrade, the ‘`INSTALL`’ file in case you are having problems with the installation, the section about bugs in the manual in case you encountered a bug or the relevant sections in the manual for other related problems.

    If this did not help, you can send a bug report to the AUCTeX bug reporting list by using the command `M-x TeX-submit-bug-report RET`. But before you do this, you can try to get more information about the problem at hand which might also help you locate the cause of the error yourself.

    First, you can try to generate a so-called backtrace which shows the functions involved in a program error. In order to do this, start Emacs with the command line ‘`emacs --debug-init`’ and/or put the line

    ```lisp
    (setq debug-on-error t) 
    ```

    as the first line into your init file. After Emacs has started, you can load a file which triggers the error and a new window should pop up showing the backtrace. If you get such a backtrace, please include it in the bug report.

    Second, you can try to figure out if something in your personal or site configuration triggers the error by starting Emacs without such customizations. You can do this by invoking Emacs with the command line ‘`emacs -q -no-site-file -l auctex`’. The ‘`-l`’ option ‘`auctex.el`’ which you normally do in your init file. After you have started Emacs like this, you can load the file triggering the error. If everything is working now, you know that you have to search either in the site configuration file or your personal init file for statements related to the problem.

2.  What versions of Emacs are supported?

    AUCTeX was tested with GNU Emacs 24. Older versions may work but are unsupported.

3.  What should I do when `./configure` does not find programs like latex?

    This is problem often encountered on Windows. Make sure that the `PATH` environment variable includes the directories containing the relevant programs, as described in [(auctex)Installation under MS Windows](/docs/auctex/Installation-under-MS-Windows) section ‘Installation under MS Windows’ in the AUCTeX manual.

4.  Why doesn’t the completion, style file, or multi-file stuff work?

    It must be enabled first, insert this in your init file:

    ```lisp
    (setq-default TeX-master nil) (setq TeX-parse-self t) (setq TeX-auto-save t) 
    ```

    Read also the chapters about parsing and multifile documents in the manual.

5.  Why doesn’t `TeX-save-document` work?

    `TeX-check-path` has to contain "./" somewhere.

6.  Why is the information in ‘`foo.tex`’ forgotten when I save ‘`foo.bib`’?

    For various reasons, AUCTeX ignores the extension when it stores information about a file, so you should use unique base names for your files. E.g. rename ‘`foo.bib`’ to ‘`foob.bib`’.

7.  Why doesn’t AUCTeX signal when processing a document is done?

    If the message in the minibuffer stays "Type ‘C-c C-l’ to display results of compilation.", you probably have a misconfiguration in your init file (‘`.emacs`’, ‘`init.el`’ or similar). To track this down either search in the ‘`*Messages*`’ buffer for an error message or put `(setq debug-on-error t)` as the first line into your init file, restart Emacs and open a LaTeX file. Emacs will complain loudly by opening a debugging buffer as soon as an error occurs. The information in the debugging buffer can help you find the cause of the error in your init file.

8.  Why does `TeX-next-error` (`` C-c ` ``) fail?

    If `TeX-file-line-error` is set to nil (not the default), these sort of failures might be related to the the fact that when writing the log file, TeX puts information related to a file, including error messages, between a pair of parentheses. In this scenario AUCTeX determines the file where the error happened by parsing the log file and counting the parentheses. This can fail when there are other, unbalanced parentheses present.

    Activating so-called file:line:error messages for the log file usually solves this issue, as these kind of messages are are easier to parse; however, they may lack some details. Activation can be done either in the configuration of your TeX system (consult its manual to see where this is) or by simply keeping the variable `TeX-file-line-error` to the default value of non-nil.

9.  What does AUC stand for?

    AUCTeX came into being at Aalborg University in Denmark. Back then the Danish name of the university was Aalborg Universitetscenter; AUC for short.
