---
layout: post
title: How to render multiple Sidebars in Vue Sidebar | Syncfusion
description: Initialize two Vue Sidebar panels on the left and right of the same main content using the position property for dual-panel navigation layouts.
control: Multiple sidebar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to render multiple Sidebars in Vue Sidebar

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