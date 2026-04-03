---
slug: Android-Fonts
---

Emacs supports two font backends under Android: they are respectively named `sfnt-android` and `android`.

Upon startup, Emacs enumerates all the TrueType format fonts in the directories `/system/fonts` and `/product/fonts`, and the `fonts` directory (*user fonts directory*) inside the Emacs home directory. Emacs assumes there will always be a font named "Droid Sans Mono", and then defaults to using this font. These fonts are then displayed by the `sfnt-android` font driver.

This font driver is presently without support for OpenType or color fonts; hence, only a subset of the fonts installed on any given system are available to Emacs. If you are interested in lifting this limitation, please contact <emacs-devel@gnu.org>.

If the `sfnt-android` font driver fails to find any fonts at all, Emacs falls back to the `android` font driver. This is a very poor font driver, consequent upon limitations and inaccuracies in the font metrics provided by the Android platform. In that case, Emacs uses the "Monospace" typeface configured on your system; this should always be Droid Sans Mono.

As on X systems, Emacs supports distortable fonts under Android. These fonts (also termed "TrueType GX fonts", "variable fonts", and "multiple master fonts") provide multiple different styles ("Bold", "Italic", and the like) using a single font file.

When a user-installed distortable font is found, each style that a previously discovered font provided will no longer be used. In addition, any previously installed distortable fonts with the same family name are also disregarded, provided that the new distortable font supplies a superset of the styles furnished by the previously installed font. When a conventional font is found, any previous conventional font with the same style and family will be removed; distortable fonts with the same family will no longer be used to provide that style.

Emacs generally assumes the presence of font families named '`Monospace`', '`Monospace Serif`', '`Sans Serif`', and '`DejaVu Serif`'. Since Android does not provide any fonts by these names, Emacs modifies requests for them to request one of a corresponding set of font families distributed with Android.

To change either the set of font families subject to replacement, or that by which they are replaced, modify the variable `sfnt-default-family-alist`; then, restart Emacs. Bear in mind that this is usually unwarranted, with customizations to the default or `variable-pitch` faces better made through modifying their definitions (see [Customizing Faces](/docs/emacs/Face-Customization)).
