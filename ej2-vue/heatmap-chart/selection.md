---
layout: post
title: Selection in Vue HeatMap chart component | Syncfusion
description: Learn here all about Selection in Syncfusion Vue HeatMap chart component of Syncfusion Essential JS 2 and more.
control: Selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Selection in Vue HeatMap chart component

In the HeatMap, the cell selection is used to select single or multiple HeatMap cells at runtime and get the selected cell details using the [cellSelected](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#cellselected) event. You can enable the cell selection using the [allowSelection](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#allowselection) property.

The HeatMap cells can be selected using the following interactions, as shown in the table below.

|   Modes of Interactions |   Description                                                                                                      |
|------------------------ | -------------------------------------------------------------------------------------------------------------------|
|   Mouse                 |  HeatMap cells can be selected by clicking or dragging and dropping over them.                                     |
|   Touch                 |  HeatMap cells can be selected by tapping or dragging and dropping over them.                                      |
|   Keyboard              |  The **Ctrl** key on the keyboard can be used to enable multiple cell selection with mouse and touch interaction. The **Ctrl** key can only be used if the `enableMultiSelect` property is set to **true** in order to enable multiple cell selection.               |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/selection-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/selection-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/selection-cs1" %}

## Enable single cell selection

In the HeatMap, the [enableMultiSelect](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#enablemultiselect) property is used to allow single cell selection. When you set the `enableMultiSelect` property to **false**, only one cell is selected. By default, `enableMultiSelect` property is set to **true**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/selection-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/selection-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/selection-cs2" %}

### Clearing cell selection

The [clearSelection](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#clearselection) method can be used to clear all the selected cells. The below example illustrates the same.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/selection-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/selection-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/selection-cs3" %}