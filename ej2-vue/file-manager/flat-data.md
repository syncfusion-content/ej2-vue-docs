---
layout: post
title: Flat Data in Vue File manager component | Syncfusion
description: Learn here all about Flat Data in Syncfusion Vue File manager component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: FlatData 
documentation: ug
domainurl: ##DomainURL##
---

# Rendering Flat JSON Data in the Vue File Manager Component

The File Manager uses a flat data JSON as an array of objects for rendering, eliminating the need to define [ajaxSettings](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#ajaxsettings) url. To load a folder data as an array of objects, use the File Manager component's [fileSystemData](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#filesystemdata) property with a type of [fileData](https://ej2.syncfusion.com/vue/documentation/api/file-manager/fileData/) interface. This means you no longer need to use a separate service provider, as you can integrate services like Google, Amazon, Azure, and others directly into your code using the FileManager's action events.

**Event Information**

Event Name | Description
 ---  | ---
[beforeDelete](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#beforedelete) | This event is triggered before the deletion of a file or folder occurs. It can be utilized to prevent the deletion of specific files or folders. Any actions, such as displaying a spinner for deletion, can be implemented here.
[delete](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#delete) | DeleteEventArgs | path, itemData, cancel. | This event is triggered after the file or folder is deleted successfully. The deleted file or folder details can be retrieved here. Additionally, custom elements' visibility can be managed here based on the application's use case.
[beforeFolderCreate](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#beforefoldercreate) | This event is triggered before a folder is created. It allows for the restriction of folder creation based on the application's use case.
[folderCreate](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#foldercreate) | This event is triggered when a folder is successfully created. It provides an opportunity to retrieve details about the newly created folder.
[search](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#search) | This event is triggered when a search action occurs in the search bar of the File Manager component. It triggers each character entered in the input during the search process.
[beforeRename](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#beforerename) | This event is triggered when a file or folder is about to be renamed. It allows for the restriction of the rename action for specific folders or files by utilizing the cancel option.
[rename](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#rename) | This event is triggered when a file or folder is successfully renamed. It provides an opportunity to fetch details about the renamed file.
[beforeMove](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#beforemove) | This event is triggered when a file or folder begins to move from its current path through a copy/cut and paste action.
[move](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#move) | This event is triggered when a file or folder is pasted into the destination path.

## Local data

The FileManager can be populated with local data that contains the array of [fileData](https://ej2.syncfusion.com/vue/documentation/api/file-manager/fileData/) interface objects with [parentId](https://ej2.syncfusion.com/vue/documentation/api/file-manager/fileData/#parentid) mapping.

To render the root-level folder, specify the `parentId` as null, or there is no need to specify the `parentId` in the array of `fileData` interface objects.


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/flat-data-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/flat-data-cs1" %}

