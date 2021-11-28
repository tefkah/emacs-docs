---
slug: Strings-and-Characters
---

A string in Emacs Lisp is an array that contains an ordered sequence of characters. Strings are used as names of symbols, buffers, and files; to send messages to users; to hold text being copied between buffers; and for many other purposes. Because strings are so important, Emacs Lisp has many functions expressly for manipulating them. Emacs Lisp programs use strings more often than individual characters.

See [Strings of Events](Strings-of-Events), for special considerations for strings of keyboard character events.

|                                                    |    |                                                |
| :------------------------------------------------- | -- | :--------------------------------------------- |
| • [Basics](String-Basics)                          |    | Basic properties of strings and characters.    |
| • [Predicates for Strings](Predicates-for-Strings) |    | Testing whether an object is a string or char. |
| • [Creating Strings](Creating-Strings)             |    | Functions to allocate new strings.             |
| • [Modifying Strings](Modifying-Strings)           |    | Altering the contents of an existing string.   |
| • [Text Comparison](Text-Comparison)               |    | Comparing characters or strings.               |
| • [String Conversion](String-Conversion)           |    | Converting to and from characters and strings. |
| • [Formatting Strings](Formatting-Strings)         |    | `format`: Emacs’s analogue of `printf`.        |
| • [Custom Format Strings](Custom-Format-Strings)   |    | Formatting custom `format` specifications.     |
| • [Case Conversion](Case-Conversion)               |    | Case conversion functions.                     |
| • [Case Tables](Case-Tables)                       |    | Customizing case conversion.                   |
