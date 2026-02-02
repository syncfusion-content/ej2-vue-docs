---
layout: post
title: Column Pinning (Frozen) in Vue Gantt Chart Component | Syncfusion
description: Learn here all about column pinning (Frozen) in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Column Pinning (Frozen)
documentation: ug
domainurl: ##DomainURL##
---

# Column Pinning (Frozen) in Vue Gantt Chart Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Gantt Chart component provides a frozen columns feature that keeps selected columns fixed while scrolling horizontally through large datasets. This functionality ensures that critical information remains visible at all times, improving readability and user experience. By maintaining key columns in view, it simplifies navigation and makes referencing important data points easier when working with extensive project details.

To enable frozen columns, use the [frozenColumns](https://ej2.syncfusion.com/vue/documentation/api/gantt#frozencolumns) property in the Gantt Chart component. In the following example, the `frozenColumns` property is set to **2**, which keeps the first two columns fixed on the left while the remaining columns can be scrolled horizontally.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/frozen-column-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/frozen-column-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/frozen-column-cs1" %}

## Freeze particular columns

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Gantt Chart provides a feature that enables freezing specific columns, significantly enhancing data visibility and improving the user experience. The `isFrozen` property is used at the column level to freeze a specific column at any desired index on the left side, offering flexibility in managing which columns are frozen.

To freeze a particular column in the Gantt Chart, set the [isFrozen](https://ej2.syncfusion.com/vue/documentation/api/gantt/column#isfrozen) property of the column to **true**.The following example demonstrates how to freeze a particular column in the Gantt Chart using the `isFrozen` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/frozen-column-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/frozen-column-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/frozen-column-cs2" %}

## Freeze direction

In the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Gantt Chart, the **freeze direction** feature allows to position frozen columns either to the left, right, or in a fixed position, while still allowing the remaining columns to be horizontally movable. To achieve this, the [column.freeze](https://ej2.syncfusion.com/vue/documentation/api/gantt/column#freeze) property can be utilized. This property is used to specify the freeze direction for individual columns. The types of the `column.freeze` directions:

* **Left**: When the `column.freeze` property is set to **Left**, specific columns will be frozen on the left side.

* **Right**: When the `column.freeze` property is set to **Right**, certain columns will be frozen on the right side.

* **Fixed**: The Fixed direction locks a column at a fixed position within the Gantt Chart columns. This ensures that the column is always visible during horizontal scroll.

In the following example, the **TaskID** column is frozen on the left side, the **resources** column is frozen on the right side and the **Progress** column is frozen on the fixed of the content table.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/frozen-column-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/frozen-column-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/frozen-column-cs3" %}

N> The freeze direction is not compatible when both the [isFrozen](https://ej2.syncfusion.com/vue/documentation/api/gantt/column#isfrozen) and [frozenColumns](https://ej2.syncfusion.com/vue/documentation/api/gantt#frozencolumns) properties are enabled simultaneously.

## Change default frozen line color

The frozen line borders of frozen columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Gantt Chart component can be customized by applying custom CSS styles to the respective frozen columns. This allows to change the border color of left, right, and fixed frozen columns to match your application's design and theme.

To change the default frozen line color, use the following CSS class names and apply the desired border color:

For left frozen columns: 

```css
.e-gantt .e-leftfreeze.e-freezeleftborder {
    border-right-color: rgb(0, 255, 0) !important;
}
```
For right frozen columns:

```css
.e-gantt .e-rightfreeze.e-freezerightborder {
    border-left-color: rgb(0, 0, 255) !important;
}
```
For fixed frozen columns, both left and right borders need to be specified as mentioned below:

```css
.e-gantt .e-leftfreeze.e-freezeleftborder {
    border-right-color: rgb(0, 255, 0) !important;
}

.e-gantt .e-rightfreeze.e-freezerightborder {
    border-left-color: rgb(0, 0, 255) !important;
}
```
The following example demonstrates how to change the default frozen line color using CSS:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/frozen-column-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/frozen-column-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/frozen-column-cs4" %}