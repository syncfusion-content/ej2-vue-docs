---
layout: post
title: Tooltip in Vue 3D Circular Chart component | Syncfusion
description: Learn here all about tooltip in Syncfusion Vue 3D Circular Chart component of Syncfusion Essential JS 2 and more.
control: Tooltip 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in Vue 3D Circular Chart component

The 3D Circular Chart will display details about the points through a tooltip, when the mouse is moved over a specific point. By default, the tooltip is not visible. It can be enabled by using the `enable` property in `tooltip` to **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/user-interaction/tooltip/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/tooltip" %}

>To use tooltip feature, inject the `CircularChartTooltip3D` into the `provide`.

## Header

You can specify a header for the tooltip by using the `header` property in `tooltip`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/user-interaction/header/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/header" %}

## Format

By default, the tooltip shows information about the x and y values in points. Additionally, more information can be displayed in the tooltip by using the `format` property. For example, the format `${series.name} : ${point.x}` shows the series name and the point's x value.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/user-interaction/tooltip-format/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/tooltip-format" %}

## Tooltip template

Any HTML elements can be displayed in the tooltip by using the `template` property in the tooltip.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/user-interaction/template/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/template" %}

## Fixed tooltip

By default, the tooltip tracks the mouse movement, but it can be set to a fixed position using the `location` property in `tooltip`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/user-interaction/fixed-tooltip/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/fixed-tooltip" %}

## Customization

The `fill` and `border` properties are used to customize the background color and border of the tooltip, respectively. The `textStyle` property in the tooltip is used to customize the font of the tooltip text. Additionally, the `highlightColor` property can be used to change the color of the data point when hovering.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/user-interaction/tooltip-custom/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/tooltip-custom" %}

## Customization of individual tooltip

Using the `tooltipRender` event, you can customize tooltip values for a particular point.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/user-interaction/tooltip-event/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/tooltip-event" %}