---
layout: post
title: Alignment in Vue Timeline component | Syncfusion
description: Learn here all about Alignment in Syncfusion Vue Timeline component of Syncfusion Essential JS 2 and more.
control: Alignment 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Alignment in Vue Timeline component

You can display the Timeline content `Before`, `After`, `Alternate` and `AlternateReverse` by using the [align](https://ej2.syncfusion.com/vue/documentation/api/timeline#align) property. The oppositeContent will be displayed parallel to the content when configured.

## Before

In [Before](https://ej2.syncfusion.com/vue/documentation/api/timeline/timelineAlign/) alignment, for `horizontal` orientation the item content is placed at the top and oppositeContent at the bottom whereas in `vertical`, the content to the left and oppositeContent to the right.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/timeline/align-before/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/align-before" %}

## After

In [After](https://ej2.syncfusion.com/vue/documentation/api/timeline/timelineAlign/) alignment, for `horizontal` orientation the item content is placed at the bottom and oppositeContent at the top whereas in `vertical`, the content to the right and oppositeContent to the left.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/timeline/align-after/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/align-after" %}

## Alternate

In [Alternate](https://ej2.syncfusion.com/vue/documentation/api/timeline/timelineAlign/) alignment, the item content are arranged alternatively regardless of the Timeline orientation.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/timeline/align-alternate/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/align-alternate" %}

## Alternate reverse

In [AlternateReverse](https://ej2.syncfusion.com/vue/documentation/api/timeline/timelineAlign/) alignment, the item content are arranged in reverse alternate regardless of the Timeline orientation.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/timeline/align-alternate-reverse/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/align-alternate-reverse" %}
