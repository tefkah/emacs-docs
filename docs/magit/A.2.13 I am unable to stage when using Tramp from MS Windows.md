---
slug: I-am-unable-to-stage-when-using-Tramp-from-MS-Windows
---

Magit may be unable to stage (or otherwise apply) individual hunks when you are connected to remote machine using Tramp and the local machine uses MS Windows.

There appears to be a problem with `process-send-eof` in this scenario, as mentioned at the end of `tramp-tests.el`. I have contacted the Tramp maintainer about this. For now this unfortunately means that it just doesn’t work and we cannot do anything about it. If you have more information, then please comment on [https://github.com/magit/magit/issues/3624](https://github.com/magit/magit/issues/3624).
