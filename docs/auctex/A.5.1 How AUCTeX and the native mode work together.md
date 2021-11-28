---
slug: Exploiting
---

In a nutshell the split between AUCTeX Texinfo mode, and native Texinfo mode is as follows:

*   Most of the editing (environment creation, commenting, font command insertions) and/or processing commands (e.g. compiling or printing) which are available in other AUCTeX modes are also handled by AUCTeX in Texinfo mode.
*   Texinfo-related features (e.g. info node linkage or menu creation) rely on the commands provided by the native Texinfo mode. AUCTeX provides the key bindings to reach these functions, keeping the same keys as in native Texinfo whenever possible, or similar ones otherwise.
