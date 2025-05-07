---
layout: post
title: Exporting grid in cordova application in Vue Grid component | Syncfusion
description: Learn here all about Exporting grid in cordova application in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Exporting grid in cordova application 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Exporting grid in cordova application in Vue Grid component

Exporting the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid in a Cordova application can be beneficial in various scenarios where users need to generate and download reports, share data in Excel or PDF formats, or archive information for offline use. A Cordova application does not support direct file download. To export the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid component in a Cordova application, you need to utilize Blob streams. This can be achieved by using the appropriate exporting methods and export complete events to obtain the Blob stream.

The following example illustrates how to export a Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid in a Cordova application. It utilizes the [excelExportComplete](https://ej2.syncfusion.com/documentation/api/grid/#excelexportcomplete) and [pdfExportComplete](https://ej2.syncfusion.com/documentation/api/grid/#pdfexportcomplete) events to manage the export process for Excel and PDF formats and obtain the Blob stream. The `exportBlob` function is responsible for creating a downloadable link for the exported file.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/how-to/foreignKey-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/how-to/foreignKey-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/foreignKey-cs8" %}