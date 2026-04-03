---
slug: Miscellaneous
---

### Completion


Org has in-buffer completions with `M-TAB`.  No minibuffer is
involved.  Type one or more letters and invoke the hot key to complete
the text in-place.


For example, this command will complete TeX symbols after '`\`', TODO
keywords at the beginning of a headline, and tags after '`:`' in
a headline.


### Structure Templates


To quickly insert empty structural blocks, such as '`#+BEGIN_SRC`'
... '`#+END_SRC`', or to wrap existing text in such a block, use


### `C-c C-,` (`org-insert-structure-template`)

Prompt for a type of block structure, and insert the block at point.
If the region is active, it is wrapped in the block.


### Clean view


Org's default outline with stars and no indents can become too
cluttered for short documents.  For *book-like* long documents, the
effect is not as noticeable.  Org provides an alternate stars and
indentation scheme, as shown on the right in the following table.  It
uses only one star and indents text to line with the heading:


```
* Top level headline             |    * Top level headline
** Second level                  |      * Second level
*** Third level                  |        * Third level
    some text                    |          some text
*** Third level                  |        * Third level
    more text                    |          more text
* Another top level headline     |    * Another top level headline
```


This kind of view can be achieved dynamically at display time using
Org Indent mode (`M-x org-indent-mode RET`), which prepends
intangible space to each line.  You can turn on Org Indent mode for
all files by customizing the variable `org-startup-indented`, or you
can turn it on for individual files using


```
#+STARTUP: indent
```


If you want the indentation to be hard space characters so that the
plain text file looks as similar as possible to the Emacs display, Org
supports you by helping to indent (with `TAB`) text below
each headline, by hiding leading stars, and by only using levels 1, 3,
etc to get two characters indentation for each level.  To get this
support in a file, use


```
#+STARTUP: hidestars odd
```
