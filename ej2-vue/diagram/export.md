---
layout: post
title: Export in Vue Diagram component | Syncfusion
description: Learn here all about Export in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Export 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Export in Vue Diagram component

Diagram provides support to export its content as image/svg files. The  [`exportDiagram`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#exportdiagram) method of diagrams helps to export the diagram. The following code illustrates how to export the diagram as image.

>Note: To use Print and Export, you need to inject `PrintAndExport` in the diagram.

<!-- markdownlint-disable MD033 -->

```javascript
export default {
    name: 'app'
    data() {
        return {
            width: "100%",
            height: "350px",
        }
    },
    methods: {
        // Function to handle the export button click
        exportItems() {
            const exportOptions = {};
            exportOptions.mode = 'Download';
            diagramInstance.exportDiagram(exportOptions);
        },
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    }
}
```

## Exporting options

The diagram provides support to export the desired region of the diagram to various formats. The following table shows the list of [`exportOptions`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iExportOptions/#iexportoptions) in diagram.

| Name | Type | Description|
|-------- | -------- | -------- |
| bounds | object | Sets the bounds that has to be exported |
| region | enum | Sets the region of the diagram to be exported. |
| fileName | string | Sets the file name of the exported image. |
| format | string | Sets the export image format. |
| mode | string | Sets the Mode for the file to be downloaded. |
| margin | object | Sets the margin of the page to be exported. |
| stretch| enum | Sets the aspect ratio of the exported image.|
| multiplePage | boolean | exports the diagram into multiple pages. |
| pageWidth | number | Sets the page width of the diagram while exporting the diagram into multiple pages. |
| pageHeight| number | Sets the page height of the diagram while exporting the diagram into multiple pages.|
| pageOrientation | enum | Sets the orientation of the page. |

### File Name

[`FileName`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iExportOptions/#filename) is the name of the file to be downloaded. By default, the file name is set to **Diagram**.

### Format

[`Format`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iExportOptions/#format) is to specify the type/format of the exported file. By default, the diagram is exported as .jpg format. You can export diagram to the following formats:

* JPG
* PNG
* BMP
* SVG


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/export/export-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/export/export-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/export/export-cs1" %}

### Margin

[`Margin`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iExportOptions/#margin) specifies the amount of space that has to be left around the diagram.


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/export/export-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/export/export-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/export/export-cs2" %}


### Mode

[`Mode`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iExportOptions/#mode) specifies whether to export the diagram as an image or to return the base64 data of the diagram. The available export modes are:

* Download: Exports and downloads the diagram as an image or SVG file.
* Data: Returns a base64 string representation of the diagram.

The following code example illustrates how to export the diagram as raw data.

<!-- markdownlint-disable MD033 -->

```javascript
export default {
    name: 'app'
    data() {
        return {
            width: "100%",
            height: "350px",
        }
    },
    methods: {
        // Function to handle the export button click
        exportItems() {
            const exportOptions = {};
            exportOptions.mode = 'Data';
            exportOptions.margin = { left: 10, right: 10, top: 10, bottom: 10 };
            exportOptions.fileName = 'format';
            exportOptions.format = 'SVG';
            let base64data = diagramInstance.exportDiagram(exportOptions);
        },
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    }
}
```

### Region

Exporting particular region of diagram is possible by using the [`region`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iExportOptions/#region) property of the [`exportOptions`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iExportOptions/#iexportoptions). The available export regions are listed in the table below.

| Region | Description |
|-------- | -------- |
| PageSettings | The region to be exported will be based on the given page settings |
| Content | Only the content of the diagram control will be exported | 
| CustomBounds | The region to be exported will be explicitly defined |

The following example shows how to export diagram with different regions.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/export/export-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/export/export-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/export/export-cs3" %}


>Note: The [`bounds`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iExportOptions/#bounds) property of [`exportOptions`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iExportOptions/#iexportoptions) should be defined to export the diagram with CustomBounds region.


### MultiplePage

When the [`multiplePage`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iExportOptions/#multiplepage) option is set to false, the diagram is exported as a single image. When it set to true, the diagram is exported as multiple images based on its width and height.

The following code example demonstrates how to export the diagram as multiple images.


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/export/export-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/export/export-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/export/export-cs4" %}


### Export image

You can pass the base64 data of an image to the [`exportImage`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#exportimage) method to export it directly. The following example shows how to export base64 data using the `exportImage` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/export/export-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/export/export-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/export/export-cs5" %}


### Get diagram content

To get the html diagram content, the [`getDiagramContent`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#getdiagramcontent) method is used. the following example shows how to get the diagram content at runtime.


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/export/export-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/export/export-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/export/export-cs6" %}


### Export diagram with stretch option

Diagram provides support to export the diagram as image for [`stretch`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iExportOptions/#stretch) option. The exported images will be clearer but larger in file size.

The following code example illustrates how to export the region occupied by the diagram elements.


```javascript
export default {
    name: 'app'
    data() {
        return {
            width: "100%",
            height: "350px",
        }
    },
    methods: {
        // Function to handle the export button click
        exportItems() {
            const exportOptions = {};
            exportOptions.mode = 'Download';
            exportOptions.margin = { left: 10, right: 10, top: 10, bottom: 10 };
            exportOptions.fileName = 'region';
            exportOptions.format = 'SVG';
            exportOptions.region = 'Content';
            exportOptions.stretch = 'Stretch';
            diagramInstance.exportDiagram(exportOptions);
        },
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    }
}
```

## Limitations

Currently, printing diagram with native and HTML nodes is not supported. To overcome this limitation, we make use of the Syncfusion Essential PDF library. This library incorporates the Syncfusion Essential HTML converter, which employs the advanced Blink rendering engine. This converter seamlessly transforms HTML content into images. Refer to [`export Html-and-Native node`](https://support.syncfusion.com/kb/article/15531/how-to-print-or-export-the-html-and-native-node-into-image-format-using-vue-diagram) kb for more information.