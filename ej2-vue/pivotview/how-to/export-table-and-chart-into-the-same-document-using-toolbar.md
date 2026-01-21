---
layout: post
title: Export table and chart into the same document in Vue | Syncfusion
description: Learn here all about how to export table and chart into the same document using toolbar in Syncfusion Vue of Syncfusion Essential JS 2 and more.
platform: ej2-vue
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# Export table and chart into the same document using toolbar in Vue

By default, when the [displayOption.view](https://ej2.syncfusion.com/vue/documentation/api/pivotview/displayOptionModel#view) property is set to **Both** in the Pivot Table, the export functionality exports either the table or the chart to the PDF document based on the current value of the [displayOption.primary](https://ej2.syncfusion.com/vue/documentation/api/pivotview/displayOptionModel#primary) property. However, to export both the table and the chart into the same PDF document simultaneously, use the [`pdfExport`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#pdfexport) method during the [`actionBegin`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#actionbegin) event.

This approach is particularly useful when users need comprehensive reports that include both tabular data and visual representations in a single document.

## Implementation steps

Follow these steps to enable combined table and chart export:

1. **Configure the Pivot Table** with both table and chart display options.
2. **Handle the actionBegin event** to intercept the default export action.
3. **Call the pdfExport method** with the `exportBothTableAndChart` parameter set to **true**.

## Code example

The following example demonstrates how to restrict the built-in export action by setting the [`args.cancel`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/pivotActionBeginEventArgs#cancel) option to **true** in the [`actionBegin`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#actionbegin) event, and then export both the table and the chart by calling the [`pdfExport`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#pdfexport) method with the `exportBothTableAndChart` argument set to **true**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs265/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs265/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs265" %}