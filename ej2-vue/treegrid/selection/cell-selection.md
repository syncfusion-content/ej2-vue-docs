---
layout: post
title: Vue TreeGrid Cell Selection | Syncfusion
description: Learn how to perform cell selection in the Vue TreeGrid, including selection modes, programmatic APIs, and retrieving selected cell indexes.
control: Cell selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Cell Selection in Vue TreeGrid

Cell Selection can be done through simple Mouse down or Arrow keys(up, down, left and right).

TreeGrid supports two types of cell selection mode which can be set by using
[`selectionSettings.cellSelectionMode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/selectionSettings/#cellselectionmode). They are:

* **`Flow`** - The `Flow` value is set by default. Select range of cells between the start index and end index which includes in between cells of rows.
* **`Box`** - Select range of cells within the start and end column indexes which includes in between cells of rows within the range.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/selection/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/selection/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/selection/default-cs1" %}

> Cell Selection requires the [`selectionSettings.mode`](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#mode) to be `Cell` or  `Both` and [`type`](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#type) should be `Multiple`.