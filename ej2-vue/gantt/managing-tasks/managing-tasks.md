---
layout: post
title: Managing tasks in Vue Gantt component | Syncfusion
description: Learn here all about Managing tasks in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Managing tasks 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Managing tasks in Vue Gantt component

The Gantt component has options to dynamically insert, delete, and update tasks in the project. The primary key column is necessary to manage the tasks and perform CRUD operations in Gantt. To define the primary key, set the [`columns.isPrimaryKey`](https://ej2.syncfusion.com/vue/documentation/api/gantt/column/#isprimarykey) property to `true` in the particular column.

To use CRUD, inject the [`Edit`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#editmodule) module in the `provide` section.

`Note:` If the [`Edit`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#editmodule) module is not injected, you cannot edit the tasks through the TreeGrid cells.

The following code example demonstrates how to enable cell editing in the Gantt component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/managing-tasks-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/managing-tasks-cs11" %}

`Note:` When the edit mode is set to `Auto`, on performing double-click action on TreeGrid side, the cells will be changed to editable mode and on performing double-click action on chart side, the edit dialog will appear for editing the task details.

## Read-only Gantt

In Gantt, all create, update, delete operations can be disabled by setting the `readOnly` property as `true`. The following sample demonstrates, rendering the Gantt chart as read only.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/managing-tasks-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/managing-tasks-cs12" %}

## Troubleshoot: Editing works only when primary key column is defined

Editing feature requires a primary key column for CRUD operations. While defining columns in Gantt using the [`columns`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#columns) property, it is mandatory that any one of the columns, must be a primary column. By default, the [`id`](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/#id) column will be the primary key column.  If [`id`](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/#id) column is not defined, we need to enable [`isPrimaryKey`](https://ej2.syncfusion.com/vue/documentation/api/gantt/column/#isprimarykey) for any one of the columns defined in the [`columns`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#columns) property.

## Open new task dialog with default values

You can set default values when new task dialog opens using [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/gantt/#actionbegin) event when `requestType` is `beforeOpenAddDialog`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/managing-tasks-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/managing-tasks-cs13" %}
