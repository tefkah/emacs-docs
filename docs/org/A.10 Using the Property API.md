---
slug: Using-the-Property-API
---

Here is a description of the functions that can be used to work with properties.

### <span className="tag function">`function`</span> **org-entry-properties** `&optional pom which`

Get all properties of the entry at point-or-marker `POM`. This includes the TODO keyword, the tags, time strings for deadline, scheduled, and clocking, and any additional properties defined in the entry. The return value is an alist. Keys may occur multiple times if the property key was used several times. `POM` may also be `nil`, in which case the current entry is used. If `WHICH` is `nil` or `all`, get all properties. If `WHICH` is `special` or `standard`, only get that subclass.

### <span className="tag function">`function`</span> **org-entry-get** `pom property &optional inherit`

Get value of `PROPERTY` for entry at point-or-marker `POM`. By default, this only looks at properties defined locally in the entry. If `INHERIT` is non-`nil` and the entry does not have the property, then also check higher levels of the hierarchy. If `INHERIT` is the symbol `selective`, use inheritance if and only if the setting of `org-use-property-inheritance` selects `PROPERTY` for inheritance.

### <span className="tag function">`function`</span> **org-entry-delete** `pom property`

Delete the property `PROPERTY` from entry at point-or-marker `POM`.

### <span className="tag function">`function`</span> **org-entry-put** `pom property value`

Set `PROPERTY` to `VALUES` for entry at point-or-marker POM.

### <span className="tag function">`function`</span> **org-buffer-property-keys** `&optional include-specials`

Get all property keys in the current buffer.

### <span className="tag function">`function`</span> **org-insert-property-drawer**

Insert a property drawer for the current entry.

### <span className="tag function">`function`</span> **org-entry-put-multivalued-property** `pom property &rest values`

Set `PROPERTY` at point-or-marker `POM` to `VALUES`. `VALUES` should be a list of strings. They are concatenated, with spaces as separators.

### <span className="tag function">`function`</span> **org-entry-get-multivalued-property** `pom property`

Treat the value of the property `PROPERTY` as a whitespace-separated list of values and return the values as a list of strings.

### <span className="tag function">`function`</span> **org-entry-add-to-multivalued-property** `pom property value`

Treat the value of the property `PROPERTY` as a whitespace-separated list of values and make sure that `VALUE` is in this list.

### <span className="tag function">`function`</span> **org-entry-remove-from-multivalued-property** `pom property value`

Treat the value of the property `PROPERTY` as a whitespace-separated list of values and make sure that `VALUE` is *not* in this list.

### <span className="tag function">`function`</span> **org-entry-member-in-multivalued-property** `pom property value`

Treat the value of the property `PROPERTY` as a whitespace-separated list of values and check if `VALUE` is in this list.

### <span className="tag useroption">`user option`</span> **org-property-allowed-value-functions**

Hook for functions supplying allowed values for a specific property. The functions must take a single argument, the name of the property, and return a flat list of allowed values. If ‘`:ETC`’ is one of the values, use the values as completion help, but allow also other values to be entered. The functions must return `nil` if they are not responsible for this property.
