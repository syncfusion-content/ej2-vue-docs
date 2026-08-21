---
layout: post
title: Animation in Vue Dropdown Button | Syncfusion
description: Apply SlideDown, ZoomIn, FadeIn, or no effect to the Vue Dropdown Button popup using the animationSettings API property.
control: Animation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Animation in Vue Dropdown Button

The [`animationSettings`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#animationsettings) property is used to customize the animation of the DropDownButton popup. The supported effects for DropDownButton are,

| Effect | Functionality |
| ------------ | ----------------------- |
| None | Specifies the Dropdown popup transform with no animation effect. |
| SlideDown | Specifies the Dropdown popup transform with slide down effect. |
| ZoomIn | Specifies the Dropdown popup transform with zoom in effect. |
| FadeIn | Specifies the Dropdown popup transform with fade in effect. |

In this sample, three different DropDownButtons are rendered, each showcasing a unique animation effect for the dropdown menu:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/animation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/animation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/animation-cs1" %}