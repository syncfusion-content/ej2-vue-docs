---
layout: post
title: Selection in Vue Grid component | Syncfusion
description: Learn here all about Selection in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Selection in Vue Grid component

Selection provides an option to highlight a row or cell or column. Selection can be done through simple Mouse down or Arrow keys. To disable selection in the Grid, set the [`allowSelection`](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowselection) to false.

The grid supports two types of selection that can be set by using the [`selectionSettings.type`](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#type).They are:

* **`Single`** - The `Single` value is set by default. Allows you to select only a single row or cell or column.
* **`Multiple`** - Allows you to select multiple rows or cells or columns. To perform the multi-selection, press and hold CTRL key and click the desired rows or cells or columns. To select range of rows or cells or columns, press and hold the SHIFT key and click the rows or cells or columns.

To get start quickly with Selection Options, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=4jpiXQMvud0" %}


{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/select/default-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/default-cs13" %}

## Selection mode

Grid supports three types of selection mode which can be set by using [`selectionSettings.mode`](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#mode). They are:

* **`Row`** - The `row` value is set by default. Allows you to select rows only.
* **`Cell`** - Allows you to select cells only.
* **`Both`** - Allows you to select rows and cells at the same time.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/select/default-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/default-cs14" %}

## Touch interaction

When you tap Grid row on touch screen devices, then the tapped row is selected. Also, it will show a popup ![Selection](../images/selection.jpg)  for multi-row-selection. To select multiple rows or cells, tap the popup![Multi Selection](../images/mselection.jpg)  and then tap the desired rows or cells.

> For multi-selection, It requires the selection [`type`](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#type) to be `Multiple`.

The following screenshot represents a Grid touch selection in the device.

![Touch Interaction](../images/touch-selection.jpg)

## See Also

* [How to enable/disable the Grid toolbar and contextMenu items based on the Grid row selection in Vue Grid](https://www.syncfusion.com/forums/144434/how-to-enable-disable-the-grid-toolbar-and-contextmenu-items-based-on-the-grid-row)