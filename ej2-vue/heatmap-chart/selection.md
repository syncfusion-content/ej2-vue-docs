---
layout: post
title: Selection in Vue Heatmap chart component | Syncfusion
description: Learn here all about Selection in Syncfusion Vue Heatmap chart component of Syncfusion Essential JS 2 and more.
control: Selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Selection in Vue Heatmap chart component

In the HeatMap, the cell selection is used to select the single or multiple heat map cells at runtime and get the selected cell details using the [cellSelected](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#cellselected) event. You can enable the cell selection using the [allowSelection](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#allowselection) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/selection-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/selection-cs1" %}

## Enable single cell selection

In the HeatMap, the [enableMultiSelect](../api/heatmap/#enablemultiselect) property is used to allow single cell selection. When you set the `enableMultiSelect` property to **false**, only one cell is selected. By default, `enableMultiSelect` property is set to **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/selection-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/selection-cs2" %}