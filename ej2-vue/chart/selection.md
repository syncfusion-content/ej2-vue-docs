---
layout: post
title: Selection in Vue Chart component | Syncfusion
description: Learn here all about Selection in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Selection in Vue Chart component

The chart provides selection support for both series and individual data points when users interact with the chart using mouse clicks.

> When a data point is clicked, the corresponding series legend item is also selected.

Multiple selection modes are available to help select and analyze chart data effectively. The supported selection modes are:

* None
* Point
* Series
* Cluster
* DragXY
* DragX
* DragY

## Point

A single data point can be selected by setting the `selectionMode` property to `Point`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/selection-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/selection-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/selection-cs1" %}

> Note: To use the selection feature, inject `Selection` into the `provide`.

## Series

An entire series can be selected by setting the `selectionMode` property to `Series`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/selection-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/selection-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/selection-cs2" %}

## Cluster

Cluster selection allows selection of data points that share the same index across all series. This can be enabled by setting the `selectionMode` property to `Cluster`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/selection-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/selection-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/selection-cs3" %}

## Rectangular selection

**DragXY, DragX, and DragY**

Rectangular selection enables users to select a group of data points within a defined region by setting the `selectionMode` property accordingly.

* **DragXY** – Selects data points along both the horizontal and vertical axes.
* **DragX** – Selects data points along the horizontal axis.
* **DragY** – Selects data points along the vertical axis.

The selected data points are returned as an array collection through the [`dragComplete`](https://ej2.syncfusion.com/vue/documentation/api/chart/iDragCompleteEventArgs) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/drag-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/drag-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/drag-cs1" %}

## Lasso selection

Lasso selection allows users to draw a freehand shape on the chart to select data points within that region. Set the `selectionMode` property to `Lasso` to enable this feature. Multiple regions can be selected on the same chart using this mode.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/drag-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/drag-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/drag-cs2" %}

## Multi-region selection

Multiple regions can be selected on the chart by setting the `allowMultiSelection` property to **true**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/drag-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/drag-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/drag-cs3" %}

## Selection type

Multiple data points or series can be selected simultaneously by enabling the [`isMultiSelect`](https://ej2.syncfusion.com/vue/documentation/api/chart/chartModel#ismultiselect) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/selection-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/selection-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/selection-cs4" %}

## Selection on load

Data points or series can be selected programmatically when the chart is loaded by using the [`selectedDataIndexes`](https://ej2.syncfusion.com/vue/documentation/api/chart/chartModel#selecteddataindexes) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/selection-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/selection-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/selection-cs5" %}

## Selection through on legend

Points or series can also be selected through the legend by enabling the [`toggleVisibility`](https://ej2.syncfusion.com/vue/documentation/api/chart/legendSettingsModel#toggleVisibility) property.  
To visually emphasize the selected series, use the [`enableHighlight`](https://ej2.syncfusion.com/vue/documentation/api/chart/legendSettings#enableHighlight) property.

> When [`highlightMode`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/highlightmode) is set to `Series`, `Cluster`, or `Point`, legend highlighting occurs even if [`enableHighlight`](https://ej2.syncfusion.com/vue/documentation/api/chart/legendSettings#enableHighlight) is set to **false**. In this case, `highlightMode` takes precedence, and hovering over legend items highlights the corresponding series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/selection-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/selection-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/selection-cs6" %}

## Customization for selection

Custom styles can be applied to selected points or series by using the [`selectionStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#selectionstyle) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/selection-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/selection-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/selection-cs7" %}