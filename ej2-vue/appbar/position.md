---
layout: post
title: Position in Vue Appbar component | Syncfusion
description: Learn here all about Position in Syncfusion Vue Appbar component of Syncfusion Essential JS 2 and more.
control: Position 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Position in Vue Appbar component

The position of the AppBar can be set using the [position](https://ej2.syncfusion.com/vue/documentation/api/appbar#position) and [isSticky](https://ej2.syncfusion.com/vue/documentation/api/appbar#issticky) property. The AppBar provides the following options for setting its position:

* Top AppBar
* Bottom AppBar
* Sticky AppBar

## Top AppBar

The top AppBar is the default one in which it positions the AppBar at the top of the content.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/appbar/getting-started-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/appbar/getting-started-cs6" %}

## Bottom AppBar

This position can be set to the AppBar by setting `Bottom` to the property [position](https://ej2.syncfusion.com/vue/documentation/api/appbar#position). The bottom AppBar positions the AppBar at the bottom of the content.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/appbar/getting-started-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/appbar/getting-started-cs7" %}

## Sticky AppBar

This position can be set to the AppBar by setting `true` to the property [isSticky](https://ej2.syncfusion.com/vue/documentation/api/appbar#issticky). AppBar will be sticky while scrolling the AppBar content.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/appbar/getting-started-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/appbar/getting-started-cs8" %}
