---
layout: post
title: Cross hair in Vue Stock chart component | Syncfusion
description: Learn here all about Cross hair in Syncfusion Vue Stock chart component of Syncfusion Essential JS 2 and more.
control: Cross hair 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Cross hair in Vue Stock chart component

Crosshair has a vertical and horizontal line to view the value of the axis at mouse or touch position.

Crosshair lines can be enabled by using [`enable`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettingsModel/#enable-boolean)property in the `crosshair`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stockchart/cross-hair-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stockchart/cross-hair-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/cross-hair-cs1" %}

## Tooltip for axis

Tooltip label for an axis can be enabled by using [`enable`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettingsModel/#enable-boolean) property of `crosshairTooltip` in the corresponding axis.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stockchart/cross-hair-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stockchart/cross-hair-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/cross-hair-cs2" %}

## Customization

The [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettingsModel/#fill-string) and [`textStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettingsModel/#textstyle-fontmodel) property of the `crosshairTooltip` is used to customize the background color and font style of the crosshair label respectively. Color and width of the crosshair line can be customized by using the [`line`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettingsModel/#line-bordermodel) property in the crosshair.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stockchart/cross-hair-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stockchart/cross-hair-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/cross-hair-cs3" %}

## Crosshair label customization

The [`crosshairLabelRender`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettingsModel/#crosshairlabelrender) event is triggered before each crosshair axis label is rendered in the stock chart. This event provides the ability to customize the appearance and content of crosshair labels, or to conditionally prevent specific labels from being displayed.

The event arguments include:

* `text` – The default text for the crosshair label. You can modify this value to display custom content.
* `value` – The actual data value at the crosshair position.
* `axisName` – The name of the axis associated with the label.
* `axisOrientation` – The orientation of the axis, either `Horizontal` or `Vertical`.
* `textStyle` – Font properties for the label text, allowing customization of font family, size, weight, and color.
* `fill` – The background color of the crosshair label.
* `cancel` – Set this to **true** to prevent the label from being rendered.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stockchart/cross-hair-label-render-cs/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stockchart/cross-hair-label-render-cs/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stockchart/cross-hair-label-render-cs" %}

**Snap to data**

Enabling the [`snapToData`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettingsModel/#snaptodata) property in the crosshair aligns it with the nearest data point instead of following the exact mouse position.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stockchart/cross-hair-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stockchart/cross-hair-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/cross-hair-cs4" %}

>Note: To use crosshair feature, we need to inject `Crosshair` into the `provide`.