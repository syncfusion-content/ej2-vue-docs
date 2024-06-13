---
layout: post
title: Appearance in Vue HeatMap chart component | Syncfusion
description: Learn here all about Appearance in Syncfusion Vue HeatMap chart component of Syncfusion Essential JS 2 and more.
control: Appearance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Vue HeatMap chart component

## Cell customization

You can customize the cell by using the [cellSettings](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#cellsettings) property.

### Border

Change the width, color, and radius of the heat map cells by using the [border](https://ej2.syncfusion.com/vue/documentation/api/heatmap/cellSettings/#border) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs1" %}

### Cell highlighting

Enable or disable the cell highlighting while hovering over the heat map cells by using the [enableCellHighlighting](https://ej2.syncfusion.com/vue/documentation/api/heatmap/cellSettings/#enablecellhighlighting) property.

>Note: The cell highlighting only works in a SVG rendering mode.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs2" %}

### Color gradient mode

The [colorGradientMode](https://ej2.syncfusion.com/vue/documentation/api/heatmap/paletteSettingsModel/#colorgradientmode) property can be used to set the minimum and maximum values for colors based on row and column.

Three types of color gradient modes are available.

* **Table**: The minimum and maximum value colors calculated for overall data.
* **Row**: The minimum and maximum value colors calculated for each row of data.
* **Column**: The minimum and maximum value colors calculated for each column of data.

>Note: The default value of `colorGradientMode` is **Table**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs3" %}

## Background color

The background color of the HeatMap can be customized using the [backgroundColor](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#backgroundcolor) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs4" %}

## Margin

Set the margin for the HeatMap from its container by using the [margin](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#margin) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs5" %}

## Title

The title is used to provide a quick information about the data plotted in heatmap. The [text](https://ej2.syncfusion.com/vue/documentation/api/heatmap/title/#text) property is used to set the title for the heatmap. The text style of the title can be customized by using the [textStyle](https://ej2.syncfusion.com/vue/documentation/api/heatmap/title/#textstyle) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs6" %}

## Data label

The visibility of data labels can be toggled using the [showLabel](https://ej2.syncfusion.com/vue/documentation/api/heatmap/cellSettings/#showlabel) property. By default, the data labels will be visible.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs7" %}

### Customize the data label

The label displayed in the HeatMap cell can be changed using the [cellRender](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#cellrender) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs8" %}

### Text style

The text attributes of the data label such as font-family, font-size, and color can be customized using the [textStyle](https://ej2.syncfusion.com/vue/documentation/api/heatmap/cellSettings/#textstyle) in the [cellSettings](https://ej2.syncfusion.com/vue/documentation/api/heatmap/#cellsettings) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs9" %}

### Format

The format of the data label, such as currency, decimal, percent etc. can be changed using [format](https://ej2.syncfusion.com/vue/documentation/api/heatmap/cellSettings/#format) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs10" %}

### Template

Any HTML elements can be added as a template in the data labels by using the [labelTemplate](https://ej2.syncfusion.com/vue/documentation/api/heatmap/cellSettings/#labeltemplate) property of [cellSettings](https://ej2.syncfusion.com/vue/documentation/api/heatmap/cellSettings) in the HeatMap.

The following examples show various data binding methods in the HeatMap using the `labelTemplate` property.

#### Array binding

By including `${value}` in the template content, the value from the data source for the corresponding cell can be displayed in the HeatMap cell as data label template content. Additionally, the x-axis and y-axis label values can be displayed by including `${xLabel}` and `${yLabel}` in the template content.

**Table**

The following example demonstrates how to add a data label template for array table binding.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs11" %}

**Cell**

The following example demonstrates how to add a data label template for array cell binding.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs12" %}

#### JSON binding

By including the desired field name in the template content, such as **${value}**, the value from the data source for the corresponding cell can be displayed in the HeatMap cell as data label template content.

**Table**

The following example demonstrates how to add a data label template for JSON table binding.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs13" %}

**Cell**

The following example demonstrates how to add a data label template for JSON cell binding.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs14/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/appearance-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/appearance-cs14" %}

## See Also

* [To customize the appearance of tool tip](./tooltip/#customize-the-appearance-of-tooltip)