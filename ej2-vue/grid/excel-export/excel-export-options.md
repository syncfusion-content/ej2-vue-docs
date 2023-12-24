---
layout: post
title: Excel export options in Vue Grid component | Syncfusion
description: Learn here all about Excel export options in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Excel export options 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Excel export options in Vue Grid component

The excel export provides an option to customize mapping of the grid to excel document.

To get start quickly with Excel export Options, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=z5g8G5Z_by8" %}

## Export current page

The excel export provides an option to export the current page into excel. To export current page, define [`exportType`](https://ej2.syncfusion.com/vue/documentation/api/grid/exportType) to **CurrentPage**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/excel/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/excel/default-cs4" %}

## Export the selected records only

You can export the selected records data by passing it to `exportProperties.dataSource` property in the `toolbarClick` event.

In the below exporting demo, We can get the selected records using `getSelectedRecords` method and pass the selected data to `PdfExport` or `excelExport` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/export-filtered-data-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/export-filtered-data-cs1" %}

## Export hidden columns

The excel export provides an option to export hidden columns of grid by defining [`includeHiddenColumn`](https://ej2.syncfusion.com/vue/documentation/api/grid/excelExportProperties/#includehiddencolumn) as **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/excel/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/excel/default-cs5" %}

## Show or hide columns

You can show a hidden column or hide a visible column while printing the grid using [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbarclick) and [`pdfExportComplete`](https://ej2.syncfusion.com/vue/documentation/api/grid/#pdfexportcomplete) events.

In the [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbarclick) event, based on **args.item.id** as **Grid_pdfexport**. We can show or hide columns by setting [`column.visible`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#visible) property to **true** or **false** respectively.

In the pdfExportComplete event, We have reversed the state back to the previous state.

In the below example, we have **CustomerID** as a hidden column in the grid. While exporting, we have changed **CustomerID** to visible column and **ShipCity** as hidden column.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/excel/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/excel/default-cs6" %}

## Export with filter options

The excel export provides an option to export with filter option in excel by defining `enableFilter` as **true** . It requires the [`allowFiltering`](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowfiltering) to be true.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/excel/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/excel/default-cs7" %}

## Exporting grouped records

The excel export provides outline option for grouped records which hides the detailed data for better viewing. In grid, we have provided the outline option for the exported document when the data's are grouped.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/excel/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/excel/default-cs8" %}

## Define file name

You can assign the file name for the exported document by defining **fileName** property in [`excelExportProperties`](https://ej2.syncfusion.com/vue/documentation/api/grid/excelExportProperties/).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/excel/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/excel/default-cs9" %}

## Export the master detail grid

It is possible to export the master-detail grid on the same Excel sheet using the `ExcelExportProperties` class in the grid.

To export the master-detail grid on the same sheet in the following sample, you need to set the `multipleExport.type` to `AppendToSheet` in the exportProperties. A promise object is created by exporting the master grid first, and then the detail grid is exported after the master grid has been successfully exported.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/print/mastergrid-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print/mastergrid-cs1" %}

## Export grid as blob

The Grid offers an option to export the data as a Blob instead of downloading it as a file in the browser. To export the grid as a Blob, set the `isBlob` parameter to **true** in the [excelExport](https://ej2.syncfusion.com/vue/documentation/api/grid/#excelexport) method. The grid returns the promise of a blob in the [excelExportComplete](https://ej2.syncfusion.com/vue/documentation/api/grid/#excelexportcomplete) event.

The following example demonstrates how to obtain the blob data of the exported grid by executing the promise in the `excelExportComplete` event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/excel/export-grid-as-blob-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/excel/export-grid-as-blob-cs1" %}
