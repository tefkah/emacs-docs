---
slug: Tables
---

Org comes with a fast and intuitive table editor.  Spreadsheet-like
calculations are supported in connection with the Emacs Calc package
(see [GNU Emacs Calculator Manual](https://www.gnu.org/software/emacs/manual/html_mono/calc.html#Top)).


Org makes it easy to format tables in plain ASCII.  Any line with '`|`'
as the first non-whitespace character is considered part of a table.
'`|`' is also the column separator.  A table might look like this:


```
| Name  | Phone | Age |
|-------+-------+-----|
| Peter |  1234 |  17 |
| Anna  |  4321 |  25 |
```


A table is re-aligned automatically each time you press `TAB`
or `RET` or `C-c C-c` inside the table.
`TAB` also moves to the next field (`RET` to the
next row) and creates new table rows at the end of the table or before
horizontal lines.  The indentation of the table is set by the first
line.  Any line starting with '`|-`' is considered as a horizontal
separator line and will be expanded on the next re-align to span the
whole table width.  So, to create the above table, you would only type


```
|Name|Phone|Age|
|-
```


and then press `TAB` to align the table and start filling in
fields.  Even faster would be to type '`|Name|Phone|Age`' followed by
`C-c RET`.


When typing text into a field, Org treats `DEL`,
`Backspace`, and all character keys in a special way, so that
inserting and deleting avoids shifting other fields.  Also, when
typing *immediately after point was moved into a new field with
`TAB`, `S-TAB` or `RET`*, the field is
automatically made blank.


### Creation and conversion


### `C-c |` (`org-table-create-or-convert-from-region`)

Convert the active region to table.  If every line contains at least
one `TAB` character, the function assumes that the material
is tab separated.  If every line contains a comma, comma-separated
values (CSV) are assumed.  If not, lines are split at whitespace
into fields.


If there is no active region, this command creates an empty Org
table.  But it is easier just to start typing, like `| N a m e | P h o n e | A g e RET | - TAB`.


### Re-aligning and field motion


### `C-c C-c` (`org-table-align`)

Re-align the table without moving point.

### `TAB` (`org-table-next-field`)

Re-align the table, move to the next field.  Creates a new row if
necessary.

### `S-TAB` (`org-table-previous-field`)

Re-align, move to previous field.

### `RET` (`org-table-next-row`)

Re-align the table and move down to next row.  Creates a new row if
necessary.

### `S-UP` (`org-table-move-cell-up`), `S-DOWN` (`org-table-move-cell-down`), `S-LEFT` (`org-table-move-cell-left`), `S-RIGHT` (`org-table-move-cell-right`)

Move a cell up, down, left, and right by swapping with adjacent
cell.


### Column and row editing


### `M-LEFT` (`org-table-move-column-left`), `M-RIGHT` (`org-table-move-column-right`)

Move the current column left/right.

### `M-S-LEFT` (`org-table-delete-column`)

Kill the current column.

### `M-S-RIGHT` (`org-table-insert-column`)

Insert a new column to the left of point position.

### `M-UP` (`org-table-move-row-up`), `M-DOWN` (`org-table-move-row-down`)

Move the current row up/down.

### `M-S-UP` (`org-table-kill-row`)

Kill the current row or horizontal line.

### `M-S-DOWN` (`org-table-insert-row`)

Insert a new row above the current row.  With a prefix argument, the
line is created below the current one.

### `C-c -` (`org-table-insert-hline`)

Insert a horizontal line below current row.  With a prefix argument,
the line is created above the current line.

### `C-c RET` (`org-table-hline-and-move`)

Insert a horizontal line below current row, and move the point into
the row below that line.

### `C-c ^` (`org-table-sort-lines`)

Sort the table lines in the region.  The position of point indicates
the column to be used for sorting, and the range of lines is the
range between the nearest horizontal separator lines, or the entire
table.
