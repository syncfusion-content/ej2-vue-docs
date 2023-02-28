---
layout: post
title: Print and export in Vue Treemap component | Syncfusion
description: Learn here all about Print and export in Syncfusion Vue Treemap component of Syncfusion Essential JS 2 and more.
control: Print and export 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Print and export in Vue Treemap component

## Print

To use the print functionality, we should inject the `Print` module using the `provide` section and set the [`allowPrint`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#allowprint) property to **true**. The rendered treemap can be printed directly from the browser by calling the method [`print`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#print).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs51/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs51" %}

## Export

### Image Export

To use the image export functionality, we should inject the `ImageExport` module using the `provide` section and set the [`allowImageExport`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#allowimageexport) property to **true**. The rendered treemap can be exported as an image using the [`export`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#export) method. The method requires two parameters: image type and file name. The treemap can be exported as an image in the following formats.

* JPEG
* PNG
* SVG

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs52/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs52" %}

We can get the image file as base64 string for the JPEG and PNG formats. The treemap can be exported to image as a base64 string using the [`export`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#export) method. There are four parameters required: image type, file name, orientation of the exported PDF document which must be set as **null** for image export and finally **allowDownload** which should be set as **false** to return base64 string.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs53/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs53" %}

### PDF Export

To use the PDF export functionality, we should inject the `PdfExport` module using the `provide` section and set the [`allowPdfExport`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#allowpdfexport) property to **true**. The rendered treemap can be exported as PDF using the [`export`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#export) method. The [`export`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#export) method requires three parameters: file type, file name and orientation of the PDF document. The orientation setting is optional and **0** indicates portrait and **1** indicates landscape.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs54/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs54" %}

>The exporting of the treemap as base64 string is not supported in the PDF export.
