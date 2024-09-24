---
layout: post
title: Pie dough nut in Vue Accumulation chart component | Syncfusion
description: Learn here all about Pie dough nut in Syncfusion Vue Accumulation chart component of Syncfusion Essential JS 2 and more.
control: Pie dough nut 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Pie dough nut in Vue Accumulation chart component

## Pie Chart

To render a pie series, use the series [`type`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeriesModel/#type) as `Pie` and inject the `PieSeries` module  into the `provide`. If the `PieSeries` module is not injected, this module will be loaded by default.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs20/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs20" %}

## Radius Customization

By default, radius of the pie series will be 80% of the size (minimum of chart width and height).

You can customize this using [`radius`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeriesModel/#radius) property of the series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs21/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs21" %}

## Pie Center

The center position of the pie can be changed by Center X and Center Y. By default, center value of the pie series x and y is 50%. You can customize this using [`center`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/pieCenterModel/) property of the series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs22/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs22/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs22" %}

## Various Radius Pie Chart

You can use radius mapping to render the slice with different [`radius`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeries/#radius) pie and also use [`border`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeries/#border) , fill properties to customize the point. dataLabel is used to represent individual data and its value.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs23/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs23/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs23" %}

## Doughnut Chart

To achieve a doughnut in pie series, customize the [`innerRadius`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeries/#innerradius) property of the series. By setting value greater than 0%, a doughnut will appear. The `innerRadius` property takes value from 0% to 100% of the pie radius.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs24/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs24/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs24" %}

## Start and End angles

You can customize the start and end angle of the pie series using the [`startAngle`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeries/#startangle) and [`endAngle`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeries/#endangle) properties. The default value of  `startAngle` is 0 degree, and `endAngle` is 360 degrees. By customizing this, you can achieve a semi pie series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs25/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs25/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs25" %}

## Color and Text Mapping

The fill color and the text in the data source can be mapped to the chart using `pointColorMapping` in series and `name` in datalabel respectively.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs26/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs26/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs26" %}

## Border Radius

You can create rounded corners for each slice using the [`borderRadius`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeriesModel/#borderradius) option, giving the chart a modern and polished look.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs39/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs39/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs39" %}

## Patterns

You can apply different patterns to the pie slices using the [`applyPattern`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeriesModel/#applypattern) property in the series and the [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/iAccPointRenderEventArgs/) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs40/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs40/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs40" %}

## Multi-level pie chart

You can achieve a multi-level drill down in pie and doughnut charts using [pointClick](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationChartModel/#pointclick) event. If user clicks any point in the chart, that corresponding data will be shown in the next level and so on based on point clicked.

You can also achieve drill-up (back to the initial state) by using [chartMouseClick](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationChartModel/#chartmouseclick) event. In below sample, you can drill-up by clicking back button in the center of the chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs1" %}