---
layout: post
title: Data Compression in Vue Pivotview component | Syncfusion
description: Learn here all about Data Compression in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Data Compression 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Data Compression in Vue Pivotview component

> This property is applicable only for the relational data source.

When we bind one million raw data, the pivot table will process all raw data to generate aggregated data during initial rendering and report manipulation. But in data compression, the data will be compressed based on the uniqueness of the raw data, and unique records will be provided as input for the Pivot Table. The compressed data will be used for further operations at all times, reducing the looping complexity and improving the performance of the pivot table. For example, if the pivot table  is connected to one million raw data aggregated to 1,000 unique data means, it will be rendered within 3 seconds rather than 10 seconds. You can enable this option by using the [`allowDataCompression`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#allowdatacompression) property along with [`enableVirtualization`](https://ej2.syncfusion.com/vue/documentation/api/pivotview#enablevirtualization) property.

> This options will only function when the virtual scrolling is enabled.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/common-cs34/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/common-cs34" %}

**Limitations during data compression**

* The following aggregation types will not be supported.
    * Average
    * Populationstdev
    * Samplestdev
    * Populationvar
    * Samplevar
* If you use any of the aggregations above, it will result in an aggregation type **"Sum"**.
* Distinctcount will act as **"Count"** aggregation type.
* In the calculated field, an existing field can be inserted without altering its default aggregation type Even if we change it, it would use the default aggregation type back for calculation.