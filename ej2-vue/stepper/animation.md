---
layout: post
title: Animation in Vue Stepper component | Syncfusion
description: Checkout and learn about Animation with Vue Stepper component of Syncfusion Essential JS 2 and more.
control: Stepper 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Animation in Vue Stepper component

The Stepper progress state can be animated, smoothly transitioning from one step to another. You can customize the animation's `duration` and `delay` by using the [animation](https://ej2.syncfusion.com/vue/documentation/api/stepper/stepperModel/#animation) property.

You can disable the animation by setting the [enable](https://ej2.syncfusion.com/vue/documentation/api/stepper/animation/#enable) property to `false`. By default, the value is `true`.

| Fields | Type | Description |
|------|------|-------------|
| [duration](https://ej2.syncfusion.com/vue/documentation/api/stepper/animation/#duration) | `number` | Specifies the duration of the animated transition for each step. The default value is `2000` milliseconds. |
| [delay](https://ej2.syncfusion.com/vue/documentation/api/stepper/animation/#delay) | `number` | Specifies the delay to initiate the animated transition for each step in milliseconds. The default value is `0`. |

The example demonstrates the animation `duration` and `delay` settings for the Stepper.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stepper/animation/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/animation" %}
