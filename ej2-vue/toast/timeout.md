---
layout: post
title: Timeout in Vue Toast component | Syncfusion
description: Learn here all about Timeout in Syncfusion Vue Toast component of Syncfusion Essential JS 2 and more.
control: Timeout 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Timeout in Vue Toast component

The toast can be expired based on the [`timeOut`](https://ej2.syncfusion.com/vue/documentation/api/toast/#timeout) property. The toast can live till the time out reaches without user interaction, a time out value is considered as a millisecond.

* The [timeOut](https://ej2.syncfusion.com/vue/documentation/api/toast/#timeout) delay can be visually represented using [`Progress Bar`](./config/#progress-bar).

* The [`extendedTimeOut`](https://ej2.syncfusion.com/vue/documentation/api/toast/#extendedtimeout) property determines how long the toast should be displayed after a user hovers over it.

> You can terminate the process by using the [showCloseButton](https://ej2.syncfusion.com/vue/documentation/api/toast/#showclosebutton) property for destroying the toast at any time.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toast/time-out/time-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toast/time-out/time-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/time-out/time-cs1" %}

## Static toast

You can prevent auto hiding in a toast as visible like static by setting zero (`0`) value in the [timeOut](https://ej2.syncfusion.com/vue/documentation/api/toast/#timeout) Property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toast/time-out/static-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toast/time-out/static-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/time-out/static-cs1" %}

## See Also

* [Hide the toast on click](./how-to/close-the-toast-with-click-tap)