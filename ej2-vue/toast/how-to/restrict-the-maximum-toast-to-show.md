---
layout: post
title: Restrict the maximum toast to show in Vue Toast component | Syncfusion
description: Learn here all about Restrict the maximum toast to show in Syncfusion Vue Toast component of Syncfusion Essential JS 2 and more.
control: Restrict the maximum toast to show 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Restrict the maximum toast to show in Vue Toast component

You can restrict the maximum toast count by using the event callback function and terminate the toast displaying process by setting the cancel event property in the [`beforeOpen`](https://ej2.syncfusion.com/vue/documentation/api/toast/#beforeopen) event.

The following sample demonstrates restricting toast displaying up to 3. You can restrict by your own count with custom code blocks.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/toast/how-to/maximum-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/how-to/maximum-cs1" %}