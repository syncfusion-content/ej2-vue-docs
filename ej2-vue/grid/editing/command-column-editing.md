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

The command column editing feature allows you to add CRUD (Create, Read, Update, Delete) action buttons in a column for performing operations on individual rows.This feature is commonly used when you need to enable inline editing, deletion, or saving of row changes directly within the grid. 

To enable command column editing, you can utilize the [column.commands](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#commands) property. By defining this property, you can specify the command buttons to be displayed in the command column, such as Edit, Delete, Save, and Cancel.

To utilize CRUD operations, you need to inject the **CommandColumnService** module into the **@NgModule.providers** section. This service provides the necessary functionalities for handling the command column actions.

The available built-in command buttons are: 

| Command Button | Actions |
|----------------|---------|
| Edit | Edit the current row.|
| Delete | Delete the current row.|
| Save | Update the edited row.|
| Cancel | Cancel the edited state. |

Here's an example that demonstrates how to add CRUD action buttons in a column using the `command` column property : 

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

The custom command column feature in the Grid component allows you to add custom command buttons in a column to perform specific actions on individual rows. This feature is particularly useful when you need to provide customized functionality for editing, deleting, or performing any other operation on a row.

To add custom command buttons in a column, you can utilize the [column.commands](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#commands) property. Furthermore, you can define the actions associated with these custom buttons using the [commandClick](https://ej2.syncfusion.com/vue/documentation/api/grid/#commandClick) event.

Here's an example that demonstrates how to add custom command buttons using the `commands` property and customize the button click behavior to display grid details in a dialog using the `commandClick` event:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs7" %}