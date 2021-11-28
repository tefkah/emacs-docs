---
slug: Buffer-Internals
---

Two structures (see `buffer.h`) are used to represent buffers in C. The `buffer_text` structure contains fields describing the text of a buffer; the `buffer` structure holds other fields. In the case of indirect buffers, two or more `buffer` structures reference the same `buffer_text` structure.

Here are some of the fields in `struct buffer_text`:

### `beg`

The address of the buffer contents. The buffer contents is a linear C array of `char`, with the gap somewhere in its midst.

### `gpt`

### `gpt_byte`

The character and byte positions of the buffer gap. See [Buffer Gap](Buffer-Gap).

### `z`

### `z_byte`

The character and byte positions of the end of the buffer text.

### `gap_size`

The size of buffer’s gap. See [Buffer Gap](Buffer-Gap).

### `modiff`

### `save_modiff`

### `chars_modiff`

### `overlay_modiff`

These fields count the number of buffer-modification events performed in this buffer. `modiff` is incremented after each buffer-modification event, and is never otherwise changed; `save_modiff` contains the value of `modiff` the last time the buffer was visited or saved; `chars_modiff` counts only modifications to the characters in the buffer, ignoring all other kinds of changes (such as text properties); and `overlay_modiff` counts only modifications to the buffer’s overlays.

### `beg_unchanged`

### `end_unchanged`

The number of characters at the start and end of the text that are known to be unchanged since the last complete redisplay.

### `unchanged_modified`

### `overlay_unchanged_modified`

The values of `modiff` and `overlay_modiff`, respectively, after the last complete redisplay. If their current values match `modiff` or `overlay_modiff`, that means `beg_unchanged` and `end_unchanged` contain no useful information.

### `markers`

The markers that refer to this buffer. This is actually a single marker, and successive elements in its marker *chain* (a linked list) are the other markers referring to this buffer text.

### `intervals`

The interval tree which records the text properties of this buffer.

Some of the fields of `struct buffer` are:

### `header`

A header of type `union vectorlike_header` is common to all vectorlike objects.

### `own_text`

A `struct buffer_text` structure that ordinarily holds the buffer contents. In indirect buffers, this field is not used.

### `text`

A pointer to the `buffer_text` structure for this buffer. In an ordinary buffer, this is the `own_text` field above. In an indirect buffer, this is the `own_text` field of the base buffer.

### `next`

A pointer to the next buffer, in the chain of all buffers, including killed buffers. This chain is used only for allocation and garbage collection, in order to collect killed buffers properly.

### `pt`

### `pt_byte`

The character and byte positions of point in a buffer.

### `begv`

### `begv_byte`

The character and byte positions of the beginning of the accessible range of text in the buffer.

### `zv`

### `zv_byte`

The character and byte positions of the end of the accessible range of text in the buffer.

### `base_buffer`

In an indirect buffer, this points to the base buffer. In an ordinary buffer, it is null.

### `local_flags`

This field contains flags indicating that certain variables are local in this buffer. Such variables are declared in the C code using `DEFVAR_PER_BUFFER`, and their buffer-local bindings are stored in fields in the buffer structure itself. (Some of these fields are described in this table.)

### `modtime`

The modification time of the visited file. It is set when the file is written or read. Before writing the buffer into a file, this field is compared to the modification time of the file to see if the file has changed on disk. See [Buffer Modification](Buffer-Modification).

### `auto_save_modified`

The time when the buffer was last auto-saved.

### `last_window_start`

The `window-start` position in the buffer as of the last time the buffer was displayed in a window.

### `clip_changed`

This flag indicates that narrowing has changed in the buffer. See [Narrowing](Narrowing).

### `prevent_redisplay_optimizations_p`

This flag indicates that redisplay optimizations should not be used to display this buffer.

### `overlay_center`

This field holds the current overlay center position. See [Managing Overlays](Managing-Overlays).

### `overlays_before`

### `overlays_after`

These fields hold, respectively, a list of overlays that end at or before the current overlay center, and a list of overlays that end after the current overlay center. See [Managing Overlays](Managing-Overlays). `overlays_before` is sorted in order of decreasing end position, and `overlays_after` is sorted in order of increasing beginning position.

### `name`

A Lisp string that names the buffer. It is guaranteed to be unique. See [Buffer Names](Buffer-Names). This and the following fields have their names in the C struct definition end in a `_` to indicate that they should not be accessed directly, but via the `BVAR` macro, like this:

```lisp
  Lisp_Object buf_name = BVAR (buffer, name);
```

### `save_length`

The length of the file this buffer is visiting, when last read or saved. It can have 2 special values: -1 means auto-saving was turned off in this buffer, and -2 means don’t turn off auto-saving if buffer text shrinks a lot. This and other fields concerned with saving are not kept in the `buffer_text` structure because indirect buffers are never saved.

### `directory`

The directory for expanding relative file names. This is the value of the buffer-local variable `default-directory` (see [File Name Expansion](File-Name-Expansion)).

### `filename`

The name of the file visited in this buffer, or `nil`. This is the value of the buffer-local variable `buffer-file-name` (see [Buffer File Name](Buffer-File-Name)).

### `undo_list`

### `backed_up`

### `auto_save_file_name`

### `auto_save_file_format`

### `read_only`

### `file_format`

### `file_truename`

### `invisibility_spec`

### `display_count`

### `display_time`

These fields store the values of Lisp variables that are automatically buffer-local (see [Buffer-Local Variables](Buffer_002dLocal-Variables)), whose corresponding variable names have the additional prefix `buffer-` and have underscores replaced with dashes. For instance, `undo_list` stores the value of `buffer-undo-list`.

### `mark`

The mark for the buffer. The mark is a marker, hence it is also included on the list `markers`. See [The Mark](The-Mark).

### `local_var_alist`

The association list describing the buffer-local variable bindings of this buffer, not including the built-in buffer-local bindings that have special slots in the buffer object. (Those slots are omitted from this table.) See [Buffer-Local Variables](Buffer_002dLocal-Variables).

### `major_mode`

Symbol naming the major mode of this buffer, e.g., `lisp-mode`.

### `mode_name`

Pretty name of the major mode, e.g., `"Lisp"`.

### `keymap`

### `abbrev_table`

### `syntax_table`

### `category_table`

### `display_table`

These fields store the buffer’s local keymap (see [Keymaps](Keymaps)), abbrev table (see [Abbrev Tables](Abbrev-Tables)), syntax table (see [Syntax Tables](Syntax-Tables)), category table (see [Categories](Categories)), and display table (see [Display Tables](Display-Tables)).

### `downcase_table`

### `upcase_table`

### `case_canon_table`

These fields store the conversion tables for converting text to lower case, upper case, and for canonicalizing text for case-fold search. See [Case Tables](Case-Tables).

### `minor_modes`

An alist of the minor modes of this buffer.

### `pt_marker`

### `begv_marker`

### `zv_marker`

These fields are only used in an indirect buffer, or in a buffer that is the base of an indirect buffer. Each holds a marker that records `pt`, `begv`, and `zv` respectively, for this buffer when the buffer is not current.

### `mode_line_format`

### `header_line_format`

### `case_fold_search`

### `tab_width`

### `fill_column`

### `left_margin`

### `auto_fill_function`

### `truncate_lines`

### `word_wrap`

### `ctl_arrow`

### `bidi_display_reordering`

### `bidi_paragraph_direction`

### `selective_display`

### `selective_display_ellipses`

### `overwrite_mode`

### `abbrev_mode`

### `mark_active`

### `enable_multibyte_characters`

### `buffer_file_coding_system`

### `cache_long_line_scans`

### `point_before_scroll`

### `left_fringe_width`

### `right_fringe_width`

### `fringes_outside_margins`

### `scroll_bar_width`

### `indicate_empty_lines`

### `indicate_buffer_boundaries`

### `fringe_indicator_alist`

### `fringe_cursor_alist`

### `scroll_up_aggressively`

### `scroll_down_aggressively`

### `cursor_type`

### `cursor_in_non_selected_windows`

These fields store the values of Lisp variables that are automatically buffer-local (see [Buffer-Local Variables](Buffer_002dLocal-Variables)), whose corresponding variable names have underscores replaced with dashes. For instance, `mode_line_format` stores the value of `mode-line-format`.

### `last_selected_window`

This is the last window that was selected with this buffer in it, or `nil` if that window no longer displays this buffer.
