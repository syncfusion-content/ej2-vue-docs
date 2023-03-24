---
layout: post
title: Paging in Vue Treegrid component | Syncfusion
description: Learn here all about Paging in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Paging 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Paging in Vue Treegrid component

Paging provides an option to display TreeGrid data in page segments. To enable paging, set the [`allowPaging`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#allowpaging) to true. When paging is enabled, pager component renders at the bottom of the treegrid. Paging options can be configured through the [`pageSettings`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#pagesettings).

To use paging, inject the [`Page`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#pagermodule) module in the grid.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/paging/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/paging/default-cs1" %}

> You can achieve better performance by using treegrid paging to fetch only a pre-defined number of records from the data source.

## Page Size Mode

Two behaviors are available in TreeGrid paging to display certain number of records in a current page. Following are the two types of [`pageSizeMode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/pageSettingsModel/#pagesizemode).

* **All** : This is the default mode. The number of records in a page is based on [`pageSize`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/pageSettingsModel/#pagesize) property.
* **Root** : The number of root nodes or the 0th level records to be displayed per page is based on [`pageSize`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/pageSettingsModel/#pagesize) property.

With [`pageSizeMode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/pageSettingsModel/#pagesizemode) property as `Root`, only the root level or the 0th level records are considered in records count.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/paging/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/paging/default-cs2" %}

## Pager with Page Size Dropdown

The pager Dropdown allows you to change the number of records in the TreeGrid dynamically. It can be enabled by defining the [`pageSettings.pageSizes`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/pageSettingsModel/#pagesizes) property as true.

```
pageSettings: {pageSize: 7, pageSizes: true},
```

<!-- markdownlint-disable MD033 -->
<img src="./images/pagesizes.png" alt="Page size dropdown">
<!-- markdownlint-enable MD033 -->

## How to render Pager at the Top of the TreeGrid

By default, Pager will be rendered at the bottom of the TreeGrid. You can also render the Pager at the top of the TreeGrid by using the `dataBound` event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/paging/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/paging/default-cs3" %}

> During the paging action, the pager component triggers the below three events.
> * The `created` event triggers when Pager is created.
> * The `click` event triggers when the numeric items in the pager is clicked.
> * The `dropDownChanged` event triggers when pageSize DropDownList value is selected.