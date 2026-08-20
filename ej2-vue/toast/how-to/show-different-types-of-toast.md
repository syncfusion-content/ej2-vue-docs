---
layout: post
title: How to show different types of toast in Vue Toaster | Syncfusion
description: Show different toast types in the Vue Toaster using the cssClass property to apply predefined styles for each scenario.
control: Show different types of toast 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to show different types of toast in Vue Toaster

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 toast has the following predefined styles that can be defined using the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/toast/#cssclass) property for achieving different types of toast:

| Class | Description |
| -------- | -------- |
| e-toast-success | Represents a positive toast |
| e-toast-info | Represents an informative toast |
| e-toast-warning | Represents a toast with caution |
| e-toast-danger | Represents a negative toast |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toast/how-to/different-toast-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toast/how-to/different-toast-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/how-to/different-toast-cs1" %}