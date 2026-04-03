---
slug: Comment-Tips
---

We recommend these conventions for comments:

### '`;`'

Comments that start with a single semicolon, '`;`', should all be aligned to the same column on the right of the source code. Such comments usually explain how the code on that line does its job. For example:

```
(setq base-version-list                 ; There was a base
      (assoc (substring fn 0 start-vn)  ; version to which
             file-version-assoc-list))  ; this looks like
                                        ; a subversion.

```

### '`;;`'

Comments that start with two semicolons, '`;;`', should be aligned to the same level of indentation as the code. Such comments usually describe the purpose of the following lines or the state of the program at that point. For example:

```
(prog1 (setq auto-fill-function
             ...
             ...
  ;; Update mode line.
  (force-mode-line-update)))

```

We also normally use two semicolons for comments outside functions.

```
;; This Lisp code is run in Emacs when it is to operate as
;; a server for other processes.

```

If a function has no documentation string, it should instead have a two-semicolon comment right before the function, explaining what the function does and how to call it properly. Explain precisely what each argument means and how the function interprets its possible values. It is much better to convert such comments to documentation strings, though.

### '`;;;`'

Comments that start with three (or more) semicolons, '`;;;`', should start at the left margin. We use them for comments that should be considered a heading by Outline minor mode. By default, comments starting with at least three semicolons (followed by a single space and a non-whitespace character) are considered section headings, comments starting with two or fewer are not.

(Historically, triple-semicolon comments have also been used for commenting out lines within a function, but this use is discouraged in favor of using just two semicolons. This also applies when commenting out entire functions; when doing that use two semicolons as well.)

Three semicolons are used for top-level sections, four for sub-sections, five for sub-sub-sections and so on.

Typically libraries have at least four top-level sections. For example when the bodies of all of these sections are hidden:

```
;;; backquote.el --- implement the ` Lisp construct...
;;; Commentary:...
;;; Code:...
;;; backquote.el ends here

```

(In a sense the last line is not a section heading as it must never be followed by any text; after all it marks the end of the file.)

For longer libraries it is advisable to split the code into multiple sections. This can be done by splitting the '`Code:`' section into multiple sub-sections. Even though that was the only recommended approach for a long time, many people have chosen to use multiple top-level code sections instead. You may chose either style.

Using multiple top-level code sections has the advantage that it avoids introducing an additional nesting level but it also means that the section named '`Code`' does not contain all the code, which is awkward. To avoid that, you should put no code at all inside that section; that way it can be considered a separator instead of a section heading.

Finally, we recommend that you don't end headings with a colon or any other punctuation for that matter. For historic reasons the '`Code:`' and '`Commentary:`' headings end with a colon, but we recommend that you don't do the same for other headings anyway.

Generally speaking, the `M-;` (`comment-dwim`) command automatically starts a comment of the appropriate type; or indents an existing comment to the right place, depending on the number of semicolons. See [Manipulating Comments](https://www.gnu.org/software/emacs/manual/html_mono/emacs.html#Comments) in The GNU Emacs Manual.
