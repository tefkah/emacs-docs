---
slug: Parsing-Expression-Grammars
---

Emacs Lisp provides several tools for parsing and matching text, from regular expressions (see [Regular Expressions](/docs/elisp/Regular-Expressions)) to full left-to-right (a.k.a. LL) grammar parsers (see [(bovine)Bovine parser development](https://www.gnu.org/software/emacs/manual/html_mono/bovine.html#Top)). *Parsing Expression Grammars* (PEG) are another approach to text parsing that offer more structure and composability than regular expressions, but less complexity than context-free grammars.

A Parsing Expression Grammar (PEG) describes a formal language in terms of a set of rules for recognizing strings in the language. In Emacs, a PEG parser is defined as a list of named rules, each of which matches text patterns and/or contains references to other rules. Parsing is initiated with the function `peg-run` or the macro `peg-parse` (see below), and parses text after point in the current buffer, using a given set of rules.

Each rule in a PEG is referred to as a *parsing expression* (PEX), and can be specified a literal string, a regexp-like character range or set, a peg-specific construct resembling an Emacs Lisp function call, a reference to another rule, or a combination of any of these. A grammar is expressed as a tree of rules in which one rule is typically treated as a "root" or "entry-point" rule. For instance:

```lisp
((number sign digit (* digit))
 (sign   (or "+" "-" ""))
 (digit  [0-9]))

```

Once defined, grammars can be used to parse text after point in the current buffer, in a number of ways. The `peg-parse` macro is the simplest:

### Macro: **peg-parse** *\&rest pexs*

Match *pexs* at point.

```lisp
(peg-parse
  (number sign digit (* digit))
  (sign   (or "+" "-" ""))
  (digit  [0-9]))

```

While this macro is simple it is also inflexible, as the rules must be written directly into the source code. More flexibility can be gained by using a combination of other functions and macros.

### Macro: **with-peg-rules** *rules \&rest body*

Execute *body* with *rules*, a list of PEXs, in effect. Within *BODY*, parsing is initiated with a call to `peg-run`.

### Function: **peg-run** *peg-matcher \&optional failure-function success-function*

This function accepts a single *peg-matcher*, which is the result of calling `peg` (see below) on a named rule, usually the entry-point of a larger grammar.

At the end of parsing, one of *failure-function* or *success-function* is called, depending on whether the parsing succeeded or not. If *success-function* is provided, it should be a function that receives as its only argument an anonymous function that runs all the actions collected on the stack during parsing. By default this anonymous function is simply executed. If parsing fails, a function provided as *failure-function* will be called with a list of PEG expressions that failed during parsing. By default this list is discarded.

The *peg-matcher* passed to `peg-run` is produced by a call to `peg`:

### Macro: **peg** *\&rest pexs*

Convert *pexs* into a single peg-matcher suitable for passing to `peg-run`.

The `peg-parse` example above expands to a set of calls to these functions, and could be written in full as:

```lisp
(with-peg-rules
    ((number sign digit (* digit))
     (sign   (or "+" "-" ""))
     (digit  [0-9]))
  (peg-run (peg number)))

```

This approach allows more explicit control over the "entry-point" of parsing, and allows the combination of rules from different sources.

Individual rules can also be defined using a more `defun`-like syntax, using the macro `define-peg-rule`:

### Macro: **define-peg-rule** *name args \&rest pexs*

Define *name* as a PEG rule that accepts *args* and matches *pexs* at point.

For instance:

```lisp
(define-peg-rule digit ()
  [0-9])

```

Arguments can be supplied to rules by the `funcall` PEG rule (see [PEX Definitions](/docs/elisp/PEX-Definitions)).

Another possibility is to define a named set of rules with `define-peg-ruleset`:

### Macro: **define-peg-ruleset** *name \&rest rules*

Define *name* as an identifier for *rules*.

```lisp
(define-peg-ruleset number-grammar
  ;; `digit' here references the definition above.
  (number () sign digit (* digit))
  (sign () (or "+" "-" "")))

```

Rules and rulesets defined this way can be referred to by name in later calls to `peg-run` or `with-peg-rules`:

```lisp
(with-peg-rules number-grammar
  (peg-run (peg number)))

```

By default, calls to `peg-run` or `peg-parse` produce no output: parsing simply moves point. In order to return or otherwise act upon parsed strings, rules can include *actions*, see [Parsing Actions](/docs/elisp/Parsing-Actions).
