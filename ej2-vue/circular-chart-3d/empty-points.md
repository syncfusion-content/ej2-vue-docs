---
layout: post
title: Empty points in Vue 3D Circular Chart component | Syncfusion
description: Learn here all about empty points in Syncfusion Vue 3D Circular Chart component of Syncfusion Essential JS 2 and more.
control: Empty points 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Empty points in Vue 3D Circular Chart component

Data points containing `null` or `undefined` values are considered empty points. These empty data points are ignored and not plotted in the 3D Circular Chart. You can customize the handling of empty points using the `emptyPointSettings` property in the series. The default mode for empty points is `Gap`. Other supported modes include `Average`, `Drop`, and `Zero`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/pie-donut/empty-points/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/pie-donut/empty-points" %}

## Customization

A specific color for an empty point can be set by using the `fill` property in `emptyPointSettings`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/pie-donut/empty-point-custom/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/pie-donut/empty-point-custom" %}