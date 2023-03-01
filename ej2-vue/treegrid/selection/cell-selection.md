---
layout: post
title: Cell selection in Vue Treegrid component | Syncfusion
description: Learn here all about Cell selection in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Cell selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Cell selection in Vue Treegrid component

Cell Selection can be done through simple Mouse down or Arrow keys(up, down, left and right).

TreeGrid supports two types of cell selection mode which can be set by using
[`selectionSettings.cellSelectionMode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/selectionSettings/#cellselectionmode). They are:

* **`Flow`** - The `Flow` value is set by default. Select range of cells between the start index and end index which includes in between cells of rows.
* **`Box`** - Select range of cells within the start and end column indexes which includes in between cells of rows within the range.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/selection/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/selection/default-cs1" %}

> Cell Selection requires the [`selectionSettings.mode`](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#mode) to be `Cell` or  `Both` and [`type`](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#type) should be `Multiple`.