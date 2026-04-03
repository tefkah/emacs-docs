---
slug: Antinews
---

For those users who live backwards in time, here is information about downgrading to Emacs version 29.4. We hope you will enjoy the greater simplicity that results from the absence of many Emacs 30.2<!-- /@w --> features.

- Emacs can no longer be built for Android mobile devices. We have removed the Android support because it was deemed unnecessary, what with the screens of the mobile devices becoming smaller and smaller as you move back in time. We expect Android users to enjoy the much simpler text editors available on their devices. As a nice bonus, removing Android support allowed us to get rid of gobs of related files, thus making the release tarballs much leaner.

- We have deleted much of the enhanced support for touchscreen devices, for the same reason we dropped Android: there will be no need for that as you move back in time.

- We also dropped support for sophisticated input methods that include text conversions, again because those are mostly needed on mobile and hand-held devices, which we gradually remove from Emacs in each past version.

- Like its newer releases, Emacs 29 can still be built with support of native compilation of Lisp programs. However, in preparation for removal of this feature in some previous version, we've made the native compiler support off by default; you will now have to request it explicitly at configure time. This makes the default Emacs build process much faster.

- JSON interfaces slowly move into oblivion as past years come closer, so we have removed our internal implementation of JSON; you will now need to build Emacs with the libjansson library, if you need JSON. Eventually, we plan on removing JSON support from Emacs altogether; this move will make the removal much simpler.

- Tree-sitter based modes are now completely independent of their non-Tree-Sitter counterparts. We decided that keeping the settings separate and independent goes a long way toward simplicity, which is one of our main motivations for removing stuff from Emacs.

- Various Help commands no longer turn on Outline minor mode. With less material to display in the \*Help\* buffers, due to removing of excess documentation from Emacs, we think using outlining is an unnecessary complication, as scrolling through plain text is so much simpler.

  For the same reasons, Emacs no longer shows Unicode names of characters in \*Help\* buffers shown by `describe-bindings`.

- To make Emacs configuration simpler and easier to control, the tool bar can now be displayed only in its natural and logical position: on the top of the frame; no more of that `tool-bar-position` nonsense with tool bars on the bottom. For the same reasons `modifier-bar-mode` is now gone.

- The command `recover-file` no longer lets you display the diffs between a file and its auto-save file. You either want to recover a file or you don't; confusing users with a third alternative when they are anxious already by the possibility of losing precious edits is considered a bad idea, certainly so as we move further towards smaller, simpler Emacs.

- Several languages and input methods, which will fall in disuse as you move back in time, were removed. This includes Urdu, Pashto, and Sindhi languages, and the input method for the Colemak keyboard layout. Many `C-x 8` key sequences, including those which insert various quotation characters and guillemets, were deleted for the same reason.

- The support for `lzip`-compressed Info manuals was removed from the Info mode. We anticipate that `lzip` will disappear from the face of the Earth in the near past, and are preparing Emacs for that in advance.

- Support for LLDB in Grand Unified Debugger mode was dropped. We decided that given LLDB's diminishing popularity, its support is just code bloat.

- Several fancy Project and VC commands were deleted, as part of our consistent effort of making Emacs simpler to use.

- The user option `shell-command-guess-functions` and the context menu '`Open With`' in Dired are gone. We trust Emacs users to always know themselves which shell command is the appropriate one for a given file, so no guessing by Dired is needed, or welcome. The `dired-do-open` command was deleted for the same reasons.

- We went back to the original lean-and-mean interface for specifying registers for register-related commands. The fancy preview and the options to go with it were deemed gratuitous and were removed.

- Eshell is now much smaller and easier to use, due to dropping quite a few of the new commands and fancy new options.

- The command `customize-dirlocals` was removed. Editing the `.dir-locals.el` files as plain text is so much simpler, and quite enough.

- We have removed several packages that we consider unnecessary for the past of Emacs. This includes EditorConfig support, '`which-key`', PEG, and Window-Tool-Bar.

- The `etags-regen-mode` was deleted. Regeneration of `TAGS` tables manually is all Emacs users will need in the past.

- To keep up with decreasing computer memory capacity and disk space, many other functions and files have been eliminated in Emacs 29.4.
