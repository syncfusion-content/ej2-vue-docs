---
layout: post
title: Animation in Vue Predefined Dialogs | Syncfusion
description: Animate Vue Predefined Dialogs open and close actions by configuring delay, duration, and effect through the animationSettings property for smooth transitions.
control: Animation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Animation in Vue Predefined Dialogs

The predefined dialogs can be animated during the open and close actions. Also, user can customize animation's `delay`, `duration` and `effect` of animation by using the [animationSettings](https://ej2.syncfusion.com/documentation/api/dialog#animationsettings) property.

In the below sample, `Zoom` effect is enabled. So, The Dialog will open with `ZoomIn` and close with `ZoomOut` effects.

## Alert animation

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/alert-animation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/alert-animation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/alert-animation-cs1" %}

## Confirm animation

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/confirm-animation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/confirm-animation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/confirm-animation-cs1" %}

## Prompt animation

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/prompt-animation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/prompt-animation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/prompt-animation-cs1" %}