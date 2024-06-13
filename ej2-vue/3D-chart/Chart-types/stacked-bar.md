---
layout: post
title: 100% Stacked Bar Chart in Vue 3D Chart component | Syncfusion
description: Learn here all about 100% stacked bar chart in Syncfusion 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# 100% Stacked bar chart in Vue 3D Chart component

## 100% Stacked bar chart

To render a [100% stacked bar](https://www.syncfusion.com/vue-components/vue-charts/chart-types/100-stacked-bar-chart) series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3DModel/#type) as `StackingBar100` and inject `StackingBarSeries3D` into the `provide`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/types/stackedbar1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/types/stackedbar1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/types/stackedbar1" %}

## 100% Cylindrical stacked bar chart

To render a cylindrical 100% stacked bar chart, set the [`columnFacet`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3DModel/#columnfacet) property to `Cylinder` in the chart series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/types/stackedbar2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/types/stackedbar2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/types/stackedbar2" %}

## Series customization

The following properties can be used to customize the `100% stacked bar` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3DModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3DModel/#opacity) – Specifies the opacity of the [fill](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3DModel/#fill) color.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/types/stackedbar3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/types/stackedbar3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/types/stackedbar3" %}