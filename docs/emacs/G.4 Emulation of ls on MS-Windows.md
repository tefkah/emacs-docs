---
slug: ls-in-Lisp
---

Dired normally uses the external program `ls` to produce the directory listing displayed in Dired buffers (see [Dired](/docs/emacs/Dired)). However, MS-Windows and MS-DOS systems don’t come with such a program, although several ports of GNU `ls` are available. Therefore, Emacs on those systems *emulates* `ls` in Lisp, by using the `ls-lisp.el` package. While `ls-lisp.el` provides a reasonably full emulation of `ls`, there are some options and features peculiar to that emulation; they are described in this section.

The `ls` emulation supports many of the `ls` switches, but it doesn’t support all of them. Here’s the list of the switches it does support: `-A`, `-a`, `-B`, `-C`, `-c`, `-G`, `-g`, `-h`, `-i`, `-n`, `-R`, `-r`, `-S`, `-s`, `-t`, `-U`, `-u`, `-v`, and `-X`. The `-F` switch is partially supported (it appends the character that classifies the file, but does not prevent symlink following).

On MS-Windows and MS-DOS, `ls-lisp.el` is preloaded when Emacs is built, so the Lisp emulation of `ls` is always used on those platforms. If you have a ported `ls`, setting `ls-lisp-use-insert-directory-program` to a non-`nil` value will revert to using an external program named by the variable `insert-directory-program`.

The order in which `ls-lisp.el` sorts files depends on several customizable options described below.

The default sorting order follows locale-specific rules derived from your system locale. You can make the order locale-independent by customizing `ls-lisp-use-string-collate` to a `nil` value.

On GNU and Unix systems, when the locale’s encoding is UTF-8, the collation order follows the Unicode Collation Algorithm (UCA). To have a similar effect on MS-Windows, the variable `ls-lisp-UCA-like-collation` should have a non-`nil` value (this is the default). The resulting sorting order ignores punctuation, symbol characters, and whitespace characters, so `.foobar`, `foobar` and `foo bar`<!-- /@w --> will appear together rather than far apart.

By default, `ls-lisp.el` uses a case-sensitive sort order for the directory listing it produces; this is so the listing looks the same as on other platforms. If you wish that the files be sorted in case-insensitive order, set the variable `ls-lisp-ignore-case` to a non-`nil` value.

By default, files and subdirectories are sorted together, to emulate the behavior of `ls`. However, native MS-Windows/MS-DOS file managers list the directories before the files; if you want that behavior, customize the option `ls-lisp-dirs-first` to a non-`nil` value.

The variable `ls-lisp-verbosity` controls the file attributes that `ls-lisp.el` displays. The value should be either `nil` or a list that contains one or more of the symbols `links`, `uid`, and `gid`. `links` means display the count of different file names that are associated with (a.k.a. *links to*) the file’s data; this is only useful on NTFS volumes. `uid` means display the numerical identifier of the user who owns the file. `gid` means display the numerical identifier of the file owner’s group. The default value is `(links uid gid)` i.e., all the 3 optional attributes are displayed. The value `nil` means not to display any of these attributes.

The variable `ls-lisp-emulation` controls the flavor of the `ls` emulation by setting the defaults for the 3 options described above: `ls-lisp-ignore-case`, `ls-lisp-dirs-first`, and `ls-lisp-verbosity`. The value of this option can be one of the following symbols:

### `GNU`

### `nil`

Emulate GNU systems; this is the default. This sets `ls-lisp-ignore-case` and `ls-lisp-dirs-first` to `nil`, and `ls-lisp-verbosity` to `(links uid gid)`.

### `UNIX`

Emulate Unix systems. Like `GNU`, but sets `ls-lisp-verbosity` to `(links uid)`.

### `MacOS`

Emulate macOS. Sets `ls-lisp-ignore-case` to `t`, and `ls-lisp-dirs-first` and `ls-lisp-verbosity` to `nil`.

### `MS-Windows`

Emulate MS-Windows. Sets `ls-lisp-ignore-case` and `ls-lisp-dirs-first` to `t`, and `ls-lisp-verbosity` to `nil` on Windows 9X and to `t` on modern versions of Windows. Note that the default emulation is *not* `MS-Windows`, even on Windows, since many users of Emacs on those platforms prefer the GNU defaults.

Any other value of `ls-lisp-emulation` means the same as `GNU`. Customizing this option calls the function `ls-lisp-set-options` to update the 3 dependent options as needed. If you change the value of this variable without using customize after `ls-lisp.el` is loaded (note that it is preloaded on MS-Windows and MS-DOS), you can call that function manually for the same result.

The variable `ls-lisp-support-shell-wildcards` controls how file-name patterns are supported: if it is non-`nil` (the default), they are treated as shell-style wildcards; otherwise they are treated as Emacs regular expressions.

The variable `ls-lisp-format-time-list` defines how to format the date and time of files. *The value of this variable is ignored*, unless Emacs cannot determine the current locale. (However, if the value of `ls-lisp-use-localized-time-format` is non-`nil`, Emacs obeys `ls-lisp-format-time-list` even if the current locale is available; see below.)

The value of `ls-lisp-format-time-list` is a list of 2 strings. The first string is used if the file was modified within the current year, while the second string is used for older files. In each of these two strings you can use ‘`%`’-sequences to substitute parts of the time. For example:

```lisp
("%b %e %H:%M" "%b %e  %Y")
```

Note that the strings substituted for these ‘`%`’-sequences depend on the current locale. See [Time Parsing](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Time-Parsing) in The Emacs Lisp Reference Manual, for more about format time specs.

Normally, Emacs formats the file time stamps in either traditional or ISO-style time format. However, if the value of the variable `ls-lisp-use-localized-time-format` is non-`nil`, Emacs formats file time stamps according to what `ls-lisp-format-time-list` specifies. The ‘`%`’-sequences in `ls-lisp-format-time-list` produce locale-dependent month and day names, which might cause misalignment of columns in Dired display. The default value of `ls-lisp-use-localized-time-format` is `nil`.
