---
slug: Sequences-Arrays-Vectors
---

The *sequence* type is the union of two other Lisp types: lists and arrays. In other words, any list is a sequence, and any array is a sequence. The common property that all sequences have is that each is an ordered collection of elements.

An *array* is a fixed-length object with a slot for each of its elements. All the elements are accessible in constant time. The four types of arrays are strings, vectors, char-tables and bool-vectors.

A list is a sequence of elements, but it is not a single primitive object; it is made of cons cells, one cell per element. Finding the `n`th element requires looking through `n` cons cells, so elements farther from the beginning of the list take longer to access. But it is possible to add elements to the list, or remove elements.

The following diagram shows the relationship between these types:

```lisp
          _____________________________________________
         |                                             |
         |          Sequence                           |
         |  ______   ________________________________  |
         | |      | |                                | |
         | | List | |             Array              | |
         | |      | |    ________       ________     | |
         | |______| |   |        |     |        |    | |
         |          |   | Vector |     | String |    | |
         |          |   |________|     |________|    | |
         |          |  ____________   _____________  | |
         |          | |            | |             | | |
         |          | | Char-table | | Bool-vector | | |
         |          | |____________| |_____________| | |
         |          |________________________________| |
         |_____________________________________________|
```

|                                                        |    |                                                |
| :----------------------------------------------------- | -- | :--------------------------------------------- |
| • [Sequence Functions](/docs/elisp/Sequence-Functions) |    | Functions that accept any kind of sequence.    |
| • [Arrays](/docs/elisp/Arrays)                         |    | Characteristics of arrays in Emacs Lisp.       |
| • [Array Functions](/docs/elisp/Array-Functions)       |    | Functions specifically for arrays.             |
| • [Vectors](/docs/elisp/Vectors)                       |    | Special characteristics of Emacs Lisp vectors. |
| • [Vector Functions](/docs/elisp/Vector-Functions)     |    | Functions specifically for vectors.            |
| • [Char-Tables](/docs/elisp/Char_002dTables)           |    | How to work with char-tables.                  |
| • [Bool-Vectors](/docs/elisp/Bool_002dVectors)         |    | How to work with bool-vectors.                 |
| • [Rings](/docs/elisp/Rings)                           |    | Managing a fixed-size ring of objects.         |
