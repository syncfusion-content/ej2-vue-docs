---
layout: post
title: Aggregates in Vue Treegrid component | Syncfusion
description: Learn here all about Aggregates in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Aggregates 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Aggregates in Vue Treegrid component

Aggregate values are displayed in the TreeGrid footer and in parent row footer for child row aggregate values. It can be configured through `aggregates` property. [`field`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/aggregateColumnModel/#field) and [`type`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/aggregateColumnModel/#type) are the minimum properties required to represent an aggregate column.

To use the aggregate feature, you have to inject the `Aggregate` module.

By default, the aggregate value can be displayed in the treegrid footer, and footer of child rows. To show the aggregate value in one of the cells, use the [`footerTemplate`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/aggregateColumnModel/#footertemplate).

To get start quickly with aggregates in Vue tree grid component, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=D7qmd3OFO2s" %}

## Built-in aggregate types

The aggregate type should be specified in the [`type`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/aggregateColumnModel/#type) property to configure an aggregate column.

The built-in aggregates are,
* Sum
* Average
* Min
* Max
* Count
* Truecount
* Falsecount

> * Multiple aggregates can be used for an aggregate column by setting the [`type`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/aggregateColumnModel/#type) property
with an array of aggregate types.
> * Multiple types for a column is supported only when one of the aggregate templates is used.

## Child aggregate

Aggregate value is calculated for child rows, and it is displayed in the parent row footer. Use the [`childSummary`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/aggregateRowModel/#showchildsummary) property to render the child rows aggregate value.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/aggregates/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/aggregates/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/aggregates/default-cs1" %}