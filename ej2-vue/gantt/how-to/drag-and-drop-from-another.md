---
layout: post
title: Drag and drop from another in Vue Gantt component | Syncfusion
description: Learn here all about Drag and drop from another in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Drag and drop from another 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop from another in Vue Gantt component

In Gantt, it is possible to drag a record from another component and drop it in Gantt chart with updating the Gantt record. Here, dragging an item from `TreeView` component to Gantt and that item is updated as a resource for the Gantt record, we can achieve this, by using [`nodeDragStop`](https://ej2.syncfusion.com/vue/documentation/api/treeview/#nodedragstop) event of `TreeView` control.

To learn about Gantt Chart Drag and Drop, you can check on this video:
{% youtube "https://www.youtube.com/watch?v=NeObMFJEhGU" %}

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/how-to/draganddrop-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to/draganddrop-cs1" %}

The following screenshot shows dropping record from another component in to Gantt, and **Rose Fuller** is added as resource for the task **Develop floor plan estimation**.

![Dropping Record](../images/dropping.png)