---
layout: post
title: Paging in Vue Grid component | Syncfusion
description: Learn here all about Paging in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Paging 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Paging in Vue Grid component

Paging provides an option to display Grid data in page segments. To enable paging, set the [`allowPaging`](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowpaging) to true. When paging is enabled, pager component renders at the bottom of the grid.
Paging options can be configured through the [`pageSettings`](https://ej2.syncfusion.com/vue/documentation/api/grid/pageSettings/).

In the below sample, [`pageSize`](https://ej2.syncfusion.com/vue/documentation/api/grid/pageSettings/#pagesize) is calculated based on the grid height by using the [`load`](https://ej2.syncfusion.com/vue/documentation/api/grid/#load) event.

To use Paging, you need to inject [`Page`](https://ej2.syncfusion.com/vue/documentation/api/grid/page/) module in the **provide** section.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/page/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/page/default-cs1" %}

> You can achieve better performance by using grid paging to fetch only a pre-defined number of records from the data source.

## Template

You can use custom elements inside the pager instead of default elements.
The custom elements can be defined by using [`pagerTemplate`](../api/grid/pageSettings/#template).Inside this template, you can access the [`CurrentPage`](https://ej2.syncfusion.com/vue/documentation/api/grid/pageSettings/#currentpage),[`pageSize`](https://ej2.syncfusion.com/vue/documentation/api/grid/pageSettings/#pagesize),[`pageCount`](https://ej2.syncfusion.com/vue/documentation/api/grid/pageSettings/#pagecount), **totalPage** and **totalRecordCount** values.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/page/template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/page/template-cs1" %}

## Pager with Page Size Dropdown

The pager Dropdown allows you to change the number of records in the Grid dynamically. It can be enabled by defining the [`pageSettings.pageSizes`](https://ej2.syncfusion.com/vue/documentation/api/grid/pageSettings/#pagesizes) property as true.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/page/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/page/default-cs2" %}

## How to render Pager at the Top of the Grid

By default, Pager will be rendered at the bottom of the Grid. You can also render the Pager at the top of the Grid by using the [`dataBound`](../api/grid/#databound) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/page/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/page/default-cs3" %}

> During the paging action, the pager component triggers the below three events.
> * The [`created`](../api/pager/pagerModel/#created) event triggers when Pager is created.
> * The [`click`](https://ej2.syncfusion.com/vue/documentation/api/pager/pagerModel/#click) event triggers when the numeric items in the pager is clicked.
> * The [`dropDownChanged`](https://ej2.syncfusion.com/vue/documentation/api/pager/pagerModel/#dropdownchanged) event triggers when pageSize DropDownList value is selected.

## See Also

* [Group with Paging](./grouping/grouping/#group-with-paging)
