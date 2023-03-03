---
layout: post
title: Formulas in Vue Spreadsheet component | Syncfusion
description: Learn here all about Formulas in Syncfusion Vue Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Formulas 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Formulas in Vue Spreadsheet component

Formulas are used for calculating the data in a worksheet. You can refer the cell reference from same sheet or from different sheets.

## Usage

You can set formula for a cell in the following ways,

* Using the `formula` property from `cell`, you can set the formula or expression to each cell at initial load.
* Set the formula or expression through data binding.
* You can set formula for a cell by [`editing`](./editing).
* Using the [`updateCell`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#updatecell) method, you can set or update the cell formula.

## User Defined Functions

The list of formulas supported in the spreadsheet is sufficient for most of your calculations. If not, you can add your own custom function using the [`addCustomFunction`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#addcustomfunction) method. Use [`computeExpression`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#computeexpression) method, if you want to compute any formula or expression.

The following code example shows the calculation of data using supported and custom `formulas` in the spreadsheet.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/spreadsheet/formula-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/formula-cs1" %}

## Formula bar

Formula bar is used to edit or enter cell data in much easier way. By default, the formula bar is enabled in the spreadsheet. Use the [`showFormulaBar`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#showformulabar) property to enable or disable the formula bar.

## Named Ranges

You can define a meaningful name for a cell range and use it in the formula for calculation. It makes your formula much easier to understand and maintain. You can add named ranges to the Spreadsheet in the following ways,

* Using the [`definedNames`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#definednames) collection, you can add multiple named ranges at initial load.
* Use the [`addDefinedName`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#adddefinedname) method to add a named range dynamically.
* You can remove an added named range dynamically using the [`removeDefinedName`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#removedefinedname) method.
* Select the range of cells, and then enter the name for the selected range in the name box.

The following code example shows the usage of named ranges support.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/spreadsheet/defined-name-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/defined-name-cs1" %}

## Supported Formulas

The list of supported formulas can be find in following [`link`](https://ej2.syncfusion.com/documentation/spreadsheet/formulas#supported-formulas).

## Note

You can refer to our [Vue Spreadsheet](https://www.syncfusion.com/vue-ui-components/vue-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Spreadsheet example](https://ej2.syncfusion.com/vue/demos/#/material/spreadsheet/default.html) to knows how to present and manipulate data.

## See Also

* [Editing](./editing)
* [Formatting](./formatting)
* [Open](./open)
* [Save](./save)
