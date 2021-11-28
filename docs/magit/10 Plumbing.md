---
slug: Plumbing
---

The following sections describe how to use several of Magit’s core abstractions to extend Magit itself or implement a separate extension.

A few of the low-level features used by Magit have been factored out into separate libraries/packages, so that they can be used by other packages, without having to depend on Magit. See [(with-editor)Top](https://magit.vc/manual/with-editor.html#Top) for information about `with-editor`. `transient` doesn’t have a manual yet.

If you are trying to find an unused key that you can bind to a command provided by your own Magit extension, then checkout [https://github.com/magit/magit/wiki/Plugin-Dispatch-Key-Registry](https://github.com/magit/magit/wiki/Plugin-Dispatch-Key-Registry).

|                                                         |    |    |
| :------------------------------------------------------ | -- | :- |
| • [Calling Git](/docs/magit/Calling-Git):               |    |    |
| • [Section Plumbing](/docs/magit/Section-Plumbing):     |    |    |
| • [Refreshing Buffers](/docs/magit/Refreshing-Buffers): |    |    |
| • [Conventions](/docs/magit/Conventions):               |    |    |
