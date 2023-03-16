---
layout: post
title: Filtering in Vue Grid component | Syncfusion
description: Learn here all about Filtering in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Filtering 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Vue Grid component

Filtering allows you to view particular records based on filter criteria. To enable filtering in the Grid, set the [`allowFiltering`](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowfiltering) to true.
Filtering options can be configured through [`filterSettings`](https://ej2.syncfusion.com/vue/documentation/api/grid/filterSettings/).

To use filter, inject `Filter` module in the `provide` section.

To get start quickly with Filtering Options, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=-fgRb6tVNaE" %}

<!-- The Grid supports three types of filter, they are
* Filter bar
* Excel
* Checkbox -->

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/filter/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter/default-cs8" %}

> * You can apply and clear filtering, by using [`filterByColumn`](https://ej2.syncfusion.com/vue/documentation/api/grid/filter/#filterbycolumn) and [`clearFiltering`](https://ej2.syncfusion.com/vue/documentation/api/grid/filter/#clearfiltering) methods.
> * To disable Filtering for a particular column, by specifying [`columns.allowFiltering`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#allowfiltering) to false.

## Initial filter

To apply the filter at initial rendering, set the filter [`predicate`](https://ej2.syncfusion.com/vue/documentation/api/grid/predicate/) object in [`filterSettings.columns`](https://ej2.syncfusion.com/vue/documentation/api/grid/filterSettingsModel/#columns).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/filter/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter/default-cs9" %}

## Filter operators

The filter operator for a column can be defined in [`filterSettings.columns.operator`](https://ej2.syncfusion.com/vue/documentation/api/grid/predicateModel/#operator) property.

The available operators and its supported data types are,

Operator |Description |Supported Types
-----|-----|-----
startsWith |Checks whether a value begins with the specified value. |String
endsWith |Checks whether a value ends with specified value. |String
contains |Checks whether a value contains with specified value. |String
equal |Checks whether a value equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
notEqual |Checks whether a value not equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
greaterThan |Checks whether a value is greater than with specified value. |Number &#124; Date
greaterThanOrEqual|Checks whether a value is greater than or equal to specified value. |Number &#124; Date
lessThan |Checks whether a value is less than with specified value. |Number &#124; Date
lessThanOrEqual |Checks whether a value is less than or equal to specified value. |Number &#124; Date
between|Filter the values based on the range between the start and end specified values. |Number &#124; Date

> By default, the [`filterSettings.columns.operator`](https://ej2.syncfusion.com/vue/documentation/api/grid/predicateModel/#operator) value is **equal**.

## Diacritics filter

By default, grid ignores diacritic characters while filtering. To include diacritic characters, set the [`filterSettings.ignoreAccent`](https://ej2.syncfusion.com/vue/documentation/api/grid/filterSettings/#ignoreaccent) as **true**.

In the following sample, type **mun** in **Ship City** column to filter diacritic characters.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/filter/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter/default-cs10" %}

## See Also

* [Hide sorting options on Excel filter Dialog](../how-to/hide-sorting-in-excel-filter)