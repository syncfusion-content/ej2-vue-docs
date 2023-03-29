---
layout: post
title: Export multiple grids in Vue Grid component | Syncfusion
description: Learn here all about Export multiple grids in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Export multiple grids 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Export multiple grids in Vue Grid component

The excel export provides an option to export multiple grid data in the same excel file.

## Same sheet

The excel export provides support to export multiple grids in same sheet. To export in same sheet, define [`multipleExport.type`](https://ej2.syncfusion.com/vue/documentation/api/grid/multipleExport/#type) as **AppendToSheet** in [`excelExportProperties`](https://ej2.syncfusion.com/vue/documentation/api/grid/excelExportProperties). It have an option to provide blank rows between grids. These blank rows count can be defined by using the [`multipleExport.blankRows`](https://ej2.syncfusion.com/vue/documentation/api/grid/multipleExport/#blankrows).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/excel/multiple-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/excel/multiple-cs1" %}

>By default, [`multipleExport.blankRows`](https://ej2.syncfusion.com/vue/documentation/api/grid/multipleExport/#blankrows) value is 5.

## New sheet

Excel exporting provides support to export multiple grids in new sheet. To export in new sheet, define  [`multipleExport.type`](https://ej2.syncfusion.com/vue/documentation/api/grid/multipleExport/#blankrows) as **NewSheet** in [`excelExportProperties`](https://ej2.syncfusion.com/vue/documentation/api/grid/excelExportProperties).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/excel/multiple-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/excel/multiple-cs2" %}