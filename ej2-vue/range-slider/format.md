---
layout: post
title: Format in Vue Range Slider component | Syncfusion
description: Learn here all about Format in Syncfusion Vue Range Slider component of Syncfusion Essential JS 2 and more.
control: Format 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Format in Vue Range Slider component

The [`format`](https://ej2.syncfusion.com/vue/documentation/api/slider/tooltipDataModel/#format) feature is used to customize the units of Slider values to desired format. The formatted values will also be applied to the ARIA attributes of the Slider. There are two ways of achieving formatting in Slider.

* Use the [`format`](https://ej2.syncfusion.com/vue/documentation/api/slider/tooltipDataModel/#format) API of Slider which utilizes our [`Internationalization`](../common/internationalization/) to format values.

* Customize using the events namely [`renderingTicks`](https://ej2.syncfusion.com/vue/documentation/api/slider#renderingticks) and [`tooltipChange`](https://ej2.syncfusion.com/vue/documentation/api/slider#tooltipchange).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/range-slider/format-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/range-slider/format-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/format-cs2" %}

## Using format API

This method offers different predefined formatting styles like Numeric (N), Percentage (P), Currency (C) and `#` specifiers. In the example below, we have formatted the [`ticks`](https://ej2.syncfusion.com/vue/documentation/api/slider#ticks) and [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/slider#tooltip) values into percentage.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/range-slider/format-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/range-slider/format-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/format-cs3" %}

## Using Events

In this method, we retrieve the values from the Slider events then process them to achieve the desired formatted values. In this sample, we have customized the [`ticks`](https://ej2.syncfusion.com/vue/documentation/api/slider#ticks) values into weekdays as one formatting and [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/slider#tooltip) values into day of the week as another formatting.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/range-slider/format-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/range-slider/format-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/format-cs4" %}