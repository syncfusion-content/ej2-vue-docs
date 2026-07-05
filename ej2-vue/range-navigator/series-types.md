---
layout: post
title: Series types in Vue Range navigator component | Syncfusion
description: Learn here all about Series types in Syncfusion Vue Range navigator component of Syncfusion Essential JS 2 and more.
control: Series types 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Series types in Vue Range navigator component

To render the data, the Range Selector supports three types of series.

<!-- markdownlint-disable MD036 -->

## Line

<!-- markdownlint-disable MD036 -->

To render a line series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeriesModel#type) as **Line**  and inject the `LineSeries` module using `RangeNavigator.Inject(LineSeries)` method. By default, the line series is rendered in the Range Selector.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs26/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs26/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs26" %}

## Area

To render an area series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeriesModel#type) as **Area** and inject `AreaSeries` module using `RangeNavigator.Inject(AreaSeries)` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs27/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs27/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs27" %}

## StepLine

To render a Step line series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeriesModel#type) as **StepLine**  and inject `StepLineSeries` module using `RangeNavigator.Inject(StepLineSeries)` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs28/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs28/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs28" %}

## Spline

To render a Spline series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeriesModel#type) as **Spline**  and inject `SplineSeries` module using `RangeNavigator.Inject(SplineSeries)` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs31/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs31/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs31" %}

## Spline Area

To render a Spline Area series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeriesModel#type) as **SplineArea**  and inject `SplineAreaSeries` module using `RangeNavigator.Inject(SplineAreaSeries)` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs32/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs32/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs32" %}

## Column

To render a Column series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeriesModel#type) as **Column**  and inject `ColumnSeries` module using `RangeNavigator.Inject(ColumnSeries)` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs33/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs33/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs33" %}