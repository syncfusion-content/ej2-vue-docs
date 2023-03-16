---
layout: post
title: Excel cell style customization in Vue Grid component | Syncfusion
description: Learn here all about Excel cell style customization in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Excel cell style customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Excel cell style customization in Vue Grid component

## Conditional cell formatting

Grid cells in the exported Excel can be customized or formatted using [`excelQueryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/grid/#excelquerycellinfo) event. In this event, we can format the grid cells of exported PDF document based on the column cell value.

In the below sample, we have set the background color for **Freight** column in the exported excel by **args.cell** and **backColor** property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/excel/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/excel/default-cs2" %}

## Theme

The excel export provides an option to include theme for exported excel document.

To apply theme in exported Excel, define the **theme** in [`exportProperties`](https://ej2.syncfusion.com/vue/documentation/api/grid/excelExportProperties/) .

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/excel/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/excel/default-cs3" %}

>By default, material theme is applied to exported excel document.

## Rotate a header text to a certain degree in the exported grid

The DataGrid has support to customize the column header styles such as changing text orientation, the font color, and so on in the exported Excel file. To achieve this requirement, use the [excelHeaderQueryCellInfo](https://ej2.syncfusion.com/vue/documentation/api/grid#excelheaderquerycellinfo) event of the Grid.

The `excelHeaderQueryCellInfo` will be triggered when creating a column header for the excel document to be exported. Customize the column header in this event.

In the following demo, using the `rotation` property of the style argument in the `excelHeaderQueryCellInfo` event, you can rotate the header text of the column header in the excel exported document.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/default-cs9" %}