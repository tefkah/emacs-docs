---
slug: C-Dialect
---

The C part of Emacs is portable to C99 or later: later C features such as '`<stdckdint.h>`' and '`[[noreturn]]`' are not used without a check, typically at configuration time, and the Emacs build procedure provides a substitute implementation if necessary. Some later features, such as anonymous structures and unions, are too difficult to emulate, so they are avoided entirely.

At some point in the future the base C dialect will no doubt change to something later than C99.
