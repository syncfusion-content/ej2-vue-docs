---
layout: post
title: Value Sorting in Vue Pivot Table | Syncfusion
description: Learn how the Vue Pivot Table sorts individual value columns via enableValueSorting and valueSortSettings, with header text and delimiter controls.
control: Value sorting 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Value Sorting in Vue Pivot Table

Value sorting allows you to sort individual column based on it's values either in ascending or descending order. It can been enabled by setting the `enableValueSorting` property to **true**. You can sort the column values by clicking the column header.

Value sorting can be configured using the `valueSortSettings` option through code behind. The settings required to sort value fields at initial rendering are:
* `headerText`: It allows to set the column header names with delimiters, that is used for value sorting.
* `headerDelimiter`: It allows to set the delimiters string to separate the given header text.
* `sortOrder`: It allows to set the sort direction of the value field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs259/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs259/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs259" %}

## See Also

* [Sorting](./sorting)