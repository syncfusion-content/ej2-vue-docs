---
layout: post
title: How to set custom animation in Vue Tabs | Syncfusion
description: Apply custom animation effects to Vue Tabs content transitions using the animation property with duration and easing options per tab switch.
control: Set custom animation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to set custom animation in Vue Tabs

Tab supports custom animations for both previous and next actions from the provided animation option of the `Animation` library.

The [animation](https://ej2.syncfusion.com/vue/documentation/api/tab#animation) property also allows you to set [easing](https://ej2.syncfusion.com/vue/documentation/api/tab/tabActionSettings#easing), [duration](https://ej2.syncfusion.com/vue/documentation/api/tab/tabActionSettings#duration), and various other [effects](https://ej2.syncfusion.com/vue/documentation/api/tab/tabActionSettings#effect).

The default animation is `SlideLeftIn` for the [previous](https://ej2.syncfusion.com/vue/documentation/api/tab/tabAnimationSettings#previous) tab animation and `SlideRightIn` for the [next](https://ej2.syncfusion.com/vue/documentation/api/tab/tabAnimationSettings#next) tab animation. You can also disable the animation by setting the animation effect to `None`. Use the following CSS to disable the indicator animation when the animation effect is `None`.

```css

.e-tab .e-tab-header:not(.e-vertical) .e-indicator, .e-tab .e-tab-header.e-vertical .e-indicator {
    transition: none;
}

```

The sample demonstrates some types of animation that suit the Tab. You can check all the animation effects here.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/custom-animation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/custom-animation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/how-to/custom-animation-cs1" %}