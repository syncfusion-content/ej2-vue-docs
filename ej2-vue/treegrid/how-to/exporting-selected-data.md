---
layout: post
title: Exporting selected data in Vue Treegrid component | Syncfusion
description: Learn here all about Exporting selected data in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Exporting selected data 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Exporting selected data in Vue Treegrid component

You can export the selected records data by passing it to [`PdfExportProperties.dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfExportProperties/) or [`ExcelExportProperties.dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/excelExportProperties/) property in the [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbarclick) event.

In the below exporting demo, we can get the selected records using [`getSelectedRecords`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#getselectedrecords) method and pass the selected data to [`pdfExport`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#pdfexport) or [`excelExport`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#excelExport) methods using respective export properties..

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/how-to/default-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs14" %}
