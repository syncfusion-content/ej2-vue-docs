---
layout: post
title: Z-order in Vue Image editor component | Syncfusion
description: Learn here all about Toolbar in Syncfusion Vue Image editor component of Syncfusion Essential JS 2 and more.
control: Toolbar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Z-order in the Vue Image Editor component

Users can define their own toolbars for an image editor by customizing the items or the entire toolbar. Users can achieve this by using the [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbar) property.

The built-in toolbar can be customized using the [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbar) property, so the specified toolbar items can be enabled in the Image Editor toolbar. And the contextual toolbar which is enabled while inserting annotations can also be customized in the [`toolbarUpdating`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbarupdating) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs46/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs46/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs46" %}