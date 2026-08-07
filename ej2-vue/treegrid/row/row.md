---
layout: post
title: Vue TreeGrid Rows | Syncfusion
description: Learn how to work with rows in Vue TreeGrid, including row customization, selection, styling, rendering, and row-level operations.
control: Row 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Rows in Vue TreeGrid

The row represents record details fetched from data source.

## Customize rows

You can customize the appearance of a row by using the [`rowDataBound`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#rowdatabound) event.
The [`rowDataBound`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#rowdatabound) event triggers for every row. In the event handler, you can get the
`RowDataBoundEventArgs` that contains details of the row.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/row/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/row/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/row/default-cs1" %}

## Styling alternate rows

 You can change the treegrid's alternative rows' background color by overriding the `.e-altrow` class.

```
.e-treegrid .e-altrow {
    background-color: #fafafa;
}
```

Please refer to the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/row/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/row/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/row/default-cs2" %}