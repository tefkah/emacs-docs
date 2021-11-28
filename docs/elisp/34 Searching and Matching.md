---
slug: Searching-and-Matching
---

GNU Emacs provides two ways to search through a buffer for specified text: exact string searches and regular expression searches. After a regular expression search, you can examine the *match data* to determine which text matched the whole regular expression or various portions of it.

|                                                          |    |                                                                              |
| :------------------------------------------------------- | -- | :--------------------------------------------------------------------------- |
| • [String Search](/docs/elisp/String-Search)             |    | Search for an exact match.                                                   |
| • [Searching and Case](/docs/elisp/Searching-and-Case)   |    | Case-independent or case-significant searching.                              |
| • [Regular Expressions](/docs/elisp/Regular-Expressions) |    | Describing classes of strings.                                               |
| • [Regexp Search](/docs/elisp/Regexp-Search)             |    | Searching for a match for a regexp.                                          |
| • [POSIX Regexps](/docs/elisp/POSIX-Regexps)             |    | Searching POSIX-style for the longest match.                                 |
| • [Match Data](/docs/elisp/Match-Data)                   |    | Finding out which part of the text matched, after a string or regexp search. |
| • [Search and Replace](/docs/elisp/Search-and-Replace)   |    | Commands that loop, searching and replacing.                                 |
| • [Standard Regexps](/docs/elisp/Standard-Regexps)       |    | Useful regexps for finding sentences, pages,...                              |

The ‘`skip-chars…`’ functions also perform a kind of searching. See [Skipping Characters](/docs/elisp/Skipping-Characters). To search for changes in character properties, see [Property Search](/docs/elisp/Property-Search).
