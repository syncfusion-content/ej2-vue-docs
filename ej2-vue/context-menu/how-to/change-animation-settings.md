---
layout: post
title: Change animation settings in Vue Context menu component | Syncfusion
description: Learn here all about Change animation settings in Syncfusion Vue Context menu component of Syncfusion Essential JS 2 and more.
control: Change animation settings 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Change animation settings in Vue Context menu component

To change the animation of the ContextMenu, [`animationSettings`](https://ej2.syncfusion.com/vue/documentation/api/context-menu/menuAnimationSettingsModel/) property
is used. The supported effects for ContextMenu are,

| Effect | Functionality |
| ------------ | ---------------------- |
| None | Specifies the sub menu transform with no animation effect. |
| SlideDown | Specifies the sub menu transform with slide down effect. |
| ZoomIn | Specifies the sub menu transform with zoom in effect. |
| FadeIn | Specifies the sub menu transform with fade in effect. |

The following sample illustrates how to open ContextMenu with `FadeIn` effect with the `duration` of `800ms`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/context-menu/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/default-cs4" %}
