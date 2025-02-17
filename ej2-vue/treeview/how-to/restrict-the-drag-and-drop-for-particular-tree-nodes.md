---
layout: post
title: Restrict drag and drop for node in Vue TreeView component | Syncfusion
description: Learn here all about Restrict the drag and drop for particular tree nodes in Syncfusion Vue TreeView component of Syncfusion Essential JS 2 and more.
control: Restrict the drag and drop for particular tree nodes 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Restrict the drag and drop for particular tree nodes in Vue TreeView component

You can restrict drag and drop operations to allow only dropping files under folders. This can be achieved by using the [`nodeDragStop`](https://helpej2.syncfusion.com/vue/documentation/api/treeview#nodedragstop) and [`nodeDragging`](https://helpej2.syncfusion.com/vue/documentation/api/treeview#nodedragging) events of the TreeView.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/restrict-drag-drop-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/restrict-drag-drop-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/restrict-drag-drop-cs1" %}