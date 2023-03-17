---
layout: post
title: Dimensions in Vue Heatmap chart component | Syncfusion
description: Learn here all about Dimensions in Syncfusion Vue Heatmap chart component of Syncfusion Essential JS 2 and more.
control: Dimensions 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Dimensions in Vue Heatmap chart component

## Size for container

Heat map can be rendered to its container size. You can set the size through inline or CSS.

```javascript
    <div id='container'>
        <div id='element' style="width:650px; height:350px;"></div>
    </div>
```

## Size for heat map

You can  set the size of heat map directly by using the [width](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#width) and [height](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#height) properties.

## In pixel

You can set the size for heat map in a pixel.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/dimensions-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/dimensions-cs1" %}

## In percentage

By setting value in percentage, heat map gets its dimension with respect to its container. For example, when the height is ‘50%’, heat map rendered to half of the container height.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/dimensions-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/dimensions-cs2" %}