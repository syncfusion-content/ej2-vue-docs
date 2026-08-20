---
layout: post
title: How to render fixed Sidebar in Vue Sidebar | Syncfusion
description: Render the Vue Sidebar with a fixed position so it stays in place while the main content area scrolls, using the default position styling of the component.
control: Fixed sidebar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to render fixed Sidebar in Vue Sidebar

The Sidebar does not require any specific style to make it fixed. By default, the Sidebar position is fixed. The following example demonstrates that the Sidebar is rendered with a fixed position. The Sidebar's position remains constant when scrolling the main content area.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sidebar/fixed-position-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sidebar/fixed-position-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/fixed-position-cs1" %}