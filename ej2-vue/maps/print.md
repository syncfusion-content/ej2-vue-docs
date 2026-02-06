---
layout: post
title: Print in Vue Maps component | Syncfusion
description: Explore here all about Print in Syncfusion Vue Maps component of Syncfusion Essential JS 2 and more.
control: Print 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Print in Vue Maps component

## Print

The rendered Maps can be printed directly from the browser by calling the [`print`](https://ej2.syncfusion.com/vue/documentation/api/maps#print) method. To use the print functionality, the **PrintService** must be injected into the Maps using **providers** of the Angular component and set the [`allowPrint`](https://ej2.syncfusion.com/vue/documentation/api/maps#allowprint) property must be set to **true**.

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

To use the image export functionality in Maps, **ImageExport** module must be injected into the Maps using **Maps.Inject(ImageExport)** method and set the [`allowImageExport`](https://ej2.syncfusion.com/vue/documentation/api/maps#allowimageexport) property to **true**. The rendered Maps can be exported as an image using the [`export`](https://ej2.syncfusion.com/vue/documentation/api/maps#export) method. The method requires two parameters: image type and file name. The Maps can be exported as an image in the following formats.

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

The map can be exported as a base64 string for the JPEG and PNG formats. The rendered map can be exported as a base64 string using the [`export`](https://ej2.syncfusion.com/vue/documentation/api/maps#export) method. This method requires four parameters: image type, file name, orientation (set to **null** for image export), and **allowDownload** (set to **false** to return the base64 string).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs79/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs79" %}

### PDF Export

To use the PDF export functionality, **PdfExport** module must be injected into the Maps using **Maps.Inject(PdfExport)** method and set the [`allowPdfExport`](https://ej2.syncfusion.com/vue/documentation/api/maps#allowpdfexport) property to **true**. The rendered map can be exported as PDF using the [`export`](https://ej2.syncfusion.com/vue/documentation/api/maps#export) method. The [`export`](https://ej2.syncfusion.com/vue/documentation/api/maps#export) method requires three parameters: file type, file name, and orientation of the PDF document. The orientation setting is optional, where **0** indicates portrait orientation and **1** indicates landscape orientation.

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

The rendered maps with providers such as OSM, Bing, and Google static maps can be exported using the [`export`](https://ej2.syncfusion.com/vue/documentation/api/maps#export) method. It supports the following export formats.

* JPEG
* PNG
* PDF

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs81/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs81" %}