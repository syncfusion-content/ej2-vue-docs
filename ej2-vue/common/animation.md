---
layout: post
title: Animation in Vue Common control | Syncfusion
description: Learn here all about Animation in Syncfusion Vue Common control of Syncfusion Essential JS 2 and more.
control: common
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Animation in Vue

Animation provides visual effects on HTML elements by running a sequence of frames. It enhances user experience by making interactions feel more natural.

Syncfusion<sup style="font-size:70%">&reg;</sup> [Animation](https://ej2.syncfusion.com/documentation/api/base/animation/) library supports animating the HTML elements using the [animate](https://ej2.syncfusion.com/documentation/api/base/animation/#animate) method. This method temporarily adds attributes and inline styles (for example, `e-animate` and `e-animation-id`) to the target element while the animation runs, and removes them when the animation completes.


## Animation effects

An animation effect refers to the visual change that occurs over a period of time in HTML elements. The [Animation](https://ej2.syncfusion.com/documentation/api/base/animation/) library supports different types of animation [effects](https://ej2.syncfusion.com/documentation/api/base/effect/#effect). The [name](https://ej2.syncfusion.com/documentation/api/base/animation/#name) property is used to specify the animation effect of an animation.

Example (FadeOut and ZoomOut) — Composition API and Options API examples are included in the code samples referenced below:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/common/animation-multiple-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/common/animation-multiple-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/animation-multiple-cs4" %}

## Animation duration

Animation [duration](https://ej2.syncfusion.com/documentation/api/base/animation/#duration) is the animation property that specifies the length of time that an animation should take to complete. The animation duration is specified in milliseconds (ms) and determines the total amount of time that an animation should run.

For example, if an animation has a duration of 2 seconds, it will take 2 seconds to complete from start to finish. The duration of an animation affects the overall pace of the animation and can be adjusted to match the desired speed and style of the animation.

The value of the animation duration can be adjusted to change the speed of the animation, with shorter durations resulting in faster animations and longer durations resulting in slower animations.

Here is an example code snippet using the animation effects with a duration of `5000` milliseconds:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/common/animation-multiple1-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/common/animation-multiple1-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/animation-multiple1-cs1" %}

## Animation delay

The animation [delay](https://ej2.syncfusion.com/documentation/api/base/animation/#delay) is the animation property that specifies the amount of time to wait before starting an animation. The animation delay is specified in milliseconds (ms) and determines the amount of time that should elapse before an animation begins.

For example, if an animation has a delay of 2 seconds, it will wait for 2 seconds before starting. This can be useful in creating more complex animations, where multiple elements are animated in sequence, or in creating animations that start only after a user interaction has taken place.

Here is an example code snippet using the animation effects with a delay of `2000` milliseconds:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/common/animation-multiple2-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/common/animation-multiple2-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/animation-multiple2-cs1" %}

## Enable or disable animation globally

Enable or disable animation for all Vue components globally by using the `setGlobalAnimation` method with one of the below options:

Options:
* `GlobalAnimationMode.Enable` — enable animations globally
* `GlobalAnimationMode.Disable` — disable animations globally
* `GlobalAnimationMode.Default` — use each component's own animation setting

In the below code snippet, animation is disabled.

{% tabs %}
{% highlight js tabtitle="~/src/main.js" %}

import { GlobalAnimationMode, setGlobalAnimation } from "@syncfusion/ej2-base";

setGlobalAnimation(GlobalAnimationMode.Disable);

{% endhighlight %}
{% endtabs %}

> `setGlobalAnimation` method controls script-level animations only, and it is not applicable for direct CSS-level animations (animations defined from CSS classes or properties).