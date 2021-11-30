---
slug: Top
---

Magit is an interface to the version control system Git, implemented as an Emacs package. Magit aspires to be a complete Git porcelain. While we cannot (yet) claim that Magit wraps and improves upon each and every Git command, it is complete enough to allow even experienced Git users to perform almost all of their daily version control tasks directly from within Emacs. While many fine Git clients exist, only Magit and Git itself deserve to be called porcelains.

This manual is for Magit version 3.3.0.

> Copyright (C) 2015-2021 Jonas Bernoulli ﹤jonas@bernoul.li﹥
>
> You can redistribute this document and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
>
> This document is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

|                                                         |     |     |
| :------------------------------------------------------ | --- | :-- |
| • [Introduction](/docs/magit/Introduction):             |     |     |
| • [Installation](/docs/magit/Installation):             |     |     |
| • [Getting Started](/docs/magit/Getting-Started):       |     |     |
| • [Interface Concepts](/docs/magit/Interface-Concepts): |     |     |
| • [Inspecting](/docs/magit/Inspecting):                 |     |     |
| • [Manipulating](/docs/magit/Manipulating):             |     |     |
| • [Transferring](/docs/magit/Transferring):             |     |     |
| • [Miscellaneous](/docs/magit/Miscellaneous):           |     |     |
| • [Customizing](/docs/magit/Customizing):               |     |     |
| • [Plumbing](/docs/magit/Plumbing):                     |     |     |
| • [FAQ](/docs/magit/FAQ):                               |     |     |
| • [Debugging Tools](/docs/magit/Debugging-Tools):       |     |     |
| • [Keystroke Index](/docs/magit/Keystroke-Index):       |     |     |
| • [Command Index](/docs/magit/Command-Index):           |     |     |
| • [Function Index](/docs/magit/Function-Index):         |     |     |
| • [Variable Index](/docs/magit/Variable-Index):         |     |     |

|

                                                                                                                                                               |    |    |

|
— The Detailed Node Listing — Installation  
 | | |
| • [Installing from Melpa](/docs/magit/Installing-from-Melpa): |    | |
| • [Installing from the Git Repository](/docs/magit/Installing-from-the-Git-Repository): |    | |
| • [Post-Installation Tasks](/docs/magit/Post_002dInstallation-Tasks): |    | |
|
Interface Concepts  
 | | |
| • [Modes and Buffers](/docs/magit/Modes-and-Buffers): |    | |
| • [Sections](/docs/magit/Sections): |    | |
| • [Transient Commands](/docs/magit/Transient-Commands): |    | |
| • [Transient Arguments and Buffer Variables](/docs/magit/Transient-Arguments-and-Buffer-Variables): |    | |
| • [Completion, Confirmation and the Selection](/docs/magit/Completion-Confirmation-and-the-Selection): |    | |
| • [Running Git](/docs/magit/Running-Git): |    | |
|
Modes and Buffers  
 | | |
| • [Switching Buffers](/docs/magit/Switching-Buffers): |    | |
| • [Naming Buffers](/docs/magit/Naming-Buffers): |    | |
| • [Quitting Windows](/docs/magit/Quitting-Windows): |    | |
| • [Automatic Refreshing of Magit Buffers](/docs/magit/Automatic-Refreshing-of-Magit-Buffers): |    | |
| • [Automatic Saving of File-Visiting Buffers](/docs/magit/Automatic-Saving-of-File_002dVisiting-Buffers): |    | |
| • [Automatic Reverting of File-Visiting Buffers](/docs/magit/Automatic-Reverting-of-File_002dVisiting-Buffers): |    | |
|
Sections  
 | | |
| • [Section Movement](/docs/magit/Section-Movement): |    | |
| • [Section Visibility](/docs/magit/Section-Visibility): |    | |
| • [Section Hooks](/docs/magit/Section-Hooks): |    | |
| • [Section Types and Values](/docs/magit/Section-Types-and-Values): |    | |
| • [Section Options](/docs/magit/Section-Options): |    | |
|
Completion, Confirmation and the Selection  
 | | |
| • [Action Confirmation](/docs/magit/Action-Confirmation): |    | |
| • [Completion and Confirmation](/docs/magit/Completion-and-Confirmation): |    | |
| • [The Selection](/docs/magit/The-Selection): |    | |
| • [The hunk-internal region](/docs/magit/The-hunk_002dinternal-region): |    | |
| • [Support for Completion Frameworks](/docs/magit/Support-for-Completion-Frameworks): |    | |
| • [Additional Completion Options](/docs/magit/Additional-Completion-Options): |    | |
|
Running Git  
 | | |
| • [Viewing Git Output](/docs/magit/Viewing-Git-Output): |    | |
| • [Git Process Status](/docs/magit/Git-Process-Status): |    | |
| • [Running Git Manually](/docs/magit/Running-Git-Manually): |    | |
| • [Git Executable](/docs/magit/Git-Executable): |    | |
| • [Global Git Arguments](/docs/magit/Global-Git-Arguments): |    | |
|
Inspecting  
 | | |
| • [Status Buffer](/docs/magit/Status-Buffer): |    | |
| • [Repository List](/docs/magit/Repository-List): |    | |
| • [Logging](/docs/magit/Logging): |    | |
| • [Diffing](/docs/magit/Diffing): |    | |
| • [Ediffing](/docs/magit/Ediffing): |    | |
| • [References Buffer](/docs/magit/References-Buffer): |    | |
| • [Bisecting](/docs/magit/Bisecting): |    | |
| • [Visiting Files and Blobs](/docs/magit/Visiting-Files-and-Blobs): |    | |
| • [Blaming](/docs/magit/Blaming): |    | |
|
Status Buffer  
 | | |
| • [Status Sections](/docs/magit/Status-Sections): |    | |
| • [Status Header Sections](/docs/magit/Status-Header-Sections): |    | |
| • [Status Module Sections](/docs/magit/Status-Module-Sections): |    | |
| • [Status Options](/docs/magit/Status-Options): |    | |
|
Logging  
 | | |
| • [Refreshing Logs](/docs/magit/Refreshing-Logs): |    | |
| • [Log Buffer](/docs/magit/Log-Buffer): |    | |
| • [Log Margin](/docs/magit/Log-Margin): |    | |
| • [Select from Log](/docs/magit/Select-from-Log): |    | |
| • [Reflog](/docs/magit/Reflog): |    | |
| • [Cherries](/docs/magit/Cherries): |    | |
|
Diffing  
 | | |
| • [Refreshing Diffs](/docs/magit/Refreshing-Diffs): |    | |
| • [Commands Available in Diffs](/docs/magit/Commands-Available-in-Diffs): |    | |
| • [Diff Options](/docs/magit/Diff-Options): |    | |
| • [Revision Buffer](/docs/magit/Revision-Buffer): |    | |
|
References Buffer  
 | | |
| • [References Sections](/docs/magit/References-Sections): |    | |
|
Visiting Files and Blobs  
 | | |
| • [General-Purpose Visit Commands](/docs/magit/General_002dPurpose-Visit-Commands): |    | |
| • [Visiting Files and Blobs from a Diff](/docs/magit/Visiting-Files-and-Blobs-from-a-Diff): |    | |
|
Manipulating  
 | | |
| • [Creating Repository](/docs/magit/Creating-Repository): |    | |
| • [Cloning Repository](/docs/magit/Cloning-Repository): |    | |
| • [Staging and Unstaging](/docs/magit/Staging-and-Unstaging): |    | |
| • [Applying](/docs/magit/Applying): |    | |
| • [Committing](/docs/magit/Committing): |    | |
| • [Branching](/docs/magit/Branching): |    | |
| • [Merging](/docs/magit/Merging): |    | |
| • [Resolving Conflicts](/docs/magit/Resolving-Conflicts): |    | |
| • [Rebasing](/docs/magit/Rebasing): |    | |
| • [Cherry Picking](/docs/magit/Cherry-Picking): |    | |
| • [Resetting](/docs/magit/Resetting): |    | |
| • [Stashing](/docs/magit/Stashing): |    | |
|
Staging and Unstaging  
 | | |
| • [Staging from File-Visiting Buffers](/docs/magit/Staging-from-File_002dVisiting-Buffers): |    | |
|
Committing  
 | | |
| • [Initiating a Commit](/docs/magit/Initiating-a-Commit): |    | |
| • [Editing Commit Messages](/docs/magit/Editing-Commit-Messages): |    | |
|
Branching  
 | | |
| • [The Two Remotes](/docs/magit/The-Two-Remotes): |    | |
| • [Branch Commands](/docs/magit/Branch-Commands): |    | |
| • [Branch Git Variables](/docs/magit/Branch-Git-Variables): |    | |
| • [Auxiliary Branch Commands](/docs/magit/Auxiliary-Branch-Commands): |    | |
|
Rebasing  
 | | |
| • [Editing Rebase Sequences](/docs/magit/Editing-Rebase-Sequences): |    | |
| • [Information About In-Progress Rebase](/docs/magit/Information-About-In_002dProgress-Rebase): |    | |
|
Cherry Picking  
 | | |
| • [Reverting](/docs/magit/Reverting): |    | |
|
Transferring  
 | | |
| • [Remotes](/docs/magit/Remotes): |    | |
| • [Fetching](/docs/magit/Fetching): |    | |
| • [Pulling](/docs/magit/Pulling): |    | |
| • [Pushing](/docs/magit/Pushing): |    | |
| • [Plain Patches](/docs/magit/Plain-Patches): |    | |
| • [Maildir Patches](/docs/magit/Maildir-Patches): |    | |
|
Remotes  
 | | |
| • [Remote Commands](/docs/magit/Remote-Commands): |    | |
| • [Remote Git Variables](/docs/magit/Remote-Git-Variables): |    | |
|
Miscellaneous  
 | | |
| • [Tagging](/docs/magit/Tagging): |    | |
| • [Notes](/docs/magit/Notes): |    | |
| • [Submodules](/docs/magit/Submodules): |    | |
| • [Subtree](/docs/magit/Subtree): |    | |
| • [Worktree](/docs/magit/Worktree): |    | |
| • [Bundle](/docs/magit/Bundle): |    | |
| • [Common Commands](/docs/magit/Common-Commands): |    | |
| • [Wip Modes](/docs/magit/Wip-Modes): |    | |
| • [Commands for Buffers Visiting Files](/docs/magit/Commands-for-Buffers-Visiting-Files): |    | |
| • [Minor Mode for Buffers Visiting Blobs](/docs/magit/Minor-Mode-for-Buffers-Visiting-Blobs): |    | |
|
Submodules  
 | | |
| • [Listing Submodules](/docs/magit/Listing-Submodules): |    | |
| • [Submodule Transient](/docs/magit/Submodule-Transient): |    | |
|
Wip Modes  
 | | |
| • [Wip Graph](/docs/magit/Wip-Graph): |    | |
| • [Legacy Wip Modes](/docs/magit/Legacy-Wip-Modes): |    | |
|
Customizing  
 | | |
| • [Per-Repository Configuration](/docs/magit/Per_002dRepository-Configuration): |    | |
| • [Essential Settings](/docs/magit/Essential-Settings): |    | |
|
Essential Settings  
 | | |
| • [Safety](/docs/magit/Safety): |    | |
| • [Performance](/docs/magit/Performance): |    | |
| • [Default Bindings](/docs/magit/Default-Bindings): |    | |
|
Plumbing  
 | | |
| • [Calling Git](/docs/magit/Calling-Git): |    | |
| • [Section Plumbing](/docs/magit/Section-Plumbing): |    | |
| • [Refreshing Buffers](/docs/magit/Refreshing-Buffers): |    | |
| • [Conventions](/docs/magit/Conventions): |    | |
|
Calling Git  
 | | |
| • [Getting a Value from Git](/docs/magit/Getting-a-Value-from-Git): |    | |
| • [Calling Git for Effect](/docs/magit/Calling-Git-for-Effect): |    | |
|
Section Plumbing  
 | | |
| • [Creating Sections](/docs/magit/Creating-Sections): |    | |
| • [Section Selection](/docs/magit/Section-Selection): |    | |
| • [Matching Sections](/docs/magit/Matching-Sections): |    | |
|
Conventions  
 | | |
| • [Theming Faces](/docs/magit/Theming-Faces): |    | |
|
FAQ  
 | | |
| • [FAQ - How to …?](/docs/magit/FAQ-_002d-How-to-_2026_003f): |    | |
| • [FAQ - Issues and Errors](/docs/magit/FAQ-_002d-Issues-and-Errors): |    | |
|
FAQ - How to …?  
 | | |
| • [How to pronounce Magit?](/docs/magit/How-to-pronounce-Magit_003f): |    | |
| • [How to show git's output?](/docs/magit/How-to-show-git_0027s-output_003f): |    | |
| • [How to install the gitman info manual?](/docs/magit/How-to-install-the-gitman-info-manual_003f): |    | |
| • [How to show diffs for gpg-encrypted files?](/docs/magit/How-to-show-diffs-for-gpg_002dencrypted-files_003f): |    | |
| • [How does branching and pushing work?](/docs/magit/How-does-branching-and-pushing-work_003f): |    | |
| • [Can Magit be used as `ediff-version-control-package`?](/docs/magit/Can-Magit-be-used-as-ediff_002dversion_002dcontrol_002dpackage_003f): |    | |
| • [Should I disable VC?](/docs/magit/Should-I-disable-VC_003f): |    | |
|
FAQ - Issues and Errors  
 | | |
| • [Magit is slow](/docs/magit/Magit-is-slow): |    | |
| • [I changed several thousand files at once and now Magit is unusable](/docs/magit/I-changed-several-thousand-files-at-once-and-now-Magit-is-unusable): |    | |
| • [I am having problems committing](/docs/magit/I-am-having-problems-committing): |    | |
| • [I am using MS Windows and cannot push with Magit](/docs/magit/I-am-using-MS-Windows-and-cannot-push-with-Magit): |    | |
| • [I am using OS X and SOMETHING works in shell, but not in Magit](/docs/magit/I-am-using-OS-X-and-SOMETHING-works-in-shell-but-not-in-Magit): |    | |
| • [Expanding a file to show the diff causes it to disappear](/docs/magit/Expanding-a-file-to-show-the-diff-causes-it-to-disappear): |    | |
| • [Point is wrong in the `COMMIT_EDITMSG` buffer](/docs/magit/Point-is-wrong-in-the-COMMIT_005fEDITMSG-buffer): |    | |
| • [The mode-line information isn't always up-to-date](/docs/magit/The-mode_002dline-information-isn_0027t-always-up_002dto_002ddate): |    | |
| • [A branch and tag sharing the same name breaks SOMETHING](/docs/magit/A-branch-and-tag-sharing-the-same-name-breaks-SOMETHING): |    | |
| • [My Git hooks work on the command-line but not inside Magit](/docs/magit/My-Git-hooks-work-on-the-command_002dline-but-not-inside-Magit): |    | |
| • [`git-commit-mode` isn't used when committing from the command-line](/docs/magit/git_002dcommit_002dmode-isn_0027t-used-when-committing-from-the-command_002dline): |    | |
| • [Point ends up inside invisible text when jumping to a file-visiting buffer](/docs/magit/Point-ends-up-inside-invisible-text-when-jumping-to-a-file_002dvisiting-buffer): |    | |
| • [I am unable to stage when using Tramp from MS Windows](/docs/magit/I-am-unable-to-stage-when-using-Tramp-from-MS-Windows): |    | |
| • [I am no longer able to save popup defaults](/docs/magit/I-am-no-longer-able-to-save-popup-defaults): |    | |
|

                                                                                                                                                              |    |    |
