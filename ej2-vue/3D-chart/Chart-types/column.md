---
layout: post
title: Column Chart in Vue 3D Chart component | Syncfusion
description: Learn here all about column chart in Syncfusion 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Column Chart in Vue 3D Chart component

## Column chart

To render a [column series](https://www.syncfusion.com/vue-components/vue-charts/chart-types/column-chart), use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3DModel/#type) as `Column` and inject `ColumnSeries3D` into the `provide`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/types/column1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/types/column1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/types/column1" %}

## Column space and width

The [`columnSpacing`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3DModel/#columnspacing) and [`columnWidth`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3DModel/#columnwidth) properties are used to customize the space between columns.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/types/column2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/types/column2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/types/column2" %}

## Grouped column

The data points can be grouped in the column type charts by using the [`groupName`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3DModel/#groupname) property. Data points with same group name are grouped together.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/types/column3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/types/column3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/types/column3" %}

## Cylindrical column chart

To render a cylindrical column chart, set the [`columnFacet`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3DModel/#columnfacet) property to `Cylinder` in the chart series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/types/column4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/types/column4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/types/column4" %}

## Series customization

The following properties can be used to customize the `column` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3DModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3DModel/#opacity) – Specifies the opacity of the [fill](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3DModel/#fill) color.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/types/column5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/types/column5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/types/column5" %}