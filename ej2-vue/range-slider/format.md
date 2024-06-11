---
layout: post
title: Format in Vue Range slider component | Syncfusion
description: Learn here all about Format in Syncfusion Vue Range slider component of Syncfusion Essential JS 2 and more.
control: Format 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Format in Vue Range slider component

The `format` feature used to customize the units of Slider values to desired format. The formatted values will also be applied to the ARIA attributes of the slider. There are two ways of achieving formatting in slider.

* Use the [format](https://ej2.syncfusion.com/vue/documentation/api/slider/tooltipDataModel/#format) API of slider which utilizes our [Internationalization](../common/internationalization/) to format values.

* Customize using the events namely `renderingTicks` and `tooltipChange`.

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

In this method, we have different predefined formatting styles like Numeric (N), Percentage (P), Currency (C) and `#` specifiers. In this below example, we have formatted the `ticks` and `tooltip` values into percentage.

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

In this method, we will be retrieving the values from the slider events then process them to desired formatted the values. In this sample we have customized the `ticks` values into weekdays as one formatting and `tooltip` values into day of the week as another formatting.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/range-slider/format-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/range-slider/format-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/format-cs4" %}