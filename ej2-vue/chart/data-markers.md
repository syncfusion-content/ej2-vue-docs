---
layout: post
title: Data markers in Vue Chart component | Syncfusion
description: Learn here all about Data markers in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Data markers 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data markers in Vue Chart component

Data markers are visual indicators placed at each data point on a series, helping to clearly identify and highlight individual values in your chart. Markers improve readability and accessibility, especially in line and area charts where data points may otherwise be unclear. Customize marker shape, color, size, and appearance to match your design requirements.

<!-- markdownlint-disable MD036 -->

## Marker

<!-- markdownlint-disable MD036 -->

Enable markers for data points by setting the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/chart/markerSettings/#visible) option to `true` in the marker property. Each series receives distinct markers by default, improving visual differentiation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/data-marker/marker-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/data-marker/marker-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/marker-cs2" %}

## Shape

Assign different shapes to markers such as Rectangle, Circle, Diamond, Triangle, and others using the [`shape`](https://ej2.syncfusion.com/vue/documentation/api/chart/markerSettings/#shape) property. Shape selection helps distinguish between multiple series and improves visual clarity.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/data-marker/marker-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/data-marker/marker-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/marker-cs3" %}

>Note : To know more about the marker shape type refer the [`shape`](https://ej2.syncfusion.com/vue/documentation/api/chart/markerSettings/#shape).

## Images

Use custom images as markers instead of predefined shapes by setting the 
[`imageUrl`](https://ej2.syncfusion.com/vue/documentation/api/chart/markerSettings/#imageurl) property. This allows branded or thematic markers that enhance visual appeal and user engagement.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/data-marker/marker-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/data-marker/marker-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/marker-cs4" %}

## Customization

Customize marker appearance by modifying the `fill` (background color) and `border` properties. Combined with shape and image options, these customizations enable comprehensive marker styling to match your application design.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/data-marker/marker-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/data-marker/marker-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/marker-cs5" %}

## Customizing specific point

Use the [`pointRender`](https://ej2.syncfusion.com/vue/documentation/api/chart/index-default#pointrender) event to customize markers for individual data points. This event allows you to conditionally change shape, color, and border properties based on data values or other criteria.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/data-marker/marker-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/data-marker/marker-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/marker-cs6" %}

## Fill marker with series color

Fill markers with the series color by enabling the [`isFilled`](https://ej2.syncfusion.com/vue/documentation/api/chart/markerSettingsModel/#isfilled) property. This creates a cohesive visual design where markers inherit the series color automatically.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/data-marker/marker-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/data-marker/marker-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/marker-cs7" %}