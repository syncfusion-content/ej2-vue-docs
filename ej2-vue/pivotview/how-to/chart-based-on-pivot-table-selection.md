---
layout: post
title: Render a chart from selected cells in Vue Pivot Table | Syncfusion
description: Step-by-step example showing how to render a chart from selected cells in the Vue Pivot Table, using the cellSelected event to pass data to a Chart.
control: Chart based on pivot table selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to render chart based on cell selection in Vue Pivot Table

The Vue Pivot Table component supports creating charts based on cell selections within the pivot table. This customization allows charts to be plotted dynamically using data from selected cells, providing visual representation of specific data segments.

## Configuration

Cell selection is enabled using the [`allowSelection`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/gridSettings#allowselection) property. The selection behavior is configured through the [`selectionSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/pivotSelectionSettings) property to define selection type and mode.

## Implementation

The [`cellSelected`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#cellselected) event triggers when cells are selected in the pivot table. This event provides selected cell information including row header name, column header name, measure name, and values. Using this data, the [`chart`](https://ej2.syncfusion.com/vue/documentation/chart/getting-started) control can be plotted accordingly.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/renewableEnergy-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/renewableEnergy-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/renewableEnergy-cs1" %}
