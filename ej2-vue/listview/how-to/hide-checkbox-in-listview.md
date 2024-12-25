---
layout: post
title: Hide checkbox in Vue Listview component | Syncfusion
description: Learn here all about Hide checkbox in listview in Syncfusion Vue Listview component of Syncfusion Essential JS 2 and more.
control: Hide checkbox in listview 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Hide checkbox in Vue Listview component

The checkbox of a list item can be hidden by using [`htmlAttributes`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#h tmlattributes) of [`fields`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#fields) object. With the help of `htmlAttributes`, we can add a unique class to each list item rendered from the data source. Using this CSS class, we can hide the checkbox of the list item.

In this sample, we have hidden multiple leaf nodes of the nested list. The `e-checkbox-hidden` class has been added in the data source where the checkbox needs to be hidden. Refer the below snippet for simple data source.

```ts
    {
        'text': 'New York',
        'id': '3002',
        'category': 'USA',
        'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' }
    }
```

Even though we have hidden the checkbox, the functionality will remain the same for the list item, which might affect the `getSelectedItems` method. So, to counteract that we will follow certain logic in the `select` event. The logic here is to remove the `e-active` class from the other checkbox hidden list item which will be added when we select on that item and retain `e-active` on currently selected item.

> In this process we will exclude the visible checkbox list items and only consider the hidden checkbox items.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/checklist-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/checklist-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/checklist-cs6" %}