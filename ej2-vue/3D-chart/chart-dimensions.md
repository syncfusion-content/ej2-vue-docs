---
layout: post
title: Dimensions in Vue 3D Chart component | Syncfusion
description: Learn here all about dimensions in Syncfusion 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Dimensions in Vue 3D Chart component

## Size for container

The 3D chart can be rendered to its container size and it can be set via inline or CSS as demonstrated below.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
      <ejs-chart3d id="container" style="width:650px; height:350px;"> </ejs-chart3d>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/types/column6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/types/column6" %}

<!-- markdownlint-disable MD036 -->

## Size for chart

<!-- markdownlint-disable MD036 -->

The size of the 3D chart can be set directly through [`width`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#width) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#height) properties.

**In Pixel**

The size of the 3D chart can be set in pixel as demonstrated below.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/types/column7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/types/column7" %}

**In Percentage**

By setting the value in percentage, 3D chart gets its dimension with respect to its container. For example, when the height is **50%**, chart renders to half of the container height.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/types/column8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/types/column8" %}

>Note: When you do not specify the size, it takes `450px` as the height and window size as its width.