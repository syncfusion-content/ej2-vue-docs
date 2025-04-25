---
layout: post
title: Node manipulation in Vue TreeView component | Syncfusion
description: Learn here all about Node manipulation in Syncfusion Vue TreeView component of Syncfusion Essential JS 2 and more.
control: TreeView 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Node manipulation in Vue TreeView component

The TreeView component provides Essential<sup style="font-size:70%">&reg;</sup> methods for dynamically managing nodes, offering the ability to create a highly interactive and customizable tree structure.

* [addNodes](https://ej2.syncfusion.com/vue/documentation/api/treeview/#addnodes)
* [removeNodes](https://ej2.syncfusion.com/vue/documentation/api/treeview/#removenodes)
* [updateNode](https://ej2.syncfusion.com/vue/documentation/api/treeview/#updatenode)
* [refreshNode](https://ej2.syncfusion.com/vue/documentation/api/treeview/#refreshnode)
* [moveNodes](https://ej2.syncfusion.com/vue/documentation/api/treeview/#movenodes)

These methods provide the flexibility to add, remove, update, refresh, or relocate nodes as needed, facilitating a fully interactive and customizable TreeView structure.

## Dynamically adding nodes

The [`addNodes`](https://ej2.syncfusion.com/vue/documentation/api/treeview/#addnodes) method allows you to insert new nodes at designated positions within the TreeView by passing the necessary node information. You can add both parent and child nodes by specifying their target ID.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/manipulating-nodes-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/manipulating-nodes-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/manipulating-nodes-cs1" %}

## Dynamically removing nodes

The TreeView [`removeNodes`](https://ej2.syncfusion.com/vue/documentation/api/treeview/#removenodes) method lets you remove multiple nodes by providing their IDs. You can remove both parent and child nodes.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/manipulating-nodes-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/manipulating-nodes-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/manipulating-nodes-cs2" %}

## Dynamically update nodes

The TreeView component has the [`updateNode`](https://ej2.syncfusion.com/vue/documentation/api/treeview/#updatenode) method, which allows you to change a specific node's text by providing its target (either the node ID or element) and the new text. To enable text editing, set the [`allowEditing`](https://ej2.syncfusion.com/vue/documentation/api/treeview#allowediting) property to true, ensuring the correct functionality of the `updateNode` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/manipulating-nodes-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/manipulating-nodes-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/manipulating-nodes-cs3" %}

## Dynamically refresh nodes

The [`refreshNode`](https://ej2.syncfusion.com/vue/documentation/api/treeview/#refreshnode) method in TreeView allows you to update the content of a specific node by providing its target and the new details. To retrieve the current details of the node, use the [`getTreeData`](https://ej2.syncfusion.com/vue/documentation/api/treeview#gettreedata) method in conjunction with the node's ID. This method refreshes a designated node within the TreeView.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/manipulating-nodes-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/manipulating-nodes-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/manipulating-nodes-cs4" %}

## Dynamically move nodes

The [`moveNodes`](https://ej2.syncfusion.com/vue/documentation/api/treeview/#movenodes) method in TreeView allows you to relocate a node by defining the node to be moved, the target location, and the index within that target. It facilitates the repositioning of nodes within the same TreeView based on the specified target.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/manipulating-nodes-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/manipulating-nodes-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/manipulating-nodes-cs5" %}
