---
layout: post
title: Data Compression in Vue Pivot Table component | Syncfusion
description: Learn here all about data compression in Syncfusion Vue Pivot Table component of Syncfusion Essential JS 2 and more.
control: Data Compression 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Data Compression in Vue Pivot Table component

> This property is applicable only for the relational data source.

When binding one million raw data, the pivot table processes all raw data to generate aggregated data during initial rendering and report manipulation. However, with data compression, the input raw data is compressed based on the uniqueness of the raw data, and the final compressed raw data are utilized by the pivot table. The compressed raw data is then used for further operations at all times, reducing the looping complexity and improving the performance of the pivot table. For example, if the pivot table is connected to one million raw data compressed to 1,000 unique raw data, it will render within 3 seconds rather than 10 seconds. You can enable this option by using the [allowDataCompression](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#allowdatacompression) property along with the [enableVirtualization](https://ej2.syncfusion.com/vue/documentation/api/pivotview#enablevirtualization) property.

> This options will only function when the virtual scrolling is enabled.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/common-cs34/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/common-cs34" %}

**Limitations during data compression:**

- The following aggregation types will not be supported:
  - Average
  - Populationstdev
  - Samplestdev
  - Populationvar
  - Samplevar
- If you use any of the above aggregations, they will result in the aggregation type **"Sum"**.
- **"DistinctCount"** will act as **"Count"** aggregation type.
- In the calculated field, an existing field can be inserted without altering its default aggregation type. Even if changed, it would revert to the default aggregation type for calculation.