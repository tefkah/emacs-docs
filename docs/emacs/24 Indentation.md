---
slug: Indentation
---

*Indentation* refers to inserting or adjusting *whitespace characters* (space and/or tab characters) at the beginning of a line of text. This chapter documents indentation commands and options which are common to Text mode and related modes, as well as programming language modes. See [Program Indent](Program-Indent), for additional documentation about indenting in programming modes.

The simplest way to perform indentation is the `TAB` key. In most major modes, this runs the command `indent-for-tab-command`. (In C and related modes, `TAB` runs the command `c-indent-line-or-region`, which behaves similarly, see [C Indent](C-Indent)).

### `TAB`

Insert whitespace, or indent the current line, in a mode-appropriate way (`indent-for-tab-command`). If the region is active, indent all the lines within it.

The exact behavior of `TAB` depends on the major mode. In Text mode and related major modes, `TAB` normally inserts some combination of space and tab characters to advance point to the next tab stop (see [Tab Stops](Tab-Stops)). For this purpose, the position of the first non-whitespace character on the preceding line is treated as an additional tab stop, so you can use `TAB` to align point with the preceding line. If the region is active (see [Using Region](Using-Region)), `TAB` acts specially: it indents each line in the region so that its first non-whitespace character is aligned with the preceding line.

In programming modes, `TAB` indents the current line of code in a way that makes sense given the code in the preceding lines. If the region is active, all the lines in the region are indented this way. If point was initially within the current line’s indentation, it is repositioned to the first non-whitespace character on the line.

If you just want to insert a tab character in the buffer, type `C-q TAB` (see [Inserting Text](Inserting-Text)).

|                                                |    |                                              |
| :--------------------------------------------- | -- | :------------------------------------------- |
| • [Indentation Commands](Indentation-Commands) |    | More commands for performing indentation.    |
| • [Tab Stops](Tab-Stops)                       |    | Stop points for indentation in Text modes.   |
| • [Just Spaces](Just-Spaces)                   |    | Using only space characters for indentation. |
| • [Indent Convenience](Indent-Convenience)     |    | Optional indentation features.               |
