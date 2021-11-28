---
slug: Loading
---

Loading a file of Lisp code means bringing its contents into the Lisp environment in the form of Lisp objects. Emacs finds and opens the file, reads the text, evaluates each form, and then closes the file. Such a file is also called a *Lisp library*.

The load functions evaluate all the expressions in a file just as the `eval-buffer` function evaluates all the expressions in a buffer. The difference is that the load functions read and evaluate the text in the file as found on disk, not the text in an Emacs buffer.

The loaded file must contain Lisp expressions, either as source code or as byte-compiled code. Each form in the file is called a *top-level form*. There is no special format for the forms in a loadable file; any form in a file may equally well be typed directly into a buffer and evaluated there. (Indeed, most code is tested this way.) Most often, the forms are function definitions and variable definitions.

Emacs can also load compiled dynamic modules: shared libraries that provide additional functionality for use in Emacs Lisp programs, just like a package written in Emacs Lisp would. When a dynamic module is loaded, Emacs calls a specially-named initialization function which the module needs to implement, and which exposes the additional functions and variables to Emacs Lisp programs.

For on-demand loading of external libraries which are known in advance to be required by certain Emacs primitives, see [Dynamic Libraries](/docs/elisp/Dynamic-Libraries).

|                                                                  |    |                                                                |
| :--------------------------------------------------------------- | -- | :------------------------------------------------------------- |
| • [How Programs Do Loading](/docs/elisp/How-Programs-Do-Loading) |    | The `load` function and others.                                |
| • [Load Suffixes](/docs/elisp/Load-Suffixes)                     |    | Details about the suffixes that `load` tries.                  |
| • [Library Search](/docs/elisp/Library-Search)                   |    | Finding a library to load.                                     |
| • [Loading Non-ASCII](/docs/elisp/Loading-Non_002dASCII)         |    | Non-ASCII characters in Emacs Lisp files.                      |
| • [Autoload](/docs/elisp/Autoload)                               |    | Setting up a function to autoload.                             |
| • [Repeated Loading](/docs/elisp/Repeated-Loading)               |    | Precautions about loading a file twice.                        |
| • [Named Features](/docs/elisp/Named-Features)                   |    | Loading a library if it isn’t already loaded.                  |
| • [Where Defined](/docs/elisp/Where-Defined)                     |    | Finding which file defined a certain symbol.                   |
| • [Unloading](/docs/elisp/Unloading)                             |    | How to unload a library that was loaded.                       |
| • [Hooks for Loading](/docs/elisp/Hooks-for-Loading)             |    | Providing code to be run when particular libraries are loaded. |
| • [Dynamic Modules](/docs/elisp/Dynamic-Modules)                 |    | Modules provide additional Lisp primitives.                    |
