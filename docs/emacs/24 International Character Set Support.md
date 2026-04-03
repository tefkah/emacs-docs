---
slug: International
---

Emacs supports a wide variety of international character sets, including European and Vietnamese variants of the Latin alphabet, as well as Arabic scripts, Brahmic scripts (for languages such as Bengali, Hindi, and Thai), Cyrillic, Ethiopic, Georgian, Greek, Han (for Chinese and Japanese), Hangul (for Korean), Hebrew and IPA. Emacs also supports various encodings of these characters that are used by other internationalized software, such as word processors and mailers.

Emacs allows editing text with international characters by supporting all the related activities:

- You can visit files with non-ASCII characters, save non-ASCII text, and pass non-ASCII text between Emacs and programs it invokes (such as compilers, spell-checkers, and mailers). Setting your language environment (see [Language Environments](/docs/emacs/Language-Environments)) takes care of setting up the coding systems and other options for a specific language or culture. Alternatively, you can specify how Emacs should encode or decode text for each command; see [Specifying a Coding System for File Text](/docs/emacs/Text-Coding).

- You can display non-ASCII characters encoded by the various scripts. This works by using appropriate fonts on graphics displays (see [Defining Fontsets](/docs/emacs/Defining-Fontsets)), and by sending special codes to text displays (see [Coding Systems for Terminal I/O](/docs/emacs/Terminal-Coding)). If some characters are displayed incorrectly, refer to [Undisplayable Characters](/docs/emacs/Undisplayable-Characters), which describes possible problems and explains how to solve them.

- Characters from scripts whose natural ordering of text is from right to left are reordered for display (see [Bidirectional Editing](/docs/emacs/Bidirectional-Editing)). These scripts include Arabic, Hebrew, Syriac, Thaana, and a few others.

- You can insert non-ASCII characters or search for them. To do that, you can specify an Emacs input method (see [Selecting an Input Method](/docs/emacs/Select-Input-Method)) suitable for your language, or use the default input method set up when you choose your language environment. If your keyboard can produce non-ASCII characters, you can select an appropriate keyboard coding system (see [Coding Systems for Terminal I/O](/docs/emacs/Terminal-Coding)), and Emacs will accept those characters. On graphical displays, modern systems typically provide their native input methods, and Latin-1 characters can also be input by using the `C-x 8` prefix, see [Unibyte Editing Mode](/docs/emacs/Unibyte-Mode).

  With the X Window System, your locale should be set to an appropriate value to make sure Emacs interprets keyboard input correctly; see [locales](/docs/emacs/Language-Environments), and [Coding Systems for X Keyboard Input](/docs/emacs/X-Coding).

The rest of this chapter describes these issues in detail.
