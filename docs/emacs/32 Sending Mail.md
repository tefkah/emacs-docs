---
slug: Sending-Mail
---

To send an email message from Emacs, type `C-x m`. This switches to a buffer named `*unsent mail*`, where you can edit the text and headers of the message. When done, type `C-c C-s` or `C-c C-c` to send it.

### `C-x m`

Begin composing mail (`compose-mail`).

### `C-x 4 m`

Likewise, in another window (`compose-mail-other-window`).

### `C-x 5 m`

Likewise, but in a new frame (`compose-mail-other-frame`).

### `C-c C-s`

In the mail buffer, send the message (`message-send`).

### `C-c C-c`

In the mail buffer, send the message and bury the buffer (`message-send-and-exit`).

The mail buffer is an ordinary Emacs buffer, so you can switch to other buffers while composing the mail. If you want to send another message before finishing the current one, type `C-x m` again to open a new mail buffer whose name has a different numeric suffix (see [Misc Buffer](Misc-Buffer)). (This only works if you use the default Message mode to compose email; see [Mail Commands](Mail-Commands).) If you know that you’d like to continue composing the unsent message you were editing, invoke this command with a prefix argument, `C-u C-x m`<!-- /@w -->, and Emacs will switch to the last mail buffer you used and let you pick up editing the message where you left off.

The command `C-x 4 m` (`compose-mail-other-window`) does the same as `C-x m`, except it displays the mail buffer in a different window. The command `C-x 5 m` (`compose-mail-other-frame`) does it in a new frame.

When you type `C-c C-c` or `C-c C-s` to send the mail, Emacs may ask you how it should deliver the mail—either directly via SMTP, or using some other method. See [Mail Sending](Mail-Sending), for details.

|                               |    |                                                   |
| :---------------------------- | -- | :------------------------------------------------ |
| • [Format](Mail-Format)       |    | Format of a mail message.                         |
| • [Headers](Mail-Headers)     |    | Details of some standard mail header fields.      |
| • [Aliases](Mail-Aliases)     |    | Abbreviating and grouping mail addresses.         |
| • [Commands](Mail-Commands)   |    | Special commands for editing mail being composed. |
| • [Signature](Mail-Signature) |    | Adding a signature to every message.              |
| • [Amuse](Mail-Amusements)    |    | Distracting the NSA; adding fortune messages.     |
| • [Methods](Mail-Methods)     |    | Using alternative mail-composition methods.       |
