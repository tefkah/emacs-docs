---
slug: MS_002dWindows-Registry
---

On MS-Windows, the installation program `addpm.exe` adds values for `emacs_dir`, `EMACSLOADPATH`, `EMACSDATA`, `EMACSPATH`, `EMACSDOC`, `SHELL` and `TERM` to the `HKEY_LOCAL_MACHINE` section of the system registry, under `/Software/GNU/Emacs`. It does this because there is no standard place to set environment variables across different versions of Windows. Running `addpm.exe` is no longer strictly necessary in recent versions of Emacs, but if you are upgrading from an older version, running `addpm.exe` ensures that you do not have older registry entries from a previous installation, which may not be compatible with the latest version of Emacs.

When Emacs starts, as well as checking the environment, it also checks the System Registry for those variables and for `HOME`, `LANG` and `PRELOAD_WINSOCK`.

To determine the value of those variables, Emacs goes through the following procedure. First, the environment is checked. If the variable is not found there, Emacs looks for registry keys by that name under `/Software/GNU/Emacs`; first in the `HKEY_CURRENT_USER` section of the registry, and if not found there, in the `HKEY_LOCAL_MACHINE` section. Finally, if Emacs still cannot determine the values, compiled-in defaults are used.

In addition to the environment variables above, you can also add settings to the `/Software/GNU/Emacs` registry key to specify X resources (see [X Resources](X-Resources)). Most of the settings you can specify in your `.Xdefaults` file can be set from that registry key.
