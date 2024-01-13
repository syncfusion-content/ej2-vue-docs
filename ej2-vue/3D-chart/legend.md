---
layout: post
title: Legend in Vue 3D Chart component | Syncfusion
description: Learn here all about legend in Syncfusion 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Legend in Vue 3D Chart component

<!-- markdownlint-disable MD036 -->

Legend provides information about the series rendered in the 3D chart.

## Position and alignment

By using the [`position`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/legendSettings/#position) property, the legend can be positioned at left, right, top or bottom of the 3D chart. The legend is positioned at the bottom of the 3D chart, by default.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/user-interaction/position/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/position" %}

The custom position helps you to position the legend anywhere in the 3D chart using x and y coordinates.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/user-interaction/custom-position/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/custom-position" %}

### Legend reverse

The order of the legend items can be reversed by using the [`reverse`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/legendSettings/#reverse) property. By default, legend for the first series in the collection will be placed first.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/user-interaction/reverse/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/reverse" %}

### Legend alignment

The legend can be aligned at near, far or center to the 3D chart using the [`alignment`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/legendSettings/#alignment) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/user-interaction/alignment/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/alignment" %}

## Legend customization

To change the legend icon shape, [`legendShape`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3D/#legendshape) property in the [`series`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3D/) can be used. By default, the legend icon shape is `seriesType`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/user-interaction/custom/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/custom" %}

### Legend size

By default, legend takes 20% - 25% of the 3D chart's height horizontally, when it is placed on top or bottom position and 20% - 25% of the 3D chart's width vertically, when it is placed on left or right position. You can change this default legend size by using the [`height`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/legendSettings/#height) and [`width`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/legendSettings/#width) properties of the `legendSettings`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/user-interaction/size/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/size" %}

### Legend item size

The size of the legend items can be customised by using the [`shapeHeight`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/legendSettings/#shapeheight) and [`shapeWidth`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/legendSettings/#shapewidth) properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/user-interaction/item-size/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/item-size" %}

### Paging for legend

Paging will be enabled by default, when the legend items exceeds the legend bounds. Each legend items can be viewed by navigating between the pages using navigation buttons.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/user-interaction/paging/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/paging" %}

### Legend text wrap

When the legend text exceeds the container, the text can be wrapped by using the [`textWrap`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/legendSettings/#textwrap) property. End user can also wrap the legend text based on the [`maximumLabelWidth`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/legendSettings/#maximumlabelwidth) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/user-interaction/text-wrap/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/text-wrap" %}

## Series selection through legend

By default, you can collapse the series visibility by clicking the legend. On the other hand, turn off the [`toggleVisibility`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/legendSettings/#togglevisibility) property if you must use a legend click to choose a series.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/user-interaction/legend-selection/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/legend-selection" %}

## Collapsing legend item

By default, series name will be displayed as legend. To skip the legend for a particular series, you can give empty string to the series name.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/user-interaction/collapse/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/collapse" %}

## Legend title

You can set title for legend using [`title`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/legendSettings/#title) property in [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/legendSettings). The [`size`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/fontModel/#size), [`color`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/fontModel/#color), [`opacity`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/fontModel/#opacity), [`fontStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/fontModel/#fontstyle), [`fontWeight`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/fontModel/#fontweight), [`fontFamily`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/fontModel/#fontfamily), [`textAlignment`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/fontModel/#textalignment), and [`textOverflow`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/fontModel/#textoverflow) of legend title can be customized by using the [`titleStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/legendSettings/#titlestyle) property in [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/legendSettings/). The [`titlePosition`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/legendSettings/#titleposition) is used to set the legend position in `Top`, `Left` and `Right` position. The [`maximumTitleWidth`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/legendSettings/#maximumtitlewidth) is used to set the width of the legend title. By default, it will be `100px`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/user-interaction/title/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/title" %}

## Arrow page navigation

The page number will always be visible while using legend paging. It is now possible to disable the page number and enable page navigation with the left and right arrows. The [`enablePages`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/legendSettings/#enablepages) property needs to be set to **false** in order to render the arrow page navigation.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/user-interaction/arrow-page/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/arrow-page" %}

## Legend item padding

The [`itemPadding`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/legendSettings/#itempadding) property can be used to adjust the space between the legend items.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/user-interaction/item-padding/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/item-padding" %}

>Note: To use legend feature, we need to inject `Legend3D` into the `provide`.