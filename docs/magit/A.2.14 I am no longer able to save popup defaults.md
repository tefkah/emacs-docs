---
slug: I-am-no-longer-able-to-save-popup-defaults
---

Magit used to use Magit-Popup to implement the transient popup menus. Now it used Transient instead, which is Magit-Popup’s successor.

In the older Magit-Popup menus, it was possible to save user settings (e.g. setting the gpg signing key for commits) by using `C-c C-c` in the popup buffer. This would dismiss the popup, but save the settings as the defaults for future popups.

When switching to Transient menus, this functionality is now available via `C-x C-s` instead; the `C-x` prefix has other options as well when using Transient, which will be displayed when it is typed. See [https://magit.vc/manual/transient/Saving-Values.html#Saving-Values](https://magit.vc/manual/transient/Saving-Values.html#Saving-Values) for more details.
