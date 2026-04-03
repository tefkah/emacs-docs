---
slug: Tags
---

An excellent way to implement labels and contexts for
cross-correlating information is to assign *tags* to headlines.  Org
mode has extensive support for tags.


Every headline can contain a list of tags; they occur at the end of
the headline.  Tags are normal words containing letters, numbers, '`_`',
'`@`', '`#`', and '`%`'.  Tags must be preceded and followed by a single
colon, e.g., '`:work:`'.  Several tags can be specified, as in
'`:work:urgent:`'.  Tags by default are in bold face with the same color
as the headline.


### Tag inheritance


Tags make use of the hierarchical structure of outline trees.  If
a heading has a certain tag, all subheadings inherit the tag as well.
For example, in the list


```
* Meeting with the French group      :work:
** Summary by Frank                  :boss:notes:
*** TODO Prepare slides for him      :action:
```


the final heading has the tags '`work`', '`boss`', '`notes`', and '`action`'
even though the final heading is not explicitly marked with those
tags.


You can also set tags that all entries in a file should inherit just
as if these tags were defined in a hypothetical level zero that
surrounds the entire file.  Use a line like this[^1]:


```
#+FILETAGS: :Peter:Boss:Secret:
```


### Setting tags


Tags can simply be typed into the buffer at the end of a headline.
After a colon, `M-TAB` offers completion on tags.  There is
also a special command for inserting tags:


### `C-c C-q` (`org-set-tags-command`)

Enter new tags for the current headline.  Org mode either offers
completion or a special single-key interface for setting tags, see
below.

### `C-c C-c` (`org-set-tags-command`)

When point is in a headline, this does the same as `C-c C-q`.


Org supports tag insertion based on a *list of tags*.  By default this
list is constructed dynamically, containing all tags currently used in
the buffer.  You may also globally specify a hard list of tags with
the variable `org-tag-alist`.  Finally you can set the default tags
for a given file using the '`TAGS`' keyword, like


```
#+TAGS: @work @home @tennisclub
#+TAGS: laptop car pc sailboat
```


By default Org mode uses the standard minibuffer completion facilities
for entering tags.  However, it also implements another, quicker, tag
selection method called *fast tag selection*.  This allows you to
select and deselect tags with just a single key press.  For this to
work well you should assign unique letters to most of your commonly
used tags.  You can do this globally by configuring the variable
`org-tag-alist` in your Emacs init file.  For example, you may find
the need to tag many items in different files with '`@home`'.  In this
case you can set something like:


```lisp
(setq org-tag-alist '(("@work" . ?w) ("@home" . ?h) ("laptop" . ?l)))
```


If the tag is only relevant to the file you are working on, then you
can instead set the '`TAGS`' keyword as:


```
#+TAGS: @work(w)  @home(h)  @tennisclub(t)  laptop(l)  pc(p)
```


### Tag groups


A tag can be defined as a *group tag* for a set of other tags.  The
group tag can be seen as the "broader term" for its set of tags.


You can set group tags by using brackets and inserting a colon between
the group tag and its related tags:


```
#+TAGS: [ GTD : Control Persp ]
```


or, if tags in the group should be mutually exclusive:


```
#+TAGS: { Context : @Home @Work }
```


When you search for a group tag, it returns matches for all members in
the group and its subgroups.  In an agenda view, filtering by a group
tag displays or hides headlines tagged with at least one of the members
of the group or any of its subgroups.


If you want to ignore group tags temporarily, toggle group tags
support with `org-toggle-tags-groups`, bound to `C-c C-x q`.


### Tag searches


### `C-c / m` or `C-c \` (`org-match-sparse-tree`)

Create a sparse tree with all headlines matching a tags search.
With a `C-u` prefix argument, ignore headlines that are not
a TODO line.

### `M-x org-agenda m` (`org-tags-view`)

Create a global list of tag matches from all agenda files.  See
[Matching Tags and Properties](/docs/emacs/Matching-Tags-and-Properties).

### `M-x org-agenda M` (`org-tags-view`)

Create a global list of tag matches from all agenda files, but check
only TODO items.


These commands all prompt for a match string which allows basic
Boolean logic like '`+boss+urgent-project1`', to find entries with tags
'`boss`' and '`urgent`', but not '`project1`', or '`Kathy|Sally`' to find
entries which are tagged, like '`Kathy`' or '`Sally`'.  The full syntax of
the search string is rich and allows also matching against TODO
keywords, entry levels and properties.  For a more detailed description
with many examples, see [Matching Tags and Properties](/docs/emacs/Matching-Tags-and-Properties).

[^1]: As with all these in-buffer settings, pressing `C-c C-c` activates any changes in the line.
