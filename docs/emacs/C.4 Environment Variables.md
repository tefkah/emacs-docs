---
slug: Environment
---

The *environment* is a feature of the operating system; it consists of a collection of variables with names and values. Each variable is called an *environment variable*; environment variable names are case-sensitive, and it is conventional to use upper case letters only. The values are all text strings.

What makes the environment useful is that subprocesses inherit the environment automatically from their parent process. This means you can set up an environment variable in your login shell, and all the programs you run (including Emacs) will automatically see it. Subprocesses of Emacs (such as shells, compilers, and version control programs) inherit the environment from Emacs, too.

Inside Emacs, the command `M-x getenv` reads the name of an environment variable, and prints its value in the echo area. `M-x setenv` sets a variable in the Emacs environment, and `C-u M-x setenv` removes a variable. (Environment variable substitutions with ‘`$`’ work in the value just as in file names; see [File Names with $](/docs/emacs/File-Names-with-_0024).) The variable `initial-environment` stores the initial environment inherited by Emacs.

The way to set environment variables outside of Emacs depends on the operating system, and especially the shell that you are using. For example, here’s how to set the environment variable `ORGANIZATION` to ‘`not very much`’ using Bash:

```lisp
export ORGANIZATION="not very much"
```

and here’s how to do it in csh or tcsh:

```lisp
setenv ORGANIZATION "not very much"
```

When Emacs is using the X Window System, various environment variables that control X work for Emacs as well. See the X documentation for more information.

|                                                              |    |                                                       |
| :----------------------------------------------------------- | -- | :---------------------------------------------------- |
| • [General Variables](/docs/emacs/General-Variables)         |    | Environment variables that all versions of Emacs use. |
| • [Misc Variables](/docs/emacs/Misc-Variables)               |    | Certain system-specific variables.                    |
| • [MS-Windows Registry](/docs/emacs/MS_002dWindows-Registry) |    | An alternative to the environment on MS-Windows.      |
