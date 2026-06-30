---
layout: post
title: Customization in Vue File Manager component | Syncfusion
description: Learn how to customize the File Manager component's behavior and appearance in Vue using available APIs.
control: File Manager 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Vue File Manager component

The [Vue File Manager](https://www.syncfusion.com/vue-components/vue-file-manager) component allows customization of its functionality and UI—such as the context menu, searching, uploading, and toolbar—using public APIs. The following topics describe customization options:

* [Context menu customization](#context-menu-customization)
* [Details view customization](#details-view-customization)
* [Navigation pane customization](#navigation-pane-customization)
* [Show/Hide file extension](#showhide-file-extension)
* [Show/Hide hidden items](#showhide-hidden-items)
* [Show/Hide thumbnail images in large icons view](#showhide-thumbnail-images-in-large-icons-view)
* [Toolbar customization](#toolbar-customization)
* [Upload customization](#upload-customization)
* [Tooltip customization](#tooltip-customization)

## Context menu customization

Customize the context menu items shown for files, folders, and layout clicks using the [contextMenuSettings](https://ej2.syncfusion.com/vue/documentation/api/file-manager#contextmenusettings) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/contextmenu-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/contextmenu-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/contextmenu-cs1" %}

## Details view customization

Configure details view columns (header text, width, templates, formats) using the [detailsViewSettings](https://ej2.syncfusion.com/vue/documentation/api/file-manager#detailsviewsettings) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/detailsview-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/detailsview-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/detailsview-cs1" %}

## Navigation pane customization

Control navigation pane behavior—such as minimum/maximum width, visibility, and sort order—using the [navigationPaneSettings](https://ej2.syncfusion.com/vue/documentation/api/file-manager#navigationpanesettings) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/navigationpane-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/navigationpane-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/navigationpane-cs1" %}

## Show/Hide file extension

File extensions are displayed by default. Disable them by setting the [showFileExtension](https://ej2.syncfusion.com/vue/documentation/api/file-manager#showfileextension) property to `false`.

The [fileLoad](https://ej2.syncfusion.com/vue/documentation/api/file-manager#fileload) and [fileOpen](https://ej2.syncfusion.com/vue/documentation/api/file-manager#fileopen) events fire before a file/folder is rendered and before a file/folder is opened, respectively. Use these events to perform operations prior to rendering or opening.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/fileextension-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/fileextension-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/fileextension-cs1" %}

## Show/Hide hidden items

Show or hide hidden files and folders by toggling the [showHiddenItems](https://ej2.syncfusion.com/vue/documentation/api/file-manager#showhiddenitems) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/hiddenitems-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/hiddenitems-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/hiddenitems-cs1" %}

## Show/Hide thumbnail images in large icons view

Thumbnails are displayed by default in the large icons view. Disable them by setting the [showThumbnail](https://ej2.syncfusion.com/vue/documentation/api/file-manager#showthumbnail) property to `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/disablethumbnail-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/disablethumbnail-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/disablethumbnail-cs1" %}

## Toolbar customization

Customize toolbar items and their visibility using the [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/file-manager#toolbarsettings) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/toolbar-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/toolbar-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/toolbar-cs1" %}

### See Also

* [How to add new items or customize default items](https://ej2.syncfusion.com/vue/documentation/file-manager/how-to/adding-custom-item-to-toolbar)

## Upload customization

Configure upload behavior (min/max file size, `autoUpload`, allowed extensions, sequential uploads, etc.) using the [uploadSettings](https://ej2.syncfusion.com/vue/documentation/api/file-manager#uploadsettings) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/upload-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/upload-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/upload-cs1" %}

## Tooltip customization

The tooltip value can be customized by adding extra content to the title of the toolbar, navigation pane, details view and large icons of the File Manager element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/tooltip-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/tooltip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/tooltip-cs1" %}

## Maintaining component state on page reload

The File Manager supports maintaining the component state on page reload. This can be achieved by enabling [enablePersistence](https://ej2.syncfusion.com/vue/documentation/api/file-manager#enablepersistence) property which maintains the following,
* Previous view of the File Manager - [View](https://ej2.syncfusion.com/vue/documentation/api/file-manager#view)
* Previous path of the File Manager - [Path](https://ej2.syncfusion.com/vue/documentation/api/file-manager#path)
* Previous selected items of the File Manager - [SelectedItems](https://ej2.syncfusion.com/vue/documentation/api/file-manager#selecteditems)

For every operation in File Manager, ajax request will be sent to the server which then processes the request and sends back the response. When the ajax request is success, [success](https://ej2.syncfusion.com/vue/documentation/api/file-manager#success) event will be triggered and [failure](https://ej2.syncfusion.com/vue/documentation/api/file-manager#failure) event will be triggered if the request gets failed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/persistence-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/persistence-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/persistence-cs1" %}

>**Note:** The files of the current folder opened in the File Manager can be refreshed programmatically by calling [refreshFiles](https://ej2.syncfusion.com/vue/documentation/api/file-manager#refreshfiles) method.

## Specifying the current path of the File Manager

The current path of the File Manager can be specified initially or dynamically using the [path](https://ej2.syncfusion.com/vue/documentation/api/file-manager#path) property.

The following code snippet demonstrates specifying the current path in File Manager on rendering.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :path="path" :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>
<script setup>
    import { provide } from "vue";
    import { FileManagerComponent as EjsFilemanager, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

    const ajaxSettings =
    {
        url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations",
        getImageUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage",
        uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload",
        downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download"
    };
    // Initial view of File Manager is set to details view
    const view = "Details";
    // Specify the required current path
    const path: '/Pictures/Employees';
    provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}

<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :path="path" :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>
<script>
    import { FileManagerComponent, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";
    export default {
    name: "App",
    components: {
    "ejs-filemanager":FilemanagerComponent,
    },
        data () {
            return {
            ajaxSettings:
                {
                    url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations",
                    getImageUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage",
                    uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload",
                    downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download"
                },
                // Initial view of File Manager is set to details view
                view: "Details",
                // Specify the required current path
                path: '/Pictures/Employees'
            };
        },
        provide: {
                filemanager: [DetailsView, NavigationPane, Toolbar]
        }
    }
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>

{% endhighlight %}
{% endtabs %}