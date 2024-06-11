---
layout: post
title: Custom tooltip with dynamic html in Vue Tooltip component | Syncfusion
description: Learn here all about Custom tooltip with dynamic html in Syncfusion Vue Tooltip component of Syncfusion Essential JS 2 and more.
control: Custom tooltip with dynamic html 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Custom tooltip with dynamic html in Vue Tooltip component

Tooltip loads HTML pages via HTML tags such as iframe, video, and map using the [`content`](https://ej2.syncfusion.com/vue/documentation/api/tooltip/#content) property, which supports both string and HTML tags.

To load an `iframe` element in tooltip, set the required iframe in the `content` of tooltip while initializing the tooltip component. Refer to the following code.

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