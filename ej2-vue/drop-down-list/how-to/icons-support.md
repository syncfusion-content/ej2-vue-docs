---
layout: post
title: How to show list items with icons in Vue Dropdown List | Syncfusion
description: Render icons on each Syncfusion Vue Dropdown List item by mapping the iconCss field to a CSS class on a span inside the list item.
control: Icons support 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to show list items with icons in Vue Dropdown List

You can render **icons** in the list items by mapping the [iconCss](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#fields) field. The `iconCss` field creates a span in the list item with the mapped class name to allow styling as per your need.

In the following sample, icon classes are mapped with the `iconCss` field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/icons-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/icons-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/how-to/icons-cs1" %}