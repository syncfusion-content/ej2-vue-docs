---
layout: post
title: Strip line in Vue Chart component | Syncfusion
description: Learn here all about Strip line in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Strip line 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Strip line in Vue Chart component

The Vue Chart component supports horizontal and vertical strip lines, providing visual guides to highlight specific ranges in the chart area. Strip lines can be added to both axes and fully customized based on visual and functional requirements. To use strip line features, inject the `StripLine` module into the `provide`.

## Horizontal strip lines

Horizontal strip lines are created by adding the `stripline` configuration to the vertical axis and setting the `visible` property to `true`. They highlight horizontal ranges in the chart, and multiple strip lines can be added to the same axis.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/strip-line-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/strip-line-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/strip-line-cs1" %}

## Vertical strip lines

Vertical strip lines are created by adding the `stripline` configuration to the horizontal axis and enabling the `visible` property. They highlight vertical regions in the chart and support multiple entries for an axis.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/strip-line-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/strip-line-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/strip-line-cs2" %}

## Customize the strip line

Strip lines can be customized to highlight specific regions more effectively:
- Use `start` to set the beginning value of the strip line.
- Use `end` to define the ending value.
- Use `startFromOrigin` to begin the strip line from the axis origin.
- Use `size` to specify the strip line height or width (based on orientation).
- Use `border` to customize border appearance.
- Use `zIndex` to control whether the strip line appears behind or above chart series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/strip-line-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/strip-line-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/strip-line-cs3" %}

## Customize the strip line text

Strip line text labels can be customized for readability and visual presentation:
- Use `textStyle` to set text appearance.
- Use `rotation` to rotate the strip line text.
- Use `horizontalAlignment` and `verticalAlignment` to adjust label placement.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/strip-line-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/strip-line-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/strip-line-cs4" %}

## Dash array

Dashed strip lines can be rendered using the `dashArray` property. The dash pattern is defined using a series of numbers representing dash and gap lengths.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/strip-line-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/strip-line-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/strip-line-cs5" %}

## Recurrence strip line

Recurring strip lines help mark repeating events across the chart axis. The following properties configure recurrence:

- `isRepeat` – Enables or disables repeating strip lines.
- `repeatEvery` – Specifies the interval at which the strip line repeats.
- `repeatUntil` – Defines the end value up to which strip lines should repeat.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/strip-line-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/strip-line-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/strip-line-cs6" %}

## Size type

The `sizeType` property determines how strip line size is interpreted. Supported units include:

- `Auto`
- `Pixel`
- `Years`
- `Months`
- `Days`
- `Hours`
- `Minutes`
- `Seconds`

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/strip-line-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/strip-line-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/strip-line-cs7" %}

## Segment strip line

Segment strip lines highlight a specific region corresponding to another axis. This is useful for marking regions that depend on values across two dimensions.

Key properties:
- `isSegmented` – Enables segmented strip lines.
- `segmentStart` – Defines the starting point of the segment line.
- `segmentEnd` – Defines the ending point of the segment line.
- `segmentAxisName` – Specifies the associated axis for segmentation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/strip-line-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/strip-line-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/strip-line-cs8" %}