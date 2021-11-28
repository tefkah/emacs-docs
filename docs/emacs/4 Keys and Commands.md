---
slug: Commands
---

This manual is full of passages that tell you what particular keys do. But Emacs does not assign meanings to keys directly. Instead, Emacs assigns meanings to named *commands*, and then gives keys their meanings by *binding* them to commands.

Every command has a name chosen by a programmer. The name is usually made of a few English words separated by dashes; for example, `next-line` or `forward-word`. Internally, each command is a special type of Lisp *function*, and the actions associated with the command are performed by running the function. See [What Is a Function](https://www.gnu.org/software/emacs/manual/html_mono/elisp.html#What-Is-a-Function) in The Emacs Lisp Reference Manual.

The bindings between keys and commands are recorded in tables called *keymaps*. See [Keymaps](/docs/emacs/Keymaps).

When we say that “`C-n` moves down vertically one line" we are glossing over a subtle distinction that is irrelevant in ordinary use, but vital for Emacs customization. The command `next-line` does a vertical move downward. `C-n` has this effect *because* it is bound to `next-line`. If you rebind `C-n` to the command `forward-word`, `C-n` will move forward one word instead.

In this manual, we will often speak of keys like `C-n` as commands, even though strictly speaking the key is bound to a command. Usually, we state the name of the command which really does the work in parentheses after mentioning the key that runs it. For example, we will say that “The command `C-n` (`next-line`) moves point vertically down", meaning that the command `next-line` moves vertically down, and the key `C-n` is normally bound to it.

Since we are discussing customization, we should tell you about *variables*. Often the description of a command will say, “To change this, set the variable `mumble-foo`." A variable is a name used to store a value. Most of the variables documented in this manual are meant for customization: some command or other part of Emacs examines the variable and behaves differently according to the value that you set. You can ignore the information about variables until you are interested in customizing them. Then read the basic information on variables (see [Variables](/docs/emacs/Variables)) and the information about specific variables will make sense.
