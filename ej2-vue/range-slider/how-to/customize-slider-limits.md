---
layout: post
title: Customize slider limits in Vue Range slider component | Syncfusion
description: Learn here all about Customize slider limits in Syncfusion Vue Range slider component of Syncfusion Essential JS 2 and more.
control: Customize slider limits 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize slider limits in Vue Range slider component

The slider's appearance can be customized via CSS. By overriding the slider's CSS classes, the slider limit bar can be customized. Here, the limit bar is customized with a different background color. By default, the slider has a class `e-limits` for the limits bar. You can override this class with your own color values as shown in the following code snippet:

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