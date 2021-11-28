---
slug: Pure-Storage
---

Emacs Lisp uses two kinds of storage for user-created Lisp objects: *normal storage* and *pure storage*. Normal storage is where all the new data created during an Emacs session are kept (see [Garbage Collection](/docs/elisp/Garbage-Collection)). Pure storage is used for certain data in the preloaded standard Lisp files—data that should never change during actual use of Emacs.

Pure storage is allocated only while `temacs` is loading the standard preloaded Lisp libraries. In the file `emacs`, it is marked as read-only (on operating systems that permit this), so that the memory space can be shared by all the Emacs jobs running on the machine at once. Pure storage is not expandable; a fixed amount is allocated when Emacs is compiled, and if that is not sufficient for the preloaded libraries, `temacs` allocates dynamic memory for the part that didn’t fit. If Emacs will be dumped using the `pdump` method (see [Building Emacs](/docs/elisp/Building-Emacs)), the pure-space overflow is of no special importance (it just means some of the preloaded stuff cannot be shared with other Emacs jobs). However, if Emacs will be dumped using the now obsolete `unexec` method, the resulting image will work, but garbage collection (see [Garbage Collection](/docs/elisp/Garbage-Collection)) is disabled in this situation, causing a memory leak. Such an overflow normally won’t happen unless you try to preload additional libraries or add features to the standard ones. Emacs will display a warning about the overflow when it starts, if it was dumped using `unexec`. If this happens, you should increase the compilation parameter `SYSTEM_PURESIZE_EXTRA` in the file `src/puresize.h` and rebuild Emacs.

### <span className="tag function">`function`</span> **purecopy** *object*

This function makes a copy in pure storage of `object`, and returns it. It copies a string by simply making a new string with the same characters, but without text properties, in pure storage. It recursively copies the contents of vectors and cons cells. It does not make copies of other objects such as symbols, but just returns them unchanged. It signals an error if asked to copy markers.

This function is a no-op except while Emacs is being built and dumped; it is usually called only in preloaded Lisp files.

### <span className="tag variable">`variable`</span> **pure-bytes-used**

The value of this variable is the number of bytes of pure storage allocated so far. Typically, in a dumped Emacs, this number is very close to the total amount of pure storage available—if it were not, we would preallocate less.

### <span className="tag variable">`variable`</span> **purify-flag**

This variable determines whether `defun` should make a copy of the function definition in pure storage. If it is non-`nil`, then the function definition is copied into pure storage.

This flag is `t` while loading all of the basic functions for building Emacs initially (allowing those functions to be shareable and non-collectible). Dumping Emacs as an executable always writes `nil` in this variable, regardless of the value it actually has before and after dumping.

You should not change this flag in a running Emacs.
