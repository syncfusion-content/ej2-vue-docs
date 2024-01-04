---
layout: post
title: Resource Multi Taskbar in Vue Gantt component | Syncfusion
description: Learn here all about Resource Multi Taskbar in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Resource Multi Taskbar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Resource Multi Taskbar in Vue Gantt component

## Resource multi taskbar

To visualize multiple tasks assigned to each resource in a row when the records are in the collapsed state. It can be enabled by settings the `enableMultiTaskbar` property value as `true`.

The collapse or expand action of a resource record can be achieved only by using the tree grid side arrow icon. Because it will be disabled on chart side action for this support.

When a resource has multiple tasks scheduled on the same date, then the tasks will be overlapped one another. Taskbar editing is also possible to change the task scheduling on the collapsed state.

>Note: By default, the `enableMultiTaskbar` property value is `false`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/resource-view-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/resource-view-cs3" %}

## Disable taskbar overlap

In Gantt, you can disable taskbar overlap between resource tasks using the [`allowTaskbarOverlap`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowtaskbaroverlap) property. This prevents the taskbars for different tasks from overlapping on the same row, making it easier to distinguish between the different tasks and manage resources effectively.

When `allowTaskbarOverlap` is set to false, the resources are displayed in a single row and the row height will be extended to occupy the tasks of the resource when it is in a collapsed state. This view allows you to easily identify any overallocation of tasks for a resource in a project.

It's important to note that when `allowTaskbarOverlap` is disabled, task dependencies or relationships cannot be established between tasks that are rendered in multiple lines for the same resource. If you need to establish dependencies between tasks for the same resource, you may want to consider enabling taskbar overlap.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/resource-view-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/resource-view-cs5" %}
