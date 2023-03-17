---
layout: post
title: Bookmark in Vue Document editor component | Syncfusion
description: Learn here all about Bookmark in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Bookmark 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Bookmark in Vue Document editor component

Bookmark is a powerful tool that helps you to mark a place in the document to find again easily. You can enter many bookmarks in the document and give each one a unique name to identify easily.

Document Editor provides built-in dialog to add, delete, and navigate bookmarks within the document. To add a bookmark, select a portion of text in the document. After that, jump to the location or add links to it within the document using built-in hyperlink dialog. You can also delete bookmarks from a document.

>Bookmark names need to begin with a letter. They can include both numbers and letters, but not spaces. To separate the words, use an underscore.
>Bookmark names starting with an underscore are called hidden bookmarks. For example, bookmarks generated for table of contents.

## Add bookmark

Using [`insertBookmark`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/editor/#insertbookmark) method, Bookmark can be added to the selected text.

```c#
this.$refs.container.ej2Instances.documentEditor.editor.insertBookmark("Bookmark1");
```

## Select Bookmark

You can select the bookmark in the document using [`selectBookmark`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection/#selectbookmark) method by providing Bookmark name to select as shown in the following code snippet.

```c#
this.$refs.container.ej2Instances.documentEditor.selection.selectBookmark("Bookmark1");
```

## Delete Bookmark

You can delete bookmark in the document using [`deleteBookmark`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/editor/#deletebookmark) method as shown in the following code snippet.

```c#
this.$refs.container.ej2Instances.documentEditor.editor.deleteBookmark("Bookmark1");
```

## Get Bookmark

You can get all the bookmarks in the document using [`getBookmarks`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection/#getbookmarks) method as shown in the following code snippet.

```c#
this.$refs.container.ej2Instances.documentEditor.selection.getBookmarks(false);
```

>Note: Parameter denotes is include hidden bookmarks. If false, ignore hidden bookmark.

## Bookmark Dialog

The following example shows how to open bookmark dialog in Document Editor.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/document-editor/bookmark-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/bookmark-cs1" %}

## See Also

* [Feature modules](../document-editor/feature-module/)
* [Bookmark dialog](../document-editor/dialog#bookmark-dialog)
