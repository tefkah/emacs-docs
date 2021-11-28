---
slug: Antinews
---

For those users who live backwards in time, here is information about downgrading to Emacs version 26.3. We hope you will enjoy the greater simplicity that results from the absence of many Emacs 27.2<!-- /@w --> features.

*   Lisp objects are again implemented on the C level as integer types, not as pointers. This might be a small step for Emacs Lisp users, but it’s a giant leap for the Emacs developers who work on the C level, since it is now again easy to print Lisp object in the debugger in the decimal format, which is so much easier for debugging. It also makes calling Emacs functions from the debugger easier, and allows us to freely mix integers and Lisp objects in the C code.

*   The test suite was removed from the distribution tarball. We believe that tests need seldom if ever be run, certainly not by the end users. Removing the tests from the tarball makes it much smaller, which is important since disk space becomes more and more at premium as you move back in time.

*   Dynamic module support is disabled by default. This both makes Emacs smaller (a worthy goal by itself), and removes the complications and additional complexity related with installing module support files and letting random shared objects an opportunity to be loaded into Emacs and mess with it.

*   You now must activate any installed packages only after loading your init files. That requires an explicit call to `package-initialize` in your init file, which is a Good Thing, as it makes you think seriously where and indeed whether you’d like your packages to become available to your sessions. Simplicity should tramp convenience!

*   To reduce the amount of code in Emacs related to unimportant features, we’ve removed native rotation and resizing of images. You will have to build Emacs with ImageMagick if you want to resize or rotate images inside Emacs. We don’t expect anyone to miss that.

*   We’ve re-enabled color fonts usage by the XFT font back-end. We consider the availability of these fonts more important than a random crash here and there, especially since the use of these fonts for displaying Emoji will become less and less important as we travel back in time, and will completely disappear in some past Emacs version.

*   The function `network-interface-list` can now return only IPv4 addresses. We consider the complexity introduced by IPv6 to be too much to be justified, and on the other hand its removal is the step in the right direction, given that IPv6 is expected to be completely removed as we move back in time.

*   The limit on repetitions in regular expressions was reduced to 2\*\*15 - 1. We envision that regular expressions will become more and more simple as we move towards the distant past.

*   To simplify code and reduce complexity, we removed the capability of searching programs on remote hosts in `executable-find`. If you really need this feature (why would you?), you can always write your own shell script and run it on the remote.

*   The `:extend` face attribute is no longer available; all faces have their background color extended by default past end of line. This should significantly simplify face management and remove unnecessary code bloat, as well as make faces significantly simpler to understand and use.

*   The predicates `display-blink-cursor-p` and `display-symbol-keys-p` were deleted. They are rarely if ever needed, and can easily be substituted by appropriate calls to old and proven APIs like `display-graphic-p`. As an additional bonus, writing Lisp programs that depend on this functionality will make sure the programmer understands better what exactly is the required features of the display terminal.

*   Relative directories in the value of the `HOME` environment variable are once again interpreted relative to the `default-directory` of the current buffer. This is much simpler, and also allows `HOME` to resolve to a different place in different buffers, which allows some interesting applications.

    For the same reasons, `file-name-absolute-p` now again considers `~foo` an absolute file name, even if there’s no known user ‘`foo`’. This means a Lisp program which uses such file names will always work the same on any system, regardless of its known users.

*   File-related primitives like `file-attributes`, `file-modes`, `file-newer-than-file-p`, and some others once again return `nil` when the underlying low-level APIs fail, instead of signaling an error. We decided that functions which signal errors require more complex code from Lisp programs which use them, and found this complexity unjustified when returning `nil` will do.

*   Similarly, old-style backquotes no longer signal errors; they generate warnings instead. You can remove error handling from programs that use backquotes.

*   Formatting floating-point numbers has been sped up by letting the underlying implementation produce unpredictable values, instead of signaling errors when the number is too large to format correctly. We believe the Emacs Lisp programmers should always know what they are doing when they deal with floating-point values.

*   The function `read-char-from-minibuffer` was deleted. We decided that `read-char` should be enough for any Lisp program that needs to ask the user for a single-character input, in recognition of the fact that nothing makes Emacs Lisp hackers rejoice more than the need to sit down and write yet another interactive question-and-answer function, and make it optimal for each specific case. Consequently, no history is provided for such responses (why would someone want history of single-key strokes, anyway?).

*   The function `ngettext` was deleted. Non-English languages will become less and less widespread, let alone useful, as you move back in time, so we took this small step in that direction, and simplified Emacs as a nice bonus.

*   Focus-change notifications on text-mode frames are no longer recognized or supported. You can now safely disregard the possibility of receiving such notifications on TTY frames. This is one small step on the long road of removing all non-character input events Emacs supports on TTY frames.

*   Face specifications in `face-remapping-alist` now have to be buffer-specific, without any differences between windows showing the same buffers. This allowed us to remove a lot of unneeded code bloat from Emacs, and make the face handling much simpler.

*   The ‘`%o`’ and ‘`%x`’ formats now always produce unsigned values, as you’d expect. This allows you to reveal the underlying machine representation, which is different on each architecture, something we consider a valuable feature.

*   We no longer highlight in `font-lock-warning-face` symbols with confusable quote characters, such as U+2018. Detecting them needed non-trivial amount of code, and we firmly believe that Lisp programmers always know what they are doing, and don’t need to be annoyed with typefaces that stand out and distract.

*   The function `file-system-info` was dropped on Posix platforms, since you can always invoke `df` instead and parse its output.

*   The functions that implement the ‘`base64url`’ encoding were removed, as they can always be emulated by suitable tweaking of the normal base-64 encoding. No need to bloat Emacs and force Lisp programmers learn more interfaces on this account.

*   As part of the ongoing quest for simplicity, many other functions and variables have been eliminated.
