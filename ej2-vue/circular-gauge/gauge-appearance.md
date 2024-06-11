---
layout: post
title: Gauge appearance in Vue Circular gauge component | Syncfusion
description: Learn here all about Gauge appearance in Syncfusion Vue Circular gauge component of Syncfusion Essential JS 2 and more.
control: Gauge appearance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Gauge appearance in Vue Circular gauge component

## Gauge Title

Circular gauge can be given a title by using [`title`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#title-string) property, to show the information about the gauge.
Title can be customized by using [`titleStyle`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#titlestyle-fontmodel) property in gauge.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs4" %}

## Gauge Position

<!-- markdownlint-disable MD036 -->

Gauge can be positioned anywhere in the container with the help of
[`centerX`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#centerx-string) and
[`centerY`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#centery-string)
property and it accepts values either in percentage or in pixels.
The default value of the [`centerX`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#centerx-string) and
[`centerY`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#centery-string) property is 50%, which means gauge will get rendered to the centre of the container.

### In Pixel

You can set the mid point of the gauge in pixel as demonstrated below,

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs5" %}

### In Percentage

By setting the value in percentage, gauge gets its mid point with respect to its plot area.
For example, when the [`centerX`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#centerx-string)
value as '0%' and [`centerY`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#centery-string) value is ‘50%’, gauge will get positioned at the top left corner of the plot area.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs6" %}

## Area Customization

### Customize the gauge background

Using [`background`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#background-string) and
[`border`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#border-bordermodel) properties, you can change the background color and border of the circular gauge.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs7" %}

### Gauge Margin

You can set margin for gauge from its container through
[`margin`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#margin-marginmodel) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs8" %}

## Radius calculation based on angles

Render semi or quarter circular gauges by modifying the start and end angles. By enabling the radius based on angle option, the radius of circular gauge will be calculated based on the start and end angles to avoid excess white space.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs9" %}