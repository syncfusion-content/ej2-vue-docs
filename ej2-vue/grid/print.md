---
layout: post
title: Print in Vue Grid component | Syncfusion
description: Learn here all about Print in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Print 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Print in Vue Grid component

The printing feature in Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows you to easily generate and print a representation of the grid's content for better offline accessibility and documentation. You can enable this feature using either the grid's toolbar or the programmatically available `print` method.

To add the printing option to the grid's toolbar, simply include the [toolbar](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbar) property in your grid configuration and add the **Print** as toolbar item. This will allow you to directly initiate the printing process while click on the Print item from the toolbar.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/print/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/print/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print/default-cs2" %}

## Page setup

When printing a webpage, some print options, such as layout, paper size, and margin settings, cannot be configured through JavaScript code. Instead, you need to customize these settings using the browser's page setup dialog. Below are links to the page setup guides for popular web browsers:

* [Chrome](https://support.google.com/chrome/answer/1069693?hl=en&visit_id=1-636335333734668335-3165046395&rd=1)
* [Firefox](https://support.mozilla.org/en-US/kb/how-print-web-pages-firefox)
* [Safari](http://www.mintprintables.com/print-tips/adjust-margins-osx/)
* [IE](http://www.helpteaching.com/help/print/index.htm)

## Print by external button

You can print the grid's content using an external button by utilizing the [print](https://ej2.syncfusion.com/vue/documentation/api/grid/#print) method. This method allows you to trigger the printing process programmatically.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/print/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/print/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print/default-cs3" %}

## Print visible Page

By default, the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid prints all the pages of the grid. The [printMode](https://ej2.syncfusion.com/vue/documentation/api/grid/#printmode) property within the grid grants you control over the printing process. However, if you want to print only the current visible page, you can achieve this by setting the [printMode](https://ej2.syncfusion.com/vue/documentation/api/grid/#printmode) property to **CurrentPage**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/print/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/print/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print/default-cs4" %}

## Print only selected records

By default, the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid prints all the data bound to its dataSource. However, there might be cases where you want to print only the selected records from the grid. The Vue Grid provides an option to achieve this by binding to the [beforePrint](https://ej2.syncfusion.com/vue/documentation/api/grid/#beforeprint) event, where you can replace the rows of the printing grid with the selected rows.

Below is an example code that demonstrates how to print only the selected records from the Vue Grid:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/print/default-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/print/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print/default-cs6" %}

## Print the hierarchy grid

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid allows you to print hierarchy grids, which consist of a parent grid and its child grids. By default, when you print a hierarchy grid, it includes the parent grid and expanded child grids only. However, you can customize the print behavior using the [hierarchyPrintMode](https://ej2.syncfusion.com/vue/documentation/api/grid/#hierarchyprintmode) property.

The `hierarchyPrintMode` property in the Vue Grid lets you control the printing behavior for hierarchy grids. You can choose from three options:

| Mode     | Behavior                                                                        |
| -------- | ------------------------------------------------------------------------------- |
| Expanded | Prints the parent grid with expanded child grids.                               |
| All      | Prints the parent grid with all the child grids, whether expanded or collapsed. |
| None     | Prints the parent grid alone.                                                   |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/print/default-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/print/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print/default-cs10" %}

## Print the master detail grid

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid provides the option to visualize details of a record in another grid in a master-detail manner. By default, when you print a master-detail grid, only the master grid is included in the print output. However, you can customize the print behavior to include both the master and detail grids using the `beforePrint` event of the grid.

The [beforePrint](https://ej2.syncfusion.com/vue/documentation/api/grid/#beforeprint) event in the Vue Grid is triggered before the actual printing process begins. You can handle this event to customize the print output. By adding the detail grid to the `element` argument of the `beforePrint` event, you can ensure that both the master and detail grids are printed on the page.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/print/mastergrid-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/print/mastergrid-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print/mastergrid-cs2" %}

## Print large number of columns

When printing a grid with a large number of columns, the browser's default page size (usually A4) might not be sufficient to display all the columns properly. As a result, the browser's print preview may automatically hide the overflowed content, leading to a cut-off appearance.

To show a large number of columns when printing, you can adjust the scale option from the print option panel based on your content size. This will allow you to fit the entire grid content within the printable area.

![Scale Option Setting](./images/print-preview.png)

## Show or hide columns while printing

In the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid, you have the flexibility to control the visibility of columns during the printing process. You can dynamically show or hide specific columns using the [toolbarClick](https://ej2.syncfusion.com/vue/documentation/api/grid#toolbarclick) and [printComplete](https://ej2.syncfusion.com/vue/documentation/api/grid#printcomplete) events while printing. This capability enhances your control over which columns are included in the printed output, allowing you to tailor the printed grid to your specific needs.

In the [toolbarClick](https://ej2.syncfusion.com/vue/documentation/api/grid#toolbarclick) event, you can show or hide columns by setting [column.visible](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#visible) property to **true** or **false** respectively.

In the `printComplete` event, the column visibility state is reset back to its original configuration.

Here's a code example that demonstrates how to show a hidden column (CustomerID) and hide a visible column (ShipCity) during printing and then reset their visibility after printing:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/print/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/print/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print/default-cs5" %}

## Print the expanded state from other pages

By default, when printing, the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid only includes the expanded child Grids visible on the current page. However, you can enhance the printing functionality to include expanded child Grids from other pages. This can be achieved using the [load](https://ej2.syncfusion.com/vue/documentation/api/grid/#load) and [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionbegin) events, which help manage the expanded state of rows across different pages.

The following example demonstrates how to print the expanded child Grids from other pages:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/print/print-expanded-state/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/print/print-expanded-state/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print/print-expanded-state" %}

## Add a title when using Grid print function

You can add a title to the header when printing the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid by utilizing the [beforePrint](https://ej2.syncfusion.com/vue/documentation/api/grid/#beforeprint) event. This event allows you to customize the print layout, including the addition of a title element, ensuring that the printed document is informative and visually appealing.

Here’s an example of how to add a title to your Grid when using the print function:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/print/default-print/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/print/default-print/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print/default-print" %}

## Limitations of printing large data

Printing a large volume of data all at once in the grid can have certain limitations due to potential browser performance issues. Rendering numerous DOM elements on a single page can lead to browser slowdowns or even hang the browser. The grid offers a solution to manage extensive datasets through virtualization. However, it's important to note that virtualization for both rows and columns is not feasible during the printing process.

If printing all the data remains a requirement, an alternative approach is recommended. Exporting the grid data to formats like [Excel](https://ej2.syncfusion.com/vue/documentation/grid/excel-exporting/) or [CSV](https://ej2.syncfusion.com/vue/documentation/grid/excel-exporting/) or [Pdf](https://ej2.syncfusion.com/vue/documentation/grid/pdf-export/) is advised. This exported data can then be printed using non-web-based applications, mitigating the potential performance challenges associated with printing large datasets directly from the browser.

## Retain grid styles while printing

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid provides a [beforePrint](https://ej2.syncfusion.com/vue/documentation/api/grid/#beforeprint) event that allows you to customize the appearance and styles of the grid before it is sent to the printer. By handling this event, you can ensure that the grid retains its styles and appearance while printing.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/print/default-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/print/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print/default-cs7" %}

## Print grid along with other components

To print the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid along with another component, such as a chart, you can use the [beforePrint](https://ej2.syncfusion.com/vue/documentation/api/grid/#beforeprint) event of the grid. In this event, you can clone the content of the other component and append it to the print document.

Here is an example of how to print grid along with chart component:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/print/default-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/print/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print/default-cs8" %}


