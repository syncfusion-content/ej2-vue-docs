---
layout: post
title: Filter list items in Vue Listview component | Syncfusion
description: Learn here all about Filter list items in the listview in Syncfusion Vue Listview component of Syncfusion Essential JS 2 and more.
control: Filter list items in the listview 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Filter list items in the listview in Vue Listview component

The filtered data can be displayed in the ListView component depending on user inputs using the [`DataManager`](https://ej2.syncfusion.com/vue/documentation/data/getting-started/). Refer to the following steps to render the ListView with filtered data.

* Render a textbox to get user input for filtering data.

* Render ListView with [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#datasource), and set the [`sortOrder`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#sortorder) property.

* Bind the `keyup` event for the textbox to perform the filtering operation. To filter list data, pass the list data source to the `DataManager`, manipulate the data using the [`executeLocal`](https://ej2.syncfusion.com/documentation/api/data/query/#executelocal) method, and then update the ListView's dataSource with the filtered data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/checklist-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/checklist-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/checklist-cs4" %}

> In this demo, data has been filtered with starting character of the list items. ou can also filter list items with an ending character by passing `endswith` in the [where](https://ej2.syncfusion.com/documentation/api/data/query/#where) clause instead of `startswith`.