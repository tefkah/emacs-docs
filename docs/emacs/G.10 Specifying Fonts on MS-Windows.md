---
slug: Windows-Fonts
---

Starting with Emacs 23, fonts are specified by their name, size and optional properties. The format for specifying fonts comes from the fontconfig library used in modern Free desktops:

```lisp
  [Family[-PointSize]][:Option1=Value1[:Option2=Value2[...]]]
```

The old XLFD based format is also supported for backwards compatibility.

Emacs on MS-Windows supports a number of font backends. Currently, the `gdi`, `uniscribe`, and `harfbuzz` backends are available. The `gdi` font backend is available on all versions of Windows, and supports all fonts that are natively supported by Windows. The `uniscribe` font backend is available on Windows 2000 and later, and supports TrueType and OpenType fonts. The `harfbuzz` font backend is available if Emacs was built with HarfBuzz support, and if the HarfBuzz DLL is installed on your system; like `uniscribe`, this backend supports only TrueType and OpenType fonts. Some languages requiring complex layout can only be properly supported by the Uniscribe or HarfBuzz backends. By default, two backends are enabled for each frame: `gdi` and either `harfbuzz` or `uniscribe`, depending on which one is available (if both are available, only `harfbuzz` is enabled by default). The `harfbuzz` and `uniscribe` backends take priority over `gdi` when Emacs looks for a suitable font. To override that and use the GDI backend even if Uniscribe is available, invoke Emacs with the `-xrm Emacs.fontBackend:gdi` command-line argument, or add a `Emacs.fontBackend` resource with the value `gdi` in the Registry under either the ‘`HKEY_CURRENT_USER\SOFTWARE\GNU\Emacs`’ or the ‘`HKEY_LOCAL_MACHINE\SOFTWARE\GNU\Emacs`’ key (see [Resources](Resources)). Similarly, to use the Uniscribe backend even if HarfBuzz is available, use `-xrm Emacs.fontBackend:uniscribe` on the command line that invokes Emacs. You can also request all the 3 backends via the `font-backend` frame parameter, but be warned that in that case font searches for characters for which no fonts are available on the system will take longer.

Alternatively, you could specify a font backend for a frame via the `font-backend` frame parameter, using `modify-frame-parameters` (see [Parameter Access](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Parameter-Access) in The Emacs Lisp Reference Manual). You can also request specific font backend(s) for all your frames via `default-frame-alist` and `initial-frame-alist` (see [Frame Parameters](Frame-Parameters)). Note that the value of the `font-backend` parameter should be a list of symbols, as in `(uniscribe)` or `(harfbuzz uniscribe gdi)`<!-- /@w -->.

Optional font properties supported on MS-Windows are:

### `weight`

Specifies the weight of the font. Special values `light`, `medium`, `demibold`, `bold`, and `black` can be specified without `weight=` (e.g., `Courier New-12:bold`). Otherwise, the weight should be a numeric value between 100 and 900, or one of the named weights in `font-weight-table`. If unspecified, a regular font is assumed.

### `slant`

Specifies whether the font is italic. Special values `roman`, `italic` and `oblique` can be specified without `slant=` (e.g., `Courier New-12:italic`). Otherwise, the slant should be a numeric value, or one of the named slants in `font-slant-table`. On Windows, any slant above 150 is treated as italics, and anything below as roman.

### `family`

Specifies the font family, but normally this will be specified at the start of the font name.

### `pixelsize`

Specifies the font size in pixels. This can be used instead of the point size specified after the family name.

### `adstyle`

Specifies additional style information for the font. On MS-Windows, the values `mono`, `sans`, `serif`, `script` and `decorative` are recognized. These are most useful as a fallback with the font family left unspecified.

### `registry`

Specifies the character set registry that the font is expected to cover. Most TrueType and OpenType fonts will be Unicode fonts that cover several national character sets, but you can narrow down the selection of fonts to those that support a particular character set by using a specific registry from `w32-charset-info-alist` here.

### `spacing`

Specifies how the font is spaced. The `p` spacing specifies a proportional font, and `m` or `c` specify a monospaced font.

### `foundry`

Not used on Windows, but for informational purposes and to prevent problems with code that expects it to be set, is set internally to `raster` for bitmapped fonts, `outline` for scalable fonts, or `unknown` if the type cannot be determined as one of those.

### `script`

Specifies a Unicode subrange the font should support.

All the scripts known to Emacs (which generally means all the scripts defined by the latest Unicode Standard) are recognized on MS-Windows. However, `GDI` fonts support only a subset of the known scripts: `greek`, `hangul`, `kana`, `kanbun`, `bopomofo`, `tibetan`, `yi`, `mongolian`, `hebrew`, `arabic`, and `thai`.

### `antialias`

Specifies the antialiasing method. The value `none` means no antialiasing, `standard` means use standard antialiasing, `subpixel` means use subpixel antialiasing (known as *Cleartype* on Windows), and `natural` means use subpixel antialiasing with adjusted spacing between letters. If unspecified, the font will use the system default antialiasing.

The method used by Emacs on MS-Windows to look for fonts suitable for displaying a given non-ASCII character might fail for some rare scripts, specifically those added by Unicode relatively recently, even if you have fonts installed on your system that support those scripts. That is because these scripts have no Unicode Subrange Bits (USBs) defined for them in the information used by Emacs on MS-Windows to look for fonts. You can use the `w32-find-non-USB-fonts` function to overcome these problems. It needs to be run once at the beginning of the Emacs session, and again if you install new fonts. You can add the following line to your init file to have this function run every time you start Emacs:

```lisp
(w32-find-non-USB-fonts)
```

Alternatively, you can run this function manually via `M-:` (see [Lisp Eval](Lisp-Eval)) at any time. On a system that has many fonts installed, running `w32-find-non-USB-fonts` might take a couple of seconds; if you consider that to be too long to be run during startup, and if you install new fonts only rarely, run this function once via `M-:`, and then assign the value it returns, if non-`nil`, to the variable `w32-non-USB-fonts` in your init file. (If the function returns `nil`, you have no fonts installed that can display characters from the scripts which need this facility.)

The variable `w32-use-w32-font-dialog` controls the way fonts can be selected via `S-mouse-1` (`mouse-appearance-menu`). If the value is `t`, the default, Emacs uses the standard Windows font selection dialog. If the value is `nil`, Emacs instead pops a menu of a fixed set of fonts. The fonts to appear in the menu are determined by `w32-fixed-font-alist`.
