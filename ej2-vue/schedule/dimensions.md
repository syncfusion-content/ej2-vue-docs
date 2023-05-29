---
layout: post
title: Dimensions in Vue Schedule component | Syncfusion
description: Learn here all about Dimensions in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Dimensions 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Dimensions in Vue Schedule component

The Scheduler dimensions refers to both height and width of the entire layout and it accepts 3 types of values.

* auto
* pixel
* percentage

## Auto Height and Width

When height and width of the Scheduler are set to `auto`, it will try as hard as possible to keep an element the same width as its parent container. In other words, the parent container that holds Scheduler, it's width/height will be the sum of its children. By default, Scheduler is assigned with `auto` values for both height and width properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/schedule/dimension-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/dimension-cs1" %}

## Height and Width in pixel

The Scheduler height and width will be rendered exactly as per the given pixel values. It accepts both string and number values.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/schedule/dimension-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/dimension-cs2" %}

## Height and Width in percentage

When height and width of the Scheduler are given as percentage, it will make the Scheduler as wide as the parent container.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/schedule/dimension-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/dimension-cs3" %}

> You can refer to our [Vue Scheduler](https://www.syncfusion.com/vue-ui-components/vue-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/material/schedule/overview.html) to knows how to present and manipulate data.

## See Also

* [How to Change Scheduler Cell Dimensions](./cell-customization/#setting-cell-dimensions-in-all-views)