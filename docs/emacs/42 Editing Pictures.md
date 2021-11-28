---
slug: Picture-Mode
---

To edit a picture made out of text characters (for example, a picture of the division of a register into fields, as a comment in a program), use the command `M-x picture-mode` to enter Picture mode.

In Picture mode, editing is based on the *quarter-plane* model of text, according to which the text characters lie studded on an area that stretches infinitely far to the right and downward. The concept of the end of a line does not exist in this model; the most you can say is where the last nonblank character on the line is found.

Of course, Emacs really always considers text as a sequence of characters, and lines really do have ends. But Picture mode replaces the most frequently-used commands with variants that simulate the quarter-plane model of text. They do this by inserting spaces or by converting tabs to spaces.

Most of the basic editing commands of Emacs are redefined by Picture mode to do essentially the same thing but in a quarter-plane way. In addition, Picture mode defines various keys starting with the `C-c` prefix to run special picture editing commands.

One of these keys, `C-c C-c`, is particularly important. Often a picture is part of a larger file that is usually edited in some other major mode. Picture mode records the name of the previous major mode so you can use the `C-c C-c` command (`picture-mode-exit`) later to go back to that mode. `C-c C-c` also deletes spaces from the ends of lines, unless given a numeric argument.

The special commands of Picture mode all work in other modes (provided the `picture` library is loaded), but are not bound to keys except in Picture mode. The descriptions below talk of moving “one column" and so on, but all the picture mode commands handle numeric arguments as their normal equivalents do.

Turning on Picture mode runs the hook `picture-mode-hook`. Additional extensions to Picture mode can be found in `artist.el`.

|                                                  |    |                                                                         |
| :----------------------------------------------- | -- | :---------------------------------------------------------------------- |
| • [Basic Picture](Basic-Picture)                 |    | Basic concepts and simple commands of Picture Mode.                     |
| • [Insert in Picture](Insert-in-Picture)         |    | Controlling direction of cursor motion after self-inserting characters. |
| • [Tabs in Picture](Tabs-in-Picture)             |    | Various features for tab stops and indentation.                         |
| • [Rectangles in Picture](Rectangles-in-Picture) |    | Clearing and superimposing rectangles.                                  |
