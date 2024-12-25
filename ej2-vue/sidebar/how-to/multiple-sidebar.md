---
layout: post
title: Multiple sidebar in Vue Sidebar component | Syncfusion
description: Learn here all about Multiple sidebar in Syncfusion Vue Sidebar component of Syncfusion Essential JS 2 and more.
control: Multiple sidebar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Multiple sidebar in Vue Sidebar component

Two Sidebars can be initialized on a web page with the same main content. Sidebars can be initialized on the right side or left side of the main content using the [position](https://ej2.syncfusion.com/vue/documentation/api/sidebar/#position) property.

>The HTML element with the class name `e-main-content` will be considered as the main content, and both sidebars will behave as side content to this main content area.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sidebar/howto-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sidebar/howto-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/howto-cs1" %}