---
slug: Sorting
---

Emacs provides several commands for sorting text in the buffer. All operate on the contents of the region. They divide the text of the region into many *sort records*, identify a *sort key* for each record, and then reorder the records into the order determined by the sort keys. The records are ordered so that their keys are in alphabetical order, or, for numeric sorting, in numeric order. In alphabetic sorting, all upper-case letters ‘`A`’ through ‘`Z`’ come before lower-case ‘`a`’, in accordance with the ASCII character sequence (but `sort-fold-case`, described below, can change that).

The various sort commands differ in how they divide the text into sort records and in which part of each record is used as the sort key. Most of the commands make each line a separate sort record, but some commands use paragraphs or pages as sort records. Most of the sort commands use each entire sort record as its own sort key, but some use only a portion of the record as the sort key.

### `M-x sort-lines`

Divide the region into lines, and sort by comparing the entire text of a line. A numeric argument means sort into descending order.

### `M-x sort-paragraphs`

Divide the region into paragraphs, and sort by comparing the entire text of a paragraph (except for leading blank lines). A numeric argument means sort into descending order.

### `M-x sort-pages`

Divide the region into pages, and sort by comparing the entire text of a page (except for leading blank lines). A numeric argument means sort into descending order.

### `M-x sort-fields`

Divide the region into lines, and sort by comparing the contents of one field in each line. Fields are defined as separated by whitespace, so the first run of consecutive non-whitespace characters in a line constitutes field 1, the second such run constitutes field 2, etc.

Specify which field to sort by with a numeric argument: 1 to sort by field 1, etc.; the default is 1. A negative argument means count fields from the right instead of from the left; thus, minus 1 means sort by the last field. If several lines have identical contents in the field being sorted, they keep the same relative order that they had in the original buffer.

### `M-x sort-numeric-fields`

Like `M-x sort-fields` except the specified field is converted to an integer for each line, and the numbers are compared. ‘`10`’ comes before ‘`2`’ when considered as text, but after it when considered as a number. By default, numbers are interpreted according to `sort-numeric-base`, but numbers beginning with ‘`0x`’ or ‘`0`’ are interpreted as hexadecimal and octal, respectively.

### `M-x sort-columns`

Like `M-x sort-fields` except that the text within each line used for comparison comes from a fixed range of columns. With a prefix argument, sort in reverse order. See below for more details on this command.

### `M-x reverse-region`

Reverse the order of the lines in the region. This is useful for sorting into descending order by fields, since those sort commands do not have a feature for doing that.

For example, if the buffer contains this:

```lisp
On systems where clash detection (locking of files being edited) is
implemented, Emacs also checks the first time you modify a buffer
whether the file has changed on disk since it was last visited or
saved.  If it has, you are asked to confirm that you want to change
the buffer.
```

applying `M-x sort-lines` to the entire buffer produces this:

```lisp
On systems where clash detection (locking of files being edited) is
implemented, Emacs also checks the first time you modify a buffer
saved.  If it has, you are asked to confirm that you want to change
the buffer.
whether the file has changed on disk since it was last visited or
```

where the upper-case ‘`O`’ sorts before all lower-case letters. If you use `C-u 2 M-x sort-fields` instead, you get this:

```lisp
implemented, Emacs also checks the first time you modify a buffer
saved.  If it has, you are asked to confirm that you want to change
the buffer.
On systems where clash detection (locking of files being edited) is
whether the file has changed on disk since it was last visited or
```

where the sort keys were ‘`Emacs`’, ‘`If`’, ‘`buffer`’, ‘`systems`’ and ‘`the`’.

`M-x sort-columns` requires more explanation. You specify the columns by putting point at one of the columns and the mark at the other column. Because this means you cannot put point or the mark at the beginning of the first line of the text you want to sort, this command uses an unusual definition of “region": all of the line point is in is considered part of the region, and so is all of the line the mark is in, as well as all the lines in between.

For example, to sort a table by information found in columns 10 to 15, you could put the mark on column 10 in the first line of the table, and point on column 15 in the last line of the table, and then run `sort-columns`. Equivalently, you could run it with the mark on column 15 in the first line and point on column 10 in the last line.

This can be thought of as sorting the rectangle specified by point and the mark, except that the text on each line to the left or right of the rectangle moves along with the text inside the rectangle. See [Rectangles](/docs/emacs/Rectangles).

Many of the sort commands ignore case differences when comparing, if `sort-fold-case` is non-`nil`.
