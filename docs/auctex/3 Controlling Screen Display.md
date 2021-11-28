---
slug: Display
---

It is often desirable to get visual help of what markup code in a text actually does without having to decipher it explicitly. For this purpose Emacs and AUCTeX provide font locking (also known as syntax highlighting) which visually sets off markup code like macros or environments by using different colors or fonts. For example text to be typeset in italics can be displayed with an italic font in the editor as well, or labels and references get their own distinct color.

While font locking helps you grasp the purpose of markup code and separate markup from content, the markup code can still be distracting. AUCTeX lets you hide those parts and show them again at request with its built-in support for hiding macros and environments which we call folding here.

Besides folding of macros and environments, AUCTeX provides support for Emacs’ outline mode which lets you narrow the buffer content to certain sections of your text by hiding the parts not belonging to these sections.

Moreover, you can focus in a specific portion of the code by narrowing the buffer to the desired region. AUCTeX provides also functions to narrow the buffer to the current group and to LaTeX environments.

AUCTeX also provides some WYSIWYG features.

First, you can customize `font-latex-fontify-script` to enable special formatting of `^` superscripts and `_` subscripts (see [Font Locking](/docs/auctex/Font-Locking)).

Secondly, AUCTeX with GNU Emacs 25 or later can display certain math macros using Unicode characters, e.g., `\alpha` as α. This is called prettification and is lightweight and reasonable robust (see [Prettifying](/docs/auctex/Prettifying)).

A more accurate approach is provided by preview-latex, a subsystem of AUCTeX, see [(preview-latex)Top](/docs/auctex/Top) section ‘Introduction’ in The preview-latex Manual. This system uses LaTeX to generate images that are then displayed in your buffer. It is extremely accurate but can be fragile with some packages (like older pgf versions).

Please note that you can use prettification and preview-latex together.

|                                             |    |                                                            |
| :------------------------------------------ | -- | :--------------------------------------------------------- |
| [• Font Locking](/docs/auctex/Font-Locking) |    |                                                            |
| [• Folding](/docs/auctex/Folding)           |    | Folding Macros and Environments                            |
| [• Outline](/docs/auctex/Outline)           |    | Outlining the Document                                     |
| [• Narrowing](/docs/auctex/Narrowing)       |    | Restricting display and editing to a portion of the buffer |
| [• Prettifying](/docs/auctex/Prettifying)   |    | Displaying Greek and math macros as Unicode characters     |
