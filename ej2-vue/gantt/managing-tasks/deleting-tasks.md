---
layout: post
title: Deleting tasks in Vue Gantt component | Syncfusion
description: Learn here all about Deleting tasks in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Deleting tasks 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Deleting tasks in Vue Gantt component

## Deleting tasks

A task delete option in the Gantt component can be enabled by enabling the [`ediSettings.allowDeleting`](https://ej2.syncfusion.com/vue/documentation/api/gantt/editSettings/#allowdeleting) property. Tasks can be deleted by clicking the delete toolbar item or using the `deleteRow` method. You can call this method dynamically on any custom actions like button click. The following code example shows how to enable the delete option in the Gantt component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/managing-tasks-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/managing-tasks-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/managing-tasks-cs4" %}

> NOTE: You should select any one of the rows in the Gantt component to perform task delete action.
> You should set the [`ediSettings.allowDeleting`](https://ej2.syncfusion.com/vue/documentation/api/gantt/editSettings/#allowdeleting) value to `true` to delete the record dynamically.

## Delete confirmation message

Delete confirmation message is used to get the confirmation from users before deleting a task. This confirmation message can be enabled by setting the [`editSettings.showDeleteConfirmDialog`](https://ej2.syncfusion.com/vue/documentation/api/gantt/editSettings/#showdeleteconfirmdialog) property to `true`.

The following code snippet explains how to enable the delete confirmation message in Gantt.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/managing-tasks-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/managing-tasks-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/managing-tasks-cs5" %}