---
slug: International
---

Emacs supports a wide variety of international character sets, including European and Vietnamese variants of the Latin alphabet, as well as Arabic scripts, Brahmic scripts (for languages such as Bengali, Hindi, and Thai), Cyrillic, Ethiopic, Georgian, Greek, Han (for Chinese and Japanese), Hangul (for Korean), Hebrew and IPA. Emacs also supports various encodings of these characters that are used by other internationalized software, such as word processors and mailers.

Emacs allows editing text with international characters by supporting all the related activities:

*   You can visit files with non-ASCII characters, save non-ASCII text, and pass non-ASCII text between Emacs and programs it invokes (such as compilers, spell-checkers, and mailers). Setting your language environment (see [Language Environments](Language-Environments)) takes care of setting up the coding systems and other options for a specific language or culture. Alternatively, you can specify how Emacs should encode or decode text for each command; see [Text Coding](Text-Coding).

*   You can display non-ASCII characters encoded by the various scripts. This works by using appropriate fonts on graphics displays (see [Defining Fontsets](Defining-Fontsets)), and by sending special codes to text displays (see [Terminal Coding](Terminal-Coding)). If some characters are displayed incorrectly, refer to [Undisplayable Characters](Undisplayable-Characters), which describes possible problems and explains how to solve them.

*   Characters from scripts whose natural ordering of text is from right to left are reordered for display (see [Bidirectional Editing](Bidirectional-Editing)). These scripts include Arabic, Hebrew, Syriac, Thaana, and a few others.

*   You can insert non-ASCII characters or search for them. To do that, you can specify an input method (see [Select Input Method](Select-Input-Method)) suitable for your language, or use the default input method set up when you choose your language environment. If your keyboard can produce non-ASCII characters, you can select an appropriate keyboard coding system (see [Terminal Coding](Terminal-Coding)), and Emacs will accept those characters. Latin-1 characters can also be input by using the `C-x 8` prefix, see [Unibyte Mode](Unibyte-Mode).

    With the X Window System, your locale should be set to an appropriate value to make sure Emacs interprets keyboard input correctly; see [locales](Language-Environments).

The rest of this chapter describes these issues in detail.

|                                                        |    |                                                                                |
| :----------------------------------------------------- | -- | :----------------------------------------------------------------------------- |
| • [International Chars](International-Chars)           |    | Basic concepts of multibyte characters.                                        |
| • [Language Environments](Language-Environments)       |    | Setting things up for the language you use.                                    |
| • [Input Methods](Input-Methods)                       |    | Entering text characters not on your keyboard.                                 |
| • [Select Input Method](Select-Input-Method)           |    | Specifying your choice of input methods.                                       |
| • [Coding Systems](Coding-Systems)                     |    | Character set conversion when you read and write files, and so on.             |
| • [Recognize Coding](Recognize-Coding)                 |    | How Emacs figures out which conversion to use.                                 |
| • [Specify Coding](Specify-Coding)                     |    | Specifying a file’s coding system explicitly.                                  |
| • [Output Coding](Output-Coding)                       |    | Choosing coding systems for output.                                            |
| • [Text Coding](Text-Coding)                           |    | Choosing conversion to use for file text.                                      |
| • [Communication Coding](Communication-Coding)         |    | Coding systems for interprocess communication.                                 |
| • [File Name Coding](File-Name-Coding)                 |    | Coding systems for file *names*.                                               |
| • [Terminal Coding](Terminal-Coding)                   |    | Specifying coding systems for converting terminal input and output.            |
| • [Fontsets](Fontsets)                                 |    | Fontsets are collections of fonts that cover the whole spectrum of characters. |
| • [Defining Fontsets](Defining-Fontsets)               |    | Defining a new fontset.                                                        |
| • [Modifying Fontsets](Modifying-Fontsets)             |    | Modifying an existing fontset.                                                 |
| • [Undisplayable Characters](Undisplayable-Characters) |    | When characters don’t display.                                                 |
| • [Unibyte Mode](Unibyte-Mode)                         |    | You can pick one European character set to use without multibyte characters.   |
| • [Charsets](Charsets)                                 |    | How Emacs groups its internal character codes.                                 |
| • [Bidirectional Editing](Bidirectional-Editing)       |    | Support for right-to-left scripts.                                             |
