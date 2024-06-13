---
layout: post
title: Events in Vue HeatMap chart component | Syncfusion
description: Learn here all about Events in Syncfusion Vue HeatMap chart component of Syncfusion Essential JS 2 and more.
control: Events 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Events in Vue HeatMap chart component

This section describes the HeatMap chart event, which occurs when the required actions are performed.

## cellClick

When you click on a HeatMap cell, the [cellClick](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#cellclick) event is triggered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iCellClickEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/events-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/events-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/events-cs1" %}

## cellDoubleClick

When you double click on a HeatMap cell, the [cellDoubleClick](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#celldoubleclick) event is triggered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iCellClickEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/events-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/events-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/events-cs2" %}

## cellRender

The [cellRender](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#cellrender) event will be triggered before each HeatMap cell is rendered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iCellEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/events-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/events-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/events-cs3" %}

## cellSelected

When single or multiple cells in the HeatMap are selected, the [cellSelected](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#cellselected) event is triggered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iSelectedEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/events-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/events-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/events-cs4" %}

## created

Once HeatMap has been completely rendered, the [created](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#created) event is triggered.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/events-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/events-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/events-cs5" %}

## legendRender

The [legendRender](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#legendrender) event is triggered before the legend is rendered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iLegendRenderEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/events-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/events-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/events-cs6" %}

## load

The [load](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#load) event is triggered before the HeatMap is rendered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iLoadedEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/events-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/events-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/events-cs7" %}

## loaded

Once HeatMap is loaded, the [loaded](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#loaded) event is triggered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iLoadedEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/events-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/events-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/events-cs8" %}

## resized

When the window is resized, the [resized](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#resized) event is triggered to notify the resize of the HeatMap. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iResizeEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/events-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/events-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/events-cs9" %}

## tooltipRender

The [tooltipRender](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#tooltiprender) event is triggered before the tooltip is rendered on the HeatMap cell. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/heatmap/iTooltipEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/events-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/events-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/events-cs10" %}