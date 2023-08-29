---
layout: post
title: Precision modes in Vue Rating component | Syncfusion
description: Learn here all about Precision modes in Syncfusion Vue Rating component of Syncfusion Essential JS 2 and more.
control: Precision modes 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Precision modes in Vue Rating component

You can use the [`precision`](https://ej2.syncfusion.com/vue/documentation/api/rating/#precision) property of the rating component to provide ratings with varying levels of precision.

The precision types of Rating are as follows:

* Full: The rating is increased in whole number increments. For example, if the current rating is 2, the next possible ratings are 3, 4, and so on.
* Half: The rating is increased in increments of 0.5 (half). For example, if the current rating is 2.5, the next possible ratings are 3, 3.5, 4, and so on.
* Quarter: The rating is increased in increments of 0.25 (quarter). For example, if the current rating is 3.75, the next possible ratings are 4, 4.25, 4.5, and so on.
* Exact: The rating is increased in increments of 0.1. For example, if the current rating is 3.9, the next possible ratings are 4, 4.1, 4.2, and so on.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rating/events-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rating/events-cs2" %}
