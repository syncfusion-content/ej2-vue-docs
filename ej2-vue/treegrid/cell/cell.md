---
layout: post
title: Cell in Vue Treegrid component | Syncfusion
description: Learn here all about Cell in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Cell 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Cell in Vue Treegrid component

## Customize cell styles

The appearance of cells can be customized by using the [`queryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#querycellinfo) event. The [`queryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#querycellinfo) event triggers for every cell. In that event handler, you can get `QueryCellInfoEventArgs` that contains the details of the cell.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/cell/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/cell/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/cell/default-cs2" %}

## Custom attributes

You can customize the treegrid cells by adding a CSS class to the [`customAttribute`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#customattributes) property of the column.

```css
.e-attr {
    background: '#d7f0f4';
}
```

```ts
{
    field: 'taskID', headerText: 'Task ID', width: 90, customAttributes: {class: "e-attr"}, textAlign: 'Right'
}
```

In the below example, we have customized the cells of `TaskID` and `StartDate` columns.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/cell/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/cell/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/cell/default-cs3" %}

## Grid lines

The [`gridLines`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#gridlines) have option to display cell border and it can be defined by the
[`gridLines`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#gridlines) property.

The available modes of grid lines are:

| Modes | Actions |
|-------|---------|
| Both | Displays both the horizontal and vertical grid lines.|
| None | No grid lines are displayed.|
| Horizontal | Displays the horizontal grid lines only.|
| Vertical | Displays the vertical grid lines only.|
| Default | Displays grid lines based on the theme.|

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/cell/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/cell/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/cell/default-cs4" %}

>By default, the treegrid renders with `Default` mode.