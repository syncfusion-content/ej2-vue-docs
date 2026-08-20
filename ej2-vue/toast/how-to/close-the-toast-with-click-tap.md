---
layout: post
title: How to close the toast with click/tap in Vue Toaster | Syncfusion
description: Close the Vue Toaster on click or tap instead of waiting for the timeout by setting clickToClose in the clicked event callback.
control: Close the toast with click tap 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to close the toast with click/tap in Vue Toaster

By default, the toasts are expired based on the timeOut value. You can customize the toast hiding process with click/tap action by setting the event args in the [clicked](https://ej2.syncfusion.com/vue/documentation/api/toast/toastClickEventArgs#clicktoclose) callback function with [static Toast](../timeout#static-toast).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toast/how-to/close-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toast/how-to/close-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/how-to/close-cs1" %}