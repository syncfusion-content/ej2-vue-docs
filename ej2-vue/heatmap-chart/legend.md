---
layout: post
title: Legend in Vue Heatmap chart component | Syncfusion
description: Learn here all about Legend in Syncfusion Vue Heatmap chart component of Syncfusion Essential JS 2 and more.
control: Legend 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Legend in Vue Heatmap chart component

The legend is used to provide the information about the heat map cell. You can enable the legend by setting the [visible](https://ej2.syncfusion.com/vue/documentation/api/heatmap/legendSettings/#visible) property to **true** and injecting the `Legend` module into the `provide`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/legend-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/legend-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/legend-cs1" %}

## Legend types

Heat map supports two legend types: Gradient and list type.

* Gradient - This is a continuous color legend with smooth color transition between palette color values.
* List - List is a fixed color legend. Each palette color information is shown separately in the list item.

You can change the legend type by using the [type](https://ej2.syncfusion.com/vue/documentation/api/heatmap/paletteSettings/#type) property in the `paletteSettings` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/legend-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/legend-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/legend-cs2" %}

## Placement

You can place the legend at left, right, top, or bottom to the heat map layout by using the [position](https://ej2.syncfusion.com/vue/documentation/api/heatmap/legendSettings/#position) property. The legend is positioned at the right to the heat map by default.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/legend-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/legend-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/legend-cs3" %}

## Alignment

You can align the legend as center, far, or near to the heat map using the [alignment](https://ej2.syncfusion.com/vue/documentation/api/heatmap/legendSettings/#alignment) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/legend-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/legend-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/legend-cs4" %}

## Legend dimensions

You can change the legend dimensions with values in pixels or percentage by using the[width](https://ej2.syncfusion.com/vue/documentation/api/heatmap/legendSettings/#width) and [height](https://ej2.syncfusion.com/vue/documentation/api/heatmap/legendSettings/#height) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/legend-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/legend-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/legend-cs5" %}

## Paging for legend

Paging is available only for the list type legend in the heat map, and it can be enabled by default,when the legend items exceed the legend bounds. You can view each legend items by navigating between the pages using navigation buttons.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/legend-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/legend-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/legend-cs6" %}

## Smart Legend

Smart legend is another way of showing list type legend with responsiveness and readability, when the palette has more number of items. You can enable this smart legend by using the [enableSmartLegend](https://ej2.syncfusion.com/vue/documentation/api/heatmap/legendSettings/#enablesmartlegend) property when the palette type is set to **Fixed**.

In smart legend, you can change the display type of legend labels by using the [labelDisplayType](https://ej2.syncfusion.com/vue/documentation/api/heatmap/legendSettings/#labeldisplaytype) property.

The following are the legend label display types:
* All: Displays all labels in the legend.
* Edge: Displays the legend labels only at extreme ends.
* None: None of the labels are displayed. The tooltip will appear for this type of label display when hovering over the legend item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/legend-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/legend-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/legend-cs7" %}

## Legend Selection

In the HeatMap, the legend selection is used to toggle the visibility of cell for viewing the specific range value. You can enable the legend selection using the [toggleVisibility](https://ej2.syncfusion.com/vue/documentation/api/heatmap/legendSettings/#togglevisibility) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/legend-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/legend-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/legend-cs8" %}

## Legend Title
The legend title displays a specific information about the legend. You can enable the legend title by setting the [title](../api/heatmap/legendSettings/#title) property by providing the text and customizing the legend title text style using the [textStyle](https://ej2.syncfusion.com/vue/documentation/api/heatmap/legendSettings/#textstyle) property.


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/legend-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/legend-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/legend-cs9" %}