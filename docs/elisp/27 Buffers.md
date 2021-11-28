---
slug: Buffers
---

A *buffer* is a Lisp object containing text to be edited. Buffers are used to hold the contents of files that are being visited; there may also be buffers that are not visiting files. While several buffers may exist at one time, only one buffer is designated the *current buffer* at any time. Most editing commands act on the contents of the current buffer. Each buffer, including the current buffer, may or may not be displayed in any windows.

|                                              |    |                                                                              |
| :------------------------------------------- | -- | :--------------------------------------------------------------------------- |
| • [Buffer Basics](Buffer-Basics)             |    | What is a buffer?                                                            |
| • [Current Buffer](Current-Buffer)           |    | Designating a buffer as current so that primitives will access its contents. |
| • [Buffer Names](Buffer-Names)               |    | Accessing and changing buffer names.                                         |
| • [Buffer File Name](Buffer-File-Name)       |    | The buffer file name indicates which file is visited.                        |
| • [Buffer Modification](Buffer-Modification) |    | A buffer is *modified* if it needs to be saved.                              |
| • [Modification Time](Modification-Time)     |    | Determining whether the visited file was changed behind Emacs’s back.        |
| • [Read Only Buffers](Read-Only-Buffers)     |    | Modifying text is not allowed in a read-only buffer.                         |
| • [Buffer List](Buffer-List)                 |    | How to look at all the existing buffers.                                     |
| • [Creating Buffers](Creating-Buffers)       |    | Functions that create buffers.                                               |
| • [Killing Buffers](Killing-Buffers)         |    | Buffers exist until explicitly killed.                                       |
| • [Indirect Buffers](Indirect-Buffers)       |    | An indirect buffer shares text with some other buffer.                       |
| • [Swapping Text](Swapping-Text)             |    | Swapping text between two buffers.                                           |
| • [Buffer Gap](Buffer-Gap)                   |    | The gap in the buffer.                                                       |
