---
slug: Borders-X
---

An Emacs frame has an internal border and an outer border. The internal border is an extra strip of the background color around the text portion of the frame. Emacs itself draws the internal border. The outer border is drawn by X outside the tool and menu bars of the frame. There is also an external border which is drawn by the window manager. The size of the external border cannot be set from within Emacs.

### ‘`-ib width`’

### ‘`--internal-border=width`’

Specify `width` as the width of the internal border (around the frame’s text area), in pixels.

### ‘`-bw width`’

### ‘`--border-width=width`’

Specify `width` as the width of the outer border, in pixels.

When you specify the size of the frame, that does not count the borders. The frame’s position is measured from the outside edge of the external border.

Use the ‘`-ib n`’ option to specify an internal border `n` pixels wide. The default is 1. Use ‘`-bw n`’ to specify the width of the outer border (though the window manager may not pay attention to what you specify). The default width of the outer border is 2.
