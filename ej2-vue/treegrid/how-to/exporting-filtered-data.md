---
layout: post
title: Exporting filtered data in Vue Treegrid component | Syncfusion
description: Learn here all about Exporting filtered data in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Exporting filtered data 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Exporting filtered data in Vue Treegrid component

You can export the filtered data by defining the resulted data in [`PdfExportProperties.dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfExportProperties/#datasource) before export.

In the below Pdf exporting demo, We have gotten the filtered data from the filteredResult of Tree Grid filterModule and then defines the resulted data in [`PdfExportProperties.dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfExportProperties/#datasource) and pass it to [`pdfExport`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#pdfexport) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/how-to/default-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs13" %}
