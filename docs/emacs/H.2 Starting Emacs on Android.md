---
slug: Android-Startup
---

Emacs is not installed on Android devices from source code or through a package manager. Instead, Emacs is compiled for Android on a different operating system, with the resulting binaries packaged into an archive, that is then transferred to the system and installed.

After being installed, the system places an application icon on the desktop (a.k.a "home screen".) Emacs then starts up once the application icon is clicked.

During startup, Emacs will display messages in the system log buffer; reading that buffer during start-up requires the Android Debug Bridge (`adb`) utility to be installed on another computer.

After enabling the "USB Debugging" feature on the Android system, and connecting it via USB to another system with the `adb` utility installed, the log can be viewed by running the following command on that other system:

```lisp
$ adb logcat | grep -E "(android_run_debug_thread|[Ee]macs)"

```

Assuming that the `adb` utility is installed on a GNU/Linux or Unix system, follow the steps below to connect to your device.

1. Enable "developer options" on your device, by going to the "About" page in the system settings application and clicking on the "build version" or "kernel version" items five to seven times.
2. Open the "developer options" settings page, which should be under the "system" page in the settings application.
3. Turn on the switch "USB debugging".
4. Connect one end of a USB cable to your device, and the other end to your computer's USB port.
5. Run the command `adb shell` on your computer. This will fail or hang because you have not yet granted your computer permission to access the connected device.
6. Confirm the pop-up displayed on your device asking whether or not it should allow access from your computer.

Depending on the versions of Android and `adb` installed, there may be other ways to establish a connection. See the official documentation at <https://developer.android.com/studio/command-line/adb> for more details.

Once Emacs starts up, simply running the command `logcat` as an asynchronous shell command (see [Running Shell Commands from Emacs](/docs/emacs/Shell)) will display the log buffer.

Since there is no other way to start the `emacsclient` program (see [Using Emacs as a Server](/docs/emacs/Emacs-Server)) from another Android program, Emacs provides a wrapper around the `emacsclient` program, which is registered with the system as an application that can open any file.

When that wrapper is selected as the program with which to open a file, it invokes `emacsclient` with the options `--reuse-frame`, `--timeout=10`, `--no-wait`, and the name of the file being opened. Then, upon success, the focus is transferred to any open Emacs frame.

However, if Emacs is not running at the time the wrapper is opened, it starts Emacs and gives it the file to open as an argument. Note that if that Emacs in turn does not start the Emacs server, subsequent attempts to open the file with the wrapper will fail.

Some files are given to Emacs as "content identifiers" that the system provides access to independently of the normal filesystem APIs. Emacs uses pseudo-directories named `/content/by-authority` and `/content/by-authority-named` to access those files. Do not make any assumptions about the contents of these directories, or try to open files in it yourself.

This feature is not provided on Android 4.3 and earlier, in which case such files are copied to a temporary directory before being opened.

In addition to opening ordinary text files, Emacs also registers its `emacsclient` wrapper as a program capable of opening "org-protocol" links (see [Protocols](https://www.gnu.org/software/emacs/manual/html_mono/org.html#Protocols) in The Org Manual).

Furthermore, the wrapper is also registered as a program capable of sending mail to `mailto` URIs; when it is invoked to open such a URL, it calls the function `message-mailto` with that URI as its first argument. This feature does not function when the Emacs server is not already running.
