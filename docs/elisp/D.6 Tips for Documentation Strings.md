---
slug: Documentation-Tips
---

Here are some tips and conventions for the writing of documentation strings. You can check many of these conventions by running the command `M-x checkdoc-minor-mode`.

*   Every command, function, or variable intended for users to know about should have a documentation string.

*   An internal variable or subroutine of a Lisp program might as well have a documentation string. Documentation strings take up very little space in a running Emacs.

*   Format the documentation string so that it fits in an Emacs window on an 80-column screen. It is a good idea for most lines to be no wider than 60 characters. The first line should not be wider than 67 characters or it will look bad in the output of `apropos`.

    You can fill the text if that looks good. Emacs Lisp mode fills documentation strings to the width specified by `emacs-lisp-docstring-fill-column`. However, you can sometimes make a documentation string much more readable by adjusting its line breaks with care. Use blank lines between sections if the documentation string is long.

*   The first line of the documentation string should consist of one or two complete sentences that stand on their own as a summary. `M-x apropos` displays just the first line, and if that line’s contents don’t stand on their own, the result looks bad. In particular, start the first line with a capital letter and end it with a period.

    For a function, the first line should briefly answer the question, “What does this function do?" For a variable, the first line should briefly answer the question, “What does this value mean?"

    Don’t limit the documentation string to one line; use as many lines as you need to explain the details of how to use the function or variable. Please use complete sentences for the rest of the text too.

*   When the user tries to use a disabled command, Emacs displays just the first paragraph of its documentation string—everything through the first blank line. If you wish, you can choose which information to include before the first blank line so as to make this display useful.

*   The first line should mention all the important arguments of the function, and should mention them in the order that they are written in a function call. If the function has many arguments, then it is not feasible to mention them all in the first line; in that case, the first line should mention the first few arguments, including the most important arguments.

*   When a function’s documentation string mentions the value of an argument of the function, use the argument name in capital letters as if it were a name for that value. Thus, the documentation string of the function `eval` refers to its first argument as ‘`FORM`’, because the actual argument name is `form`:

    ```lisp
    Evaluate FORM and return its value.
    ```

    Also write metasyntactic variables in capital letters, such as when you show the decomposition of a list or vector into subunits, some of which may vary. ‘`KEY`’ and ‘`VALUE`’ in the following example illustrate this practice:

    ```lisp
    The argument TABLE should be an alist whose elements
    have the form (KEY . VALUE).  Here, KEY is ...
    ```

*   Never change the case of a Lisp symbol when you mention it in a doc string. If the symbol’s name is `foo`, write “foo", not “Foo" (which is a different symbol).

    This might appear to contradict the policy of writing function argument values, but there is no real contradiction; the argument *value* is not the same thing as the *symbol* that the function uses to hold the value.

    If this puts a lower-case letter at the beginning of a sentence and that annoys you, rewrite the sentence so that the symbol is not at the start of it.

*   Do not start or end a documentation string with whitespace.

*   **Do not** indent subsequent lines of a documentation string so that the text is lined up in the source code with the text of the first line. This looks nice in the source code, but looks bizarre when users view the documentation. Remember that the indentation before the starting double-quote is not part of the string!

*   When a documentation string refers to a Lisp symbol, write it as it would be printed (which usually means in lower case), surrounding it with curved single quotes (`‘..’`). There are two exceptions: write `t` and `nil` without surrounding punctuation. For example:

    ```lisp
     CODE can be ‘lambda’, nil, or t.
    ```

    See [Quotation Marks](https://www.gnu.org/software/emacs/manual/html_mono/emacs.html#Quotation-Marks) in The GNU Emacs Manual, for how to enter curved single quotes.

    Documentation strings can also use an older single-quoting convention, which quotes symbols with grave accent `` ` `` and apostrophe `'`: `` `like-this' `` rather than `‘like-this’`. This older convention was designed for now-obsolete displays in which grave accent and apostrophe were mirror images. Documentation using this convention is converted to the user’s preferred format when it is copied into a help buffer. See [Keys in Documentation](/docs/elisp/Keys-in-Documentation).

    Help mode automatically creates a hyperlink when a documentation string uses a single-quoted symbol name, if the symbol has either a function or a variable definition. You do not need to do anything special to make use of this feature. However, when a symbol has both a function definition and a variable definition, and you want to refer to just one of them, you can specify which one by writing one of the words ‘`variable`’, ‘`option`’, ‘`function`’, or ‘`command`’, immediately before the symbol name. (Case makes no difference in recognizing these indicator words.) For example, if you write

    ```lisp
    This function sets the variable `buffer-file-name'.
    ```

    then the hyperlink will refer only to the variable documentation of `buffer-file-name`, and not to its function documentation.

    If a symbol has a function definition and/or a variable definition, but those are irrelevant to the use of the symbol that you are documenting, you can write the words ‘`symbol`’ or ‘`program`’ before the symbol name to prevent making any hyperlink. For example,

    ```lisp
    If the argument KIND-OF-RESULT is the symbol `list',
    this function returns a list of all the objects
    that satisfy the criterion.
    ```

    does not make a hyperlink to the documentation, irrelevant here, of the function `list`.

    Normally, no hyperlink is made for a variable without variable documentation. You can force a hyperlink for such variables by preceding them with one of the words ‘`variable`’ or ‘`option`’.

    Hyperlinks for faces are only made if the face name is preceded or followed by the word ‘`face`’. In that case, only the face documentation will be shown, even if the symbol is also defined as a variable or as a function.

    To make a hyperlink to Info documentation, write the single-quoted name of the Info node (or anchor), preceded by ‘`info node`’, ‘`Info node`’, ‘`info anchor`’ or ‘`Info anchor`’. The Info file name defaults to ‘`emacs`’. For example,

    ```lisp
    See Info node `Font Lock' and Info node `(elisp)Font Lock Basics'.
    ```

    Finally, to create a hyperlink to URLs, write the single-quoted URL, preceded by ‘`URL`’. For example,

    ```lisp
    The home page for the GNU project has more information (see URL
    `https://www.gnu.org/').
    ```

*   Don’t write key sequences directly in documentation strings. Instead, use the ‘`\\[…]`’ construct to stand for them. For example, instead of writing ‘`C-f`’, write the construct ‘`\\[forward-char]`’. When Emacs displays the documentation string, it substitutes whatever key is currently bound to `forward-char`. (This is normally ‘`C-f`’, but it may be some other character if the user has moved key bindings.) See [Keys in Documentation](/docs/elisp/Keys-in-Documentation).

*   In documentation strings for a major mode, you will want to refer to the key bindings of that mode’s local map, rather than global ones. Therefore, use the construct ‘`\\<…>`’ once in the documentation string to specify which key map to use. Do this before the first use of ‘`\\[…]`’. The text inside the ‘`\\<…>`’ should be the name of the variable containing the local keymap for the major mode.

    It is not practical to use ‘`\\[…]`’ very many times, because display of the documentation string will become slow. So use this to describe the most important commands in your major mode, and then use ‘`\\{…}`’ to display the rest of the mode’s keymap.

*   For consistency, phrase the verb in the first sentence of a function’s documentation string as an imperative—for instance, use “Return the cons of A and B." in preference to “Returns the cons of A and B." Usually it looks good to do likewise for the rest of the first paragraph. Subsequent paragraphs usually look better if each sentence is indicative and has a proper subject.

*   The documentation string for a function that is a yes-or-no predicate should start with words such as “Return t if", to indicate explicitly what constitutes truth. The word “return" avoids starting the sentence with lower-case “t", which could be somewhat distracting.

*   Write documentation strings in the active voice, not the passive, and in the present tense, not the future. For instance, use “Return a list containing A and B." instead of “A list containing A and B will be returned."

*   Avoid using the word “cause" (or its equivalents) unnecessarily. Instead of, “Cause Emacs to display text in boldface", write just “Display text in boldface".

*   Avoid using “iff" (a mathematics term meaning “if and only if"), since many people are unfamiliar with it and mistake it for a typo. In most cases, the meaning is clear with just “if". Otherwise, try to find an alternate phrasing that conveys the meaning.

*   Try to avoid using abbreviations such as “e.g." (for “for example"), “i.e." (for “that is"), “no." (for “number"), “c.f." (for “in contrast to") and “w\.r.t." (for “with respect to") as much as possible. It is almost always clearer and easier to read the expanded version.[^1]

*   When a command is meaningful only in a certain mode or situation, do mention that in the documentation string. For example, the documentation of `dired-find-file` is:

    ```lisp
    In Dired, visit the file or directory named on this line.
    ```

*   When you define a variable that represents an option users might want to set, use `defcustom`. See [Defining Variables](/docs/elisp/Defining-Variables).

*   The documentation string for a variable that is a yes-or-no flag should start with words such as “Non-nil means", to make it clear that all non-`nil` values are equivalent and indicate explicitly what `nil` and non-`nil` mean.

*   If a line in a documentation string begins with an open-parenthesis, consider writing a backslash before the open-parenthesis, like this:

    ```lisp
    The argument FOO can be either a number
    \(a buffer position) or a string (a file name).
    ```

    This avoids a bug in Emacs versions older than 27.1, where the ‘`(`’ was treated as the start of a defun (see [Defuns](https://www.gnu.org/software/emacs/manual/html_mono/emacs.html#Defuns) in The GNU Emacs Manual). If you do not anticipate anyone editing your code with older Emacs versions, there is no need for this work-around.

[^1]: We do use these occasionally, but try not to overdo it.
