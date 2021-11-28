---
slug: Mid_002dterm-Goals
---

*   Integration of preview-latex into AUCTeX

    As of AUCTeX 11.81 preview-latex is a part of AUCTeX in the sense that the installation routines were merged and preview-latex is being packaged with AUCTeX.

    Further integration will happen at the backend. This involves folding of error parsing and task management of both packages which will ease development efforts and avoid redundant work.

*   Error help catalogs

    Currently, the help for errors is more or less hardwired into ‘`tex.el`’. For supporting error help in other languages, it would be sensible to instead arrange error messages in language-specific files, make a common info file from all such catalogs in a given language and look the error texts up in an appropriate index. The user would then specify a preference list of languages, and the errors would be looked up in the catalogs in sequence until they were identified.

*   Combining ‘`docTeX`’ with RefTeX

    Macro cross references should also be usable for document navigation using RefTeX.

*   Fix remove-style feature

    Currently `TeX-remove-style` implementation isn’t good. It is common practice that major mode functions directly add macros and environments via `TeX-add-symbols` and `LaTeX-add-environments`, but those macros and environments are lost once `TeX-remove-style` runs. It is necessary to run major mode function, by e.g. `normal-mode`, again to recover them, but that makes no point in running `TeX-remove-style` itself because major mode function kills all buffer-local variables.

    As of AUCTeX 12.3, `TeX-remove-style` is no longer used by any other codes.
