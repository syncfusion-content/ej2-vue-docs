---
layout: post
title: Multiple selection in Vue File Manager component | Syncfusion
description: Learn here all about Multiple selection in Syncfusion Vue File Manager component of Syncfusion Essential JS 2 and more.
control: Multiple selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Multiple selection in Vue File Manager component

The File Manager allows you to select multiple files by enabling the [allowMultiSelection](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#allowmultiselection) property (enabled by default). The multiple selection can be done by pressing the `Ctrl` key or `Shift` key and selecting the files. The check box can also be used to do multiple selection. `Ctrl + A` can be used to select all files and folders in the current directory. The [fileSelect](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#fileselect) event is triggered when the items of File Manager component is selected or unselected.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/multiselect-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/multiselect-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/multiselect-cs1" %}

>Note: The File Manager has support to select files and folders initially or dynamically by specifying their names in [selectedItems](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#selecteditems) property.

## Range Selection

The File Manager supports selecting files and folders in specific ranges using mouse drag, similar to File Explorer. This is particularly useful in scenarios where users need to select a large group of files quickly without manually clicking each one. 

### Enabling Range Selection

To enable range selection, you need to set the [enableRangeSelection](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#enableRangeSelection) property to `true` and ensure that multi-selection is allowed using the [allowMultiSelection](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#allowmultiselection) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/rangeselection-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/rangeselection-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/rangeselection-cs1" %}