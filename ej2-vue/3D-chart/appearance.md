---
layout: post
title: Appearance in Vue 3D Chart component | Syncfusion
description: Learn here all about appearance in Syncfusion 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Vue 3D Chart component

## Custom color palette

The default color of series or points can be customized by providing a custom color palette of your choice by using the [`palettes`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#palettes) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/apperance/appear1" %}

## Data point customization

The color of an individual data point can be customized using the below options.

### Point color mapping

The color for the points can be bound from the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3D/#datasource) for the series by utilizing the [`pointColorMapping`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3D/#pointcolormapping) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %} 
{% include code-snippet/chart3d/apperance/appear2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" }
{% include code-snippet/chart3d/apperance/appear2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/apperance/appear2" %}

## Point level customization

The data label and fill color of each data point can be customized using the [`pointRender`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/i3DPointRenderEventArgs/) and [`textRender`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/i3DTextRenderEventArgs/) events.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/apperance/appear3" %}

<!-- markdownlint-disable MD036 -->

## Chart area customization

<!-- markdownlint-disable MD036 -->

**Customize the chart background**

The background color and border of the 3D chart can be customized using the [`background`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#background) and [`border`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#border) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/apperance/appear4" %}

**Chart margin**

The 3D chart's margin can be set from its container using the [`margin`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#margin) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/apperance/appear5" %}

## Animation

To customize the animation for a particular series, the [`animation`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3D/#animation) property can be used. It can be enabled or disabled by using the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/animationModel/#enable) property. The [`duration`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/animationModel/#duration) property specifies the duration of an animation and the [`delay`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/animationModel/#delay) property allows us to start the animation at desire time.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/apperance/appear6" %}

## Chart rotation

The 3D chart can be rotated by using the [`enableRotation`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#enablerotation) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/apperance/appear7" %}

## Title

The 3D chart can be given a title by using [`title`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#title) property, to show the information about the data plotted.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/apperance/appear8" %}

### Title position

By using the [`position`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/titleSettingsModel/#position) property in [`titleStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#titlestyle), the [`title`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#title) can be positioned at left, right, top or bottom of the 3D chart. The title is positioned at the top of the 3D chart, by default.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/apperance/appear9" %}

The custom option is used to position the title anywhere in the 3D chart using [`x`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/titleSettingsModel/#x) and [`y`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/titleSettingsModel/#y) coordinates.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/apperance/appear10" %}

### Title alignment

The title can be aligned to the near, far, or center of the 3D chart by using the [`textAlignment`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/titleSettingsModel/#textalignment) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/apperance/appear11" %}

### Title customization

The [`titleStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#titlestyle) property of the 3D chart provides options to customize the title by using the following properties.

* [`size`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/titleSettingsModel/#size) - Specifies the size of the title.
* [`color`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/titleSettingsModel/#color) - Specifies the color for the title. 
* [`fontFamily`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/titleSettingsModel/#fontfamily) - Specifies the font family for the title.
* [`fontWeight`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/titleSettingsModel/#fontweight) - Specifies the font weight of the title.
* [`fontStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/titleSettingsModel/#fontstyle) - Specifies the font style for the title.
* [`opacity`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/titleSettingsModel/#opacity) - Specifies the opacity for the color of the title.
* [`textAlignment`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/titleSettingsModel/#textalignment) - Specifies the alignment of the title.
* [`textOverflow`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/titleSettingsModel/#textoverflow) - Specifies the overflow of the title.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/apperance/appear12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/apperance/appear12" %}