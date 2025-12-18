---
layout: post
title: Views in Vue File Manager component | Syncfusion
description: Learn here all about Views in Syncfusion Vue File Manager component of Syncfusion Essential JS 2 and more.
control: Views 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Views in Vue File Manager component

View is the section where the files and folders are displayed for the user to browse. The [view](https://ej2.syncfusion.com/vue/documentation/api/file-manager/index-default#view) API can also be used to change the initial view of the File Manager.

 The File Manager has two types of [views](https://ej2.syncfusion.com/vue/documentation/api/file-manager/index-default#view) to display the files and folders.

* [LargeIcons View](#largeicons-view)
* [Details View](#details-view)

## LargeIcons View

By Default, File Manager is rendered with **LargeIcons** view. The following example demonstrates this.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/detailsview-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/detailsview-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/detailsview-cs2" %}

### Customize existing Large Icons View

The large icons view layout can be customized using the `largeIconsTemplate` property, which allows you to display file or folder information, apply custom formatting, and use conditional rendering based on item type. You can customize it further based on your application requirements.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/large-icon-view-template/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/large-icon-view-template/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/large-icon-view-template" %}

## Details View

The **DetailsView** is an injectable module in the File Manager so, it should be injected before rendering the File Manager to avail its functionality. The default appearance of the File Manager can be changed from large icons to details view by using the [view](https://ej2.syncfusion.com/vue/documentation/api/file-manager/index-default#view) property. The following example demonstrates the File Manager with the **Details** view.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/detailsview-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/detailsview-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/detailsview-cs3" %}