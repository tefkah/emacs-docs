---
slug: Antinews
---

For those users who live backwards in time, here is information about downgrading to Emacs version 26.3. We hope you will enjoy the greater simplicity that results from the absence of many Emacs 27.2<!-- /@w --> features.

*   Emacs no longer uses GMP, the GNU Multiple Precision library, and doesn’t support Lisp integers greater than `most-positive-fixnum` or smaller than `most-negative-fixnum`. We now have only one kind of a Lisp integer. This simplifies many Lisp programs that use integers, and makes integer calculations always fast. If you want larger values, use Lisp floats, as Emacs has done since day one.

*   Emacs no longer supports HarfBuzz as the engine for shaping complex text. As you move back in time, we will gradually shed off all traces of support for complex text shaping, and this is one step in that direction.

*   We have removed support for building with the Jansson library, and consequently the native support for JSON parsing is gone. The importance of JSON decreases as we go back in time, so for now using the Lisp code for handling it should be good enough; in one of the past Emacs versions, we intend to remove even that, as useless bloat.

    The library for supporting JSONRPC applications was removed for the same reason.

*   The “portable dumper" feature is gone. We are once again using the field-proven “unexec" way of dumping Emacs. With that, the hope for being able to re-dump your customized Emacs session is also gone: why would anyone want to record their random customization experiments on disk, and restore them the next time they start Emacs? And true Emacsers don’t restart their Emacs sessions anyway.

*   We dropped the support for XDG-style configuration directories and the `XDG_CONFIG_HOME` environment variable. There’s once again only one place where Emacs looks for its init files: the `~/.emacs.d` directory, with the `~/.emacs` file as fallback. We think this will go a long way towards preventing confusion among users who for some reason have `XDG_CONFIG_HOME` set, thus risking to have their init files randomly spread between two places. In one of the past Emacs versions, we intend to further simplify this, removing the `~/.emacs.d` place and leaving only `~/.emacs`; stay tuned.

    For similar reasons, we’ve removed the “early init" file. You can now again use all the tricks you want to initialize variables like `package-user-dir` and `package-load-list` just in time for the packages to load.

    `emacsclient` no longer supports XDG-style directory trees, either.

*   TLS connections are back to their lenient security settings. We decided that too tight security settings are an annoyance for users, and make little sense considering the world-wide tendency to have fewer and fewer network security problems as we move back in time (those issues will be completely gone when networks disappear in some distant past).

*   The `server-after-make-frame-hook` hook was deleted, in preparation for removing the entire daemon business in some past Emacs version. You will be glad to learn that setting up the GUI customizations of your sessions is now once again as easy as it ever was, with just the `after-make-frame-functions` to use.

*   The `flex` completion style was removed. We feel that it unnecessarily complicates the Emacs user experience, and therefore will continue to remove other tricky completion styles, until in some past Emacs version we get to a single original style Emacs pioneered decades ago. Long live simplicity; down with complications!

*   The optional display of the fill-column indicator is no longer supported. With the display sizes becoming smaller and smaller as you move back in time, we feel that the display itself will always show you where to fill or wrap your text, and do this much more easily and reliably than any such display indicator.

*   We removed the features that made visiting large files easier. Thus, Emacs will no longer suggest visiting a large file literally, nor offer the `so-long` mode to deal with overly-long lines. We decided that this simplification is worthwhile, given that the general tendency of having very large files is becoming a rarity as we move back in time.

*   We have removed the feature that displayed echo-area messages without hiding content of the active minibuffer. This should prevent user confusion from having two unrelated pieces of text staring at them, with no clear separation between them. Users with good memories (and Emacs users are all expected to be of that kind) will have no trouble keeping the minibuffer text in their minds, and typing the responses without actually seeing the prompts.

*   Horizontal scrolling using the mouse or touchpad has been removed. In the past, wide monitors will become less popular, so horizontal scrolling will no longer be needed. Removal of the mouse support for horizontal scrolling is the first step towards its complete removal in prior Emacs versions.

*   The `main-thread` variable and `list-threads` were removed, and `thread-join` no longer returns the result of the finished thread. We intend to remove the support for Lisp threads in some past Emacs version, so we continue removing the associated complexities and features as we go back in time.

*   Tab bar and window tab-lines were removed. This should make the Emacs display simpler and less cluttered, and help those users who disable menu bar and tool bar in their GUI sessions. The fashion to provide tabs in every GUI application out there is gaining less and less popularity as we move back in time, and will completely disappear at some past point; removing the tabs from Emacs is the step in that direction.

*   Displaying line numbers for a buffer is only possibly using add-on features, such as `linum-mode`, which can only display the numbers in the display margins. Line-number display using these features is also slow, as we firmly believe such a feature is un-Emacsy and should not have been included in Emacs to begin with. Consequently, `display-line-numbers-mode` was removed.

*   On our permanent quest for simplifying Emacs, we’ve removed the support for changing the font size by turning the mouse wheel.

*   Several commands, deemed to be unnecessary complications, have been removed. Examples include `make-empty-file`, `font-lock-refontify`, `xref-find-definitions-at-mouse`, `make-frame-on-monitor`, and `diff-buffers`.

*   To keep up with decreasing computer memory capacity and disk space, many other functions and files have been eliminated in Emacs 26.3.
