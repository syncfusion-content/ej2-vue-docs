---
layout: post
title: Set custom animation in Vue Tab component | Syncfusion
description: Learn here all about Set custom animation in Syncfusion Vue Tab component of Syncfusion Essential JS 2 and more.
control: Set custom animation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Set custom animation in Vue Tab component

Tab supports custom animations for both previous and next actions from the provided animation option of `Animation` library.

The [`animation`](https://ej2.syncfusion.com/vue/documentation/api/tab/#animation) property also allows you to set [`easing`](https://ej2.syncfusion.com/vue/documentation/api/tab/tabActionSettings/#easing), [`duration`](https://ej2.syncfusion.com/vue/documentation/api/tab/tabActionSettings/#duration), and various other [`effects`](https://ej2.syncfusion.com/vue/documentation/api/tab/tabActionSettings/#effect).

Default animation is given as `SlideLeftIn` for [`previous`](https://ej2.syncfusion.com/vue/documentation/api/tab/tabAnimationSettings/#previous) tab animation and `SlideRightIn` for [`next`](https://ej2.syncfusion.com/vue/documentation/api/tab/tabAnimationSettings/#next) tab animation. You can also disable the animation by setting the animation effect as `None`. Also, please use the following CSS to disable indicator animation for animation effect as `None`.

```css

.e-tab .e-tab-header:not(.e-vertical) .e-indicator, .e-tab .e-tab-header.e-vertical .e-indicator {
    transition: none;
}

```

The sample demonstrates some types of animation that suits Tab. You can check all the animation effects here.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/custom-animation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/custom-animation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/how-to/custom-animation-cs1" %}