---
layout: post
title: Avatar customization in Vue Avatar component | Syncfusion
description: Learn here all about Avatar customization in Syncfusion Vue Avatar component of Syncfusion Essential JS 2 and more.
control: Avatar customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Avatar customization in Vue Avatar component

## Color customization

The avatar comes with default background color (grey). This can be easily customized to desired color by adding custom class or directly selecting the avatar class from the CSS.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/avatar/color-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/avatar/color-cs1" %}

## Customize avatar sizes

Even though the avatar comes with five predefined sizes, sometimes it's not enough. So, the avatar is designed in such a way that the width and height will be relative to font-size. By changing the `font-size` of the avatar element, you can change the width and height automatically.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/avatar/custom-size-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/avatar/custom-size-cs1" %}

### Use various media in avatar

Avatars can be used with a wide variety of media formats like SVG, font-icons, images, letters, words, etc. Some of them are given below.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/avatar/media-formats-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/avatar/media-formats-cs1" %}
