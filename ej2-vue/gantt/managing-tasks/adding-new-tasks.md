---
layout: post
title: Adding new tasks in Vue Gantt component | Syncfusion
description: Learn here all about Adding new tasks in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Adding new tasks 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Adding new tasks in Vue Gantt component

Tasks can be dynamically added to the Gantt project by enabling the [`editSettings.allowAdding`](https://ej2.syncfusion.com/vue/documentation/api/gantt/editSettings/#allowadding) property.

## Toolbar

A row can be added to the Gantt component from the toolbar while the  [`editSettings.allowAdding`](https://ej2.syncfusion.com/vue/documentation/api/gantt/editSettings/#allowadding) property is set to `true`. On clicking the toolbar add icon, you should provide the task information in the add dialog.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/managing-tasks-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/managing-tasks-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/managing-tasks-cs1" %}

> By default, the new row will be added to the top most row in the Gantt component.

## Context menu

A row can also be added above, below or child of the selected row by using context menu support. For this, we need to enable the property[`enableContextMenu`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#enablecontextmenu) and inject the [`ContextMenu`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#contextmodule) module into the Gantt control.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/managing-tasks-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/managing-tasks-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/managing-tasks-cs2" %}

## Using method

You can add rows to the Gantt component dynamically using the [`addRecord`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#addrecord) method and you can define the add position of the default new record by using the [`rowPosition`](https://ej2.syncfusion.com/vue/documentation/api/gantt/rowPosition/) property. You can also pass the `rowIndex` as an additional parameter.

* Top of all the rows
* Bottom to all the existing rows
* Above the selected row
* Below the selected row
* As child to the selected row

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/managing-tasks-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/managing-tasks-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/managing-tasks-cs3" %}