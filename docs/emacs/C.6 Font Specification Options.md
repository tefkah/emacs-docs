---
slug: Font-X
---

You can use the command line option ‘`-fn font`’ (or ‘`--font`’, which is an alias for ‘`-fn`’) to specify a default font:

### ‘`-fn font`’

### ‘`--font=font`’

Use `font` as the default font.

When passing a font name to Emacs on the command line, you may need to quote it, by enclosing it in quotation marks, if it contains characters that the shell treats specially (e.g., spaces). For example:

```lisp
emacs -fn "DejaVu Sans Mono-12"
```

See [Fonts](/docs/emacs/Fonts), for details about font names and other ways to specify the default font.
