---
slug: Keymaps
---

The command bindings of input events are recorded in data structures called *keymaps*. Each entry in a keymap associates (or *binds*) an individual event type, either to another keymap or to a command. When an event type is bound to a keymap, that keymap is used to look up the next input event; this continues until a command is found. The whole process is called *key lookup*.

|                                                                    |    |                                                                                                                 |
| :----------------------------------------------------------------- | -- | :-------------------------------------------------------------------------------------------------------------- |
| • [Key Sequences](/docs/elisp/Key-Sequences)                       |    | Key sequences as Lisp objects.                                                                                  |
| • [Keymap Basics](/docs/elisp/Keymap-Basics)                       |    | Basic concepts of keymaps.                                                                                      |
| • [Format of Keymaps](/docs/elisp/Format-of-Keymaps)               |    | What a keymap looks like as a Lisp object.                                                                      |
| • [Creating Keymaps](/docs/elisp/Creating-Keymaps)                 |    | Functions to create and copy keymaps.                                                                           |
| • [Inheritance and Keymaps](/docs/elisp/Inheritance-and-Keymaps)   |    | How one keymap can inherit the bindings of another keymap.                                                      |
| • [Prefix Keys](/docs/elisp/Prefix-Keys)                           |    | Defining a key with a keymap as its definition.                                                                 |
| • [Active Keymaps](/docs/elisp/Active-Keymaps)                     |    | How Emacs searches the active keymaps for a key binding.                                                        |
| • [Searching Keymaps](/docs/elisp/Searching-Keymaps)               |    | A pseudo-Lisp summary of searching active maps.                                                                 |
| • [Controlling Active Maps](/docs/elisp/Controlling-Active-Maps)   |    | Each buffer has a local keymap to override the standard (global) bindings. A minor mode can also override them. |
| • [Key Lookup](/docs/elisp/Key-Lookup)                             |    | Finding a key’s binding in one keymap.                                                                          |
| • [Functions for Key Lookup](/docs/elisp/Functions-for-Key-Lookup) |    | How to request key lookup.                                                                                      |
| • [Changing Key Bindings](/docs/elisp/Changing-Key-Bindings)       |    | Redefining a key in a keymap.                                                                                   |
| • [Remapping Commands](/docs/elisp/Remapping-Commands)             |    | A keymap can translate one command to another.                                                                  |
| • [Translation Keymaps](/docs/elisp/Translation-Keymaps)           |    | Keymaps for translating sequences of events.                                                                    |
| • [Key Binding Commands](/docs/elisp/Key-Binding-Commands)         |    | Interactive interfaces for redefining keys.                                                                     |
| • [Scanning Keymaps](/docs/elisp/Scanning-Keymaps)                 |    | Looking through all keymaps, for printing help.                                                                 |
| • [Menu Keymaps](/docs/elisp/Menu-Keymaps)                         |    | Defining a menu as a keymap.                                                                                    |
