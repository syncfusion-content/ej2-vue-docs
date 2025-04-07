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

Crosshair has a vertical and horizontal line to view the value of the axis at mouse or touch position.

Crosshair lines can be enabled by using [`enable`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettings/#enable) property in the `crosshair`.

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

Tooltip label for an axis can be enabled by using [`enable`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairTooltip/#enable) property of `crosshairTooltip` in the corresponding axis.

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

The [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairTooltip/#fill) and [`textStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairTooltip/#textstyle)
property of the `crosshairTooltip` is used to customize the background color and font style of the crosshair label respectively. Color and width of the crosshair line can be customized by using the [`line`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettingsModel/#line) property in the crosshair.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/crosshair-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/crosshair-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/crosshair-cs3" %}

>Note: To use crosshair feature, we need to inject `Crosshair` into the `provide`.

**Snap to data**

Enabling the [`snapToData`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettingsModel/#snaptodata) property in the crosshair aligns it with the nearest data point instead of following the exact mouse position.

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

Trackball is used to track a data point closest to the mouse or touch position. Trackball marker indicates the
closest point and trackball tooltip displays the information about the point. To use trackball feature,
we need to inject `Crosshair` and `Tooltip` into the `provide`.

Trackball can be enabled by setting the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettings/#enable) property of the crosshair to true and [`shared`](https://ej2.syncfusion.com/vue/documentation/api/chart/tooltipSettings/#shared) property in `tooltip` to true in chart.

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

The [`highlightCategory`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettings/#highlightcategory) property in the crosshair highlights the background of the entire category when hovered over. The crosshair color can be customized using the [`color`](https://ej2.syncfusion.com/vue/documentation/api/chart/borderModel/#color) property within the [`line`](https://ej2.syncfusion.com/vue/documentation/api/chart/borderModel/) configuration.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/crosshair-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/user-interaction/crosshair-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/crosshair-cs5" %}