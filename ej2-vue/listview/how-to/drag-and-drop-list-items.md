---
layout: post
title: Drag and drop list items in Vue ListView component | Syncfusion
description: Learn here all about Drag and drop list items in Syncfusion Vue ListView component of Syncfusion Essential JS 2 and more.
control: Drag and drop list items 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop list items in Vue ListView component

The ListView component doesn't have built-in drag and drop support. However, we can achieve this functionality using the [`TreeView`](https://ej2.syncfusion.com/vue/documentation/treeview/getting-started/) component with ListView appearance.

Drag and Drop in the TreeView component is enabled by setting [`allowDragAndDrop`](https://ej2.syncfusion.com/vue/documentation/api/treeview/#allowdraganddrop) to `true`.

```ts

<ejs-treeview id='element' :fields='fields' allowDragAndDrop='true'></ejs-treeview>

```

The TreeView component is used to represent hierarchical data in a tree-like structure. As a result, list items in TreeView can be dropped as children of the target element. We can prevent this behavior by cancelling the[`nodeDragStop`](https://ej2.syncfusion.com/vue/documentation/api/treeview/#nodedragstop) and [`nodeDragging`](https://ej2.syncfusion.com/vue/documentation/api/treeview/#nodedragging) events.

```ts

<ejs-treeview id='element' :fields='fields' allowDragAndDrop='true' :nodeDragging='onDragStop' :nodeDragStop='onDragStop'></ejs-treeview>

fields: { dataSource: data, id: 'id', text: 'text' },

onDragStop: function(args) {
    //Block the Child Drop operation in TreeView.
   let  draggingItem = document.getElementsByClassName("e-drop-in");
    if (draggingItem.length == 1) {
        draggingItem[0].classList.add('e-no-drop');
        args.cancel = true;
    }
}

```

In the sample below, we have rendered draggable list items.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/drag-drop-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/drag-drop-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/drag-drop-cs1" %}