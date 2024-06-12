---
layout: post
title: Data labels in Vue 3D Chart component | Syncfusion
description: Learn here all about data labels in Syncfusion 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data labels in Vue 3D Chart component

Data labels are fields that includes information about the sample point connected to an output. It can be added to a chart series by enabling the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/dataLabelStyleModel/#visible) property in the [`dataLabel`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/series3D/#datalabel). By default, the labels will arrange smartly without overlapping.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/data-label/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/data-label/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/data-label" %}

>Note: To use data label feature, we need to inject `DataLabel3D` into the `provide`.

## Position

The [`position`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/dataLabelStyleModel/#position) property is used to place the label either on `Top`, `Middle`, or `Bottom`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/label-position/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/label-position/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/label-position" %}

## Template

Label content can be formatted by using the template option. Inside the template, the placeholder text `${point.x}` and `${point.y}` can be added to display corresponding data points x & y value. Using [`template`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/dataLabelStyleModel/#template) property, the data label template can be set.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/template/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/template/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/template" %}

## Text mapping

Text from the data source can be mapped using the [`name`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/dataLabelStyleModel/#name) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/text-mapping/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/text-mapping/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/text-mapping" %}

## Format

Data label for the chart can be formatted using the [`format`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/dataLabelStyleModel/#format) property. The global formatting options can be used as 'n', 'p', and 'c'.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/datalabel-format/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/datalabel-format/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/datalabel-format" %}

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

The [`margin`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/dataLabelStyleModel/#margin) for data label can be applied by using [`left`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/marginModel/#left), [`right`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/marginModel/#right), [`bottom`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/marginModel/#bottom) and [`top`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/marginModel/#top) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/margin/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/margin/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/margin" %}

## Customization

The `stroke` and `border` of data label can be customized using [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/dataLabelStyle/#fill) and [`border`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/dataLabelStyle/#border) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/datalabel-custom/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/datalabel-custom/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/datalabel-custom" %}

## Customizing specific label

A specific label can be customized by using the [`textRender`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/i3DTextRenderEventArgs/) event.  The `textRender` event allows you to change the label text for the point.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/label/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/user-interaction/label/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/user-interaction/label" %}