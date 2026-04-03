---
slug: Hacking
---

This appendix describes some ways a user can extend the functionality of Org.

### A.1 Hooks

Org has a large number of hook variables for adding functionality. A complete list of hooks with documentation is maintained by the Worg project at <https://orgmode.org/worg/doc.html#hooks>.

---

### A.2 Add-on Packages

Various authors wrote a large number of add-on packages for Org. Some of these packages used to be part of the '`org-mode`' repository but are now hosted in a separate '`org-contrib`' repository [here](https://git.sr.ht/~bzg/org-contrib). A Worg page with more information is at: <https://orgmode.org/worg/org-contrib/>.

---

### A.3 Adding Hyperlink Types

Org has many built-in hyperlink types (see [Hyperlinks](/docs/org/Hyperlinks)), and an interface for adding new link types. The following example shows the process of adding Org links to Unix man pages, which look like this

```lisp
[[man:printf][The printf manual]]

```

The following '`ol-man.el`' file implements it

```lisp
;;; ol-man.el - Support for links to man pages in Org mode
(require 'ol)

(org-link-set-parameters "man"
                         :follow #'org-man-open
                         :export #'org-man-export
                         :store #'org-man-store-link)

(defcustom org-man-command 'man
  "The Emacs command to be used to display a man page."
  :group 'org-link
  :type '(choice (const man) (const woman)))

(defun org-man-open (path _)
  "Visit the manpage on PATH.
PATH should be a topic that can be thrown at the man command."
  (funcall org-man-command path))

(defun org-man-store-link (&optional _interactive?)
  "Store a link to a man page."
  (when (memq major-mode '(Man-mode woman-mode))
    ;; This is a man page, we do make this link.
    (let* ((page (org-man-get-page-name))
           (link (concat "man:" page))
           (description (format "Man page for %s" page)))
      (org-link-store-props
       :type "man"
       :link link
       :description description))))

(defun org-man-get-page-name ()
  "Extract the page name from the buffer name."
  ;; This works for both `Man-mode' and `woman-mode'.
  (if (string-match " \\(\\S-+\\)\\*" (buffer-name))
      (match-string 1 (buffer-name))
    (error "Cannot create link to this man page")))

(defun org-man-export (link description format _)
  "Export a man page link from Org files."
  (let ((path (format "http://man.he.net/?topic=%s&section=all" link))
        (desc (or description link)))
    (pcase format
      (`html (format "<a target=\"_blank\" href=\"%s\">%s</a>" path desc))
      (`latex (format "\\href{%s}{%s}" path desc))
      (`texinfo (format "@uref{%s,%s}" path desc))
      (`ascii (format "%s (%s)" desc path))
      (t path))))

(provide ol-man)
;;; ol-man.el ends here

```

To activate links to man pages in Org, enter this in the Emacs init file:

```lisp
(require 'ol-man)

```

A review of '`ol-man.el`':

1. First, '`(require 'ol)`' ensures that '`ol.el`' is loaded.

2. Then `org-link-set-parameters` defines a new link type with '`man`' prefix and associates functions for following, exporting and storing such links. See the variable `org-link-parameters` for a complete list of possible associations.

3. The rest of the file implements necessary variables and functions.

   For example, `org-man-store-link` is responsible for storing a link when `org-store-link` (see [Handling Links](/docs/org/Handling-Links)) is called from a buffer displaying a man page. It is passed an argument `interactive?` which this function does not use, but other store functions use to behave differently when a link is stored interactively by the user. It first checks if the major mode is appropriate. If check fails, the function returns `nil`, which means it isn't responsible for creating a link to the current buffer. Otherwise the function makes a link string by combining the '`man:`' prefix with the man topic. It also provides a default description. The function `org-insert-link` can insert it back into an Org buffer later on.

---

### A.4 Adding Export Backends

Org's export engine makes it easy for writing new backends. The framework on which the engine was built makes it easy to derive new backends from existing ones.

The two main entry points to the export engine are: `org-export-define-backend` and `org-export-define-derived-backend`. To grok these functions, see '`ox-latex.el`' for an example of defining a new backend from scratch, and '`ox-beamer.el`' for an example of deriving from an existing engine.

For creating a new backend from scratch, first set its name as a symbol in an alist consisting of elements and export functions. To make the backend visible to the export dispatcher, set `:menu-entry` keyword. For export options specific to this backend, set the `:options-alist`.

For creating a new backend from an existing one, set `:translate-alist` to an alist of export functions. This alist replaces the parent backend functions.

For complete documentation, see [the Org Export Reference on Worg](https://orgmode.org/worg/dev/org-export-reference.html).

---

### A.5 Tables in Arbitrary Syntax

Due to Org's success in handling tables with Orgtbl, a frequently requested feature is the use of Org's table functions in other modes, e.g., LaTeX. This would be hard to do in a general way without complicated customization nightmares. Moreover, that would take Org away from its simplicity roots that Orgtbl has proven. There is, however, an alternate approach to accomplishing the same.

This approach involves implementing a custom *translate* function that operates on a native Org *source table* to produce a table in another format. This strategy would keep the excellently working Orgtbl simple and isolate complications, if any, confined to the translate function. To add more alien table formats, we just add more translate functions. Also the burden of developing custom translate functions for new table formats is in the hands of those who know those formats best.

- [Radio tables](/docs/org/Radio-tables)
- [A LaTeX example of radio tables](/docs/org/A-LaTeX-example)
- [Translator functions](/docs/org/Translator-functions)

---

#### A.5.1 Radio tables

Radio tables are target locations for translated tables that are not near their source. Org finds the target location and inserts the translated table.

The key to finding the target location is the magic words '`BEGIN/END RECEIVE ORGTBL`'. They have to appear as comments in the current mode. If the mode is C, then:

```lisp
/* BEGIN RECEIVE ORGTBL table_name */
/* END RECEIVE ORGTBL table_name */

```

At the location of source, Org needs a special line to direct Orgtbl to translate and to find the target for inserting the translated table. For example:

```lisp
#+ORGTBL: SEND table_name translation_function arguments ...

```

'`table_name`' is the table's reference name, which is also used in the receiver lines, and the '`translation_function`' is the Lisp function that translates. This line, in addition, may also contain alternating key and value arguments at the end. The translation function gets these values as a property list. A few standard parameters are already recognized and acted upon before the translation function is called:

### '`:skip N`'

Skip the first N lines of the table. Hlines do count; include them if they are to be skipped.

### '`:skipcols (n1 n2 ...)`'

List of columns to be skipped. First Org automatically discards columns with calculation marks and then sends the table to the translator function, which then skips columns as specified in '`skipcols`'.

To keep the source table intact in the buffer without being disturbed when the source file is compiled or otherwise being worked on, use one of these strategies:

- Place the table in a block comment. For example, in C mode you could wrap the table between '`/*`' and '`*/`' lines.
- Put the table after an "end" statement. For example `\bye` in TeX and `\end{document}` in LaTeX.
- Comment and un-comment each line of the table during edits. The `M-x orgtbl-toggle-comment` command makes toggling easy.

---

#### A.5.2 A LaTeX example of radio tables

To wrap a source table in LaTeX, use the '`comment`' environment provided by '`comment.sty`'\[^169]. To activate it, put `\usepackage{comment}` in the document header. Orgtbl mode inserts a radio table skeleton\[^170] with the command `M-x orgtbl-insert-radio-table`, which prompts for a table name. For example, if '`salesfigures`' is the name, the template inserts:

```lisp
% BEGIN RECEIVE ORGTBL salesfigures
% END RECEIVE ORGTBL salesfigures
\begin{comment}
#+ORGTBL: SEND salesfigures orgtbl-to-latex
| | |
\end{comment}

```

The line '`#+ORGTBL: SEND`' tells Orgtbl mode to use the function `orgtbl-to-latex` to convert the table to LaTeX format, then insert the table at the target (receive) location named '`salesfigures`'. Now the table is ready for data entry. It can even use spreadsheet features\[^171]:

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

The LaTeX translator function `orgtbl-to-latex` is already part of Orgtbl mode and uses a '`tabular`' environment to typeset the table and marks horizontal lines with `\hline`. For additional parameters to control output, see [Translator functions](/docs/org/Translator-functions):

### '`:splice BOOLEAN`'

When {{{var(BOOLEAN}}} is non-`nil`, return only table body lines; i.e., not wrapped in '`tabular`' environment. Default is `nil`.

### '`:fmt FMT`'

Format string to warp each field. It should contain '`%s`' for the original field value. For example, to wrap each field value in dollar symbol, you could use '`:fmt "$%s$"`'. Format can also wrap a property list with column numbers and formats, for example '`:fmt (2 "$%s$" 4 "%s\\%%")`'. In place of a string, a function of one argument can be used; the function must return a formatted string.

### '`:efmt EFMT`'

Format numbers as exponentials. The spec should have '`%s`' twice for inserting mantissa and exponent, for example '`"%s\\times10^{%s}"`'. This may also be a property list with column numbers and formats, for example '`:efmt (2 "$%s\\times10^{%s}$" 4 "$%s\\cdot10^{%s}$")`'. After *EFMT* has been applied to a value, *FMT*---see above---is also applied. Functions with two arguments can be supplied instead of strings. By default, no special formatting is applied.

---

#### A.5.3 Translator functions

Orgtbl mode has built-in translator functions: `orgtbl-to-csv` (comma-separated values), `orgtbl-to-tsv` (TAB-separated values), `orgtbl-to-latex`, `orgtbl-to-html`, `orgtbl-to-texinfo`, `orgtbl-to-unicode` and `orgtbl-to-orgtbl`. They use the generic translator, `orgtbl-to-generic`, which delegates translations to various export backends.

Properties passed to the function through the '`ORGTBL SEND`' line take precedence over properties defined inside the function. For example, this overrides the default LaTeX line endings, `\\`, with `\\[2mm]`:

```lisp
#+ORGTBL: SEND test orgtbl-to-latex :lend " \\\\[2mm]"

```

For a new language translator, define a converter function. It can be a generic function, such as shown in this example. It marks a beginning and ending of a table with '`!BTBL!`' and '`!ETBL!`'; a beginning and ending of lines with '`!BL!`' and '`!EL!`'; and uses a TAB for a field separator:

```lisp
(defun orgtbl-to-language (table params)
  "Convert the orgtbl-mode TABLE to language."
  (orgtbl-to-generic
   table
   (org-combine-plists
    '(:tstart "!BTBL!" :tend "!ETBL!" :lstart "!BL!" :lend "!EL!" :sep "\t")
    params)))

```

The documentation for the `orgtbl-to-generic` function shows a complete list of parameters, each of which can be passed through to `orgtbl-to-latex`, `orgtbl-to-texinfo`, and any other function using that generic function.

For complicated translations the generic translator function could be replaced by a custom translator function. Such a custom function must take two arguments and return a single string containing the formatted table. The first argument is the table whose lines are a list of fields or the symbol `hline`. The second argument is the property list consisting of parameters specified in the '`#+ORGTBL: SEND`' line. Please share your translator functions by posting them to the Org users mailing list, at <mailto:emacs-orgmode@gnu.org>.

---

### A.6 Dynamic Blocks

Org supports *dynamic blocks* in Org documents. They are inserted with begin and end markers like any other code block, but the contents are updated automatically by a user function.

You can insert a dynamic block with `org-dynamic-block-insert-dblock`, which is bound to `C-c C-x x` by default. For example, `C-c C-x x c l o c k t a b l e RET` inserts a table that updates the work time (see [Clocking Work Time](/docs/org/Clocking-Work-Time)).

Dynamic blocks can have names and function parameters. The syntax is similar to source code block specifications:

```lisp
#+BEGIN: myblock :parameter1 value1 :parameter2 value2 ...
  ...
#+END:

```

These commands update dynamic blocks:

### `C-c C-x C-u` (`org-dblock-update`)

Update dynamic block at point.

### `C-u C-c C-x C-u`

Update all dynamic blocks in the current file.

Before updating a dynamic block, Org removes content between the '`BEGIN`' and '`END`' markers. Org then reads the parameters on the '`BEGIN`' line for passing to the writer function as a plist. The previous content of the dynamic block becomes erased from the buffer and appended to the plist under `:content`.

The syntax for naming a writer function with a dynamic block labeled '`myblock`' is: `org-dblock-write:myblock`.

The following is an example of a dynamic block and a block writer function that updates the time when the function was last run:

```lisp
#+BEGIN: block-update-time :format "on %m/%d/%Y at %H:%M"
  ...
#+END:

```

The dynamic block's writer function:

```lisp
(defun org-dblock-write:block-update-time (params)
  (let ((fmt (or (plist-get params :format) "%d. %m. %Y")))
    (insert "Last block update at: "
            (format-time-string fmt))))

```

To keep dynamic blocks up-to-date in an Org file, use the function, `org-update-all-dblocks` in hook, such as `before-save-hook`. The `org-update-all-dblocks` function does not run if the file is not in Org mode.

Dynamic blocks, like any other block, can be narrowed with `org-narrow-to-block`.

---

### A.7 Special Agenda Views

Org provides a special hook to further limit items in agenda views: `agenda`, `agenda*`\[^172], `todo`, `alltodo`, `tags`, `tags-todo`, `tags-tree`. Specify a custom function that tests inclusion of every matched item in the view. This function can also skip as much as is needed.

For a global condition applicable to agenda views, use the `org-agenda-skip-function-global` variable. Org uses a global condition with `org-agenda-skip-function` for custom searching.

This example defines a function for a custom view showing TODO items with '`waiting`' status. Manually this is a multi-step search process, but with a custom view, this can be automated as follows:

The custom function searches the subtree for the '`waiting`' tag and returns `nil` on match. Otherwise it gives the location from where the search continues.

```lisp
(defun my-skip-unless-waiting ()
  "Skip trees that are not waiting"
  (let ((subtree-end (save-excursion (org-end-of-subtree t))))
    (if (re-search-forward ":waiting:" subtree-end t)
        nil          ; tag found, do not skip
      subtree-end))) ; tag not found, continue after end of subtree

```

To use this custom function in a custom agenda command:

```lisp
(org-add-agenda-custom-command
 '("b" todo "PROJECT"
   ((org-agenda-skip-function 'my-skip-unless-waiting)
    (org-agenda-overriding-header "Projects waiting for something: "))))

```

Note that this also binds `org-agenda-overriding-header` to a more meaningful string suitable for the agenda view.

Search for entries with a limit set on levels for the custom search. This is a general approach to creating custom searches in Org. To include all levels, use '`LEVEL>0`'\[^173]. Then to selectively pick the matched entries, use `org-agenda-skip-function`, which also accepts Lisp forms, such as `org-agenda-skip-entry-if` and `org-agenda-skip-subtree-if`. For example:

### '`(org-agenda-skip-entry-if 'scheduled)`'

Skip current entry if it has been scheduled.

### '`(org-agenda-skip-entry-if 'notscheduled)`'

Skip current entry if it has not been scheduled.

### '`(org-agenda-skip-entry-if 'deadline)`'

Skip current entry if it has a deadline.

### '`(org-agenda-skip-entry-if 'scheduled 'deadline)`'

Skip current entry if it has a deadline, or if it is scheduled.

### '`(org-agenda-skip-entry-if 'todo '("TODO" "WAITING"))`'

Skip current entry if the TODO keyword is TODO or WAITING.

### '`(org-agenda-skip-entry-if 'todo 'done)`'

Skip current entry if the TODO keyword marks a DONE state.

### '`(org-agenda-skip-entry-if 'timestamp)`'

Skip current entry if it has any timestamp, may also be deadline or scheduled.

### '`(org-agenda-skip-entry-if 'regexp "regular expression")`'

Skip current entry if the regular expression matches in the entry.

### '`(org-agenda-skip-entry-if 'notregexp "regular expression")`'

Skip current entry unless the regular expression matches.

### '`(org-agenda-skip-subtree-if 'regexp "regular expression")`'

Same as above, but check and skip the entire subtree.

The following is an example of a search for '`waiting`' without the special function:

```lisp
(org-add-agenda-custom-command
 '("b" todo "PROJECT"
   ((org-agenda-skip-function '(org-agenda-skip-subtree-if
                                'regexp ":waiting:"))
    (org-agenda-overriding-header "Projects waiting for something: "))))

```

---

### A.8 Speeding Up Your Agendas

Some agenda commands slow down when the Org files grow in size or number. Here are tips to speed up:

- Reduce the number of Org agenda files to avoid slowdowns due to hard drive accesses.

- Reduce the number of DONE and archived headlines so agenda operations that skip over these can finish faster.

- Do not dim blocked tasks:
  ```lisp
  (setq org-agenda-dim-blocked-tasks nil)

  ```

- Stop preparing agenda buffers on startup:
  ```lisp
  (setq org-agenda-inhibit-startup t)

  ```

- Disable tag inheritance for agendas:
  ```lisp
  (setq org-agenda-use-tag-inheritance nil)

  ```

- Disable parsing of some properties:

  ```lisp
  (setq org-agenda-ignore-properties '(stats))

  ```

  This will disable parsing and updating statistic cookies.

These options can be applied to selected agenda views. For more details about generation of agenda views, see the docstrings for the relevant variables, and this [dedicated Worg page](https://orgmode.org/worg/agenda-optimization.html) for agenda optimization.

---

### A.9 Extracting Agenda Information

Org provides commands to access agendas through Emacs batch mode. Through this command-line interface, agendas are automated for further processing or printing.

`org-batch-agenda` creates an agenda view in ASCII and outputs to standard output. This command takes one string parameter. When string consists of a single character, Org uses it as a key to `org-agenda-custom-commands`. These are the same ones available through the agenda dispatcher (see [The Agenda Dispatcher](/docs/org/Agenda-Dispatcher)).

This example command line directly prints the TODO list to the printer:

```lisp
emacs -batch -l ~/.emacs -eval '(org-batch-agenda "t")' | lpr

```

When the string parameter length is two or more characters, Org matches it with tags/TODO strings. For example, this example command line prints items tagged with '`shop`', but excludes items tagged with '`NewYork`':

```lisp
emacs -batch -l ~/.emacs                                      \
      -eval '(org-batch-agenda "+shop-NewYork")' | lpr

```

An example showing on-the-fly parameter modifications:

```lisp
emacs -batch -l ~/.emacs                                      \
   -eval '(org-batch-agenda "a"                               \
           org-agenda-span (quote month)                      \
           org-agenda-include-diary nil                       \
           org-agenda-files (quote ("~/org/project.org")))'   \
   | lpr

```

which produces an agenda for the next 30 days from just the '`~/org/projects.org`' file.

For structured processing of agenda output, use `org-batch-agenda-csv` with the following fields:

### category

The category of the item

### head

The headline, without TODO keyword, TAGS and PRIORITY

### type

The type of the agenda entry, can be

|                     |                                     |
| ------------------- | ----------------------------------- |
| `todo`              | selected in TODO match              |
| `tagsmatch`         | selected in tags match              |
| `diary`             | imported from diary                 |
| `deadline`          | a deadline                          |
| `scheduled`         | scheduled                           |
| `timestamp`         | appointment, selected by timestamp  |
| `closed`            | entry was closed on date            |
| `upcoming-deadline` | warning about nearing deadline      |
| `past-scheduled`    | forwarded scheduled item            |
| `block`             | entry has date block including date |

### todo

The TODO keyword, if any

### tags

All tags including inherited ones, separated by colons

### date

The relevant date, like '`2007-2-14`'

### time

The time, like '`15:00-16:50`'

### extra

String with extra planning info

### priority-l

The priority letter if any was given

### priority-n

The computed numerical priority

If the selection of the agenda item was based on a timestamp, including those items with '`DEADLINE`' and '`SCHEDULED`' keywords, then Org includes date and time in the output.

If the selection of the agenda item was based on a timestamp (or deadline/scheduled), then Org includes date and time in the output.

Here is an example of a post-processing script in Perl. It takes the CSV output from Emacs and prints with a checkbox:

```lisp
#!/usr/bin/perl

# define the Emacs command to run
$cmd = "emacs -batch -l ~/.emacs -eval '(org-batch-agenda-csv \"t\")'";

# run it and capture the output
$agenda = qx{$cmd 2>/dev/null};

# loop over all lines
foreach $line (split(/\n/,$agenda)) {
    # get the individual values
    ($category,$head,$type,$todo,$tags,$date,$time,$extra,
     $priority_l,$priority_n) = split(/,/,$line);
    # process and print
    print "[ ] $head\n";
}

```

---

### A.10 Using the Property API

Here is a description of the functions that can be used to work with properties.

### Function: **org-entry-properties** *\&optional pom which*

Get all properties of the entry at point-or-marker *POM*. This includes the TODO keyword, the tags, time strings for deadline, scheduled, and clocking, and any additional properties defined in the entry. The return value is an alist. Keys may occur multiple times if the property key was used several times. *POM* may also be `nil`, in which case the current entry is used. If *WHICH* is `nil` or `all`, get all properties. If *WHICH* is `special` or `standard`, only get that subclass.

### Function: **org-entry-get** *pom property \&optional inherit*

Get value of *PROPERTY* for entry at point-or-marker *POM*. By default, this only looks at properties defined locally in the entry. If *INHERIT* is non-`nil` and the entry does not have the property, then also check higher levels of the hierarchy. If *INHERIT* is the symbol `selective`, use inheritance if and only if the setting of `org-use-property-inheritance` selects *PROPERTY* for inheritance.

### Function: **org-entry-delete** *pom property*

Delete the property *PROPERTY* from entry at point-or-marker *POM*.

### Function: **org-entry-put** *pom property value*

Set *PROPERTY* to *VALUES* for entry at point-or-marker POM.

### Function: **org-buffer-property-keys** *\&optional include-specials*

Get all property keys in the current buffer.

### Function: **org-insert-property-drawer**

Insert a property drawer for the current entry.

### Function: **org-entry-put-multivalued-property** *pom property \&rest values*

Set *PROPERTY* at point-or-marker *POM* to *VALUES*. *VALUES* should be a list of strings. They are concatenated, with spaces as separators.

### Function: **org-entry-get-multivalued-property** *pom property*

Treat the value of the property *PROPERTY* as a whitespace-separated list of values and return the values as a list of strings.

### Function: **org-entry-add-to-multivalued-property** *pom property value*

Treat the value of the property *PROPERTY* as a whitespace-separated list of values and make sure that *VALUE* is in this list.

### Function: **org-entry-remove-from-multivalued-property** *pom property value*

Treat the value of the property *PROPERTY* as a whitespace-separated list of values and make sure that *VALUE* is *not* in this list.

### Function: **org-entry-member-in-multivalued-property** *pom property value*

Treat the value of the property *PROPERTY* as a whitespace-separated list of values and check if *VALUE* is in this list.

### User Option: **org-property-allowed-value-functions**

Hook for functions supplying allowed values for a specific property. The functions must take a single argument, the name of the property, and return a flat list of allowed values. If '`:ETC`' is one of the values, use the values as completion help, but allow also other values to be entered. The functions must return `nil` if they are not responsible for this property.

---

### A.11 Using the Mapping API

Org has sophisticated mapping capabilities to find all entries satisfying certain criteria. Internally, this functionality is used to produce agenda views, but there is also an API that can be used to execute arbitrary functions for each or selected entries. The main entry point for this API is:

### Function: **org-map-entries** *func \&optional match scope \&rest skip*

Call *FUNC* at each headline selected by *MATCH* in *SCOPE*.

*FUNC* is a function or a Lisp form. With point positioned at the beginning of the headline, call the function without arguments. Org returns a list of return values of calls to the function.

To avoid preserving point, Org wraps the call to *FUNC* in `save-excursion` form. After evaluation, Org moves point to the end of the line that was just processed. Search continues from that point forward. This may not always work as expected under some conditions, such as if the current subtree was removed by a previous archiving operation. In such rare circumstances, Org skips the next entry entirely when it should not. To stop Org from such skips, make *FUNC* set the variable `org-map-continue-from` to a specific buffer position.

*MATCH* is a tags/property/TODO match. Org iterates only matched headlines. Org iterates over all headlines when *MATCH* is `nil` or `t`.

*SCOPE* determines the scope of this command. It can be any of:

### `nil`

The current buffer, respecting the restriction, if any.

### `tree`

The subtree started with the entry at point.

### `region`

The entries within the active region, if any.

### `file`

The current buffer, without restriction.

### `file-with-archives`

The current buffer, and any archives associated with it.

### `agenda`

All agenda files.

### `agenda-with-archives`

All agenda files with any archive files associated with them.

### list of filenames

If this is a list, all files in the list are scanned.

The remaining arguments are treated as settings for the scanner's skipping facilities. Valid arguments are:

### `archive`

Skip trees with the '`ARCHIVE`' tag.

### `comment`

Skip trees with the COMMENT keyword.

### function or Lisp form

Used as value for `org-agenda-skip-function`, so whenever the function returns `t`, *FUNC* is called for that entry and search continues from the point where the function leaves it.

The mapping routine can call any arbitrary function, even functions that change meta data or query the property API (see [Using the Property API](/docs/org/Using-the-Property-API)). Here are some handy functions:

### Function: **org-todo** *\&optional arg*

Change the TODO state of the entry. See the docstring of the functions for the many possible values for the argument *ARG*.

### Function: **org-priority** *\&optional action*

Change the priority of the entry. See the docstring of this function for the possible values for *ACTION*.

### Function: **org-toggle-tag** *tag \&optional onoff*

Toggle the tag *TAG* in the current entry. Setting *ONOFF* to either `on` or `off` does not toggle tag, but ensure that it is either on or off.

### Function: **org-promote**

Promote the current entry.

### Function: **org-demote**

Demote the current entry.

This example turns all entries tagged with '`TOMORROW`' into TODO entries with keyword '`UPCOMING`'. Org ignores entries in comment trees and archive trees.

```lisp
(org-map-entries '(org-todo "UPCOMING")
                 "+TOMORROW" 'file 'archive 'comment)

```

The following example counts the number of entries with TODO keyword '`WAITING`', in all agenda files.

```lisp
(length (org-map-entries t "/+WAITING" 'agenda))

```

---


[^1]: <https://www.ctan.org/pkg/comment>

[^2]: By default this works only for LaTeX, HTML, and Texinfo. Configure the variable `orgtbl-radio-table-templates` to install templates for other modes.

[^3]: If the '`TBLFM`' keyword contains an odd number of dollar characters, this may cause problems with Font Lock in LaTeX mode. As shown in the example you can fix this by adding an extra line inside the '`comment`' environment that is used to balance the dollar expressions. If you are using AUCTeX with the font-latex library, a much better solution is to add the '`comment`' environment to the variable `LaTeX-verbatim-environments`.

[^4]: The `agenda*` view is the same as `agenda` except that it only considers *appointments*, i.e., scheduled and deadline items that have a time specification '`[h]h:mm`' in their timestamps.

[^5]: Note that, for `org-odd-levels-only`, a level number corresponds to order in the hierarchy, not to the number of stars.
