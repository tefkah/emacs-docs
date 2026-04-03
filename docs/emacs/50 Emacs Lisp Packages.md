---
slug: Packages
---

Emacs is extended by implementing additional features in *packages*, which are Emacs Lisp libraries. These could be written by you or provided by someone else. If you want to install such a package so it is available in your future Emacs session, you need to compile it and put it in a directory where Emacs looks for Lisp libraries. See [Libraries of Lisp Code for Emacs](/docs/emacs/Lisp-Libraries), for more details about this manual installation method. Many packages provide installation and usage instructions in the large commentary near the beginning of the Lisp file; you can use those instructions for installing and fine-tuning your use of the package.

Packages can also be provided by *package archives*, which are large collections of Emacs Lisp packages. Each package is a separate Emacs Lisp program, sometimes including other components such as an Info manual. Emacs includes a facility that lets you easily download and install packages from such archives. The rest of this chapter describes this facility.

To list the packages available for installation from package archives, type `M-x list-packages RET`<!-- /@w -->. It brings up a buffer named `*Packages*` with a list of all packages. You can install or uninstall packages via this buffer. See [The Package Menu Buffer](/docs/emacs/Package-Menu).

The command `C-h P` (`describe-package`) prompts for the name of a package, and displays a help buffer describing the attributes of the package and the features that it implements.

By default, Emacs downloads packages from two archives: [GNU ELPA](https://elpa.gnu.org/) and [NonGNU ELPA](https://elpa.nongnu.org/). These are maintained by the Emacs developers and hosted by the GNU project. Optionally, you can also download packages from third-party archives. See [Package Installation](/docs/emacs/Package-Installation).

For information about turning an Emacs Lisp program into an installable package, See [Packaging](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#Packaging) in The Emacs Lisp Reference Manual.
