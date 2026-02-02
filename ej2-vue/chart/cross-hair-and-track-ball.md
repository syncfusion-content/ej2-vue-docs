---
layout: post
title: Cross hair and track ball in Vue Chart component | Syncfusion
description: Learn here all about Cross hair and track ball in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Cross hair and track ball 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Cross hair and track ball in Vue Chart component

The crosshair feature displays vertical and horizontal guide lines that intersect at the mouse or touch position, helping to identify the corresponding axis values precisely.

Crosshair lines can be enabled by setting the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettings/#enable) property in the `crosshair` settings.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/crosshair-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/crosshair-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/crosshair-cs1" %}

## Tooltip for axis

Axis tooltip labels can be enabled by setting the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairTooltip/#enable) property of `crosshairTooltip` in the corresponding axis. This tooltip displays the current axis value at the crosshair position.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/crosshair-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/crosshair-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/crosshair-cs2" %}

## Customization

The [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairTooltip/#fill) and [`textStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairTooltip/#textstyle) properties of `crosshairTooltip` are used to customize the background color and font style of the crosshair label.

The color and width of the crosshair lines can be customized by using the [`line`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettingsModel/#line) property in the crosshair settings.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/crosshair-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/crosshair-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/crosshair-cs3" %}

> Note: To use the crosshair feature, inject `Crosshair` into the `provide`.

## Snap to data

By enabling the [`snapToData`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettingsModel/#snaptodata) property, the crosshair snaps to the nearest data point instead of following the exact mouse position. This improves accuracy when inspecting values.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/crosshair-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/crosshair-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/crosshair-cs4" %}

## Trackball

The trackball feature tracks the data point closest to the mouse or touch position. A trackball marker highlights the nearest point, and the trackball tooltip displays detailed information about that point.

To use the trackball feature, inject both `Crosshair` and `Tooltip` into the `provide`.

Trackball functionality can be enabled by setting the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettings/#enable) property of the crosshair to **true** and the [`shared`](https://ej2.syncfusion.com/vue/documentation/api/chart/tooltipSettings/#shared) property of the tooltip to **true**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/trackball-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/trackball-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/trackball-cs1" %}

## Crosshair highlight

The [`highlightCategory`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettings/#highlightcategory) property highlights the background of the entire category when the crosshair is moved over the chart.

The crosshair line color can be customized using the [`color`](https://ej2.syncfusion.com/vue/documentation/api/chart/borderModel/#color) property within the [`line`](https://ej2.syncfusion.com/vue/documentation/api/chart/borderModel/) configuration.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/crosshair-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/crosshair-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/crosshair-cs5" %}