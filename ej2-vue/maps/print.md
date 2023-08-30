---
layout: post
title: Print in Vue Maps component | Syncfusion
description: Learn here all about Print in Syncfusion Vue Maps component of Syncfusion Essential JS 2 and more.
control: Print 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Print in Vue Maps component

## Print

The rendered Maps can be printed directly from the browser by calling the [`print`](https://ej2.syncfusion.com/vue/documentation/api/maps/#print) method. To use the print functionality, **Print** module must be injected into the Maps using **provide** section and set the [`allowPrint`](https://ej2.syncfusion.com/vue/documentation/api/maps/mapsModel/#allowprint) property to **true**. The following code snippet demonstrates injecting the Print module into the Maps component.

```
<template>
    <ejs-maps id='maps'></ejs-maps>
</template>
<script>
export default ({
    data() {
        return{ };
    },
provide: {
    maps: [Print]
}
</script>
});
```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs77/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs77" %}

## Export

### Image Export

To use the image export functionality in Maps, **ImageExport** module must be injected into the Maps using **provide** section and set the [`allowImageExport`](https://ej2.syncfusion.com/vue/documentation/api/maps/#allowimageexport) property to **true**.

```
<template>
    <ejs-maps id='maps'></ejs-maps>
</template>
<script>
export default ({
    data() {
        return{ };
    },
provide: {
    maps: [ImageExport]
}
</script>
});
```

The rendered Maps can be exported as an image using the [`export`](https://ej2.syncfusion.com/vue/documentation/api/maps#export) method. The method requires two parameters: image type and file name. The Maps can be exported as an image in the following formats.

* JPEG
* PNG
* SVG

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs78/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs78" %}

### Exporting Maps as base 64 string of the file

The image can be exported as base64 string for the JPEG and PNG formats. The rendered Maps can be exported to image as a base64 string using the [`export`](https://ej2.syncfusion.com/vue/documentation/api/maps/#export) method. There are four parameters required: image type, file name, orientation of the exported PDF document which must be set as **null** for image export and finally **allowDownload** which should be set as **false** to return base64 string.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs79/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs79" %}

### PDF Export

To use the PDF export functionality in Maps, **PdfExport** module must be injected into the Maps using **provide** section and set the [`allowPdfExport`](https://ej2.syncfusion.com/vue/documentation/api/maps/mapsModel/#allowpdfexport) property to **true**.

```
<template>
    <ejs-maps id='maps'></ejs-maps>
</template>
<script>
export default ({
    data() {
        return{ };
    },
provide: {
    maps: [PdfExport]
}
</script>
});
```

The rendered Maps can be exported as PDF using the [`export`](https://ej2.syncfusion.com/vue/documentation/api/maps#export) method. The [`export`](https://ej2.syncfusion.com/vue/documentation/api/maps#export) method requires three parameters: file type, file name and orientation of the PDF document. The orientation setting is optional and **0** indicates portrait and **1** indicates landscape.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs80/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs80" %}

>The exporting of the Maps as base64 string is not supported for the PDF export.

### Export the tile Maps

The rendered Maps with providers such as OSM, Bing and Google static Maps can be exported using the [`export`](https://ej2.syncfusion.com/vue/documentation/api/maps/#export) method. It supports the following export formats.

* JPEG
* PNG
* PDF

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs81/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs81" %}