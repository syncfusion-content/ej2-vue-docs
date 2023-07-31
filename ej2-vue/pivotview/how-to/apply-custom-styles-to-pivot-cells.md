---
layout: post
title: Apply custom style to pivot cells in Vue Pivotview component | Syncfusion
description: Learn here all about Apply custom style to pivot cells in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Apply custom style to pivot cells 
documentation: ug
domainurl: ##DomainURL##
---

# Apply custom style to pivot cells in Vue Pivotview component

The [`queryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/grid/#querycellinfo) event in [`gridSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/gridSettings) can be used to apply custom style to row and value cells, and the [`headerCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/grid/#headercellinfo) event in [`gridSettings`](https://helpej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) can be used to apply custom styles to column cells.

In the following example, a custom style has been applied to the column header **"Sold Amount"** under **"FY 2016"** via the [`headerCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/grid/#headercellinfo) event and to the row header **"Germany"** and its aggregated value via the [`queryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/grid/#querycellinfo) event by adding the **"e-custom"** class to the cell element.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs262/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs262" %}

N> The **dot(.)** character in **FY 2016.Sold Amount** is used by default to identify the header levels in the pivot table's row and column. It can be changed by setting the [`headerDelimiter`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iValueSortSettings/#headerdelimiter) in the [`valueSortSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iValueSortSettings/) property to any other delimiter instead of the default separator.