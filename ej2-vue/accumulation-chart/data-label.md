---
layout: post
title: Data label in Vue Accumulation chart component | Syncfusion
description: Learn here all about Data label in Syncfusion Vue Accumulation chart component of Syncfusion Essential JS 2 and more.
control: Data label 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data label in Vue Accumulation chart component

Data label can be added to a chart series by enabling the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationDataLabelSettings/#visible) option in the dataLabel property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/smartlabel-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/smartlabel-cs1" %}

>Note: To use the data label feature, inject the `DataLabel` into the `provide`.

## Positioning

Accumulation chart provides support for placing the data label either `inside` or `outside` the chart.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/smartlabel-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/smartlabel-cs2" %}

## DataLabel rotation

Using `angle` property, you can rotate the data label by its given angle.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/smartlabel-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/smartlabel-cs3" %}

## Smart labels

Data labels will be arranged smartly without overlapping with each other. You can enable or disable this feature using the [`enableSmartLabels`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationChartModel/#enablesmartlabels) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/smartlabel-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/smartlabel-cs4" %}

## Datalabel template

Label content can be formatted by using the template option. Inside the template, you can add the placeholder text `${point.x}` and `${point.y}` to display corresponding data points x & y value. Using [`template`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationDataLabelSettings/#template) property, you can set data label
template in chart.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/smartlabel-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/smartlabel-cs5" %}

## Connector Line

Connector line will be visible when the data label is placed `outside` the chart. The connector line can be customized using the `type`, `color`, `width`, `length` and `dashArray` properties

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/smartlabel-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/smartlabel-cs6" %}

## Text Mapping

The fill color and the text in the data source can be mapped to the chart using `pointColorMapping` in series and `name` in datalabel respectively.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/pie-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs7" %}

## Format

Data label for the accumulation chart can be formatted using [`format`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationChartModel/#format) property. You can use the global formatting options, such as 'n', 'p', and 'c'.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/pie-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs8" %}
<table>
  <tr>
    <th>Value</th>
    <th>Format</th>
    <th>Resultant Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1000</td>
    <td>n1</td>
    <td>1000.0</td>
    <td>The number is rounded to 1 decimal place.</td>
  </tr>
  <tr>
    <td>1000</td>
    <td>n2</td>
    <td>1000.00</td>
    <td>The number is rounded to 2 decimal places.</td>
  </tr>
   <tr>
    <td>1000</td>
    <td>n3</td>
    <td>1000.000</td>
    <td>The number is rounded to 3 decimal place.</td>
  </tr>
  <tr>
    <td>0.01</td>
    <td>p1</td>
    <td>1.0%</td>
    <td>The number is converted to percentage with 1 decimal place.</td>
  </tr>
  <tr>
    <td>0.01</td>
    <td>p2</td>
    <td>1.00%</td>
    <td>The number is converted to percentage with 2 decimal place.</td>
  </tr>
   <tr>
    <td>0.01</td>
    <td>p3</td>
    <td>1.000%</td>
    <td>The number is converted to percentage with 3 decimal place.</td>
  </tr>
  <tr>
    <td>1000</td>
    <td>c1</td>
    <td>$1000.0</td>
    <td>The currency symbol is appended to number and number is rounded to 1 decimal place.</td>
  </tr>
   <tr>
    <td>1000</td>
    <td>c2</td>
    <td>$1000.00</td>
    <td>The currency symbol is appended to number and number is rounded to 2 decimal place.</td>
  </tr>
</table>

## Customization

Individual text can be customized using the `textRender` event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/smartlabel-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/smartlabel-cs7" %}

## Text wrap

When the data label text exceeds the container, the text can be wrapped by using [`textWrap`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationDataLabelSettings/#textwrap) property. End user can also wrap the data label text based on [`maxWidth`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationDataLabelSettings/#maxwidth) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/smartlabel-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/smartlabel-cs8" %}

## Show percentages in data labels of pie chart

You can show the percentages in data labels of pie chart using `textRender` event and `template` option.

### Using textRender event

You can customize the data label of pie chart using [textRender](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart#textrender) event as follows to show percentage.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/smartlabel-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/smartlabel-cs9" %}

### Using template

You can display the percentage values in data label of pie chart using `template` option.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/smartlabel-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/smartlabel-cs10" %}
