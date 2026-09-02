---
layout: post
title: Grouping in Vue AutoComplete | Syncfusion
description: Group Syncfusion Vue AutoComplete items into inline or fixed headers by mapping the groupBy field, with dynamic updates on scroll.
control: Grouping 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Vue AutoComplete

The AutoComplete supports wrapping nested elements into a group based on different categories. The category of each list item can be mapped through the [`groupBy`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete#groupby) field in the data table. The group header is displayed as both inline and fixed headers. The fixed group header content is updated dynamically on scrolling the suggestion list with its category value.

To group the Vue AutoComplete items, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=7YycZgH89lk" %}

In the following sample, vegetables are grouped according to their category using groupBy field. The data should be sorted by the groupBy field for the grouping to render correctly.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs14/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs14" %}

## See also

* [Group Template support to AutoComplete](./templates#group-template).