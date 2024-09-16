---
layout: post
title: Print in Vue Grid Component | Syncfusion
description: Learn here all about print in Syncfusion Essential Vue Grid component, it's elements and more details.
control: Print 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Print in Vue Grid component

To print the Grid, use the [`Print`](https://ej2.syncfusion.com/vue/documentation/api/grid/print/#print) method from grid instance. The print option can be displayed on the [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbar) by adding the `Print` toolbar item.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/print/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print/default-cs2" %}

## Page Setup

Some of the print options cannot be configured through JavaScript code. So, you have to customize the layout, paper size, and margin options using the browser page setup dialog. Please refer to the following links to know more about the browser page setup:

* [`Chrome`](https://support.google.com/chrome/answer/1069693?hl=en&visit_id=1-636335333734668335-3165046395&rd=1)
* [`Firefox`](https://support.mozilla.org/en-US/kb/how-print-web-pages-firefox)
* [`Safari`](https://www.mintprintables.com/print-tips/adjust-margins-osx/)
* [`IE`](https://www.helpteaching.com/help/print/index.htm)

## Print by external button

To print the grid from an external button, invoke the [`print`](https://ej2.syncfusion.com/vue/documentation/api/grid/print/#print) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/print/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print/default-cs3" %}

## Print visible Page

By default, the grid prints all the pages. To print the current page alone, set the [`printMode`](https://ej2.syncfusion.com/vue/documentation/api/grid/#printmode) to `CurrentPage`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/print/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print/default-cs4" %}

## Print the hierarchy grid

By default, the grid will be print the master and expanded child grids alone. you can change the print option by using the [`hierarchyPrintMode`](https://ej2.syncfusion.com/vue/documentation/api/grid/#hierarchyprintmode) property. The available options are,

| Mode     | Behavior    |
|----------|-------------|
| Expanded | Prints the master grid with expanded child grids. |
| All      | Prints the master grid with all the child grids. |
| None     | Prints the master grid alone. |

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/hierarchy-grid/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/hierarchy-grid/default-cs10" %}

## Print the master detail grid

The Grid has the option to visualize details of a record in another Grid in a master and detailed manner. By default, Grid will print the master grid alone. Instead of this, it is possible to print both the master and detail grids by using the [beforePrint](https://ej2.syncfusion.com/vue/documentation/api/grid/#beforeprint) event of the Grid.

In the following sample, the detail grid is added to the `element` argument of the `beforePrint` event, resulting in both the master and detail grids being printed on the page.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/print/mastergrid-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print/mastergrid-cs2" %}

## Print large number of columns

By default, the browser uses A4 as page size option to print pages and to adapt the size of the page the browser print preview will auto-hide the overflowed contents. Hence grid with large number of columns will cut off to adapt the print page.

To show large number of columns when printing, adjust the scale option from print option panel based on your content size.

![Scale Option Setting in Vue Grid Print](./images/vue-grid-print-preview.png)

## Show or Hide columns while Printing

You can show a hidden column or hide a visible column while printing the grid using [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbarclick) and [`printComplete`](https://ej2.syncfusion.com/vue/documentation/api/grid/#printcomplete) events.

In the `toolbarClick` event, based on `args.item.id` as `grid_print`. We can show or hide columns by setting `column.visible` property to `true` or `false` respectively.

In the printComplete event, We have reversed the state back to the previous state.

In the below example, we have `CustomerID` as a hidden column in the grid. While printing, we have changed `CustomerID` to visible column and `ShipCity` as hidden column.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/print/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print/default-cs5" %}

## Limitations of Printing Large Data

When grid contains large number of data, printing all the data at once is not a best option for the browser performance. Because to render all the DOM elements in one page will produce performance issues in the browser. It leads to browser slow down or browser hang. Grid have option to handle large number of data by Virtualization. However while printing, it is not possible to use virtualization for rows and columns.

If printing of all the data is still needed, we suggest to Export the grid to `Excel` or `CSV` or `Pdf` and then print it from another non-web based application.