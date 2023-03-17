---
layout: post
title: Auto close in Vue Sidebar component | Syncfusion
description: Learn here all about Auto close in Syncfusion Vue Sidebar component of Syncfusion Essential JS 2 and more.
control: Auto close 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Auto close in Vue Sidebar component

The Sidebar often behaves differently on mobile display and differently on desktop display. It has an effective feature that offers to set it in opened or closed state depending on the specified resolution. This is achieved through [mediaQuery](https://ej2.syncfusion.com/vue/documentation/api/sidebar#mediaquery) property that allows you to set the Sidebar in an expanded state or collapsed state only in user-defined resolution.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/sidebar/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/getting-started-cs1" %}

## Open close

* In the following sample,the Sidebar will be in an expanded state only in resolution below `400px`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/sidebar/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/getting-started-cs2" %}