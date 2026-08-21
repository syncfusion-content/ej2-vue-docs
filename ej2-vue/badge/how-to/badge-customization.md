---
layout: post
title: How to customize in Vue Badge | Syncfusion
description: Customize Vue Badge color beyond the 8 predefined colors, adjust badge size via font size, and change the badge position with custom classes.
control: Badge customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to customize in Vue Badge

## Color customization

Even though badges come with `8 predefined colors`, you can also customize the color of the Badge as desired.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/badge/color-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/badge/color-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/color-cs1" %}

## Customize Badge size

Badges are designed to change its size based on the content. To change the size of a badge, adjust the `font size` of the badge.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/badge/size-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/badge/size-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/size-cs1" %}

## Custom position

Even though the badges support the conventional `top` and `bottom` positions, the position of the badges can be changed as desired. This can be done by adding a custom class to the Badge element to override the default position applied from the source.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/badge/custom-position-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/badge/custom-position-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/custom-position-cs1" %}