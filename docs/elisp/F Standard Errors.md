---
slug: Standard-Errors
---

Here is a list of the more important error symbols in standard Emacs, grouped by concept. The list includes each symbol’s message and a cross reference to a description of how the error can occur.

Each error symbol has a set of parent error conditions that is a list of symbols. Normally this list includes the error symbol itself and the symbol `error`. Occasionally it includes additional symbols, which are intermediate classifications, narrower than `error` but broader than a single error symbol. For example, all the errors in accessing files have the condition `file-error`. If we do not say here that a certain error symbol has additional error conditions, that means it has none.

As a special exception, the error symbol `quit` does not have the condition `error`, because quitting is not considered an error.

Most of these error symbols are defined in C (mainly `data.c`), but some are defined in Lisp. For example, the file `userlock.el` defines the `file-locked` and `file-supersession` errors. Several of the specialized Lisp libraries distributed with Emacs define their own error symbols. We do not attempt to list of all those here.

See [Errors](/docs/elisp/Errors), for an explanation of how errors are generated and handled.

### `error`

The message is ‘`error`’. See [Errors](/docs/elisp/Errors).

### `quit`

The message is ‘`Quit`’. See [Quitting](/docs/elisp/Quitting).

### `args-out-of-range`

The message is ‘`Args out of range`’. This happens when trying to access an element beyond the range of a sequence, buffer, or other container-like object. See [Sequences Arrays Vectors](/docs/elisp/Sequences-Arrays-Vectors), and see [Text](/docs/elisp/Text).

### `arith-error`

The message is ‘`Arithmetic error`’. This occurs when trying to perform integer division by zero. See [Numeric Conversions](/docs/elisp/Numeric-Conversions), and see [Arithmetic Operations](/docs/elisp/Arithmetic-Operations).

### `beginning-of-buffer`

The message is ‘`Beginning of buffer`’. See [Character Motion](/docs/elisp/Character-Motion).

### `buffer-read-only`

The message is ‘`Buffer is read-only`’. See [Read Only Buffers](/docs/elisp/Read-Only-Buffers).

### `circular-list`

The message is ‘`List contains a loop`’. This happens when a circular structure is encountered. See [Circular Objects](/docs/elisp/Circular-Objects).

### `cl-assertion-failed`

The message is ‘`Assertion failed`’. This happens when the `cl-assert` macro fails a test. See [Assertions](https://www.gnu.org/software/emacs/manual/html_mono/cl.html#Assertions) in Common Lisp Extensions.

### `coding-system-error`

The message is ‘`Invalid coding system`’. See [Lisp and Coding Systems](/docs/elisp/Lisp-and-Coding-Systems).

### `cyclic-function-indirection`

The message is ‘`Symbol's chain of function indirections contains a loop`’. See [Function Indirection](/docs/elisp/Function-Indirection).

### `cyclic-variable-indirection`

The message is ‘`Symbol's chain of variable indirections contains a loop`’. See [Variable Aliases](/docs/elisp/Variable-Aliases).

### `dbus-error`

The message is ‘`D-Bus error`’. See [Errors and Events](https://www.gnu.org/software/emacs/manual/html_mono/dbus.html#Errors-and-Events) in D-Bus integration in Emacs.

### `end-of-buffer`

The message is ‘`End of buffer`’. See [Character Motion](/docs/elisp/Character-Motion).

### `end-of-file`

The message is ‘`End of file during parsing`’. Note that this is not a subcategory of `file-error`, because it pertains to the Lisp reader, not to file I/O. See [Input Functions](/docs/elisp/Input-Functions).

### `file-already-exists`

This is a subcategory of `file-error`. See [Writing to Files](/docs/elisp/Writing-to-Files).

### `file-date-error`

This is a subcategory of `file-error`. It occurs when `copy-file` tries and fails to set the last-modification time of the output file. See [Changing Files](/docs/elisp/Changing-Files).

### `file-error`

We do not list the error-strings of this error and its subcategories, because the error message is normally constructed from the data items alone when the error condition `file-error` is present. Thus, the error-strings are not very relevant. However, these error symbols do have `error-message` properties, and if no data is provided, the `error-message` property *is* used. See [Files](/docs/elisp/Files).

### `file-missing`

This is a subcategory of `file-error`. It occurs when an operation attempts to act on a file that is missing. See [Changing Files](/docs/elisp/Changing-Files).

### `compression-error`

This is a subcategory of `file-error`, which results from problems handling a compressed file. See [How Programs Do Loading](/docs/elisp/How-Programs-Do-Loading).

### `file-locked`

This is a subcategory of `file-error`. See [File Locks](/docs/elisp/File-Locks).

### `file-supersession`

This is a subcategory of `file-error`. See [Modification Time](/docs/elisp/Modification-Time).

### `file-notify-error`

This is a subcategory of `file-error`. It happens, when a file could not be watched for changes. See [File Notifications](/docs/elisp/File-Notifications).

### `ftp-error`

This is a subcategory of `file-error`, which results from problems in accessing a remote file using ftp. See [Remote Files](https://www.gnu.org/software/emacs/manual/html_mono/emacs.html#Remote-Files) in The GNU Emacs Manual.

### `invalid-function`

The message is ‘`Invalid function`’. See [Function Indirection](/docs/elisp/Function-Indirection).

### `invalid-read-syntax`

The message is usually ‘`Invalid read syntax`’. See [Printed Representation](/docs/elisp/Printed-Representation). This error can also be raised by commands like `eval-expression` when there’s text following an expression. In that case, the message is ‘`Trailing garbage following expression`’.

### `invalid-regexp`

The message is ‘`Invalid regexp`’. See [Regular Expressions](/docs/elisp/Regular-Expressions).

### `mark-inactive`

The message is ‘`The mark is not active now`’. See [The Mark](/docs/elisp/The-Mark).

### `no-catch`

The message is ‘`No catch for tag`’. See [Catch and Throw](/docs/elisp/Catch-and-Throw).

### `range-error`

The message is `Arithmetic range error`.

### `overflow-error`

The message is ‘`Arithmetic overflow error`’. This is a subcategory of `range-error`. This can happen with integers exceeding the `integer-width` limit. See [Integer Basics](/docs/elisp/Integer-Basics).

### `scan-error`

The message is ‘`Scan error`’. This happens when certain syntax-parsing functions find invalid syntax or mismatched parentheses. Conventionally raised with three argument: a human-readable error message, the start of the obstacle that cannot be moved over, and the end of the obstacle. See [List Motion](/docs/elisp/List-Motion), and see [Parsing Expressions](/docs/elisp/Parsing-Expressions).

### `search-failed`

The message is ‘`Search failed`’. See [Searching and Matching](/docs/elisp/Searching-and-Matching).

### `setting-constant`

The message is ‘`Attempt to set a constant symbol`’. This happens when attempting to assign values to `nil`, `t`, `most-positive-fixnum`, `most-negative-fixnum`, and keyword symbols. It also happens when attempting to assign values to `enable-multibyte-characters` and some other symbols whose direct assignment is not allowed for some reason. See [Constant Variables](/docs/elisp/Constant-Variables).

### `text-read-only`

The message is ‘`Text is read-only`’. This is a subcategory of `buffer-read-only`. See [Special Properties](/docs/elisp/Special-Properties).

### `undefined-color`

The message is ‘`Undefined color`’. See [Color Names](/docs/elisp/Color-Names).

### `user-error`

The message is the empty string. See [Signaling Errors](/docs/elisp/Signaling-Errors).

### `user-search-failed`

This is like ‘`search-failed`’, but doesn’t trigger the debugger, like ‘`user-error`’. See [Signaling Errors](/docs/elisp/Signaling-Errors), and see [Searching and Matching](/docs/elisp/Searching-and-Matching). This is used for searching in Info files, see [Search Text](https://www.gnu.org/software/emacs/manual/html_mono/info.html#Search-Text) in Info.

### `void-function`

The message is ‘`Symbol's function definition is void`’. See [Function Cells](/docs/elisp/Function-Cells).

### `void-variable`

The message is ‘`Symbol's value as variable is void`’. See [Accessing Variables](/docs/elisp/Accessing-Variables).

### `wrong-number-of-arguments`

The message is ‘`Wrong number of arguments`’. See [Argument List](/docs/elisp/Argument-List).

### `wrong-type-argument`

The message is ‘`Wrong type argument`’. See [Type Predicates](/docs/elisp/Type-Predicates).

### `unknown-image-type`

The message is ‘`Cannot determine image type`’. See [Images](/docs/elisp/Images).
