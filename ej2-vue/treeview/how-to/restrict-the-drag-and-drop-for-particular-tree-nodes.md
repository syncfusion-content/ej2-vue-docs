---
layout: post
title: Restrict drag and drop for nodes in Vue TreeView | Syncfusion
description: Prevent specific Vue TreeView nodes from being dragged or dropped by handling the nodeDragStop event and checking the node ID or data to cancel.
control: Restrict the drag and drop for particular tree nodes 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to restrict drag and drop for particular nodes in Vue TreeView

You can restrict drag and drop operations to allow dropping files only under folders. This can be achieved by using the [nodeDragStop](https://ej2.syncfusion.com/vue/documentation/api/treeview#nodedragstop) and [nodeDragging](https://ej2.syncfusion.com/vue/documentation/api/treeview#nodedragging) events of the TreeView.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/restrict-drag-drop-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/restrict-drag-drop-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/restrict-drag-drop-cs1" %}