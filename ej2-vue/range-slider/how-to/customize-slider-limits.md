---
layout: post
title: How to customize the Slider limits in Vue Range Slider | Syncfusion
description: Restyle the Syncfusion Vue Range Slider limits bar by overriding the e-limits CSS class with your own background color.
control: Customize Slider limits 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to customize the Slider limits in Vue Range Slider

The Slider's appearance can be customized via CSS. By overriding the Slider's CSS classes, the Slider limit bar can be customized. Here, the limit bar is customized with a different background color. By default, the Slider has a class `e-limits` for the limits bar. You can override this class with your own color values as shown in the following code snippet:

```
.e-slider-container.e-horizontal .e-limits {
     background-color: rgba(69, 100, 233, 0.46);
}
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/range-slider/limits-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/range-slider/limits-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/limits-cs1" %}