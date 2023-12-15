---
layout: post
title: Excel exporting in Vue Grid Component | Syncfusion
description: Learn here all about excel exporting in Syncfusion Essential Vue Grid component, its elements and more.
control: Excel exporting 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Excel exporting in Vue Grid Component

The excel export allows exporting Grid data to Excel document. You need to use the
 [`excelExport`](https://ej2.syncfusion.com/vue/documentation/api/grid/#excelexport) method for exporting. To enable Excel export in the grid, set the [`allowExcelExport`](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowexcelexport) as true.

To use excel export, inject **ExcelExport** module in the **provide** section.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/excel/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/excel/default-cs10" %}

## Show spinner while exporting

You can show/ hide spinner component while exporting the grid using `showSpinner`/ `hideSpinner` methods. You can use `toolbarClick` event to show spinner before exporting and hide a spinner in the `pdfExportComplete` or `excelExportComplete` event after the exporting.

In the `toolbarClick` event, based on the parameter `args.item.id` as `Grid_pdfexport` or `Grid_excelexport` we can call the `showSpinner` method from grid instance.

In the `pdfExportComplete` or `excelExportComplete` event, We can call the `hideSpinner` method.

In the below demo, we have rendered the default spinner component when exporting the grid.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/pdf/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pdf/default-cs1" %}

## Custom data source

The excel export provides an option to define datasource dynamically before exporting. To export data dynamically, define the **dataSource** in [`excelExportProperties`](https://ej2.syncfusion.com/vue/documentation/api/grid/excelExportProperties/).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/excel/default-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/excel/default-cs11" %}

## Passing additional parameters to the server when exporting

You can pass the additional parameter in the `query` property by invoking `addParams` method. In the `toolbarClick` event, you can define params as key and value pair so it will receive at the server side when exporting.

In the below example, we have passed `recordcount` as `12` using `addParams` method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/pdf/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pdf/default-cs2" %}

## See Also

* [Exporting Grid in Cordova application](../how-to/exporting-grid-in-cordova-application)