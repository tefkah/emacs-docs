---
slug: Abbrevs
---

A defined *abbrev* is a word which *expands*, if you insert it, into some different text. Abbrevs are defined by the user to expand in specific ways. For example, you might define ‘`foo`’ as an abbrev expanding to ‘`find outer otter`’. Then you could insert ‘`find outer otter `’ into the buffer by typing `f o o SPC`.

A second kind of abbreviation facility is called *dynamic abbrev expansion*. You use dynamic abbrev expansion with an explicit command to expand the letters in the buffer before point by looking for other words in the buffer that start with those letters. See [Dynamic Abbrevs](Dynamic-Abbrevs).

A third kind, *hippie expansion*, generalizes abbreviation expansion. See [Hippie Expansion](https://www.gnu.org/software/emacs/manual/html_mono/autotype.html#Hippie-Expand) in Features for Automatic Typing.

|                                                  |    |                                                        |
| :----------------------------------------------- | -- | :----------------------------------------------------- |
| • [Abbrev Concepts](Abbrev-Concepts)             |    | Fundamentals of defined abbrevs.                       |
| • [Defining Abbrevs](Defining-Abbrevs)           |    | Defining an abbrev, so it will expand when typed.      |
| • [Expanding Abbrevs](Expanding-Abbrevs)         |    | Controlling expansion: prefixes, canceling expansion.  |
| • [Editing Abbrevs](Editing-Abbrevs)             |    | Viewing or editing the entire list of defined abbrevs. |
| • [Saving Abbrevs](Saving-Abbrevs)               |    | Saving the entire list of abbrevs for another session. |
| • [Dynamic Abbrevs](Dynamic-Abbrevs)             |    | Abbreviations for words already in the buffer.         |
| • [Dabbrev Customization](Dabbrev-Customization) |    | What is a word, for dynamic abbrevs. Case handling.    |
