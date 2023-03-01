---
layout: post
title: Appearance in Vue Heatmap chart component | Syncfusion
description: Learn here all about Appearance in Syncfusion Vue Heatmap chart component of Syncfusion Essential JS 2 and more.
control: Appearance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Vue Heatmap chart component

## Cell customization

You can customize the cell by using the [cellSettings](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#cellsettings) property.

### Border

Change the width, color, and radius of the heat map cells by using the [border](https://ej2.syncfusion.com/vue/documentation/api/heatmap/cellSettings/#border) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/appearance-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs1" %}

### Cell highlighting

Enable or disable the cell highlighting while hovering over the heat map cells by using the [enableCellHighlighting](../api/heatmap/cellSettings/#enablecellhighlighting) property.

>Note: The cell highlighting only works in a SVG rendering mode.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/appearance-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs2" %}

### Color gradient mode

The [colorGradientMode](../api/heatmap/paletteSettingsModel/#colorgradientmode) property can be used to set the minimum and maximum values for colors based on row and column.

Three types of color gradient modes are available.

* **Table**: The minimum and maximum value colors calculated for overall data.
* **Row**: The minimum and maximum value colors calculated for each row of data.
* **Column**: The minimum and maximum value colors calculated for each column of data.

>Note: The default value of `colorGradientMode` is **Table**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/appearance-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs3" %}

## Background color

The background color of the HeatMap can be customized using the [backgroundColor](../api/heatmap/#backgroundcolor) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/appearance-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs4" %}

## Margin

Set the margin for the heatmap from its container by using the [margin](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#margin) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/appearance-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs5" %}

## Title

The title is used to provide a quick information about the data plotted in heatmap. The [text](../api/heatmap/title/#text) property is used to set the title for the heatmap. The text style of the title can be customized by using the [textStyle](https://ej2.syncfusion.com/vue/documentation/api/heatmap/title/#textstyle) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/appearance-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs6" %}

## Data label

The visibility of data labels can be toggled using the [showLabel](../api/heatmap/cellSettings/#showlabel) property. By default, the data labels will be visible.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/appearance-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs7" %}

### Customize the data label

The label displayed in the HeatMap cell can be changed using the [cellRender](../api/heatmap/#cellrender) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/appearance-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs8" %}

### Text style

The text attributes of the data label such as font-family, font-size, and color can be customized using the [textStyle](https://ej2.syncfusion.com/vue/documentation/api/heatmap/cellSettings/#textstyle) in the [cellSettings](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#cellsettings) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/appearance-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs9" %}

### Format

The format of the data label, such as currency, decimal, percent etc. can be changed using [format](../api/heatmap/cellSettings/#format) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/heatmap-chart/appearance-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs10" %}

## See Also

* [To customize the appearance of tool tip](./tooltip/#customize-the-appearance-of-tooltip)
