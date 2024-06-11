---
layout: post
title: Customize selected tab styles in Vue Tab component | Syncfusion
description: Learn here all about Customize selected tab styles in Syncfusion Vue Tab component of Syncfusion Essential JS 2 and more.
control: Customize selected tab styles 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize selected tab styles in Vue Tab component

You can customize the Tab style by overriding its header and active tab CSS classes. Define HTML string for adding animation and customizing
the Tab header and pass it to [`text`](https://ej2.syncfusion.com/vue/documentation/api/tab/header#text) property. Now you can override the style using custom CSS classes added to
the Tab elements.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/customize-tab-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/customize-tab-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/how-to/customize-tab-cs1" %}