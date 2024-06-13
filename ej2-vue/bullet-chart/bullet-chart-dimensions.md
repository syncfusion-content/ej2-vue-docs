---
layout: post
title: Bullet chart dimensions in Vue Bullet chart component | Syncfusion
description: Learn here all about Bullet chart dimensions in Syncfusion Vue Bullet chart component of Syncfusion Essential JS 2 and more.
control: Bullet chart dimensions 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Bullet chart dimensions in Vue Bullet chart component

## Size for Container

The size of the Bullet Chart is determined by the container size, and it can be changed inline or via CSS as following.

```
<style>
  #bulletChart {
     width: 350px;
 }
</style>
<template>
  <div>
      <ejs-bulletchart id="bulletChart"> </ejs-bulletchart>
  </div>
</template>
<script setup>

import { BulletChartComponent } from '@syncfusion/ej2-vue-charts';


export default {
       data() { /*
        */
       }
}
</script>
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/bullet-chart/bullet-chart-dimensions/container-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/bullet-chart/bullet-chart-dimensions/container-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/bullet-chart-dimensions/container-cs1" %}

## Size for Bullet Chart

The [`width`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#width) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#height) properties are used to adjust the size of the Bullet Chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/bullet-chart/bullet-chart-dimensions/container-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/bullet-chart/bullet-chart-dimensions/container-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/bullet-chart-dimensions/container-cs2" %}

### Pixel

Can set the size of the Bullet Chart in pixels as shown below.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/bullet-chart/bullet-chart-dimensions/container-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/bullet-chart/bullet-chart-dimensions/container-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/bullet-chart-dimensions/container-cs3" %}

### Percentage

By setting a value in percentage, the Bullet Chart gets its dimension with respect to its container. For example, when the height is **50%**, the Bullet Chart renders to half of the container’s height.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/bullet-chart/bullet-chart-dimensions/container-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/bullet-chart/bullet-chart-dimensions/container-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/bullet-chart-dimensions/container-cs4" %}

>If the size is not specified, the Bullet Chart will be rendered with a height of **126px** and a width of the window.