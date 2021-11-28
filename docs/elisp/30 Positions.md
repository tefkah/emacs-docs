---
slug: Positions
---

A *position* is the index of a character in the text of a buffer. More precisely, a position identifies the place between two characters (or before the first character, or after the last character), so we can speak of the character before or after a given position. However, we often speak of the character “at" a position, meaning the character after that position.

Positions are usually represented as integers starting from 1, but can also be represented as *markers*—special objects that relocate automatically when text is inserted or deleted so they stay with the surrounding characters. Functions that expect an argument to be a position (an integer), but accept a marker as a substitute, normally ignore which buffer the marker points into; they convert the marker to an integer, and use that integer, exactly as if you had passed the integer as the argument, even if the marker points to the wrong buffer. A marker that points nowhere cannot convert to an integer; using it instead of an integer causes an error. See [Markers](/docs/elisp/Markers).

See also the field feature (see [Fields](/docs/elisp/Fields)), which provides functions that are used by many cursor-motion commands.

|                                        |    |                                                 |
| :------------------------------------- | -- | :---------------------------------------------- |
| • [Point](/docs/elisp/Point)           |    | The special position where editing takes place. |
| • [Motion](/docs/elisp/Motion)         |    | Changing point.                                 |
| • [Excursions](/docs/elisp/Excursions) |    | Temporary motion and buffer changes.            |
| • [Narrowing](/docs/elisp/Narrowing)   |    | Restricting editing to a portion of the buffer. |
