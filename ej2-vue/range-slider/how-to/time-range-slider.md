---
layout: post
title: How to create a time range slider in Vue Range Slider | Syncfusion
description: Format the Syncfusion Vue Range Slider ticks and tooltip as time values using the renderingTicks and change events.
control: Time range Slider 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to create a time range slider in Vue Range Slider

The time formatting can be achieved in the same manner as date formatting using [`renderingTicks`](https://ej2.syncfusion.com/vue/documentation/api/slider/#renderingticks) and [change](https://ej2.syncfusion.com/vue/documentation/api/slider/#change) events. The process of time formatting is explained in the following sample below.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/range-slider/time-format-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/range-slider/time-format-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/time-format-cs1" %}