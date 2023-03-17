---
layout: post
title: Hierarchy grid in Vue Grid component | Syncfusion
description: Learn here all about Hierarchy grid in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Hierarchy grid 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Hierarchy grid in Vue Grid component

The Grid allows display of table data in a hierarchical structure to visualize relations between parent and child records.This feature is enabled by defining the [`childGrid`](https://ej2.syncfusion.com/vue/documentation/api/grid/#childgrid) and [`childGrid.queryString`](https://ej2.syncfusion.com/vue/documentation/api/grid/#querystring).

The [`childGrid`](https://ej2.syncfusion.com/vue/documentation/api/grid/#childgrid) describes the options of grid and the
[`childGrid.queryString`](https://ej2.syncfusion.com/vue/documentation/api/grid/#querystring) describes the relation between parent and child grids.

To use hierarchical binding, inject the **DetailRow** in the **provide** section.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/hierarchy-grid/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/hierarchy-grid/default-cs2" %}

> * Grid supports n level of child grids.
> * Hierarchical binding is not supported when [`DetailTemplate`](../api/grid/#detailtemplate) is enabled.

## ExpandAll by external button

By default, grid renders in collapsed state.
You can expand all child grid rows by invoking the [`expandAll`](https://ej2.syncfusion.com/vue/documentation/api/grid/detailRow/#expandall) method,
and collapse all grid rows by invoking the [`collapseAll`](https://ej2.syncfusion.com/vue/documentation/api/grid/detailRow/#collapseall) through an external button.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/hierarchy-grid/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/hierarchy-grid/default-cs3" %}

## Expand child grid initially

You can expand a particular child grid at initial rendering by invoking the
[`expand`](../api/grid/detailRow/#expand) method in the [`dataBound`](https://ej2.syncfusion.com/vue/documentation/api/grid/#databound) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/hierarchy-grid/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/hierarchy-grid/default-cs4" %}

## Dynamically load child grid data

You can dynamically load child grid dataSource by using the
[`detailDataBound`](https://ej2.syncfusion.com/vue/documentation/api/grid/#detaildatabound) event.This [`detailDataBound`](../api/grid/#detaildatabound) event triggers when the child grid is expanded for the first time.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/hierarchy-grid/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/hierarchy-grid/default-cs5" %}

## Bind hierarchy grid with different field

By default, Parent and child grid relation will be maintained by [`queryString`](https://ej2.syncfusion.com/vue/documentation/api/grid/#querystring) property. We should use the same field name to map both parent and child grid. To achieve parent and child relation with different fields, we need to change the mapping value in the child grid [`load`](https://ej2.syncfusion.com/vue/documentation/api/grid/#load) event.

In the below sample, we have bound the child and parent grid with different fields. Parent grid field name as **EmployeeID** and the child grid field name as **ID**. We need to define the mapping value of **parentKeyFieldValue** from the parent row data in the child grid [`load`](https://ej2.syncfusion.com/vue/documentation/api/grid/#load) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/hierarchy-grid/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/hierarchy-grid/default-cs6" %}

## Adding Record in ChildGrid

Parent and child grid are related by [`queryString`](https://ej2.syncfusion.com/vue/documentation/api/grid/#querystring) field value.
To maintain this relation in newly added record, You need to set value for [`queryString`](../api/grid/#querystring) field in the added data by the [`actionBegin`](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionbegin) event.

In the below demo, **EmployeeID** field relates the parent and child grids. To add a new record in child grid, We have to set the **EmployeeID** field with parent record's [`queryString`](../api/grid/#querystring) field value in the [`actionBegin`](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionbegin) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/hierarchy-grid/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/hierarchy-grid/default-cs7" %}

## Dynamically bind data to child grid based on parent row Data

By default, the [childGrid.queryString](../api/grid/#querystring) describes the relationship between parent and child grids and visualizes the data in a hierarchical structure. Instead of the `queryString` property, we can dynamically bind the datasource to the `childGrid` based on the parent row data using the [detailDataBound](https://ej2.syncfusion.com/vue/documentation/api/grid/#detaildatabound) event of the grid.

While expanding the child Grid, the `detailDataBound` event will be triggered. In this event, based on the EmployeeID column value of parent row data, filter the equally matched data from the `childGrid` datasource using the `DataManager` plugin and bind the filtered data as a datasource to the `childGrid`. This can be demonstrated by the following sample.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/hierarchy-grid/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/hierarchy-grid/default-cs8" %}