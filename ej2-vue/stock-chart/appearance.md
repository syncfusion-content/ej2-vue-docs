---
layout: post
title: Appearance in Vue Stock chart component | Syncfusion
description: Learn here all about Appearance in Syncfusion Vue Stock chart component of Syncfusion Essential JS 2 and more.
control: Appearance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Vue Stock chart component

## Stock Chart Title

Chart can be given a title using [`title`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/#title-string) property, to show the information about the data plotted.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stockchart/appearance-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stockchart/appearance-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/appearance-cs1" %}

## Title Customization

The `textStyle` property of chart title provides options to customize the `size`, `color`, `fontFamily`, `fontWeight`, `fontStyle`, `opacity`, `textAlignment` and `textOverflow`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stockchart/appearance-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stockchart/appearance-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/appearance-cs2" %}

## Stock Chart Theme

Changing theme will affect background color,gridlines,tooltip colors and appearance.

[`theme`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartModel/#theme) property of Stock chart is shipped with several built-in themes such as `Material`, `Fabric`, `Bootstrap` , `HighContrastLight`, `MaterialDark`, `FabricDark`, `FabricDark`, `HighContrast` and `BootstrapDark`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stockchart/appearance-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stockchart/appearance-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/appearance-cs3" %}

## See Also

* [Axis Customization](./axis-customization/)