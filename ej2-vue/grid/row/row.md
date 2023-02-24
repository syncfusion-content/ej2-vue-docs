---
layout: post
title: Row in Vue Grid component | Syncfusion
description: Learn here all about Row in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Row 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Row in Vue Grid component

It represents the record details that are fetched from the data source.

## Row customization

### Using event

You can customize the appearance of the Row by using the [`rowDataBound`](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowdatabound) event.The [`rowDataBound`](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowdatabound) event triggers for every row. In that event handler, you can get [`RowDataBoundEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/grid/rowDataBoundEventArgs/) which contain details of the row.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/row/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/default-cs5" %}

### Using CSS customize alternate rows

You can change the grid's alternative rows' background color by overriding the `.e-altrow` class.

```
.e-grid .e-altrow {
    background-color: #fafafa;
}
```

Please refer the following example.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/row/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/default-cs6" %}

### Using CSS customize selected row

The background color of the selected row can be changed by overriding the following CSS style.

```
.e-grid td.e-active {
    background-color: #f9920b;
}
```

This is demonstrated in the following sample:

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/row/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/default-cs7" %}

## Adding a new row programmatically

The Grid can add a new row between the existing rows using the [addRecord](https://ej2.syncfusion.com/vue/documentation/api/grid/#addrecord) method of the Grid.

This is demonstrated in the following sample:

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/row/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/default-cs8" %}

> When working with remote data, it is impossible to add a new row between the existing rows.

## How to get the row information when hovering over the cell

It is possible to get the row information when hovering over the specific cell. This can be achieved by using the [rowDataBound](https://ej2.syncfusion.com/vue/documentation/api/grid#rowdatabound) event and [getRowInfo](https://ej2.syncfusion.com/vue/documentation/api/grid#getrowinfo) method of the Grid.

In the following sample, the `mouseover` event is bound to a grid row in the `rowDataBound` event, and when hovering over the specific cell, using the `getRowInfo` method, row information will be retrieved and displayed in the console.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/row/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/default-cs9" %}

## See Also

* [How to pass data to DetailTemplate in Vue Grid](https://www.syncfusion.com/forums/153907/how-to-pass-data-to-detailtemplate-in-vue-grid)