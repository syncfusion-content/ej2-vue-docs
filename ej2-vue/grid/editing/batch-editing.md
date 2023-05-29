---
layout: post
title: Batch editing in Vue Grid component | Syncfusion
description: Learn here all about Batch editing in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Batch editing 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Batch editing in Vue Grid component

In Batch edit mode, when you double-click on the grid cell, then the target cell changed to edit state.You can bulk save (added, changed and deleted data in the single request) to data source by click on the toolbar's **Update** button or by externally invoking the [`batchSave`](https://ej2.syncfusion.com/vue/documentation/api/grid/edit/#batchsave) method. To enable Batch edit, set the [`editSettings.mode`](https://ej2.syncfusion.com/vue/documentation/api/grid/editSettings/#mode) as **Batch**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs1" %}

> If a column's [allowEditing](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#allowediting) property is set to false, then the focus can be skipped in that non-editable column by clicking the tab or shift-tab key while in batch edit mode.

## Automatically update the column based on another column edited value in batch mode

You can update the column value based on another column edited value in Batch mode by using the Cell Edit Template feature.

In the below demo, we have update the `TotalCost` column value based on the `UnitPrice` and `UnitInStock` column value while editing.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs2" %}

## Cancel edit based on condition in batch mode

You can prevent the CRUD operations of the Batch edit Grid by using condition in the [`cellEdit`](https://ej2.syncfusion.com/vue/documentation/api/grid/#cellEdit), [`beforeBatchAdd`](https://ej2.syncfusion.com/vue/documentation/api/grid/#beforeBatchAdd) and [`beforeBatchDelete`](https://ej2.syncfusion.com/vue/documentation/api/grid/#beforeBatchDelete) events for Edit, Add and Delete actions respectively.

In the below demo, we prevent the CRUD operation based on the `Role` column value. If the Role Column is `Employee`, we are unable to edit/delete that row.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs3" %}

## Confirmation dialog

By default, grid will show the confirm dialog when saving or cancelling or performing any actions like filtering, sorting, etc.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs4" %}

> * [`editSettings.showConfirmDialog`](https://ej2.syncfusion.com/vue/documentation/api/grid/editSettings/#showconfirmdialog) requires the [`editSettings.mode`](https://ej2.syncfusion.com/vue/documentation/api/grid/editSettings/#mode) to be **Batch**
> * If [`editSettings.showConfirmDialog`](https://ej2.syncfusion.com/vue/documentation/api/grid/editSettings/#showconfirmdialog) set to **false**, then confirmation dialog does not display in batch editing.

## How to make editing in single click and arrow keys

When using batch mode, the TAB key allows you to edit or move to the next cell or row from the current record by default. Using the grid's load event, the same functionality can also be achieved by pressing the arrow keys. Additionally, the `editCell` method of the grid allows for cells to be made editable with a single click.

In the following sample, the [load](https://ej2.syncfusion.com/vue/documentation/api/grid/#load) event of the Grid will be used to bind the keydown event handler. When any arrow key is pressed, the `editCell` method of the Grid will be used to identify the next or previous cell (td) and set it to be editable. Additionally, it is possible to enable editing of a cell with a single click by utilizing the `editCell` method within the [created](https://ej2.syncfusion.com/vue/documentation/api/grid/#created) event of the Grid.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs5" %}