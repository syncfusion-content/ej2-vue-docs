---
layout: post
title: Vue TreeGrid DropDownList Data & Filtering | Syncfusion
description: Learn how to provide a custom data source and enable filtering for DropDownList in the Vue TreeGrid with column edit parameters.
control: Provide custom data source and enabling filtering to drop down list 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Custom Data Source and Filtering for DropDownList in Vue TreeGrid

You can provide data source to the DropDownList by using the **params** of [`columns.edit`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#edit) property.

While setting new data source using edit params, you must specify a new **query** property for the DropDownList as follows,

```ts
    priorityParams: {
        params: {
          allowFiltering: true,
          dataSource: priorityData,
          fields: { text: "priorityName", value: "priorityName" },
          query: new Query(),
          actionComplete: () => false
        }
    };
```

You can also enable filtering for the DropDownList by passing the [`allowFiltering`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#allowfiltering) as **true** to the edit params.

In the below demo, DropDownList is rendered with custom [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#datasource) for the *Priority* column and enabled filtering to search DropDownList items.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs17/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs17" %}