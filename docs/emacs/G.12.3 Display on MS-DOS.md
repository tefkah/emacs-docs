---
slug: MS_002dDOS-Display
---

Display on MS-DOS cannot use font variants, like bold or italic, but it does support multiple faces, each of which can specify a foreground and a background color. Therefore, you can get the full functionality of Emacs packages that use fonts (such as `font-lock`, Enriched Text mode, and others) by defining the relevant faces to use different colors. Use the `list-colors-display` command (see [Colors](/docs/emacs/Colors)) and the `list-faces-display` command (see [Faces](/docs/emacs/Faces)) to see what colors and faces are available and what they look like.

See [MS-DOS and MULE](/docs/emacs/MS_002dDOS-and-MULE), later in this chapter, for information on how Emacs displays glyphs and characters that aren’t supported by the native font built into the DOS display.

When Emacs starts, it changes the cursor shape to a solid box. This is for compatibility with other systems, where the box cursor is the default in Emacs. This default shape can be changed to a bar by specifying the `cursor-type` parameter in the variable `default-frame-alist` (see [Creating Frames](/docs/emacs/Creating-Frames)). The MS-DOS terminal doesn’t support a vertical-bar cursor, so the bar cursor is horizontal, and the `width` parameter, if specified by the frame parameters, actually determines its height. For this reason, the `bar` and `hbar` cursor types produce the same effect on MS-DOS. As an extension, the bar cursor specification can include the starting scan line of the cursor as well as its width, like this:

```lisp
 '(cursor-type bar width . start)
```

In addition, if the `width` parameter is negative, the cursor bar begins at the top of the character cell.

The MS-DOS terminal can only display a single frame at a time. The Emacs frame facilities work on MS-DOS much as they do on text terminals (see [Frames](/docs/emacs/Frames)). When you run Emacs from a DOS window on MS-Windows, you can make the visible frame smaller than the full screen, but Emacs still cannot display more than a single frame at a time.

The `dos-mode4350` command switches the display to 43 or 50 lines, depending on your hardware; the `dos-mode25` command switches to the default 80x25 screen size.

By default, Emacs only knows how to set screen sizes of 80 columns by 25, 28, 35, 40, 43 or 50 rows. However, if your video adapter has special video modes that will switch the display to other sizes, you can have Emacs support those too. When you ask Emacs to switch the frame to `n` rows by `m` columns dimensions, it checks if there is a variable called `screen-dimensions-nxm`, and if so, uses its value (which must be an integer) as the video mode to switch to. (Emacs switches to that video mode by calling the BIOS `Set Video Mode` function with the value of `screen-dimensions-nxm` in the `AL` register.) For example, suppose your adapter will switch to 66x80 dimensions when put into video mode 85. Then you can make Emacs support this screen size by putting the following into your `_emacs` file:

```lisp
(setq screen-dimensions-66x80 85)
```

Since Emacs on MS-DOS can only set the frame size to specific supported dimensions, it cannot honor every possible frame resizing request. When an unsupported size is requested, Emacs chooses the next larger supported size beyond the specified size. For example, if you ask for 36x80 frame, you will get 40x80 instead.

The variables `screen-dimensions-nxm` are used only when they exactly match the specified size; the search for the next larger supported size ignores them. In the above example, even if your VGA supports 38x80 dimensions and you define a variable `screen-dimensions-38x80` with a suitable value, you will still get 40x80 screen when you ask for a 36x80 frame. If you want to get the 38x80 size in this case, you can do it by setting the variable named `screen-dimensions-36x80` with the same video mode value as `screen-dimensions-38x80`.

Changing frame dimensions on MS-DOS has the effect of changing all the other frames to the new dimensions.
