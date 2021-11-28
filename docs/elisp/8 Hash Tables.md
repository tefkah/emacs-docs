---
slug: Hash-Tables
---

A hash table is a very fast kind of lookup table, somewhat like an alist (see [Association Lists](Association-Lists)) in that it maps keys to corresponding values. It differs from an alist in these ways:

*   Lookup in a hash table is extremely fast for large tables—in fact, the time required is essentially *independent* of how many elements are stored in the table. For smaller tables (a few tens of elements) alists may still be faster because hash tables have a more-or-less constant overhead.
*   The correspondences in a hash table are in no particular order.
*   There is no way to share structure between two hash tables, the way two alists can share a common tail.

Emacs Lisp provides a general-purpose hash table data type, along with a series of functions for operating on them. Hash tables have a special printed representation, which consists of ‘`#s`’ followed by a list specifying the hash table properties and contents. See [Creating Hash](Creating-Hash). (Hash notation, the initial ‘`#`’ character used in the printed representations of objects with no read representation, has nothing to do with hash tables. See [Printed Representation](Printed-Representation).)

Obarrays are also a kind of hash table, but they are a different type of object and are used only for recording interned symbols (see [Creating Symbols](Creating-Symbols)).

|                                  |    |                                              |
| :------------------------------- | -- | :------------------------------------------- |
| • [Creating Hash](Creating-Hash) |    | Functions to create hash tables.             |
| • [Hash Access](Hash-Access)     |    | Reading and writing the hash table contents. |
| • [Defining Hash](Defining-Hash) |    | Defining new comparison methods.             |
| • [Other Hash](Other-Hash)       |    | Miscellaneous.                               |
