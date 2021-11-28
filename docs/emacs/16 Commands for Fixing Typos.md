---
slug: Fixit
---

In this chapter we describe commands that are useful when you catch a mistake while editing. The most fundamental of these commands is the undo command `C-/` (also bound to `C-x u` and `C-_`). This undoes a single command, or a part of a command (as in the case of `query-replace`), or several consecutive character insertions. Consecutive repetitions of `C-/` undo earlier and earlier changes, back to the limit of the undo information available.

Aside from the commands described here, you can erase text using deletion commands such as `DEL` (`delete-backward-char`). These were described earlier in this manual. See [Erasing](/docs/emacs/Erasing).

|                                          |    |                                                    |
| :--------------------------------------- | -- | :------------------------------------------------- |
| • [Undo](/docs/emacs/Undo)               |    | The Undo commands.                                 |
| • [Transpose](/docs/emacs/Transpose)     |    | Exchanging two characters, words, lines, lists...  |
| • [Fixing Case](/docs/emacs/Fixing-Case) |    | Correcting case of last word entered.              |
| • [Spelling](/docs/emacs/Spelling)       |    | Apply spelling checker to a word, or a whole file. |
