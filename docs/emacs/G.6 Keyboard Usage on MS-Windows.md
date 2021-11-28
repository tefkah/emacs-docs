---
slug: Windows-Keyboard
---

This section describes the Windows-specific features related to keyboard input in Emacs.

Many key combinations (known as “keyboard shortcuts") that have conventional uses in MS-Windows programs conflict with traditional Emacs key bindings. (These Emacs key bindings were established years before Microsoft was founded.) Examples of conflicts include `C-c`, `C-x`, `C-z`, `C-a`, and `W-SPC`. You can redefine some of them with meanings more like the MS-Windows meanings by enabling CUA Mode (see [CUA Bindings](/docs/emacs/CUA-Bindings)). Another optional feature which will make Emacs behave like other Windows applications is Delete Selection mode (see [Using Region](/docs/emacs/Using-Region)).

By default, the key labeled `Alt` is mapped as the `Meta` key. If you wish it to produce the `Alt` modifier instead, set the variable `w32-alt-is-meta` to a `nil` value.

MS-Windows reserves certain key combinations, such as `Alt-TAB` and a number of Windows key combinations, for its own use. These key combinations are intercepted by the system before Emacs can see them. Also, on Windows 10, all Windows key combinations are reserved by the system in such a way that they are never propagated to applications, even if the system does not currently define a hotkey on the specific combination. You can use the `w32-register-hot-key` function to allow a key sequence to be seen by Emacs instead of being grabbed by Windows. When registered as a hot key, the key combination is pulled out of the system’s input queue before it is handled by Windows, effectively overriding the special meaning of that key sequence for Windows. The override is only effective when Emacs is active; with other applications on the foreground the keys behave normally.

The argument to `w32-register-hot-key` must be a single key with a single modifier, in vector form that would be acceptable to `define-key`. The control and shift modifiers have no effect on the argument. The meta modifier is interpreted as the `Alt` key if `w32-alt-is-meta` is `t` (the default), and the super and hyper modifiers are interpreted according to the bindings of `w32-lwindow-modifier` and `w32-rwindow-modifier`. Additionally, a modifier with the trailing dash but with no key indicates that all Windows defined hotkeys for that modifier are to be overridden in the favor of Emacs.

For example, `(w32-register-hot-key [M-tab])` lets you use `M-TAB` normally in Emacs; for instance, to complete the word or symbol at point at top level, or to complete the current search string against previously sought strings during incremental search. `(w32-register-hot-key [s-])` with `w32-lwindow-modifier` bound to `super` disables all the Windows’ own Windows key based shortcuts.[^1]

Note that `w32-register-hot-key` checks the `w32-[lr]window-modifier` values at the time of the function call. Thus, you can set `w32-lwindow-modifier` as `super`, then call `(w32-register-hot-key [s-r])`, and finally set `w32-rwindow-modifier` as `super` as well. The result is that the left Windows key together with `R` invokes whichever function you have bound for the combination in Emacs, and the right Windows key and `R` opens the Windows `Run` dialog.

The hotkey registrations always also include all the shift and control modifier combinations for the given hotkey; that is, registering `s-a` as a hotkey gives you `S-s-a`, `C-s-a` and `C-S-s-a` as well.

On Windows 98 and ME, the hotkey registration is more restricted. The desired hotkey must always be fully specified, and `w32-phantom-key-code` can be customized to achieve desired results.

The function `w32-unregister-hot-key` reverses the effect of `w32-register-hot-key` for its argument key sequence.

By default, the `CapsLock` key only affects normal character keys (it converts lower-case characters to their upper-case variants). However, if you set the variable `w32-capslock-is-shiftlock` to a non-`nil` value, the `CapsLock` key will affect non-character keys as well, as if you pressed the `SHIFT` key while typing the non-character key.

If the variable `w32-enable-caps-lock` is set to a `nil` value, the `CapsLock` key produces the symbol `capslock` instead of the shifted version of typed keys. The default value is `t`.

Similarly, if `w32-enable-num-lock` is `nil`, the `NumLock` key will produce the symbol `kp-numlock`. The default is `t`, which causes `NumLock` to work as expected: toggle the meaning of the keys on the numeric keypad.

The variable `w32-apps-modifier` controls the effect of the `Apps` key (usually located between the right `Alt` and the right `Ctrl` keys). Its value can be one of the symbols `hyper`, `super`, `meta`, `alt`, `control`, or `shift` for the respective modifier, or `nil` to appear as the key `apps`. The default is `nil`.

The variable `w32-lwindow-modifier` determines the effect of the left Windows key (usually labeled with `start` and the Windows logo). If its value is `nil` (the default), the key will produce the symbol `lwindow`. Setting it to one of the symbols `hyper`, `super`, `meta`, `alt`, `control`, or `shift` will produce the respective modifier. A similar variable `w32-rwindow-modifier` controls the effect of the right Windows key, and `w32-scroll-lock-modifier` does the same for the `ScrLock` key. If these variables are set to `nil`, the right Windows key produces the symbol `rwindow` and `ScrLock` produces the symbol `scroll`. If you want `ScrLock` to produce the same effect as in other applications, i.e. toggle the Scroll Lock LED indication on the keyboard, set `w32-scroll-lock-modifier` to `t` or any non-`nil` value other than the above modifier symbols.

Emacs compiled as a native Windows application normally turns off the Windows feature that tapping the `Alt` key invokes the Windows menu. The reason is that the `Alt` serves as `Meta` in Emacs. When using Emacs, users often press the `Meta` key temporarily and then change their minds; if this has the effect of bringing up the Windows menu, it alters the meaning of subsequent commands. Many users find this frustrating.

You can re-enable Windows’s default handling of tapping the `Alt` key by setting `w32-pass-alt-to-system` to a non-`nil` value.

The variables `w32-pass-lwindow-to-system` and `w32-pass-rwindow-to-system` determine whether the respective keys are passed to Windows or swallowed by Emacs. If the value is `nil`, the respective key is silently swallowed by Emacs, otherwise it is passed to Windows. The default is `t` for both of these variables. Passing each of these keys to Windows produces its normal effect: for example, `Lwindow` opens the `Start` menu, etc.

The variable `w32-recognize-altgr` controls whether the `AltGr` key (if it exists on your keyboard), or its equivalent, the combination of the right `Alt` and left `Ctrl` keys pressed together, is recognized as the `AltGr` key. The default is `t`, which means these keys produce `AltGr`; setting it to `nil` causes `AltGr` or the equivalent key combination to be interpreted as the combination of `Ctrl` and `Meta` modifiers.

[^1]: There is one known exception: The combination `Windows-L` that locks the workstation is handled by the system on a lower level. For this reason, `w32-register-hot-key` cannot override this key combination - it always locks the computer.
