---
slug: Dynamic-Blocks
---

Org supports *dynamic blocks* in Org documents. They are inserted with begin and end markers like any other code block, but the contents are updated automatically by a user function.

You can insert a dynamic block with `org-dynamic-block-insert-dblock`, which is bound to `C-c C-x x` by default. For example, `C-c C-x x c l o c k t a b l e RET` inserts a table that updates the work time (see [Clocking Work Time](/docs/org/Clocking-Work-Time)).

Dynamic blocks can have names and function parameters. The syntax is similar to source code block specifications:

```lisp
#+BEGIN: myblock :parameter1 value1 :parameter2 value2 ...
  ...
#+END:
```

These commands update dynamic blocks:

### `C-c C-x C-u` (`org-dblock-update`)

Update dynamic block at point.

### `C-u C-c C-x C-u`

Update all dynamic blocks in the current file.

Before updating a dynamic block, Org removes content between the ‘`BEGIN`’ and ‘`END`’ markers. Org then reads the parameters on the ‘`BEGIN`’ line for passing to the writer function as a plist. The previous content of the dynamic block becomes erased from the buffer and appended to the plist under `:content`.

The syntax for naming a writer function with a dynamic block labeled ‘`myblock`’ is: `org-dblock-write:myblock`.

The following is an example of a dynamic block and a block writer function that updates the time when the function was last run:

```lisp
#+BEGIN: block-update-time :format "on %m/%d/%Y at %H:%M"
  ...
#+END:
```

The dynamic block’s writer function:

```lisp
(defun org-dblock-write:block-update-time (params)
  (let ((fmt (or (plist-get params :format) "%d. %m. %Y")))
    (insert "Last block update at: "
            (format-time-string fmt))))
```

To keep dynamic blocks up-to-date in an Org file, use the function, `org-update-all-dblocks` in hook, such as `before-save-hook`. The `org-update-all-dblocks` function does not run if the file is not in Org mode.

Dynamic blocks, like any other block, can be narrowed with `org-narrow-to-block`.
