---
slug: Window-Internals
---

The fields of a window (for a complete list, see the definition of `struct window` in `window.h`) include:

### `frame`

The frame that this window is on, as a Lisp object.

### `mini`

Non-zero if this window is a minibuffer window, a window showing the minibuffer or the echo area.

### `pseudo_window_p`

Non-zero if this window is a *pseudo window*. A pseudo window is either a window used to display the menu bar or the tool bar (when Emacs uses toolkits that don’t display their own menu bar and tool bar) or the tab bar or a window showing a tooltip on a tooltip frame. Pseudo windows are in general not accessible from Lisp code.

### `parent`

Internally, Emacs arranges windows in a tree; each group of siblings has a parent window whose area includes all the siblings. This field points to the window’s parent in that tree, as a Lisp object. For the root window of the tree and a minibuffer window this is always `nil`.

Parent windows do not display buffers, and play little role in display except to shape their child windows. Emacs Lisp programs cannot directly manipulate parent windows; they operate on the windows at the leaves of the tree, which actually display buffers.

### `contents`

For a leaf window and windows showing a tooltip, this is the buffer, as a Lisp object, that the window is displaying. For an internal (“parent") window, this is its first child window. For a pseudo window showing a menu or tool bar this is `nil`. It is also `nil` for a window that has been deleted.

### `next`

### `prev`

The next and previous sibling of this window as Lisp objects. `next` is `nil` if the window is the right-most or bottom-most in its group; `prev` is `nil` if it is the left-most or top-most in its group. Whether the sibling is left/right or up/down is determined by the `horizontal` field of the sibling’s parent: if it’s non-zero, the siblings are arranged horizontally.

As a special case, `next` of a frame’s root window points to the frame’s minibuffer window, provided this is not a minibuffer-only or minibuffer-less frame. On such frames `prev` of the minibuffer window points to that frame’s root window. In any other case, the root window’s `next` and the minibuffer window’s (if present) `prev` fields are `nil`.

### `left_col`

The left-hand edge of the window, measured in columns, relative to the leftmost column (column 0) of the window’s native frame.

### `top_line`

The top edge of the window, measured in lines, relative to the topmost line (line 0) of the window’s native frame.

### `pixel_left`

### `pixel_top`

The left-hand and top edges of this window, measured in pixels, relative to the top-left corner (0, 0) of the window’s native frame.

### `total_cols`

### `total_lines`

The total width and height of the window, measured in columns and lines respectively. The values include scroll bars and fringes, dividers and/or the separator line on the right of the window (if any).

### `pixel_width;`

### `pixel_height;`

The total width and height of the window measured in pixels.

### `start`

A marker pointing to the position in the buffer that is the first character (in the logical order, see [Bidirectional Display](Bidirectional-Display)) displayed in the window.

### `pointm`

This is the value of point in the current buffer when this window is selected; when it is not selected, it retains its previous value.

### `old_pointm`

The value of `pointm` at the last redisplay time.

### `force_start`

If this flag is non-`nil`, it says that the window has been scrolled explicitly by the Lisp program, and the value of the window’s `start` was set for redisplay to honor. This affects what the next redisplay does if point is off the screen: instead of scrolling the window to show the text around point, it moves point to a location that is on the screen.

### `optional_new_start`

This is similar to `force_start`, but the next redisplay will only obey it if point stays visible.

### `start_at_line_beg`

Non-`nil` means current value of `start` was the beginning of a line when it was chosen.

### `use_time`

This is the last time that the window was selected. The function `get-lru-window` uses this field.

### `sequence_number`

A unique number assigned to this window when it was created.

### `last_modified`

The `modiff` field of the window’s buffer, as of the last time a redisplay completed in this window.

### `last_overlay_modified`

The `overlay_modiff` field of the window’s buffer, as of the last time a redisplay completed in this window.

### `last_point`

The buffer’s value of point, as of the last time a redisplay completed in this window.

### `last_had_star`

A non-zero value means the window’s buffer was modified when the window was last updated.

### `vertical_scroll_bar_type`

### `horizontal_scroll_bar_type`

The types of this window’s vertical and horizontal scroll bars.

### `scroll_bar_width`

### `scroll_bar_height`

The width of this window’s vertical scroll bar and the height of this window’s horizontal scroll bar, in pixels.

### `left_margin_cols`

### `right_margin_cols`

The widths of the left and right margins in this window. A value of zero means no margin.

### `left_fringe_width`

### `right_fringe_width`

The pixel widths of the left and right fringes in this window. A value of -1 means use the values of the frame.

### `fringes_outside_margins`

A non-zero value means the fringes outside the display margins; othersize they are between the margin and the text.

### `window_end_pos`

This is computed as `z` minus the buffer position of the last glyph in the current matrix of the window. The value is only valid if `window_end_valid` is non-zero.

### `window_end_bytepos`

The byte position corresponding to `window_end_pos`.

### `window_end_vpos`

The window-relative vertical position of the line containing `window_end_pos`.

### `window_end_valid`

This field is set to a non-zero value if `window_end_pos` and `window_end_vpos` are truly valid. This is zero if nontrivial redisplay is pre-empted, since in that case the display that `window_end_pos` was computed for did not get onto the screen.

### `cursor`

A structure describing where the cursor is in this window.

### `last_cursor_vpos`

The window-relative vertical position of the line showing the cursor as of the last redisplay that finished.

### `phys_cursor`

A structure describing where the cursor of this window physically is.

### `phys_cursor_type`

### `phys_cursor_height`

### `phys_cursor_width`

The type, height, and width of the cursor that was last displayed on this window.

### `phys_cursor_on_p`

This field is non-zero if the cursor is physically on.

### `cursor_off_p`

Non-zero means the cursor in this window is logically off. This is used for blinking the cursor.

### `last_cursor_off_p`

This field contains the value of `cursor_off_p` as of the time of the last redisplay.

### `must_be_updated_p`

This is set to 1 during redisplay when this window must be updated.

### `hscroll`

This is the number of columns that the display in the window is scrolled horizontally to the left. Normally, this is 0. When only the current line is hscrolled, this describes how much the current line is scrolled.

### `min_hscroll`

Minimum value of `hscroll`, set by the user via `set-window-hscroll` (see [Horizontal Scrolling](Horizontal-Scrolling)). When only the current line is hscrolled, this describes the horizontal scrolling of lines other than the current one.

### `vscroll`

Vertical scroll amount, in pixels. Normally, this is 0.

### `dedicated`

Non-`nil` if this window is dedicated to its buffer.

### `combination_limit`

This window’s combination limit, meaningful only for a parent window. If this is `t`, then it is not allowed to delete this window and recombine its child windows with other siblings of this window.

### `window_parameters`

The alist of this window’s parameters.

### `display_table`

The window’s display table, or `nil` if none is specified for it.

### `update_mode_line`

Non-zero means this window’s mode line needs to be updated.

### `mode_line_height`

### `header_line_height`

The height in pixels of the mode line and the header line, or -1 if not known.

### `base_line_number`

The line number of a certain position in the buffer, or zero. This is used for displaying the line number of point in the mode line.

### `base_line_pos`

The position in the buffer for which the line number is known, or zero meaning none is known. If it is -1, don’t display the line number as long as the window shows that buffer.

### `column_number_displayed`

The column number currently displayed in this window’s mode line, or -1 if column numbers are not being displayed.

### `current_matrix`

### `desired_matrix`

Glyph matrices describing the current and desired display of this window.
