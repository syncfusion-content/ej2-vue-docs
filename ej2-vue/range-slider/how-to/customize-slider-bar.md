---
layout: post
title: Customize slider bar in Vue Range slider component | Syncfusion
description: Learn here all about Customize slider bar in Syncfusion Vue Range slider component of Syncfusion Essential JS 2 and more.
control: Customize slider bar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize slider bar in Vue Range slider component

Slider appearance can be customized through CSS. By overriding the slider CSS classes, you can customize the slider bar. The slider bar can be customized with different themes. By default, slider have class name `e-slider-track` for bar. The class can be overridden with our own color values like the following code snippet.

```
.e-control.e-slider .e-slider-track .e-range {
    background: linear-gradient(left, #e1451d 0, #fdff47 17%, #86f9fe 50%, #2900f8 65%, #6e00f8 74%, #e33df9 83%, #e14423 100%);
}
```

You can also apply background color for a certain range depending upon slider values, using change event.

```ts
  onChange(args){
           let sliderTrack = document.getElementById('dynamic_color_slider').querySelector('.e-range');
           let sliderHandle = document.getElementById('dynamic_color_slider').querySelector('.e-handle');
            if (args.value > 0 && args.value <= 25) {
                // Change handle and range bar color to green when
                (sliderHandle).style.backgroundColor = 'green';
                (sliderTrack).style.backgroundColor = 'green';
            } else if (args.value > 25 && args.value <= 50) {
                // Change handle and range bar color to royal blue
                (sliderHandle).style.backgroundColor = 'royalblue';
                (sliderTrack).style.backgroundColor = 'royalblue';
            } else if (args.value > 50 && args.value <= 75) {
                // Change handle and range bar color to dark orange
                (sliderHandle).style.backgroundColor = 'darkorange';
                (sliderTrack).style.backgroundColor = 'darkorange';
            } else if (args.value > 75 && args.value <= 100) {
                // Change handle and range bar color to red
                (sliderHandle).style.backgroundColor = 'red';
                (sliderTrack).style.backgroundColor = 'red';
            }
    }
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/range-slider/bar-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/range-slider/bar-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/bar-cs1" %}