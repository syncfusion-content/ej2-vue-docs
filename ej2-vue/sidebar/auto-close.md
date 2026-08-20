---
layout: post
title: Auto Close in Vue Sidebar | Syncfusion
description: Control Vue Sidebar open or closed state at specific screen resolutions using the mediaQuery property to auto-close on mobile or desktop displays.
control: Auto close 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Auto Close in Vue Sidebar

The Sidebar often behaves differently on mobile displays compared to desktop displays. It has an effective feature that allows you to set it in an opened or closed state depending on the specified resolution. This is achieved through [mediaQuery](https://ej2.syncfusion.com/vue/documentation/api/sidebar/#mediaquery) property that allows you to set the Sidebar in an expanded state or collapsed state only in user-defined resolution.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sidebar/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sidebar/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/getting-started-cs1" %}

## Open close

* In the following sample, the Sidebar will be in an expanded state only in resolution below `400px`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sidebar/getting-started-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sidebar/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/getting-started-cs2" %}