---
layout: post
title: Node editing in Vue Treeview component | Syncfusion
description: Learn here all about Node editing in Syncfusion Vue Treeview component of Syncfusion Essential JS 2 and more.
control: Node editing 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Node editing in Vue Treeview component

The TreeView allows you to edit nodes by setting the [allowEditing](https://ej2.syncfusion.com/vue/documentation/api/treeview#allowediting) property to **true**. To directly edit the nodes in place, **double click** the TreeView node or **select** the node and press **F2** key.

When editing is completed by focus out or by pressing the **Enter** key, the modified node’s text saves automatically. If you do not want to save the modified node’s text in TreeView node, press **Escape** key. It does not save the edited text to the TreeView node.

Node editing can also be performed programmatically by using the [`beginEdit`](https://ej2.syncfusion.com/vue/documentation/api/treeview#beginedit) method. On passing the node ID or element through this method, the edit textbox will be created for the particular node thus allowing us to edit it.

If you need to validate or prevent editing, the [`nodeEditing`](https://ej2.syncfusion.com/vue/documentation/api/treeview#nodeediting) event can be used which is triggered before the TreeView node is renamed. On successfully renaming a node the [`nodeEdited`](https://ej2.syncfusion.com/vue/documentation/api/treeview#nodeedited) event will be triggered.

In the following example, the first level node’s text cannot be changed, but all other level nodes' text can be changed.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treeview/node-editing-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/node-editing-cs1" %}

## See Also

* [How to validate the text when renaming the tree node](./how-to/validate-the-text-when-renaming-the-tree-node)
* [How to process the tree node operations using context menu](./how-to/process-the-tree-node-operations-using-context-menu)