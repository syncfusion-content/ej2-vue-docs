---
layout: post
title: Prevent duplicate toast display in Vue Toast component | Syncfusion
description: Learn here all about Prevent duplicate toast display in Syncfusion Vue Toast component of Syncfusion Essential JS 2 and more.
control: Prevent duplicate toast display 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Prevent duplicate toast display in Vue Toast component

You can prevent identical same toast displaying in a screen by the event function and terminate the toast displaying process by setting the cancel event property in the [`beforeOpen`](https://ej2.syncfusion.com/vue/documentation/api/toast/#beforeopen) event.

The following sample demonstrates preventing duplicate title toast element displaying with custom code blocks.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toast/how-to/duplicate-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toast/how-to/duplicate-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/how-to/duplicate-cs1" %}