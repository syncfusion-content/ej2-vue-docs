---
layout: post
title: Drag and Drop in Vue Tabs | Syncfusion
description: Enable drag and drop of Vue Tabs headers to reorder tab items within the same Tab component or across multiple Tab controls on a page.
control: Drag and drop 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Drag and Drop in Vue Tabs

The Tab component allows you to drag and drop any tab item by setting [allowDragAndDrop](https://ej2.syncfusion.com/vue/documentation/api/tab#allowdraganddrop)&nbsp;to **true**. Items can be reordered by dragging and dropping them to the desired location.

* If you need to prevent dragging action for a particular item, the [onDragStart](https://ej2.syncfusion.com/vue/documentation/api/tab#ondragstart) event can be used which will trigger when the item drag is started. If you need to prevent dropping action for a particular item, the [dragged](https://ej2.syncfusion.com/vue/documentation/api/tab#dragged) event can be used which will trigger when the drag action is stopped.

* The [dragArea](https://ej2.syncfusion.com/vue/documentation/api/tab#dragArea) defines the area in which the draggable element can move; movement outside this area is restricted.

* The [onDragStart](https://ej2.syncfusion.com/vue/documentation/api/tab#ondragstart) event triggers before the item is dragged from the Tab.

* The [dragging](https://ej2.syncfusion.com/vue/documentation/api/tab#dragging) event triggers while the Tab item is being dragged.

* The [dragged](https://ej2.syncfusion.com/vue/documentation/api/tab#dragged) event triggers when the Tab item is successfully dropped on the target element.

In the following sample, the [allowDragAndDrop](https://ej2.syncfusion.com/vue/documentation/api/tab#allowdraganddrop) property is enabled.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/drag-and-drop/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/drag-and-drop/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/drag-and-drop/default-cs1" %}

## Drag and drop items between tabs

It is possible to drag and drop the tab items between two Tabs by manually saving the dropped items as new tab item data through the `addTab` method of the Tab and removing the dragged item through the `removeTab` method of the Tab.

In this example, the tab control is used as an external source, and the item from the tab component is dragged and dropped onto another Tab. Use the `onDragStart` and `dragged` events of the Tab component, where you can form an event object and save it using the `addTab` method of the Tab and remove the dragged item through the `removeTab` method of the Tab using the dragged item index.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/drag-and-drop/tab-to-tab-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/drag-and-drop/tab-to-tab-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/drag-and-drop/tab-to-tab-cs1" %}

## Drag and drop items to an external source

It is possible to drag and drop the items to any of the external sources from the Tab, by manually saving those dropped items as new node data through the `addNodes` method of the Treeview and removing the dragged item through the `removeTab` method of the Tab.

In this example, the TreeView control is used as an external source, and the item from the tab component is dragged and dropped onto the child nodes of the TreeView component. Use the `dragged` event of the Tab component, where you can form an event object and save it using the `addNodes` method of the Treeview and remove the dragged item through the `removeTab` method of the Tab using the dragged item index.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/drag-and-drop/tab-to-treeview-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/drag-and-drop/tab-to-treeview-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/drag-and-drop/tab-to-treeview-cs1" %}

## Drag and drop items from an external source

It is possible to drag and drop the items from any of the external sources into the Tab, by manually saving those dropped items as new item data through the `addTab` method of the Tab and removing the dragged node through the `removeNodes` method of the Treeview.

In this example, the TreeView control is used as an external source, and the child nodes from the TreeView component are dragged and dropped onto the Tab. Use the `nodeDragStop` event of the Treeview component, where you can form an event object and save it using the `addTab` method of the Tab and remove the dragged node through the `removeNodes` method of the Treeview.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/drag-and-drop/treeview-to-tab-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/drag-and-drop/treeview-to-tab-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/drag-and-drop/treeview-to-tab-cs1" %}