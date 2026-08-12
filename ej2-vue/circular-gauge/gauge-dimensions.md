---
layout: post
title: Gauge Dimensions in Vue Circular Gauge | Syncfusion
description: Learn how to set the width and height of the Vue Circular Gauge using pixel or percentage values to fit its container.
control: Gauge Dimensions
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Gauge Dimensions in Vue Circular Gauge

## Size for Container

Circular gauge can render to its container size. You can set the size via inline or CSS as demonstrated below.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs28/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs28/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs28" %}

## Size for Circular Gauge

<!-- markdownlint-disable MD036 -->

You can also set size for the gauge directly through [`width`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge#width-string) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge#height-string) properties.

### In Pixel

You can set the size of the gauge in pixel as demonstrated below.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs29/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs29/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs29" %}

### In Percentage

By setting value in percentage, gauge gets its dimension with respect to its container. For example, when
the height is ‘50%’, gauge renders to half of the container height.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs30/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs30/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs30" %}

>Note: When you do not specify the size, it takes `450px` as the height and window size as its width.