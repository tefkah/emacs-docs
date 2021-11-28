---
slug: Resources
---

Programs running under the X Window System organize their user options under a hierarchy of classes and resources. You can specify default values for these options in your *X resource file*, usually named `~/.Xdefaults` or `~/.Xresources`. Changes in this file do not take effect immediately, because the X server stores its own list of resources; to update it, use the command `xrdb`—for instance, ‘`xrdb ~/.Xdefaults`’.

Settings specified via X resources in general override the equivalent settings in Emacs init files (see [Init File](/docs/emacs/Init-File)), in particular for parameters of the initial frame (see [Frame Parameters](/docs/emacs/Frame-Parameters)).

(MS-Windows systems do not support X resource files; on such systems, Emacs looks for X resources in the Windows Registry, first under the key ‘`HKEY_CURRENT_USER\SOFTWARE\GNU\Emacs`’, which affects only the current user and override the system-wide settings, and then under the key ‘`HKEY_LOCAL_MACHINE\SOFTWARE\GNU\Emacs`’, which affects all users of the system. The menu and scroll bars are native widgets on MS-Windows, so they are only customizable via the system-wide settings in the Display Control Panel. You can also set resources using the ‘`-xrm`’ command line option, as explained below.)

Each line in the X resource file specifies a value for one option or for a collection of related options. The order in which the lines appear in the file does not matter. Each resource specification consists of a *program name* and a *resource name*. Case distinctions are significant in each of these names. Here is an example:

```lisp
emacs.cursorColor: dark green
```

The program name is the name of the executable file to which the resource applies. For Emacs, this is normally ‘`emacs`’. To specify a definition that applies to all instances of Emacs, regardless of the name of the Emacs executable, use ‘`Emacs`’.

The resource name is the name of a program setting. For instance, Emacs recognizes a ‘`cursorColor`’ resource that controls the color of the text cursor.

Resources are grouped into named classes. For instance, the ‘`Foreground`’ class contains the ‘`cursorColor`’, ‘`foreground`’ and ‘`pointerColor`’ resources (see [Table of Resources](/docs/emacs/Table-of-Resources)). Instead of using a resource name, you can use a class name to specify the default value for all resources in that class, like this:

```lisp
emacs.Foreground: dark green
```

Emacs does not process X resources at all if you set the variable `inhibit-x-resources` to a non-`nil` value. If you invoke Emacs with the ‘`-Q`’ (or ‘`--quick`’) command-line option, `inhibit-x-resources` is automatically set to `t` (see [Initial Options](/docs/emacs/Initial-Options)).

In addition, you can use the following command-line options to override the X resources file:

### ‘`-name name`’

### ‘`--name=name`’

This option sets the program name of the initial Emacs frame to `name`. It also sets the title of the initial frame to `name`. This option does not affect subsequent frames.

If you don’t specify this option, the default is to use the Emacs executable’s name as the program name.

For consistency, ‘`-name`’ also specifies the name to use for other resource values that do not belong to any particular frame.

The resources that name Emacs invocations also belong to a class, named ‘`Emacs`’. If you write ‘`Emacs`’ instead of ‘`emacs`’, the resource applies to all frames in all Emacs jobs, regardless of frame titles and regardless of the name of the executable file.

### ‘`-xrm resource-value`’

### ‘`--xrm=resource-value`’

This option specifies X resource values for the present Emacs job.

`resource-value` should have the same format that you would use inside a file of X resources. Several ‘`-xrm`’ options are possible to include multiple resource specifications. You can also use ‘`#include "filename"`’ as `resource-value` to include a file full of resource specifications. Resource values specified with ‘`-xrm`’ take precedence over all other resource specifications.
