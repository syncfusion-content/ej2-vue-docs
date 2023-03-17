---
layout: post
title: Rendering mode in Vue Heatmap chart component | Syncfusion
description: Learn here all about Rendering mode in Syncfusion Vue Heatmap chart component of Syncfusion Essential JS 2 and more.
control: Rendering mode 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Rendering mode in Vue Heatmap chart component

Heat map can be displayed using **Canvas** or **Scalable Vector Graphics (SVG)** rendering logic to improve the initial load performance and scalability. Heat map can also be automatically switched between **Canvas** and **SVG** modes based on dataset size. You can enable this mode by setting the [renderingMode](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#renderingmode) property to **Auto**.

> If the **Auto** mode is enabled in the heat map and there are more than 10,000 data points, then the heat map will be rendered in a **Canvas** mode; Otherwise, the heat map will be rendered in a **SVG** mode.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/rendering-mode-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/rendering-mode-cs1" %}