---
slug: A-branch-and-tag-sharing-the-same-name-breaks-SOMETHING
---

Or more generally, ambiguous refnames break SOMETHING.

Magit assumes that refs are named non-ambiguously across the "refs/heads/", "refs/tags/", and "refs/remotes/" namespaces (i.e., all the names remain unique when those prefixes are stripped). We consider ambiguous refnames unsupported and recommend that you use a non-ambiguous naming scheme. However, if you do work with a repository that has ambiguous refnames, please report any issues you encounter so that we can investigate whether there is a simple fix.
