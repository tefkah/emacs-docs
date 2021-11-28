---
slug: Records
---

The purpose of records is to allow programmers to create objects with new types that are not built into Emacs. They are used as the underlying representation of `cl-defstruct` and `defclass` instances.

Internally, a record object is much like a vector; its slots can be accessed using `aref` and it can be copied using `copy-sequence`. However, the first slot is used to hold its type as returned by `type-of`. Also, in the current implementation records can have at most 4096 slots, whereas vectors can be much larger. Like arrays, records use zero-origin indexing: the first slot has index 0.

The type slot should be a symbol or a type descriptor. If it’s a type descriptor, the symbol naming its type will be returned; [Type Descriptors](/docs/elisp/Type-Descriptors). Any other kind of object is returned as-is.

The printed representation of records is ‘`#s`’ followed by a list specifying the contents. The first list element must be the record type. The following elements are the record slots.

To avoid conflicts with other type names, Lisp programs that define new types of records should normally use the naming conventions of the package where these record types are introduced for the names of the types. Note that the names of the types which could possibly conflict might not be known at the time the package defining a record type is loaded; they could be loaded at some future point in time.

A record is considered a constant for evaluation: the result of evaluating it is the same record. This does not evaluate or even examine the slots. See [Self-Evaluating Forms](/docs/elisp/Self_002dEvaluating-Forms).

|                                                                |    |                                 |
| :------------------------------------------------------------- | -- | :------------------------------ |
| • [Record Functions](/docs/elisp/Record-Functions)             |    | Functions for records.          |
| • [Backward Compatibility](/docs/elisp/Backward-Compatibility) |    | Compatibility for cl-defstruct. |
