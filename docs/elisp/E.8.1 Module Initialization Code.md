---
slug: Module-Initialization
---

Begin your module by including the header file `emacs-module.h` and defining the GPL compatibility symbol:

```lisp
#include <emacs-module.h>

int plugin_is_GPL_compatible;
```

The `emacs-module.h` file is installed into your system’s include tree as part of the Emacs installation. Alternatively, you can find it in the Emacs source tree.

Next, write an initialization function for the module.

### <span className="tag function">`function`</span> *int* **emacs\_module\_init** *(struct emacs\_runtime \*`runtime`)*

Emacs calls this function when it loads a module. If a module does not export a function named `emacs_module_init`, trying to load the module will signal an error. The initialization function should return zero if the initialization succeeds, non-zero otherwise. In the latter case, Emacs will signal an error, and the loading of the module will fail. If the user presses `C-g` during the initialization, Emacs ignores the return value of the initialization function and quits (see [Quitting](Quitting)). (If needed, you can catch user quitting inside the initialization function, see [should\_quit](should_005fquit).)

The argument `runtime` is a pointer to a C `struct` that includes 2 public fields: `size`, which provides the size of the structure in bytes; and `get_environment`, which provides a pointer to a function that allows the module initialization function access to the Emacs environment object and its interfaces.

The initialization function should perform whatever initialization is required for the module. In addition, it can perform the following tasks:

### Compatibility verification

A module can verify that the Emacs executable which loads the module is compatible with the module, by comparing the `size` member of the `runtime` structure with the value compiled into the module:

```lisp
int
emacs_module_init (struct emacs_runtime *ert)
{
  if (ert->size < sizeof (*ert))
    return 1;
}
```

If the size of the runtime object passed to the module is smaller than what it expects, it means the module was compiled for an Emacs version newer (later) than the one which attempts to load it, i.e. the module might be incompatible with the Emacs binary.

In addition, a module can verify the compatibility of the module API with what the module expects. The following sample code assumes it is part of the `emacs_module_init` function shown above:

```lisp
  emacs_env *env = ert->get_environment (ert);
  if (env->size < sizeof (*env))
    return 2;
```

This calls the `get_environment` function using the pointer provided in the `runtime` structure to retrieve a pointer to the API’s *environment*, a C `struct` which also has a `size` field holding the size of the structure in bytes.

Finally, you can write a module that will work with older versions of Emacs, by comparing the size of the environment passed by Emacs with known sizes, like this:

```lisp
  emacs_env *env = ert->get_environment (ert);
  if (env->size >= sizeof (struct emacs_env_26))
    emacs_version = 26;  /* Emacs 26 or later.  */
  else if (env->size >= sizeof (struct emacs_env_25))
    emacs_version = 25;
  else
    return 2; /* Unknown or unsupported version.  */
```

This works because later Emacs versions always *add* members to the environment, never *remove* any members, so the size can only grow with new Emacs releases. Given the version of Emacs, the module can use only the parts of the module API that existed in that version, since those parts are identical in later versions.

`emacs-module.h` defines a preprocessor macro `EMACS_MAJOR_VERSION`. It expands to an integer literal which is the latest major version of Emacs supported by the header. See [Version Info](Version-Info). Note that the value of `EMACS_MAJOR_VERSION` is a compile-time constant and does not represent the version of Emacs that is currently running and has loaded your module. If you want your module to be compatible with various versions of `emacs-module.h` as well as various versions of Emacs, you can use conditional compilation based on `EMACS_MAJOR_VERSION`.

We recommend that modules always perform the compatibility verification, unless they do their job entirely in the initialization function, and don’t access any Lisp objects or use any Emacs functions accessible through the environment structure.

### Binding module functions to Lisp symbols

This gives the module functions names so that Lisp code could call it by that name. We describe how to do this in [Module Functions](Module-Functions) below.
