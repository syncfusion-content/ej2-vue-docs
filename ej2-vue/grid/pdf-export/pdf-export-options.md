---
layout: post
title: Pdf export options in Vue Grid component | Syncfusion
description: Learn here all about Pdf export options in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Pdf export options 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Pdf export options in Vue Grid component

## Export current page

PDF export provides an option to export the current page into PDF. To export current page, define the [`exportType`](https://ej2.syncfusion.com/vue/documentation/api/grid/exportType) to **CurrentPage**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/pdf/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pdf/default-cs7" %}

## Export the selected records only

You can export the selected records data by passing it to `exportProperties.dataSource` property in the `toolbarClick` event.

In the below exporting demo, We can get the selected records using `getSelectedRecords` method and pass the selected data to `PdfExport` or `excelExport` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/export-filtered-data-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/export-filtered-data-cs3" %}

## Export filtered data only

You can export the filtered data by defining the resulted data in `exportProperties.dataSource` before export.

In the below Pdf exporting demo, We have gotten the filtered data by applying filter query to the grid data and then defines the resulted data in `exportProperties.dataSource` and pass it to `pdfExport` method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/export-filtered-data-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/export-filtered-data-cs4" %}

## Export hidden columns

PDF export provides an option to export hidden columns of Grid by defining the [`includeHiddenColumn`](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfExportProperties/#includehiddencolumn) as **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/pdf/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pdf/default-cs8" %}

## Show or hide columns

You can show a hidden column or hide a visible column while exporting the grid using [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbarclick) and [`pdfExportComplete`](https://ej2.syncfusion.com/vue/documentation/api/grid/#pdfexportcomplete) events.

In the [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbarclick) event, based on **args.item.id** as **Grid_pdfexport**. We can show or hide columns by setting [`column.visible`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#visible) property to **true** or **false** respectively.

In the pdfExportComplete event, We have reversed the state back to the previous state.

In the below example, we have **CustomerID** as a hidden column in the grid. While exporting, we have changed **CustomerID** to visible column and **ShipCity** as hidden column.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/pdf/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pdf/default-cs9" %}

## Change page orientation

Page orientation can be changed Landscape(Default Portrait) for the exported document using the [`pdfExportProperties`](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfExportProperties).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/pdf/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pdf/default-cs10" %}

## Change page size

Page size can be customized for the exported document using the [`pdfExportProperties`](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfExportProperties).
Supported page sizes are:
* Letter
* Note
* Legal
* A0
* A1
* A2
* A3
* A5
* A6
* A7
* A8
* A9
* B0
* B1
* B2
* B3
* B4
* B5
* Archa
* Archb
* Archc
* Archd
* Arche
* Flsa
* HalfLetter
* Letter11x17
* Ledger

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/pdf/default-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pdf/default-cs11" %}

## Define file name

You can assign the file name for the exported document by defining [fileName](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfExportProperties/#filename) property of [PdfExportProperties](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfExportProperties/) in the `toolbarClick` event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/pdf/default-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pdf/default-cs12" %}

## Font customization

### Default fonts

By default, grid uses **Helvetica** font in the exported document. You can change the default font by using [`pdfExportProperties.theme`](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfExportProperties/#theme) property. The available default fonts are,

* Helvetica
* TimesRoman
* Courier
* Symbol
* ZapfDingbats

The code example for changing default font,

```ts

    import { PdfStandardFont, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf-export';

    ...

    let pdfExportProperties = {
        theme: {
            header: {font:  new PdfStandardFont(PdfFontFamily.TimesRoman, 11, PdfFontStyle.Bold)},
            caption: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 9) },
            record: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 10) }
        }
    };

```

### Add custom font

You can change the default font of Grid header, content and caption cells in the exported document by using [`pdfExportProperties.theme`](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfExportProperties/#theme) property.

In the following example, we have used Algeria font to export the grid.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/pdf/default-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pdf/default-cs13" %}

> **PdfTrueTypeFont** accepts base 64 format of the Custom Font.
