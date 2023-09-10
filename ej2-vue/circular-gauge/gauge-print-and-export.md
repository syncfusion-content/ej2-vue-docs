---
layout: post
title: Print and export in Vue Circular Gauge component | Syncfusion
description: Learn here all about print and export in Syncfusion Vue Circular Gauge component of Syncfusion Essential JS 2 and more.
control: Gauge print and export 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Print and export in Vue Circular Gauge component

## Print

The Circular Gauge can be printed directly from the browser by calling the [print](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#print) method. More information on the arguments for this method can be found [here](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#print).

>To use the print functionality, inject the `Print` module using the `provide` option and set the property `allowPrint` in the Circular Gauge to **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs49/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs49" %}

## Export

### Image Export

The Circular Gauge can be exported as an image in **JPEG**, **PNG** and **SVG** formats. To use the image export functionality, inject the `ImageExport` module using the `provide` option and set the Circular Gauge's [allowImageExport](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#allowimageexport) property to **true**. When the [export](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#export) method is used, the Circular Gauge will be exported as an image. The `export` method requires the following parameters for image export.

|   Parameter          |   Description                               |
|----------------------| --------------------------------------------|
|   type               | Specifies the export type, which accepts values such as **JPEG**, **PNG** and **SVG** for image export. |
|   fileName           | Specifies the file name of the exported image. |
|   orientation        | This parameter is not required for image export. So, the value must be **null**. |
|   allowDownload      | Specifies whether the exported image file should be downloaded or not. When the value is set to **true**, the file will be downloaded. When set to **false**, the base64 string of the file will be returned. This is an optional parameter, with the default value set to **true**. |

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs50/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs50" %}

The base64 string of the exported image files can only be received using the `export` method for JPEG and PNG formats. The **allowDownload** parameter in the `export` method must be set to **false**, as explained in the table above.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs68/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs68" %}

### PDF Export

The Circular Gauge can be exported as a PDF document using [export](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#export) method. To use the PDF export functionality, inject the `PdfExport` module using the `provide` option and set the Circular Gauge's [allowPdfExport](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#allowpdfexport) property to **true**. The `export` method requires the following parameters for PDF export.

|   Parameter          |   Description                               |
|----------------------| --------------------------------------------|
|   type               | Specifies the export type, which accepts values such as **PDF** for pdf export. |
|   fileName           | Specifies the file name of the exported PDF document. |
|   orientation        | Specifies the orientation of the exported PDF document which accepts the values such as **Portrait** and **Landscape**. The default value is **Portrait**. |
|   allowDownload      | This is an optional parameter, with the default value set to **true**. This parameter is supported only for the image export. The exported PDF document cannot be returned as base64 string. |

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs69/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs69" %}