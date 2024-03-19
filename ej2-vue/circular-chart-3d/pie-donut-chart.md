---
layout: post
title: Pie and Donut in Vue 3D Circular Chart component | Syncfusion
description: Learn here all about Pie and Donut in Syncfusion Vue 3D Circular Chart component of Syncfusion Essential JS 2 and more.
control: Pie and Donut 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Pie and Donut in Vue 3D Circular Chart component

## Pie chart

To render a pie series, inject the `PieSeries3D` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/pie-donut/pie/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/pie-donut/pie" %}

## Radius customization

By default, the radius of the pie series will be 80% of the size, which is the minimum of the 3D Circular Chart's width and height. You can customize this by using the `radius` property of the series.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/pie-donut/radius/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/pie-donut/radius" %}

## Various radius pie chart

You can assign different radii to each slice of the pie by fetching the radius from the data source and using it with the `radius` property in the `series`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/pie-donut/various-radius/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/pie-donut/various-radius" %}

## Donut chart

To achieve a donut in the pie series, customize the `innerRadius` property of the series. By setting a value greater than 0%, a donut will appear. The `innerRadius` property takes value from 0% to 100% of the pie radius.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/pie-donut/donut/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/pie-donut/donut" %}

## Text and fill color mapping

The text and the fill color from the data source can be mapped to the 3D Circular Chart using `pointColorMapping` in the series and `name` in the data label, respectively.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/pie-donut/color/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/pie-donut/color" %}

## Customization

Individual points in pie chart can be customized using the `pointRender` event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/pie-donut/customization/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/pie-donut/customization" %}
