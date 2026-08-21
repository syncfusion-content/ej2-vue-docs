---
layout: post
title: How to load dynamic HTML content in Vue Tooltip | Syncfusion
description: Load HTML tags such as div, span, bold, italic, and underline into the Vue Tooltip content template and apply style attributes for rich formatted display.
control: Dynamic tooltip content with html elements 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to load dynamic HTML content in Vue Tooltip

The Tooltip component loads HTML tags using the [content](https://ej2.syncfusion.com/vue/documentation/api/tooltip/#content) template.

HTML tags such as `<div>`, `<span>`, `bold`, `italic`, `underline`, etc., can be used. Style attributes can also be applied to these HTML tags.

Here, the Bold, Italic, Underline, and Anchor tags are used.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/tags-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/tags-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/tags-cs1" %}