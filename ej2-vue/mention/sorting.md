---
layout: post
title: Sorting in Vue Mention | Syncfusion
description: Display Syncfusion Vue Mention suggestions in None, Ascending, or Descending order by setting the sortOrder property on the data source.
control: Sorting 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Sorting in Vue Mention

You can display the suggestions list items in a specific order. It has possible types as `Ascending`, `Descending`, and `None` in the [sortOrder](https://ej2.syncfusion.com/vue/documentation/api/mention/#sortorder) property.

* `None` - The data source is not sorted.
* `Ascending` - The data source is sorted in ascending order.
* `Descending` - The data source is sorted in descending order.

In the following sample, the popup list data is rendered in `Descending` order.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/mention/sorting-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/mention/sorting-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/sorting-cs1" %}