---
slug: Speeding-Up-Your-Agendas
---

Some agenda commands slow down when the Org files grow in size or number. Here are tips to speed up:

*   Reduce the number of Org agenda files to avoid slowdowns due to hard drive accesses.

*   Reduce the number of DONE and archived headlines so agenda operations that skip over these can finish faster.

*   Do not dim blocked tasks:

    ```lisp
    (setq org-agenda-dim-blocked-tasks nil)
    ```

*   Stop preparing agenda buffers on startup:

    ```lisp
    (setq org-agenda-inhibit-startup t)
    ```

*   Disable tag inheritance for agendas:

    ```lisp
    (setq org-agenda-use-tag-inheritance nil)
    ```

*   Disable parsing of some properties:

    ```lisp
    (setq org-agenda-ignore-properties '(stats))
    ```

    This will disable parsing and updating statistic cookies.

These options can be applied to selected agenda views. For more details about generation of agenda views, see the docstrings for the relevant variables, and this [dedicated Worg page](https://orgmode.org/worg/agenda-optimization.html) for agenda optimization.
