---
layout: post
title: How to customize selected tab styles in Vue Tabs | Syncfusion
description: Apply custom CSS classes or styles to the active or selected Vue Tabs item using the cssClass property and e-active CSS class overrides.
control: Customize selected tab styles 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to customize selected tab styles in Vue Tabs

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