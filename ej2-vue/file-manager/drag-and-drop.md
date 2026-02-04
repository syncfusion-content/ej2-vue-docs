---
layout: post
title: Drag and drop in Vue File Manager component | Syncfusion
description: Learn how to enable, configure and use drag-and-drop features in the Syncfusion Vue File Manager component.
control: File Manager 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in Vue File Manager component

The File Manager allows files or folders to be moved from one folder to another by using the  [allowDragAndDrop](https://ej2.syncfusion.com/vue/documentation/api/file-manager#allowdraganddrop) property. It also supports uploading files by dragging them from Windows Explorer to the File Manager control. You can enable or disable this feature by using the [allowDragAndDrop](https://ej2.syncfusion.com/vue/documentation/api/file-manager#allowdraganddrop) property.

The drag-and-drop operation raises several events that allow handling and customizing behavior:

* [fileDragStart](https://ej2.syncfusion.com/vue/documentation/api/file-manager#filedragstart) — Triggered when dragging a file or folder begins.
* [fileDragging](https://ej2.syncfusion.com/vue/documentation/api/file-manager#filedragging) — Triggered while a file or folder is being dragged.
* [fileDragStop](https://ej2.syncfusion.com/vue/documentation/api/file-manager#filedragstop) — Triggered when a dragged file or folder is about to be dropped on the target.
* [fileDropped](https://ej2.syncfusion.com/vue/documentation/api/file-manager#filedropped) — Triggered after a file or folder has been dropped.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/drag-and-drop-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/drag-and-drop-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/drag-and-drop-cs1" %}