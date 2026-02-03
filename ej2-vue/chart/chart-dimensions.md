---
layout: post
title: Chart dimensions in Vue Chart component | Syncfusion
description: Learn here all about Chart dimensions in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Chart dimensions 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Chart dimensions in Vue Chart component

## Size for Container

The chart can render to its container size. Set the size via inline styles or CSS as shown below.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/getting-started/datasource-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/getting-started/datasource-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/getting-started/datasource-cs1" %}

## Size for Chart

Set the chart size directly using the [`width`](https://ej2.syncfusion.com/vue/documentation/api/chart/chartModel#width) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/chart/chartModel#height) properties.

<!-- markdownlint-disable MD036 -->
* In Pixel
<!-- markdownlint-disable MD036 -->

You can set the size of chart in pixel as demonstrated below.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/getting-started/datasource-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/getting-started/datasource-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/getting-started/datasource-cs2" %}

* In Percentage

When percentage values are used, the chart dimensions are relative to the container. For example, a height of `50%` renders the chart to half the container height.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/getting-started/datasource-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/getting-started/datasource-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/getting-started/datasource-cs3" %}

> Note: When no size is specified, the chart defaults to a height of `450px` and uses the window width.