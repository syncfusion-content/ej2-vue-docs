---
layout: post
title: Pdf export in Vue Gantt component | Syncfusion
description: Learn here all about Pdf export in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Pdf export 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Export

## Pdf export in Vue Gantt component

PDF export allows exporting Gantt data to PDF document. You need to use the [`pdfExport`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#pdfexport) method for exporting. To enable PDF export in the Gantt, set the [`allowPdfExport`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowpdfexport) to true.

To get a configured Gantt chart for exporting, you can follow the steps outlined in the video linked below:
{% youtube "https://www.youtube.com/watch?v=UOx3TGsL48c" %}

To export data to PDF document, inject the `PdfExport` module in Gantt.

>Note: Currently, we do not have support for exporting manually scheduled tasks.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/pdf-export-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/pdf-export-cs13" %}

## Exporting Gantt data as a blob object

In Gantt, you can export the Gantt chart data as a blob object, which allows you to preview or modify the data before exporting it.

To export the Gantt chart data as a blob object, follow these steps:

step 1: pdfExport fourth argument set as `true`.

step 2: Then , `pdfExpComplete` return as blob object.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/exporting-gantt-blobdata-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/exporting-gantt-blobdata-cs1" %}

## Single page exporting in gantt

In Gantt, we have provided support to export the Gantt component where each rows are auto-fit to the PDF document page width by setting [`isFitToWidth`](https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties/fitToWidthSettings/#isFitToWidth) as true in <code>fitToWidthSettings</code> of <code>PdfExportProperties</code>.

Also, we can customize the chart width and grid width in exported file using [`chartWidth`](https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties/fitToWidthSettings/isFitToWidth/#chartWidth) and [`gridWidth`](https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties/fitToWidthSettings/isFitToWidth/#gridWidth) by defining it as percentage in string.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/single-page/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/single-page" %}
