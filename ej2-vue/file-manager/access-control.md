---
layout: post
title: Access control in Vue File Manager component | Syncfusion
description: Learn how to define access permissions for files and folders in the Syncfusion Vue File Manager component.
control: File Manager 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Access control in Vue File Manager component

The [Vue FileManager](https://www.syncfusion.com/vue-ui-components/vue-file-manager) enables defining access permissions for folders and files by configuring a set of access rules per user or role.

* [Access Rules](#access-rules)
* [Permissions](#permissions)

## Access Rules

The FileAccessController lets you define security permissions for folders and files using folder- or file-level access rules.

Use the `SetRules()` method to set access rules for folders (including their files and subfolders) and for individual files. The following table lists the properties available on an AccessRule and indicates whether each property applies to files and/or folders:

| **Properties** | **Applicable for file** | **Applicable for folder** | **Description** |
| --- | --- | --- | --- |
| Copy | Yes | Yes | Allows copying the file or folder. |
| Read | Yes | Yes | Allows reading the file or folder. |
| Write | Yes | Yes | Allows writing to the file or folder. |
| WriteContents | No | Yes | Allows modifying the contents of a folder. |
| Download | Yes | Yes | Allows downloading the file or folder. |
| Upload | No | Yes | Allows uploading into the folder. |
| Path | Yes | Yes | Specifies the path where the rule applies. |
| Role | Yes | Yes | Specifies the role to which the rule applies. |
| IsFile | Yes | Yes | Indicates whether the rule targets a file (`true`) or a folder (`false`). |

The following example shows access rules for an Administrator role:

```ts
// Administrator
// Access Rules for files
new AccessRule { Path = "/*.*", Role = "Administrator", Read = Permission.Allow, Write = Permission.Allow, Copy = Permission.Allow, Download = Permission.Allow, IsFile = true },

// Access Rules for folders
new AccessRule { Path = "*", Role = "Administrator", Read = Permission.Allow, Write = Permission.Allow, Copy = Permission.Allow, WriteContents = Permission.Allow, Upload = Permission.Allow, Download = Permission.Deny, IsFile = false },
```

The following example shows access rules for a Default User role:

```ts
// Default User
// Access Rules for files
new AccessRule { Path = "/*.*", Role = "Default User", Read = Permission.Deny, Write = Permission.Deny, Copy = Permission.Deny, Download = Permission.Deny, IsFile = true },

// Access Rules for folders
new AccessRule { Path = "*", Role = "Default User", Read = Permission.Deny, Write = Permission.Deny, Copy = Permission.Deny, WriteContents = Permission.Deny, Upload = Permission.Deny, Download = Permission.Deny, IsFile = false },
```

## Permissions

This section explains how access rules determine permissions for files and folders in the File Manager. The table below summarizes the possible permission values.

| **Value** | **Description** |
| --- | --- |
| Allow | Grants permission to perform the specified operations (read, write, copy, download). |
| Deny | Denies permission to perform the specified operations (read, write, copy, download). |

Apply access rules by using the `Role` property to target specific roles. The File Manager then displays and permits operations on files and folders based on the assigned roles and rules.

The following example demonstrates denying write permission for the Administrator role:

```ts
// For file
new AccessRule { Path = "/*.*", Role = "Administrator", Read = Permission.Allow, Write = Permission.Deny, IsFile = true },

// For folder
new AccessRule { Path = "*", Role = "Administrator", Read = Permission.Allow, Write = Permission.Deny, IsFile = false },
```

The following examples show how to deny write permission except for particular files or folders.

```ts
// Deny writing for a specific folder
new AccessRule { Path = "/Documents", Role = "Document Manager", Read = Permission.Allow, Write = Permission.Deny, Copy = Permission.Allow, WriteContents = Permission.Deny, Upload = Permission.Deny, Download = Permission.Deny, IsFile = false },

// Deny writing for a specific file
new AccessRule { Path = "/Pictures/Employees/Adam.png", Role = "Document Manager", Read = Permission.Allow, Write = Permission.Deny, Copy = Permission.Deny, Download = Permission.Deny, IsFile = true },
```

Example: deny writing and uploading in the root folder:

```ts
// Folder rule
new AccessRule { Path = "/", Role = "Document Manager", Read = Permission.Allow, Write = Permission.Deny, Copy = Permission.Deny, WriteContents = Permission.Deny, Upload = Permission.Deny, Download = Permission.Deny, IsFile = false },
```

The following example demonstrates the File Manager rendered with access control support.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/access-control-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/access-control-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/access-control-cs1" %}