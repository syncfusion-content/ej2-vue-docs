---
layout: post
title: Selection in Vue 3D Chart component | Syncfusion
description: Learn here all about selection in Syncfusion 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Selection in Vue 3D Chart component

The 3D chart provides selection support for the series and its data points on mouse click.

>When mouse is clicked on the data points, the corresponding series legend will also be selected.

We have different types of selection mode for selecting a data.

* None
* Point
* Series
* Cluster

## Point

To select a point, set the [`selectionMode`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#selectionmode) property to **Point**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/point-selection/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/point-selection/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/point-selection" %}

## Series

To select a series, set the [`selectionMode`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#selectionmode) property to **Series**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/series-selection/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/series-selection/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/series-selection" %}

## Cluster

To select the points that corresponds to the same index in all the series, set the [`selectionMode`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#selectionmode) property to **Cluster**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/cluster-selection/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/cluster-selection/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/cluster-selection" %}

## Selection type

To select multiple points or series, enable the [`isMultiSelect`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#ismultiselect) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/selection-type/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/selection-type/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/selection-type" %}

## Selection during initial loading

In a 3D chart, selecting a point or series during initial loading can only be done programmatically. The [`selectedDataIndexes`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#selecteddataindexes) property can be used for this.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/selection-load/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/selection-load/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/selection-load" %}

## Selection through legend

To select a point or series through legend use the [`toggleVisibility`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/legendSettingsModel/#togglevisibility) property. Also, use [`enableHighlight`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/legendSettingsModel/#enablehighlight) property for highlighting the series through legend.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/selection-legend/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/selection-legend/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/selection-legend" %}