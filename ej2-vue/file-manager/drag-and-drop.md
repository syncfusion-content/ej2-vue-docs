---
layout: post
title: Drag and drop in Vue File manager component | Syncfusion
description: Learn here all about Drag and drop in Syncfusion Vue File manager component of Syncfusion Essential JS 2 and more.
control: Drag and drop 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in Vue File manager component

The File manager allows files or folders to be moved from one folder to another by using the  [allowDragAndDrop](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#allowdraganddrop) property. It also supports uploading files by dragging them from Windows Explorer to the File manager control. You can enable or disable this feature by using the [allowDragAndDrop](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#allowdraganddrop) property.

The events triggered during drag and drop operations are:

* [fileDragStart](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#filedragstart) - Triggered when dragging a file or folder begins.
* [fileDragging](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#filedragging) - Triggered while a file or folder is being dragged.
* [fileDragStop](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#filedragstop) - Triggered when a file or folder is about to be dropped on the target..
* [fileDropped](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#filedropped) - Triggered when a file or folder is dropped.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/drag-and-drop-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/drag-and-drop-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/drag-and-drop-cs1" %}