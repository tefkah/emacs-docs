---
slug: Android-Environment
---

From the perspective of users, Android is mostly a single user operating system; however, from the perspective of applications and Emacs, the system is host to an overwhelming number of users.

Each application runs in its own user, with its home directory set to its app data directory (see [What Files Emacs Can Access on Android](/docs/emacs/Android-File-System).)\[^30]

Each application is also prohibited from accessing many system directories and the app data directories of other applications.

The Emacs distribution also incorporates several binaries. While being executable files, they are packaged as libraries in the library directory, because otherwise the system will not unpack them while Emacs is being installed. This means that instead of `ctags` or `emacsclient`, Lisp code must specify `libctags.so` or `libemacsclient.so` on the command line when starting either of those programs in a subprocess; to determine which names to use, consult the values of the variables `ctags-program-name`, `etags-program-name`, `hexl-program-name`, `emacsclient-program-name`, `movemail-program-name`, `ebrowse-program-name`, and `rcs2log-program-name`. See [Subprocess Creation](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Subprocess-Creation) in the Emacs Lisp Reference Manual.

The `/assets` directory containing Emacs start-up files is meant to be inaccessible to processes not directly created by `zygote`, the system service responsible for starting applications. Since required Lisp is found in the `/assets` directory, it would thus follow that it is not possible for Emacs to start itself as a subprocess. A special binary named `libandroid-emacs.so` is provided with Emacs, which is installed into the library directory, and which tries its best to start Emacs for the purpose of running Lisp in batch mode. The approach it takes was devised by reference to Android source code, and is not sanctioned by the Android compatibility definition documents, so your mileage may vary.

Even when the location of the `libandroid-emacs.so` command is known in advance, special preparation is required to run Emacs from elsewhere than a subprocess of an existing Emacs session, as it must be made to understand the location of resources and shared libraries in or extracted from the installed application package. The OS command `pm path org.gnu.emacs` will print the location of the application package, though the said command must be invoked in a peculiar manner to satisfy system restrictions on communication between pseudoterminal devices created by user applications and system services such as the package manager, which is to say, with the standard IO streams redirected to a real file or a pipe. This value, once established, must be specified in the environment variables `EMACS_CLASS_PATH`, so that this sample shell script may be installed as `emacs` in any location that is accessible:

```lisp
#!/system/bin/sh

package_name=`pm path org.gnu.emacs 2>/dev/null </dev/null \
               | sed 's/^package://'`
emacs=
EMACS_CLASS_PATH=$package_name

for libdir in `dirname $package_name`/lib/*; do
  ld_path=${ld_path:+${ld_path}:}$libdir
  test -x "$libdir"/libandroid-emacs.so \
    && emacs="$libdir"/libandroid-emacs.so
done

export EMACS_CLASS_PATH
test -x "$emacs" || exit 1
exec $emacs "$@"

```

Android 10 and later also prohibit Emacs itself from running executables inside the app data directory, ostensibly out of security concerns. On these systems, Emacs normally applies a workaround; however, this workaround requires running all sub-processes through another subprocess which implements an executable loader and applies process tracing to all its children, which may prove problematic for a variety of reasons. In that case, the workaround can be disabled by changing the variable `android-use-exec-loader` to `nil`.

When this workaround is in effect, process IDs retrieved through the `process-id` function will be that of the executable loader process; its child will belong to the same process group as the loader. Consequently, `interrupt-process`, and other related functions will work correctly, but using the process ID returned by `process-id` for other purposes will not.

One ramification of the mechanism by which process tracing is carried out is that job control facilities inside inferior shells (see [Interactive Subshell](/docs/emacs/Interactive-Shell)) will not be able to stop processes, and `SIGSTOP` signals to subprocesses created by Emacs will not take effect.

In addition, Android 12 also terminates subprocesses which are consuming CPU while Emacs itself is in the background. The system judges which processes are consuming too much CPU at intervals of five minutes, and terminates the process that has consumed the most CPU time.

Android 12.1 and Android 13 provide an option to disable this behavior; to use it, enable "USB debugging" (see [Starting Emacs on Android](/docs/emacs/Android-Startup)) connect the Android system to another computer, and run:

```lisp
$ adb shell "settings put global settings_enable_monitor_phantom_procs false"

```

The "Languages & Input" preferences which apply to the operating system do not influence the C locale set for programs, but are taken into account by Emacs during startup: a locale name is generated from the selected language and regional variant and a language environment (see [Language Environments](/docs/emacs/Language-Environments)) is selected on that basis, which does not overwrite `LANG` or other locale-related environment variables. The coding system for language environments set in this fashion is `utf-8-unix` without exception.

Instead, the `LANG` environment variable (see [General Variables](/docs/emacs/General-Variables)) is set to `en_US.utf8` when Emacs starts on Android 5.0 or newer, which induces subprocesses linked against the Android C library to print output sensibly. Earlier versions of Android do not implement locales at all, and on that account, the variable is set to `C`.

Application processes are treated as disposable entities by the system. When all Emacs frames move to the background, Emacs might be terminated by the system at any time, for the purpose of saving system resources.

On Android 7.1 and earlier, Emacs designates itself a "background service", which impels the system to avoid killing Emacs unless it is stressed for memory.

Android 8.0 removed the ability for background services to receive such special treatment. However, Emacs applies a workaround: the system considers applications that create a permanent notification to be performing active work, and will avoid killing such applications. Thus, on those systems, Emacs displays a permanent notification for as long as it is running.

Before Android 13, Emacs does not require rights to display notifications. Under Android 13 or later, the notification is hidden until the user accords Emacs such rights. In spite of that, merely attempting to display the notification suffices to avert sudden death; whether the notification is displayed has no bearing on Emacs's capacity to execute in the background, and it may be disabled without any adverse consequences.

However, it is not guaranteed that the system will not kill Emacs. Although the Open Handset Alliance's sample implementation of Android behaves correctly, many manufacturers institute additional restrictions on program execution in the background in their proprietary versions of Android. There is a list of such troublesome manufacturers and sometimes workarounds at <https://dontkillmyapp.com/>.

Android also defines a permissions system that determines what system services Emacs is allowed to access. Programs must specify what permissions they want; what then happens is then subject to the version of Android being used:

- Under more or less recent releases of Android, such as Android 6.0 and later, Emacs only receives the following permissions upon installation, subject to the presence or absence of individual permissions in the version of Android installed:

  - `android.permission.ACCESS_ADSERVICES_AD_ID`
  - `android.permission.ACCESS_ADSERVICES_ATTRIBUTION`
  - `android.permission.ACCESS_ADSERVICES_CUSTOM_AUDIENCE`
  - `android.permission.ACCESS_ADSERVICES_TOPICS`
  - `android.permission.ACCESS_LOCATION_EXTRA_COMMANDS`
  - `android.permission.ACCESS_NETWORK_STATE`
  - `android.permission.ACCESS_NOTIFICATION_POLICY`
  - `android.permission.ACCESS_WIFI_STATE`
  - `android.permission.AUTHENTICATE_ACCOUNTS`
  - `android.permission.BLUETOOTH`
  - `android.permission.BLUETOOTH_ADMIN`
  - `android.permission.BROADCAST_STICKY`
  - `android.permission.CALL_COMPANION_APP`
  - `android.permission.CHANGE_NETWORK_STATE`
  - `android.permission.CHANGE_WIFI_MULTICAST_STATE`
  - `android.permission.CHANGE_WIFI_STATE`
  - `android.permission.CREDENTIAL_MANAGER_QUERY_CANDIDATE_CREDENTIALS`
  - `android.permission.CREDENTIAL_MANAGER_SET_ALLOWED_PROVIDERS`
  - `android.permission.CREDENTIAL_MANAGER_SET_ORIGIN`
  - `android.permission.DELIVER_COMPANION_MESSAGES`
  - `android.permission.DETECT_SCREEN_CAPTURE`
  - `android.permission.DISABLE_KEYGUARD`
  - `android.permission.ENFORCE_UPDATE_OWNERSHIP`
  - `android.permission.EXPAND_STATUS_BAR`
  - `android.permission.FLASHLIGHT`
  - `android.permission.FOREGROUND_SERVICE`
  - `android.permission.FOREGROUND_SERVICE_CAMERA`
  - `android.permission.FOREGROUND_SERVICE_CONNECTED_DEVICE`
  - `android.permission.FOREGROUND_SERVICE_DATA_SYNC`
  - `android.permission.FOREGROUND_SERVICE_FILE_MANAGEMENT`
  - `android.permission.FOREGROUND_SERVICE_HEALTH`
  - `android.permission.FOREGROUND_SERVICE_LOCATION`
  - `android.permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK`
  - `android.permission.FOREGROUND_SERVICE_MEDIA_PROJECTION`
  - `android.permission.FOREGROUND_SERVICE_MICROPHONE`
  - `android.permission.FOREGROUND_SERVICE_PHONE_CALL`
  - `android.permission.FOREGROUND_SERVICE_REMOTE_MESSAGING`
  - `android.permission.FOREGROUND_SERVICE_SPECIAL_USE`
  - `android.permission.FOREGROUND_SERVICE_SYSTEM_EXEMPTED`
  - `android.permission.GET_PACKAGE_SIZE`
  - `android.permission.GET_TASKS`
  - `android.permission.HIDE_OVERLAY_WINDOWS`
  - `android.permission.HIGH_SAMPLING_RATE_SENSORS`
  - `android.permission.INTERNET`
  - `android.permission.KILL_BACKGROUND_PROCESSES`
  - `android.permission.MANAGE_ACCOUNTS`
  - `android.permission.MANAGE_OWN_CALLS`
  - `android.permission.MODIFY_AUDIO_SETTINGS`
  - `android.permission.NFC`
  - `android.permission.NFC_PREFERRED_PAYMENT_INFO`
  - `android.permission.NFC_TRANSACTION_EVENT`
  - `android.permission.PERSISTENT_ACTIVITY`
  - `android.permission.QUERY_ALL_PACKAGES`
  - `android.permission.READ_BASIC_PHONE_STATE`
  - `android.permission.READ_INSTALL_SESSIONS`
  - `android.permission.READ_NEARBY_STREAMING_POLICY`
  - `android.permission.READ_PROFILE`
  - `android.permission.READ_SOCIAL_STREAM`
  - `android.permission.READ_SYNC_SETTINGS`
  - `android.permission.READ_SYNC_STATS`
  - `android.permission.READ_USER_DICTIONARY`
  - `android.permission.RECEIVE_BOOT_COMPLETED`
  - `android.permission.REORDER_TASKS`
  - `android.permission.REQUEST_COMPANION_PROFILE_GLASSES`
  - `android.permission.REQUEST_COMPANION_PROFILE_WATCH`
  - `android.permission.REQUEST_COMPANION_RUN_IN_BACKGROUND`
  - `android.permission.REQUEST_COMPANION_START_FOREGROUND_SERVICES_FROM_BACKGROUND`
  - `android.permission.REQUEST_COMPANION_USE_DATA_IN_BACKGROUND`
  - `android.permission.REQUEST_DELETE_PACKAGES`
  - `android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS`
  - `android.permission.REQUEST_OBSERVE_COMPANION_DEVICE_PRESENCE`
  - `android.permission.REQUEST_PASSWORD_COMPLEXITY`
  - `android.permission.RESTART_PACKAGES`
  - `android.permission.RUN_USER_INITIATED_JOBS`
  - `android.permission.SET_WALLPAPER`
  - `android.permission.SET_WALLPAPER_HINTS`
  - `android.permission.SUBSCRIBED_FEEDS_READ`
  - `android.permission.SUBSCRIBED_FEEDS_WRITE`
  - `android.permission.TRANSMIT_IR`
  - `android.permission.UPDATE_PACKAGES_WITHOUT_USER_ACTION`
  - `android.permission.USE_BIOMETRIC`
  - `android.permission.USE_CREDENTIALS`
  - `android.permission.USE_EXACT_ALARM`
  - `android.permission.USE_FINGERPRINT`
  - `android.permission.USE_FULL_SCREEN_INTENT`
  - `android.permission.VIBRATE`
  - `android.permission.WAKE_LOCK`
  - `android.permission.WRITE_PROFILE`
  - `android.permission.WRITE_SMS`
  - `android.permission.WRITE_SOCIAL_STREAM`
  - `android.permission.WRITE_SYNC_SETTINGS`
  - `android.permission.WRITE_USER_DICTIONARY`

  Other permissions must be granted by the user from the system settings application. Consult the manufacturer of your device for more details, as how to do this varies by device.

- On Android 5.1 and earlier, Emacs automatically receives the following permissions it has requested upon being installed:

  - `android.permission.ACCESS_COARSE_LOCATION`
  - `android.permission.ACCESS_FINE_LOCATION`
  - `android.permission.BODY_SENSORS`
  - `android.permission.CALL_PHONE`
  - `android.permission.CAMERA`
  - `android.permission.CAPTURE_CONSENTLESS_BUGREPORT_ON_USERDEBUG_BUILD`
  - `android.permission.GET_ACCOUNTS`
  - `android.permission.POST_NOTIFICATIONS`
  - `android.permission.PROCESS_OUTGOING_CALLS`
  - `android.permission.READ_CALENDAR`
  - `android.permission.READ_CALL_LOG`
  - `android.permission.READ_CELL_BROADCASTS`
  - `android.permission.READ_CONTACTS`
  - `android.permission.READ_EXTERNAL_STORAGE`
  - `android.permission.READ_PHONE_NUMBERS`
  - `android.permission.READ_PHONE_STATE`
  - `android.permission.READ_SMS`
  - `android.permission.RECEIVE_MMS`
  - `android.permission.RECEIVE_SMS`
  - `android.permission.RECEIVE_WAP_PUSH`
  - `android.permission.RECORD_AUDIO`
  - `android.permission.REQUEST_INSTALL_PACKAGES`
  - `android.permission.SEND_SMS`
  - `android.permission.SMS_FINANCIAL_TRANSACTIONS`
  - `android.permission.SYSTEM_ALERT_WINDOW`
  - `android.permission.WRITE_CALENDAR`
  - `android.permission.WRITE_CALL_LOG`
  - `android.permission.WRITE_CONTACTS`
  - `android.permission.WRITE_EXTERNAL_STORAGE`
  - `android.permission.WRITE_SETTINGS`
  - `android.permission.ACCESS_LOCATION_EXTRA_COMMANDS`
  - `android.permission.ACCESS_NETWORK_STATE`
  - `android.permission.ACCESS_WIFI_STATE`
  - `android.permission.BLUETOOTH`
  - `android.permission.BLUETOOTH_ADMIN`
  - `android.permission.BROADCAST_STICKY`
  - `android.permission.CHANGE_NETWORK_STATE`
  - `android.permission.CHANGE_WIFI_MULTICAST_STATE`
  - `android.permission.CHANGE_WIFI_STATE`
  - `android.permission.DISABLE_KEYGUARD`
  - `android.permission.EXPAND_STATUS_BAR`
  - `android.permission.FLASHLIGHT`
  - `android.permission.GET_PACKAGE_SIZE`
  - `android.permission.GET_TASKS`
  - `android.permission.INTERNET`
  - `android.permission.KILL_BACKGROUND_PROCESSES`
  - `android.permission.MODIFY_AUDIO_SETTINGS`
  - `android.permission.NFC`
  - `android.permission.PERSISTENT_ACTIVITY`
  - `android.permission.QUERY_ALL_PACKAGES`
  - `android.permission.READ_BASIC_PHONE_STATE`
  - `android.permission.READ_SYNC_SETTINGS`
  - `android.permission.READ_SYNC_STATS`
  - `android.permission.READ_USER_DICTIONARY`
  - `android.permission.RECEIVE_BOOT_COMPLETED`
  - `android.permission.REORDER_TASKS`
  - `android.permission.REQUEST_DELETE_PACKAGES`
  - `android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS`
  - `android.permission.REQUEST_OBSERVE_COMPANION_DEVICE_PRESENCE`
  - `android.permission.RESTART_PACKAGES`
  - `android.permission.SET_WALLPAPER`
  - `android.permission.SET_WALLPAPER_HINTS`
  - `android.permission.TRANSMIT_IR`
  - `android.permission.VIBRATE`
  - `android.permission.WAKE_LOCK`
  - `android.permission.WRITE_SYNC_SETTINGS`
  - `android.permission.WRITE_USER_DICTIONARY`

  While most of these permissions are left unused by Emacs itself, they are declared by Emacs as they could be useful for other programs; for example, the permission to access contacts may be useful for EUDC.


[^1]: Except in cases where a "shared user ID" is specified and other applications signed using the same "package signing key" are installed, in which case Emacs runs as the same user and has access to the same files as each of the aforementioned applications.
