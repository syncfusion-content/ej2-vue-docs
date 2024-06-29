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

To bind local data to the grid, you can assign a JavaScript object array to the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource) property. The local data source can also be provided as an instance of the `DataManager`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/databind/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/databind/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/databind/default-cs4" %}

> By default, `DataManager` uses `JsonAdaptor` for local data-binding.

## Managing spinner visibility during data loading

Showing a spinner during data loading in the Syncfusion Vue Grid enhances the experience by providing a visual indication of the loading progress. This feature helps to understand that data is being fetched or processed.

To show or hide a spinner during data loading in the grid, you can utilize the [showSpinner](https://ej2.syncfusion.com/vue/documentation/api/grid/#showspinner) and [hideSpinner](https://ej2.syncfusion.com/vue/documentation/api/grid/#hidespinner) methods provided by the Grid component.

The following example demonstrates how to show and hide the spinner during data loading using external buttons in a grid:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/databind/show-hide-spinner-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/databind/show-hide-spinner-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/databind/show-hide-spinner-cs1" %}

## Refresh the data source

You can add/delete the datasource records through an external button. To reflect the datasource changes in grid, you need to invoke the [`refresh`](https://ej2.syncfusion.com/vue/documentation/api/grid/#refresh) method.

Please follow the below steps to refresh the grid after datasource change.

**Step 1**: Add/delete the datasource record by using the following code.

```ts
    this.data.unshift(customData); // Add a new record.

    this.data.splice(selectedRow, 1); // Delete a record.
```

**Step 2**: When applied the changes in dataSource then refresh Grid at own.

```ts
    this.data = [...this.data]; // Refresh the Grid dataSource.
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/how-to/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/how-to/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/default-cs5" %}