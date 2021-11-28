---
slug: Emacs-Lisp
---

The homepage for GNU Emacs is at [https://www.gnu.org/software/emacs/](https://www.gnu.org/software/emacs/).\
For information on using Emacs, refer to the [Emacs Manual](https://www.gnu.org/software/emacs/manual/emacs.html).\
To view this manual in other formats, click [here](https://www.gnu.org/software/emacs/manual/elisp.html).

This is the GNU Emacs Lisp Reference Manual corresponding to Emacs version 27.2.

Copyright © 1990–1996, 1998–2021 Free Software Foundation, Inc.

> Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with the Invariant Sections being “GNU General Public License," with the Front-Cover Texts being “A GNU Manual," and with the Back-Cover Texts as in (a) below. A copy of the license is included in the section entitled “GNU Free Documentation License."
>
> (a) The FSF’s Back-Cover Text is: “You have the freedom to copy and modify this GNU manual. Buying copies from the FSF supports it in developing GNU and promoting software freedom."

|                                                                  |                                                                                                                                             |
| :--------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [Introduction](Introduction)                                     | Introduction and conventions used.                                                                                                          |
|                                                                  |                                                                                                                                             |
| [Lisp Data Types](Lisp-Data-Types)                               | Data types of objects in Emacs Lisp.                                                                                                        |
| [Numbers](Numbers)                                               | Numbers and arithmetic functions.                                                                                                           |
| [Strings and Characters](Strings-and-Characters)                 | Strings, and functions that work on them.                                                                                                   |
| [Lists](Lists)                                                   | Lists, cons cells, and related functions.                                                                                                   |
| [Sequences Arrays Vectors](Sequences-Arrays-Vectors)             | Lists, strings and vectors are called sequences. Certain functions act on any kind of sequence. The description of vectors is here as well. |
| [Records](Records)                                               | Compound objects with programmer-defined types.                                                                                             |
| [Hash Tables](Hash-Tables)                                       | Very fast lookup-tables.                                                                                                                    |
| [Symbols](Symbols)                                               | Symbols represent names, uniquely.                                                                                                          |
|                                                                  |                                                                                                                                             |
| [Evaluation](Evaluation)                                         | How Lisp expressions are evaluated.                                                                                                         |
| [Control Structures](Control-Structures)                         | Conditionals, loops, nonlocal exits.                                                                                                        |
| [Variables](Variables)                                           | Using symbols in programs to stand for values.                                                                                              |
| [Functions](Functions)                                           | A function is a Lisp program that can be invoked from other functions.                                                                      |
| [Macros](Macros)                                                 | Macros are a way to extend the Lisp language.                                                                                               |
| [Customization](Customization)                                   | Making variables and faces customizable.                                                                                                    |
|                                                                  |                                                                                                                                             |
| [Loading](Loading)                                               | Reading files of Lisp code into Lisp.                                                                                                       |
| [Byte Compilation](Byte-Compilation)                             | Compilation makes programs run faster.                                                                                                      |
| [Debugging](Debugging)                                           | Tools and tips for debugging Lisp programs.                                                                                                 |
|                                                                  |                                                                                                                                             |
| [Read and Print](Read-and-Print)                                 | Converting Lisp objects to text and back.                                                                                                   |
| [Minibuffers](Minibuffers)                                       | Using the minibuffer to read input.                                                                                                         |
| [Command Loop](Command-Loop)                                     | How the editor command loop works, and how you can call its subroutines.                                                                    |
| [Keymaps](Keymaps)                                               | Defining the bindings from keys to commands.                                                                                                |
| [Modes](Modes)                                                   | Defining major and minor modes.                                                                                                             |
| [Documentation](Documentation)                                   | Writing and using documentation strings.                                                                                                    |
|                                                                  |                                                                                                                                             |
| [Files](Files)                                                   | Accessing files.                                                                                                                            |
| [Backups and Auto-Saving](Backups-and-Auto_002dSaving)           | Controlling how backups and auto-save files are made.                                                                                       |
| [Buffers](Buffers)                                               | Creating and using buffer objects.                                                                                                          |
| [Windows](Windows)                                               | Manipulating windows and displaying buffers.                                                                                                |
| [Frames](Frames)                                                 | Making multiple system-level windows.                                                                                                       |
| [Positions](Positions)                                           | Buffer positions and motion functions.                                                                                                      |
| [Markers](Markers)                                               | Markers represent positions and update automatically when the text is changed.                                                              |
|                                                                  |                                                                                                                                             |
| [Text](Text)                                                     | Examining and changing text in buffers.                                                                                                     |
| [Non-ASCII Characters](Non_002dASCII-Characters)                 | Non-ASCII text in buffers and strings.                                                                                                      |
| [Searching and Matching](Searching-and-Matching)                 | Searching buffers for strings or regexps.                                                                                                   |
| [Syntax Tables](Syntax-Tables)                                   | The syntax table controls word and list parsing.                                                                                            |
| [Abbrevs](Abbrevs)                                               | How Abbrev mode works, and its data structures.                                                                                             |
|                                                                  |                                                                                                                                             |
| [Threads](Threads)                                               | Concurrency in Emacs Lisp.                                                                                                                  |
| [Processes](Processes)                                           | Running and communicating with subprocesses.                                                                                                |
| [Display](Display)                                               | Features for controlling the screen display.                                                                                                |
| [System Interface](System-Interface)                             | Getting the user id, system type, environment variables, and other such things.                                                             |
|                                                                  |                                                                                                                                             |
| [Packaging](Packaging)                                           | Preparing Lisp code for distribution.                                                                                                       |
| Appendices                                                       |                                                                                                                                             |
| [Antinews](Antinews)                                             | Info for users downgrading to Emacs 26.                                                                                                     |
| [GNU Free Documentation License](GNU-Free-Documentation-License) | The license for this documentation.                                                                                                         |
| [GPL](GPL)                                                       | Conditions for copying and changing GNU Emacs.                                                                                              |
| [Tips](Tips)                                                     | Advice and coding conventions for Emacs Lisp.                                                                                               |
| [GNU Emacs Internals](GNU-Emacs-Internals)                       | Building and dumping Emacs; internal data structures.                                                                                       |
| [Standard Errors](Standard-Errors)                               | List of some standard error symbols.                                                                                                        |
| [Standard Keymaps](Standard-Keymaps)                             | List of some standard keymaps.                                                                                                              |
| [Standard Hooks](Standard-Hooks)                                 | List of some standard hook variables.                                                                                                       |
|                                                                  |                                                                                                                                             |
| [Index](Index)                                                   | Index including concepts, functions, variables, and other terms.                                                                            |
|                                                                  |                                                                                                                                             |

## Detailed Node Listing

Here are other nodes that are subnodes of those already listed, mentioned here so you can get to them in one step:

| Introduction                                                             |                                                                                                                  |
| :----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [Caveats](Caveats)                                                       | Flaws and a request for help.                                                                                    |
| [Lisp History](Lisp-History)                                             | Emacs Lisp is descended from Maclisp.                                                                            |
| [Conventions](Conventions)                                               | How the manual is formatted.                                                                                     |
| [Version Info](Version-Info)                                             | Which Emacs version is running?                                                                                  |
| [Acknowledgments](Acknowledgments)                                       | The authors, editors, and sponsors of this manual.                                                               |
| Conventions                                                              |                                                                                                                  |
| [Some Terms](Some-Terms)                                                 | Explanation of terms we use in this manual.                                                                      |
| [nil and t](nil-and-t)                                                   | How the symbols `nil` and `t` are used.                                                                          |
| [Evaluation Notation](Evaluation-Notation)                               | The format we use for examples of evaluation.                                                                    |
| [Printing Notation](Printing-Notation)                                   | The format we use when examples print text.                                                                      |
| [Error Messages](Error-Messages)                                         | The format we use for examples of errors.                                                                        |
| [Buffer Text Notation](Buffer-Text-Notation)                             | The format we use for buffer contents in examples.                                                               |
| [Format of Descriptions](Format-of-Descriptions)                         | Notation for describing functions, variables, etc.                                                               |
| Format of Descriptions                                                   |                                                                                                                  |
| [A Sample Function Description](A-Sample-Function-Description)           | A description of an imaginary function, `foo`.                                                                   |
| [A Sample Variable Description](A-Sample-Variable-Description)           | A description of an imaginary variable, `electric-future-map`.                                                   |
| Lisp Data Types                                                          |                                                                                                                  |
| [Printed Representation](Printed-Representation)                         | How Lisp objects are represented as text.                                                                        |
| [Special Read Syntax](Special-Read-Syntax)                               | An overview of all the special sequences.                                                                        |
| [Comments](Comments)                                                     | Comments and their formatting conventions.                                                                       |
| [Programming Types](Programming-Types)                                   | Types found in all Lisp systems.                                                                                 |
| [Editing Types](Editing-Types)                                           | Types specific to Emacs.                                                                                         |
| [Circular Objects](Circular-Objects)                                     | Read syntax for circular structure.                                                                              |
| [Type Predicates](Type-Predicates)                                       | Tests related to types.                                                                                          |
| [Equality Predicates](Equality-Predicates)                               | Tests of equality between any two objects.                                                                       |
| [Mutability](Mutability)                                                 | Some objects should not be modified.                                                                             |
| Programming Types                                                        |                                                                                                                  |
| [Integer Type](Integer-Type)                                             | Numbers without fractional parts.                                                                                |
| [Floating-Point Type](Floating_002dPoint-Type)                           | Numbers with fractional parts and with a large range.                                                            |
| [Character Type](Character-Type)                                         | The representation of letters, numbers and control characters.                                                   |
| [Symbol Type](Symbol-Type)                                               | A multi-use object that refers to a function, variable, or property list, and has a unique identity.             |
| [Sequence Type](Sequence-Type)                                           | Both lists and arrays are classified as sequences.                                                               |
| [Cons Cell Type](Cons-Cell-Type)                                         | Cons cells, and lists (which are made from cons cells).                                                          |
| [Array Type](Array-Type)                                                 | Arrays include strings and vectors.                                                                              |
| [String Type](String-Type)                                               | An (efficient) array of characters.                                                                              |
| [Vector Type](Vector-Type)                                               | One-dimensional arrays.                                                                                          |
| [Char-Table Type](Char_002dTable-Type)                                   | One-dimensional sparse arrays indexed by characters.                                                             |
| [Bool-Vector Type](Bool_002dVector-Type)                                 | One-dimensional arrays of `t` or `nil`.                                                                          |
| [Hash Table Type](Hash-Table-Type)                                       | Super-fast lookup tables.                                                                                        |
| [Function Type](Function-Type)                                           | A piece of executable code you can call from elsewhere.                                                          |
| [Macro Type](Macro-Type)                                                 | A method of expanding an expression into another expression, more fundamental but less pretty.                   |
| [Primitive Function Type](Primitive-Function-Type)                       | A function written in C, callable from Lisp.                                                                     |
| [Byte-Code Type](Byte_002dCode-Type)                                     | A function written in Lisp, then compiled.                                                                       |
| [Record Type](Record-Type)                                               | Compound objects with programmer-defined types.                                                                  |
| [Type Descriptors](Type-Descriptors)                                     | Objects holding information about types.                                                                         |
| [Autoload Type](Autoload-Type)                                           | A type used for automatically loading seldom-used functions.                                                     |
| [Finalizer Type](Finalizer-Type)                                         | Runs code when no longer reachable.                                                                              |
| Character Type                                                           |                                                                                                                  |
| [Basic Char Syntax](Basic-Char-Syntax)                                   | Syntax for regular characters.                                                                                   |
| [General Escape Syntax](General-Escape-Syntax)                           | How to specify characters by their codes.                                                                        |
| [Ctl-Char Syntax](Ctl_002dChar-Syntax)                                   | Syntax for control characters.                                                                                   |
| [Meta-Char Syntax](Meta_002dChar-Syntax)                                 | Syntax for meta-characters.                                                                                      |
| [Other Char Bits](Other-Char-Bits)                                       | Syntax for hyper-, super-, and alt-characters.                                                                   |
| Cons Cell and List Types                                                 |                                                                                                                  |
| [Box Diagrams](Box-Diagrams)                                             | Drawing pictures of lists.                                                                                       |
| [Dotted Pair Notation](Dotted-Pair-Notation)                             | A general syntax for cons cells.                                                                                 |
| [Association List Type](Association-List-Type)                           | A specially constructed list.                                                                                    |
| String Type                                                              |                                                                                                                  |
| [Syntax for Strings](Syntax-for-Strings)                                 | How to specify Lisp strings.                                                                                     |
| [Non-ASCII in Strings](Non_002dASCII-in-Strings)                         | International characters in strings.                                                                             |
| [Nonprinting Characters](Nonprinting-Characters)                         | Literal unprintable characters in strings.                                                                       |
| [Text Props and Strings](Text-Props-and-Strings)                         | Strings with text properties.                                                                                    |
| Editing Types                                                            |                                                                                                                  |
| [Buffer Type](Buffer-Type)                                               | The basic object of editing.                                                                                     |
| [Marker Type](Marker-Type)                                               | A position in a buffer.                                                                                          |
| [Window Type](Window-Type)                                               | Buffers are displayed in windows.                                                                                |
| [Frame Type](Frame-Type)                                                 | Windows subdivide frames.                                                                                        |
| [Terminal Type](Terminal-Type)                                           | A terminal device displays frames.                                                                               |
| [Window Configuration Type](Window-Configuration-Type)                   | Recording the way a frame is subdivided.                                                                         |
| [Frame Configuration Type](Frame-Configuration-Type)                     | Recording the status of all frames.                                                                              |
| [Process Type](Process-Type)                                             | A subprocess of Emacs running on the underlying OS.                                                              |
| [Thread Type](Thread-Type)                                               | A thread of Emacs Lisp execution.                                                                                |
| [Mutex Type](Mutex-Type)                                                 | An exclusive lock for thread synchronization.                                                                    |
| [Condition Variable Type](Condition-Variable-Type)                       | Condition variable for thread synchronization.                                                                   |
| [Stream Type](Stream-Type)                                               | Receive or send characters.                                                                                      |
| [Keymap Type](Keymap-Type)                                               | What function a keystroke invokes.                                                                               |
| [Overlay Type](Overlay-Type)                                             | How an overlay is represented.                                                                                   |
| [Font Type](Font-Type)                                                   | Fonts for displaying text.                                                                                       |
| Numbers                                                                  |                                                                                                                  |
| [Integer Basics](Integer-Basics)                                         | Representation and range of integers.                                                                            |
| [Float Basics](Float-Basics)                                             | Representation and range of floating point.                                                                      |
| [Predicates on Numbers](Predicates-on-Numbers)                           | Testing for numbers.                                                                                             |
| [Comparison of Numbers](Comparison-of-Numbers)                           | Equality and inequality predicates.                                                                              |
| [Numeric Conversions](Numeric-Conversions)                               | Converting float to integer and vice versa.                                                                      |
| [Arithmetic Operations](Arithmetic-Operations)                           | How to add, subtract, multiply and divide.                                                                       |
| [Rounding Operations](Rounding-Operations)                               | Explicitly rounding floating-point numbers.                                                                      |
| [Bitwise Operations](Bitwise-Operations)                                 | Logical and, or, not, shifting.                                                                                  |
| [Math Functions](Math-Functions)                                         | Trig, exponential and logarithmic functions.                                                                     |
| [Random Numbers](Random-Numbers)                                         | Obtaining random integers, predictable or not.                                                                   |
| Strings and Characters                                                   |                                                                                                                  |
| [String Basics](String-Basics)                                           | Basic properties of strings and characters.                                                                      |
| [Predicates for Strings](Predicates-for-Strings)                         | Testing whether an object is a string or char.                                                                   |
| [Creating Strings](Creating-Strings)                                     | Functions to allocate new strings.                                                                               |
| [Modifying Strings](Modifying-Strings)                                   | Altering the contents of an existing string.                                                                     |
| [Text Comparison](Text-Comparison)                                       | Comparing characters or strings.                                                                                 |
| [String Conversion](String-Conversion)                                   | Converting to and from characters and strings.                                                                   |
| [Formatting Strings](Formatting-Strings)                                 | `format`: Emacs’s analogue of `printf`.                                                                          |
| [Case Conversion](Case-Conversion)                                       | Case conversion functions.                                                                                       |
| [Case Tables](Case-Tables)                                               | Customizing case conversion.                                                                                     |
| Lists                                                                    |                                                                                                                  |
| [Cons Cells](Cons-Cells)                                                 | How lists are made out of cons cells.                                                                            |
| [List-related Predicates](List_002drelated-Predicates)                   | Is this object a list? Comparing two lists.                                                                      |
| [List Elements](List-Elements)                                           | Extracting the pieces of a list.                                                                                 |
| [Building Lists](Building-Lists)                                         | Creating list structure.                                                                                         |
| [List Variables](List-Variables)                                         | Modifying lists stored in variables.                                                                             |
| [Modifying Lists](Modifying-Lists)                                       | Storing new pieces into an existing list.                                                                        |
| [Sets And Lists](Sets-And-Lists)                                         | A list can represent a finite mathematical set.                                                                  |
| [Association Lists](Association-Lists)                                   | A list can represent a finite relation or mapping.                                                               |
| [Property Lists](Property-Lists)                                         | A list of paired elements.                                                                                       |
| Modifying Existing List Structure                                        |                                                                                                                  |
| [Setcar](Setcar)                                                         | Replacing an element in a list.                                                                                  |
| [Setcdr](Setcdr)                                                         | Replacing part of the list backbone. This can be used to remove or add elements.                                 |
| [Rearrangement](Rearrangement)                                           | Reordering the elements in a list; combining lists.                                                              |
| Property Lists                                                           |                                                                                                                  |
| [Plists and Alists](Plists-and-Alists)                                   | Comparison of the advantages of property lists and association lists.                                            |
| [Plist Access](Plist-Access)                                             | Accessing property lists stored elsewhere.                                                                       |
| Sequences, Arrays, and Vectors                                           |                                                                                                                  |
| [Sequence Functions](Sequence-Functions)                                 | Functions that accept any kind of sequence.                                                                      |
| [Arrays](Arrays)                                                         | Characteristics of arrays in Emacs Lisp.                                                                         |
| [Array Functions](Array-Functions)                                       | Functions specifically for arrays.                                                                               |
| [Vectors](Vectors)                                                       | Special characteristics of Emacs Lisp vectors.                                                                   |
| [Vector Functions](Vector-Functions)                                     | Functions specifically for vectors.                                                                              |
| [Char-Tables](Char_002dTables)                                           | How to work with char-tables.                                                                                    |
| [Bool-Vectors](Bool_002dVectors)                                         | How to work with bool-vectors.                                                                                   |
| [Rings](Rings)                                                           | Managing a fixed-size ring of objects.                                                                           |
| Records                                                                  |                                                                                                                  |
| [Record Functions](Record-Functions)                                     | Functions for records.                                                                                           |
| [Backward Compatibility](Backward-Compatibility)                         | Compatibility for cl-defstruct.                                                                                  |
| Hash Tables                                                              |                                                                                                                  |
| [Creating Hash](Creating-Hash)                                           | Functions to create hash tables.                                                                                 |
| [Hash Access](Hash-Access)                                               | Reading and writing the hash table contents.                                                                     |
| [Defining Hash](Defining-Hash)                                           | Defining new comparison methods.                                                                                 |
| [Other Hash](Other-Hash)                                                 | Miscellaneous.                                                                                                   |
| Symbols                                                                  |                                                                                                                  |
| [Symbol Components](Symbol-Components)                                   | Symbols have names, values, function definitions and property lists.                                             |
| [Definitions](Definitions)                                               | A definition says how a symbol will be used.                                                                     |
| [Creating Symbols](Creating-Symbols)                                     | How symbols are kept unique.                                                                                     |
| [Symbol Properties](Symbol-Properties)                                   | Each symbol has a property list for recording miscellaneous information.                                         |
| Symbol Properties                                                        |                                                                                                                  |
| [Symbol Plists](Symbol-Plists)                                           | Accessing symbol properties.                                                                                     |
| [Standard Properties](Standard-Properties)                               | Standard meanings of symbol properties.                                                                          |
| Evaluation                                                               |                                                                                                                  |
| [Intro Eval](Intro-Eval)                                                 | Evaluation in the scheme of things.                                                                              |
| [Forms](Forms)                                                           | How various sorts of objects are evaluated.                                                                      |
| [Quoting](Quoting)                                                       | Avoiding evaluation (to put constants in the program).                                                           |
| [Backquote](Backquote)                                                   | Easier construction of list structure.                                                                           |
| [Eval](Eval)                                                             | How to invoke the Lisp interpreter explicitly.                                                                   |
| [Deferred Eval](Deferred-Eval)                                           | Deferred and lazy evaluation of forms.                                                                           |
| Kinds of Forms                                                           |                                                                                                                  |
| [Self-Evaluating Forms](Self_002dEvaluating-Forms)                       | Forms that evaluate to themselves.                                                                               |
| [Symbol Forms](Symbol-Forms)                                             | Symbols evaluate as variables.                                                                                   |
| [Classifying Lists](Classifying-Lists)                                   | How to distinguish various sorts of list forms.                                                                  |
| [Function Indirection](Function-Indirection)                             | When a symbol appears as the car of a list, we find the real function via the symbol.                            |
| [Function Forms](Function-Forms)                                         | Forms that call functions.                                                                                       |
| [Macro Forms](Macro-Forms)                                               | Forms that call macros.                                                                                          |
| [Special Forms](Special-Forms)                                           | Special forms are idiosyncratic primitives, most of them extremely important.                                    |
| [Autoloading](Autoloading)                                               | Functions set up to load files containing their real definitions.                                                |
| Control Structures                                                       |                                                                                                                  |
| [Sequencing](Sequencing)                                                 | Evaluation in textual order.                                                                                     |
| [Conditionals](Conditionals)                                             | `if`, `cond`, `when`, `unless`.                                                                                  |
| [Combining Conditions](Combining-Conditions)                             | `and`, `or`, `not`.                                                                                              |
| [Pattern-Matching Conditional](Pattern_002dMatching-Conditional)         | How to use `pcase` and friends.                                                                                  |
| [Iteration](Iteration)                                                   | `while` loops.                                                                                                   |
| [Generators](Generators)                                                 | Generic sequences and coroutines.                                                                                |
| [Nonlocal Exits](Nonlocal-Exits)                                         | Jumping out of a sequence.                                                                                       |
| Nonlocal Exits                                                           |                                                                                                                  |
| [Catch and Throw](Catch-and-Throw)                                       | Nonlocal exits for the program’s own purposes.                                                                   |
| [Examples of Catch](Examples-of-Catch)                                   | Showing how such nonlocal exits can be written.                                                                  |
| [Errors](Errors)                                                         | How errors are signaled and handled.                                                                             |
| [Cleanups](Cleanups)                                                     | Arranging to run a cleanup form if an error happens.                                                             |
| Errors                                                                   |                                                                                                                  |
| [Signaling Errors](Signaling-Errors)                                     | How to report an error.                                                                                          |
| [Processing of Errors](Processing-of-Errors)                             | What Emacs does when you report an error.                                                                        |
| [Handling Errors](Handling-Errors)                                       | How you can trap errors and continue execution.                                                                  |
| [Error Symbols](Error-Symbols)                                           | How errors are classified for trapping them.                                                                     |
| Variables                                                                |                                                                                                                  |
| [Global Variables](Global-Variables)                                     | Variable values that exist permanently, everywhere.                                                              |
| [Constant Variables](Constant-Variables)                                 | Variables that never change.                                                                                     |
| [Local Variables](Local-Variables)                                       | Variable values that exist only temporarily.                                                                     |
| [Void Variables](Void-Variables)                                         | Symbols that lack values.                                                                                        |
| [Defining Variables](Defining-Variables)                                 | A definition says a symbol is used as a variable.                                                                |
| [Tips for Defining](Tips-for-Defining)                                   | Things you should think about when you define a variable.                                                        |
| [Accessing Variables](Accessing-Variables)                               | Examining values of variables whose names are known only at run time.                                            |
| [Setting Variables](Setting-Variables)                                   | Storing new values in variables.                                                                                 |
| [Watching Variables](Watching-Variables)                                 | Running a function when a variable is changed.                                                                   |
| [Variable Scoping](Variable-Scoping)                                     | How Lisp chooses among local and global values.                                                                  |
| [Buffer-Local Variables](Buffer_002dLocal-Variables)                     | Variable values in effect only in one buffer.                                                                    |
| [File Local Variables](File-Local-Variables)                             | Handling local variable lists in files.                                                                          |
| [Directory Local Variables](Directory-Local-Variables)                   | Local variables common to all files in a directory.                                                              |
| [Connection Local Variables](Connection-Local-Variables)                 | Local variables common for remote connections.                                                                   |
| [Variable Aliases](Variable-Aliases)                                     | Variables that are aliases for other variables.                                                                  |
| [Variables with Restricted Values](Variables-with-Restricted-Values)     | Non-constant variables whose value can *not* be an arbitrary Lisp object.                                        |
| [Generalized Variables](Generalized-Variables)                           | Extending the concept of variables.                                                                              |
| Scoping Rules for Variable Bindings                                      |                                                                                                                  |
| [Dynamic Binding](Dynamic-Binding)                                       | The default for binding local variables in Emacs.                                                                |
| [Dynamic Binding Tips](Dynamic-Binding-Tips)                             | Avoiding problems with dynamic binding.                                                                          |
| [Lexical Binding](Lexical-Binding)                                       | A different type of local variable binding.                                                                      |
| [Using Lexical Binding](Using-Lexical-Binding)                           | How to enable lexical binding.                                                                                   |
| Buffer-Local Variables                                                   |                                                                                                                  |
| [Intro to Buffer-Local](Intro-to-Buffer_002dLocal)                       | Introduction and concepts.                                                                                       |
| [Creating Buffer-Local](Creating-Buffer_002dLocal)                       | Creating and destroying buffer-local bindings.                                                                   |
| [Default Value](Default-Value)                                           | The default value is seen in buffers that don’t have their own buffer-local values.                              |
| Generalized Variables                                                    |                                                                                                                  |
| [Setting Generalized Variables](Setting-Generalized-Variables)           | The `setf` macro.                                                                                                |
| [Adding Generalized Variables](Adding-Generalized-Variables)             | Defining new `setf` forms.                                                                                       |
| Functions                                                                |                                                                                                                  |
| [What Is a Function](What-Is-a-Function)                                 | Lisp functions vs. primitives; terminology.                                                                      |
| [Lambda Expressions](Lambda-Expressions)                                 | How functions are expressed as Lisp objects.                                                                     |
| [Function Names](Function-Names)                                         | A symbol can serve as the name of a function.                                                                    |
| [Defining Functions](Defining-Functions)                                 | Lisp expressions for defining functions.                                                                         |
| [Calling Functions](Calling-Functions)                                   | How to use an existing function.                                                                                 |
| [Mapping Functions](Mapping-Functions)                                   | Applying a function to each element of a list, etc.                                                              |
| [Anonymous Functions](Anonymous-Functions)                               | Lambda expressions are functions with no names.                                                                  |
| [Generic Functions](Generic-Functions)                                   | Polymorphism, Emacs-style.                                                                                       |
| [Function Cells](Function-Cells)                                         | Accessing or setting the function definition of a symbol.                                                        |
| [Closures](Closures)                                                     | Functions that enclose a lexical environment.                                                                    |
| [Advising Functions](Advising-Functions)                                 | Adding to the definition of a function.                                                                          |
| [Obsolete Functions](Obsolete-Functions)                                 | Declaring functions obsolete.                                                                                    |
| [Inline Functions](Inline-Functions)                                     | Defining functions that the compiler will expand inline.                                                         |
| [Declare Form](Declare-Form)                                             | Adding additional information about a function.                                                                  |
| [Declaring Functions](Declaring-Functions)                               | Telling the compiler that a function is defined.                                                                 |
| [Function Safety](Function-Safety)                                       | Determining whether a function is safe to call.                                                                  |
| [Related Topics](Related-Topics)                                         | Cross-references to specific Lisp primitives that have a special bearing on how functions work.                  |
| Lambda Expressions                                                       |                                                                                                                  |
| [Lambda Components](Lambda-Components)                                   | The parts of a lambda expression.                                                                                |
| [Simple Lambda](Simple-Lambda)                                           | A simple example.                                                                                                |
| [Argument List](Argument-List)                                           | Details and special features of argument lists.                                                                  |
| [Function Documentation](Function-Documentation)                         | How to put documentation in a function.                                                                          |
| Advising Emacs Lisp Functions                                            |                                                                                                                  |
| [Core Advising Primitives](Core-Advising-Primitives)                     | Primitives to manipulate advice.                                                                                 |
| [Advising Named Functions](Advising-Named-Functions)                     | Advising named functions.                                                                                        |
| [Advice Combinators](Advice-Combinators)                                 | Ways to compose advice.                                                                                          |
| [Porting Old Advice](Porting-Old-Advice)                                 | Adapting code using the old defadvice.                                                                           |
| Macros                                                                   |                                                                                                                  |
| [Simple Macro](Simple-Macro)                                             | A basic example.                                                                                                 |
| [Expansion](Expansion)                                                   | How, when and why macros are expanded.                                                                           |
| [Compiling Macros](Compiling-Macros)                                     | How macros are expanded by the compiler.                                                                         |
| [Defining Macros](Defining-Macros)                                       | How to write a macro definition.                                                                                 |
| [Problems with Macros](Problems-with-Macros)                             | Don’t evaluate the macro arguments too many times. Don’t hide the user’s variables.                              |
| [Indenting Macros](Indenting-Macros)                                     | Specifying how to indent macro calls.                                                                            |
| Common Problems Using Macros                                             |                                                                                                                  |
| [Wrong Time](Wrong-Time)                                                 | Do the work in the expansion, not in the macro.                                                                  |
| [Argument Evaluation](Argument-Evaluation)                               | The expansion should evaluate each macro arg once.                                                               |
| [Surprising Local Vars](Surprising-Local-Vars)                           | Local variable bindings in the expansion require special care.                                                   |
| [Eval During Expansion](Eval-During-Expansion)                           | Don’t evaluate them; put them in the expansion.                                                                  |
| [Repeated Expansion](Repeated-Expansion)                                 | Avoid depending on how many times expansion is done.                                                             |
| Customization Settings                                                   |                                                                                                                  |
| [Common Keywords](Common-Keywords)                                       | Common keyword arguments for all kinds of customization declarations.                                            |
| [Group Definitions](Group-Definitions)                                   | Writing customization group definitions.                                                                         |
| [Variable Definitions](Variable-Definitions)                             | Declaring user options.                                                                                          |
| [Customization Types](Customization-Types)                               | Specifying the type of a user option.                                                                            |
| [Applying Customizations](Applying-Customizations)                       | Functions to apply customization settings.                                                                       |
| [Custom Themes](Custom-Themes)                                           | Writing Custom themes.                                                                                           |
| Customization Types                                                      |                                                                                                                  |
| [Simple Types](Simple-Types)                                             | Simple customization types: sexp, integer, etc.                                                                  |
| [Composite Types](Composite-Types)                                       | Build new types from other types or data.                                                                        |
| [Splicing into Lists](Splicing-into-Lists)                               | Splice elements into list with `:inline`.                                                                        |
| [Type Keywords](Type-Keywords)                                           | Keyword-argument pairs in a customization type.                                                                  |
| [Defining New Types](Defining-New-Types)                                 | Give your type a name.                                                                                           |
| Loading                                                                  |                                                                                                                  |
| [How Programs Do Loading](How-Programs-Do-Loading)                       | The `load` function and others.                                                                                  |
| [Load Suffixes](Load-Suffixes)                                           | Details about the suffixes that `load` tries.                                                                    |
| [Library Search](Library-Search)                                         | Finding a library to load.                                                                                       |
| [Loading Non-ASCII](Loading-Non_002dASCII)                               | Non-ASCII characters in Emacs Lisp files.                                                                        |
| [Autoload](Autoload)                                                     | Setting up a function to autoload.                                                                               |
| [Repeated Loading](Repeated-Loading)                                     | Precautions about loading a file twice.                                                                          |
| [Named Features](Named-Features)                                         | Loading a library if it isn’t already loaded.                                                                    |
| [Where Defined](Where-Defined)                                           | Finding which file defined a certain symbol.                                                                     |
| [Unloading](Unloading)                                                   | How to unload a library that was loaded.                                                                         |
| [Hooks for Loading](Hooks-for-Loading)                                   | Providing code to be run when particular libraries are loaded.                                                   |
| [Dynamic Modules](Dynamic-Modules)                                       | Modules provide additional Lisp primitives.                                                                      |
| Byte Compilation                                                         |                                                                                                                  |
| [Speed of Byte-Code](Speed-of-Byte_002dCode)                             | An example of speedup from byte compilation.                                                                     |
| [Compilation Functions](Compilation-Functions)                           | Byte compilation functions.                                                                                      |
| [Docs and Compilation](Docs-and-Compilation)                             | Dynamic loading of documentation strings.                                                                        |
| [Dynamic Loading](Dynamic-Loading)                                       | Dynamic loading of individual functions.                                                                         |
| [Eval During Compile](Eval-During-Compile)                               | Code to be evaluated when you compile.                                                                           |
| [Compiler Errors](Compiler-Errors)                                       | Handling compiler error messages.                                                                                |
| [Byte-Code Objects](Byte_002dCode-Objects)                               | The data type used for byte-compiled functions.                                                                  |
| [Disassembly](Disassembly)                                               | Disassembling byte-code; how to read byte-code.                                                                  |
| Debugging Lisp Programs                                                  |                                                                                                                  |
| [Debugger](Debugger)                                                     | A debugger for the Emacs Lisp evaluator.                                                                         |
| [Edebug](Edebug)                                                         | A source-level Emacs Lisp debugger.                                                                              |
| [Syntax Errors](Syntax-Errors)                                           | How to find syntax errors.                                                                                       |
| [Test Coverage](Test-Coverage)                                           | Ensuring you have tested all branches in your code.                                                              |
| [Profiling](Profiling)                                                   | Measuring the resources that your code uses.                                                                     |
| The Lisp Debugger                                                        |                                                                                                                  |
| [Error Debugging](Error-Debugging)                                       | Entering the debugger when an error happens.                                                                     |
| [Infinite Loops](Infinite-Loops)                                         | Stopping and debugging a program that doesn’t exit.                                                              |
| [Function Debugging](Function-Debugging)                                 | Entering it when a certain function is called.                                                                   |
| [Variable Debugging](Variable-Debugging)                                 | Entering it when a variable is modified.                                                                         |
| [Explicit Debug](Explicit-Debug)                                         | Entering it at a certain point in the program.                                                                   |
| [Using Debugger](Using-Debugger)                                         | What the debugger does.                                                                                          |
| [Backtraces](Backtraces)                                                 | What you see while in the debugger.                                                                              |
| [Debugger Commands](Debugger-Commands)                                   | Commands used while in the debugger.                                                                             |
| [Invoking the Debugger](Invoking-the-Debugger)                           | How to call the function `debug`.                                                                                |
| [Internals of Debugger](Internals-of-Debugger)                           | Subroutines of the debugger, and global variables.                                                               |
| Edebug                                                                   |                                                                                                                  |
| [Using Edebug](Using-Edebug)                                             | Introduction to use of Edebug.                                                                                   |
| [Instrumenting](Instrumenting)                                           | You must instrument your code in order to debug it with Edebug.                                                  |
| [Edebug Execution Modes](Edebug-Execution-Modes)                         | Execution modes, stopping more or less often.                                                                    |
| [Jumping](Jumping)                                                       | Commands to jump to a specified place.                                                                           |
| [Edebug Misc](Edebug-Misc)                                               | Miscellaneous commands.                                                                                          |
| [Breaks](Breaks)                                                         | Setting breakpoints to make the program stop.                                                                    |
| [Trapping Errors](Trapping-Errors)                                       | Trapping errors with Edebug.                                                                                     |
| [Edebug Views](Edebug-Views)                                             | Views inside and outside of Edebug.                                                                              |
| [Edebug Eval](Edebug-Eval)                                               | Evaluating expressions within Edebug.                                                                            |
| [Eval List](Eval-List)                                                   | Expressions whose values are displayed each time you enter Edebug.                                               |
| [Printing in Edebug](Printing-in-Edebug)                                 | Customization of printing.                                                                                       |
| [Trace Buffer](Trace-Buffer)                                             | How to produce trace output in a buffer.                                                                         |
| [Coverage Testing](Coverage-Testing)                                     | How to test evaluation coverage.                                                                                 |
| [The Outside Context](The-Outside-Context)                               | Data that Edebug saves and restores.                                                                             |
| [Edebug and Macros](Edebug-and-Macros)                                   | Specifying how to handle macro calls.                                                                            |
| [Edebug Options](Edebug-Options)                                         | Option variables for customizing Edebug.                                                                         |
| Breaks                                                                   |                                                                                                                  |
| [Breakpoints](Breakpoints)                                               | Breakpoints at stop points.                                                                                      |
| [Global Break Condition](Global-Break-Condition)                         | Breaking on an event.                                                                                            |
| [Source Breakpoints](Source-Breakpoints)                                 | Embedding breakpoints in source code.                                                                            |
| The Outside Context                                                      |                                                                                                                  |
| [Checking Whether to Stop](Checking-Whether-to-Stop)                     | When Edebug decides what to do.                                                                                  |
| [Edebug Display Update](Edebug-Display-Update)                           | When Edebug updates the display.                                                                                 |
| [Edebug Recursive Edit](Edebug-Recursive-Edit)                           | When Edebug stops execution.                                                                                     |
| Edebug and Macros                                                        |                                                                                                                  |
| [Instrumenting Macro Calls](Instrumenting-Macro-Calls)                   | The basic problem.                                                                                               |
| [Specification List](Specification-List)                                 | How to specify complex patterns of evaluation.                                                                   |
| [Backtracking](Backtracking)                                             | What Edebug does when matching fails.                                                                            |
| [Specification Examples](Specification-Examples)                         | To help understand specifications.                                                                               |
| Debugging Invalid Lisp Syntax                                            |                                                                                                                  |
| [Excess Open](Excess-Open)                                               | How to find a spurious open paren or missing close.                                                              |
| [Excess Close](Excess-Close)                                             | How to find a spurious close paren or missing open.                                                              |
| Reading and Printing Lisp Objects                                        |                                                                                                                  |
| [Streams Intro](Streams-Intro)                                           | Overview of streams, reading and printing.                                                                       |
| [Input Streams](Input-Streams)                                           | Various data types that can be used as input streams.                                                            |
| [Input Functions](Input-Functions)                                       | Functions to read Lisp objects from text.                                                                        |
| [Output Streams](Output-Streams)                                         | Various data types that can be used as output streams.                                                           |
| [Output Functions](Output-Functions)                                     | Functions to print Lisp objects as text.                                                                         |
| [Output Variables](Output-Variables)                                     | Variables that control what the printing functions do.                                                           |
| Minibuffers                                                              |                                                                                                                  |
| [Intro to Minibuffers](Intro-to-Minibuffers)                             | Basic information about minibuffers.                                                                             |
| [Text from Minibuffer](Text-from-Minibuffer)                             | How to read a straight text string.                                                                              |
| [Object from Minibuffer](Object-from-Minibuffer)                         | How to read a Lisp object or expression.                                                                         |
| [Minibuffer History](Minibuffer-History)                                 | Recording previous minibuffer inputs so the user can reuse them.                                                 |
| [Initial Input](Initial-Input)                                           | Specifying initial contents for the minibuffer.                                                                  |
| [Completion](Completion)                                                 | How to invoke and customize completion.                                                                          |
| [Yes-or-No Queries](Yes_002dor_002dNo-Queries)                           | Asking a question with a simple answer.                                                                          |
| [Multiple Queries](Multiple-Queries)                                     | Asking a series of similar questions.                                                                            |
| [Reading a Password](Reading-a-Password)                                 | Reading a password from the terminal.                                                                            |
| [Minibuffer Commands](Minibuffer-Commands)                               | Commands used as key bindings in minibuffers.                                                                    |
| [Minibuffer Windows](Minibuffer-Windows)                                 | Operating on the special minibuffer windows.                                                                     |
| [Minibuffer Contents](Minibuffer-Contents)                               | How such commands access the minibuffer text.                                                                    |
| [Recursive Mini](Recursive-Mini)                                         | Whether recursive entry to minibuffer is allowed.                                                                |
| [Minibuffer Misc](Minibuffer-Misc)                                       | Various customization hooks and variables.                                                                       |
| Completion                                                               |                                                                                                                  |
| [Basic Completion](Basic-Completion)                                     | Low-level functions for completing strings.                                                                      |
| [Minibuffer Completion](Minibuffer-Completion)                           | Invoking the minibuffer with completion.                                                                         |
| [Completion Commands](Completion-Commands)                               | Minibuffer commands that do completion.                                                                          |
| [High-Level Completion](High_002dLevel-Completion)                       | Convenient special cases of completion (reading buffer names, variable names, etc.).                             |
| [Reading File Names](Reading-File-Names)                                 | Using completion to read file names and shell commands.                                                          |
| [Completion Variables](Completion-Variables)                             | Variables controlling completion behavior.                                                                       |
| [Programmed Completion](Programmed-Completion)                           | Writing your own completion function.                                                                            |
| [Completion in Buffers](Completion-in-Buffers)                           | Completing text in ordinary buffers.                                                                             |
| Command Loop                                                             |                                                                                                                  |
| [Command Overview](Command-Overview)                                     | How the command loop reads commands.                                                                             |
| [Defining Commands](Defining-Commands)                                   | Specifying how a function should read arguments.                                                                 |
| [Interactive Call](Interactive-Call)                                     | Calling a command, so that it will read arguments.                                                               |
| [Distinguish Interactive](Distinguish-Interactive)                       | Making a command distinguish interactive calls.                                                                  |
| [Command Loop Info](Command-Loop-Info)                                   | Variables set by the command loop for you to examine.                                                            |
| [Adjusting Point](Adjusting-Point)                                       | Adjustment of point after a command.                                                                             |
| [Input Events](Input-Events)                                             | What input looks like when you read it.                                                                          |
| [Reading Input](Reading-Input)                                           | How to read input events from the keyboard or mouse.                                                             |
| [Special Events](Special-Events)                                         | Events processed immediately and individually.                                                                   |
| [Waiting](Waiting)                                                       | Waiting for user input or elapsed time.                                                                          |
| [Quitting](Quitting)                                                     | How `C-g` works. How to catch or defer quitting.                                                                 |
| [Prefix Command Arguments](Prefix-Command-Arguments)                     | How the commands to set prefix args work.                                                                        |
| [Recursive Editing](Recursive-Editing)                                   | Entering a recursive edit, and why you usually shouldn’t.                                                        |
| [Disabling Commands](Disabling-Commands)                                 | How the command loop handles disabled commands.                                                                  |
| [Command History](Command-History)                                       | How the command history is set up, and how accessed.                                                             |
| [Keyboard Macros](Keyboard-Macros)                                       | How keyboard macros are implemented.                                                                             |
| Defining Commands                                                        |                                                                                                                  |
| [Using Interactive](Using-Interactive)                                   | General rules for `interactive`.                                                                                 |
| [Interactive Codes](Interactive-Codes)                                   | The standard letter-codes for reading arguments in various ways.                                                 |
| [Interactive Examples](Interactive-Examples)                             | Examples of how to read interactive arguments.                                                                   |
| [Generic Commands](Generic-Commands)                                     | Select among command alternatives.                                                                               |
| Input Events                                                             |                                                                                                                  |
| [Keyboard Events](Keyboard-Events)                                       | Ordinary characters – keys with symbols on them.                                                                 |
| [Function Keys](Function-Keys)                                           | Function keys – keys with names, not symbols.                                                                    |
| [Mouse Events](Mouse-Events)                                             | Overview of mouse events.                                                                                        |
| [Click Events](Click-Events)                                             | Pushing and releasing a mouse button.                                                                            |
| [Drag Events](Drag-Events)                                               | Moving the mouse before releasing the button.                                                                    |
| [Button-Down Events](Button_002dDown-Events)                             | A button was pushed and not yet released.                                                                        |
| [Repeat Events](Repeat-Events)                                           | Double and triple click (or drag, or down).                                                                      |
| [Motion Events](Motion-Events)                                           | Just moving the mouse, not pushing a button.                                                                     |
| [Focus Events](Focus-Events)                                             | Moving the mouse between frames.                                                                                 |
| [Misc Events](Misc-Events)                                               | Other events the system can generate.                                                                            |
| [Event Examples](Event-Examples)                                         | Examples of the lists for mouse events.                                                                          |
| [Classifying Events](Classifying-Events)                                 | Finding the modifier keys in an event symbol. Event types.                                                       |
| [Accessing Mouse](Accessing-Mouse)                                       | Functions to extract info from mouse events.                                                                     |
| [Accessing Scroll](Accessing-Scroll)                                     | Functions to get info from scroll bar events.                                                                    |
| [Strings of Events](Strings-of-Events)                                   | Special considerations for putting keyboard character events in a string.                                        |
| Reading Input                                                            |                                                                                                                  |
| [Key Sequence Input](Key-Sequence-Input)                                 | How to read one key sequence.                                                                                    |
| [Reading One Event](Reading-One-Event)                                   | How to read just one event.                                                                                      |
| [Event Mod](Event-Mod)                                                   | How Emacs modifies events as they are read.                                                                      |
| [Invoking the Input Method](Invoking-the-Input-Method)                   | How reading an event uses the input method.                                                                      |
| [Quoted Character Input](Quoted-Character-Input)                         | Asking the user to specify a character.                                                                          |
| [Event Input Misc](Event-Input-Misc)                                     | How to reread or throw away input events.                                                                        |
| Keymaps                                                                  |                                                                                                                  |
| [Key Sequences](Key-Sequences)                                           | Key sequences as Lisp objects.                                                                                   |
| [Keymap Basics](Keymap-Basics)                                           | Basic concepts of keymaps.                                                                                       |
| [Format of Keymaps](Format-of-Keymaps)                                   | What a keymap looks like as a Lisp object.                                                                       |
| [Creating Keymaps](Creating-Keymaps)                                     | Functions to create and copy keymaps.                                                                            |
| [Inheritance and Keymaps](Inheritance-and-Keymaps)                       | How one keymap can inherit the bindings of another keymap.                                                       |
| [Prefix Keys](Prefix-Keys)                                               | Defining a key with a keymap as its definition.                                                                  |
| [Active Keymaps](Active-Keymaps)                                         | How Emacs searches the active keymaps for a key binding.                                                         |
| [Searching Keymaps](Searching-Keymaps)                                   | A pseudo-Lisp summary of searching active maps.                                                                  |
| [Controlling Active Maps](Controlling-Active-Maps)                       | Each buffer has a local keymap to override the standard (global) bindings. A minor mode can also override them.  |
| [Key Lookup](Key-Lookup)                                                 | Finding a key’s binding in one keymap.                                                                           |
| [Functions for Key Lookup](Functions-for-Key-Lookup)                     | How to request key lookup.                                                                                       |
| [Changing Key Bindings](Changing-Key-Bindings)                           | Redefining a key in a keymap.                                                                                    |
| [Remapping Commands](Remapping-Commands)                                 | A keymap can translate one command to another.                                                                   |
| [Translation Keymaps](Translation-Keymaps)                               | Keymaps for translating sequences of events.                                                                     |
| [Key Binding Commands](Key-Binding-Commands)                             | Interactive interfaces for redefining keys.                                                                      |
| [Scanning Keymaps](Scanning-Keymaps)                                     | Looking through all keymaps, for printing help.                                                                  |
| [Menu Keymaps](Menu-Keymaps)                                             | Defining a menu as a keymap.                                                                                     |
| Menu Keymaps                                                             |                                                                                                                  |
| [Defining Menus](Defining-Menus)                                         | How to make a keymap that defines a menu.                                                                        |
| [Mouse Menus](Mouse-Menus)                                               | How users actuate the menu with the mouse.                                                                       |
| [Keyboard Menus](Keyboard-Menus)                                         | How users actuate the menu with the keyboard.                                                                    |
| [Menu Example](Menu-Example)                                             | Making a simple menu.                                                                                            |
| [Menu Bar](Menu-Bar)                                                     | How to customize the menu bar.                                                                                   |
| [Tool Bar](Tool-Bar)                                                     | A tool bar is a row of images.                                                                                   |
| [Modifying Menus](Modifying-Menus)                                       | How to add new items to a menu.                                                                                  |
| [Easy Menu](Easy-Menu)                                                   | A convenience macro for defining menus.                                                                          |
| Defining Menus                                                           |                                                                                                                  |
| [Simple Menu Items](Simple-Menu-Items)                                   | A simple kind of menu key binding.                                                                               |
| [Extended Menu Items](Extended-Menu-Items)                               | More complex menu item definitions.                                                                              |
| [Menu Separators](Menu-Separators)                                       | Drawing a horizontal line through a menu.                                                                        |
| [Alias Menu Items](Alias-Menu-Items)                                     | Using command aliases in menu items.                                                                             |
| Major and Minor Modes                                                    |                                                                                                                  |
| [Hooks](Hooks)                                                           | How to use hooks; how to write code that provides hooks.                                                         |
| [Major Modes](Major-Modes)                                               | Defining major modes.                                                                                            |
| [Minor Modes](Minor-Modes)                                               | Defining minor modes.                                                                                            |
| [Mode Line Format](Mode-Line-Format)                                     | Customizing the text that appears in the mode line.                                                              |
| [Imenu](Imenu)                                                           | Providing a menu of definitions made in a buffer.                                                                |
| [Font Lock Mode](Font-Lock-Mode)                                         | How modes can highlight text according to syntax.                                                                |
| [Auto-Indentation](Auto_002dIndentation)                                 | How to teach Emacs to indent for a major mode.                                                                   |
| [Desktop Save Mode](Desktop-Save-Mode)                                   | How modes can have buffer state saved between Emacs sessions.                                                    |
| Hooks                                                                    |                                                                                                                  |
| [Running Hooks](Running-Hooks)                                           | How to run a hook.                                                                                               |
| [Setting Hooks](Setting-Hooks)                                           | How to put functions on a hook, or remove them.                                                                  |
| Major Modes                                                              |                                                                                                                  |
| [Major Mode Conventions](Major-Mode-Conventions)                         | Coding conventions for keymaps, etc.                                                                             |
| [Auto Major Mode](Auto-Major-Mode)                                       | How Emacs chooses the major mode automatically.                                                                  |
| [Mode Help](Mode-Help)                                                   | Finding out how to use a mode.                                                                                   |
| [Derived Modes](Derived-Modes)                                           | Defining a new major mode based on another major mode.                                                           |
| [Basic Major Modes](Basic-Major-Modes)                                   | Modes that other modes are often derived from.                                                                   |
| [Mode Hooks](Mode-Hooks)                                                 | Hooks run at the end of major mode functions.                                                                    |
| [Tabulated List Mode](Tabulated-List-Mode)                               | Parent mode for buffers containing tabulated data.                                                               |
| [Generic Modes](Generic-Modes)                                           | Defining a simple major mode that supports comment syntax and Font Lock mode.                                    |
| [Example Major Modes](Example-Major-Modes)                               | Text mode and Lisp modes.                                                                                        |
| Minor Modes                                                              |                                                                                                                  |
| [Minor Mode Conventions](Minor-Mode-Conventions)                         | Tips for writing a minor mode.                                                                                   |
| [Keymaps and Minor Modes](Keymaps-and-Minor-Modes)                       | How a minor mode can have its own keymap.                                                                        |
| [Defining Minor Modes](Defining-Minor-Modes)                             | A convenient facility for defining minor modes.                                                                  |
| Mode Line Format                                                         |                                                                                                                  |
| [Mode Line Basics](Mode-Line-Basics)                                     | Basic ideas of mode line control.                                                                                |
| [Mode Line Data](Mode-Line-Data)                                         | The data structure that controls the mode line.                                                                  |
| [Mode Line Top](Mode-Line-Top)                                           | The top level variable, mode-line-format.                                                                        |
| [Mode Line Variables](Mode-Line-Variables)                               | Variables used in that data structure.                                                                           |
| [%-Constructs](g_t_0025_002dConstructs)                                  | Putting information into a mode line.                                                                            |
| [Properties in Mode](Properties-in-Mode)                                 | Using text properties in the mode line.                                                                          |
| [Header Lines](Header-Lines)                                             | Like a mode line, but at the top.                                                                                |
| [Emulating Mode Line](Emulating-Mode-Line)                               | Formatting text as the mode line would.                                                                          |
| Font Lock Mode                                                           |                                                                                                                  |
| [Font Lock Basics](Font-Lock-Basics)                                     | Overview of customizing Font Lock.                                                                               |
| [Search-based Fontification](Search_002dbased-Fontification)             | Fontification based on regexps.                                                                                  |
| [Customizing Keywords](Customizing-Keywords)                             | Customizing search-based fontification.                                                                          |
| [Other Font Lock Variables](Other-Font-Lock-Variables)                   | Additional customization facilities.                                                                             |
| [Levels of Font Lock](Levels-of-Font-Lock)                               | Each mode can define alternative levels so that the user can select more or less.                                |
| [Precalculated Fontification](Precalculated-Fontification)               | How Lisp programs that produce the buffer contents can also specify how to fontify it.                           |
| [Faces for Font Lock](Faces-for-Font-Lock)                               | Special faces specifically for Font Lock.                                                                        |
| [Syntactic Font Lock](Syntactic-Font-Lock)                               | Fontification based on syntax tables.                                                                            |
| [Multiline Font Lock](Multiline-Font-Lock)                               | How to coerce Font Lock into properly highlighting multiline constructs.                                         |
| Multiline Font Lock Constructs                                           |                                                                                                                  |
| [Font Lock Multiline](Font-Lock-Multiline)                               | Marking multiline chunks with a text property.                                                                   |
| [Region to Refontify](Region-to-Refontify)                               | Controlling which region gets refontified after a buffer change.                                                 |
| Automatic Indentation of code                                            |                                                                                                                  |
| [SMIE](SMIE)                                                             | A simple minded indentation engine.                                                                              |
| Simple Minded Indentation Engine                                         |                                                                                                                  |
| [SMIE setup](SMIE-setup)                                                 | SMIE setup and features.                                                                                         |
| [Operator Precedence Grammars](Operator-Precedence-Grammars)             | A very simple parsing technique.                                                                                 |
| [SMIE Grammar](SMIE-Grammar)                                             | Defining the grammar of a language.                                                                              |
| [SMIE Lexer](SMIE-Lexer)                                                 | Defining tokens.                                                                                                 |
| [SMIE Tricks](SMIE-Tricks)                                               | Working around the parser’s limitations.                                                                         |
| [SMIE Indentation](SMIE-Indentation)                                     | Specifying indentation rules.                                                                                    |
| [SMIE Indentation Helpers](SMIE-Indentation-Helpers)                     | Helper functions for indentation rules.                                                                          |
| [SMIE Indentation Example](SMIE-Indentation-Example)                     | Sample indentation rules.                                                                                        |
| [SMIE Customization](SMIE-Customization)                                 | Customizing indentation.                                                                                         |
| Documentation                                                            |                                                                                                                  |
| [Documentation Basics](Documentation-Basics)                             | Where doc strings are defined and stored.                                                                        |
| [Accessing Documentation](Accessing-Documentation)                       | How Lisp programs can access doc strings.                                                                        |
| [Keys in Documentation](Keys-in-Documentation)                           | Substituting current key bindings.                                                                               |
| [Text Quoting Style](Text-Quoting-Style)                                 | Quotation marks in doc strings and messages.                                                                     |
| [Describing Characters](Describing-Characters)                           | Making printable descriptions of non-printing characters and key sequences.                                      |
| [Help Functions](Help-Functions)                                         | Subroutines used by Emacs help facilities.                                                                       |
| Files                                                                    |                                                                                                                  |
| [Visiting Files](Visiting-Files)                                         | Reading files into Emacs buffers for editing.                                                                    |
| [Saving Buffers](Saving-Buffers)                                         | Writing changed buffers back into files.                                                                         |
| [Reading from Files](Reading-from-Files)                                 | Reading files into buffers without visiting.                                                                     |
| [Writing to Files](Writing-to-Files)                                     | Writing new files from parts of buffers.                                                                         |
| [File Locks](File-Locks)                                                 | Locking and unlocking files, to prevent simultaneous editing by two people.                                      |
| [Information about Files](Information-about-Files)                       | Testing existence, accessibility, size of files.                                                                 |
| [Changing Files](Changing-Files)                                         | Renaming files, changing permissions, etc.                                                                       |
| [File Names](File-Names)                                                 | Decomposing and expanding file names.                                                                            |
| [Contents of Directories](Contents-of-Directories)                       | Getting a list of the files in a directory.                                                                      |
| [Create/Delete Dirs](Create_002fDelete-Dirs)                             | Creating and Deleting Directories.                                                                               |
| [Magic File Names](Magic-File-Names)                                     | Special handling for certain file names.                                                                         |
| [Format Conversion](Format-Conversion)                                   | Conversion to and from various file formats.                                                                     |
| Visiting Files                                                           |                                                                                                                  |
| [Visiting Functions](Visiting-Functions)                                 | The usual interface functions for visiting.                                                                      |
| [Subroutines of Visiting](Subroutines-of-Visiting)                       | Lower-level subroutines that they use.                                                                           |
| Information about Files                                                  |                                                                                                                  |
| [Testing Accessibility](Testing-Accessibility)                           | Is a given file readable? Writable?                                                                              |
| [Kinds of Files](Kinds-of-Files)                                         | Is it a directory? A symbolic link?                                                                              |
| [Truenames](Truenames)                                                   | Eliminating symbolic links from a file name.                                                                     |
| [File Attributes](File-Attributes)                                       | File sizes, modification times, etc.                                                                             |
| [Extended Attributes](Extended-Attributes)                               | Extended file attributes for access control.                                                                     |
| [Locating Files](Locating-Files)                                         | How to find a file in standard places.                                                                           |
| File Names                                                               |                                                                                                                  |
| [File Name Components](File-Name-Components)                             | The directory part of a file name, and the rest.                                                                 |
| [Relative File Names](Relative-File-Names)                               | Some file names are relative to a current directory.                                                             |
| [Directory Names](Directory-Names)                                       | A directory’s name as a directory is different from its name as a file.                                          |
| [File Name Expansion](File-Name-Expansion)                               | Converting relative file names to absolute ones.                                                                 |
| [Unique File Names](Unique-File-Names)                                   | Generating names for temporary files.                                                                            |
| [File Name Completion](File-Name-Completion)                             | Finding the completions for a given file name.                                                                   |
| [Standard File Names](Standard-File-Names)                               | If your package uses a fixed file name, how to handle various operating systems simply.                          |
| File Format Conversion                                                   |                                                                                                                  |
| [Format Conversion Overview](Format-Conversion-Overview)                 | `insert-file-contents` and `write-region`.                                                                       |
| [Format Conversion Round-Trip](Format-Conversion-Round_002dTrip)         | Using `format-alist`.                                                                                            |
| [Format Conversion Piecemeal](Format-Conversion-Piecemeal)               | Specifying non-paired conversion.                                                                                |
| Backups and Auto-Saving                                                  |                                                                                                                  |
| [Backup Files](Backup-Files)                                             | How backup files are made; how their names are chosen.                                                           |
| [Auto-Saving](Auto_002dSaving)                                           | How auto-save files are made; how their names are chosen.                                                        |
| [Reverting](Reverting)                                                   | `revert-buffer`, and how to customize what it does.                                                              |
| Backup Files                                                             |                                                                                                                  |
| [Making Backups](Making-Backups)                                         | How Emacs makes backup files, and when.                                                                          |
| [Rename or Copy](Rename-or-Copy)                                         | Two alternatives: renaming the old file or copying it.                                                           |
| [Numbered Backups](Numbered-Backups)                                     | Keeping multiple backups for each source file.                                                                   |
| [Backup Names](Backup-Names)                                             | How backup file names are computed; customization.                                                               |
| Buffers                                                                  |                                                                                                                  |
| [Buffer Basics](Buffer-Basics)                                           | What is a buffer?                                                                                                |
| [Current Buffer](Current-Buffer)                                         | Designating a buffer as current so that primitives will access its contents.                                     |
| [Buffer Names](Buffer-Names)                                             | Accessing and changing buffer names.                                                                             |
| [Buffer File Name](Buffer-File-Name)                                     | The buffer file name indicates which file is visited.                                                            |
| [Buffer Modification](Buffer-Modification)                               | A buffer is *modified* if it needs to be saved.                                                                  |
| [Modification Time](Modification-Time)                                   | Determining whether the visited file was changed behind Emacs’s back.                                            |
| [Read Only Buffers](Read-Only-Buffers)                                   | Modifying text is not allowed in a read-only buffer.                                                             |
| [Buffer List](Buffer-List)                                               | How to look at all the existing buffers.                                                                         |
| [Creating Buffers](Creating-Buffers)                                     | Functions that create buffers.                                                                                   |
| [Killing Buffers](Killing-Buffers)                                       | Buffers exist until explicitly killed.                                                                           |
| [Indirect Buffers](Indirect-Buffers)                                     | An indirect buffer shares text with some other buffer.                                                           |
| [Swapping Text](Swapping-Text)                                           | Swapping text between two buffers.                                                                               |
| [Buffer Gap](Buffer-Gap)                                                 | The gap in the buffer.                                                                                           |
| Windows                                                                  |                                                                                                                  |
| [Basic Windows](Basic-Windows)                                           | Basic information on using windows.                                                                              |
| [Windows and Frames](Windows-and-Frames)                                 | Relating windows to the frame they appear on.                                                                    |
| [Window Sizes](Window-Sizes)                                             | Accessing a window’s size.                                                                                       |
| [Resizing Windows](Resizing-Windows)                                     | Changing the sizes of windows.                                                                                   |
| [Preserving Window Sizes](Preserving-Window-Sizes)                       | Preserving the size of windows.                                                                                  |
| [Splitting Windows](Splitting-Windows)                                   | Splitting one window into two windows.                                                                           |
| [Deleting Windows](Deleting-Windows)                                     | Deleting a window gives its space to other windows.                                                              |
| [Recombining Windows](Recombining-Windows)                               | Preserving the frame layout when splitting and deleting windows.                                                 |
| [Selecting Windows](Selecting-Windows)                                   | The selected window is the one that you edit in.                                                                 |
| [Cyclic Window Ordering](Cyclic-Window-Ordering)                         | Moving around the existing windows.                                                                              |
| [Buffers and Windows](Buffers-and-Windows)                               | Each window displays the contents of a buffer.                                                                   |
| [Switching Buffers](Switching-Buffers)                                   | Higher-level functions for switching to a buffer.                                                                |
| [Displaying Buffers](Displaying-Buffers)                                 | Displaying a buffer in a suitable window.                                                                        |
| [Window History](Window-History)                                         | Each window remembers the buffers displayed in it.                                                               |
| [Dedicated Windows](Dedicated-Windows)                                   | How to avoid displaying another buffer in a specific window.                                                     |
| [Quitting Windows](Quitting-Windows)                                     | How to restore the state prior to displaying a buffer.                                                           |
| [Side Windows](Side-Windows)                                             | Special windows on a frame’s sides.                                                                              |
| [Atomic Windows](Atomic-Windows)                                         | Preserving parts of the window layout.                                                                           |
| [Window Point](Window-Point)                                             | Each window has its own location of point.                                                                       |
| [Window Start and End](Window-Start-and-End)                             | Buffer positions indicating which text is on-screen in a window.                                                 |
| [Textual Scrolling](Textual-Scrolling)                                   | Moving text up and down through the window.                                                                      |
| [Vertical Scrolling](Vertical-Scrolling)                                 | Moving the contents up and down on the window.                                                                   |
| [Horizontal Scrolling](Horizontal-Scrolling)                             | Moving the contents sideways on the window.                                                                      |
| [Coordinates and Windows](Coordinates-and-Windows)                       | Converting coordinates to windows.                                                                               |
| [Mouse Window Auto-selection](Mouse-Window-Auto_002dselection)           | Automatically selecting windows with the mouse.                                                                  |
| [Window Configurations](Window-Configurations)                           | Saving and restoring the state of the screen.                                                                    |
| [Window Parameters](Window-Parameters)                                   | Associating additional information with windows.                                                                 |
| [Window Hooks](Window-Hooks)                                             | Hooks for scrolling, window size changes, redisplay going past a certain point, or window configuration changes. |
| Displaying Buffers                                                       |                                                                                                                  |
| [Choosing Window](Choosing-Window)                                       | How to choose a window for displaying a buffer.                                                                  |
| [Buffer Display Action Functions](Buffer-Display-Action-Functions)       | Support functions for buffer display.                                                                            |
| [Buffer Display Action Alists](Buffer-Display-Action-Alists)             | Alists for fine-tuning buffer display action functions.                                                          |
| [Choosing Window Options](Choosing-Window-Options)                       | Extra options affecting how buffers are displayed.                                                               |
| [Precedence of Action Functions](Precedence-of-Action-Functions)         | A tutorial explaining the precedence of buffer display action functions.                                         |
| [The Zen of Buffer Display](The-Zen-of-Buffer-Display)                   | How to avoid that buffers get lost in between windows.                                                           |
| Side Windows                                                             |                                                                                                                  |
| [Displaying Buffers in Side Windows](Displaying-Buffers-in-Side-Windows) | An action function for displaying buffers in side windows.                                                       |
| [Side Window Options and Functions](Side-Window-Options-and-Functions)   | Further tuning of side windows.                                                                                  |
| [Frame Layouts with Side Windows](Frame-Layouts-with-Side-Windows)       | Setting up frame layouts with side windows.                                                                      |
| Frames                                                                   |                                                                                                                  |
| [Creating Frames](Creating-Frames)                                       | Creating additional frames.                                                                                      |
| [Multiple Terminals](Multiple-Terminals)                                 | Displaying on several different devices.                                                                         |
| [Frame Geometry](Frame-Geometry)                                         | Geometric properties of frames.                                                                                  |
| [Frame Parameters](Frame-Parameters)                                     | Controlling frame size, position, font, etc.                                                                     |
| [Terminal Parameters](Terminal-Parameters)                               | Parameters common for all frames on terminal.                                                                    |
| [Frame Titles](Frame-Titles)                                             | Automatic updating of frame titles.                                                                              |
| [Deleting Frames](Deleting-Frames)                                       | Frames last until explicitly deleted.                                                                            |
| [Finding All Frames](Finding-All-Frames)                                 | How to examine all existing frames.                                                                              |
| [Minibuffers and Frames](Minibuffers-and-Frames)                         | How a frame finds the minibuffer to use.                                                                         |
| [Input Focus](Input-Focus)                                               | Specifying the selected frame.                                                                                   |
| [Visibility of Frames](Visibility-of-Frames)                             | Frames may be visible or invisible, or icons.                                                                    |
| [Raising and Lowering](Raising-and-Lowering)                             | Raising, Lowering and Restacking Frames.                                                                         |
| [Frame Configurations](Frame-Configurations)                             | Saving the state of all frames.                                                                                  |
| [Child Frames](Child-Frames)                                             | Making a frame the child of another.                                                                             |
| [Mouse Tracking](Mouse-Tracking)                                         | Getting events that say when the mouse moves.                                                                    |
| [Mouse Position](Mouse-Position)                                         | Asking where the mouse is, or moving it.                                                                         |
| [Pop-Up Menus](Pop_002dUp-Menus)                                         | Displaying a menu for the user to select from.                                                                   |
| [Dialog Boxes](Dialog-Boxes)                                             | Displaying a box to ask yes or no.                                                                               |
| [Pointer Shape](Pointer-Shape)                                           | Specifying the shape of the mouse pointer.                                                                       |
| [Window System Selections](Window-System-Selections)                     | Transferring text to and from other X clients.                                                                   |
| [Drag and Drop](Drag-and-Drop)                                           | Internals of Drag-and-Drop implementation.                                                                       |
| [Color Names](Color-Names)                                               | Getting the definitions of color names.                                                                          |
| [Text Terminal Colors](Text-Terminal-Colors)                             | Defining colors for text terminals.                                                                              |
| [Resources](Resources)                                                   | Getting resource values from the server.                                                                         |
| [Display Feature Testing](Display-Feature-Testing)                       | Determining the features of a terminal.                                                                          |
| Frame Geometry                                                           |                                                                                                                  |
| [Frame Layout](Frame-Layout)                                             | Basic layout of frames.                                                                                          |
| [Frame Font](Frame-Font)                                                 | The default font of a frame and how to set it.                                                                   |
| [Frame Position](Frame-Position)                                         | The position of a frame on its display.                                                                          |
| [Frame Size](Frame-Size)                                                 | Specifying and retrieving a frame’s size.                                                                        |
| [Implied Frame Resizing](Implied-Frame-Resizing)                         | Implied resizing of frames and how to prevent it.                                                                |
| Frame Parameters                                                         |                                                                                                                  |
| [Parameter Access](Parameter-Access)                                     | How to change a frame’s parameters.                                                                              |
| [Initial Parameters](Initial-Parameters)                                 | Specifying frame parameters when you make a frame.                                                               |
| [Window Frame Parameters](Window-Frame-Parameters)                       | List of frame parameters for window systems.                                                                     |
| [Geometry](Geometry)                                                     | Parsing geometry specifications.                                                                                 |
| Window Frame Parameters                                                  |                                                                                                                  |
| [Basic Parameters](Basic-Parameters)                                     | Parameters that are fundamental.                                                                                 |
| [Position Parameters](Position-Parameters)                               | The position of the frame on the screen.                                                                         |
| [Size Parameters](Size-Parameters)                                       | Frame’s size.                                                                                                    |
| [Layout Parameters](Layout-Parameters)                                   | Size of parts of the frame, and enabling or disabling some parts.                                                |
| [Buffer Parameters](Buffer-Parameters)                                   | Which buffers have been or should be shown.                                                                      |
| [Frame Interaction Parameters](Frame-Interaction-Parameters)             | Parameters for interacting with other frames.                                                                    |
| [Mouse Dragging Parameters](Mouse-Dragging-Parameters)                   | Parameters for resizing and moving frames with the mouse.                                                        |
| [Management Parameters](Management-Parameters)                           | Communicating with the window manager.                                                                           |
| [Cursor Parameters](Cursor-Parameters)                                   | Controlling the cursor appearance.                                                                               |
| [Font and Color Parameters](Font-and-Color-Parameters)                   | Fonts and colors for the frame text.                                                                             |
| Positions                                                                |                                                                                                                  |
| [Point](Point)                                                           | The special position where editing takes place.                                                                  |
| [Motion](Motion)                                                         | Changing point.                                                                                                  |
| [Excursions](Excursions)                                                 | Temporary motion and buffer changes.                                                                             |
| [Narrowing](Narrowing)                                                   | Restricting editing to a portion of the buffer.                                                                  |
| Motion                                                                   |                                                                                                                  |
| [Character Motion](Character-Motion)                                     | Moving in terms of characters.                                                                                   |
| [Word Motion](Word-Motion)                                               | Moving in terms of words.                                                                                        |
| [Buffer End Motion](Buffer-End-Motion)                                   | Moving to the beginning or end of the buffer.                                                                    |
| [Text Lines](Text-Lines)                                                 | Moving in terms of lines of text.                                                                                |
| [Screen Lines](Screen-Lines)                                             | Moving in terms of lines as displayed.                                                                           |
| [List Motion](List-Motion)                                               | Moving by parsing lists and sexps.                                                                               |
| [Skipping Characters](Skipping-Characters)                               | Skipping characters belonging to a certain set.                                                                  |
| Markers                                                                  |                                                                                                                  |
| [Overview of Markers](Overview-of-Markers)                               | The components of a marker, and how it relocates.                                                                |
| [Predicates on Markers](Predicates-on-Markers)                           | Testing whether an object is a marker.                                                                           |
| [Creating Markers](Creating-Markers)                                     | Making empty markers or markers at certain places.                                                               |
| [Information from Markers](Information-from-Markers)                     | Finding the marker’s buffer or character position.                                                               |
| [Marker Insertion Types](Marker-Insertion-Types)                         | Two ways a marker can relocate when you insert where it points.                                                  |
| [Moving Markers](Moving-Markers)                                         | Moving the marker to a new buffer or position.                                                                   |
| [The Mark](The-Mark)                                                     | How the mark is implemented with a marker.                                                                       |
| [The Region](The-Region)                                                 | How to access the region.                                                                                        |
| Text                                                                     |                                                                                                                  |
| [Near Point](Near-Point)                                                 | Examining text in the vicinity of point.                                                                         |
| [Buffer Contents](Buffer-Contents)                                       | Examining text in a general fashion.                                                                             |
| [Comparing Text](Comparing-Text)                                         | Comparing substrings of buffers.                                                                                 |
| [Insertion](Insertion)                                                   | Adding new text to a buffer.                                                                                     |
| [Commands for Insertion](Commands-for-Insertion)                         | User-level commands to insert text.                                                                              |
| [Deletion](Deletion)                                                     | Removing text from a buffer.                                                                                     |
| [User-Level Deletion](User_002dLevel-Deletion)                           | User-level commands to delete text.                                                                              |
| [The Kill Ring](The-Kill-Ring)                                           | Where removed text sometimes is saved for later use.                                                             |
| [Undo](Undo)                                                             | Undoing changes to the text of a buffer.                                                                         |
| [Maintaining Undo](Maintaining-Undo)                                     | How to enable and disable undo information. How to control how much information is kept.                         |
| [Filling](Filling)                                                       | Functions for explicit filling.                                                                                  |
| [Margins](Margins)                                                       | How to specify margins for filling commands.                                                                     |
| [Adaptive Fill](Adaptive-Fill)                                           | Adaptive Fill mode chooses a fill prefix from context.                                                           |
| [Auto Filling](Auto-Filling)                                             | How auto-fill mode is implemented to break lines.                                                                |
| [Sorting](Sorting)                                                       | Functions for sorting parts of the buffer.                                                                       |
| [Columns](Columns)                                                       | Computing horizontal positions, and using them.                                                                  |
| [Indentation](Indentation)                                               | Functions to insert or adjust indentation.                                                                       |
| [Case Changes](Case-Changes)                                             | Case conversion of parts of the buffer.                                                                          |
| [Text Properties](Text-Properties)                                       | Assigning Lisp property lists to text characters.                                                                |
| [Substitution](Substitution)                                             | Replacing a given character wherever it appears.                                                                 |
| [Registers](Registers)                                                   | How registers are implemented. Accessing the text or position stored in a register.                              |
| [Transposition](Transposition)                                           | Swapping two portions of a buffer.                                                                               |
| [Decompression](Decompression)                                           | Dealing with compressed data.                                                                                    |
| [Base 64](Base-64)                                                       | Conversion to or from base 64 encoding.                                                                          |
| [Checksum/Hash](Checksum_002fHash)                                       | Computing cryptographic hashes.                                                                                  |
| [GnuTLS Cryptography](GnuTLS-Cryptography)                               | Cryptographic algorithms imported from GnuTLS.                                                                   |
| [Parsing HTML/XML](Parsing-HTML_002fXML)                                 | Parsing HTML and XML.                                                                                            |
| [Atomic Changes](Atomic-Changes)                                         | Installing several buffer changes atomically.                                                                    |
| [Change Hooks](Change-Hooks)                                             | Supplying functions to be run when text is changed.                                                              |
| The Kill Ring                                                            |                                                                                                                  |
| [Kill Ring Concepts](Kill-Ring-Concepts)                                 | What text looks like in the kill ring.                                                                           |
| [Kill Functions](Kill-Functions)                                         | Functions that kill text.                                                                                        |
| [Yanking](Yanking)                                                       | How yanking is done.                                                                                             |
| [Yank Commands](Yank-Commands)                                           | Commands that access the kill ring.                                                                              |
| [Low-Level Kill Ring](Low_002dLevel-Kill-Ring)                           | Functions and variables for kill ring access.                                                                    |
| [Internals of Kill Ring](Internals-of-Kill-Ring)                         | Variables that hold kill ring data.                                                                              |
| Indentation                                                              |                                                                                                                  |
| [Primitive Indent](Primitive-Indent)                                     | Functions used to count and insert indentation.                                                                  |
| [Mode-Specific Indent](Mode_002dSpecific-Indent)                         | Customize indentation for different modes.                                                                       |
| [Region Indent](Region-Indent)                                           | Indent all the lines in a region.                                                                                |
| [Relative Indent](Relative-Indent)                                       | Indent the current line based on previous lines.                                                                 |
| [Indent Tabs](Indent-Tabs)                                               | Adjustable, typewriter-like tab stops.                                                                           |
| [Motion by Indent](Motion-by-Indent)                                     | Move to first non-blank character.                                                                               |
| Text Properties                                                          |                                                                                                                  |
| [Examining Properties](Examining-Properties)                             | Looking at the properties of one character.                                                                      |
| [Changing Properties](Changing-Properties)                               | Setting the properties of a range of text.                                                                       |
| [Property Search](Property-Search)                                       | Searching for where a property changes value.                                                                    |
| [Special Properties](Special-Properties)                                 | Particular properties with special meanings.                                                                     |
| [Format Properties](Format-Properties)                                   | Properties for representing formatting of text.                                                                  |
| [Sticky Properties](Sticky-Properties)                                   | How inserted text gets properties from neighboring text.                                                         |
| [Lazy Properties](Lazy-Properties)                                       | Computing text properties in a lazy fashion only when text is examined.                                          |
| [Clickable Text](Clickable-Text)                                         | Using text properties to make regions of text do something when you click on them.                               |
| [Fields](Fields)                                                         | The `field` property defines fields within the buffer.                                                           |
| [Not Intervals](Not-Intervals)                                           | Why text properties do not use Lisp-visible text intervals.                                                      |
| Parsing HTML and XML                                                     |                                                                                                                  |
| [Document Object Model](Document-Object-Model)                           | Access, manipulate and search the DOM.                                                                           |
| Non-ASCII Characters                                                     |                                                                                                                  |
| [Text Representations](Text-Representations)                             | How Emacs represents text.                                                                                       |
| [Disabling Multibyte](Disabling-Multibyte)                               | Controlling whether to use multibyte characters.                                                                 |
| [Converting Representations](Converting-Representations)                 | Converting unibyte to multibyte and vice versa.                                                                  |
| [Selecting a Representation](Selecting-a-Representation)                 | Treating a byte sequence as unibyte or multi.                                                                    |
| [Character Codes](Character-Codes)                                       | How unibyte and multibyte relate to codes of individual characters.                                              |
| [Character Properties](Character-Properties)                             | Character attributes that define their behavior and handling.                                                    |
| [Character Sets](Character-Sets)                                         | The space of possible character codes is divided into various character sets.                                    |
| [Scanning Charsets](Scanning-Charsets)                                   | Which character sets are used in a buffer?                                                                       |
| [Translation of Characters](Translation-of-Characters)                   | Translation tables are used for conversion.                                                                      |
| [Coding Systems](Coding-Systems)                                         | Coding systems are conversions for saving files.                                                                 |
| [Input Methods](Input-Methods)                                           | Input methods allow users to enter various non-ASCII characters without special keyboards.                       |
| [Locales](Locales)                                                       | Interacting with the POSIX locale.                                                                               |
| Coding Systems                                                           |                                                                                                                  |
| [Coding System Basics](Coding-System-Basics)                             | Basic concepts.                                                                                                  |
| [Encoding and I/O](Encoding-and-I_002fO)                                 | How file I/O functions handle coding systems.                                                                    |
| [Lisp and Coding Systems](Lisp-and-Coding-Systems)                       | Functions to operate on coding system names.                                                                     |
| [User-Chosen Coding Systems](User_002dChosen-Coding-Systems)             | Asking the user to choose a coding system.                                                                       |
| [Default Coding Systems](Default-Coding-Systems)                         | Controlling the default choices.                                                                                 |
| [Specifying Coding Systems](Specifying-Coding-Systems)                   | Requesting a particular coding system for a single file operation.                                               |
| [Explicit Encoding](Explicit-Encoding)                                   | Encoding or decoding text without doing I/O.                                                                     |
| [Terminal I/O Encoding](Terminal-I_002fO-Encoding)                       | Use of encoding for terminal I/O.                                                                                |
| Searching and Matching                                                   |                                                                                                                  |
| [String Search](String-Search)                                           | Search for an exact match.                                                                                       |
| [Searching and Case](Searching-and-Case)                                 | Case-independent or case-significant searching.                                                                  |
| [Regular Expressions](Regular-Expressions)                               | Describing classes of strings.                                                                                   |
| [Regexp Search](Regexp-Search)                                           | Searching for a match for a regexp.                                                                              |
| [POSIX Regexps](POSIX-Regexps)                                           | Searching POSIX-style for the longest match.                                                                     |
| [Match Data](Match-Data)                                                 | Finding out which part of the text matched, after a string or regexp search.                                     |
| [Search and Replace](Search-and-Replace)                                 | Commands that loop, searching and replacing.                                                                     |
| [Standard Regexps](Standard-Regexps)                                     | Useful regexps for finding sentences, pages,...                                                                  |
| Regular Expressions                                                      |                                                                                                                  |
| [Syntax of Regexps](Syntax-of-Regexps)                                   | Rules for writing regular expressions.                                                                           |
| [Regexp Example](Regexp-Example)                                         | Illustrates regular expression syntax.                                                                           |
| [Rx Notation](Rx-Notation)                                               | An alternative, structured regexp notation.                                                                      |
| [Regexp Functions](Regexp-Functions)                                     | Functions for operating on regular expressions.                                                                  |
| Syntax of Regular Expressions                                            |                                                                                                                  |
| [Regexp Special](Regexp-Special)                                         | Special characters in regular expressions.                                                                       |
| [Char Classes](Char-Classes)                                             | Character classes used in regular expressions.                                                                   |
| [Regexp Backslash](Regexp-Backslash)                                     | Backslash-sequences in regular expressions.                                                                      |
| The Match Data                                                           |                                                                                                                  |
| [Replacing Match](Replacing-Match)                                       | Replacing a substring that was matched.                                                                          |
| [Simple Match Data](Simple-Match-Data)                                   | Accessing single items of match data, such as where a particular subexpression started.                          |
| [Entire Match Data](Entire-Match-Data)                                   | Accessing the entire match data at once, as a list.                                                              |
| [Saving Match Data](Saving-Match-Data)                                   | Saving and restoring the match data.                                                                             |
| Syntax Tables                                                            |                                                                                                                  |
| [Syntax Basics](Syntax-Basics)                                           | Basic concepts of syntax tables.                                                                                 |
| [Syntax Descriptors](Syntax-Descriptors)                                 | How characters are classified.                                                                                   |
| [Syntax Table Functions](Syntax-Table-Functions)                         | How to create, examine and alter syntax tables.                                                                  |
| [Syntax Properties](Syntax-Properties)                                   | Overriding syntax with text properties.                                                                          |
| [Motion and Syntax](Motion-and-Syntax)                                   | Moving over characters with certain syntaxes.                                                                    |
| [Parsing Expressions](Parsing-Expressions)                               | Parsing balanced expressions using the syntax table.                                                             |
| [Syntax Table Internals](Syntax-Table-Internals)                         | How syntax table information is stored.                                                                          |
| [Categories](Categories)                                                 | Another way of classifying character syntax.                                                                     |
| Syntax Descriptors                                                       |                                                                                                                  |
| [Syntax Class Table](Syntax-Class-Table)                                 | Table of syntax classes.                                                                                         |
| [Syntax Flags](Syntax-Flags)                                             | Additional flags each character can have.                                                                        |
| Parsing Expressions                                                      |                                                                                                                  |
| [Motion via Parsing](Motion-via-Parsing)                                 | Motion functions that work by parsing.                                                                           |
| [Position Parse](Position-Parse)                                         | Determining the syntactic state of a position.                                                                   |
| [Parser State](Parser-State)                                             | How Emacs represents a syntactic state.                                                                          |
| [Low-Level Parsing](Low_002dLevel-Parsing)                               | Parsing across a specified region.                                                                               |
| [Control Parsing](Control-Parsing)                                       | Parameters that affect parsing.                                                                                  |
| Abbrevs and Abbrev Expansion                                             |                                                                                                                  |
| [Abbrev Tables](Abbrev-Tables)                                           | Creating and working with abbrev tables.                                                                         |
| [Defining Abbrevs](Defining-Abbrevs)                                     | Specifying abbreviations and their expansions.                                                                   |
| [Abbrev Files](Abbrev-Files)                                             | Saving abbrevs in files.                                                                                         |
| [Abbrev Expansion](Abbrev-Expansion)                                     | Controlling expansion; expansion subroutines.                                                                    |
| [Standard Abbrev Tables](Standard-Abbrev-Tables)                         | Abbrev tables used by various major modes.                                                                       |
| [Abbrev Properties](Abbrev-Properties)                                   | How to read and set abbrev properties. Which properties have which effect.                                       |
| [Abbrev Table Properties](Abbrev-Table-Properties)                       | How to read and set abbrev table properties. Which properties have which effect.                                 |
| Threads                                                                  |                                                                                                                  |
| [Basic Thread Functions](Basic-Thread-Functions)                         | Basic thread functions.                                                                                          |
| [Mutexes](Mutexes)                                                       | Mutexes allow exclusive access to data.                                                                          |
| [Condition Variables](Condition-Variables)                               | Inter-thread events.                                                                                             |
| [The Thread List](The-Thread-List)                                       | Show the active threads.                                                                                         |
| Processes                                                                |                                                                                                                  |
| [Subprocess Creation](Subprocess-Creation)                               | Functions that start subprocesses.                                                                               |
| [Shell Arguments](Shell-Arguments)                                       | Quoting an argument to pass it to a shell.                                                                       |
| [Synchronous Processes](Synchronous-Processes)                           | Details of using synchronous subprocesses.                                                                       |
| [Asynchronous Processes](Asynchronous-Processes)                         | Starting up an asynchronous subprocess.                                                                          |
| [Deleting Processes](Deleting-Processes)                                 | Eliminating an asynchronous subprocess.                                                                          |
| [Process Information](Process-Information)                               | Accessing run-status and other attributes.                                                                       |
| [Input to Processes](Input-to-Processes)                                 | Sending input to an asynchronous subprocess.                                                                     |
| [Signals to Processes](Signals-to-Processes)                             | Stopping, continuing or interrupting an asynchronous subprocess.                                                 |
| [Output from Processes](Output-from-Processes)                           | Collecting output from an asynchronous subprocess.                                                               |
| [Sentinels](Sentinels)                                                   | Sentinels run when process run-status changes.                                                                   |
| [Query Before Exit](Query-Before-Exit)                                   | Whether to query if exiting will kill a process.                                                                 |
| [System Processes](System-Processes)                                     | Accessing other processes running on your system.                                                                |
| [Transaction Queues](Transaction-Queues)                                 | Transaction-based communication with subprocesses.                                                               |
| [Network](Network)                                                       | Opening network connections.                                                                                     |
| [Network Servers](Network-Servers)                                       | Network servers let Emacs accept net connections.                                                                |
| [Datagrams](Datagrams)                                                   | UDP network connections.                                                                                         |
| [Low-Level Network](Low_002dLevel-Network)                               | Lower-level but more general function to create connections and servers.                                         |
| [Misc Network](Misc-Network)                                             | Additional relevant functions for net connections.                                                               |
| [Serial Ports](Serial-Ports)                                             | Communicating with serial ports.                                                                                 |
| [Byte Packing](Byte-Packing)                                             | Using bindat to pack and unpack binary data.                                                                     |
| Receiving Output from Processes                                          |                                                                                                                  |
| [Process Buffers](Process-Buffers)                                       | By default, output is put in a buffer.                                                                           |
| [Filter Functions](Filter-Functions)                                     | Filter functions accept output from the process.                                                                 |
| [Decoding Output](Decoding-Output)                                       | Filters can get unibyte or multibyte strings.                                                                    |
| [Accepting Output](Accepting-Output)                                     | How to wait until process output arrives.                                                                        |
| Low-Level Network Access                                                 |                                                                                                                  |
| [Network Processes](Network-Processes)                                   | Using `make-network-process`.                                                                                    |
| [Network Options](Network-Options)                                       | Further control over network connections.                                                                        |
| [Network Feature Testing](Network-Feature-Testing)                       | Determining which network features work on the machine you are using.                                            |
| Packing and Unpacking Byte Arrays                                        |                                                                                                                  |
| [Bindat Spec](Bindat-Spec)                                               | Describing data layout.                                                                                          |
| [Bindat Functions](Bindat-Functions)                                     | Doing the unpacking and packing.                                                                                 |
| Emacs Display                                                            |                                                                                                                  |
| [Refresh Screen](Refresh-Screen)                                         | Clearing the screen and redrawing everything on it.                                                              |
| [Forcing Redisplay](Forcing-Redisplay)                                   | Forcing redisplay.                                                                                               |
| [Truncation](Truncation)                                                 | Folding or wrapping long text lines.                                                                             |
| [The Echo Area](The-Echo-Area)                                           | Displaying messages at the bottom of the screen.                                                                 |
| [Warnings](Warnings)                                                     | Displaying warning messages for the user.                                                                        |
| [Invisible Text](Invisible-Text)                                         | Hiding part of the buffer text.                                                                                  |
| [Selective Display](Selective-Display)                                   | Hiding part of the buffer text (the old way).                                                                    |
| [Temporary Displays](Temporary-Displays)                                 | Displays that go away automatically.                                                                             |
| [Overlays](Overlays)                                                     | Use overlays to highlight parts of the buffer.                                                                   |
| [Size of Displayed Text](Size-of-Displayed-Text)                         | How large displayed text is.                                                                                     |
| [Line Height](Line-Height)                                               | Controlling the height of lines.                                                                                 |
| [Faces](Faces)                                                           | A face defines a graphics style for text characters: font, colors, etc.                                          |
| [Fringes](Fringes)                                                       | Controlling window fringes.                                                                                      |
| [Scroll Bars](Scroll-Bars)                                               | Controlling scroll bars.                                                                                         |
| [Window Dividers](Window-Dividers)                                       | Separating windows visually.                                                                                     |
| [Display Property](Display-Property)                                     | Enabling special display features.                                                                               |
| [Images](Images)                                                         | Displaying images in Emacs buffers.                                                                              |
| [Buttons](Buttons)                                                       | Adding clickable buttons to Emacs buffers.                                                                       |
| [Abstract Display](Abstract-Display)                                     | Emacs’s Widget for Object Collections.                                                                           |
| [Blinking](Blinking)                                                     | How Emacs shows the matching open parenthesis.                                                                   |
| [Character Display](Character-Display)                                   | How Emacs displays individual characters.                                                                        |
| [Beeping](Beeping)                                                       | Audible signal to the user.                                                                                      |
| [Window Systems](Window-Systems)                                         | Which window system is being used.                                                                               |
| [Tooltips](Tooltips)                                                     | Tooltip display in Emacs.                                                                                        |
| [Bidirectional Display](Bidirectional-Display)                           | Display of bidirectional scripts, such as Arabic and Farsi.                                                      |
| The Echo Area                                                            |                                                                                                                  |
| [Displaying Messages](Displaying-Messages)                               | Explicitly displaying text in the echo area.                                                                     |
| [Progress](Progress)                                                     | Informing user about progress of a long operation.                                                               |
| [Logging Messages](Logging-Messages)                                     | Echo area messages are logged for the user.                                                                      |
| [Echo Area Customization](Echo-Area-Customization)                       | Controlling the echo area.                                                                                       |
| Reporting Warnings                                                       |                                                                                                                  |
| [Warning Basics](Warning-Basics)                                         | Warnings concepts and functions to report them.                                                                  |
| [Warning Variables](Warning-Variables)                                   | Variables programs bind to customize their warnings.                                                             |
| [Warning Options](Warning-Options)                                       | Variables users set to control display of warnings.                                                              |
| [Delayed Warnings](Delayed-Warnings)                                     | Deferring a warning until the end of a command.                                                                  |
| Overlays                                                                 |                                                                                                                  |
| [Managing Overlays](Managing-Overlays)                                   | Creating and moving overlays.                                                                                    |
| [Overlay Properties](Overlay-Properties)                                 | How to read and set properties. What properties do to the screen display.                                        |
| [Finding Overlays](Finding-Overlays)                                     | Searching for overlays.                                                                                          |
| Faces                                                                    |                                                                                                                  |
| [Face Attributes](Face-Attributes)                                       | What is in a face?                                                                                               |
| [Defining Faces](Defining-Faces)                                         | How to define a face.                                                                                            |
| [Attribute Functions](Attribute-Functions)                               | Functions to examine and set face attributes.                                                                    |
| [Displaying Faces](Displaying-Faces)                                     | How Emacs combines the faces specified for a character.                                                          |
| [Face Remapping](Face-Remapping)                                         | Remapping faces to alternative definitions.                                                                      |
| [Face Functions](Face-Functions)                                         | How to define and examine faces.                                                                                 |
| [Auto Faces](Auto-Faces)                                                 | Hook for automatic face assignment.                                                                              |
| [Basic Faces](Basic-Faces)                                               | Faces that are defined by default.                                                                               |
| [Font Selection](Font-Selection)                                         | Finding the best available font for a face.                                                                      |
| [Font Lookup](Font-Lookup)                                               | Looking up the names of available fonts and information about them.                                              |
| [Fontsets](Fontsets)                                                     | A fontset is a collection of fonts that handle a range of character sets.                                        |
| [Low-Level Font](Low_002dLevel-Font)                                     | Lisp representation for character display fonts.                                                                 |
| Fringes                                                                  |                                                                                                                  |
| [Fringe Size/Pos](Fringe-Size_002fPos)                                   | Specifying where to put the window fringes.                                                                      |
| [Fringe Indicators](Fringe-Indicators)                                   | Displaying indicator icons in the window fringes.                                                                |
| [Fringe Cursors](Fringe-Cursors)                                         | Displaying cursors in the right fringe.                                                                          |
| [Fringe Bitmaps](Fringe-Bitmaps)                                         | Specifying bitmaps for fringe indicators.                                                                        |
| [Customizing Bitmaps](Customizing-Bitmaps)                               | Specifying your own bitmaps to use in the fringes.                                                               |
| [Overlay Arrow](Overlay-Arrow)                                           | Display of an arrow to indicate position.                                                                        |
| The `display` Property                                                   |                                                                                                                  |
| [Replacing Specs](Replacing-Specs)                                       | Display specs that replace the text.                                                                             |
| [Specified Space](Specified-Space)                                       | Displaying one space with a specified width.                                                                     |
| [Pixel Specification](Pixel-Specification)                               | Specifying space width or height in pixels.                                                                      |
| [Other Display Specs](Other-Display-Specs)                               | Displaying an image; adjusting the height, spacing, and other properties of text.                                |
| [Display Margins](Display-Margins)                                       | Displaying text or images to the side of the main text.                                                          |
| Images                                                                   |                                                                                                                  |
| [Image Formats](Image-Formats)                                           | Supported image formats.                                                                                         |
| [Image Descriptors](Image-Descriptors)                                   | How to specify an image for use in `:display`.                                                                   |
| [XBM Images](XBM-Images)                                                 | Special features for XBM format.                                                                                 |
| [XPM Images](XPM-Images)                                                 | Special features for XPM format.                                                                                 |
| [ImageMagick Images](ImageMagick-Images)                                 | Special features available through ImageMagick.                                                                  |
| [Other Image Types](Other-Image-Types)                                   | Various other formats are supported.                                                                             |
| [Defining Images](Defining-Images)                                       | Convenient ways to define an image for later use.                                                                |
| [Showing Images](Showing-Images)                                         | Convenient ways to display an image once it is defined.                                                          |
| [Multi-Frame Images](Multi_002dFrame-Images)                             | Some images contain more than one frame.                                                                         |
| [Image Cache](Image-Cache)                                               | Internal mechanisms of image display.                                                                            |
| Buttons                                                                  |                                                                                                                  |
| [Button Properties](Button-Properties)                                   | Button properties with special meanings.                                                                         |
| [Button Types](Button-Types)                                             | Defining common properties for classes of buttons.                                                               |
| [Making Buttons](Making-Buttons)                                         | Adding buttons to Emacs buffers.                                                                                 |
| [Manipulating Buttons](Manipulating-Buttons)                             | Getting and setting properties of buttons.                                                                       |
| [Button Buffer Commands](Button-Buffer-Commands)                         | Buffer-wide commands and bindings for buttons.                                                                   |
| Abstract Display                                                         |                                                                                                                  |
| [Abstract Display Functions](Abstract-Display-Functions)                 | Functions in the Ewoc package.                                                                                   |
| [Abstract Display Example](Abstract-Display-Example)                     | Example of using Ewoc.                                                                                           |
| Character Display                                                        |                                                                                                                  |
| [Usual Display](Usual-Display)                                           | The usual conventions for displaying characters.                                                                 |
| [Display Tables](Display-Tables)                                         | What a display table consists of.                                                                                |
| [Active Display Table](Active-Display-Table)                             | How Emacs selects a display table to use.                                                                        |
| [Glyphs](Glyphs)                                                         | How to define a glyph, and what glyphs mean.                                                                     |
| [Glyphless Chars](Glyphless-Chars)                                       | How glyphless characters are drawn.                                                                              |
| Operating System Interface                                               |                                                                                                                  |
| [Starting Up](Starting-Up)                                               | Customizing Emacs startup processing.                                                                            |
| [Getting Out](Getting-Out)                                               | How exiting works (permanent or temporary).                                                                      |
| [System Environment](System-Environment)                                 | Distinguish the name and kind of system.                                                                         |
| [User Identification](User-Identification)                               | Finding the name and user id of the user.                                                                        |
| [Time of Day](Time-of-Day)                                               | Getting the current time.                                                                                        |
| [Time Conversion](Time-Conversion)                                       | Converting among timestamp forms.                                                                                |
| [Time Parsing](Time-Parsing)                                             | Converting timestamps to text and vice versa.                                                                    |
| [Processor Run Time](Processor-Run-Time)                                 | Getting the run time used by Emacs.                                                                              |
| [Time Calculations](Time-Calculations)                                   | Adding, subtracting, comparing times, etc.                                                                       |
| [Timers](Timers)                                                         | Setting a timer to call a function at a certain time.                                                            |
| [Idle Timers](Idle-Timers)                                               | Setting a timer to call a function when Emacs has been idle for a certain length of time.                        |
| [Terminal Input](Terminal-Input)                                         | Accessing and recording terminal input.                                                                          |
| [Terminal Output](Terminal-Output)                                       | Controlling and recording terminal output.                                                                       |
| [Sound Output](Sound-Output)                                             | Playing sounds on the computer’s speaker.                                                                        |
| [X11 Keysyms](X11-Keysyms)                                               | Operating on key symbols for X Windows.                                                                          |
| [Batch Mode](Batch-Mode)                                                 | Running Emacs without terminal interaction.                                                                      |
| [Session Management](Session-Management)                                 | Saving and restoring state with X Session Management.                                                            |
| [Desktop Notifications](Desktop-Notifications)                           | Desktop notifications.                                                                                           |
| [File Notifications](File-Notifications)                                 | File notifications.                                                                                              |
| [Dynamic Libraries](Dynamic-Libraries)                                   | On-demand loading of support libraries.                                                                          |
| [Security Considerations](Security-Considerations)                       | Running Emacs in an unfriendly environment.                                                                      |
| Starting Up Emacs                                                        |                                                                                                                  |
| [Startup Summary](Startup-Summary)                                       | Sequence of actions Emacs performs at startup.                                                                   |
| [Init File](Init-File)                                                   | Details on reading the init file.                                                                                |
| [Terminal-Specific](Terminal_002dSpecific)                               | How the terminal-specific Lisp file is read.                                                                     |
| [Command-Line Arguments](Command_002dLine-Arguments)                     | How command-line arguments are processed, and how you can customize them.                                        |
| Getting Out of Emacs                                                     |                                                                                                                  |
| [Killing Emacs](Killing-Emacs)                                           | Exiting Emacs irreversibly.                                                                                      |
| [Suspending Emacs](Suspending-Emacs)                                     | Exiting Emacs reversibly.                                                                                        |
| Terminal Input                                                           |                                                                                                                  |
| [Input Modes](Input-Modes)                                               | Options for how input is processed.                                                                              |
| [Recording Input](Recording-Input)                                       | Saving histories of recent or all input events.                                                                  |
| Preparing Lisp code for distribution                                     |                                                                                                                  |
| [Packaging Basics](Packaging-Basics)                                     | The basic concepts of Emacs Lisp packages.                                                                       |
| [Simple Packages](Simple-Packages)                                       | How to package a single .el file.                                                                                |
| [Multi-file Packages](Multi_002dfile-Packages)                           | How to package multiple files.                                                                                   |
| [Package Archives](Package-Archives)                                     | Maintaining package archives.                                                                                    |
| Tips and Conventions                                                     |                                                                                                                  |
| [Coding Conventions](Coding-Conventions)                                 | Conventions for clean and robust programs.                                                                       |
| [Key Binding Conventions](Key-Binding-Conventions)                       | Which keys should be bound by which programs.                                                                    |
| [Programming Tips](Programming-Tips)                                     | Making Emacs code fit smoothly in Emacs.                                                                         |
| [Compilation Tips](Compilation-Tips)                                     | Making compiled code run fast.                                                                                   |
| [Warning Tips](Warning-Tips)                                             | Turning off compiler warnings.                                                                                   |
| [Documentation Tips](Documentation-Tips)                                 | Writing readable documentation strings.                                                                          |
| [Comment Tips](Comment-Tips)                                             | Conventions for writing comments.                                                                                |
| [Library Headers](Library-Headers)                                       | Standard headers for library packages.                                                                           |
| GNU Emacs Internals                                                      |                                                                                                                  |
| [Building Emacs](Building-Emacs)                                         | How the dumped Emacs is made.                                                                                    |
| [Pure Storage](Pure-Storage)                                             | Kludge to make preloaded Lisp functions shareable.                                                               |
| [Garbage Collection](Garbage-Collection)                                 | Reclaiming space for Lisp objects no longer used.                                                                |
| [Stack-allocated Objects](Stack_002dallocated-Objects)                   | Temporary conses and strings on C stack.                                                                         |
| [Memory Usage](Memory-Usage)                                             | Info about total size of Lisp objects made so far.                                                               |
| [C Dialect](C-Dialect)                                                   | What C variant Emacs is written in.                                                                              |
| [Writing Emacs Primitives](Writing-Emacs-Primitives)                     | Writing C code for Emacs.                                                                                        |
| [Writing Dynamic Modules](Writing-Dynamic-Modules)                       | Writing loadable modules for Emacs.                                                                              |
| [Object Internals](Object-Internals)                                     | Data formats of buffers, windows, processes.                                                                     |
| [C Integer Types](C-Integer-Types)                                       | How C integer types are used inside Emacs.                                                                       |
| Writing Dynamic Modules                                                  |                                                                                                                  |
| [Module Initialization](Module-Initialization)                           |                                                                                                                  |
| [Module Functions](Module-Functions)                                     |                                                                                                                  |
| [Module Values](Module-Values)                                           |                                                                                                                  |
| [Module Misc](Module-Misc)                                               |                                                                                                                  |
| [Module Nonlocal](Module-Nonlocal)                                       |                                                                                                                  |
| Object Internals                                                         |                                                                                                                  |
| [Buffer Internals](Buffer-Internals)                                     | Components of a buffer structure.                                                                                |
| [Window Internals](Window-Internals)                                     | Components of a window structure.                                                                                |
| [Process Internals](Process-Internals)                                   | Components of a process structure.                                                                               |
