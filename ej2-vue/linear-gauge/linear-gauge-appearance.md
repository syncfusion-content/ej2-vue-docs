---
layout: post
title: Linear gauge appearance in Vue Linear gauge component | Syncfusion
description: Learn here all about Linear gauge appearance in Syncfusion Vue Linear gauge component of Syncfusion Essential JS 2 and more.
control: Linear gauge appearance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Linear gauge appearance in Vue Linear gauge component

## Customizing the Linear Gauge area

The following properties are available in the [`ejs-lineargauge`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge) to customize the Linear Gauge area.

* [`background`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#background) - Applies the background color for the Linear gauge.
* [`border`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#border) - To customize the color and width of the border in Linear Gauge.
* [`margin`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#margin) - To customize the margins of the Linear Gauge.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs40/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs40/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs40" %}

## Setting up the Linear Gauge title

The title for the Linear Gauge can be set using [`title`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#title) property in Linear Gauge. Its appearance can be customized using the [`titleStyle`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#titlestyle) with the below properties.

* [`color`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/fontModel/#color) - Specifies the text color of the title.
* [`fontFamily`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/fontModel/#fontfamily) - Specifies the font family of the title.
* [`fontStyle`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/fontModel/#fontstyle) - Specifies the font style of the title.
* [`fontWeight`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/fontModel/#fontweight) - Specifies the font weight of the title.
* [`opacity`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/fontModel/#opacity) - Specifies the opacity of the title.
* [`size`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/fontModel/#size) - Specifies the font size of the title.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs41/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs41/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs41" %}

## Customizing the Linear Gauge container

The area used to render the ranges and pointers at the center position of the gauge is called container. The following types of container to be applicable for Linear Gauge.

* Normal
* Rounded Rectangle
* Thermometer

The type of the container can be modified by using the [`type`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/containerModel/#type) property in [`container`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/containerModel/). The container can be customized by using the following properties in [`container`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/containerModel/).

* [`offset`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/containerModel/#offset) - To place the container with the specified distance from the axis of the Linear Gauge.
* [`width`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/containerModel/#width) - To set the thickness of the container.
* [`height`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/containerModel/#height) - To set the length of the container.
* [`backgroundColor`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/containerModel/#backgroundcolor) - To set the background color of the container.
* [`border`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/containerModel/#border) - To set the color and width for the border of the container.

### Normal

The **Normal** type will render the container as a rectangle and this is the default container type.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs42/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs42/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs42" %}

### Rounded Rectangle

The **RoundedRectangle** type will render the container as a rectangle with rounded corner radius. The rounded corner radius of the container can be customized using the [`roundedCornerRadius`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/containerModel/#roundedcornerradius) property in [`container`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#container).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs43/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs43/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs43" %}

### Thermometer

The **Thermometer** type will render the container similar to the appearance of thermometer.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs44/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs44/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs44" %}

## Fitting Linear Gauge to the control

The Linear Gauge component is rendered with margin by default. To remove the margin around the Linear Gauge, the [`allowMargin`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#allowmargin) property in the [`ejs-lineargauge`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/) is set as **false**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs45/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs45/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs45" %}

>To use this feature, set the [`allowMargin`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#allowmargin) property to **false**, the [`width`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#width) property to **100%** and the properties of [`margin`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#margin) to **0**.