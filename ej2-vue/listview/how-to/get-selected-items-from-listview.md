---
layout: post
title: Get selected items in Vue ListView Component | Syncfusion
description: Learn here all about get selected items support in Syncfusion Essential Vue ListView component, it's elements and more.
control: Get selected items from listview 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Get selected items in Vue ListView Component

Single or many items can be selected by users in the ListView component. An API is used to get selected items from the list items. This is called as the [`getSelectedItems`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#getselecteditems) method.

**`getSelectedItems` method**

This is used to get the details of the currently selected item from the list items. It returns the [`SelectedItem`](https://ej2.syncfusion.com/vue/documentation/api/list-view/selectedItem/) | [`SelectedCollection`](https://ej2.syncfusion.com/vue/documentation/api/list-view/selectedCollection/)

The `getSelectedItems` method returns the following items from the selected list items.

| Return type | Purpose |
|------------|-------------------|
| text | Returns the text of selected item lists |
| data | Returns the whole data of selected list items, i.e., returns the fields data of selected li.|
| item | Returns the collections of list items |

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/listview/checklist-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/checklist-cs5" %}
