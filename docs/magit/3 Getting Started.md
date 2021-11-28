---
slug: Getting-Started
---

This short tutorial describes the most essential features that many Magitians use on a daily basis. It only scratches the surface but should be enough to get you started.

IMPORTANT: It is safest if you clone some repository just for this tutorial. Alternatively you can use an existing local repository, but if you do that, then you should commit all uncommitted changes before proceeding.

Type `C-x g` to display information about the current Git repository in a dedicated buffer, called the status buffer.

Most Magit commands are commonly invoked from the status buffer. It can be considered the primary interface for interacting with Git using Magit. Many other Magit buffers may exist at a given time, but they are often created from this buffer.

Depending on what state your repository is in, this buffer may contain sections titled "Staged changes", "Unstaged changes", "Unmerged into origin/master", "Unpushed to origin/master", and many others.

Since we are starting from a safe state, which you can easily return to (by doing a `git reset --hard PRE-MAGIT-STATE`), there currently are no staged or unstaged changes. Edit some files and save the changes. Then go back to the status buffer, while at the same time refreshing it, by typing `C-x g`. (When the status buffer, or any Magit buffer for that matter, is the current buffer, then you can also use just `g` to refresh it).

Move between sections using `p` and `n`. Note that the bodies of some sections are hidden. Type `TAB` to expand or collapse the section at point. You can also use `C-tab` to cycle the visibility of the current section and its children. Move to a file section inside the section named "Unstaged changes" and type `s` to stage the changes you have made to that file. That file now appears under "Staged changes".

Magit can stage and unstage individual hunks, not just complete files. Move to the file you have just staged, expand it using `TAB`, move to one of the hunks using `n`, and unstage just that by typing `u`. Note how the staging (`s`) and unstaging (`u`) commands operate on the change at point. Many other commands behave the same way.

You can also un-/stage just part of a hunk. Inside the body of a hunk section (move there using `C-n`), set the mark using `C-SPC` and move down until some added and/or removed lines fall inside the region but not all of them. Again type `s` to stage.

It is also possible to un-/stage multiple files at once. Move to a file section, type `C-SPC`, move to the next file using `n`, and then `s` to stage both files. Note that both the mark and point have to be on the headings of sibling sections for this to work. If the region looks like it does in other buffers, then it doesn’t select Magit sections that can be acted on as a unit.

And then of course you want to commit your changes. Type `c`. This shows the available commit commands and arguments in a buffer at the bottom of the frame. Each command and argument is prefixed with the key that invokes/sets it. Do not worry about this for now. We want to create a "normal" commit, which is done by typing `c` again.

Now two new buffers appear. One is for writing the commit message, the other shows a diff with the changes that you are about to commit. Write a message and then type `C-c C-c` to actually create the commit.

You probably don’t want to push the commit you just created because you just committed some random changes, but if that is not the case you could push it by typing `P` to show all the available push commands and arguments and then `p` to push to a branch with the same name as the local branch onto the remote configured as the push-remote. (If the push-remote is not configured yet, then you would first be prompted for the remote to push to.)

So far we have mentioned the commit, push, and log menu commands. These are probably among the menus you will be using the most, but many others exist. To show a menu that lists all other menus (as well as the various apply commands and some other essential commands), type `h`. Try a few. (Such menus are also called "transient prefix commands" or just "transients".)

The key bindings in that menu correspond to the bindings in Magit buffers, including but not limited to the status buffer. So you could type `h d` to bring up the diff menu, but once you remember that "d" stands for "diff", you would usually do so by just typing `d`. But this "prefix of prefixes" is useful even once you have memorized all the bindings, as it can provide easy access to Magit commands from non-Magit buffers. The global binding is `C-x M-g`.

In file visiting buffers `C-c M-g` brings up a similar menu featuring commands that act on just the visited file, see [Commands for Buffers Visiting Files](/docs/magit/Commands-for-Buffers-Visiting-Files).

It is not necessary that you do so now, but if you stick with Magit, then it is highly recommended that you read the next section too.
