---
layout: post
title: Chart dimensions in Vue Stock chart component | Syncfusion
description: Learn here all about Chart dimensions in Syncfusion Vue Stock chart component of Syncfusion Essential JS 2 and more.
control: Chart dimensions 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Chart dimensions in Vue Stock chart component

## Size for Container

Stock Chart can render to its container size. You can set the size via inline or CSS as demonstrated below.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stockchart/chart-dimensions-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/chart-dimensions-cs1" %}

## Size for Stock Chart

You can also set size for stock chart directly through [`width`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/#width) and
[`height`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/#height) properties.
<!-- markdownlint-disable MD036 -->
* In Pixel
<!-- markdownlint-disable MD036 -->

You can set the size of stock chart in pixel as demonstrated below.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stockchart/chart-dimensions-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/chart-dimensions-cs2" %}

**In Percentage**

By setting value in percentage, stock chart gets its dimension with respect to its container. For example,
when the height is ‘50%’, stock chart renders to half of the container height.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stockchart/chart-dimensions-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/chart-dimensions-cs3" %}

> Note:  When you do not specify the size, it takes `450px` as the height and window size as its width.