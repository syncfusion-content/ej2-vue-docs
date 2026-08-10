---
layout: post
title: Vue TreeGrid Filtered Data Export | Syncfusion
description: Learn how to export filtered data in the Vue TreeGrid, including specifying filtered results using PdfExportProperties for exporting.
control: Exporting filtered data 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Exporting Filtered Data in Vue TreeGrid

You can export the filtered data by defining the resulted data in [`PdfExportProperties.dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfExportProperties/#datasource) before export.

In the below Pdf exporting demo, We have gotten the filtered data from the filteredResult of Tree Grid filterModule and then defines the resulted data in [`PdfExportProperties.dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfExportProperties/#datasource) and pass it to [`pdfExport`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#pdfexport) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs13" %}