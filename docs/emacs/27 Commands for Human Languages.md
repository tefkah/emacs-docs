---
slug: Text
---

This chapter describes Emacs commands that act on *text*, by which we mean sequences of characters in a human language (as opposed to, say, a computer programming language). These commands act in ways that take into account the syntactic and stylistic conventions of human languages: conventions involving words, sentences, paragraphs, and capital letters. There are also commands for *filling*, which means rearranging the lines of a paragraph to be approximately equal in length. These commands, while intended primarily for editing text, are also often useful for editing programs.

Emacs has several major modes for editing human-language text. If the file contains ordinary text, use Text mode, which customizes Emacs in small ways for the syntactic conventions of text. Outline mode provides special commands for operating on text with an outline structure. See [Outline Mode](/docs/emacs/Outline-Mode).

Org mode extends Outline mode and turns Emacs into a full-fledged organizer: you can manage TODO lists, store notes and publish them in many formats. See the Org Info manual, which is distributed with Emacs.

Emacs has other major modes for text which contains embedded commands, such as TeX and LaTeX (see [TeX Mode](/docs/emacs/TeX-Mode)); HTML and SGML (see [SGML and HTML Modes](/docs/emacs/HTML-Mode)); XML (see the nXML mode Info manual, which is distributed with Emacs); and Groff and Nroff (see [Nroff Mode](/docs/emacs/Nroff-Mode)).

If you need to edit ASCII art pictures made out of text characters, use Picture mode, a special major mode for editing such pictures. See [Editing Pictures](/docs/emacs/Picture-Mode).
