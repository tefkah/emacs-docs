---
slug: Intro
---

You are reading about GNU Emacs, the GNU incarnation of the advanced, self-documenting, customizable, extensible editor Emacs. (The ‘`G`’ in GNU (GNU’s Not Unix) is not silent.)

We call Emacs *advanced* because it can do much more than simple insertion and deletion of text. It can control subprocesses, indent programs automatically, show multiple files at once, edit remote files like they were local files, and more. Emacs editing commands operate in terms of characters, words, lines, sentences, paragraphs, and pages, as well as expressions and comments in various programming languages.

*Self-documenting* means that at any time you can use special commands, known as *help commands*, to find out what your options are, or to find out what any command does, or to find all the commands that pertain to a given topic. See [Help](/docs/emacs/Help).

*Customizable* means that you can easily alter the behavior of Emacs commands in simple ways. For instance, if you use a programming language in which comments start with ‘`<**`’ and end with ‘`**>`’, you can tell the Emacs comment manipulation commands to use those strings (see [Comments](/docs/emacs/Comments)). To take another example, you can rebind the basic cursor motion commands (up, down, left and right) to any keys on the keyboard that you find comfortable. See [Customization](/docs/emacs/Customization).

*Extensible* means that you can go beyond simple customization and create entirely new commands. New commands are simply programs written in the Lisp language, which are run by Emacs’s own Lisp interpreter. Existing commands can even be redefined in the middle of an editing session, without having to restart Emacs. Most of the editing commands in Emacs are written in Lisp; the few exceptions could have been written in Lisp but use C instead for efficiency. Writing an extension is programming, but non-programmers can use it afterwards. See [Preface](https://www.gnu.org/software/emacs/manual/html_mono/eintr.html#Top) in An Introduction to Programming in Emacs Lisp, if you want to learn Emacs Lisp programming.
