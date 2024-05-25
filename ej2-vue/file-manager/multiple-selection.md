---
layout: post
title: Multiple selection in Vue File manager component | Syncfusion
description: Learn here all about Multiple selection in Syncfusion Vue File manager component of Syncfusion Essential JS 2 and more.
control: Multiple selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Multiple selection in Vue File manager component

The file manager allows you to select multiple files by enabling the [allowMultiSelection](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#allowmultiselection) property (enabled by default). The multiple selection can be done by pressing the `Ctrl` key or `Shift` key and selecting the files. The check box can also be used to do multiple selection. `Ctrl + A` can be used to select all files in the current directory. The [fileSelect](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#fileselect) event will be triggered when the items of file manager control is selected or unselected.

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