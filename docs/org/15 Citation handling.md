---
slug: Citation-handling
---

While links (see [Hyperlinks](/docs/org/Hyperlinks)) are often sufficient to refer to external or internal information from Org, they have their limitations when referring to multiple targets or typesetting printed publications.

Org mode provides a more sophisticated markup to “cite" external resources. For example, consider the following Org mode snippet

```lisp
#+bibliography: citationdata.bib

Org mode is used by various communities [cite:teaching: @orgteaching;
and TeX: @orgtex].  [cite/author/caps:@orgtex] uses Org mode to simplify
writing scientific publications, while [cite/author/caps:@orgteaching]
experiment with Org babel to improve teaching.

#+print_bibliography:
```

Org mode will gather citation metadata from the ‘`#+bibliography`’ database and use it to typeset the exported document in arbitrary formats. For example, the snippet below shows ASCII export output.

```lisp
Org mode is used by various communities (teaching: Birkenkrahe, Marcus,
2023, and TeX: Somma, Emmanuele F, 2023).  Somma, Emmanuele F uses Org
mode to simplify writing scientific publications, while Birkenkrahe,
Marcus experiment with Org babel to improve teaching.

Birkenkrahe, Marcus (2023). /Teaching Data Science with Literate
Programming Tools/, MDPI.

Somma, Emmanuele F (2023). /Simplifying LaTeX with ORG-mode in Emacs/,
TUGboat volume.
```

In addition to export, users can use completion to search and insert citations from the bibliography (via `org-cite-insert`). Citations also act like ordinary links, jumping to the citation metadata when “following" them using `org-open-at-point`.

You can customize every aspect (*capability*) of citation handling using built-in or external *citation processors*.

Org mode ships with several built-in citation processors tailored to work with LaTeX export and BibTeX bibliographies (‘`bibtex`’, ‘`biblatex`’, and ‘`natbib`’ processors), or with more generic formats described using [Citation Style Language](https://citationstyles.org/) (‘`csl`’ processor). The default citation processor is ‘`basic`’ - it works with arbitrary export formats and recognizes both BibTeX and CSL bibliographies. More citation processors are distributed as Emacs packages.

Multiple citation processors can be mixed to meet your preferences. Configure `org-cite-activate-processor`, `org-cite-follow-processor`, `org-cite-insert-processor`, and `org-cite-export-processors` to select which processor to use for every citation capability:

### activate

Fontification, tooltip preview, etc.

### follow

At-point actions on citations via `org-open-at-point`.

### insert

Add and edit citations via `org-cite-insert`.

### export

Via different libraries for different target formats.

*   [Citations](/docs/org/Citations)
*   [Citation export processors](/docs/org/Citation-export-processors)
*   [Bibliography printing](/docs/org/Bibliography-printing)
