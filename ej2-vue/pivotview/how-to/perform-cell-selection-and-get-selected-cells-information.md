---
layout: post
title: Perform cell selection and get selected cells information in Vue Pivotview component | Syncfusion
description: Learn here all about Perform cell selection and get selected cells information in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Perform cell selection and get selected cells information 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Perform cell selection and get selected cells information in Vue Pivotview component

You can select any cell/row by setting the property `gridSettings.allowSelection` as `true` where the selected cells can be highlighted. It can be done through mouse down or arrow keys.

## Selection mode

It supports four types of selection mode that can be set by the property `gridSettings.selectionSettings.mode`. They are,

* **`Row`**: The `Row` value is set by default, and allows you to select only rows.
* **`Column`**: Allows you to select only columns.
* **`Cell`**: Allows you to select only cells.
* **`Both`**: Allows you to select rows and columns at the same time.

## Selection type

It supports two types of selection that can be set by the property `gridSettings.selectionSettings.type`. They are,

* **`Single`**: The `Single` value is set by default, and it only allows selection of a single row or a column or a cell.
* **`Multiple`**: Allows you to select multiple rows or cells.
To perform the multi-selection, press and hold CTRL key and click the desired rows or columns or cells. To select range of rows or cells, press and hold the SHIFT key and click the rows or columns or cells.

## Event

The event `cellSelected` fires on every cell/row/column on selected/deselected operations and it provides the selected cells information with its corresponding column and row headers.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs139/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs139/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs139" %}