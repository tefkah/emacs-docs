---
slug: A-LaTeX-example
---

To wrap a source table in LaTeX, use the ‘`comment`’ environment provided by ‘`comment.sty`’[^1]. To activate it, put `\usepackage{comment}` in the document header. Orgtbl mode inserts a radio table skeleton[^2] with the command `M-x orgtbl-insert-radio-table`, which prompts for a table name. For example, if ‘`salesfigures`’ is the name, the template inserts:

```lisp
% BEGIN RECEIVE ORGTBL salesfigures
% END RECEIVE ORGTBL salesfigures
\begin{comment}
#+ORGTBL: SEND salesfigures orgtbl-to-latex
| | |
\end{comment}
```

The line ‘`#+ORGTBL: SEND`’ tells Orgtbl mode to use the function `orgtbl-to-latex` to convert the table to LaTeX format, then insert the table at the target (receive) location named ‘`salesfigures`’. Now the table is ready for data entry. It can even use spreadsheet features[^3]:

```lisp
% BEGIN RECEIVE ORGTBL salesfigures
% END RECEIVE ORGTBL salesfigures
\begin{comment}
#+ORGTBL: SEND salesfigures orgtbl-to-latex
| Month | Days | Nr sold | per day |
|-------+------+---------+---------|
| Jan   |   23 |      55 |     2.4 |
| Feb   |   21 |      16 |     0.8 |
| March |   22 |     278 |    12.6 |
#+TBLFM: $4=$3/$2;%.1f
% $ (optional extra dollar to keep Font Lock happy, see footnote)
\end{comment}
```

After editing, `C-c C-c` inserts the translated table at the target location, between the two marker lines.

For hand-made custom tables, note that the translator needs to skip the first two lines of the source table. Also the command has to *splice* out the target table without the header and footer.

```lisp
\begin{tabular}{lrrr}
Month & \multicolumn{1}{c}{Days} & Nr.\ sold & per day\\
% BEGIN RECEIVE ORGTBL salesfigures
% END RECEIVE ORGTBL salesfigures
\end{tabular}
%
\begin{comment}
#+ORGTBL: SEND salesfigures orgtbl-to-latex :splice t :skip 2
| Month | Days | Nr sold | per day |
|-------+------+---------+---------|
| Jan   |   23 |      55 |     2.4 |
| Feb   |   21 |      16 |     0.8 |
| March |   22 |     278 |    12.6 |
#+TBLFM: $4=$3/$2;%.1f
\end{comment}
```

The LaTeX translator function `orgtbl-to-latex` is already part of Orgtbl mode and uses a ‘`tabular`’ environment to typeset the table and marks horizontal lines with `\hline`. For additional parameters to control output, see [Translator functions](/docs/org/Tables-in-Arbitrary-Syntax):

### ‘`:splice BOOLEAN`’

When \{\{\{var(BOOLEAN}}} is non-`nil`, return only table body lines; i.e., not wrapped in ‘`tabular`’ environment. Default is `nil`.

### ‘`:fmt FMT`’

Format string to warp each field. It should contain ‘`%s`’ for the original field value. For example, to wrap each field value in dollar symbol, you could use ‘`:fmt "$%s$"`’. Format can also wrap a property list with column numbers and formats, for example ‘`:fmt (2 "$%s$" 4 "%s\\%%")`’. In place of a string, a function of one argument can be used; the function must return a formatted string.

### ‘`:efmt EFMT`’

Format numbers as exponentials. The spec should have ‘`%s`’ twice for inserting mantissa and exponent, for example ‘`"%s\\times10^{%s}"`’. This may also be a property list with column numbers and formats, for example ‘`:efmt (2 "$%s\\times10^{%s}$" 4 "$%s\\cdot10^{%s}$")`’. After `EFMT` has been applied to a value, `FMT`—see above—is also applied. Functions with two arguments can be supplied instead of strings. By default, no special formatting is applied.

[^1]: [https://www.ctan.org/pkg/comment](https://www.ctan.org/pkg/comment)

[^2]: By default this works only for LaTeX, HTML, and Texinfo. Configure the variable `orgtbl-radio-table-templates` to install templates for other modes.

[^3]: If the ‘`TBLFM`’ keyword contains an odd number of dollar characters, this may cause problems with Font Lock in LaTeX mode. As shown in the example you can fix this by adding an extra line inside the ‘`comment`’ environment that is used to balance the dollar expressions. If you are using AUCTeX with the font-latex library, a much better solution is to add the ‘`comment`’ environment to the variable `LaTeX-verbatim-environments`.
