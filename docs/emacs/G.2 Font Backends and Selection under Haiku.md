---
slug: Haiku-Fonts
---

Emacs supports several different font backends when built with Haiku windowing support, though the subset supported is subject to the list of dependencies present and enabled when Emacs was configured. You can specify which font backends to utilize by providing `-xrm Emacs.fontBackend:backend`<!-- /@w --> on the command line used to invoke Emacs, where *backend* is one of the backends listed below, or on a per-frame basis by changing the `font-backend` frame parameter.

Two of these backends, `ftcr` and `ftcrhb` are identical to their counterparts on the X Window System. There is also a Haiku-specific backend named `haiku`, that uses the App Server to draw fonts, but presently cannot display color fonts or Emoji.
