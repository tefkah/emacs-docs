---
slug: Module-Values
---

With very few exceptions, most modules need to exchange data with Lisp programs that call them: accept arguments to module functions and return values from module functions. For this purpose, the module API provides the `emacs_value` type, which represents Emacs Lisp objects communicated via the API; it is the functional equivalent of the `Lisp_Object` type used in Emacs C primitives (see [Writing Emacs Primitives](/docs/elisp/Writing-Emacs-Primitives)). This section describes the parts of the module API that allow to create `emacs_value` objects corresponding to basic Lisp data types, and how to access from C data in `emacs_value` objects that correspond to Lisp objects.

All of the functions described below are actually *function pointers* provided via the pointer to the environment which every module function accepts. Therefore, module code should call these functions through the environment pointer, like this:

```lisp
emacs_env *env;  /* the environment pointer */
env->some_function (arguments…);
```

The `emacs_env` pointer will usually come from the first argument to the module function, or from the call to `get_environment` if you need the environment in the module initialization function.

Most of the functions described below became available in Emacs 25, the first Emacs release that supported dynamic modules. For the few functions that became available in later Emacs releases, we mention the first Emacs version that supported them.

The following API functions extract values of various C data types from `emacs_value` objects. They all raise the `wrong-type-argument` error condition (see [Type Predicates](/docs/elisp/Type-Predicates)) if the argument `emacs_value` object is not of the type expected by the function. See [Module Nonlocal](/docs/elisp/Module-Nonlocal), for details of how signaling errors works in Emacs modules, and how to catch error conditions inside the module before they are reported to Emacs. The API function `type_of` (see [type\_of](/docs/elisp/Module-Misc)) can be used to obtain the type of a `emacs_value` object.

### <span className="tag function">`function`</span> *intmax\_t* **extract\_integer** *(emacs\_env \*`env`, emacs\_value `arg`)*

This function returns the value of a Lisp integer specified by `arg`. The C data type of the return value, `intmax_t`, is the widest integer data type supported by the C compiler, typically `long long`<!-- /@w -->. If the value of `arg` doesn’t fit into an `intmax_t`, the function signals an error using the error symbol `overflow-error`.

### <span className="tag function">`function`</span> *bool* **extract\_big\_integer** *(emacs\_env \*`env`, emacs\_value `arg`, int \*`sign`, ptrdiff\_t \*`count`, emacs\_limb\_t \*`magnitude`)*

This function, which is available since Emacs 27, extracts the integer value of `arg`. The value of `arg` must be an integer (fixnum or bignum). If `sign` is not `NULL`, it stores the sign of `arg` (-1, 0, or +1) into `*sign`. The magnitude is stored into `magnitude` as follows. If `count` and `magnitude` are both non-`NULL`, then `magnitude` must point to an array of at least `*count` `unsigned long` elements. If `magnitude` is large enough to hold the magnitude of `arg`, then this function writes the magnitude into the `magnitude` array in little-endian form, stores the number of array elements written into `*count`, and returns `true`. If `magnitude` is not large enough, it stores the required array size into `*count`, signals an error, and returns `false`. If `count` is not `NULL` and `magnitude` is `NULL`, then the function stores the required array size into `*count` and returns `true`.

Emacs guarantees that the maximum required value of `*count` never exceeds `min (PTRDIFF_MAX, SIZE_MAX) / sizeof (emacs_limb_t)`, so you can use `malloc (*count * sizeof *magnitude)` to allocate the `magnitude` array without worrying about integer overflow in the size calculation.

### <span className="tag typealias">`type alias`</span> **emacs\_limb\_t**

This is an unsigned integer type, used as the element type for the magnitude arrays for the big integer conversion functions. The type is guaranteed to have unique object representations, i.e., no padding bits.

### <span className="tag macro">`macro`</span> **EMACS\_LIMB\_MAX**

This macro expands to a constant expression specifying the maximum possible value for an `emacs_limb_t` object. The expression is suitable for use in `#if`.

### <span className="tag function">`function`</span> *double* **extract\_float** *(emacs\_env \*`env`, emacs\_value `arg`)*

This function returns the value of a Lisp float specified by `arg`, as a C `double` value.

### <span className="tag function">`function`</span> *struct* **timespec** *extract\_time (emacs\_env \*`env`, emacs\_value `time`)*

This function, which is available since Emacs 27, interprets `time` as an Emacs Lisp time value and returns the corresponding `struct timespec`. See [Time of Day](/docs/elisp/Time-of-Day). `struct timespec` represents a timestamp with nanosecond precision. It has the following members:

### `time_t tv_sec`

Whole number of seconds.

### `long tv_nsec`

Fractional seconds as a number of nanoseconds. For timestamps returned by `extract_time`, this is always nonnegative and less than one billion. (Although POSIX requires the type of `tv_nsec` to be `long`, the type is `long long` on some nonstandard platforms.)

See [(libc)Elapsed Time](https://www.gnu.org/software/libc/manual/html_mono/libc.html#Elapsed-Time).

If `time` has higher precision than nanoseconds, then this function truncates it to nanosecond precision towards negative infinity. This function signals an error if `time` (truncated to nanoseconds) cannot be represented by `struct timespec`. For example, if `time_t` is a 32-bit integer type, then a `time` value of ten billion seconds would signal an error, but a `time` value of 600 picoseconds would get truncated to zero.

If you need to deal with time values that are not representable by `struct timespec`, or if you want higher precision, call the Lisp function `encode-time` and work with its return value. See [Time Conversion](/docs/elisp/Time-Conversion).

### <span className="tag function">`function`</span> *bool* **copy\_string\_contents** *(emacs\_env \*`env`, emacs\_value `arg`, char \*`buf`, ptrdiff\_t \*`len`)*

This function stores the UTF-8 encoded text of a Lisp string specified by `arg` in the array of `char` pointed by `buf`, which should have enough space to hold at least `*len` bytes, including the terminating null byte. The argument `len` must not be a `NULL` pointer, and, when the function is called, it should point to a value that specifies the size of `buf` in bytes.

If the buffer size specified by `*len` is large enough to hold the string’s text, the function stores in `*len` the actual number of bytes copied to `buf`, including the terminating null byte, and returns `true`. If the buffer is too small, the function raises the `args-out-of-range` error condition, stores the required number of bytes in `*len`, and returns `false`. See [Module Nonlocal](/docs/elisp/Module-Nonlocal), for how to handle pending error conditions.

The argument `buf` can be a `NULL` pointer, in which case the function stores in `*len` the number of bytes required for storing the contents of `arg`, and returns `true`. This is how you can determine the size of `buf` needed to store a particular string: first call `copy_string_contents` with `NULL` as `buf`, then allocate enough memory to hold the number of bytes stored by the function in `*len`, and call the function again with non-`NULL` `buf` to actually perform the text copying.

### <span className="tag function">`function`</span> *emacs\_value* **vec\_get** *(emacs\_env \*`env`, emacs\_value `vector`, ptrdiff\_t `index`)*

This function returns the element of `vector` at `index`. The `index` of the first vector element is zero. The function raises the `args-out-of-range` error condition if the value of `index` is invalid. To extract C data from the value the function returns, use the other extraction functions described here, as appropriate for the Lisp data type stored in that element of the vector.

### <span className="tag function">`function`</span> *ptrdiff\_t* **vec\_size** *(emacs\_env \*`env`, emacs\_value `vector`)*

This function returns the number of elements in `vector`.

### <span className="tag function">`function`</span> *void* **vec\_set** *(emacs\_env \*`env`, emacs\_value `vector`, ptrdiff\_t `index`, emacs\_value `value`)*

This function stores `value` in the element of `vector` whose index is `index`. It raises the `args-out-of-range` error condition if the value of `index` is invalid.

The following API functions create `emacs_value` objects from basic C data types. They all return the created `emacs_value` object.

### <span className="tag function">`function`</span> *emacs\_value* **make\_integer** *(emacs\_env \*`env`, intmax\_t `n`)*

This function takes an integer argument `n` and returns the corresponding `emacs_value` object. It returns either a fixnum or a bignum depending on whether the value of `n` is inside the limits set by `most-negative-fixnum` and `most-positive-fixnum` (see [Integer Basics](/docs/elisp/Integer-Basics)).

### <span className="tag function">`function`</span> *emacs\_value* **make\_big\_integer** *(emacs\_env \*`env`, int sign, ptrdiff\_t count, const emacs\_limb\_t \*magnitude)*

This function, which is available since Emacs 27, takes an arbitrary-sized integer argument and returns a corresponding `emacs_value` object. The `sign` argument gives the sign of the return value. If `sign` is nonzero, then `magnitude` must point to an array of at least `count` elements specifying the little-endian magnitude of the return value.

The following example uses the GNU Multiprecision Library (GMP) to calculate the next probable prime after a given integer. See [(gmp)Top](https://www.gmplib.org/manual/index.html#Top), for a general overview of GMP, and see [(gmp)Integer Import and Export](https://www.gmplib.org/manual/Integer-Import-and-Export.html#Integer-Import-and-Export) for how to convert the `magnitude` array to and from GMP `mpz_t` values.

```lisp
#include <emacs-module.h>
int plugin_is_GPL_compatible;

#include <assert.h>
#include <limits.h>
#include <stdint.h>
#include <stdlib.h>
#include <string.h>

#include <gmp.h>

static void
memory_full (emacs_env *env)
{
  static const char message[] = "Memory exhausted";
  emacs_value data = env->make_string (env, message,
                                       strlen (message));
  env->non_local_exit_signal
    (env, env->intern (env, "error"),
     env->funcall (env, env->intern (env, "list"), 1, &data));
}

enum
{
  order = -1, endian = 0, nails = 0,
  limb_size = sizeof (emacs_limb_t),
  max_nlimbs = ((SIZE_MAX < PTRDIFF_MAX ? SIZE_MAX : PTRDIFF_MAX)
                / limb_size)
};

static bool
extract_big_integer (emacs_env *env, emacs_value arg, mpz_t result)
{
  ptrdiff_t nlimbs;
  bool ok = env->extract_big_integer (env, arg, NULL, &nlimbs, NULL);
  if (!ok)
    return false;
  assert (0 < nlimbs && nlimbs <= max_nlimbs);
  emacs_limb_t *magnitude = malloc (nlimbs * limb_size);
  if (magnitude == NULL)
    {
      memory_full (env);
      return false;
    }
  int sign;
  ok = env->extract_big_integer (env, arg, &sign, &nlimbs, magnitude);
  assert (ok);
  mpz_import (result, nlimbs, order, limb_size, endian, nails, magnitude);
  free (magnitude);
  if (sign < 0)
    mpz_neg (result, result);
  return true;
}

static emacs_value
make_big_integer (emacs_env *env, const mpz_t value)
{
  size_t nbits = mpz_sizeinbase (value, 2);
  int bitsperlimb = CHAR_BIT * limb_size - nails;
  size_t nlimbs = nbits / bitsperlimb + (nbits % bitsperlimb != 0);
  emacs_limb_t *magnitude
    = nlimbs <= max_nlimbs ? malloc (nlimbs * limb_size) : NULL;
  if (magnitude == NULL)
    {
      memory_full (env);
      return NULL;
    }
  size_t written;
  mpz_export (magnitude, &written, order, limb_size, endian, nails, value);
  assert (written == nlimbs);
  assert (nlimbs <= PTRDIFF_MAX);
  emacs_value result = env->make_big_integer (env, mpz_sgn (value),
                                              nlimbs, magnitude);
  free (magnitude);
  return result;
}

static emacs_value
next_prime (emacs_env *env, ptrdiff_t nargs, emacs_value *args,
            void *data)
{
  assert (nargs == 1);
  mpz_t p;
  mpz_init (p);
  extract_big_integer (env, args[0], p);
  mpz_nextprime (p, p);
  emacs_value result = make_big_integer (env, p);
  mpz_clear (p);
  return result;
}

int
emacs_module_init (struct emacs_runtime *ert)
{
  emacs_env *env = ert->get_environment (ert);
  emacs_value symbol = env->intern (env, "next-prime");
  emacs_value func
    = env->make_function (env, 1, 1, next_prime, NULL, NULL);
  emacs_value args[] = {symbol, func};
  env->funcall (env, env->intern (env, "defalias"), 2, args);
  return 0;
}
```

### <span className="tag function">`function`</span> *emacs\_value* **make\_float** *(emacs\_env \*`env`, double `d`)*

This function takes a `double` argument `d` and returns the corresponding Emacs floating-point value.

### <span className="tag function">`function`</span> *emacs\_value* **make\_time** *(emacs\_env \*`env`, struct timespec `time`)*

This function, which is available since Emacs 27, takes a `struct timespec` argument `time` and returns the corresponding Emacs timestamp as a pair `(ticks . hz)`. See [Time of Day](/docs/elisp/Time-of-Day). The return value represents exactly the same timestamp as `time`: all input values are representable, and there is never a loss of precision. `time.tv_sec` and `time.tv_nsec` can be arbitrary values. In particular, there’s no requirement that `time` be normalized. This means that `time.tv_nsec` can be negative or larger than 999,999,999.

### <span className="tag function">`function`</span> *emacs\_value* **make\_string** *(emacs\_env \*`env`, const char \*`str`, ptrdiff\_t `strlen`)*

This function creates an Emacs string from C text string pointed by `str` whose length in bytes, not including the terminating null byte, is `strlen`. The original string in `str` can be either an ASCII string or a UTF-8 encoded non-ASCII string; it can include embedded null bytes, and doesn’t have to end in a terminating null byte at `str[strlen]`. The function raises the `overflow-error` error condition if `strlen` is negative or exceeds the maximum length of an Emacs string.

The API does not provide functions to manipulate Lisp data structures, for example, create lists with `cons` and `list` (see [Building Lists](/docs/elisp/Building-Lists)), extract list members with `car` and `cdr` (see [List Elements](/docs/elisp/List-Elements)), create vectors with `vector` (see [Vector Functions](/docs/elisp/Vector-Functions)), etc. For these, use `intern` and `funcall`, described in the next subsection, to call the corresponding Lisp functions.

Normally, `emacs_value` objects have a rather short lifetime: it ends when the `emacs_env` pointer used for their creation goes out of scope. Occasionally, you may need to create *global references*: `emacs_value` objects that live as long as you wish. Use the following two functions to manage such objects.

### <span className="tag function">`function`</span> *emacs\_value* **make\_global\_ref** *(emacs\_env \*`env`, emacs\_value `value`)*

This function returns a global reference for `value`.

### <span className="tag function">`function`</span> *void* **free\_global\_ref** *(emacs\_env \*`env`, emacs\_value `global_value`)*

This function frees the `global_value` previously created by `make_global_ref`. The `global_value` is no longer valid after the call. Your module code should pair each call to `make_global_ref` with the corresponding `free_global_ref`.

An alternative to keeping around C data structures that need to be passed to module functions later is to create *user pointer* objects. A user pointer, or `user-ptr`, object is a Lisp object that encapsulates a C pointer and can have an associated finalizer function, which is called when the object is garbage-collected (see [Garbage Collection](/docs/elisp/Garbage-Collection)). The module API provides functions to create and access `user-ptr` objects. These functions raise the `wrong-type-argument` error condition if they are called on `emacs_value` that doesn’t represent a `user-ptr` object.

### <span className="tag function">`function`</span> *emacs\_value* **make\_user\_ptr** *(emacs\_env \*`env`, emacs\_finalizer `fin`, void \*`ptr`)*

This function creates and returns a `user-ptr` object which wraps the C pointer `ptr`. The finalizer function `fin` can be a `NULL` pointer (meaning no finalizer), or it can be a function of the following signature:

```lisp
typedef void (*emacs_finalizer) (void *ptr);
```

If `fin` is not a `NULL` pointer, it will be called with the `ptr` as the argument when the `user-ptr` object is garbage-collected. Don’t run any expensive code in a finalizer, because GC must finish quickly to keep Emacs responsive.

### <span className="tag function">`function`</span> *void* **\*get\_user\_ptr** *(emacs\_env \*`env`, emacs\_value val)*

This function extracts the C pointer from the Lisp object represented by `val`.

### <span className="tag function">`function`</span> *void* **set\_user\_ptr** *(emacs\_env \*`env`, emacs\_value `value`, void \*`ptr`)*

This function sets the C pointer embedded in the `user-ptr` object represented by `value` to `ptr`.

### <span className="tag function">`function`</span> *emacs\_finalizer* **get\_user\_finalizer** *(emacs\_env \*`env`, emacs\_value val)*

This function returns the finalizer of the `user-ptr` object represented by `val`, or `NULL` if it doesn’t have a finalizer.

### <span className="tag function">`function`</span> *void* **set\_user\_finalizer** *(emacs\_env \*`env`, emacs\_value `val`, emacs\_finalizer `fin`)*

This function changes the finalizer of the `user-ptr` object represented by `val` to be `fin`. If `fin` is a `NULL` pointer, the `user-ptr` object will have no finalizer.
