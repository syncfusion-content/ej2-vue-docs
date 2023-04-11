---
layout: post
title: AutoFit columns in Vue Grid component | Syncfusion
description: Learn here all about AutoFit columns in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: AutoFit columns 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# AutoFit columns in Vue Grid component

The Grid has a feature that allows it to automatically adjust column widths based on the maximum content width of each column when you double-click on the resizer symbol located in a specific column header. This feature ensures that all data in the grid rows is displayed without wrapping. To use this feature, you need to inject the **Resize** module in the provide section and enable the resizer symbol in the column header by setting the [allowResizing](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowresizing) property to true in the grid.

## Resizing a Column to fit its content using autoFit method

The [autoFitColumns](https://ej2.syncfusion.com/vue/documentation/api/grid/#autofitcolumns) method resizes the column to fit the widest cell's content without wrapping. You can autofit a specific column at initial rendering by invoking the `autoFitColumns` method in [dataBound](https://ej2.syncfusion.com/vue/documentation/api/grid/#databound) event.

To use the `autoFitColumns` method, inject the **Resize** module in the provide section.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs1" %}

> You can autofit all the columns by invoking the `autoFitColumns` method without specifying column names.

## AutoFit columns with empty space

The Autofit feature is utilized to display columns in a grid based on the defined width specified in the columns declaration. If the total width of the columns is less than the width of the grid, this means that white space will be displayed in the grid instead of the columns auto-adjusting to fill the entire grid width.

You can enable this feature by setting the [autoFit](https://ej2.syncfusion.com/vue/documentation/api/grid/#autofit) property set to true. This feature ensures that the column width is rendered only as defined in the Grid column definition.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/autofit-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/autofit-cs1" %}

>If any one of the column width is undefined, then the particular column will automatically adjust to fill the entire width of the grid table, even if you have enabled the `autoFit` property of grid.
