---
layout: post
title: Ticks in Vue Range Slider component | Syncfusion
description: Learn here all about Ticks in Syncfusion Vue Range Slider component of Syncfusion Essential JS 2 and more.
control: Ticks 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Ticks in Vue Range Slider component

The [`ticks`](https://ej2.syncfusion.com/vue/documentation/api/slider#ticks) in Slider help you easily identify the current value/values of the Slider. It contains [`smallStep`](https://ej2.syncfusion.com/vue/documentation/api/slider/ticksDataModel/#smallstep) and [`largeStep`](https://ej2.syncfusion.com/vue/documentation/api/slider/ticksDataModel/#largestep). Only the values of major ticks will be displayed on the Slider. In order to enable/disable the small ticks, use the [`showSmallTicks`](https://ej2.syncfusion.com/vue/documentation/api/slider/ticksDataModel/#showsmallticks) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/range-slider/ticks-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/range-slider/ticks-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/ticks-cs2" %}

## Step

When the Slider is moved, it increases/decreases the value based on the step value. By default, the value increases/decreases by 1. Use the [`step`](https://ej2.syncfusion.com/vue/documentation/api/slider#step) property to change the increment step value.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/range-slider/ticks-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/range-slider/ticks-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/ticks-cs3" %}

## Min and Max

Enable the minimum/starting and maximum/ending values of the Slider, by using the [`min`](https://ej2.syncfusion.com/vue/documentation/api/slider#min) and [`max`](https://ej2.syncfusion.com/vue/documentation/api/slider#max) property. By default, the minimum value is 1 and maximum value is 100. In the following example, the Slider is rendered with a minimum value of 100 and a maximum value of 1000.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/range-slider/ticks-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/range-slider/ticks-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/ticks-cs4" %}