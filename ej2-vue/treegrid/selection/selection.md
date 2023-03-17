---
layout: post
title: Selection in Vue Treegrid component | Syncfusion
description: Learn here all about Selection in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Selection in Vue Treegrid component

Selection provides an option to highlight a row or cell.

Selection can be done through simple Mouse down or Arrow keys.

To disable selection in the TreeGrid, set the [`allowSelection`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#allowselection) to false.

The treegrid supports two types of selection that can be set by using the
[`selectionSettings.type`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/selectionSettings/#type).They are:

* **`Single`** - The `Single` value is set by default. Allows you to select only a single row or cell.
* **`Multiple`** - Allows you to select multiple rows or cells.

To perform the multi-selection, press and hold CTRL key and click the desired rows or cells.
To select range of rows or cells, press and hold the SHIFT key and click the rows or cells.

To get start quickly with selection options, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=OmEllnAzpq8" %}

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/selection/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/selection/default-cs5" %}

## Selection mode

TreeGrid supports three types of selection mode which can be set by using
[`selectionSettings.mode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/selectionSettings/#mode). They are:

* **`Row`** - The `row` value is set by default. Allows you to select rows only.
* **`Cell`** - Allows you to select cells only.
* **`Both`** - Allows you to select rows and cells at the same time.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/selection/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/selection/default-cs6" %}