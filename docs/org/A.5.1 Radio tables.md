---
slug: Radio-tables
---

Radio tables are target locations for translated tables that are not near their source. Org finds the target location and inserts the translated table.

The key to finding the target location is the magic words ‘`BEGIN/END RECEIVE ORGTBL`’. They have to appear as comments in the current mode. If the mode is C, then:

```lisp
/* BEGIN RECEIVE ORGTBL table_name */
/* END RECEIVE ORGTBL table_name */
```

At the location of source, Org needs a special line to direct Orgtbl to translate and to find the target for inserting the translated table. For example:

```lisp
#+ORGTBL: SEND table_name translation_function arguments ...
```

‘`table_name`’ is the table’s reference name, which is also used in the receiver lines, and the ‘`translation_function`’ is the Lisp function that translates. This line, in addition, may also contain alternating key and value arguments at the end. The translation function gets these values as a property list. A few standard parameters are already recognized and acted upon before the translation function is called:

### ‘`:skip N`’

Skip the first N lines of the table. Hlines do count; include them if they are to be skipped.

### ‘`:skipcols (n1 n2 ...)`’

List of columns to be skipped. First Org automatically discards columns with calculation marks and then sends the table to the translator function, which then skips columns as specified in ‘`skipcols`’.

To keep the source table intact in the buffer without being disturbed when the source file is compiled or otherwise being worked on, use one of these strategies:

*   Place the table in a block comment. For example, in C mode you could wrap the table between ‘`/*`’ and ‘`*/`’ lines.
*   Put the table after an “end" statement. For example `\bye` in TeX and `\end{document}` in LaTeX.
*   Comment and un-comment each line of the table during edits. The `M-x orgtbl-toggle-comment` command makes toggling easy.
