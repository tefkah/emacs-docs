---
slug: git_002dcommit_002dmode-isn_0027t-used-when-committing-from-the-command_002dline
---

The reason for this is that `git-commit.el` has not been loaded yet and/or that the server has not been started yet. These things have always already been taken care of when you commit from Magit because in order to do so, Magit has to be loaded and doing that involves loading `git-commit` and starting the server.

If you want to commit from the command-line, then you have to take care of these things yourself. Your `init.el` file should contain:

```lisp
(require 'git-commit)
(server-mode)
```

Instead of ‘(require ’git-commit)‘ you may also use:

```lisp
(load "/path/to/magit-autoloads.el")
```

You might want to do that because loading `git-commit` causes large parts of Magit to be loaded.

There are also some variations of `(server-mode)` that you might want to try. Personally I use:

```lisp
(use-package server
  :config (or (server-running-p) (server-mode)))
```

Now you can use:

```lisp
$ emacs&
$ EDITOR=emacsclient git commit
```

However you cannot use:

```lisp
$ killall emacs
$ EDITOR="emacsclient --alternate-editor emacs" git commit
```

This will actually end up using `emacs`, not `emacsclient`. If you do this, then you can still edit the commit message but `git-commit-mode` won’t be used and you have to exit `emacs` to finish the process.

Tautology ahead. If you want to be able to use `emacsclient` to connect to a running `emacs` instance, even though no `emacs` instance is running, then you cannot use `emacsclient` directly.

Instead you have to create a script that does something like this:

Try to use `emacsclient` (without using `--alternate-editor`). If that succeeds, do nothing else. Otherwise start `emacs &` (and `init.el` must call `server-start`) and try to use `emacsclient` again.
