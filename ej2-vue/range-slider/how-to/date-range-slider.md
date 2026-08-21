---
layout: post
title: How to create a date range slider in Vue Range Slider | Syncfusion
description: Format the Syncfusion Vue Range Slider ticks and tooltip as dates using the renderingTicks and tooltipChange events.
control: Date range Slider 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to create a date range slider in Vue Range Slider

The date formatting can be achieved in [ticks](https://ej2.syncfusion.com/vue/documentation/api/slider/#ticks) and [tooltip](https://ej2.syncfusion.com/vue/documentation/api/slider/#tooltip), using [`renderingTicks`](https://ej2.syncfusion.com/vue/documentation/api/slider/#renderingticks) and [`tooltipChange`](https://ej2.syncfusion.com/vue/documentation/api/slider/#tooltipchange) events, respectively. The process of formatting is demonstrated in the following sample.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/range-slider/how-to-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/range-slider/how-to-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/how-to-cs1" %}