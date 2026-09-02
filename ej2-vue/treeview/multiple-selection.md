---
layout: post
title: Multiple Selection in Vue TreeView | Syncfusion
description: Select multiple Vue TreeView nodes simultaneously using the allowMultiSelection property for bulk node operations within the tree component.
control: Multiple selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Multiple Selection in Vue TreeView

Selection provides interactive support and highlights the node that you select. Selection can be done through a simple mouse down or keyboard interaction.

The TreeView also supports selection of multiple nodes by setting the [allowMultiSelection](https://ej2.syncfusion.com/vue/documentation/api/treeview#allowmultiselection) property to **true**.

To multi-select, press and hold the **CTRL** key and click the desired nodes. To select a range of nodes, press and hold the **SHIFT** key and click the nodes.

In the following example, the `allowMultiSelection` property is enabled.

> Multi-selection is not applicable through touch interactions.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/multi-selection/selection-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/multi-selection/selection-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/multi-selection/selection-cs1" %}

## Selected nodes

You can get or set the selected nodes in the TreeView both at initial rendering and dynamically by using the [selectedNodes](https://ej2.syncfusion.com/vue/documentation/api/treeview#selectednodes) property. It returns the selected node's IDs as an array.

The [nodeSelecting](https://ej2.syncfusion.com/vue/documentation/api/treeview#nodeselecting) event is triggered before a node is selected or unselected, which can be used to prevent the selection.

The [nodeSelected](https://ej2.syncfusion.com/vue/documentation/api/treeview#nodeselected) event is triggered once a node is successfully selected or unselected.

In the following example, **New South Wales** and **Western Australia** nodes are selected at initial rendering. When a node is selected, the selected node's ID is displayed in an alert.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/multi-selection/selection-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/multi-selection/selection-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/multi-selection/selection-cs2" %}