---
layout: post
title: Row template in Vue Grid component | Syncfusion
description: Learn here all about Row template in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Row template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Row template in Vue Grid component

The row template feature in Grid allows you to customize the appearance and layout of rows in the grid. This feature is useful when you want to display custom content, such as images, buttons, or other controls, within the rows.

To enable the row template feature, you need to set the [rowTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowtemplate) property of the Grid component. This property accepts a custom HTML template that defines the layout for each row. 

In the following example, Employee Information with Employee Photo is presented in the first column and employee details like Name, Address, etc., are presented in the second column.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/row/row-template/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/row-template" %}

## Row template with formatting

The row template feature in Syncfusion Grid allows you to customize the layout of rows in the grid. This is useful when you want to display images, buttons, or other custom content within the rows of a grid.

By default, Syncfusion Grid provides the [columns.format](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#format) property to format the values displayed in each column. However, when using the [rowtemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowtemplate), the `columns.format` property cannot be directly applied to format the values inside the template.

To format the values within the row template, you can define a global function that handles the formatting logic. This function can be invoked inside the template to format the corresponding values.

Here is an example of how to define a global formatting function for a date column and use it inside a `rowTemplate`:

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/row/row-template-format/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/row-template-format" %}


>When using the `rowTemplate` feature in Syncfusion Grid, keep in mind that any formatting applied to columns using the `columns.format` property will not work inside the template.

## Render syncfusion control in row template

The Grid allows you to render custom Syncfusion controls within the rows of the grid. This feature is helpful as it enables you to display interactive Syncfusion controls instead of field values in the grid.

To enable a Syncfusion control in a row template, you need to set the [rowTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowtemplate) property of the Grid component. This property accepts a custom HTML template that defines the layout for each row. 

Here is an example that demonstrates rendering Syncfusion controls within a row template :

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/row/row-template-custom/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/row-template-custom" %}

## Limitations

Row template feature is not compatible with all the features which are available in the grid, and it has limited features support. The features that are incompatible with the row template feature are listed below.

* Filtering
* Paging
* Sorting
* Searching
* Rtl
* Export
* Context Menu
* State Persistence
* Selection
* Grouping
* Editing
* Frozen rows & columns
* Virtual & Infinite scrolling
* Column chooser
* Column menu
* Detail Row
* Foreignkey column
* Resizing
* Reordering
* Aggregates
* Clipboard
* Adaptive view