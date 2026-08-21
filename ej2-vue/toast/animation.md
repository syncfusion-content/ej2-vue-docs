---
layout: post
title: Animation in Vue Toaster | Syncfusion
description: Apply custom show and hide animations to the Vue Toaster using the animation library for smooth transitions.
control: Animation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Animation in Vue Toaster

The toast component supports custom animations for both shows and hide actions from the provided animation option of the `Animation` library.

The default animation is given as `FadeIn` for showing the toast and `FadeOut` for hiding the toast.

The following sample demonstrates some types of animations that suit toast. You can check all the animation effects here.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toast/animations-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toast/animations-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/animations-cs1" %}