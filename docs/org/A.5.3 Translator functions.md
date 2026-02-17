---
slug: Translator-functions
---

Orgtbl mode has built-in translator functions: `orgtbl-to-csv` (comma-separated values), `orgtbl-to-tsv` (TAB-separated values), `orgtbl-to-latex`, `orgtbl-to-html`, `orgtbl-to-texinfo`, `orgtbl-to-unicode` and `orgtbl-to-orgtbl`. They use the generic translator, `orgtbl-to-generic`, which delegates translations to various export backends.

Properties passed to the function through the ‘`ORGTBL SEND`’ line take precedence over properties defined inside the function. For example, this overrides the default LaTeX line endings, `\\`, with `\\[2mm]`:

```lisp
#+ORGTBL: SEND test orgtbl-to-latex :lend " \\\\[2mm]"
```

For a new language translator, define a converter function. It can be a generic function, such as shown in this example. It marks a beginning and ending of a table with ‘`!BTBL!`’ and ‘`!ETBL!`’; a beginning and ending of lines with ‘`!BL!`’ and ‘`!EL!`’; and uses a TAB for a field separator:

```lisp
(defun orgtbl-to-language (table params)
  "Convert the orgtbl-mode TABLE to language."
  (orgtbl-to-generic
   table
   (org-combine-plists
    '(:tstart "!BTBL!" :tend "!ETBL!" :lstart "!BL!" :lend "!EL!" :sep "\t")
    params)))
```

The documentation for the `orgtbl-to-generic` function shows a complete list of parameters, each of which can be passed through to `orgtbl-to-latex`, `orgtbl-to-texinfo`, and any other function using that generic function.

For complicated translations the generic translator function could be replaced by a custom translator function. Such a custom function must take two arguments and return a single string containing the formatted table. The first argument is the table whose lines are a list of fields or the symbol `hline`. The second argument is the property list consisting of parameters specified in the ‘`#+ORGTBL: SEND`’ line. Please share your translator functions by posting them to the Org users mailing list, at [mailto:emacs-orgmode@gnu.org](mailto:mailto:emacs-orgmode@gnu.org).
