---
layout: post
title: Command column editing in Vue Grid component | Syncfusion
description: Learn here all about Command column editing in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Command column editing 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Command column editing in Vue Grid component

The command column provides an option to add CRUD action buttons in a column. This can be defined by the [`column.commands`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#commands) property.

To use command column, inject the **CommandColumn** module in the **provide** section.

The available built-in command buttons are:

| Command Button | Actions |
|----------------|---------|
| Edit | Edit the current row.|
| Delete | Delete the current row.|
| Save | Update the edited row.|
| Cancel | Cancel the edited state. |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs6" %}

## Custom command column

The custom command buttons can be added in a column by using the [`column.commands`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#commands) property and the action for the custom buttons can be defined using [`commandClick`](https://ej2.syncfusion.com/vue/documentation/api/grid/#commandClick) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs7" %}