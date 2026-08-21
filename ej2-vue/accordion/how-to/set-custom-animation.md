---
layout: post
title: How to set custom animation in Vue Accordion | Syncfusion
description: Replace the default slide animations on Vue Accordion expand and collapse with custom effects from the Animation library, or disable them.
control: Set custom animation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to set custom animation in Vue Accordion

Accordion supports custom animations for both expand and collapse actions from the provided animation option of `Animation` library.

Default animation is given as `SlideDown` for expanding the panel and `SlideUp` for collapsing the panel. You can also disable the animation by setting animation effect as `none`.

The sample demonstrates some types of animation that suits for Accordion. You can check all the animation effects here.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/accordion/how-to/accordion-custom-animation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/accordion/how-to/accordion-custom-animation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/how-to/accordion-custom-animation-cs1" %}