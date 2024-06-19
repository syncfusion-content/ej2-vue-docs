---
layout: post
title: Sorting in Vue MultiColumn Combobox component | Syncfusion
description: Checkout and learn about Sorting in Vue MultiColumn Combobox component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: MultiColumn ComboBox
documentation: ug
domainurl: ##DomainURL##
---

# Sorting in Vue MultiColumn ComboBox component

The MultiColumn ComboBox component provides built-in support for sorting data-bound columns in ascending or descending order by using the [allowSorting](../api/multicolumn-combobox#allowsorting) property. By default, the value is `true`.

To sort a particular column in the MultiColumn ComboBox, click on the grid column header in the popup. Each click on the header toggles the sorting order of the column between `Ascending` and `Descending`.

## Setting the sort order

You can use the [sortOrder](../api/multicolumn-combobox#sortorder) property to set the order of the column. It supports three types of sorting `None`, `Ascending` and `Descending`.

When you click on a column header for the first time, it sorts the column in ascending order. Clicking the same column header again will sort the column in descending order. A repetitive third click on the same column header will clear the sorting.

In the following examples, data sorting is done with `Descending` order.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/sorting/sortOrder/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/sorting/sortOrder/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/sorting/sortOrder" %}

## Sort type

You can use the [sortType](../api/multicolumn-combobox#sorttype) property to set the type of sorting applied to the columns. It supports tow types `OneColumn` and `MultipleColumns`. By default the `sortType` is oneColumn.

To sort multiple columns press and hold the CTRL key and click on the column headers. This feature is useful when you want to sort your data based on multiple criteria to analyze it in various ways.

In the following examples, data sorting type is set with `MultipleColumns`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/sorting/sortType/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/sorting/sortType/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/sorting/sortType" %}
