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

Sidebar has a flexible option to initialize and target any HTML element alongside the main content of a web page.

By default, Sidebar initializes target to the body element. Using the [target](https://ej2.syncfusion.com/vue/documentation/api/sidebar/#target) property, you can set a target element to initialize the Sidebar inside any HTML element apart from the body element.

> If required , `zIndex` can be set when the sidebar acts as an overlay type.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sidebar/position-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sidebar/position-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/position-cs1" %}