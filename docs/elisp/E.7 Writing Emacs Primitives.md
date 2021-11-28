---
slug: Writing-Emacs-Primitives
---

Lisp primitives are Lisp functions implemented in C. The details of interfacing the C function so that Lisp can call it are handled by a few C macros. The only way to really understand how to write new C code is to read the source, but we can explain some things here.

An example of a special form is the definition of `or`, from `eval.c`. (An ordinary function would have the same general appearance.)

```lisp
DEFUN ("or", For, Sor, 0, UNEVALLED, 0,
       doc: /* Eval args until one of them yields non-nil,
then return that value.
The remaining args are not evalled at all.
If all args return nil, return nil.
```

```lisp
usage: (or CONDITIONS...)  */)
  (Lisp_Object args)
{
  Lisp_Object val = Qnil;
```



```lisp
  while (CONSP (args))
    {
      val = eval_sub (XCAR (args));
      if (!NILP (val))
        break;
      args = XCDR (args);
      maybe_quit ();
    }
```



```lisp
  return val;
}
```

Let’s start with a precise explanation of the arguments to the `DEFUN` macro. Here is a template for them:

```lisp
DEFUN (lname, fname, sname, min, max, interactive, doc)
```

### `lname`

This is the name of the Lisp symbol to define as the function name; in the example above, it is `or`.

### `fname`

This is the C function name for this function. This is the name that is used in C code for calling the function. The name is, by convention, ‘`F`’ prepended to the Lisp name, with all dashes (‘`-`’) in the Lisp name changed to underscores. Thus, to call this function from C code, call `For`.

### `sname`

This is a C variable name to use for a structure that holds the data for the subr object that represents the function in Lisp. This structure conveys the Lisp symbol name to the initialization routine that will create the symbol and store the subr object as its definition. By convention, this name is always `fname` with ‘`F`’ replaced with ‘`S`’.

### `min`

This is the minimum number of arguments that the function requires. The function `or` allows a minimum of zero arguments.

### `max`

This is the maximum number of arguments that the function accepts, if there is a fixed maximum. Alternatively, it can be `UNEVALLED`, indicating a special form that receives unevaluated arguments, or `MANY`, indicating an unlimited number of evaluated arguments (the equivalent of `&rest`). Both `UNEVALLED` and `MANY` are macros. If `max` is a number, it must be more than `min` but less than 8.

### `interactive`

This is an interactive specification, a string such as might be used as the argument of `interactive` in a Lisp function (see [Using Interactive](Using-Interactive)). In the case of `or`, it is `0` (a null pointer), indicating that `or` cannot be called interactively. A value of `""` indicates a function that should receive no arguments when called interactively. If the value begins with a ‘`"(`’, the string is evaluated as a Lisp form. For example:

```lisp
DEFUN ("foo", Ffoo, Sfoo, 0, 3,
       "(list (read-char-by-name \"Insert character: \")\
              (prefix-numeric-value current-prefix-arg)\
              t)",
       doc: /* … */)
```

### `doc`

This is the documentation string. It uses C comment syntax rather than C string syntax because comment syntax requires nothing special to include multiple lines. The ‘`doc:`’ identifies the comment that follows as the documentation string. The ‘`/*`’ and ‘`*/`’ delimiters that begin and end the comment are not part of the documentation string.

If the last line of the documentation string begins with the keyword ‘`usage:`’, the rest of the line is treated as the argument list for documentation purposes. This way, you can use different argument names in the documentation string from the ones used in the C code. ‘`usage:`’ is required if the function has an unlimited number of arguments.

Some primitives have multiple definitions, one per platform (e.g., `x-create-frame`). In such cases, rather than writing the same documentation string in each definition, only one definition has the actual documentation. The others have placeholders beginning with ‘`SKIP`’, which are ignored by the function that parses the `DOC` file.

All the usual rules for documentation strings in Lisp code (see [Documentation Tips](Documentation-Tips)) apply to C code documentation strings too.

The documentation string can be followed by a list of C function attributes for the C function that implements the primitive, like this:

```lisp
DEFUN ("bar", Fbar, Sbar, 0, UNEVALLED, 0
       doc: /* … */
       attributes: attr1 attr2 …)
```

You can specify more than a single attribute, one after the other. Currently, only the following attributes are recognized:

### `noreturn`

Declares the C function as one that never returns. This corresponds to the C11 keyword `_Noreturn` and to `__attribute__ ((__noreturn__))`<!-- /@w --> attribute of GCC (see [Function Attributes](https://gcc.gnu.org/onlinedocs/gcc/Function-Attributes.html#Function-Attributes) in Using the GNU Compiler Collection).

### `const`

Declares that the function does not examine any values except its arguments, and has no effects except the return value. This corresponds to `__attribute__ ((__const__))`<!-- /@w --> attribute of GCC.

### `noinline`

This corresponds to `__attribute__ ((__noinline__))`<!-- /@w --> attribute of GCC, which prevents the function from being considered for inlining. This might be needed, e.g., to countermand effects of link-time optimizations on stack-based variables.

After the call to the `DEFUN` macro, you must write the argument list for the C function, including the types for the arguments. If the primitive accepts a fixed maximum number of Lisp arguments, there must be one C argument for each Lisp argument, and each argument must be of type `Lisp_Object`. (Various macros and functions for creating values of type `Lisp_Object` are declared in the file `lisp.h`.) If the primitive is a special form, it must accept a Lisp list containing its unevaluated Lisp arguments as a single argument of type `Lisp_Object`. If the primitive has no upper limit on the number of evaluated Lisp arguments, it must have exactly two C arguments: the first is the number of Lisp arguments, and the second is the address of a block containing their values. These have types `ptrdiff_t` and `Lisp_Object *`<!-- /@w -->, respectively. Since `Lisp_Object` can hold any Lisp object of any data type, you can determine the actual data type only at run time; so if you want a primitive to accept only a certain type of argument, you must check the type explicitly using a suitable predicate (see [Type Predicates](Type-Predicates)).

Within the function `For` itself, the local variable `args` refers to objects controlled by Emacs’s stack-marking garbage collector. Although the garbage collector does not reclaim objects reachable from C `Lisp_Object` stack variables, it may move some of the components of an object, such as the contents of a string or the text of a buffer. Therefore, functions that access these components must take care to refetch their addresses after performing Lisp evaluation. This means that instead of keeping C pointers to string contents or buffer text, the code should keep the buffer or string position, and recompute the C pointer from the position after performing Lisp evaluation. Lisp evaluation can occur via calls to `eval_sub` or `Feval`, either directly or indirectly.

Note the call to `maybe_quit` inside the loop: this function checks whether the user pressed `C-g`, and if so, aborts the processing. You should do that in any loop that can potentially require a large number of iterations; in this case, the list of arguments could be very long. This increases Emacs responsiveness and improves user experience.

You must not use C initializers for static or global variables unless the variables are never written once Emacs is dumped. These variables with initializers are allocated in an area of memory that becomes read-only (on certain operating systems) as a result of dumping Emacs. See [Pure Storage](Pure-Storage).

Defining the C function is not enough to make a Lisp primitive available; you must also create the Lisp symbol for the primitive and store a suitable subr object in its function cell. The code looks like this:

```lisp
defsubr (&sname);
```

Here `sname` is the name you used as the third argument to `DEFUN`.

If you add a new primitive to a file that already has Lisp primitives defined in it, find the function (near the end of the file) named `syms_of_something`, and add the call to `defsubr` there. If the file doesn’t have this function, or if you create a new file, add to it a `syms_of_filename` (e.g., `syms_of_myfile`). Then find the spot in `emacs.c` where all of these functions are called, and add a call to `syms_of_filename` there.

The function `syms_of_filename` is also the place to define any C variables that are to be visible as Lisp variables. `DEFVAR_LISP` makes a C variable of type `Lisp_Object` visible in Lisp. `DEFVAR_INT` makes a C variable of type `int` visible in Lisp with a value that is always an integer. `DEFVAR_BOOL` makes a C variable of type `int` visible in Lisp with a value that is either `t` or `nil`. Note that variables defined with `DEFVAR_BOOL` are automatically added to the list `byte-boolean-vars` used by the byte compiler.

These macros all expect three arguments:

### `lname`

The name of the variable to be used by Lisp programs.

### `vname`

The name of the variable in the C sources.

### `doc`

The documentation for the variable, as a C comment. See [Documentation Basics](Documentation-Basics), for more details.

By convention, when defining variables of a “native" type (`int` and `bool`), the name of the C variable is the name of the Lisp variable with `-` replaced by `_`. When the variable has type `Lisp_Object`, the convention is to also prefix the C variable name with `V`. i.e.

```lisp
DEFVAR_INT ("my-int-variable", my_int_variable,
           doc: /* An integer variable.  */);

DEFVAR_LISP ("my-lisp-variable", Vmy_lisp_variable,
           doc: /* A Lisp variable.  */);
```

There are situations in Lisp where you need to refer to the symbol itself rather than the value of that symbol. One such case is when temporarily overriding the value of a variable, which in Lisp is done with `let`. In C sources, this is done by defining a corresponding, constant symbol, and using `specbind`. By convention, `Qmy_lisp_variable` corresponds to `Vmy_lisp_variable`; to define it, use the `DEFSYM` macro. i.e.

```lisp
DEFSYM (Qmy_lisp_variable, "my-lisp-variable");
```

To perform the actual binding:

```lisp
specbind (Qmy_lisp_variable, Qt);
```

In Lisp symbols sometimes need to be quoted, to achieve the same effect in C you again use the corresponding constant symbol `Qmy_lisp_variable`. For example, when creating a buffer-local variable (see [Buffer-Local Variables](Buffer_002dLocal-Variables)) in Lisp you would write:

```lisp
(make-variable-buffer-local 'my-lisp-variable)
```

In C the corresponding code uses `Fmake_variable_buffer_local` in combination with `DEFSYM`, i.e.

```lisp
DEFSYM (Qmy_lisp_variable, "my-lisp-variable");
Fmake_variable_buffer_local (Qmy_lisp_variable);
```

If you want to make a Lisp variable that is defined in C behave like one declared with `defcustom`, add an appropriate entry to `cus-start.el`. See [Variable Definitions](Variable-Definitions), for a description of the format to use.

If you directly define a file-scope C variable of type `Lisp_Object`, you must protect it from garbage-collection by calling `staticpro` in `syms_of_filename`, like this:

```lisp
staticpro (&variable);
```

Here is another example function, with more complicated arguments. This comes from the code in `window.c`, and it demonstrates the use of macros and functions to manipulate Lisp objects.

```lisp
DEFUN ("coordinates-in-window-p", Fcoordinates_in_window_p,
       Scoordinates_in_window_p, 2, 2, 0,
       doc: /* Return non-nil if COORDINATES are in WINDOW.
  …
```

```lisp
  or `right-margin' is returned.  */)
  (register Lisp_Object coordinates, Lisp_Object window)
{
  struct window *w;
  struct frame *f;
  int x, y;
  Lisp_Object lx, ly;
```



```lisp
  w = decode_live_window (window);
  f = XFRAME (w->frame);
  CHECK_CONS (coordinates);
  lx = Fcar (coordinates);
  ly = Fcdr (coordinates);
  CHECK_NUMBER (lx);
  CHECK_NUMBER (ly);
  x = FRAME_PIXEL_X_FROM_CANON_X (f, lx) + FRAME_INTERNAL_BORDER_WIDTH (f);
  y = FRAME_PIXEL_Y_FROM_CANON_Y (f, ly) + FRAME_INTERNAL_BORDER_WIDTH (f);
```



```lisp
  switch (coordinates_in_window (w, x, y))
    {
    case ON_NOTHING:            /* NOT in window at all.  */
      return Qnil;
```

```lisp
    …
```

```lisp
    case ON_MODE_LINE:          /* In mode line of window.  */
      return Qmode_line;
```

```lisp
    …
```

```lisp
    case ON_SCROLL_BAR:         /* On scroll-bar of window.  */
      /* Historically we are supposed to return nil in this case.  */
      return Qnil;
```



```lisp
    default:
      emacs_abort ();
    }
}
```

Note that C code cannot call functions by name unless they are defined in C. The way to call a function written in Lisp is to use `Ffuncall`, which embodies the Lisp function `funcall`. Since the Lisp function `funcall` accepts an unlimited number of arguments, in C it takes two: the number of Lisp-level arguments, and a one-dimensional array containing their values. The first Lisp-level argument is the Lisp function to call, and the rest are the arguments to pass to it.

The C functions `call0`, `call1`, `call2`, and so on, provide handy ways to call a Lisp function conveniently with a fixed number of arguments. They work by calling `Ffuncall`.

`eval.c` is a very good file to look through for examples; `lisp.h` contains the definitions for some important macros and functions.

If you define a function which is side-effect free or pure, give it a non-`nil` `side-effect-free` or `pure` property, respectively (see [Standard Properties](Standard-Properties)).
