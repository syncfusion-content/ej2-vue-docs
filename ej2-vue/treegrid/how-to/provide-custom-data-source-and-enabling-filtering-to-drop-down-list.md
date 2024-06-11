---
layout: post
title: Provide custom data source and enabling filtering to drop down list in Vue Treegrid component | Syncfusion
description: Learn here all about Provide custom data source and enabling filtering to drop down list in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Provide custom data source and enabling filtering to drop down list 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Provide custom data source and enabling filtering to drop down list in Vue Treegrid component

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