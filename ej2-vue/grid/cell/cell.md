---
layout: post
title: Cell in Vue Grid component | Syncfusion
description: Learn here all about Cell in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Cell 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Cell in Vue Grid component

## Cell customization

The appearance of cells can be customized by using the [`queryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/grid/#querycellinfo) event.
The [`queryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/grid/#querycellinfo) event triggers for every cell. In that event handler, you can get [`QueryCellInfoEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/grid/queryCellInfoEventArgs/) that contains the details of the cell.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/cell/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/cell/default-cs1" %}

## Custom attributes

You can customize the grid cells by adding a CSS class to the [`customAttribute`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#customattributes) property of the column.

```css
.e-attr {
    background: #d7f0f4;
}
```

```ts
<e-column
    field='ShipCity' headerText='Ship City' :customAttributes= "{class: 'e-attr'}" width=90 >
</e-column>
```

In the below example, we have customized the cells of `OrderID` and `ShipCity` columns.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/cell/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/cell/default-cs2" %}

## Grid lines

The [`gridLines`](https://ej2.syncfusion.com/vue/documentation/api/grid/#gridlines) have the option to display cell border and it can be defined by the [`gridLines`](https://ej2.syncfusion.com/vue/documentation/api/grid/#gridlines) property.

The available modes of grid lines are:

| Modes | Actions |
|-------|---------|
| Both | Displays both the horizontal and vertical grid lines.|
| None | No grid lines are displayed.|
| Horizontal | Displays the horizontal grid lines only.|
| Vertical | Displays the vertical grid lines only.|
| Default | Displays grid lines based on the theme.|

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/cell/autowrap-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/cell/autowrap-cs2" %}

>By default, the grid renders with **Default** mode.