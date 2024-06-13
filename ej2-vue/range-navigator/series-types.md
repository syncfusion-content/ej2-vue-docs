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

To render a line series, set the series[`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) to `Line`, and inject the `LineSeries` module using the `RangeNavigator.Inject(LineSeries)` method. To render a line series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeriesModel/#type) as **Line**  and inject the `LineSeries` module using `RangeNavigator.Inject(LineSeries)` method. By default, the line series is rendered in the Range Selector.

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

To render a step line series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Area` and inject `AreaSeries` module using `RangeNavigator.Inject(AreaSeries)` method. To render an area series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeriesModel/#type) as **Area** and inject `AreaSeries` module using `RangeNavigator.Inject(AreaSeries)` method.

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

To render a Step line series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/rangeNavigatorSeriesModel/#type) as **Step Line**  and inject `StepLineSeries` module using `RangeNavigator.Inject(StepLineSeries)` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs28/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs28/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs28" %}