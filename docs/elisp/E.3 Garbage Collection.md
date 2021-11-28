---
slug: Garbage-Collection
---

When a program creates a list or the user defines a new function (such as by loading a library), that data is placed in normal storage. If normal storage runs low, then Emacs asks the operating system to allocate more memory. Different types of Lisp objects, such as symbols, cons cells, small vectors, markers, etc., are segregated in distinct blocks in memory. (Large vectors, long strings, buffers and certain other editing types, which are fairly large, are allocated in individual blocks, one per object; small strings are packed into blocks of 8k bytes, and small vectors are packed into blocks of 4k bytes).

Beyond the basic vector, a lot of objects like markers, overlays and buffers are managed as if they were vectors. The corresponding C data structures include the `union vectorlike_header` field whose `size` member contains the subtype enumerated by `enum pvec_type` and an information about how many `Lisp_Object` fields this structure contains and what the size of the rest data is. This information is needed to calculate the memory footprint of an object, and used by the vector allocation code while iterating over the vector blocks.

It is quite common to use some storage for a while, then release it by (for example) killing a buffer or deleting the last pointer to an object. Emacs provides a *garbage collector* to reclaim this abandoned storage. The garbage collector operates by finding and marking all Lisp objects that are still accessible to Lisp programs. To begin with, it assumes all the symbols, their values and associated function definitions, and any data presently on the stack, are accessible. Any objects that can be reached indirectly through other accessible objects are also accessible.

When marking is finished, all objects still unmarked are garbage. No matter what the Lisp program or the user does, it is impossible to refer to them, since there is no longer a way to reach them. Their space might as well be reused, since no one will miss them. The second (sweep) phase of the garbage collector arranges to reuse them.

The sweep phase puts unused cons cells onto a *free list* for future allocation; likewise for symbols and markers. It compacts the accessible strings so they occupy fewer 8k blocks; then it frees the other 8k blocks. Unreachable vectors from vector blocks are coalesced to create largest possible free areas; if a free area spans a complete 4k block, that block is freed. Otherwise, the free area is recorded in a free list array, where each entry corresponds to a free list of areas of the same size. Large vectors, buffers, and other large objects are allocated and freed individually.

> **Common Lisp note:** Unlike other Lisps, GNU Emacs Lisp does not call the garbage collector when the free list is empty. Instead, it simply requests the operating system to allocate more storage, and processing continues until `gc-cons-threshold` bytes have been used.
>
> This means that you can make sure that the garbage collector will not run during a certain portion of a Lisp program by calling the garbage collector explicitly just before it (provided that portion of the program does not use so much space as to force a second garbage collection).

### <span className="tag command">`command`</span> **garbage-collect**

This command runs a garbage collection, and returns information on the amount of space in use. (Garbage collection can also occur spontaneously if you use more than `gc-cons-threshold` bytes of Lisp data since the previous garbage collection.)

`garbage-collect` returns a list with information on amount of space in use, where each entry has the form ‘`(name size used)`’ or ‘`(name size used free)`’. In the entry, `name` is a symbol describing the kind of objects this entry represents, `size` is the number of bytes used by each one, `used` is the number of those objects that were found live in the heap, and optional `free` is the number of those objects that are not live but that Emacs keeps around for future allocations. So an overall result is:

```lisp
((conses cons-size used-conses free-conses)
 (symbols symbol-size used-symbols free-symbols)
 (strings string-size used-strings free-strings)
 (string-bytes byte-size used-bytes)
 (vectors vector-size used-vectors)
 (vector-slots slot-size used-slots free-slots)
 (floats float-size used-floats free-floats)
 (intervals interval-size used-intervals free-intervals)
 (buffers buffer-size used-buffers)
 (heap unit-size total-size free-size))
```

Here is an example:

```lisp
(garbage-collect)
      ⇒ ((conses 16 49126 8058) (symbols 48 14607 0)
                 (strings 32 2942 2607)
                 (string-bytes 1 78607) (vectors 16 7247)
                 (vector-slots 8 341609 29474) (floats 8 71 102)
                 (intervals 56 27 26) (buffers 944 8)
                 (heap 1024 11715 2678))
```

Below is a table explaining each element. Note that last `heap` entry is optional and present only if an underlying `malloc` implementation provides `mallinfo` function.

### `cons-size`

Internal size of a cons cell, i.e., `sizeof (struct Lisp_Cons)`.

### `used-conses`

The number of cons cells in use.

### `free-conses`

The number of cons cells for which space has been obtained from the operating system, but that are not currently being used.

### `symbol-size`

Internal size of a symbol, i.e., `sizeof (struct Lisp_Symbol)`.

### `used-symbols`

The number of symbols in use.

### `free-symbols`

The number of symbols for which space has been obtained from the operating system, but that are not currently being used.

### `string-size`

Internal size of a string header, i.e., `sizeof (struct Lisp_String)`.

### `used-strings`

The number of string headers in use.

### `free-strings`

The number of string headers for which space has been obtained from the operating system, but that are not currently being used.

### `byte-size`

This is used for convenience and equals to `sizeof (char)`.

### `used-bytes`

The total size of all string data in bytes.

### `vector-size`

Size in bytes of a vector of length 1, including its header.

### `used-vectors`

The number of vector headers allocated from the vector blocks.

### `slot-size`

Internal size of a vector slot, always equal to `sizeof (Lisp_Object)`.

### `used-slots`

The number of slots in all used vectors. Slot counts might include some or all overhead from vector headers, depending on the platform.

### `free-slots`

The number of free slots in all vector blocks.

### `float-size`

Internal size of a float object, i.e., `sizeof (struct Lisp_Float)`. (Do not confuse it with the native platform `float` or `double`.)

### `used-floats`

The number of floats in use.

### `free-floats`

The number of floats for which space has been obtained from the operating system, but that are not currently being used.

### `interval-size`

Internal size of an interval object, i.e., `sizeof (struct interval)`.

### `used-intervals`

The number of intervals in use.

### `free-intervals`

The number of intervals for which space has been obtained from the operating system, but that are not currently being used.

### `buffer-size`

Internal size of a buffer, i.e., `sizeof (struct buffer)`. (Do not confuse with the value returned by `buffer-size` function.)

### `used-buffers`

The number of buffer objects in use. This includes killed buffers invisible to users, i.e., all buffers in `all_buffers` list.

### `unit-size`

The unit of heap space measurement, always equal to 1024 bytes.

### `total-size`

Total heap size, in `unit-size` units.

### `free-size`

Heap space which is not currently used, in `unit-size` units.

If there was overflow in pure space (see [Pure Storage](/docs/elisp/Pure-Storage)), and Emacs was dumped using the (now obsolete) `unexec` method (see [Building Emacs](/docs/elisp/Building-Emacs)), then `garbage-collect` returns `nil`, because a real garbage collection cannot be done in that case.

### <span className="tag useroption">`user option`</span> **garbage-collection-messages**

If this variable is non-`nil`, Emacs displays a message at the beginning and end of garbage collection. The default value is `nil`.

### <span className="tag variable">`variable`</span> **post-gc-hook**

This is a normal hook that is run at the end of garbage collection. Garbage collection is inhibited while the hook functions run, so be careful writing them.

### <span className="tag useroption">`user option`</span> **gc-cons-threshold**

The value of this variable is the number of bytes of storage that must be allocated for Lisp objects after one garbage collection in order to trigger another garbage collection. You can use the result returned by `garbage-collect` to get an information about size of the particular object type; space allocated to the contents of buffers does not count.

The initial threshold value is `GC_DEFAULT_THRESHOLD`, defined in `alloc.c`. Since it’s defined in `word_size` units, the value is 400,000 for the default 32-bit configuration and 800,000 for the 64-bit one. If you specify a larger value, garbage collection will happen less often. This reduces the amount of time spent garbage collecting, but increases total memory use. You may want to do this when running a program that creates lots of Lisp data.

You can make collections more frequent by specifying a smaller value, down to 1/10th of `GC_DEFAULT_THRESHOLD`. A value less than this minimum will remain in effect only until the subsequent garbage collection, at which time `garbage-collect` will set the threshold back to the minimum.

### <span className="tag useroption">`user option`</span> **gc-cons-percentage**

The value of this variable specifies the amount of consing before a garbage collection occurs, as a fraction of the current heap size. This criterion and `gc-cons-threshold` apply in parallel, and garbage collection occurs only when both criteria are satisfied.

As the heap size increases, the time to perform a garbage collection increases. Thus, it can be desirable to do them less frequently in proportion.

Control over the garbage collector via `gc-cons-threshold` and `gc-cons-percentage` is only approximate. Although Emacs checks for threshold exhaustion regularly, for efficiency reasons it does not do so immediately after every change to the heap or to `gc-cons-threshold` or `gc-cons-percentage`, so exhausting the threshold does not immediately trigger garbage collection. Also, for efficiency in threshold calculations Emacs approximates the heap size, which counts the bytes used by currently-accessible objects in the heap.

The value returned by `garbage-collect` describes the amount of memory used by Lisp data, broken down by data type. By contrast, the function `memory-limit` provides information on the total amount of memory Emacs is currently using.

### <span className="tag function">`function`</span> **memory-limit**

This function returns an estimate of the total amount of bytes of virtual memory that Emacs is currently using, divided by 1024. You can use this to get a general idea of how your actions affect the memory usage.

### <span className="tag variable">`variable`</span> **memory-full**

This variable is `t` if Emacs is nearly out of memory for Lisp objects, and `nil` otherwise.

### <span className="tag function">`function`</span> **memory-use-counts**

This returns a list of numbers that count the number of objects created in this Emacs session. Each of these counters increments for a certain kind of object. See the documentation string for details.

### <span className="tag function">`function`</span> **memory-info**

This functions returns an amount of total system memory and how much of it is free. On an unsupported system, the value may be `nil`.

### <span className="tag variable">`variable`</span> **gcs-done**

This variable contains the total number of garbage collections done so far in this Emacs session.

### <span className="tag variable">`variable`</span> **gc-elapsed**

This variable contains the total number of seconds of elapsed time during garbage collection so far in this Emacs session, as a floating-point number.
