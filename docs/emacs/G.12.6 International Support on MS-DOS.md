---
slug: MS_002dDOS-and-MULE
---

Emacs on MS-DOS supports the same international character sets as it does on GNU, Unix and other platforms (see [International](International)), including coding systems for converting between the different character sets. However, due to incompatibilities between MS-DOS/MS-Windows and other systems, there are several DOS-specific aspects of this support that you should be aware of. This section describes these aspects.

The description below is largely specific to the MS-DOS port of Emacs, especially where it talks about practical implications for Emacs users.

### `M-x dos-codepage-setup`

Set up Emacs display and coding systems as appropriate for the current DOS codepage.

MS-DOS is designed to support one character set of 256 characters at any given time, but gives you a variety of character sets to choose from. The alternative character sets are known as *DOS codepages*. Each codepage includes all 128 ASCII characters, but the other 128 characters (codes 128 through 255) vary from one codepage to another. Each DOS codepage is identified by a 3-digit number, such as 850, 862, etc.

In contrast to X, which lets you use several fonts at the same time, MS-DOS normally doesn’t allow use of several codepages in a single session. MS-DOS was designed to load a single codepage at system startup, and require you to reboot in order to change it[^1]. Much the same limitation applies when you run DOS executables on other systems such as MS-Windows.

For multibyte operation on MS-DOS, Emacs needs to know which characters the chosen DOS codepage can display. So it queries the system shortly after startup to get the chosen codepage number, and stores the number in the variable `dos-codepage`. Some systems return the default value 437 for the current codepage, even though the actual codepage is different. (This typically happens when you use the codepage built into the display hardware.) You can specify a different codepage for Emacs to use by setting the variable `dos-codepage` in your init file.

Multibyte Emacs supports only certain DOS codepages: those which can display Far-Eastern scripts, like the Japanese codepage 932, and those that encode a single ISO 8859 character set.

The Far-Eastern codepages can directly display one of the MULE character sets for these countries, so Emacs simply sets up to use the appropriate terminal coding system that is supported by the codepage. The special features described in the rest of this section mostly pertain to codepages that encode ISO 8859 character sets.

For the codepages that correspond to one of the ISO character sets, Emacs knows the character set based on the codepage number. Emacs automatically creates a coding system to support reading and writing files that use the current codepage, and uses this coding system by default. The name of this coding system is `cpnnn`, where `nnn` is the codepage number.[^2]

All the `cpnnn` coding systems use the letter ‘`D`’ (for “DOS") as their mode-line mnemonic. Since both the terminal coding system and the default coding system for file I/O are set to the proper `cpnnn` coding system at startup, it is normal for the mode line on MS-DOS to begin with ‘`-DD\-`’. See [Mode Line](Mode-Line). Far-Eastern DOS terminals do not use the `cpnnn` coding systems, and thus their initial mode line looks like the Emacs default.

Since the codepage number also indicates which script you are using, Emacs automatically runs `set-language-environment` to select the language environment for that script (see [Language Environments](Language-Environments)).

If a buffer contains a character belonging to some other ISO 8859 character set, not the one that the chosen DOS codepage supports, Emacs displays it using a sequence of ASCII characters. For example, if the current codepage doesn’t have a glyph for the letter ‘`ò`’ (small ‘`o`’ with a grave accent), it is displayed as ‘``{`o}``’, where the braces serve as a visual indication that this is a single character. (This may look awkward for some non-Latin characters, such as those from Greek or Hebrew alphabets, but it is still readable by a person who knows the language.) Even though the character may occupy several columns on the screen, it is really still just a single character, and all Emacs commands treat it as one.

MS-Windows provides its own codepages, which are different from the DOS codepages for the same locale. For example, DOS codepage 850 supports the same character set as Windows codepage 1252; DOS codepage 855 supports the same character set as Windows codepage 1251, etc. The MS-Windows version of Emacs uses the current codepage for display when invoked with the ‘`-nw`’ option.

[^1]: Normally, one particular codepage is burnt into the display memory, while other codepages can be installed by modifying system configuration files, such as `CONFIG.SYS`, and rebooting. While there is third-party software that allows changing the codepage without rebooting, we describe here how a stock MS-DOS system behaves.

[^2]: The standard Emacs coding systems for ISO 8859 are not quite right for the purpose, because typically the DOS codepage does not match the standard ISO character codes. For example, the letter ‘`ç`’ (‘`c`’ with cedilla) has code 231 in the standard Latin-1 character set, but the corresponding DOS codepage 850 uses code 135 for this glyph.
