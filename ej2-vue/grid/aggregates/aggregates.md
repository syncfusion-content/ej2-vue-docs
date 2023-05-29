---
layout: post
title: Aggregates in Vue Grid component | Syncfusion
description: Learn here all about Aggregates in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Aggregates 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Aggregates in Vue Grid component

Aggregate values are displayed in the footer, group footer and group caption of Grid. It can be configured through `e-aggregates` directive. The [`field`](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#field) and [`type`](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#type) are the minimum properties required to represent an aggregate column.

To use aggregate feature, you need to inject the `Aggregate` module into the `provide` section.

By default, the aggregate value can be displayed in footer, group and caption cells, to show the aggregate value in any of these cells, use the [`footerTemplate`](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#footertemplate),[`groupFooterTemplate`](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#groupfootertemplate) and [`groupCaptionTemplate`](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#groupcaptiontemplate) properties.

To get start quickly with Aggregate Options, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=SGpR92dMHnw" %}

## Built-in aggregate types

Aggregate type must be specified in [`type`](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#type) property to configure an aggregate column.

The built-in aggregates are,
* Sum
* Average
* Min
* Max
* Count
* TrueCount
* FalseCount

> * Multiple aggregates can be used for an aggregate column by setting the [`type`](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#type) property with an array of aggregate type.
> * Multiple types for a column is supported only when one of the aggregate templates is used.