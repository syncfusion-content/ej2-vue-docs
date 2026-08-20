---
layout: post
title: How to restrict the maximum toast to show in Vue Toaster | Syncfusion
description: Limit the number of toasts visible at once in the Vue Toaster by canceling the beforeOpen event when the max count is reached.
control: Restrict the maximum toast to show 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to restrict the maximum toast to show in Vue Toaster

You can restrict the maximum toast count by using the event callback function and terminate the toast displaying process by setting the cancel event property in the [`beforeOpen`](https://ej2.syncfusion.com/vue/documentation/api/toast/#beforeopen) event.

The following sample demonstrates restricting toast displaying up to 3. You can restrict by your own count with custom code blocks.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toast/how-to/maximum-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toast/how-to/maximum-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/how-to/maximum-cs1" %}