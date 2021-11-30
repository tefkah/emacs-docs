---
slug: Can-Magit-be-used-as-ediff_002dversion_002dcontrol_002dpackage_003f
---

No, it cannot. For that to work the functions `ediff-magit-internal` and `ediff-magit-merge-internal` would have to be implemented, and they are not. These two functions are only used by the three commands `ediff-revision`, `ediff-merge-revisions-with-ancestor`, and `ediff-merge-revisions`.

These commands only delegate the task of populating buffers with certain revisions to the "internal" functions. The equally important task of determining which revisions are to be compared/merged is not delegated. Instead this is done without any support whatsoever from the version control package/system - meaning that the user has to enter the revisions explicitly. Instead of implementing `ediff-magit-internal` we provide `magit-ediff-compare`, which handles both tasks like it is 2005.

The other commands `ediff-merge-revisions` and `ediff-merge-revisions-with-ancestor` are normally not what you want when using a modern version control system like Git. Instead of letting the user resolve only those conflicts which Git could not resolve on its own, they throw away all work done by Git and then expect the user to manually merge all conflicts, including those that had already been resolved. That made sense back in the days when version control systems couldn’t merge (or so I have been told), but not anymore. Once in a blue moon you might actually want to see all conflicts, in which case you **can** use these commands, which then use `ediff-vc-merge-internal`. So we don’t actually have to implement `ediff-magit-merge-internal`. Instead we provide the more useful command `magit-ediff-resolve` which only shows yet-to-be resolved conflicts.
