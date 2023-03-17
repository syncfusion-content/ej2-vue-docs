---
layout: post
title: Local data in Vue Grid component | Syncfusion
description: Learn here all about Local data in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Local data 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Local data in Vue Grid component

To bind local data to the grid, you can assign a JavaScript object array to the
[`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource) property. The local data source can also be provided as an instance of the `DataManager`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/databind/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/databind/default-cs4" %}

> By default, `DataManager` uses `JsonAdaptor` for local data-binding.

## Refresh the data source

You can add/delete the datasource records through an external button. To reflect the datasource changes in grid, you need to invoke the [`refresh`](https://ej2.syncfusion.com/vue/documentation/api/grid/#refresh) method.

Please follow the below steps to refresh the grid after datasource change.

**Step 1**:

Add/delete the datasource record by using the following code.

```ts
    this.data.unshift(customData); // Add a new record.

    this.data.splice(selectedRow, 1); // Delete a record.
```

**Step 2**:

When applied the changes in dataSource then refresh Grid at own.

```ts
    this.data = [...this.data]; // Refresh the Grid dataSource.
```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/default-cs5" %}