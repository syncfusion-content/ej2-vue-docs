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

Chart can render to its container size. You can set the size via inline or CSS as demonstrated below.

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

You can also set size for chart directly through [`width`](https://ej2.syncfusion.com/vue/documentation/api/chart/chartModel/#width) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/chart/chartModel/#height) properties.

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

By setting value in percentage, chart gets its dimension with respect to its container. For example, when the height is ‘50%’, chart renders to half of the container height.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/getting-started/datasource-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/getting-started/datasource-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/getting-started/datasource-cs3" %}

> Note:  When you do not specify the size, it takes `450px` as the height and window size as its width.