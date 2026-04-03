---
slug: Android-Windowing
---

Android's window system is unusual in that all windows are reported to applications as maximized or full-screen, and, in the general case, only one window can be displayed at a time. On larger devices, the system permits simultaneously tiling up to four windows on the screen, though in emulators or installations configured for "desktop" systems stacks freely resizable windows as other desktop window managers do.

Windows, or, in system nomenclature, activities, do not exist indefinitely after creation, as the system may choose to pause windows that are not visible in order to conserve memory, on the assumption that the program will save its contents to disk, to be restored when the user selects those windows from the task switcher. Furthermore, a window is created by the operating system at Emacs startup that is afforded special treatment, which Emacs is expected to adopt.

Emacs approaches window management with the general objective of minimizing differences in frame behavior exposed to Lisp from that of frames on ordinary window systems, such as X Windows; the degree to which this goal is actually attained varies by the availability of facilities for window management in the version of Android where it is installed, and operating system policy towards inactive windows. When it is unavoidable that concessions should be made to such policy, Emacs prefers destroying frames to retaining ones with no activities to display them, unless such a frame is the initial frame and therefore displayed in the activity created at startup, which it is possible to open and identify so long as Emacs is yet executing.

Android 5.0 and later support an accurate implementation of window management where frames hold a one-to-one relation to the activities in which they are displayed, enabling deletion of activities in the task switcher to directly affect the frames concerned, and vice versa. There are just two exceptions:

- After the system pauses an activity that remains in the task switcher in response to inactivity, removing it from the task switcher while it remains in its inactive state will not delete the frame inside, as Emacs is not notified of the deletion of its activities in such circumstances. The frame will be deleted upon the next window management operation that prompts an examination of the list of live windows. Likewise, an inactive activity displaying a frame will not be immediately deleted with its frame, but will be if it is selected from the window list or upon another examination of the window list.
- Any frame besides the initial frame might be deleted after 4 to 6 hours of inactivity in the background, if it is removed by the system in "trimming" the task switcher of excess, and presumably unwanted, tasks; the initial frame is exempt from this treatment because it can be reopened otherwise than from the task switcher, but as deletion by this mechanism is indistinguishable from legitimate user action to remove activities from the task switcher, the latter will also be ignored by the initial frame after a 4-hour interval elapses from the time of last activity.

Android 4.4 and earlier provide considerably inferior interfaces inadequate for a complete implementation of window management. On such systems, Emacs substitutes a fairly primitive mechanism where all but the initial frame are deleted when their activities are paused, only a single activity (not counting the activity created at startup) is visible at a time, and unattached frames are displayed in the first unoccupied activity available.

Emacs only supports a limited subset of GUI features on Android; the limitations are as follows:

- Scroll bars are not supported, as they are close to useless on Android devices.
- The `alpha`, `alpha-background`, `z-group`, `override-redirect`, `mouse-color`, `title`, `wait-for-wm`, `sticky`, and `undecorated` frame parameters (see [Frame Parameters](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Frame-Parameters) in the Emacs Lisp Reference Manual) are unsupported.
- On Android 4.0 and earlier, the `fullscreen` frame parameter is always `maximized` for top-level frames; on later versions of Android, it can also be `fullscreen`.

Emacs does not implement all selection related features supported under the X Window System on Android. For example, only the `CLIPBOARD` and `PRIMARY` selections (see ["Cut and Paste" Operations on Graphical Displays](/docs/emacs/Cut-and-Paste)) are supported, and Emacs is only able to set selections to plain text.

In addition, the Android system itself places certain restrictions on what selection data Emacs can access:

- On Android 2.3 and earlier, the function `gui-selection-owner-p` always returns `nil` for the clipboard selection.
- Between Android 3.0 and Android 9.0, Emacs is able to access the clipboard whenever it wants, and `gui-selection-owner-p` always returns accurate results.
- Under Android 10.0 and later, Emacs can only access clipboard data when one of its frames has the input focus, and `gui-selection-owner-p` always returns `nil` for the clipboard selection.

Since the Android system itself has no concept of a primary selection, Emacs provides an emulation instead. This means there is no way to transfer the contents of the primary selection to another application via cut-and-paste.

The volume keys are normally reserved by Emacs and used to provide the ability to quit Emacs without a physical keyboard (see [Using Emacs with Virtual Keyboards](/docs/emacs/On_002dScreen-Keyboards)). However, if you want them to adjust the volume instead, you can set the variable `android-pass-multimedia-buttons-to-system` to a non-`nil` value; note that you will no longer be able to quit Emacs using the volume buttons in that case, and that it is generally easier to activate the notification shade or another interface that momentarily deprives Emacs of the keyboard focus while the volume buttons are being depressed.

Emacs is unable to display dialog boxes (see [Using Dialog Boxes](/docs/emacs/Dialog-Boxes)) while it does not have the input focus on Android 6.0 or later. If this is important to you, this capability can be restored by granting Emacs permission to display over other programs. On most systems, this can be done from the following Settings menu:

```lisp
System -> Apps -> Emacs -> More -> Display over other apps

```

There is a direct relation between physical modifier keys and Emacs modifiers (see [Modifier Keys](/docs/emacs/Modifier-Keys)) reported within key events, subject to a single exception: if `Alt` on your keyboard is depressed, then the `Meta` modifier will be reported by Emacs in its place, and vice versa. This irregularity is since most keyboards possess no special `Meta` key, and the `Alt` modifier is seldom employed in Emacs.

Bear in mind that Android uses a different name for the `Super` modifier: it is referred to as `SYM` on Android keyboards and within the Settings keymap menu.

Android input methods have a penchant for irritating users by silently discarding key sequences containing `C-SPC` during the event filtering process, that they normally have no real application for such key sequences notwithstanding. By default, Emacs intercepts these key sequences before they can be filtered by the input method.

If this proves unwanted (for instance, if the input method treats `C-SPC` as a shortcut key for switching languages), it can be disabled by setting the variable `android-intercept-control-space` to `nil`.

The keyboard bell installed within Android systems takes the form of a vibrating element that is activated for a number of milliseconds whenever the bell is rung. The duration of this vibration can be customized through altering the variable `android-keyboard-bell-duration` to any value between `10` and `1000`.

Color-related characteristics of the display are not automatically detectable on Android, so the variable `android-display-planes` should be configured to a suitable value if Emacs is to realize faces and images in a manner consistent with the true visual attributes of a grayscale or monochrome display: to `8` for the former class of display, and `1` for the latter, which will, respectively, force all colors to be rendered in 256 grays, or in monochrome. As this variable is processed at the time the display connection is established, customizations will not take effect unless they be performed from `early-init.el` (see [The Early Init File](/docs/emacs/Early-Init-File)).

The value of this variable does not affect anti-aliasing in the font driver, as monochrome displays nevertheless expect Emacs to provide antialiased text, which they receive after it is processed into bitmap data by the display driver.
