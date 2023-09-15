---
layout: post
title: Pdf export options in Vue Treegrid component | Syncfusion
description: Learn here all about Pdf export options in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Pdf export options 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Pdf export options in Vue Treegrid component

## Export hidden columns

PDF export provides an option to export hidden columns of TreeGrid by defining the `includeHiddenColumn` as `true`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/pdf/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/pdf/default-cs4" %}

## Show or hide columns on exported PDF

You can show a hidden column or hide a visible column while exporting the treegrid using [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#toolbarclick) and [`pdfExportComplete`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#pdfExportComplete) events.

In the `toolbarClick` event, based on `args.item.text` as `PDF Export`. We can show or hide columns by setting `column.visible` property to `true` or `false` respectively.

In the pdfExportComplete event, We have reversed the state back to the previous state.

In the below example, we have `Duration` as a hidden column in the treegrid. While exporting, we have changed `Duration` to visible column and `StartDate` as hidden column.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/pdf/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/pdf/default-cs5" %}

## How to change page orientation

Page orientation can be changed Landscape(Default Portrait) for the exported document using the `exportProperties`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/pdf/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/pdf/default-cs6" %}

## How to change page size

Page size can be customized for the exported document using the `exportProperties`.
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
{% include code-snippet/treegrid/pdf/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/pdf/default-cs7" %}

## To customize PDF export

PDF export provides an option to customize mapping of treegrid to exported PDF document.

### File name for exported document

You can assign the file name for the exported document by defining `fileName` property in `PdfExportProperties`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/pdf/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/pdf/default-cs8" %}

### Default fonts for PDF exporting

By default, treegrid uses `Helvetica` font in the exported document. You can change the default font by using `pdfExportProperties.theme` property. The available default fonts are,

* Helvetica
* TimesRoman
* Courier
* Symbol
* ZapfDingbats

The code example for changing default font,

```ts

    import { PdfStandardFont, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf-export';

    ...

    let pdfExportProperties: PdfExportProperties = {
        theme: {
            header: {font:  new PdfStandardFont(PdfFontFamily.TimesRoman, 11, PdfFontStyle.Bold),
            record: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 10) }
        }
    };

```

### Add custom font for PDF exporting

You can change the default font of TreeGrid header, content and caption cells in the exported document by using `pdfExportProperties.theme` property.

In the following example, we have used Advent Pro font to export the treegrid with Hungarian fonts.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/pdf/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/pdf/default-cs9" %}

> `PdfTrueTypeFont` accepts base 64 format of the Custom Font.