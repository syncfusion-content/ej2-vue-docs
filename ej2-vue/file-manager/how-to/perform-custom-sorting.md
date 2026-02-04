---
layout: post
title: Perform custom sorting in Vue FileManager component | Syncfusion
description: Learn here all about How to perform custom sorting in Syncfusion Vue FileManager component of Syncfusion Essential JS 2 and more.
control: File Manager 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Perform custom sorting in Vue FileManager component

The FileManager component provides a way to customize the default sort action for the LargeIconsView by defining the [sortComparer](https://ej2.syncfusion.com/vue/documentation/api/file-manager#sortcomparer) property and for sorting individual columns in the DetailsView by defining the [sortComparer](https://ej2.syncfusion.com/vue/documentation/api/file-manager/column#sortcomparer) property in the [columns](https://ej2.syncfusion.com/vue/documentation/api/file-manager/column) property.

>Note: To achieve natural sorting like Windows Explorer, you can import the `SortComparer` function from the `'@syncfusion/ej2-vue-filemanager'`. If you want to perform your own custom sorting, you can define your own `SortComparer` function.

The following example demonstrates how to define custom sort comparer function to achieve natural sorting behavior for the LargeIconsView and name column in DetailsView.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/customsorting-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/customsorting-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/customsorting-cs1" %}