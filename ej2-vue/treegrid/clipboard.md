---
layout: post
title: Clipboard in Vue Treegrid component | Syncfusion
description: Learn here all about Clipboard in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Clipboard 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Clipboard in Vue Treegrid component

The clipboard provides an option to copy selected rows or cells data into the clipboard.

The following list of keyboard shortcuts is supported in the Tree Grid to copy selected rows or cells data into clipboard.

Interaction keys |Description
-----|-----
<kbd>Ctrl + C</kbd> |Copy selected rows or cells data into clipboard.
<kbd>Ctrl + Shift + H</kbd> |Copy selected rows or cells data with header into clipboard.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/clipboard/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/clipboard/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/clipboard/default-cs1" %}

## Copy to clipboard by external buttons

To copy selected rows or cells data into clipboard with help of external buttons, you need to invoke the [`copy`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#copy) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/clipboard/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/clipboard/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/clipboard/default-cs2" %}

## Copy Hierarchy Modes

Tree Grid provides support for a set of copy modes with [`copyHierarchyMode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#copyhierarchymode) property. The below are the type of filter mode available in TreeGrid.

* **Parent** : This is the default copy hierarchy mode in Tree Grid. Clipboard value have the selected records with its parent records. If the selected records not have any parent record then the selected record will be in clipboard.

* **Child** : Clipboard value have the selected records with its child record. If the selected records do not have any child record then the selected records will be in clipboard.

* **Both** : Clipboard value have the selected records with its both parent and child record. If the selected records do not have any parent and child record then the selected records alone in clipboard.

* **None** : Only the Selected records will be in clipboard.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/clipboard/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/clipboard/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/clipboard/default-cs3" %}

### Limitations of Copy Functionality

* Only current view records will be available in copy clipboard.

## AutoFill

AutoFill Feature allows you to copy the data of selected cells and paste it to another cells by just dragging the autofill icon of the selected cells up to required cells. This feature is enabled by defining [`enableAutoFill`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#enableautofill) property as true.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/clipboard/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/clipboard/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/clipboard/default-cs4" %}

> * If [`enableAutoFill`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#enableautofill) is set to true, then the autofill icon will be displayed on cell selection to copy cells.
> * It requires the selection [`mode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/selectionSettings/#mode) to be **Cell**,  [`cellSelectionMode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/selectionSettings/#cellselectionmode) to be **Box** and also Batch Editing should be enabled.

### Limitations of AutoFill

* Since the string values are not parsed to number and date type, so when the selected string type cells are dragged to number type cells then it will display as **NaN**. For date type cells, when the selected string type cells are dragged to date type cells then it will display as an **empty cell**.
* Linear series and the sequential data generations are not supported in this autofill feature.

## Paste

You can able to copy the content of a cell or a group of cells by selecting the cells and pressing <kbd>Ctrl + C</kbd> shortcut key and paste it to another set of cells by selecting the cells and pressing <kbd>Ctrl + V</kbd> shortcut key.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/clipboard/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/clipboard/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/clipboard/default-cs5" %}

> To perform paste functionality, it requires the selection [`mode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/selectionMode/) to be **Cell**,  [`cellSelectionMode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/cellSelectionMode/) to be **Box** and also Batch Editing should be enabled.

### Limitations of Paste Functionality

* Since the string values are not parsed to number and date type, so when the copied string type cells are pasted to number type cells then it will display as **NaN**. For date type cells, when the copied string format cells are pasted to date type cells then it will display as an **empty cell**.