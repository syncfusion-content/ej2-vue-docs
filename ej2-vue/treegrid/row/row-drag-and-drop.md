---
layout: post
title: Row drag and drop in Vue Treegrid component | Syncfusion
description: Learn here all about Row drag and drop in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Row drag and drop 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Row drag and drop in Vue Treegrid component

The TreeGrid rows can be reordered, dropped to another TreeGrid or custom control by enabling the [`allowRowDragAndDrop`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#allowrowdraganddrop) to true.

To use row drag and drop, inject the `RowDD` module in the TreeGrid.

## Drag and drop within Tree Grid

The TreeGrid row drag and drop allows you to drag and drop TreeGrid rows on the same TreeGrid using drag icon. To enable row drag and drop, set the [`allowRowDragAndDrop`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#allowrowdraganddrop) to true. It provides the way to drop the row above, below or child to the target row with respective to the target row position.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/row/row-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/row/row-cs1" %}

> * Selection feature must be enabled for row drag and drop.
> * For multiple row selection, the [`type`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/selectionSettings/#type) property must be set to `multiple`.
> * The [`isPrimaryKey`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#isprimarykey) property is necessary to perform row drag and drop operation.

## Drag and drop to another Tree Grid

To drag and drop between two TreeGrid, enable the [`allowRowDragAndDrop`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#allowrowdraganddrop) property and specify the target TreeGrid ID in [`targetID`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/rowDropSettings/#targetid) property of rowDropSettings.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/row/row-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/row/row-cs2" %}

## Drag and drop events

The following events are triggered while drag and drop the treegrid rows.

[`rowDragStartHelper`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#rowdragstarthelper) - Triggers when click the drag icon or treegrid row and this event is used to customize the drag element based on user criteria.<br/>
[`rowDragStart`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#rowdragstart) -Triggers when starts to drag the treegrid row. <br/>
[`rowDrag`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#rowdrag) - Triggers while dragging the treegrid row. <br/>
[`rowDrop`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#rowdrop) - Triggers when a drag element is dropped on the target element. <br/>

## Prevent reordering a row as child to another row

You can prevent the default behavior of dropping rows as children to the target by setting the `cancel` property to `true` in [rowDrop](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#rowdrop) event argument. You can also change the drop position after cancelling using [reorderRows](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#reorderrows) method.

In the below example drop action is cancelled and dropped above to target row.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/row/row-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/row/row-cs3" %}
