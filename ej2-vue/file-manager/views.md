---
layout: post
title: Views in Vue File manager component | Syncfusion
description: Learn here all about Views in Syncfusion Vue File manager component of Syncfusion Essential JS 2 and more.
control: Views 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Views in Vue File manager component

View is the section where the files and folders are displayed for the user to browse. The [view](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#view) API can also be used to change the initial view of the file manager.

 The file manager has two types of [views](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#view) to display the files and folders.

* [LargeIcons View](#largeicons-view)
* [Details View](#details-view)

## LargeIcons View

By Default, File Manager is rendered with largeicons view. The following example demonstrate this.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/detailsview-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/detailsview-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/detailsview-cs2" %}

## Details View

Details view is an injectable module in the file manager so, it should be injected before rendering the file manager to avail its functionality. The default appearance of the file manager can be changed from largeicons to details view by using the [view](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#view) property. The following example demonstrate the file manager with details view.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/detailsview-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/detailsview-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/detailsview-cs3" %}