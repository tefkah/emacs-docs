---
slug: Extracting-Agenda-Information
---

Org provides commands to access agendas through Emacs batch mode. Through this command-line interface, agendas are automated for further processing or printing.

`org-batch-agenda` creates an agenda view in ASCII and outputs to standard output. This command takes one string parameter. When string consists of a single character, Org uses it as a key to `org-agenda-custom-commands`. These are the same ones available through the agenda dispatcher (see [The Agenda Dispatcher](/docs/org/Agenda-Dispatcher)).

This example command line directly prints the TODO list to the printer:

```lisp
emacs -batch -l ~/.emacs -eval '(org-batch-agenda "t")' | lpr
```

When the string parameter length is two or more characters, Org matches it with tags/TODO strings. For example, this example command line prints items tagged with ‘`shop`’, but excludes items tagged with ‘`NewYork`’:

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

which produces an agenda for the next 30 days from just the ‘`~/org/projects.org`’ file.

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

The relevant date, like ‘`2007-2-14`’

### time

The time, like ‘`15:00-16:50`’

### extra

String with extra planning info

### priority-l

The priority letter if any was given

### priority-n

The computed numerical priority

If the selection of the agenda item was based on a timestamp, including those items with ‘`DEADLINE`’ and ‘`SCHEDULED`’ keywords, then Org includes date and time in the output.

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
