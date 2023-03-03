---
layout: post
title: Appearance in Vue Accumulation chart component | Syncfusion
description: Learn here all about Appearance in Syncfusion Vue Accumulation chart component of Syncfusion Essential JS 2 and more.
control: Appearance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Vue Accumulation chart component

## Custom Color Palette

You can customize the default color of series or points by providing a custom color palette of your choice by
using the [`palettes`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeries/#palettes) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/pie-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs5" %}

## Animation

### Fluid Animation

Fluid animation used to animate series with updated dataSource continues animation rather than animation whole series. You can customize animation for a particular series using [`animate`] method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/pie-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs6" %}