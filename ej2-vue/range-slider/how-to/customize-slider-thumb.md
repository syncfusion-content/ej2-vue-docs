---
layout: post
title: Customize slider thumb in Vue Range slider component | Syncfusion
description: Learn here all about Customize slider thumb in Syncfusion Vue Range slider component of Syncfusion Essential JS 2 and more.
control: Customize slider thumb 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize slider thumb in Vue Range slider component

The slider's appearance can be customized through CSS. By overriding the slider's CSS classes, you can customize the thumb. By default, the slider has a unique class `e-handle` for the slider thumb. You can override this class as per your requirement. In the sample, the slider thumb has been customized to square, circle, and oval shapes, and its background image has also been customized.

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