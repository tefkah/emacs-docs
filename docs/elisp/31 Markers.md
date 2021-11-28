---
slug: Markers
---

A *marker* is a Lisp object used to specify a position in a buffer relative to the surrounding text. A marker changes its offset from the beginning of the buffer automatically whenever text is inserted or deleted, so that it stays with the two characters on either side of it.

|                                                                    |    |                                                                 |
| :----------------------------------------------------------------- | -- | :-------------------------------------------------------------- |
| • [Overview of Markers](/docs/elisp/Overview-of-Markers)           |    | The components of a marker, and how it relocates.               |
| • [Predicates on Markers](/docs/elisp/Predicates-on-Markers)       |    | Testing whether an object is a marker.                          |
| • [Creating Markers](/docs/elisp/Creating-Markers)                 |    | Making empty markers or markers at certain places.              |
| • [Information from Markers](/docs/elisp/Information-from-Markers) |    | Finding the marker’s buffer or character position.              |
| • [Marker Insertion Types](/docs/elisp/Marker-Insertion-Types)     |    | Two ways a marker can relocate when you insert where it points. |
| • [Moving Markers](/docs/elisp/Moving-Markers)                     |    | Moving the marker to a new buffer or position.                  |
| • [The Mark](/docs/elisp/The-Mark)                                 |    | How the mark is implemented with a marker.                      |
| • [The Region](/docs/elisp/The-Region)                             |    | How to access the region.                                       |
