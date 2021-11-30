---
slug: Should-I-disable-VC_003f
---

If you don’t use VC (the built-in version control interface) then you might be tempted to disable it, not least because we used to recommend that you do that.

We no longer recommend that you disable VC. Doing so would break useful third-party packages (such as `diff-hl`), which depend on VC being enabled.

If you choose to disable VC anyway, then you can do so by changing the value of `vc-handled-backends`.
