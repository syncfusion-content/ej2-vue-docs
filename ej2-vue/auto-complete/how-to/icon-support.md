---
layout: post
title: How to show list items with icons in Vue AutoComplete | Syncfusion
description: Render icons on each Syncfusion Vue AutoComplete item by mapping the iconCss field to a CSS class on a span inside the list item.
control: Icon support 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to show list items with icons in Vue AutoComplete

You can render icons to the list items by mapping the [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete#fields) field. This iconCss field create a span in the list item with mapped class name to allow styling as per your need.

In the following sample, the icon classes are mapped with iconCss field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs17/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs17" %}