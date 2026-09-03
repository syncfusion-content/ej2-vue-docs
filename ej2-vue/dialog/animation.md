---
layout: post
title: Animation in Vue Dialog | Syncfusion
description: Animate Vue Dialog open and close actions with delay, duration, and effects like Fade, Zoom, Slide, and Flip for smooth transitions.
control: Animation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Animation in Vue Dialog

The Dialog can be animated during the open and close actions. The user can also customize the animation's `delay`, `duration`, and `effect`.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>delay</b></td><td>
The Dialog animation will start with the mentioned delay.</td></tr>
<tr>
<td>
<b>duration</b></td><td>
Specifies the duration for the animation to complete one cycle.</td></tr>
<tr>
<td>
<b>effect</b></td><td>
Specifies the animation effect for Dialog open and close actions.
<br /><br />
List of supported animation effects:
<br />
'Fade' | 'FadeZoom' | 'FlipLeftDown' | 'FlipLeftUp' | 'FlipRightDown' | 'FlipRightUp' | 'FlipXDown' |
'FlipXUp' | 'FlipYLeft' | 'FlipYRight' | 'SlideBottom' | 'SlideLeft' | 'SlideRight' | 'SlideTop' |
'Zoom' | 'None'
<br /><br />
If the user sets 'Fade' effect, then the Dialog will open with 'FadeIn' effect and close with 'FadeOut' effect.
</td></tr>
</table>

In the below sample, `Zoom` effect is enabled. So, the Dialog will open with `ZoomIn`
and close with `ZoomOut` effects.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dialog/animation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dialog/animation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/animation-cs1" %}