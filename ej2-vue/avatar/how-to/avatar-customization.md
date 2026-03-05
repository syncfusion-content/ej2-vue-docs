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

The avatar defaults to a Grey background. This can be easily customized to desired color by adding custom class or directly selecting the avatar class from the CSS.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/avatar/color-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/avatar/color-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/avatar/color-cs1" %}

## Customize avatar sizes

If the five predefined sizes are insufficient, change the `font-size` of the avatar element — width and height scale relative to the element's `font-size`, so increasing font-size enlarges the avatar proportionally.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/avatar/custom-size-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/avatar/custom-size-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/avatar/custom-size-cs1" %}

### Use various media in avatar

Avatars support a wide variety of media formats such as SVGs, font-icons, images, letters, and words, etc. Some of them are given below.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/avatar/media-formats-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/avatar/media-formats-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/avatar/media-formats-cs1" %}