---
slug: Properties
---

Properties are key-value pairs associated with an entry.  They live in
a special drawer with the name '`PROPERTIES`'.  Each property is
specified on a single line, with the key (surrounded by colons) first,
and the value after it:


```
* CD collection
** Classic
*** Goldberg Variations
    :PROPERTIES:
    :Title:     Goldberg Variations
    :Composer:  J.S. Bach
    :Publisher: Deutsche Grammophon
    :NDisks:    1
    :END:
```


You may define the allowed values for a particular property '`Xyz`' by
setting a property '`Xyz_ALL`'.  This special property is *inherited*,
so if you set it in a level 1 entry, it applies to the entire tree.
When allowed values are defined, setting the corresponding property
becomes easier and is less prone to typing errors.  For the example
with the CD collection, we can pre-define publishers and the number of
disks in a box like this:


```
* CD collection
  :PROPERTIES:
  :NDisks_ALL:  1 2 3 4
  :Publisher_ALL: "Deutsche Grammophon" Philips EMI
  :END:
```


If you want to set properties that can be inherited by any entry in
a file, use a line like:


```
#+PROPERTY: NDisks_ALL 1 2 3 4
```


The following commands help to work with properties:


### `C-c C-x p` (`org-set-property`)

Set a property.  This prompts for a property name and a value.

### `C-c C-c d` (`org-delete-property`)

Remove a property from the current entry.


To create sparse trees and special lists with selection based on
properties, the same commands are used as for tag searches (see
[Tags](/docs/emacs/Tags)). The syntax for the search string is described in [Matching Tags and Properties](/docs/emacs/Matching-Tags-and-Properties).
