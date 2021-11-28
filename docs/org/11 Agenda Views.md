---
slug: Agenda-Views
---

Due to the way Org works, TODO items, time-stamped items, and tagged headlines can be scattered throughout a file or even a number of files. To get an overview of open action items, or of events that are important for a particular date, this information must be collected, sorted and displayed in an organized way.

Org can select items based on various criteria and display them in a separate buffer. Six different view types are provided:

*   an *agenda* that is like a calendar and shows information for specific dates,
*   a *TODO list* that covers all unfinished action items,
*   a *match view*, showings headlines based on the tags, properties, and TODO state associated with them,
*   a *text search view* that shows all entries from multiple files that contain specified keywords,
*   a *stuck projects view* showing projects that currently do not move along, and
*   *custom views* that are special searches and combinations of different views.

The extracted information is displayed in a special *agenda buffer*. This buffer is read-only, but provides commands to visit the corresponding locations in the original Org files, and even to edit these files remotely.

By default, the report ignores commented (see [Comment Lines](Comment-Lines)) and archived (see [Internal archiving](Internal-archiving)) entries. You can override this by setting `org-agenda-skip-comment-trees` and `org-agenda-skip-archived-trees` to `nil`.

Two variables control how the agenda buffer is displayed and whether the window configuration is restored when the agenda exits: `org-agenda-window-setup` and `org-agenda-restore-windows-after-quit`.

|                                                        |    |                                              |
| :----------------------------------------------------- | -- | :------------------------------------------- |
| • [Agenda Files](Agenda-Files)                         |    | Files being searched for agenda information. |
| • [Agenda Dispatcher](Agenda-Dispatcher)               |    | Keyboard access to agenda views.             |
| • [Built-in Agenda Views](Built_002din-Agenda-Views)   |    | What is available out of the box?            |
| • [Presentation and Sorting](Presentation-and-Sorting) |    | How agenda items are prepared for display.   |
| • [Agenda Commands](Agenda-Commands)                   |    | Remote editing of Org trees.                 |
| • [Custom Agenda Views](Custom-Agenda-Views)           |    | Defining special searches and views.         |
| • [Exporting Agenda Views](Exporting-Agenda-Views)     |    | Writing a view to a file.                    |
| • [Agenda Column View](Agenda-Column-View)             |    | Using column view for collected entries.     |
