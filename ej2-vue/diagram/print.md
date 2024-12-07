---
layout: post
title: Print in Vue Diagram component | Syncfusion®
description: Learn here all about Print in Syncfusion® Vue Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Print in Vue Diagram component

The [`print`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#print) method helps to print the diagram as image.

```javascript

 const options={};
 diagramInstance.print(options);

```

>Note: To Print diagram you need to inject `PrintAndExport` in the diagram.

## Print Options

The diagram can be customized while printing using the following properties of [`printOptions`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iPrintOptions/).

The available print options are listed in the table below.

| Name | Type | Description|
|-------- | -------- | -------- |
| region | enum | Sets the region of the diagram to be printed. |
| margin | object | Sets the margin of the page to be printed. |
| stretch| enum | Resizes the diagram content to fill its allocated space and printed.|
| multiplePage | boolean | Prints the diagram into multiple pages. |
| pageWidth | number | Sets the page width of the diagram while printing the diagram into multiple pages. |
| pageHeight| number | Sets the page height of the diagram while printing the diagram into multiple pages.|
| pageOrientation | enum | Sets the orientation of the page. |

### Region

Printing particular region of diagram is possible by using the [`region`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iPrintOptions/#region) property of the [`printOptions`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iPrintOptions/).

The following code example illustrates how to print the diagram based on region.


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/print/print-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/print/print-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/print/print-cs1" %}


### Multiple page

Printing a diagram across multiple pages is possible by setting the [`multiplePage`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iPrintOptions/#multiplepage) property of `printOptions` to true.

The following code example demonstrates how to set multiplePage to true:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/print/print-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/print/print-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/print/print-cs2" %}

### Margin

The margin for the print region can be set using the [`margin`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iPrintOptions/#margin) property of the `printOptions`

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/print/print-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/print/print-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/print/print-cs3" %}


### Page width and Page height

The [`pageHeight`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iPrintOptions/#pageheight) and [`pageWidth`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iPrintOptions/#pagewidth) property of `printOptions` is used to set the size of the printing image. The following example demonstrates how to set the pageWidth and pageHeight.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/print/print-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/print/print-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/print/print-cs4" %}


### Page Orientation

[`pageOrientation`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iPrintOptions/#pageorientation) of `printOptions` is used to set the orientation of the page to be printed.

* Landscape - Display with page Width is more than the page Height.
* Portrait - Display with page Height is more than the page width.

The following example shows how to set pageOrientation for the printOptions.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/print/print-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/print/print-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/print/print-cs5" %}


## Limitations


Currently, printing diagram with native and HTML nodes is not supported. To overcome this limitation, we make use of the Syncfusion Essential® PDF library. This library incorporates the Syncfusion Essential® HTML converter, which employs the advanced Blink rendering engine. This converter seamlessly transforms HTML content into images. Refer to [`export Html-and-Native node`](https://support.syncfusion.com/kb/article/15531/how-to-print-or-export-the-html-and-native-node-into-image-format-using-vue-diagram) kb for more information.

## See Also

* [How to Print multiple diagrams in single click](https://support.syncfusion.com/kb/article/15168/how-to-print-multiple-diagrams-in-a-single-shot-in-vue)