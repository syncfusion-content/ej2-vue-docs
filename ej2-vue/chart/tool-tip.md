---
layout: post
title: Tooltip in Vue Chart component | Syncfusion
description: Learn here all about Tooltip in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Tooltip 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in Vue Chart component

<!-- markdownlint-disable MD036 -->

The chart displays detailed information about a data point through a tooltip when the mouse pointer moves over the point.

## Default tooltip

By default, the tooltip is not visible. You can enable the tooltip by setting the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/chart/tooltipSettingsModel/#enable) property to **true** and by injecting `Tooltip` into the `provide`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/tooltip-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/tooltip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs1" %}

<!-- markdownlint-disable MD013 -->

## Fixed tooltip

By default, the tooltip tracks the mouse movement. You can render the tooltip at a fixed position by using the [`location`](https://ej2.syncfusion.com/vue/documentation/api/chart/tooltipSettingsModel/#location) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/tooltip-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/tooltip-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs7" %}

## Format the tooltip

<!-- markdownlint-disable MD013 -->

By default, the tooltip displays the x- and y-values of a data point. Additional information can be shown by specifying a custom format. For example, the format `${series.name} ${point.x}` displays the series name along with the x-value of the data point.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/tooltip-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/tooltip-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs2" %}

<!-- markdownlint-disable MD013 -->

## Individual series format

<!-- markdownlint-disable MD013 -->

Each series tooltip can be formatted separately by using the series [`tooltipFormat`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#tooltipformat) property.

> Note: When the series [`tooltipFormat`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#tooltipformat) property is specified, the tooltip for that series is displayed in the defined format. Otherwise, the global tooltip format is applied.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/tooltip-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/tooltip-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs3" %}

<!-- markdownlint-disable MD013 -->

## Tooltip template

Custom HTML content can be rendered in the tooltip by using the [`template`](https://ej2.syncfusion.com/vue/documentation/api/chart/tooltipSettingsModel/#template) property. The `${x}` and `${y}` placeholders can be used within the template to display the x- and y-values of the corresponding data point.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/tooltip-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/tooltip-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs4" %}

## Enable highlight

By setting the [`enableHighlight`](https://ej2.syncfusion.com/vue/documentation/api/chart/tooltipSettingsModel/#enablehighlight) property to **true**, all points in the hovered series are highlighted while the remaining points are dimmed. This behavior improves focus and readability during data analysis.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/tooltip-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/tooltip-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs8" %}

## Customize the appearance of tooltip

The appearance of the tooltip can be customized by using the following properties:
- [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart/tooltipSettingsModel/#fill) to set the background color
- [`border`](https://ej2.syncfusion.com/vue/documentation/api/chart/tooltipSettingsModel/#border) to configure the tooltip border
- [`textStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart/tooltipSettingsModel/#textstyle) to customize the tooltip text style

The [`highlightColor`](https://ej2.syncfusion.com/vue/documentation/api/chart/#highlightcolor) property is used to change the color of a data point when it is highlighted during tooltip interaction.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/tooltip-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/tooltip-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs5" %}

## Tooltip mapping name

By default, the tooltip displays only the x- and y-values of a data point. Additional information from the data source can be shown by using the [`tooltipMappingName`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#tooltipmappingname) property of the series. Use the `${point.tooltip}` placeholder in the tooltip format to display the mapped value.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/tooltip-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/tooltip-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs6" %}

## Closest tooltip

The [`showNearestTooltip`](https://ej2.syncfusion.com/vue/documentation/api/chart/tooltipSettingsModel/#shownearesttooltip) property displays the tooltip for the data point nearest to the pointer, even when the pointer is not directly positioned over the point.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/tooltip-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/tooltip-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs9" %}