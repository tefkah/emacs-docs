---
slug: Parsing-Program-Source
---

Emacs provides various ways to parse program source text and produce a *syntax tree*. In a syntax tree, text is no longer considered a one-dimensional stream of characters, but a structured tree of nodes, where each node represents a piece of text. Thus, a syntax tree can enable interesting features like precise fontification, indentation, navigation, structured editing, etc.

Emacs has a simple facility for parsing balanced expressions (see [Parsing Expressions](/docs/elisp/Parsing-Expressions)). There is also the SMIE library for generic navigation and indentation (see [Simple Minded Indentation Engine](/docs/elisp/SMIE)).

In addition to those, Emacs also provides integration with [the tree-sitter library](https://tree-sitter.github.io/tree-sitter) if support for it was compiled in. The tree-sitter library implements an incremental parser and has support for a wide range of programming languages.

### Function: **treesit-available-p**

This function returns non-`nil` if tree-sitter features are available for the current Emacs session.

To be able to parse the program source using the tree-sitter library and access the syntax tree of the program, a Lisp program needs to load a language grammar library, and create a parser for that language and the current buffer. After that, the Lisp program can query the parser about specific nodes of the syntax tree. Then, it can access various kinds of information about each node, and search for nodes using a powerful pattern-matching syntax. This chapter explains how to do all this, and also how a Lisp program can work with source files that mix multiple programming languages.
