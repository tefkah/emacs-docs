---
slug: Text
---

This chapter describes the functions that deal with the text in a buffer. Most examine, insert, or delete text in the current buffer, often operating at point or on text adjacent to point. Many are interactive. All the functions that change the text provide for undoing the changes (see [Undo](/docs/elisp/Undo)).

Many text-related functions operate on a region of text defined by two buffer positions passed in arguments named `start` and `end`. These arguments should be either markers (see [Markers](/docs/elisp/Markers)) or numeric character positions (see [Positions](/docs/elisp/Positions)). The order of these arguments does not matter; it is all right for `start` to be the end of the region and `end` the beginning. For example, `(delete-region 1 10)` and `(delete-region 10 1)` are equivalent. An `args-out-of-range` error is signaled if either `start` or `end` is outside the accessible portion of the buffer. In an interactive call, point and the mark are used for these arguments.

Throughout this chapter, “text" refers to the characters in the buffer, together with their properties (when relevant). Keep in mind that point is always between two characters, and the cursor appears on the character after point.

|                                                                |    |                                                                                          |
| :------------------------------------------------------------- | -- | :--------------------------------------------------------------------------------------- |
| • [Near Point](/docs/elisp/Near-Point)                         |    | Examining text in the vicinity of point.                                                 |
| • [Buffer Contents](/docs/elisp/Buffer-Contents)               |    | Examining text in a general fashion.                                                     |
| • [Comparing Text](/docs/elisp/Comparing-Text)                 |    | Comparing substrings of buffers.                                                         |
| • [Insertion](/docs/elisp/Insertion)                           |    | Adding new text to a buffer.                                                             |
| • [Commands for Insertion](/docs/elisp/Commands-for-Insertion) |    | User-level commands to insert text.                                                      |
| • [Deletion](/docs/elisp/Deletion)                             |    | Removing text from a buffer.                                                             |
| • [User-Level Deletion](/docs/elisp/User_002dLevel-Deletion)   |    | User-level commands to delete text.                                                      |
| • [The Kill Ring](/docs/elisp/The-Kill-Ring)                   |    | Where removed text sometimes is saved for later use.                                     |
| • [Undo](/docs/elisp/Undo)                                     |    | Undoing changes to the text of a buffer.                                                 |
| • [Maintaining Undo](/docs/elisp/Maintaining-Undo)             |    | How to enable and disable undo information. How to control how much information is kept. |
| • [Filling](/docs/elisp/Filling)                               |    | Functions for explicit filling.                                                          |
| • [Margins](/docs/elisp/Margins)                               |    | How to specify margins for filling commands.                                             |
| • [Adaptive Fill](/docs/elisp/Adaptive-Fill)                   |    | Adaptive Fill mode chooses a fill prefix from context.                                   |
| • [Auto Filling](/docs/elisp/Auto-Filling)                     |    | How auto-fill mode is implemented to break lines.                                        |
| • [Sorting](/docs/elisp/Sorting)                               |    | Functions for sorting parts of the buffer.                                               |
| • [Columns](/docs/elisp/Columns)                               |    | Computing horizontal positions, and using them.                                          |
| • [Indentation](/docs/elisp/Indentation)                       |    | Functions to insert or adjust indentation.                                               |
| • [Case Changes](/docs/elisp/Case-Changes)                     |    | Case conversion of parts of the buffer.                                                  |
| • [Text Properties](/docs/elisp/Text-Properties)               |    | Assigning Lisp property lists to text characters.                                        |
| • [Substitution](/docs/elisp/Substitution)                     |    | Replacing a given character wherever it appears.                                         |
| • [Registers](/docs/elisp/Registers)                           |    | How registers are implemented. Accessing the text or position stored in a register.      |
| • [Transposition](/docs/elisp/Transposition)                   |    | Swapping two portions of a buffer.                                                       |
| • [Replacing](/docs/elisp/Replacing)                           |    | Replacing the text of one buffer with the text of another buffer.                        |
| • [Decompression](/docs/elisp/Decompression)                   |    | Dealing with compressed data.                                                            |
| • [Base 64](/docs/elisp/Base-64)                               |    | Conversion to or from base 64 encoding.                                                  |
| • [Checksum/Hash](/docs/elisp/Checksum_002fHash)               |    | Computing cryptographic hashes.                                                          |
| • [GnuTLS Cryptography](/docs/elisp/GnuTLS-Cryptography)       |    | Cryptographic algorithms imported from GnuTLS.                                           |
| • [Parsing HTML/XML](/docs/elisp/Parsing-HTML_002fXML)         |    | Parsing HTML and XML.                                                                    |
| • [Parsing JSON](/docs/elisp/Parsing-JSON)                     |    | Parsing and generating JSON values.                                                      |
| • [JSONRPC](/docs/elisp/JSONRPC)                               |    | JSON Remote Procedure Call protocol                                                      |
| • [Atomic Changes](/docs/elisp/Atomic-Changes)                 |    | Installing several buffer changes atomically.                                            |
| • [Change Hooks](/docs/elisp/Change-Hooks)                     |    | Supplying functions to be run when text is changed.                                      |
