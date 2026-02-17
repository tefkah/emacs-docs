---
slug: Adding-Hyperlink-Types
---

Org has many built-in hyperlink types (see [Hyperlinks](/docs/org/Hyperlinks)), and an interface for adding new link types. The following example shows the process of adding Org links to Unix man pages, which look like this

```lisp
[[man:printf][The printf manual]]
```

The following ‘`ol-man.el`’ file implements it

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

A review of ‘`ol-man.el`’:

1.  First, ‘`(require 'ol)`’ ensures that ‘`ol.el`’ is loaded.

2.  Then `org-link-set-parameters` defines a new link type with ‘`man`’ prefix and associates functions for following, exporting and storing such links. See the variable `org-link-parameters` for a complete list of possible associations.

3.  The rest of the file implements necessary variables and functions.

    For example, `org-man-store-link` is responsible for storing a link when `org-store-link` (see [Handling Links](/docs/org/Handling-Links)) is called from a buffer displaying a man page. It is passed an argument `interactive?` which this function does not use, but other store functions use to behave differently when a link is stored interactively by the user. It first checks if the major mode is appropriate. If check fails, the function returns `nil`, which means it isn’t responsible for creating a link to the current buffer. Otherwise the function makes a link string by combining the ‘`man:`’ prefix with the man topic. It also provides a default description. The function `org-insert-link` can insert it back into an Org buffer later on.
