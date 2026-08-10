---
layout: post
title: Vue TreeGrid Selected Data Export | Syncfusion
description: Learn how to export selected data in the Vue TreeGrid, including specifying selected results using PdfExportProperties for exporting.
control: Exporting selected data 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Exporting Selected Data in Vue TreeGrid

You can export the selected records data by passing it to [`PdfExportProperties.dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfExportProperties/) or [`ExcelExportProperties.dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/excelExportProperties/) property in the [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbarclick) event.

In the below exporting demo, we can get the selected records using [`getSelectedRecords`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#getselectedrecords) method and pass the selected data to [`pdfExport`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#pdfexport) or [`excelExport`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#excelExport) methods using respective export properties..

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs14/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs14" %}