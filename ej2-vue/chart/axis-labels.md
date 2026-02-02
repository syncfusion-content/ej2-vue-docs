---
layout: post
title: Axis labels in Vue Chart component | Syncfusion
description: Learn here all about Axis labels in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Axis labels 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Axis labels in Vue Chart component

## Smart Axis Labels

When axis labels overlap due to limited space or dense data points, the [`labelIntersectAction`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis#labelintersectaction) property can be used to control how the labels are rendered. This helps improve readability by automatically adjusting label visibility or orientation.

When setting `labelIntersectAction` as `Hide`, overlapping labels are hidden to avoid visual clutter.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/multiple-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/multiple-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/multiple-cs1" %}

When setting `labelIntersectAction` as `Rotate45`, the labels are rotated by 45 degrees to reduce overlap.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/multiple-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/multiple-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/multiple-cs2" %}

When setting `labelIntersectAction` as `Rotate90`, the labels are rotated vertically to maximize space utilization.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/multiple-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/multiple-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/multiple-cs3" %}

## Axis Labels Positioning

By default, axis labels are positioned `outside` the axis line. Labels can also be placed `inside` the axis line using the `labelPosition` property, which is useful when optimizing space within the chart area.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs10" %}

## Multilevel Labels

Multiple levels of labels can be displayed on an axis using the `multiLevelLabels` property. This feature is useful for grouping related categories and improving data interpretation. The following configuration options are available:

• Categories  
• Overflow  
• Alignment  
• Text style  
• Border  

> Note: To use the multilevel label feature, inject `MultiLevelLabel` into the `provide`.

### Categories

Using the categories property, the `start`, `end`, `text`, and `maximumTextWidth` values of multilevel labels can be configured to define the label range and content.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs11" %}

### Overflow

Using the `overflow` property, multilevel labels can be configured to either `trim` or `wrap` when the text exceeds the available space.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs12" %}

### Alignment

The `alignment` property provides options to position multilevel labels at `far`, `center`, or `near` relative to the axis.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs13" %}

### Text customization

The `textStyle` property of multilevel labels provides options to customize the `size`, `color`, `fontFamily`, `fontWeight`, `fontStyle`, `opacity`, `textAlignment`, and `textOverflow`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs14/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs14" %}

### Border customization

Using the `border` property, the `width`, `color`, and `type` of the multilevel label border can be customized. The supported border types are `Rectangle`, `Brace`, `WithoutBorder`, `WithoutTopBorder`, `WithoutTopandBottomBorder`, and `CurlyBrace`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs15/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs15" %}

## Edge Label Placement

Labels with long text at the edges of an axis may appear partially outside the chart area. To avoid this, use the [`edgeLabelPlacement`](https://ej2.syncfusion.com/vue/documentation/api/chart/axisModel#edgelabelplacement) property in the axis. This property moves the label inside the chart area or hides it for better appearance. By default, the [`edgeLabelPlacement`](https://ej2.syncfusion.com/vue/documentation/api/chart/axisModel#edgelabelplacement) property is set to **Shift**, ensuring that labels are repositioned inside the chart area to prevent overlap.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/datetime-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/datetime-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/datetime-cs1" %}

## Labels Customization

The [`labelStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis#labelplacement) property of an axis provides options to customize the `color`, `font-family`, `font-size`, and `font-weight` of axis labels.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs16/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs16" %}

## Customizing Specific Point

Specific axis label text can be customized using the `axisLabelRender` event, which allows conditional formatting or dynamic text updates during label rendering.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs17/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs17" %}

## Trim using maximum label width

Axis labels can be trimmed when they exceed the available space using the [`enableTrim`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis#enabletrim) property. The width of the labels can also be customized using the [`maximumLabelWidth`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis#maximumlabelwidth) property. The default maximum label width value is `34`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs18/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs18" %}

## Line break support

The line break feature is used to display long axis label text across multiple lines. In the following example, the `x` value in the data source contains long text, which is split into two lines using the `<br>` tag.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs19/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs19" %}

## Axis label template

The axis label template allows axis labels to be customized using HTML content. This enables conditional styling and the inclusion of dynamic elements such as icons, images, or additional contextual data. This customization is enabled by setting the template content in the [`labelTemplate`](https://ej2.syncfusion.com/vue/documentation/api/chart/axismodel#labelTemplate) property of the `AxisModel`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs46/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs46/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs46" %}