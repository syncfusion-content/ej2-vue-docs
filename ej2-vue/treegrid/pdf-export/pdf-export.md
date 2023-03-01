---
layout: post
title: Pdf export in Vue Treegrid component | Syncfusion
description: Learn here all about Pdf export in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Pdf export 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Pdf export in Vue Treegrid component

PDF export allows exporting TreeGrid data to PDF document. You need to use the [`pdfExport`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#pdfexport) method for exporting. To enable PDF export in the treegrid, set the [`allowPdfExport`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#allowpdfexport) as true.

To use PDF export, inject the `PdfExport` module in treegrid.

To get start quickly with Pdf export feature, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=nR3fDHxQ9dU" %}

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/pdf/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/pdf/default-cs10" %}

## Custom data source

PDF export provides an option to define datasource dynamically before exporting. To export data dynamically, define the `dataSource` in `exportProperties`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/pdf/default-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/pdf/default-cs11" %}