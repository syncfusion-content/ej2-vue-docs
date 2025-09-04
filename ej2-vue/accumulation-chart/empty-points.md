---
layout: post
title: Empty points in Vue Accumulation chart component | Syncfusion
description: Learn here all about Empty points in Syncfusion Vue Accumulation chart component of Syncfusion Essential JS 2 and more.
control: Empty points 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Empty points in Vue Accumulation chart component

The data points those uses the `null` or `undefined` as value are considered as empty points. The empty data points are ignored and not plotted in the chart. You can customize those points, using the [`emptyPointSettings`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeries/#emptypointsettings) property in
series. The default mode of the empty point is `Gap`. Other supported modes are `Average` and `Zero`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/radius-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/radius-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/radius-cs3" %}

## Customization

Specific color for an empty point can be set by using the `fill` property in `emptyPointSettings` and the
border for an empty point can be set by using the `border` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/radius-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/radius-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/radius-cs4" %}

## Handling when no data is available

When no data is available to render in the chart, the `noDataTemplate` property can be used to display a custom layout within the chart area. This layout may include a message indicating the absence of data, a relevant image, or a button to initiate data loading. Styled text, images, or interactive elements can be incorporated to maintain design consistency and improve user guidance. Once data becomes available, the chart automatically updates to display the appropriate visualization.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs43/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs43/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs43" %}