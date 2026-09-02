---
layout: post
title: How to show list items with icons in Vue AutoComplete | Syncfusion
description: Render icons on each Syncfusion Vue AutoComplete item by mapping the iconCss field to a CSS class on a span inside the list item.
control: Icon support 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to Show List Items with Icons in Vue AutoComplete

You can render icons on the list items by mapping the [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete#fields) field. This iconCss field creates a span in the list item with the mapped class name, allowing styling as needed.

In the following sample, the icon classes are mapped using the `iconCss` field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs17/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs17" %}