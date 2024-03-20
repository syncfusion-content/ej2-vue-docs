---
layout: post
title: Data Label in Vue 3D Circular Chart component | Syncfusion
description: Learn here all about data label in Syncfusion Vue 3D Circular Chart component of Syncfusion Essential JS 2 and more.
control: Data Label 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data Label in Vue 3D Circular Chart component

A data label refers to a label associated with specific data points. It can be added to a 3D Circular Chart series by enabling the `visible` option in the `dataLabel` property. By default, the labels will arrange themselves smartly to avoid overlapping.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/datalabel/datalabel/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/datalabel/datalabel" %}

>To use the data label feature, inject the `CircularChartDataLabel3D` into the `provide`.

## Positioning

Using the `position` property, we can place the data label either `inside` or `outside` the 3D Circular Chart.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/datalabel/position/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/datalabel/position" %}

## Data label template

The label content can be formatted using the template option. Inside the template, placeholder text `${point.x}` and `${point.y` can be added to display the corresponding data point's x & y value. The data label template can be set using the `template` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/datalabel/template/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/datalabel/template" %}

## Connector line

The connector line will be visible when the data label is placed `outside` the chart. It can be customized using properties such as `color`, `width`, `length`, and `dashArray` within the `connectorStyle` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/datalabel/connector-line/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/datalabel/connector-line" %}

## Text mapping

Text from the data source can be mapped using the `name` property within the data label.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/datalabel/text-mapping/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/datalabel/text-mapping" %}

## Format

The data label for the 3D Circular Chart can be formatted using the `format` property. You can utilize global formatting options such as 'n', 'p', and 'c'.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/datalabel/format/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/datalabel/format" %}
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

Individual text for the data points in the 3D Circular Chart can be customized using the `textRender` event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/datalabel/custom/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/datalabel/custom" %}

## Using textRender event

You can customize the data label of a pie chart using the `textRender` event as follows to show the percentage.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/datalabel/text-render/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/datalabel/text-render" %}

## Using template

You can display the percentage values in the data label of a pie chart using the `template` option.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-chart/datalabel/percentage/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/datalabel/percentage" %}
