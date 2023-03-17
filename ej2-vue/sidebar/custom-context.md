---
layout: post
title: Custom context in Vue Sidebar component | Syncfusion
description: Learn here all about Custom context in Syncfusion Vue Sidebar component of Syncfusion Essential JS 2 and more.
control: Custom context 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Custom context in Vue Sidebar component

Sidebar has a flexible option to make it initialize, target to any HTML element alongside of the main content of a web page.

By default, Sidebar initializes target to the body element. Using the [target](https://ej2.syncfusion.com/vue/documentation/api/sidebar#target) property, set target element to initialize the Sidebar inside any HTML element apart from the body element.

> If required , `zIndex` can be set when sidebar act as overlay type.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/sidebar/position-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/position-cs1" %}