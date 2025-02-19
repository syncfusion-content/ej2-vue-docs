---
layout: post
title: Add and remove items in Vue ListView component | Syncfusion
description: Learn here all about Add and remove list items from ListView in Syncfusion Vue ListView component of Syncfusion Essential JS 2 and more.
control: Add and remove list items from ListView 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Add and remove list items from ListView in Vue ListView component

You can add or remove list items from the ListView component using the [`addItem`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#additem) and [`removeItem`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#removeitem) methods.
Refer to the following steps to add or remove a list item.

* Render the ListView with a data source, and use the [template](https://ej2.syncfusion.com/vue/documentation/api/list-view/#template) property to append the delete icon for each list item. Also, bind the click event for the delete icon using the [`actionComplete`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#actioncomplete) handler.

* Render the Add Item button, and bind the click event. On the click event handler, pass data with random id to the [`addItem`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#additem) method to add a new list item on clicking the Add Item button.

* Bind the click handler to the delete icon created in step 1. Within the click event, remove the list item by passing the list item associated with the clicked delete icon to the [`removeItem`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#removeitem) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/add-item-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/add-item-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/add-item-cs1" %}