---
layout: post
title: Data labels in Vue Chart component | Syncfusion
description: Learn here all about Data labels in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Data labels 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data labels in Vue Chart component

Data label can be added to a chart series by enabling the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/chart/dataLabelSettings/#visible)
option in the dataLabel. By default, the labels will arrange smartly without overlapping.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/data-marker/datalabel-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs1" %}

>Note: To use datalabel feature, we need to inject `DataLabel` into the `provide`.

## Position

Using [`position`](https://ej2.syncfusion.com/vue/documentation/api/chart/dataLabelSettings/#position) property, you can place the label either on
`Top`, `Middle`,`Bottom` or `Outer` (outer is applicable for column and bar type series).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/data-marker/datalabel-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs2" %}

>Note: The position `Outer` is applicable for column and bar type series.

## Data Label Template

Label content can be formatted by using the template option. Inside the template, you can add the placeholder text `${point.x}` and `${point.y}` to display corresponding data points x & y value. Using [`template`](https://ej2.syncfusion.com/vue/documentation/api/chart/dataLabelSettings/#template) property, you can set data label template in chart.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/data-marker/datalabel-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs3" %}

## Text Mapping

Text from the data source can be mapped using `name` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/data-marker/datalabel-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs4" %}

## Format

Data label for the chart can be formatted using [`format`](https://ej2.syncfusion.com/vue/documentation/api/chart/dataLabelSettings/#format) property. You can use the global formatting options, such as 'n', 'p', and 'c'.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/data-marker/datalabel-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs5" %}
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

## Margin

`margin` for data label can be applied to using `left`, `right`, `bottom` and `top` properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/data-marker/datalabel-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs6" %}

## DataLabel Rotation

Using `angle` property, you can rotate the data label by its given angle.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/data-marker/marker-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/marker-cs1" %}

## Customization

`stroke` and `border` of data label can be customized using `fill` and `border` properties. Rounded corners
can be customized using `rx` and `ry` properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/data-marker/datalabel-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs7" %}

>Note: `rx` and `ry` properties requires `border` values not to be null.

## Customizing Specific Point

You can also customize the specific marker and label using [`pointRender`](https://ej2.syncfusion.com/vue/documentation/api/chart/iPointRenderEventArgs/)and[`textRender`](https://ej2.syncfusion.com/vue/documentation/api/chart/iTextRenderEventArgs/) event. `pointRender` event allows you to change the shape, color and border for a point, whereas the `textRender` event allows you to change the text for the point.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/data-marker/datalabel-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs8" %}

## Show percentage based on each series points

You can calculate the percentage value based on the sum for each series using the `seriesRender` and `textRender` events in the chart. In `seriesRender` calculate the sum of each series y values and In `textRender` calculate percentage value based on the sum value and modify the text.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/data-marker/datalabel-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs9" %}
