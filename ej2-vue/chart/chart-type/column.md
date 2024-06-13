---
layout: post
title: Column in Vue Chart component | Syncfusion
description: Learn here all about Column in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Column chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Column Chart in Vue Chart Component

## Column

To render a column series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Column` and inject `ColumnSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs13" %}

## Column space and width

The [`columnSpacing`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#columnspacing) and [`columnWidth`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#columnwidth) properties are used to customize the space between columns.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs23/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs23/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs23" %}

## Grouped column

You can use the [`groupName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#groupname) property to group the data points in the column type charts. Data points with same group name are grouped together.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/group-column-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/group-column-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/group-column-cs1" %}

## Cylindrical column chart

To render a cylindrical column chart, set the [`columnFacet`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#columnfacet) property to `Cylinder` in the chart series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs24/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs24/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs24" %}

## Series customization

The following properties can be used to customize the `column` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](../api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes of series.
* [border](https://ej2.syncfusion.com/vue/documentation/api/chart/borderModel/#properties) – Specifies the [color](https://ej2.syncfusion.com/vue/documentation/api/chart/borderModel/#color) and [width](https://ej2.syncfusion.com/vue/documentation/api/chart/borderModel/#width) of series border.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs18/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs18" %}

## See also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)