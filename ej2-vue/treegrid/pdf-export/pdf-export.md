---
layout: post
title: Vue TreeGrid PDF Export | Syncfusion
description: Learn how to enable and use PDF export in the Vue TreeGrid, including showing a spinner and providing a custom data source.
control: Pdf export 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# PDF Export in Vue TreeGrid

PDF export allows exporting TreeGrid data to PDF document. You need to use the [`pdfExport`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#pdfexport) method for exporting. To enable PDF export in the treegrid, set the [`allowPdfExport`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#allowpdfexport) as true.

To use PDF export, inject the `PdfExport` module in treegrid.

To get start quickly with PDF export feature, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=nR3fDHxQ9dU" %}

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/pdf/default-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/pdf/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/pdf/default-cs10" %}

## Custom data source

PDF export provides an option to define datasource dynamically before exporting. To export data dynamically, define the `dataSource` in `exportProperties`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/pdf/default-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/pdf/default-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/pdf/default-cs11" %}

## Exporting Custom Aggregates in Tree Grid
 
The Tree Grid enables exporting custom aggregates, which summarize column data, to an PDF document using the `PdfAggregateQueryCellInfo` event.
 
In the provided example, the `customAggregateFn` function computes the item count for a selected category, while the `PdfAggregateQueryCellInfo` event customizes the exported cell values in the PDF document.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/pdf/default-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/pdf/default-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/pdf/default-cs12" %}