---
slug: Customizing
---

Both Git and Emacs are highly customizable. Magit is both a Git porcelain as well as an Emacs package, so it makes sense to customize it using both Git variables as well as Emacs options. However this flexibility doesn’t come without problems, including but not limited to the following.

*   Some Git variables automatically have an effect in Magit without requiring any explicit support. Sometimes that is desirable - in other cases, it breaks Magit.

    When a certain Git setting breaks Magit but you want to keep using that setting on the command line, then that can be accomplished by overriding the value for Magit only by appending something like `("-c" "some.variable=compatible-value")` to `magit-git-global-arguments`.

*   Certain settings like `fetch.prune=true` are respected by Magit commands (because they simply call the respective Git command) but their value is not reflected in the respective transient buffers. In this case the `--prune` argument in `magit-fetch` might be active or inactive, but that doesn’t keep the Git variable from being honored by the suffix commands anyway. So pruning might happen despite the `--prune` arguments being displayed in a way that seems to indicate that no pruning will happen.

I intend to address these and similar issues in a future release.

|                                                                     |    |    |
| :------------------------------------------------------------------ | -- | :- |
| • [Per-Repository Configuration](Per_002dRepository-Configuration): |    |    |
| • [Essential Settings](Essential-Settings):                         |    |    |
