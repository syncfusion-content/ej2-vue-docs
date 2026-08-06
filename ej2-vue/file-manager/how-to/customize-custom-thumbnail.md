---
layout: post
title: Customize thumbnails in Vue File Manager | Syncfusion
description: Learn how to customize thumbnails in the Vue File Manager by adding your own icons for file types and folders in the LargeIcons view.
control: File Manager
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to customize thumbnails in Vue File Manager

The File Manager's default appearance can be customized by providing a custom icon using the [showThumbnail](https://ej2.syncfusion.com/vue/documentation/api/file-manager#showthumbnail) property.

The following example demonstrates how to add a custom icon in the Large Icons view.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/custom-thumbnail-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/custom-thumbnail-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/custom-thumbnail-cs1" %}