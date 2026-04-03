---
slug: Hyperlinks
---

Like HTML, Org provides links inside a file, external links to other
files, Usenet articles, emails, and much more.


Org recognizes plain URIs, possibly wrapped within angle brackets, and
activate them as clickable links.  The general link format, however,
looks like this:


```
[[LINK][DESCRIPTION]]
```


or alternatively


```
[[LINK]]
```


Once a link in the buffer is complete, with all brackets present, Org
changes the display so that '`DESCRIPTION`' is displayed instead of
'`[[LINK][DESCRIPTION]]`' and '`LINK`' is displayed instead of '`[[LINK]]`'.
To edit the invisible *LINK* part, use `C-c C-l`
with the point on the link.


### Internal links


If the link does not look like a URL, it is considered to be internal
in the current file.  The most important case is a link like
'`[[#my-custom-id]]`' which links to the entry with the '`CUSTOM_ID`' property
'`my-custom-id`'.


Links such as '`[[My Target]]`' or '`[[My Target][Find my target]]`' lead
to a text search in the current file for the corresponding target,
which looks like '`<<My Target>>`'.


### External Links


Org supports links to files, websites, Usenet and email messages, BBDB
database entries and links to both IRC conversations and their logs.
External links are URL-like locators.  They start with a short
identifying string followed by a colon.  There can be no space after
the colon.  Here are some examples:


| '`http://www.astro.uva.nl/=dominik`' | on the web |
| --- | --- |
| '`file:/home/dominik/images/jupiter.jpg`' | file, absolute path |
| '`/home/dominik/images/jupiter.jpg`' | same as above |
| '`file:papers/last.pdf`' | file, relative path |
| '`./papers/last.pdf`' | same as above |
| '`file:projects.org`' | another Org file |
| '`docview:papers/last.pdf::NNN`' | open in DocView mode at page *NNN* |
| '`id:B7423F4D-2E8A-471B-8810-C40F074717E9`' | link to heading by ID |
| '`news:comp.emacs`' | Usenet link |
| '`mailto:adent@galaxy.net`' | mail link |
| '`mhe:folder#id`' | MH-E message link |
| '`rmail:folder#id`' | Rmail message link |
| '`gnus:group#id`' | Gnus article link |
| '`bbdb:R.*Stallman`' | BBDB link (with regexp) |
| '`irc:/irc.com/#emacs/bob`' | IRC link |
| '`info:org#Hyperlinks`' | Info node link |


File links can contain additional information to make Emacs jump to
a particular location in the file when following a link. This can be
a line number or a search option after a double colon. Here are a few
examples, together with an explanation:


| '`file:~/code/main.c::255`' | Find line 255 |
| --- | --- |
| '`file:~/xx.org::My Target`' | Find '`<<My Target>>`' |
| '`[[file:~/xx.org::#my-custom-id]]`' | Find entry with a custom ID |


### Handling Links


Org provides methods to create a link in the correct syntax, to insert
it into an Org file, and to follow the link.


The main function is `org-store-link`, called with `M-x org-store-link`.  Because of its importance, we suggest to bind it
to a widely available key (see [Activation](/docs/emacs/Activation)).  It stores a link to the
current location.  The link is stored for later insertion into an Org
buffer---see below.


From an Org buffer, the following commands create, navigate or, more
generally, act on links.


### `C-c C-l` (`org-insert-link`)

Insert a link.  This prompts for a link to be inserted into the
buffer.  You can just type a link, or use history keys `UP`
and `DOWN` to access stored links.  You will be prompted
for the description part of the link.


When called with a `C-u` prefix argument, file name
completion is used to link to a file.

### `C-c C-l` (with point on existing link) (`org-insert-link`)

When point is on an existing link, `C-c C-l` allows you to
edit the link and description parts of the link.

### `C-c C-o` (`open-link-at-point`)

Open link at point.

### `C-c &` (`org-mark-ring-goto`)

Jump back to a recorded position.  A position is recorded by the
commands following internal links, and by `C-c %`.  Using
this command several times in direct succession moves through a ring
of previously recorded positions.
