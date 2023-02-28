---
layout: post
title: Cell selection in Vue Gantt component | Syncfusion
description: Learn here all about Cell selection in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Cell selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Cell selection in Vue Gantt component

You can select a cell in the Gantt component by setting the [`selectionSettings.mode`](https://ej2.syncfusion.com/vue/documentation/api/gantt/selectionSettings/#mode) property to cell. You can get the selected cell information using the [`getSelectedRowCellIndexes`](https://ej2.syncfusion.com/vue/documentation/api/gantt/selection/#getselectedrowcellindexes) method. This method returns the result as an object collection, which has `cellIndexes` and `rowIndex` information of the selected cells.

Refer to the following code example to enable the cell selection in Gantt.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/selection-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs1" %}

## Selecting multiple cells

You can select multiple cells by setting the [`selectionSettings.type`](https://ej2.syncfusion.com/vue/documentation/api/gantt/selectionSettings/#type) property to multiple and the [`selectionSettings.mode`](https://ej2.syncfusion.com/vue/documentation/api/gantt/selectionSettings/#mode) property to cell. Multiple cells can be selected by holding the CTRL key and selecting the cells. The following code example demonstrates how to select multiple cells.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/selection-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs2" %}

## Selecting a cell dynamically

You can select a cell dynamically using the [`selectCell`](https://ej2.syncfusion.com/vue/documentation/api/gantt/selection/#selectcell) method. Refer to the following code example for details.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/selection-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs3" %}

## Customize cell selection action

While selecting a cell in Gantt, the [`cellSelecting`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#cellselecting) and [`cellSelected`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#cellselected) event will be triggered. The [`cellSelecting`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#cellselecting) event will be triggered on initialization of cell selection action, and you can get the current selecting cell information to prevent the selection of a particular cell in a particular row. The [`cellSelected`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#cellselected) event will be triggered on completion of cell selection action, and you can get the current selected cell’s information. The following code example demonstrates how to prevent the selection of the cell using the [`cellSelecting`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#cellselecting) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/selection-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs4" %}