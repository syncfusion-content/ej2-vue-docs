---
layout: post
title: Grouping in Vue Auto complete component | Syncfusion
description: Learn here all about Grouping in Syncfusion Vue Auto complete component of Syncfusion Essential JS 2 and more.
control: Grouping 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Vue Auto complete component

The AutoComplete supports wrapping nested elements into a group based on different categories. The category of each list item can be mapped through the [`groupBy`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/#groupby) field in the data table. The group header is displayed as both inline and fixed headers. The fixed group header content is updated dynamically on scrolling the suggestion list with its category value.

To group the Vue AutoComplete items, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=7YycZgH89lk" %}

In the following sample, vegetables are grouped according on its category using groupBy field.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/auto-complete/getting-started-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs14" %}

## See Also

* [Group Template support to AutoComplete](./templates#group-template).