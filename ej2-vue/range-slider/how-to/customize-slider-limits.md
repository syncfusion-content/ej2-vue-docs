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

Slider appearance can be customized via CSS. By overriding the slider CSS classes, the slider limit bar can be customized. Here, the limit bar is customized with different background color. By default, the slider has class `e-limits` for limits bar. You can override the class with our own color values as given in the following code snippet.

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