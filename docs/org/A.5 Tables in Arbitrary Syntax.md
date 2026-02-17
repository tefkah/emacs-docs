---
slug: Tables-in-Arbitrary-Syntax
---

Due to Org’s success in handling tables with Orgtbl, a frequently requested feature is the use of Org’s table functions in other modes, e.g., LaTeX. This would be hard to do in a general way without complicated customization nightmares. Moreover, that would take Org away from its simplicity roots that Orgtbl has proven. There is, however, an alternate approach to accomplishing the same.

This approach involves implementing a custom *translate* function that operates on a native Org *source table* to produce a table in another format. This strategy would keep the excellently working Orgtbl simple and isolate complications, if any, confined to the translate function. To add more alien table formats, we just add more translate functions. Also the burden of developing custom translate functions for new table formats is in the hands of those who know those formats best.

*   [Radio tables](/docs/org/Tables-in-Arbitrary-Syntax)
*   [A LaTeX example of radio tables](/docs/org/Tables-in-Arbitrary-Syntax)
*   [Translator functions](/docs/org/Tables-in-Arbitrary-Syntax)
