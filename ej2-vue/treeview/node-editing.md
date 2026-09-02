---
layout: post
title: Node Editing in Vue TreeView | Syncfusion
description: Allow users to rename Vue TreeView node text inline by double-clicking a node, with the allowEditing property set to true in the component.
control: Node editing 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Node Editing in Vue TreeView

The TreeView allows you to edit nodes by setting the [allowEditing](https://ej2.syncfusion.com/vue/documentation/api/treeview#allowediting) property to **true**. To directly edit the nodes in place, **double-click** the TreeView node or **select** the node and press the **F2** key.

When editing is completed by focusing out or by pressing the **Enter** key, the modified node's text is saved automatically. If you do not want to save the modified node's text in the TreeView node, press the **Escape** key. It does not save the edited text to the TreeView node.

Node editing can also be performed programmatically by using the [beginEdit](https://ej2.syncfusion.com/vue/documentation/api/treeview#beginedit) method. When passing the node ID or element through this method, an edit textbox will be created for the particular node, thus allowing you to edit it.

If you need to validate or prevent editing, the [nodeEditing](https://ej2.syncfusion.com/vue/documentation/api/treeview#nodeediting) event can be used, which is triggered before the TreeView node is renamed. On successfully renaming a node, the [nodeEdited](https://ej2.syncfusion.com/vue/documentation/api/treeview#nodeedited) event is triggered.

In the following example, the first level node's text cannot be changed, but all other level nodes' text can be changed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/node-editing-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/node-editing-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/node-editing-cs1" %}

## See Also

* [How to validate the text when renaming the tree node](./how-to/validate-the-text-when-renaming-the-tree-node)
* [How to process the tree node operations using context menu](./how-to/process-the-tree-node-operations-using-context-menu)