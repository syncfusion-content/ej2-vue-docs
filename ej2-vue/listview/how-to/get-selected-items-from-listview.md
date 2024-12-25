---
layout: post
title: Get selected items in Vue Listview component | Syncfusion
description: Learn here all about Get selected items from listview in Syncfusion Vue Listview component of Syncfusion Essential JS 2 and more.
control: Get selected items from listview 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Get selected items from listview in Vue Listview component

Single or many items can be selected by users in the ListView component. An API method is available to get selected items from the list items. This is called the [`getSelectedItems`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#getselecteditems) method.

**`getSelectedItems` method**

This is used to get the details of the currently selected item from the list items. It returns either a [`SelectedItem`](https://ej2.syncfusion.com/vue/documentation/api/list-view/selectedItem/) | [`SelectedCollection`](https://ej2.syncfusion.com/vue/documentation/api/list-view/selectedCollection/) depending on the selection mode.

The `getSelectedItems` method returns the following items from the selected list items.

| Return type | Purpose |
|------------|-------------------|
| text | Returns the text of selected item lists |
| data | Returns the complete data of selected list items, i.e., returns the fields data of selected li elements |
| item | Returns the collections of list items |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/checklist-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/checklist-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/checklist-cs5" %}