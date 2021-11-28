---
slug: Key-Binding-Conventions
---

*   Many special major modes, like Dired, Info, Compilation, and Occur, are designed to handle read-only text that contains *hyper-links*. Such a major mode should redefine `mouse-2` and `RET` to follow the links. It should also set up a `follow-link` condition, so that the link obeys `mouse-1-click-follows-link`. See [Clickable Text](/docs/elisp/Clickable-Text). See [Buttons](/docs/elisp/Buttons), for an easy method of implementing such clickable links.

*   Don’t define `C-c letter` as a key in Lisp programs. Sequences consisting of `C-c` and a letter (either upper or lower case) are reserved for users; they are the **only** sequences reserved for users, so do not block them.

    Changing all the Emacs major modes to respect this convention was a lot of work; abandoning this convention would make that work go to waste, and inconvenience users. Please comply with it.

*   Function keys `F5` through `F9` without modifier keys are also reserved for users to define.

*   Sequences consisting of `C-c` followed by a control character or a digit are reserved for major modes.

*   Sequences consisting of `C-c` followed by `{`, `}`, `<`, `>`, `:` or `;` are also reserved for major modes.

*   Sequences consisting of `C-c` followed by any other ASCII punctuation or symbol character are allocated for minor modes. Using them in a major mode is not absolutely prohibited, but if you do that, the major mode binding may be shadowed from time to time by minor modes.

*   Don’t bind `C-h` following any prefix character (including `C-c`). If you don’t bind `C-h`, it is automatically available as a help character for listing the subcommands of the prefix character.

*   Don’t bind a key sequence ending in `ESC` except following another `ESC`. (That is, it is OK to bind a sequence ending in `ESC ESC`.)

    The reason for this rule is that a non-prefix binding for `ESC` in any context prevents recognition of escape sequences as function keys in that context.

*   Similarly, don’t bind a key sequence ending in `C-g`, since that is commonly used to cancel a key sequence.

*   Anything that acts like a temporary mode or state that the user can enter and leave should define `ESC ESC` or `ESC ESC ESC` as a way to escape.

    For a state that accepts ordinary Emacs commands, or more generally any kind of state in which `ESC` followed by a function key or arrow key is potentially meaningful, then you must not define `ESC ESC`, since that would preclude recognizing an escape sequence after `ESC`. In these states, you should define `ESC ESC ESC` as the way to escape. Otherwise, define `ESC ESC` instead.
