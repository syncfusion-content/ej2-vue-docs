---
layout: post
title: Legend in Vue Chart component | Syncfusion
description: Learn here all about Legend in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Legend 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Legend in Vue Chart component

The legend provides information about the series rendered in the chart and helps users identify each series by its color, shape, or style.

## Position and Alignment

By using the [`position`](https://ej2.syncfusion.com/vue/documentation/api/chart/legendSettings/#position) property, the legend can be positioned at the left, right, top, or bottom of the chart. By default, the legend is positioned at the bottom of the chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs31/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs31/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs31" %}

* Custom positioning allows the legend to be placed anywhere in the chart using `x` and `y` coordinates.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs32/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs32/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs32" %}

## Legend Reverse

Use the [`reverse`](https://ej2.syncfusion.com/vue/documentation/api/chart/legendSettings/#reverse) property to reverse the order of legend items. By default, the legend item for the first series is placed first.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/legend-reverse-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/legend-reverse-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/legend-reverse-cs1" %}

<!-- markdownlint-disable MD036 -->

**Legend Alignment**

<!-- markdownlint-disable MD036 -->

Align the legend to `center`, `far`, or `near` using the [`alignment`](https://ej2.syncfusion.com/vue/documentation/api/chart/legendSettings/#alignment) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs33/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs33/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs33" %}

## Customization

To change the legend icon shape, use the [`legendShape`](api-series.html#legendshape-string) property in the [`series`](api-series.html). By default, the legend icon shape is the `seriesType`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs34/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs34/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs34" %}

### Legend Size

By default, the legend occupies approximately 20%–25% of the chart height when positioned at the top or bottom, and 20%–25% of the chart width when positioned at the left or right. Change the default size using the  [`width`](https://ej2.syncfusion.com/vue/documentation/api/chart/legendSettings/#width) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/chart/legendSettings/#height) properties of `legendSettings`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs35/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs35/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs35" %}

### Legend Item Size

Customize the size of legend items using the [`shapeHeight`](api-legendSettings.html#shapeheight-number) and [`shapeWidth`](api-legendSettings.html#shapewidth-number) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs36/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs36/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs36" %}

### Paging for Legend

Paging is enabled automatically when legend items exceed the legend bounds. Navigate between pages using the provided navigation buttons.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/legend-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/legend-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/legend-cs1" %}

### Legend Text Wrap

When legend text exceeds the container, enable wrapping using the [`textWrap`](https://ej2.syncfusion.com/vue/documentation/api/chart/legendSettings/#textwrap) property. Wrapping can also be controlled using the [`maximumLabelWidth`](https://ej2.syncfusion.com/vue/documentation/api/chart/legendSettings/#maximumlabelwidth) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs37/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs37/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs37" %}

## Set the label color based on series color

Set the legend label color based on the series color by using the chart’s [`loaded`](https://ej2.syncfusion.com/vue/documentation/api/chart/#loaded) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs38/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs38/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs38" %}

## Enable Animation

Enable or disable animation during legend interactions by setting `enableAnimation` to `true` or `false` in the chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs39/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs39/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs39" %}

## Collapsing Legend Item

By default, the series name is displayed as a legend item. To omit a legend item for a particular series, set the series name to an empty string.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs40/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs40/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs40" %}

## Legend Title

Set a title for the legend using the `title` property in `legendSettings`. The title can be customized using `fontStyle`, `size`, `fontWeight`, `color`, `textAlignment`, `fontFamily`, `opacity`, and `textOverflow`. Use `titlePosition` to place the title at `Top`, `Left`, or `Right`. The `maximumTitleWidth` property sets the width of the legend title and defaults to `100px`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs41/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs41/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs41" %}

## Arrow Page Navigation

When legend paging is enabled, page numbers are shown by default. To display only left and right arrows for navigation, set `enablePages` to `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/legend-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/legend-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/legend-cs2" %}

## Legend Item Padding

Use the [`itemPadding`](https://ej2.syncfusion.com/vue/documentation/api/chart/legendSettings/#itempadding) property to adjust the spacing between legend items.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs42/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs42/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs42" %}

>Note: To use legend feature, we need to inject `Legend` into the `Provide`.

## Legend layout

The [`layout`](https://ej2.syncfusion.com/vue/documentation/api/chart/legendSettingsModel/#layout) property in [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/chart#legendsettings) displays the legend horizontally or vertically. By default, [`layout`](https://ej2.syncfusion.com/vue/documentation/api/chart/legendSettingsModel/#layout) is set to **Auto**. The [`maximumColumns`](https://ej2.syncfusion.com/vue/documentation/api/chart/legendSettingsModel/#maximumcolumns) property in [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/chart#legendsettings) property defines the maximum number of columns that can be displayed within the available space when using auto layout. Enabling the [`fixedWidth`](https://ej2.syncfusion.com/vue/documentation/api/chart/legendSettingsModel/#fixedwidth) property ensures that all legend items have equal widths, determined by the maximum item width.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs45/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs45/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs45" %}