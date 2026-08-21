---
layout: post
title: How to render custom tooltip with HTML in Vue Tooltip | Syncfusion
description: Render custom Vue Tooltip content with HTML tags like iframe, video, and map via the content property to load external HTML pages inside the tooltip.
control: Custom tooltip with dynamic html 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to render custom tooltip with HTML in Vue Tooltip

Tooltip loads HTML pages via the HTML tags such as iframe, video, and map using the [`content`](https://ej2.syncfusion.com/vue/documentation/api/tooltip/#content) property, which supports both string and HTML tags.

To load an `iframe` element in tooltip, set the required iframe in the `content` property while initializing the tooltip component. Refer to the following code:

```ts

content= '<iframe src="https://ej2.syncfusion.com/showcase/typescript/expensetracker/#/dashboard"></iframe>

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/iframe-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/iframe-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/iframe-cs1" %}