---
slug: Memory-Usage
---

These functions and variables give information about the total amount of memory allocation that Emacs has done, broken down by data type. Note the difference between these and the values returned by `garbage-collect`; those count objects that currently exist, but these count the number or size of all allocations, including those for objects that have since been freed.

### <span className="tag variable">`variable`</span> **cons-cells-consed**

The total number of cons cells that have been allocated so far in this Emacs session.

### <span className="tag variable">`variable`</span> **floats-consed**

The total number of floats that have been allocated so far in this Emacs session.

### <span className="tag variable">`variable`</span> **vector-cells-consed**

The total number of vector cells that have been allocated so far in this Emacs session. This includes vector-like objects such as markers and overlays, plus certain objects not visible to users.

### <span className="tag variable">`variable`</span> **symbols-consed**

The total number of symbols that have been allocated so far in this Emacs session.

### <span className="tag variable">`variable`</span> **string-chars-consed**

The total number of string characters that have been allocated so far in this session.

### <span className="tag variable">`variable`</span> **intervals-consed**

The total number of intervals that have been allocated so far in this Emacs session.

### <span className="tag variable">`variable`</span> **strings-consed**

The total number of strings that have been allocated so far in this Emacs session.
