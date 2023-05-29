---
layout: post
title: Adding header and footer in Vue Grid component | Syncfusion
description: Learn here all about Adding header and footer in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Adding header and footer 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Adding header and footer in Vue Grid component

PDF export provides an option to customize mapping of grid to exported PDF document.

To get start quickly with PDF export Options, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=z5g8G5Z_by8" %}

You can customize text, page number, line, page size and changing orientation in header and footer.

## Write a text in header and footer

You can add text either in Header or Footer of exported PDF document using [`pdfExportProperties`](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfExportProperties).

```ts

let pdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Text',
                value: "Northwind Traders",
                position: { x: 0, y: 50 },
                style: { textBrushColor: '#000000', fontSize: 13 }
            },
        ]
    }
}

```

## Draw a line in header and footer

you can add line either in Header or Footer of the exported PDF document.

Supported line styles:
* Dash
* Dot
* DashDot
* DashDotDot
* Solid

```ts

let pdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Line',
                style: { penColor: '#000080', penSize: 2, dashStyle: 'Solid' },
                points: { x1: 0, y1: 4, x2: 685, y2: 4 }
            }
        ]
    }
}

```

## Add page number in header and footer

you can add page number either in Header or Footer of exported PDF document.

Supported page number types:
* LowerLatin - a, b, c,
* UpperLatin - A, B, C,
* LowerRoman - i, ii, iii,
* UpperRoman - I, II, III,
* Number - 1,2,3.

```ts

 let pdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'PageNumber',
                pageNumberType: 'Number',
                format: 'Page {$current} of {$total}', //optional
                position: { x: 0, y: 25 },
                style: { textBrushColor: '#ffff80', fontSize: 15, hAlign: 'Center' }
            }
        ]
    }
}

```

## Insert an image in header and footer

Image (Base64 string with .jpeg format) can be added in the exported document in header/footer using the [`pdfExportProperties`](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfExportProperties).

```ts

let pdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Image',
                src: image,
                position: { x: 435, y: 10 },
                size: { height: 100, width: 250 },
            }
        ]
    }
}

```

The below code illustrates the pdf export customization.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/pdf/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pdf/default-cs3" %}

## Repeat column header on every page

By default, column header will be placed on the first page of the pdf document but you can display column header on every page using **repeatHeader** property of **pdfGrid**.

In the below sample, we have enabled **repeatHeader** property in [`pdfHeaderQueryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/grid/#pdfheaderquerycellinfo)event to show the header on every page.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/pdf/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pdf/default-cs4" %}