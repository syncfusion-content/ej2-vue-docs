---
layout: post
title: How to reverse a Range Slider in Vue Range Slider | Syncfusion
description: Build a reversible Syncfusion Vue Range Slider by setting the min to the max value and the max to the min value.
control: Reversible Range Slider 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to reverse a Range Slider in Vue Range Slider

You can create a Range Slider rendered with values in reverse order by setting the [min](https://ej2.syncfusion.com/vue/documentation/api/slider/#min) property to the maximum value and the [max](https://ej2.syncfusion.com/vue/documentation/api/slider/#max) property to the minimum value. An example of how to achieve a reversible Range Slider is shown below

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/range-slider/reversible-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/range-slider/reversible-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/reversible-cs1" %}


> Reversible order can be achieved with [Horizontal](https://ej2.syncfusion.com/vue/documentation/api/slider/sliderOrientation/) orientation Range Slider by setting [enableRtl](https://ej2.syncfusion.com/vue/documentation/api/slider/#enablertl) as true.