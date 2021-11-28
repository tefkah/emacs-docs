---
slug: Customization
---

Users of Emacs can customize variables and faces without writing Lisp code, by using the Customize interface. See [Easy Customization](https://www.gnu.org/software/emacs/manual/html_mono/emacs.html#Easy-Customization) in The GNU Emacs Manual. This chapter describes how to define *customization items* that users can interact with through the Customize interface.

Customization items include customizable variables, which are defined with the `defcustom` macro; customizable faces, which are defined with `defface` (described separately in [Defining Faces](Defining-Faces)); and *customization groups*, defined with `defgroup`, which act as containers for groups of related customization items.

|                                                      |    |                                                                       |
| :--------------------------------------------------- | -- | :-------------------------------------------------------------------- |
| • [Common Keywords](Common-Keywords)                 |    | Common keyword arguments for all kinds of customization declarations. |
| • [Group Definitions](Group-Definitions)             |    | Writing customization group definitions.                              |
| • [Variable Definitions](Variable-Definitions)       |    | Declaring user options.                                               |
| • [Customization Types](Customization-Types)         |    | Specifying the type of a user option.                                 |
| • [Applying Customizations](Applying-Customizations) |    | Functions to apply customization settings.                            |
| • [Custom Themes](Custom-Themes)                     |    | Writing Custom themes.                                                |
