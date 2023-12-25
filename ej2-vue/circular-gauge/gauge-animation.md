---
layout: post
title: Animation in Vue Circular Gauge component | Syncfusion
description: Learn here all about animation in Syncfusion Vue Circular Gauge component of Syncfusion Essential JS 2 and more.
control: Circular Gauge
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Animation in Vue Circular Gauge component

All of the elements in the Circular Gauge, such as the axis lines, ticks, labels, ranges, pointers, and annotations, can be animated sequentially by using the [animationDuration](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#animationduration) property. The animation for the Circular Gauge is enabled when the `animationDuration` property is set to an appropriate value in milliseconds, providing a smooth rendering effect for the component. If the `animationDuration` property is set to **0**, which is the default value, the animation effect is disabled. If the animation is enabled, the component will behave in the following order.

1. The axis line will be animated in the rendering direction (clockwise or anticlockwise).
2. Each tick line and label will then be animated.
3. If available, ranges will be animated.
4. If available, pointers will be animated in the same way as [pointer animation](https://ej2.syncfusion.com/vue/documentation/circular-gauge/gauge-pointers#animation).
5. If available, annotations will be animated.

The animation of the Circular Gauge is demonstrated in the following example.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs70/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs70" %}

> Only the pointer of the Circular Gauge can be animated individually, not the axis lines, ticks, labels, ranges, and annotations. You can refer this [link](https://ej2.syncfusion.com/vue/documentation/circular-gauge/gauge-pointers#animation) to enable only pointer animation.
