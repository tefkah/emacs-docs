---
slug: Using-the-Mapping-API
---

Org has sophisticated mapping capabilities to find all entries satisfying certain criteria. Internally, this functionality is used to produce agenda views, but there is also an API that can be used to execute arbitrary functions for each or selected entries. The main entry point for this API is:

### <span className="tag function">`function`</span> **org-map-entries** `func &optional match scope &rest skip`

Call `FUNC` at each headline selected by `MATCH` in `SCOPE`.

`FUNC` is a function or a Lisp form. With point positioned at the beginning of the headline, call the function without arguments. Org returns a list of return values of calls to the function.

To avoid preserving point, Org wraps the call to `FUNC` in `save-excursion` form. After evaluation, Org moves point to the end of the line that was just processed. Search continues from that point forward. This may not always work as expected under some conditions, such as if the current subtree was removed by a previous archiving operation. In such rare circumstances, Org skips the next entry entirely when it should not. To stop Org from such skips, make `FUNC` set the variable `org-map-continue-from` to a specific buffer position.

`MATCH` is a tags/property/TODO match. Org iterates only matched headlines. Org iterates over all headlines when `MATCH` is `nil` or `t`.

`SCOPE` determines the scope of this command. It can be any of:

### `nil`

The current buffer, respecting the restriction, if any.

### `tree`

The subtree started with the entry at point.

### `region`

The entries within the active region, if any.

### `file`

The current buffer, without restriction.

### `file-with-archives`

The current buffer, and any archives associated with it.

### `agenda`

All agenda files.

### `agenda-with-archives`

All agenda files with any archive files associated with them.

### list of filenames

If this is a list, all files in the list are scanned.

The remaining arguments are treated as settings for the scanner’s skipping facilities. Valid arguments are:

### `archive`

Skip trees with the ‘`ARCHIVE`’ tag.

### `comment`

Skip trees with the COMMENT keyword.

### function or Lisp form

Used as value for `org-agenda-skip-function`, so whenever the function returns `t`, `FUNC` is called for that entry and search continues from the point where the function leaves it.

The mapping routine can call any arbitrary function, even functions that change meta data or query the property API (see [Using the Property API](/docs/org/Using-the-Property-API)). Here are some handy functions:

### <span className="tag function">`function`</span> **org-todo** `&optional arg`

Change the TODO state of the entry. See the docstring of the functions for the many possible values for the argument `ARG`.

### <span className="tag function">`function`</span> **org-priority** `&optional action`

Change the priority of the entry. See the docstring of this function for the possible values for `ACTION`.

### <span className="tag function">`function`</span> **org-toggle-tag** `tag &optional onoff`

Toggle the tag `TAG` in the current entry. Setting `ONOFF` to either `on` or `off` does not toggle tag, but ensure that it is either on or off.

### <span className="tag function">`function`</span> **org-promote**

Promote the current entry.

### <span className="tag function">`function`</span> **org-demote**

Demote the current entry.

This example turns all entries tagged with ‘`TOMORROW`’ into TODO entries with keyword ‘`UPCOMING`’. Org ignores entries in comment trees and archive trees.

```lisp
(org-map-entries '(org-todo "UPCOMING")
                 "+TOMORROW" 'file 'archive 'comment)
```

The following example counts the number of entries with TODO keyword ‘`WAITING`’, in all agenda files.

```lisp
(length (org-map-entries t "/+WAITING" 'agenda))
```
