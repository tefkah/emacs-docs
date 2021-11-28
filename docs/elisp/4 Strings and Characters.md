---
slug: Strings-and-Characters
---

A string in Emacs Lisp is an array that contains an ordered sequence of characters. Strings are used as names of symbols, buffers, and files; to send messages to users; to hold text being copied between buffers; and for many other purposes. Because strings are so important, Emacs Lisp has many functions expressly for manipulating them. Emacs Lisp programs use strings more often than individual characters.

See [Strings of Events](/docs/elisp/Strings-of-Events), for special considerations for strings of keyboard character events.

|                                                                |    |                                                |
| :------------------------------------------------------------- | -- | :--------------------------------------------- |
| • [Basics](/docs/elisp/String-Basics)                          |    | Basic properties of strings and characters.    |
| • [Predicates for Strings](/docs/elisp/Predicates-for-Strings) |    | Testing whether an object is a string or char. |
| • [Creating Strings](/docs/elisp/Creating-Strings)             |    | Functions to allocate new strings.             |
| • [Modifying Strings](/docs/elisp/Modifying-Strings)           |    | Altering the contents of an existing string.   |
| • [Text Comparison](/docs/elisp/Text-Comparison)               |    | Comparing characters or strings.               |
| • [String Conversion](/docs/elisp/String-Conversion)           |    | Converting to and from characters and strings. |
| • [Formatting Strings](/docs/elisp/Formatting-Strings)         |    | `format`: Emacs’s analogue of `printf`.        |
| • [Custom Format Strings](/docs/elisp/Custom-Format-Strings)   |    | Formatting custom `format` specifications.     |
| • [Case Conversion](/docs/elisp/Case-Conversion)               |    | Case conversion functions.                     |
| • [Case Tables](/docs/elisp/Case-Tables)                       |    | Customizing case conversion.                   |
