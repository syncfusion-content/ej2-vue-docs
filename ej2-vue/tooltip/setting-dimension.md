---
layout: post
title: Setting dimension in Vue Tooltip component | Syncfusion
description: Learn here all about Setting dimension in Syncfusion Vue Tooltip component of Syncfusion Essential JS 2 and more.
control: Setting dimension 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Setting dimension in Vue Tooltip component

## Height and width

The Tooltip can either be assigned Auto height and width values or specific pixel values. The [`width`](https://ej2.syncfusion.com/vue/documentation/api/tooltip#width) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/tooltip#height) properties are used to set the outer dimension of the Tooltip element. The default value for both the properties is `auto`. It also accepts string and number values in pixels.

The following sample explains how to set dimensions for the Tooltip.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/dimensions/height-width-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/dimensions/height-width-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/dimensions/height-width-cs1" %}

## Scroll mode

When [`height`](https://ej2.syncfusion.com/vue/documentation/api/tooltip#height) is specified with a certain pixel value and the Tooltip content overflows, the scrolling mode is enabled.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/dimensions/scroll-mode-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/dimensions/scroll-mode-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/dimensions/scroll-mode-cs1" %}

> The scrolling mode is best observed when the sticky mode of the Tooltip is enabled. To enable sticky mode, set the [`isSticky`](https://ej2.syncfusion.com/vue/documentation/api/tooltip#issticky) property to true.