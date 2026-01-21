---
layout: post
title: Apply custom style to pivot cells in Vue  | Syncfusion
description: Learn here all about Apply custom style to pivot cells in Syncfusion Vue Pivot Table component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Apply custom style to pivot cells 
documentation: ug
domainurl: ##DomainURL##
---

# Apply custom style to pivot cells in Vue Pivot Table component

The Vue Pivot Table component allows you to alter the appearance of pivot cells using event handlers. This guide demonstrates how to apply custom styling to specific cells in your pivot table.

## Overview

You can apply custom styles to different types of cells in the pivot table:
- Use the [`queryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/grid#querycellinfo) event to style row headers and value cells.
- Use the [`headerCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/grid#headercellinfo) event to style column headers.

Both events are available through the [`gridSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/gridSettings) property of the Pivot Table component.

## Implementation example

The following example shows how to apply styles to:
- The column header **"Sold Amount"** under **"FY 2016"** using the [`headerCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/grid#headercellinfo) event.
- The row header **"Germany"** and its aggregated values using the [`queryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/grid#querycellinfo) event.
- Styles are applied by adding the **"e-custom"** CSS class to the cell elements.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs262/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs262/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs262" %}

N> The **dot(.)** character in **FY 2016.Sold Amount** is used by default to identify the header levels in the pivot table's row and column. It can be changed by setting the [`headerDelimiter`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iValueSortSettings#headerdelimiter) in the [`valueSortSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iValueSortSettings) property to any other delimiter instead of the default separator.