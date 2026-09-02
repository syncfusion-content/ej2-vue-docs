---
layout: post
title: Check Box in Vue TreeView | Syncfusion
description: Enable checkboxes in Vue TreeView nodes with the showCheckBox property to allow users to select or deselect items in a hierarchical tree structure.
control: Check box 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Check Box in Vue TreeView

The TreeView component allows you to check more than one node in the TreeView without affecting the UI's appearance by enabling the [showCheckBox](https://ej2.syncfusion.com/vue/documentation/api/treeview#showcheckbox) property. When this property is enabled, a checkbox appears before each TreeView node text.

* If one of the child nodes is not in a checked state, then the parent node will be in an intermediate state.

* If all the child nodes are in checked state, then the parent node's state will also be checked.

* If a parent node is checked, then all the child nodes' state will also be checked.

By default, the checkbox state of parent and child nodes is dependent on each other. If you need an independent checked state, you can achieve it using the [autoCheck](https://ej2.syncfusion.com/vue/documentation/api/treeview#autocheck) property.

Using the [checkedNodes](https://ej2.syncfusion.com/vue/documentation/api/treeview#checkednodes) property, you can set the nodes that need to be checked or get the ID of nodes that are currently checked in the TreeView component.

If you need to prevent the node check action for a particular node, the [nodeChecking](https://ej2.syncfusion.com/vue/documentation/api/treeview#nodechecking) event can be used, which is triggered before the TreeView node is checked or unchecked. The [nodeChecked](https://ej2.syncfusion.com/vue/documentation/api/treeview#nodechecked) event is triggered when the TreeView node is checked or unchecked successfully.

In the following example, the `showCheckBox` property is enabled.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/checkbox/checkbox-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/checkbox/checkbox-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/checkbox/checkbox-cs1" %}

## Checked nodes

You can get or set the checked nodes in the TreeView at initial rendering and dynamically by using the [checkedNodes](https://ej2.syncfusion.com/vue/documentation/api/treeview#checkednodes) property. It returns the checked nodes' IDs as an array.

In the following example, the **New South Wales** and **Western Australia** nodes are checked at initial rendering. If any more nodes are checked, the checked nodes' IDs will be displayed in alert.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/checkbox/checked-nodes-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/checkbox/checked-nodes-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/checkbox/checked-nodes-cs1" %}

## See Also

* [How to check/uncheck the checkbox on clicking the tree node text](./how-to/check-uncheck-the-checkbox-on-clicking-the-tree-node-text)