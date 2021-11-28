---
slug: Standard-Hooks
---

The following is a list of some hook variables that let you provide functions to be called from within Emacs on suitable occasions.

Most of these variables have names ending with ‘`-hook`’. They are *normal hooks*, run by means of `run-hooks`. The value of such a hook is a list of functions; the functions are called with no arguments and their values are completely ignored. The recommended way to put a new function on such a hook is to call `add-hook`. See [Hooks](/docs/elisp/Hooks), for more information about using hooks.

The variables whose names end in ‘`-functions`’ are usually *abnormal hooks* (some old code may also use the deprecated ‘`-hooks`’ suffix); their values are lists of functions, but these functions are called in a special way (they are passed arguments, or their return values are used). The variables whose names end in ‘`-function`’ have single functions as their values.

This is not an exhaustive list, it only covers the more general hooks. For example, every major mode defines a hook named ‘`modename-mode-hook`’. The major mode command runs this normal hook with `run-mode-hooks` as the very last thing it does. See [Mode Hooks](/docs/elisp/Mode-Hooks). Most minor modes have mode hooks too.

A special feature allows you to specify expressions to evaluate if and when a file is loaded (see [Hooks for Loading](/docs/elisp/Hooks-for-Loading)). That feature is not exactly a hook, but does a similar job.

### `activate-mark-hook`

### `deactivate-mark-hook`

See [The Mark](/docs/elisp/The-Mark).

### `after-change-functions`

### `before-change-functions`

### `first-change-hook`

See [Change Hooks](/docs/elisp/Change-Hooks).

### `after-change-major-mode-hook`

### `change-major-mode-after-body-hook`

See [Mode Hooks](/docs/elisp/Mode-Hooks).

### `after-init-hook`

### `before-init-hook`

### `emacs-startup-hook`

### `window-setup-hook`

See [Init File](/docs/elisp/Init-File).

### `after-insert-file-functions`

### `write-region-annotate-functions`

### `write-region-post-annotation-function`

See [Format Conversion](/docs/elisp/Format-Conversion).

### `after-make-frame-functions`

### `before-make-frame-hook`

### `server-after-make-frame-hook`

See [Creating Frames](/docs/elisp/Creating-Frames).

### `after-save-hook`

### `before-save-hook`

### `write-contents-functions`

### `write-file-functions`

See [Saving Buffers](/docs/elisp/Saving-Buffers).

### `after-setting-font-hook`

Hook run after a frame’s font changes.

### `auto-save-hook`

See [Auto-Saving](/docs/elisp/Auto_002dSaving).

### `before-hack-local-variables-hook`

### `hack-local-variables-hook`

See [File Local Variables](/docs/elisp/File-Local-Variables).

### `buffer-access-fontify-functions`

See [Lazy Properties](/docs/elisp/Lazy-Properties).

### `buffer-list-update-hook`

Hook run when the buffer list changes (see [Buffer List](/docs/elisp/Buffer-List)).

### `buffer-quit-function`

Function to call to quit the current buffer.

### `change-major-mode-hook`

See [Creating Buffer-Local](/docs/elisp/Creating-Buffer_002dLocal).

### `comint-password-function`

This abnormal hook permits a derived mode to supply a password for the underlying command interpreter without prompting the user.

### `command-line-functions`

See [Command-Line Arguments](/docs/elisp/Command_002dLine-Arguments).

### `delayed-warnings-hook`

The command loop runs this soon after `post-command-hook` (q.v.).

### `focus-in-hook`

### `focus-out-hook`

See [Input Focus](/docs/elisp/Input-Focus).

### `delete-frame-functions`

### `after-delete-frame-functions`

See [Deleting Frames](/docs/elisp/Deleting-Frames).

### `delete-terminal-functions`

See [Multiple Terminals](/docs/elisp/Multiple-Terminals).

### `pop-up-frame-function`

### `split-window-preferred-function`

See [Choosing Window Options](/docs/elisp/Choosing-Window-Options).

### `echo-area-clear-hook`

See [Echo Area Customization](/docs/elisp/Echo-Area-Customization).

### `find-file-hook`

### `find-file-not-found-functions`

See [Visiting Functions](/docs/elisp/Visiting-Functions).

### `font-lock-extend-after-change-region-function`

See [Region to Refontify](/docs/elisp/Region-to-Refontify).

### `font-lock-extend-region-functions`

See [Multiline Font Lock](/docs/elisp/Multiline-Font-Lock).

### `font-lock-fontify-buffer-function`

### `font-lock-fontify-region-function`

### `font-lock-mark-block-function`

### `font-lock-unfontify-buffer-function`

### `font-lock-unfontify-region-function`

See [Other Font Lock Variables](/docs/elisp/Other-Font-Lock-Variables).

### `fontification-functions`

See [Automatic Face Assignment](/docs/elisp/Auto-Faces).

### `frame-auto-hide-function`

See [Quitting Windows](/docs/elisp/Quitting-Windows).

### `quit-window-hook`

See [Quitting Windows](/docs/elisp/Quitting-Windows).

### `kill-buffer-hook`

### `kill-buffer-query-functions`

See [Killing Buffers](/docs/elisp/Killing-Buffers).

### `kill-emacs-hook`

### `kill-emacs-query-functions`

See [Killing Emacs](/docs/elisp/Killing-Emacs).

### `menu-bar-update-hook`

See [Menu Bar](/docs/elisp/Menu-Bar).

### `minibuffer-setup-hook`

### `minibuffer-exit-hook`

See [Minibuffer Misc](/docs/elisp/Minibuffer-Misc).

### `mouse-leave-buffer-hook`

Hook run when about to switch windows with a mouse command.

### `mouse-position-function`

See [Mouse Position](/docs/elisp/Mouse-Position).

### `prefix-command-echo-keystrokes-functions`

An abnormal hook run by prefix commands (such as `C-u`) which should return a string describing the current prefix state. For example, `C-u` produces ‘`C-u-`’ and ‘`C-u 1 2 3-`’. Each hook function is called with no arguments and should return a string describing the current prefix state, or `nil` if there’s no prefix state. See [Prefix Command Arguments](/docs/elisp/Prefix-Command-Arguments).

### `prefix-command-preserve-state-hook`

Hook run when a prefix command needs to preserve the prefix by passing the current prefix command state to the next command. For example, `C-u` needs to pass the state to the next command when the user types `C-u -` or follows `C-u` with a digit.

### `pre-redisplay-functions`

Hook run in each window just before redisplaying it. See [Forcing Redisplay](/docs/elisp/Forcing-Redisplay).

### `post-command-hook`

### `pre-command-hook`

See [Command Overview](/docs/elisp/Command-Overview).

### `post-gc-hook`

See [Garbage Collection](/docs/elisp/Garbage-Collection).

### `post-self-insert-hook`

See [Keymaps and Minor Modes](/docs/elisp/Keymaps-and-Minor-Modes).

### `suspend-hook`

### `suspend-resume-hook`

### `suspend-tty-functions`

### `resume-tty-functions`

See [Suspending Emacs](/docs/elisp/Suspending-Emacs).

### `syntax-begin-function`

### `syntax-propertize-extend-region-functions`

### `syntax-propertize-function`

### `font-lock-syntactic-face-function`

See [Syntactic Font Lock](/docs/elisp/Syntactic-Font-Lock). See [Syntax Properties](/docs/elisp/Syntax-Properties).

### `temp-buffer-setup-hook`

### `temp-buffer-show-function`

### `temp-buffer-show-hook`

See [Temporary Displays](/docs/elisp/Temporary-Displays).

### `tty-setup-hook`

See [Terminal-Specific](/docs/elisp/Terminal_002dSpecific).

### `window-configuration-change-hook`

### `window-scroll-functions`

### `window-size-change-functions`

See [Window Hooks](/docs/elisp/Window-Hooks).
