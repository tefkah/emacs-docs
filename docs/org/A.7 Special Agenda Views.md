---
slug: Special-Agenda-Views
---

Org provides a special hook to further limit items in agenda views: `agenda`, `agenda*`[^1], `todo`, `alltodo`, `tags`, `tags-todo`, `tags-tree`. Specify a custom function that tests inclusion of every matched item in the view. This function can also skip as much as is needed.

For a global condition applicable to agenda views, use the `org-agenda-skip-function-global` variable. Org uses a global condition with `org-agenda-skip-function` for custom searching.

This example defines a function for a custom view showing TODO items with ‘`waiting`’ status. Manually this is a multi-step search process, but with a custom view, this can be automated as follows:

The custom function searches the subtree for the ‘`waiting`’ tag and returns `nil` on match. Otherwise it gives the location from where the search continues.

```lisp
(defun my-skip-unless-waiting ()
  "Skip trees that are not waiting"
  (let ((subtree-end (save-excursion (org-end-of-subtree t))))
    (if (re-search-forward ":waiting:" subtree-end t)
        nil          ; tag found, do not skip
      subtree-end))) ; tag not found, continue after end of subtree
```

To use this custom function in a custom agenda command:

```lisp
(org-add-agenda-custom-command
 '("b" todo "PROJECT"
   ((org-agenda-skip-function 'my-skip-unless-waiting)
    (org-agenda-overriding-header "Projects waiting for something: "))))
```

Note that this also binds `org-agenda-overriding-header` to a more meaningful string suitable for the agenda view.

Search for entries with a limit set on levels for the custom search. This is a general approach to creating custom searches in Org. To include all levels, use ‘`LEVEL>0`’[^2]. Then to selectively pick the matched entries, use `org-agenda-skip-function`, which also accepts Lisp forms, such as `org-agenda-skip-entry-if` and `org-agenda-skip-subtree-if`. For example:

### ‘`(org-agenda-skip-entry-if 'scheduled)`’

Skip current entry if it has been scheduled.

### ‘`(org-agenda-skip-entry-if 'notscheduled)`’

Skip current entry if it has not been scheduled.

### ‘`(org-agenda-skip-entry-if 'deadline)`’

Skip current entry if it has a deadline.

### ‘`(org-agenda-skip-entry-if 'scheduled 'deadline)`’

Skip current entry if it has a deadline, or if it is scheduled.

### ‘`(org-agenda-skip-entry-if 'todo '("TODO" "WAITING"))`’

Skip current entry if the TODO keyword is TODO or WAITING.

### ‘`(org-agenda-skip-entry-if 'todo 'done)`’

Skip current entry if the TODO keyword marks a DONE state.

### ‘`(org-agenda-skip-entry-if 'timestamp)`’

Skip current entry if it has any timestamp, may also be deadline or scheduled.

### ‘`(org-agenda-skip-entry-if 'regexp "regular expression")`’

Skip current entry if the regular expression matches in the entry.

### ‘`(org-agenda-skip-entry-if 'notregexp "regular expression")`’

Skip current entry unless the regular expression matches.

### ‘`(org-agenda-skip-subtree-if 'regexp "regular expression")`’

Same as above, but check and skip the entire subtree.

The following is an example of a search for ‘`waiting`’ without the special function:

```lisp
(org-add-agenda-custom-command
 '("b" todo "PROJECT"
   ((org-agenda-skip-function '(org-agenda-skip-subtree-if
                                'regexp ":waiting:"))
    (org-agenda-overriding-header "Projects waiting for something: "))))
```

[^1]: The `agenda*` view is the same as `agenda` except that it only considers *appointments*, i.e., scheduled and deadline items that have a time specification ‘`[h]h:mm`’ in their timestamps.

[^2]: Note that, for `org-odd-levels-only`, a level number corresponds to order in the hierarchy, not to the number of stars.
