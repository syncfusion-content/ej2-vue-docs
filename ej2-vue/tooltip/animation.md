---
layout: post
title: Animation in Vue Tooltip component | Syncfusion
description: Learn here all about Animation in Syncfusion Vue Tooltip component of Syncfusion Essential JS 2 and more.
control: Animation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Animation in Vue Tooltip component

To animate the Tooltip, a set of specific animation effects are available, and it can be controlled using the `animation` property.The animation property also allows you to set delay, duration, and various other effects of your choice.

[`AnimationModel`](https://ej2.syncfusion.com/vue/documentation/api/tooltip/animationModel/) is derived from base to apply the chosen animation effect, duration, etc. on Tooltips.

By default, Tooltip entrance occurs over 150 ms using the `ease-out` timing function. It exits also at 150 ms, but uses `ease-in` timing function.

The default animation effect for the Tooltip is set to `FadeIn` for its open action, and `FadeOut` for its close action. The default `duration` is set to 150 ms and `delay` is set to 0.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/animation/default-animation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/animation/default-animation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/animation/default-animation-cs1" %}

## Animation effects

The animation effects that are applicable to Tooltips are:

* FadeIn
* FadeOut
* FadeZoomIn
* FadeZoomOut
* FlipXDownIn
* FlipXDownOut
* FlipXUpIn
* FlipXUpOut
* FlipYLeftIn
* FlipYLeftOut
* FlipYRightIn
* FlipYRightOut
* ZoomIn
* ZoomOut
* None

When the `effect` is specified as `none`, no effect will be applied to the Tooltip, and animation is considered to be set to `off`.

> Some of the above animation effects suits the Tooltip better when its tip pointer is hidden.
> This can be achieved by setting the `showTipPointer` to false.

## Animating via open/close methods

Animations can also be applied on Tooltips dynamically through `open` and `close` methods. These methods accept the animation model as an
 optional parameter. If you pass `TooltipAnimationSettings`, animation takes this model; otherwise, it takes the values from the
  `animation` property. It is also possible to pass different animations for Tooltips on each target.

Refer to the code snippet below to apply animations using public methods.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/animation/animation-effects-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/animation/animation-effects-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/animation/animation-effects-cs1" %}

## Apply transition

The transition effect can be applied on Tooltips by using the `beforeRender` event as given in the following work-around code example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/animation/transition-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/animation/transition-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/animation/transition-cs1" %}