---
slug: SEC_Contents
---

## Table of Contents

*   [1 Introduction](Introduction)

*   [2 Installation](Installation)

    *   [2.1 Installing from Melpa](Installing-from-Melpa)
    *   [2.2 Installing from the Git Repository](Installing-from-the-Git-Repository)
    *   [2.3 Post-Installation Tasks](Post_002dInstallation-Tasks)

*   [3 Getting Started](Getting-Started)

*   [4 Interface Concepts](Interface-Concepts)

    *   [4.1 Modes and Buffers](Modes-and-Buffers)

        *   [4.1.1 Switching Buffers](Switching-Buffers)

        *   [4.1.2 Naming Buffers](Naming-Buffers)

        *   [4.1.3 Quitting Windows](Quitting-Windows)

        *   [4.1.4 Automatic Refreshing of Magit Buffers](Automatic-Refreshing-of-Magit-Buffers)

        *   [4.1.5 Automatic Saving of File-Visiting Buffers](Automatic-Saving-of-File_002dVisiting-Buffers)

        *   [4.1.6 Automatic Reverting of File-Visiting Buffers](Automatic-Reverting-of-File_002dVisiting-Buffers)

            *   [Risk of Reverting Automatically](Risk-of-Reverting-Automatically)

    *   [4.2 Sections](Sections)

        *   [4.2.1 Section Movement](Section-Movement)
        *   [4.2.2 Section Visibility](Section-Visibility)
        *   [4.2.3 Section Hooks](Section-Hooks)
        *   [4.2.4 Section Types and Values](Section-Types-and-Values)
        *   [4.2.5 Section Options](Section-Options)

    *   [4.3 Transient Commands](Transient-Commands)

    *   [4.4 Transient Arguments and Buffer Variables](Transient-Arguments-and-Buffer-Variables)

    *   [4.5 Completion, Confirmation and the Selection](Completion-Confirmation-and-the-Selection)

        *   [4.5.1 Action Confirmation](Action-Confirmation)
        *   [4.5.2 Completion and Confirmation](Completion-and-Confirmation)
        *   [4.5.3 The Selection](The-Selection)
        *   [4.5.4 The hunk-internal region](The-hunk_002dinternal-region)
        *   [4.5.5 Support for Completion Frameworks](Support-for-Completion-Frameworks)
        *   [4.5.6 Additional Completion Options](Additional-Completion-Options)

    *   [4.6 Running Git](Running-Git)

        *   [4.6.1 Viewing Git Output](Viewing-Git-Output)
        *   [4.6.2 Git Process Status](Git-Process-Status)
        *   [4.6.3 Running Git Manually](Running-Git-Manually)
        *   [4.6.4 Git Executable](Git-Executable)
        *   [4.6.5 Global Git Arguments](Global-Git-Arguments)

*   [5 Inspecting](Inspecting)

    *   [5.1 Status Buffer](Status-Buffer)

        *   [5.1.1 Status Sections](Status-Sections)
        *   [5.1.2 Status Header Sections](Status-Header-Sections)
        *   [5.1.3 Status Module Sections](Status-Module-Sections)
        *   [5.1.4 Status Options](Status-Options)

    *   [5.2 Repository List](Repository-List)

    *   [5.3 Logging](Logging)

        *   [5.3.1 Refreshing Logs](Refreshing-Logs)
        *   [5.3.2 Log Buffer](Log-Buffer)
        *   [5.3.3 Log Margin](Log-Margin)
        *   [5.3.4 Select from Log](Select-from-Log)
        *   [5.3.5 Reflog](Reflog)
        *   [5.3.6 Cherries](Cherries)

    *   [5.4 Diffing](Diffing)

        *   [5.4.1 Refreshing Diffs](Refreshing-Diffs)
        *   [5.4.2 Commands Available in Diffs](Commands-Available-in-Diffs)
        *   [5.4.3 Diff Options](Diff-Options)
        *   [5.4.4 Revision Buffer](Revision-Buffer)

    *   [5.5 Ediffing](Ediffing)

    *   [5.6 References Buffer](References-Buffer)

        *   [5.6.1 References Sections](References-Sections)

    *   [5.7 Bisecting](Bisecting)

    *   [5.8 Visiting Files and Blobs](Visiting-Files-and-Blobs)

        *   [5.8.1 General-Purpose Visit Commands](General_002dPurpose-Visit-Commands)
        *   [5.8.2 Visiting Files and Blobs from a Diff](Visiting-Files-and-Blobs-from-a-Diff)

    *   [5.9 Blaming](Blaming)

*   [6 Manipulating](Manipulating)

    *   [6.1 Creating Repository](Creating-Repository)

    *   [6.2 Cloning Repository](Cloning-Repository)

    *   [6.3 Staging and Unstaging](Staging-and-Unstaging)

        *   [6.3.1 Staging from File-Visiting Buffers](Staging-from-File_002dVisiting-Buffers)

    *   [6.4 Applying](Applying)

    *   [6.5 Committing](Committing)

        *   [6.5.1 Initiating a Commit](Initiating-a-Commit)

        *   [6.5.2 Editing Commit Messages](Editing-Commit-Messages)

            *   [Using the Revision Stack](Using-the-Revision-Stack)
            *   [Commit Pseudo Headers](Commit-Pseudo-Headers)
            *   [Commit Mode and Hooks](Commit-Mode-and-Hooks)
            *   [Commit Message Conventions](Commit-Message-Conventions)

    *   [6.6 Branching](Branching)

        *   [6.6.1 The Two Remotes](The-Two-Remotes)
        *   [6.6.2 Branch Commands](Branch-Commands)
        *   [6.6.3 Branch Git Variables](Branch-Git-Variables)
        *   [6.6.4 Auxiliary Branch Commands](Auxiliary-Branch-Commands)

    *   [6.7 Merging](Merging)

    *   [6.8 Resolving Conflicts](Resolving-Conflicts)

    *   [6.9 Rebasing](Rebasing)

        *   [6.9.1 Editing Rebase Sequences](Editing-Rebase-Sequences)
        *   [6.9.2 Information About In-Progress Rebase](Information-About-In_002dProgress-Rebase)

    *   [6.10 Cherry Picking](Cherry-Picking)

        *   [6.10.1 Reverting](Reverting)

    *   [6.11 Resetting](Resetting)

    *   [6.12 Stashing](Stashing)

*   [7 Transferring](Transferring)

    *   [7.1 Remotes](Remotes)

        *   [7.1.1 Remote Commands](Remote-Commands)
        *   [7.1.2 Remote Git Variables](Remote-Git-Variables)

    *   [7.2 Fetching](Fetching)

    *   [7.3 Pulling](Pulling)

    *   [7.4 Pushing](Pushing)

    *   [7.5 Plain Patches](Plain-Patches)

    *   [7.6 Maildir Patches](Maildir-Patches)

*   [8 Miscellaneous](Miscellaneous)

    *   [8.1 Tagging](Tagging)

    *   [8.2 Notes](Notes)

    *   [8.3 Submodules](Submodules)

        *   [8.3.1 Listing Submodules](Listing-Submodules)
        *   [8.3.2 Submodule Transient](Submodule-Transient)

    *   [8.4 Subtree](Subtree)

    *   [8.5 Worktree](Worktree)

    *   [8.6 Bundle](Bundle)

    *   [8.7 Common Commands](Common-Commands)

    *   [8.8 Wip Modes](Wip-Modes)

        *   [8.8.1 Wip Graph](Wip-Graph)
        *   [8.8.2 Legacy Wip Modes](Legacy-Wip-Modes)

    *   [8.9 Commands for Buffers Visiting Files](Commands-for-Buffers-Visiting-Files)

    *   [8.10 Minor Mode for Buffers Visiting Blobs](Minor-Mode-for-Buffers-Visiting-Blobs)

*   [9 Customizing](Customizing)

    *   [9.1 Per-Repository Configuration](Per_002dRepository-Configuration)

    *   [9.2 Essential Settings](Essential-Settings)

        *   [9.2.1 Safety](Safety)

        *   [9.2.2 Performance](Performance)

            *   [Microsoft Windows Performance](Microsoft-Windows-Performance)
            *   [MacOS Performance](MacOS-Performance)

        *   [9.2.3 Default Bindings](Default-Bindings)

*   [10 Plumbing](Plumbing)

    *   [10.1 Calling Git](Calling-Git)

        *   [10.1.1 Getting a Value from Git](Getting-a-Value-from-Git)
        *   [10.1.2 Calling Git for Effect](Calling-Git-for-Effect)

    *   [10.2 Section Plumbing](Section-Plumbing)

        *   [10.2.1 Creating Sections](Creating-Sections)
        *   [10.2.2 Section Selection](Section-Selection)
        *   [10.2.3 Matching Sections](Matching-Sections)

    *   [10.3 Refreshing Buffers](Refreshing-Buffers)

    *   [10.4 Conventions](Conventions)

        *   [10.4.1 Theming Faces](Theming-Faces)

*   [Appendix A FAQ](FAQ)

    *   [A.1 FAQ - How to …?](FAQ-_002d-How-to-_2026_003f)

        *   [A.1.1 How to pronounce Magit?](How-to-pronounce-Magit_003f)
        *   [A.1.2 How to show git’s output?](How-to-show-git_0027s-output_003f)
        *   [A.1.3 How to install the gitman info manual?](How-to-install-the-gitman-info-manual_003f)
        *   [A.1.4 How to show diffs for gpg-encrypted files?](How-to-show-diffs-for-gpg_002dencrypted-files_003f)
        *   [A.1.5 How does branching and pushing work?](How-does-branching-and-pushing-work_003f)
        *   [A.1.6 Can Magit be used as `ediff-version-control-package`?](Can-Magit-be-used-as-ediff_002dversion_002dcontrol_002dpackage_003f)
        *   [A.1.7 Should I disable VC?](Should-I-disable-VC_003f)

    *   [A.2 FAQ - Issues and Errors](FAQ-_002d-Issues-and-Errors)

        *   [A.2.1 Magit is slow](Magit-is-slow)
        *   [A.2.2 I changed several thousand files at once and now Magit is unusable](I-changed-several-thousand-files-at-once-and-now-Magit-is-unusable)
        *   [A.2.3 I am having problems committing](I-am-having-problems-committing)
        *   [A.2.4 I am using MS Windows and cannot push with Magit](I-am-using-MS-Windows-and-cannot-push-with-Magit)
        *   [A.2.5 I am using OS X and SOMETHING works in shell, but not in Magit](I-am-using-OS-X-and-SOMETHING-works-in-shell-but-not-in-Magit)
        *   [A.2.6 Expanding a file to show the diff causes it to disappear](Expanding-a-file-to-show-the-diff-causes-it-to-disappear)
        *   [A.2.7 Point is wrong in the `COMMIT_EDITMSG` buffer](Point-is-wrong-in-the-COMMIT_005fEDITMSG-buffer)
        *   [A.2.8 The mode-line information isn’t always up-to-date](The-mode_002dline-information-isn_0027t-always-up_002dto_002ddate)
        *   [A.2.9 A branch and tag sharing the same name breaks SOMETHING](A-branch-and-tag-sharing-the-same-name-breaks-SOMETHING)
        *   [A.2.10 My Git hooks work on the command-line but not inside Magit](My-Git-hooks-work-on-the-command_002dline-but-not-inside-Magit)
        *   [A.2.11 `git-commit-mode` isn’t used when committing from the command-line](git_002dcommit_002dmode-isn_0027t-used-when-committing-from-the-command_002dline)
        *   [A.2.12 Point ends up inside invisible text when jumping to a file-visiting buffer](Point-ends-up-inside-invisible-text-when-jumping-to-a-file_002dvisiting-buffer)
        *   [A.2.13 I am unable to stage when using Tramp from MS Windows](I-am-unable-to-stage-when-using-Tramp-from-MS-Windows)
        *   [A.2.14 I am no longer able to save popup defaults](I-am-no-longer-able-to-save-popup-defaults)

*   [B Debugging Tools](Debugging-Tools)

*   [Appendix C Keystroke Index](Keystroke-Index)

*   [Appendix D Command Index](Command-Index)

*   [Appendix E Function Index](Function-Index)

*   [Appendix F Variable Index](Variable-Index)
