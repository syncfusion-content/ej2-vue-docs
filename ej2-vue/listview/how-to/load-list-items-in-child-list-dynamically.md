---
layout: post
title: Load items in child dynamically in Vue Listview component | Syncfusion
description: Learn here all about Load list items in child list dynamically in Syncfusion Vue Listview component of Syncfusion Essential JS 2 and more.
control: Load list items in child list dynamically 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Load list items in child list dynamically in Vue Listview component

To load list items in the child list dynamically, push the new list item data into the existing [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#datasource) using the [`select`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#select) event.

Refer to the following steps to load list item into the child list:

1. Initially, render the ListView with the required data source.

2. Bind the [`select`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#select) event that triggers selecting list item in the ListView component. By using the **select** event, you can push the new list item to the child list of the data source by specifying its item index. Item index can be obtained from the [`SelectEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/list-view/selectEventArgs/) of the select event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/checklist-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/checklist-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/checklist-cs7" %}