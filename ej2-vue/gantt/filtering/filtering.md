---
layout: post
title: Filtering in Vue Gantt component | Syncfusion
description: Learn here all about Filtering in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Filtering 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Vue Gantt component

Filtering allows you to view specific or related records based on filter criteria. This can be done in the Gantt Component by using the filter menu support and toolbar search support. To enable filtering in the Gantt Component, set the [`allowFiltering`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowfiltering) to `true`. Menu filtering support can be configured using the [`filterSettings`](https://ej2.syncfusion.com/vue/documentation/api/gantt/filterSettings/) property and toolbar searching can be configured using the [`searchSettings`](https://ej2.syncfusion.com/vue/documentation/api/gantt/searchSettings/) property.

To use the filter, inject the [`Filter`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#filtermodule) module in the `provide` section.

## Filter hierarchy modes

The Gantt supports a set of filtering modes with the [`filterSettings.hierarchyMode`](https://ej2.syncfusion.com/vue/documentation/api/gantt/filterSettings/#hierarchymode) property. The following are the types of filter hierarchy modes available in the Gantt component:

* `Parent`: This is the default filter hierarchy mode in Gantt. The filtered records are displayed with its parent records. If the filtered records do not have any parent record, then only the filtered records will be displayed.

* `Child`: Displays the filtered records with its child record. If the filtered records do not have any child record, then only the filtered records will be displayed.

* `Both`: Displays the filtered records with its both parent and child records. If the filtered records do not have any parent and child records, then only the filtered records will be displayed.

* `None`: Displays only the filtered records.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/filtering-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/filtering-cs3" %}

### Initial filter

To apply the filter at initial rendering, set the filter to predicate object in the [`filterSettings.columns`](https://ej2.syncfusion.com/vue/documentation/api/gantt/filterSettings/#columns) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/filtering-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/filtering-cs4" %}

### Filter operators

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

### Diacritics

By default, the Gantt component ignores the diacritic characters while filtering. To include diacritic characters, set the [`filterSettings.ignoreAccent`](https://ej2.syncfusion.com/vue/documentation/api/gantt/filterSettings/#ignoreaccent) to `true`.

In the following sample, type **Project** in the `TaskName` column to filter diacritic characters.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/filtering-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/filtering-cs5" %}

## Filtering a specific column by method

You can filter the columns dynamically by using the [`filterByColumn`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#filterbycolumn) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/filtering-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/filtering-cs6" %}

## Clear filtered columns

You can clear all the filtering condition done in the Gantt component by using the [`clearFiltering`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#clearfiltering) method.

The following code snippet explains the above behavior.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/filtering-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/filtering-cs7" %}

## Custom component in filter menu

The [`column.filter.ui`](https://ej2.syncfusion.com/vue/documentation/api/gantt/column/#filter) is used to add custom filter components to a particular column.
To implement a custom filter UI, define the following functions:

* `create`:  Creates a custom component.
* `write`: Wire events for a custom component.
* `read`: Read the filter value from the custom component.

In the following sample, the dropdown is used  as a custom component in the TaskName column.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/filtering-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/filtering-cs8" %}
