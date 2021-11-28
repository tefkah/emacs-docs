---
slug: Windows-Files
---

MS-Windows and MS-DOS normally use a backslash, ‘`\`’, to separate name units within a file name, instead of the slash used on other systems. Emacs on MS-DOS/MS-Windows permits use of either slash or backslash, and also knows about drive letters in file names.

On MS-DOS/MS-Windows, file names are case-insensitive, so Emacs by default ignores letter-case in file names during completion. To this end, the default value of `read-file-name-completion-ignore-case` is non-`nil` on MS-DOS/MS-Windows. See [Completion Options](Completion-Options).

The variable `w32-get-true-file-attributes` controls whether Emacs should issue additional system calls to determine more accurately file attributes in primitives like `file-attributes` and `directory-files-and-attributes`. These additional calls are needed to report correct file ownership, link counts and file types for special files such as pipes. Without these system calls, file ownership will be attributed to the current user, link counts will be always reported as 1, and special files will be reported as regular files.

If the value of this variable is `local` (the default), Emacs will issue these additional system calls only for files on local fixed drives. Any other non-`nil` value means do this even for removable and remote volumes, where this could potentially slow down Dired and other related features. The value of `nil` means never issue those system calls. Non-`nil` values are more useful on NTFS volumes, which support hard links and file security, than on FAT, FAT32, and exFAT volumes.

Unlike Unix, MS-Windows file systems restrict the set of characters that can be used in a file name. The following characters are not allowed:

*   Shell redirection symbols ‘`<`’, ‘`>`’, and ‘`|`’.
*   Colon ‘`:`’ (except after the drive letter).
*   Forward slash ‘`/`’ and backslash ‘`\`’ (except as directory separators).
*   Wildcard characters ‘`*`’ and ‘`?`’.
*   Control characters whose codepoints are 1 through 31 decimal. In particular, newlines in file names are not allowed.
*   The null character, whose codepoint is zero (this limitation exists on Unix filesystems as well).

In addition, referencing any file whose name matches a DOS character device, such as `NUL` or `LPT1` or `PRN` or `CON`, with or without any file-name extension, will always resolve to those character devices, in any directory. Therefore, only use such file names when you want to use the corresponding character device.
