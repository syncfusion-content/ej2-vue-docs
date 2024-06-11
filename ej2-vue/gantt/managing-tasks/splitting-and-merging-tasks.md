---
layout: post
title: Splitting and merging tasks in Vue Gantt component | Syncfusion
description: Learn here all about Splitting and merging tasks in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Splitting and merging tasks 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Splitting and merging tasks in Vue Gantt component

## Splitting task at load time

To split task at load time, we can define segment details in both hierarchical and self-referential way.
Refer below link for more details.

* [Split task at load time](../data-binding#split-task)

## Split task dynamically

The task can be split dynamically, either by using the context menu or dialog.

* `Dialog`: `Segments` tab is rendered in add/edit dialog, when the [`taskFields.segments`](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/#segments) or [`taskFields.segmentId`](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/#segmentId) property is mapped. Using this tab, we can split the task based on the original start and end date of a particular task.

* `Context menu`: When the [`taskFields.segments`](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/#segments) or [`taskFields.segmentId`](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/#segmentId) property is mapped and the [`enableContextMenu`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#enablecontextmenu) property is enabled, `Split Task` item will be included in the context menu.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/managing-tasks-cs14/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/managing-tasks-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/managing-tasks-cs14" %}

## Merge tasks

The split tasks can be merged either by using the `Merge Task` item of the Context menu or by using the dialog. We can also merge the tasks, by simply dragging the segments together in the UI.

## Limitations of Split tasks

1. Parent and milestone tasks cannot be split into segments.
2. The task must have a width greater than the timeline unit cell in order to be split.
3. Split task is not supported in the `Resource view`.