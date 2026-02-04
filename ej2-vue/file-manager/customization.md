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

The File Manager component allows customization of its functionality and UI—such as the context menu, searching, uploading, and toolbar—using public APIs. The following topics describe customization options:

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