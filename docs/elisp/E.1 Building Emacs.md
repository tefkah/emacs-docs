---
slug: Building-Emacs
---

This section explains the steps involved in building the Emacs executable. You don’t have to know this material to build and install Emacs, since the makefiles do all these things automatically. This information is pertinent to Emacs developers.

Building Emacs requires GNU Make version 3.81 or later.

Compilation of the C source files in the `src` directory produces an executable file called `temacs`, also called a *bare impure Emacs*. It contains the Emacs Lisp interpreter and I/O routines, but not the editing commands.

The command `temacs -l loadup`<!-- /@w --> would run `temacs` and direct it to load `loadup.el`. The `loadup` library loads additional Lisp libraries, which set up the normal Emacs editing environment. After this step, the Emacs executable is no longer *bare*.

Because it takes some time to load the standard Lisp files, the `temacs` executable usually isn’t run directly by users. Instead, one of the last steps of building Emacs runs the command ‘`temacs -batch -l loadup --temacs=dump-method`’<!-- /@w -->. The special option `--temacs` tells `temacs` how to record all the standard preloaded Lisp functions and variables, so that when you subsequently run Emacs, it will start much faster. The `--temacs` option requires an argument `dump-method`, which can be one of the following:

### ‘`pdump`’

Record the preloaded Lisp data in a *dump file*. This method produces an additional data file which Emacs will load at startup. The produced dump file is usually called `emacs.pdmp`, and is installed in the Emacs `exec-directory` (see [Help Functions](Help-Functions)). This method is the most preferred one, as it does not require Emacs to employ any special techniques of memory allocation, which might get in the way of various memory-layout techniques used by modern systems to enhance security and privacy.

### ‘`pbootstrap`’

Like ‘`pdump`’, but used while *bootstrapping* Emacs, when no previous Emacs binary and no `*.elc` byte-compiled Lisp files are available. The produced dump file is usually named `bootstrap-emacs.pdmp` in this case.

### ‘`dump`’

This method causes `temacs` to dump out an executable program, called `emacs`, which has all the standard Lisp files already preloaded into it. (The ‘`-batch`’ argument prevents `temacs` from trying to initialize any of its data on the terminal, so that the tables of terminal information are empty in the dumped Emacs.) This method is also known as *unexec*, because it produces a program file from a running process, and thus is in some sense the opposite of executing a program to start a process. Although this method was the way that Emacs traditionally saved its state, it is now deprecated.

### ‘`bootstrap`’

Like ‘`dump`’, but used when bootstrapping Emacs with the `unexec` method.

The dumped `emacs` executable (also called a *pure* Emacs) is the one which is installed. If the portable dumper was used to build Emacs, the `emacs` executable is actually an exact copy of `temacs`, and the corresponding `emacs.pdmp` file is installed as well. The variable `preloaded-file-list` stores a list of the preloaded Lisp files recorded in the dump file or in the dumped Emacs executable. If you port Emacs to a new operating system, and are not able to implement dumping of any kind, then Emacs must load `loadup.el` each time it starts.

By default the dumped `emacs` executable records details such as the build time and host name. Use the `--disable-build-details` option of `configure` to suppress these details, so that building and installing Emacs twice from the same sources is more likely to result in identical copies of Emacs.

You can specify additional files to preload by writing a library named `site-load.el` that loads them. You may need to rebuild Emacs with an added definition

```lisp
#define SITELOAD_PURESIZE_EXTRA n
```

to make `n` added bytes of pure space to hold the additional files; see `src/puresize.h`. (Try adding increments of 20000 until it is big enough.) However, the advantage of preloading additional files decreases as machines get faster. On modern machines, it is usually not advisable.

After `loadup.el` reads `site-load.el`, it finds the documentation strings for primitive and preloaded functions (and variables) in the file `etc/DOC` where they are stored, by calling `Snarf-documentation` (see [Accessing Documentation](Definition-of-Snarf_002ddocumentation)).

You can specify other Lisp expressions to execute just before dumping by putting them in a library named `site-init.el`. This file is executed after the documentation strings are found.

If you want to preload function or variable definitions, there are three ways you can do this and make their documentation strings accessible when you subsequently run Emacs:

*   Arrange to scan these files when producing the `etc/DOC` file, and load them with `site-load.el`.
*   Load the files with `site-init.el`, then copy the files into the installation directory for Lisp files when you install Emacs.
*   Specify a `nil` value for `byte-compile-dynamic-docstrings` as a local variable in each of these files, and load them with either `site-load.el` or `site-init.el`. (This method has the drawback that the documentation strings take up space in Emacs all the time.)

It is not advisable to put anything in `site-load.el` or `site-init.el` that would alter any of the features that users expect in an ordinary unmodified Emacs. If you feel you must override normal features for your site, do it with `default.el`, so that users can override your changes if they wish. See [Startup Summary](Startup-Summary). Note that if either `site-load.el` or `site-init.el` changes `load-path`, the changes will be lost after dumping. See [Library Search](Library-Search). To make a permanent change to `load-path`, use the `--enable-locallisppath` option of `configure`.

In a package that can be preloaded, it is sometimes necessary (or useful) to delay certain evaluations until Emacs subsequently starts up. The vast majority of such cases relate to the values of customizable variables. For example, `tutorial-directory` is a variable defined in `startup.el`, which is preloaded. The default value is set based on `data-directory`. The variable needs to access the value of `data-directory` when Emacs starts, not when it is dumped, because the Emacs executable has probably been installed in a different location since it was dumped.

### <span className="tag function">`function`</span> **custom-initialize-delay** *symbol value*

This function delays the initialization of `symbol` to the next Emacs start. You normally use this function by specifying it as the `:initialize` property of a customizable variable. (The argument `value` is unused, and is provided only for compatibility with the form Custom expects.)

In the unlikely event that you need a more general functionality than `custom-initialize-delay` provides, you can use `before-init-hook` (see [Startup Summary](Startup-Summary)).

### <span className="tag function">`function`</span> **dump-emacs-portable** *to-file \&optional track-referrers*

This function dumps the current state of Emacs into a dump file `to-file`, using the `pdump` method. Normally, the dump file is called `emacs-name.dmp`, where `emacs-name` is the name of the Emacs executable file. The optional argument `track-referrers`, if non-`nil`, causes the portable dumper to keep additional information to help track down the provenance of object types that are not yet supported by the `pdump` method.

Although the portable dumper code can run on many platforms, the dump files that it produces are not portable—they can be loaded only by the Emacs executable that dumped them.

If you want to use this function in an Emacs that was already dumped, you must run Emacs with the ‘`-batch`’ option.

### <span className="tag function">`function`</span> **dump-emacs** *to-file from-file*

This function dumps the current state of Emacs into an executable file `to-file`, using the `unexec` method. It takes symbols from `from-file` (this is normally the executable file `temacs`).

This function cannot be used in an Emacs that was already dumped. This function is deprecated, and by default Emacs is built without `unexec` support so this function is not available.

### <span className="tag function">`function`</span> **pdumper-stats**

If the current Emacs session restored its state from a dump file, this function returns information about the dump file and the time it took to restore the Emacs state. The value is an alist `((dumped-with-pdumper . t) (load-time . time) (dump-file-name . file))`<!-- /@w -->, where `file` is the name of the dump file, and `time` is the time in seconds it took to restore the state from the dump file. If the current session was not restored from a dump file, the value is nil.
