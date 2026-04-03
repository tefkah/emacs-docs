---
slug: Publishing
---

Org includes a publishing management system that allows you to
configure automatic HTML conversion of *projects* composed of
interlinked Org files.  You can also configure Org to automatically
upload your exported HTML pages and related attachments, such as
images and source code files, to a web server.


You can also use Org to convert files into PDF, or even combine HTML
and PDF conversion so that files are available in both formats on the
server.


For detailed instructions about setup, see the [manual](https://www.gnu.org/software/emacs/manual/html_mono/org.html#Top). Here is an
example:


```lisp
(setq org-publish-project-alist
      '(("org"
         :base-directory "~/org/"
         :publishing-function org-html-publish-to-html
         :publishing-directory "~/public_html"
         :section-numbers nil
         :with-toc nil
         :html-head "<link rel=\"stylesheet\"
                    href=\"../other/mystyle.css\"
                    type=\"text/css\"/>")))
```


### `C-c C-e P x` (`org-publish`)

Prompt for a specific project and publish all files that belong to
it.

### `C-c C-e P p` (`org-publish-current-project`)

Publish the project containing the current file.

### `C-c C-e P f` (`org-publish-current-file`)

Publish only the current file.

### `C-c C-e P a` (`org-publish-all`)

Publish every project.


Org uses timestamps to track when a file has changed.  The above
functions normally only publish changed files.  You can override this
and force publishing of all files by giving a prefix argument to any
of the commands above.
