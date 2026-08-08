---
layout: post
title: Vue TreeGrid Command Column Editing | Syncfusion
description: Learn how to use command column editing in the Vue TreeGrid to add CRUD and custom action buttons for row-level operations.
control: Command column editing 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Command Column Editing in Vue TreeGrid

The command column provides an option to add CRUD action buttons in a column. This can be defined by the [`column.commands`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#commands) property.

The available built-in command buttons are:

| Command Button | Actions |
|----------------|---------|
| Edit | Edit the current row.|
| Delete | Delete the current row.|
| Save | Update the edited row.|
| Cancel | Cancel the edited state. |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/editing/default-cs3" %}

## Custom command

 The custom command buttons can be added in a column by using the [`column.commands`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#commands) property and
the action for the custom buttons can be defined in the [`buttonOption.click`](https://ej2.syncfusion.com/vue/documentation/api/grid/commandButtonOptions#click) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/editing/default-cs4" %}