---
layout: post
title: Drag and drop list items in Vue Listview component | Syncfusion
description: Learn here all about Drag and drop list items in Syncfusion Vue Listview component of Syncfusion Essential JS 2 and more.
control: Drag and drop list items 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop list items in Vue Listview component

In ListView component, we don't have drag and drop support. But we can achieve this requirement using [`TreeView`](https://ej2.syncfusion.com/vue/documentation/treeview/getting-started/) component with ListView appearance.

Drag and Drop in TreeView component was enabled by setting [`allowDragAndDrop`](https://ej2.syncfusion.com/vue/documentation/api/treeview/#allowdraganddrop) to `true`.

```ts

<ejs-treeview id='element' :fields='fields' allowDragAndDrop='true'></ejs-treeview>

```

The TreeView component is used to represent hierarchical data in a tree like structure. So, list items in TreeView can be dropped to child of target element. we can prevent this behaviour by cancelling the [`nodeDragStop`](https://ej2.syncfusion.com/vue/documentation/api/treeview/#nodedragstop) and [`nodeDragging`](https://ej2.syncfusion.com/vue/documentation/api/treeview/#nodedragging) events.

```ts

<ejs-treeview id='element' :fields='fields' allowDragAndDrop='true' :nodeDragging='onDragStop' :nodeDragStop='onDragStop'></ejs-treeview>

fields: { dataSource: data, id: 'id', text: 'text' },

onDragStop: function(args) {
    //Block the Child Drop operation in TreeView
   let  draggingItem = document.getElementsByClassName("e-drop-in");
    if (draggingItem.length == 1) {
        draggingItem[0].classList.add('e-no-drop');
        args.cancel = true;
    }
}

```

In the below sample, we have rendered draggable list items.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/listview/drag-drop-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/drag-drop-cs1" %}
