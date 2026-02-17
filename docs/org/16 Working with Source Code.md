---
slug: Working-with-Source-Code
---

Source code here refers to any plain text collection of computer instructions, possibly with comments, written using a human-readable programming language. Org can manage source code in an Org document when the source code is identified with begin and end markers. Working with source code begins with identifying source code blocks. A source code block can be placed almost anywhere in an Org document; it is not restricted to the preamble or the end of the document. However, Org cannot manage a source code block if it is placed inside an Org comment or within a fixed width section.

Here is an example source code block in the Emacs Lisp language:

```lisp
#+BEGIN_SRC emacs-lisp
  (defun org-xor (a b)
     "Exclusive or."
     (if a (not b) b))
#+END_SRC
```

Source code blocks are one of many Org block types, which also include “center", “comment", “dynamic", “example", “export", “quote", “special", and “verse". This section pertains to blocks between ‘`#+BEGIN_SRC`’ and ‘`#+END_SRC`’.

Details of Org’s facilities for working with source code are described in the following sections.

*   [Features Overview](/docs/org/Features-Overview)
*   [Structure of Code Blocks](/docs/org/Structure-of-Code-Blocks)
*   [Using Header Arguments](/docs/org/Using-Header-Arguments)
*   [Environment of a Code Block](/docs/org/Environment-of-a-Code-Block)
*   [Evaluating Code Blocks](/docs/org/Evaluating-Code-Blocks)
*   [Results of Evaluation](/docs/org/Results-of-Evaluation)
*   [Exporting Code Blocks](/docs/org/Exporting-Code-Blocks)
*   [Extracting Source Code](/docs/org/Extracting-Source-Code)
*   [Languages](/docs/org/Languages)
*   [Editing Source Code](/docs/org/Editing-Source-Code)
*   [Noweb Reference Syntax](/docs/org/Noweb-Reference-Syntax)
*   [Library of Babel](/docs/org/Library-of-Babel)
*   [Key bindings and Useful Functions](/docs/org/Key-bindings-and-Useful-Functions)
*   [Batch Execution](/docs/org/Batch-Execution)
