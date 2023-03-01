---
layout: post
title: Command column editing in Vue Treegrid component | Syncfusion
description: Learn here all about Command column editing in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Command column editing 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Command column editing in Vue Treegrid component

The command column provides an option to add CRUD action buttons in a column. This can be defined by the [`column.commands`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#commands) property.

The available built-in command buttons are:

| Command Button | Actions |
|----------------|---------|
| Edit | Edit the current row.|
| Delete | Delete the current row.|
| Save | Update the edited row.|
| Cancel | Cancel the edited state. |

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/editing/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/editing/default-cs3" %}

## Custom command

 The custom command buttons can be added in a column by using the [`column.commands`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#commands) property and
the action for the custom buttons can be defined in the [`buttonOption.click`](https://ej2.syncfusion.com/vue/documentation/api/grid/commandButtonOptions/#click) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/editing/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/editing/default-cs4" %}