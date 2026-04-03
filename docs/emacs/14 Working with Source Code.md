---
slug: Working-with-Source-Code
---

Org mode provides a number of features for working with source code,
including editing of code blocks in their native major mode,
evaluation of code blocks, tangling of code blocks, and exporting code
blocks and their results in several formats.


A source code block conforms to this structure:


```
#+NAME: <name>
#+BEGIN_SRC <language> <switches> <header arguments>
  <body>
#+END_SRC
```


where:


- '`<name>`' is a string used to uniquely name the code block,
- '`<language>`' specifies the language of the code block, e.g.,
  '`emacs-lisp`', '`shell`', '`R`', '`python`', etc.,
- '`<switches>`' can be used to control export of the code block,
- '`<header arguments>`' can be used to control many aspects of code
  block behavior as demonstrated below,
- '`<body>`' contains the actual source code.


Use `C-c '` to edit the current code block.  It opens a new
major mode edit buffer containing the body of the source code block,
ready for any edits.  Use `C-c '` again to close the buffer
and return to the Org buffer.


### Using header arguments


A header argument is specified with an initial colon followed by the
argument's name in lowercase.


Header arguments can be set in several ways; Org prioritizes them in
case of overlaps or conflicts by giving local settings a higher
priority.


### System-wide header arguments

Those are specified by customizing `org-babel-default-header-args`
variable, or, for a specific language *LANG*
`org-babel-default-header-args:LANG`.

### Header arguments in properties

You can set them using '`header-args`' property (see [Properties](/docs/emacs/Properties))---or
'`header-args:LANG`' for language *LANG*.  Header arguments
set through properties drawers apply at the sub-tree level on down.

### Header arguments in code blocks

Header arguments are most commonly set at the source code block
level, on the '`BEGIN_SRC`' line:


```
#+NAME: factorial
#+BEGIN_SRC haskell :results silent :exports code :var n=0
  fac 0 = 1
  fac n = n * fac (n-1)
#+END_SRC
```


Code block header arguments can span multiple lines using '`HEADER`'
keyword on each line.


### Evaluating code blocks


Use `C-c C-c` to evaluate the current code block and insert
its results in the Org document.  By default, evaluation is only
turned on for '`emacs-lisp`' code blocks, however support exists for
evaluating blocks in many languages.  For a complete list of supported
languages see the [manual](https://www.gnu.org/software/emacs/manual/html_mono/org.html#Top).  The following shows a code block and its
results.


```
#+BEGIN_SRC emacs-lisp
  (+ 1 2 3 4)
#+END_SRC

#+RESULTS:
: 10
```


The following syntax is used to pass arguments to code blocks using
the '`var`' header argument.


```
:var NAME=ASSIGN
```


*NAME* is the name of the variable bound in the code block
body.  *ASSIGN* is a literal value, such as a string,
a number, a reference to a table, a list, a literal example, another
code block---with or without arguments---or the results of evaluating
a code block.


### Results of evaluation


How Org handles results of a code block execution depends on many
header arguments working together.  The primary determinant, however,
is the '`results`' header argument.  It controls the *collection*,
*type*, *format*, and *handling* of code block results.


### Collection

How the results should be collected from the code block.  You may
choose either '`output`' or '`value`' (the default).

### Type

What result types to expect from the execution of the code block.
You may choose among '`table`', '`list`', '`scalar`', and '`file`'.  Org
tries to guess it if you do not provide it.

### Format

How Org processes results.  Some possible values are '`code`',
'`drawer`', '`html`', '`latex`', '`link`', and '`raw`'.

### Handling

How to insert the results once properly formatted.  Allowed values
are '`silent`', '`replace`' (the default), '`append`', or '`prepend`'.


Code blocks which output results to files---e.g.: graphs, diagrams and
figures---can accept a '`:file FILENAME`' header argument, in which case
the results are saved to the named file, and a link to the file is
inserted into the buffer.


### Exporting code blocks


It is possible to export the *code* of code blocks, the *results* of
code block evaluation, *both* the code and the results of code block
evaluation, or *none*.  Org defaults to exporting *code* for most
languages.


The '`exports`' header argument is to specify if that part of the Org
file is exported to, say, HTML or LaTeX formats.  It can be set to
either '`code`', '`results`', '`both`' or '`none`'.


### Extracting source code


Use `C-c C-v t` to create pure source code files by
extracting code from source blocks in the current buffer.  This is
referred to as "tangling"---a term adopted from the literate
programming community.  During tangling of code blocks their bodies
are expanded using `org-babel-expand-src-block`, which can expand both
variable and "Noweb" style references.  In order to tangle a code
block it must have a '`tangle`' header argument, see the [manual](https://www.gnu.org/software/emacs/manual/html_mono/org.html#Top) for
details.
