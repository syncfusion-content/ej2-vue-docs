---
layout: post
title: Customize slider ticks label in Vue Range slider component | Syncfusion
description: Learn here all about Customize slider ticks label in Syncfusion Vue Range slider component of Syncfusion Essential JS 2 and more.
control: Customize slider ticks label 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize slider ticks label in Vue Range slider component

Slider view can be customized via CSS. By overriding the slider CSS classes, you can customize the ticks. The ticks in slider allows you to easily identify the current value/values of the slider. It contains [`smallStep`](https://ej2.syncfusion.com/vue/documentation/api/slider/ticksData/#smallstep) and [`largeStep`](https://ej2.syncfusion.com/vue/documentation/api/slider/ticksData/#largestep). By default, slider has class `e-tick` for slider ticks. You can override the class as per your requirement. Refer to the following code snippet to render ticks.

```ts
.e-scale .e-tick.e-custom::before {
    content: '\e967';
    position: absolute;
}
```

Here, the color for rendered ticks has been applied through nth-child(`child_number`). The color is applied to the value of the `child_number` in the slider.

```ts
#ticks_slider .e-scale :nth-child(1)::before {
    color: red;
}
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/range-slider/ticks-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/range-slider/ticks-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/ticks-cs1" %}