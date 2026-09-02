---
layout: post
title: Drag and Drop in Vue TreeView | Syncfusion
description: Enable drag and drop of Vue TreeView nodes within the same tree or across multiple TreeView controls to reorder items hierarchically.
control: Drag and drop 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Drag and Drop in Vue TreeView

The TreeView component allows you to drag and drop any node by setting the [allowDragAndDrop](https://ej2.syncfusion.com/vue/documentation/api/treeview#allowdraganddrop) property to **true**. Nodes can be dragged and dropped at all levels of the same TreeView.

The dragged nodes can be dropped at any level by indicator lines with **plus**, **minus/restrict**, and **in-between** icons. They represent the exact position where the node is to be dropped as a sibling or child.

To prevent the dragging action for a particular node, you can use the [nodeDragStart](https://ej2.syncfusion.com/vue/documentation/api/treeview#nodedragstart) event, which is triggered when node dragging starts. Similarly, to prevent the dropping action for a particular node, you can use the [nodeDragStop](https://ej2.syncfusion.com/vue/documentation/api/treeview#nodedragstop) event, which is triggered when dragging stops.

The [nodeDragging](https://ej2.syncfusion.com/vue/documentation/api/treeview#nodedragging) event is triggered when the TreeView node is being dragged. You can customize the cloned element in this event.

The [nodeDropped](https://ej2.syncfusion.com/vue/documentation/api/treeview#nodedropped) event is triggered when the TreeView node is dropped on the target element successfully.

The following table explains the usage of indicator icons.

| Icons | Description |
|------|-------------|
| Plus icon | Indicates that the dragged node is to be added as a child of the target node. |
| Minus or restrict icon | Indicates that the dragged node is not to be dropped at the hovered region. |
| In-between icon | Indicates that the dragged node is to be added as a sibling of the hovered node. |

In the following sample, the [allowDragAndDrop](https://ej2.syncfusion.com/vue/documentation/api/treeview#allowdraganddrop) property is enabled.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/drag-and-drop/single-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/drag-and-drop/single-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/drag-and-drop/single-cs1" %}

## Multiple-node drag and drop

To drag and drop more than one node, you should enable the [allowMultiSelection](https://ej2.syncfusion.com/vue/documentation/api/treeview#allowmultiselection) property along with the [allowDragAndDrop](https://ej2.syncfusion.com/vue/documentation/api/treeview#allowdraganddrop) property.

To perform multi-selection, press and hold the **CTRL** key and click the desired nodes. To select a range of nodes, press and hold the **SHIFT** key and click the nodes.

In the following sample, the `allowMultiSelection` property is enabled along with the `allowDragAndDrop` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/drag-and-drop/multiple-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/drag-and-drop/multiple-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/drag-and-drop/multiple-cs1" %}

## See Also

* [How to restrict the drag-and-drop for particular tree nodes](./how-to/restrict-the-drag-and-drop-for-particular-tree-nodes)