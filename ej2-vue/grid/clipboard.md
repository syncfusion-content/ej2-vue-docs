---
layout: post
title: Clipboard in Vue Grid component | Syncfusion
description: Learn here all about Clipboard in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Clipboard 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Clipboard in Vue Grid component

The clipboard provides an option to copy selected rows or cells data into the clipboard.

The following list of keyboard shortcuts is supported in the Grid to copy selected rows or cells data into clipboard.

Interaction keys |Description
-----|-----
<kbd>Ctrl + C</kbd> |Copy selected rows or cells data into clipboard.
<kbd>Ctrl + Shift + H</kbd> |Copy selected rows or cells data with header into clipboard.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/databind/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/databind/default-cs1" %}

## Copy to clipboard by external buttons

To copy selected rows or cells data into clipboard with help of external buttons, you need to invoke the [`copy`](https://ej2.syncfusion.com/vue/documentation/api/grid/clipboard/#copy) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/print/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print/default-cs1" %}

## AutoFill

AutoFill Feature allows you to copy the data of selected cells and paste it to another cells by just dragging the autofill icon of the selected cells up to required cells. This feature is enabled by defining [`enableAutoFill`](https://ej2.syncfusion.com/vue/documentation/api/grid/#enableautofill) property as true.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/databind/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/databind/default-cs2" %}

> * If [`enableAutoFill`](https://ej2.syncfusion.com/vue/documentation/api/grid/#enableautofill) is set to true, then the autofill icon will be displayed on cell selection to copy cells.
> * It requires the selection [`mode`](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionMode/) to be **Cell**,  [`cellSelectionMode`](https://ej2.syncfusion.com/vue/documentation/api/grid/cellSelectionMode/) to be **Box** and also Batch Editing should be enabled.

### Limitations of AutoFill

* Since the string values are not parsed to number and date type, so when the selected string type cells are dragged to number type cells then it will display as **NaN**. For date type cells, when the selected string type cells are dragged to date type cells then it will display as an **empty cell**.
* Linear series and the sequential data generations are not supported in this autofill feature.
* The Auto Fill feature can only be applied to the viewport cell when enabling the features of virtual scrolling, infinite scrolling, or column virtualization in the grid.

## Paste

You can able to copy the content of a cell or a group of cells by selecting the cells and pressing <kbd>Ctrl + C</kbd> shortcut key and paste it to another set of cells by selecting the cells and pressing <kbd>Ctrl + V</kbd> shortcut key.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/databind/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/databind/default-cs3" %}

> To perform paste functionality, it requires the selection [`mode`](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionMode/) to be **Cell**,  [`cellSelectionMode`](https://ej2.syncfusion.com/vue/documentation/api/grid/cellSelectionMode/) to be **Box** and also Batch Editing should be enabled.

### Limitations of Paste Functionality

* Since the string values are not parsed to number and date type, so when the copied string type cells are pasted to number type cells then it will display as **NaN**. For date type cells, when the copied string format cells are pasted to date type cells then it will display as an **empty cell**.