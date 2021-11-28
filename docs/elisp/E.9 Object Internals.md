---
slug: Object-Internals
---

Emacs Lisp provides a rich set of the data types. Some of them, like cons cells, integers and strings, are common to nearly all Lisp dialects. Some others, like markers and buffers, are quite special and needed to provide the basic support to write editor commands in Lisp. To implement such a variety of object types and provide an efficient way to pass objects between the subsystems of an interpreter, there is a set of C data structures and a special type to represent the pointers to all of them, which is known as *tagged pointer*.

In C, the tagged pointer is an object of type `Lisp_Object`. Any initialized variable of such a type always holds the value of one of the following basic data types: integer, symbol, string, cons cell, float, or vectorlike object. Each of these data types has the corresponding tag value. All tags are enumerated by `enum Lisp_Type` and placed into a 3-bit bitfield of the `Lisp_Object`. The rest of the bits is the value itself. Integers are immediate, i.e., directly represented by those *value bits*, and all other objects are represented by the C pointers to a corresponding object allocated from the heap. Width of the `Lisp_Object` is platform- and configuration-dependent: usually it’s equal to the width of an underlying platform pointer (i.e., 32-bit on a 32-bit machine and 64-bit on a 64-bit one), but also there is a special configuration where `Lisp_Object` is 64-bit but all pointers are 32-bit. The latter trick was designed to overcome the limited range of values for Lisp integers on a 32-bit system by using 64-bit `long long` type for `Lisp_Object`.

The following C data structures are defined in `lisp.h` to represent the basic data types beyond integers:

### `struct Lisp_Cons`

Cons cell, an object used to construct lists.

### `struct Lisp_String`

String, the basic object to represent a sequence of characters.

### `struct Lisp_Vector`

Array, a fixed-size set of Lisp objects which may be accessed by an index.

### `struct Lisp_Symbol`

Symbol, the unique-named entity commonly used as an identifier.

### `struct Lisp_Float`

Floating-point value.

These types are the first-class citizens of an internal type system. Since the tag space is limited, all other types are the subtypes of `Lisp_Vectorlike`. Vector subtypes are enumerated by `enum pvec_type`, and nearly all complex objects like windows, buffers, frames, and processes fall into this category.

Below there is a description of a few subtypes of `Lisp_Vectorlike`. Buffer object represents the text to display and edit. Window is the part of display structure which shows the buffer or is used as a container to recursively place other windows on the same frame. (Do not confuse Emacs Lisp window object with the window as an entity managed by the user interface system like X; in Emacs terminology, the latter is called frame.) Finally, process object is used to manage the subprocesses.

|                                          |    |                                    |
| :--------------------------------------- | -- | :--------------------------------- |
| • [Buffer Internals](Buffer-Internals)   |    | Components of a buffer structure.  |
| • [Window Internals](Window-Internals)   |    | Components of a window structure.  |
| • [Process Internals](Process-Internals) |    | Components of a process structure. |
