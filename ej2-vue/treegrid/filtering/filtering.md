---
layout: post
title: Filtering in Vue Treegrid component | Syncfusion
description: Learn here all about Filtering in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Filtering 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Vue Treegrid component

Filtering allows you to view specific or related records based on filter criteria. To enable filtering in the TreeGrid, set the [`allowFiltering`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#allowfiltering) to true. Filtering options can be configured through [`filterSettings`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#filtersettings).

To use filter, inject the `Filter` module in the treegrid.

To get start quickly with filtering options, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=sTDENvq2bVE" %}

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/filtering/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/filtering/default-cs6" %}

> * You can apply and clear filtering by using [`filterByColumn`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#filterbycolumn) and [`clearFiltering`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#clearfiltering) methods.
> * To disable filtering for a particular column, set
[`columns.allowFiltering`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#allowfiltering) to false.

## Filter hierarchy modes

TreeGrid provides support for a set of filtering modes with [`filterSettings.filterHierarchyMode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/filterSettingsModel/#hierarchymode) property.
The below are the type of filter mode available in TreeGrid.

* **Parent** : This is the default filter hierarchy mode in TreeGrid. The filtered records are displayed with its parent records, if the filtered records not have any parent record then the filtered records only displayed.

* **Child** : The filtered records are displayed with its child record, if the filtered records not have any child record then the filtered records only displayed.

* **Both** : The filtered records are displayed with its both parent and child record, if the filtered records not have any parent and child record then the filtered records only displayed.

* **None** : The filtered records are only displayed.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/filtering/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/filtering/default-cs7" %}

## Initial filter

To apply the filter at initial rendering, set the filter `predicate` object in
[`filterSettings.columns`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/filterSettingsModel/#columns).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/filtering/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/filtering/default-cs8" %}

## Filter operators

The filter operator for a column can be defined in the `filterSettings.columns.operator` property.

The available operators and its supported data types are:

Operator |Description |Supported Types
-----|-----|-----
startswith |Checks whether the value begins with the specified value. |String
endswith |Checks whether the value ends with the specified value. |String
contains |Checks whether the value contains the specified value. |String
equal |Checks whether the value is equal to the specified value. |String &#124; Number &#124; Boolean &#124; Date
notequal |Checks for values not equal to the specified value. |String &#124; Number &#124; Boolean &#124; Date
greaterthan |Checks whether the value is greater than the specified value. |Number &#124; Date
greaterthanorequal|Checks whether a value is greater than or equal to the specified value. |Number &#124; Date
lessthan |Checks whether the value is less than the specified value. |Number &#124; Date
lessthanorequal |Checks whether the value is less than or equal to the specified value. |Number &#124; Date

> By default, the `filterSettings.columns.operator` value is `equal`.

### Change default filter operator

You can change the default filter operator by extending `filterModule.filterOperators`property in [`dataBound`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#databound) event. In the following sample, we have changed the default operator for string typed columns as `contains` from `startsWith`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/filtering/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/filtering/default-cs9" %}

## Diacritics

By default, treegrid ignores diacritic characters while filtering. To include diacritic characters, set the
[`filterSettings.ignoreAccent`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/filterSettingsModel/#ignoreaccent) as `true`.

In the following sample, type **aero** in `Name` column to filter diacritic characters.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/filtering/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/filtering/default-cs10" %}