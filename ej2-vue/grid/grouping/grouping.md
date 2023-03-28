---
layout: post
title: Grouping in Vue Grid component | Syncfusion
description: Learn here all about Grouping in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Grouping 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Vue Grid component

The Grid has options to group records by dragging and dropping the column header to the group drop area. When grouping is applied, grid records are organized into a hierarchical structure to facilitate easier expansion and collapse of records.

To enable Grouping in the grid, set the [`allowGrouping`](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowgrouping) to true. Grouping options can be configured in [`groupSettings`](https://ej2.syncfusion.com/vue/documentation/api/grid/groupSettings/).

To use Grouping, you need to inject [`Group`](https://ej2.syncfusion.com/vue/documentation/api/grid/group) module in the **provide** section.

To get start quickly with Grouping Options, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=SGpR92dMHnw" %}

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/group/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/default-cs2" %}

> * You can group and ungroup columns by using the [`groupColumn`](https://ej2.syncfusion.com/vue/documentation/api/grid/group/#groupcolumn) and [`ungroupColumn`](https://ej2.syncfusion.com/vue/documentation/api/grid/group/#ungroupcolumn) methods.
> * To disable grouping for a particular column, set the [`columns.allowGrouping`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#allowgrouping) to false.

## Initial group

To apply group at initial rendering, set the column field name in the [`groupSettings.columns`](https://ej2.syncfusion.com/vue/documentation/api/grid/groupSettings/#columns).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/group/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/default-cs3" %}

## Hide drop area

To avoid ungrouping or further grouping of a column after initial column grouping, define the [`groupSettings.showDropArea`](https://ej2.syncfusion.com/vue/documentation/api/grid/groupSettings/#showdroparea) as false.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/group/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/default-cs4" %}

## Group with paging

On grouping columns with paging feature, the aggregated information and total items are displayed based on the current page. The grid does not consider aggregated information and total items from other pages. To get additional details (aggregated information and total items) from other pages,set the [`groupSettings.disablePageWiseAggregates`](https://ej2.syncfusion.com/vue/documentation/api/grid/groupSettings/#disablepagewiseaggregates) to true.

> If remote data is bound to grid dataSource, two requests will be sent when performing grouping action;one for getting the grouped data and another for getting aggregate details and total items count.

## Group by format

By default, columns will be grouped by the data or value present for the particular row. To group numeric or datetime column based on the mentioned format, you have to enable the [`enableGroupByFormat`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#enablegroupbyformat) property of the corresponding grid columns.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/group/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/default-cs5" %}

## Grouping events

During the group action, the grid component triggers two events. The [`actionBegin`](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionbegin) event triggers before the group action starts and the [`actionComplete`](https://ej2.syncfusion.com/vue/documentation/api/grid/#actioncomplete) event triggers after the group action is completed. Using these events you can perform any action.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/group/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/default-cs6" %}

> [`args.requestType`](https://ej2.syncfusion.com/vue/documentation/api/grid/sortEventArgs/#requesttype) is current action name. For example in grouping, the [`args.requestType`](https://ej2.syncfusion.com/vue/documentation/api/grid/sortEventArgs/#requesttype) value is **grouping**.

## Collapse by external button

To collapse the selected grouped row from an external button by using the [`expandCollapse`](https://ej2.syncfusion.com/vue/documentation/api/grid/group/#expandcollapserows) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/group/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/default-cs7" %}

## Diacritics filter

By default, grid ignores diacritic characters while filtering. To include diacritic characters, set the [`filterSettings.ignoreAccent`](https://ej2.syncfusion.com/vue/documentation/api/grid/filterSettings/#ignoreaccent) as **true**.

In the following sample, type **mun** in **Ship City** column to filter diacritic characters.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/filter/default-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter/default-cs11" %}

## Sort grouped columns in descending order during initial grouping

By default, grouped columns are sorted in ascending order. To sort grouped columns in descending order during initial grouping, you can set the [field](https://ej2.syncfusion.com/vue/documentation/api/grid/sortDescriptorModel/#field) and [direction](https://ej2.syncfusion.com/vue/documentation/api/grid/sortDescriptorModel/#direction-string) in the `sortSettings.columns` property.

The `CustomerID` column will be sorted in descending order when the grid is initially grouped, as shown in the following example.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/group/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/default-cs8" %}

## See Also

* [Exporting grouped records](../excel-export/excel-export-options/#exporting-grouped-records)
* [How to customize the group caption row text in Vue Grid](https://www.syncfusion.com/forums/154055/how-to-customize-the-group-caption-row-text-in-vue-grid)