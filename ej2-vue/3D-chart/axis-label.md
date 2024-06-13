---
layout: post
title: Axis labels in Vue 3D Chart component | Syncfusion
description: Learn here all about axis labels in Syncfusion 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Axis labels in Vue 3D Chart component

Axis labels are the labels that are positioned adjacent to the y-axis and beneath the x-axis. It provides descriptive information about the axis.

## Smart axis labels

When the axis labels overlap with each other, [`labelIntersectAction`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#labelintersectaction) property in the axis can be used to place them smartly.

Case 1: When setting `labelIntersectAction` as `Hide`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis-label/axis-label1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis-label/axis-label1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis-label/axis-label1" %}

Case 2: When setting `labelIntersectAction` as `Rotate45`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis-label/axis-label2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis-label/axis-label2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis-label/axis-label2" %}

Case 3: When setting `labelIntersectAction` as `Rotate90`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis-label/axis-label3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis-label/axis-label3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis-label/axis-label3" %}

## Edge label placement

Labels with long text at the edges of an axis may appear partially in the 3D chart. To avoid this,
use the [`edgeLabelPlacement`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#edgelabelplacement) property in axis, which moves the label inside the chart area for better appearance or hides it.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis-label/axis-label4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis-label/axis-label4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis-label/axis-label4" %}

## Maximum labels

The labels will be rendered based on the count in the [`maximumLabels`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#maximumlabels) property per 100 pixel. If the range (minimum, maximum, interval) and `maximumLabels` are set, then the priority goes to range. If the range is not set, then the priority goes to `maximumLabels` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis-label/axis-label5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis-label/axis-label5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis-label/axis-label5" %}