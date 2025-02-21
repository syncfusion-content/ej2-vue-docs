---
layout: post
title: Customize Slider thumb in Vue Range Slider component | Syncfusion
description: Learn here all about Customize Slider thumb in Syncfusion Vue Range Slider component of Syncfusion Essential JS 2 and more.
control: Customize Slider thumb 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize Slider thumb in Vue Range Slider component

The Slider's appearance can be customized through CSS. By overriding the Slider's CSS classes, you can customize the thumb. By default, the Slider has a unique class `e-handle` for the Slider thumb. You can override this class as per your requirement. In the sample, the Slider thumb has been customized to square, circle, and oval shapes, and its background image has also been customized.

```ts
.e-control.e-slider .e-handle {
    background-image: url('https://ej2.syncfusion.com/demos/src/slider/images/thumb.png');
    background-color: transparent;
    height: 25px;
    width: 25px;
}
#square_slider.e-control.e-slider .e-handle {
    border-radius: 0%;
    background-color: #f9920b;
    border: 0;
}
#circle_slider.e-control.e-slider .e-handle {
    border-radius: 50%;
    background-color: #f9920b;
    border: 0;
}
#oval_slider.e-control.e-slider .e-handle {
    height: 25px;
    width: 8px;
    top: 3px;
    border-radius: 15px;
    background-color: #f9920b;
}
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/range-slider/thumb-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/range-slider/thumb-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/thumb-cs1" %}