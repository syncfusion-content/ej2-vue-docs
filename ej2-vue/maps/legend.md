---
layout: post
title: Legend in Vue Maps component | Syncfusion
description: Explore here all about Legend in Syncfusion Vue Maps component of Syncfusion Essential JS 2 and more.
control: Legend 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Legend in Vue Maps component

A Legend is a key on a Maps that contains descriptions for swatches of symbols. It can be represented in various colors, shapes or other identifiers based on the data and provides valuable information for interpreting what the Maps are displaying. It explains what each symbol in the Maps represents. Legends are enabled by setting the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#visible) property of [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel) property to **true**.

## Positioning of the legend

The legend can be positioned in the following two ways:

* Absolute position
* Dock position

**Absolute position**

The legend can be positioned at specific coordinates using the [`location`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#location) property in the [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel), based on the X and Y axis values. For positioning the legend using absolute coordinates, set the [`position`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#position) property to **Float**.

**Dock position**

Legends can be docked to specific locations within the map container. The [`position`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#position) property in [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel) is used to set these options.

* Top
* Left
* Bottom
* Right

Each of these four positions can be further aligned using **Near**, **Center**, or **Far** through the [`alignment`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#alignment) property in [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel). This provides 12 possible alignment combinations for precise legend placement.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs52/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs52" %}

## Legend modes

Legends support two display modes: **Default** mode and **Interactive** mode.

**Default mode**

Default mode legends having symbols with legend labels, used to identify the shape or bubble or marker color. To enable this option by setting the [`mode`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#mode) property of [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel) as **Default**.

**Interactive mode**

Interactive mode enhances user experience by displaying an arrow pointer that indicates the exact range color in the legend when hovering over corresponding map shapes. Enable this mode by setting the [`mode`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#mode) property of [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel) to **Interactive**. The [`invertedPointer`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#invertedpointer) property controls the visibility of the inverted pointer in the interactive legend.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs51/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs51" %}

## Legend for shapes

Legends for map shapes can be generated from various color mapping types, including equal color mapping, range color mapping, and desaturation color mapping. The following data source demonstrates permanent and non-permanent member countries in the UN Security Council.

The following code snippet demonstrates how to configure equal color mapping legends for shapes. Bind the data source to the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#datasource) property of [`layerSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel) property. Set the [`shapePropertyPath`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#shapepropertypath) to **name** and [`shapeDataPath`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel#shapedatapath) to **Country**. Configure equal color mapping by setting the [`colorMapping`](https://ej2.syncfusion.com/vue/documentation/api/maps/colorMappingSettingsModel) as an array in [`shapeSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/shapeSettingsModel) property. Finally, enable the legend by setting the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#visible) property of [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel) to **true**. The [`label`](https://ej2.syncfusion.com/vue/documentation/api/maps/colorMappingSettingsModel#label) property in [`colorMapping`](https://ej2.syncfusion.com/vue/documentation/api/maps/colorMappingSettingsModel) is used to define the text displayed in the legend.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs53/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs53" %}

### Legend shape

The Maps component supports various legend shape types to match different visualization needs. Use the [`shape`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#shape) property in the [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel) to specify the desired shape.

* Circle
* Rectangle
* Triangle
* Diamond
* Cross
* Star
* HorizontalLine
* VerticalLine
* Pentagon
* InvertedTriangle

Customize legend shape dimensions and appearance using the [`shapeWidth`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#shapewidth), [`shapeHeight`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#shapeheight), [`shapeBorder`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#shapeborder) and [`shapePadding`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#shapepadding) properties.

### Customization

The legend appearance and behavior can be extensively customized using the following properties in [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel).

**Appearance properties:**

* [`background`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#background) - To customize the background color of the Legend.
* [`border`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#border) - To customize the color, width and opacity of the border for the Legend.
* [`fill`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#fill) - To apply the color for the Legend.
* [`labelDisplayMode`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#labeldisplaymode) - To customize the display mode for the Legend text.
* [`labelPosition`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#labelposition) - To customize the position of the Legend text.
* [`orientation`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#orientation) - To customize the orientation of the Legend.
* [`textStyle`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#textstyle) - To customize the text style for Legend.
* [`title`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#title) - To apply the title for the Legend.
* [`titleStyle`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#titlestyle) - To customize the style of the title for the Legend.
* [`height`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#height) - To customize the height of the Legend.
* [`width`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#width) - To customize the width of the Legend.
* [`opacity`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#opacity) - To apply the opacity to the Legend.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs54/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs54" %}

### Legend for items excluded from color mapping

Legends can display items that fall outside the defined color mapping ranges. This is useful when the data contains values that do not match any specified color mapping criteria. Use the [`color`](https://ej2.syncfusion.com/vue/documentation/api/maps/colorMappingSettingsModel#color) property in [`colorMapping`](https://ej2.syncfusion.com/vue/documentation/api/maps/colorMappingSettingsModel)to assign colors to these excluded items. The following example uses **population_density** data that demonstrates the population density of various countries.

```ts
export let population_density = [
    https://ej2.syncfusion.com/vue/documentation.
    {
        'code': 'AE',
        'value': 90,
        'name': 'United Arab Emirates',
        'population': 8264070,
        'density': 99
    },
    {
        'code': 'GB',
        'value': 257,
        'name': 'United Kingdom',
        'population': 62041708,
        'density': 255
    },
    {
        'code': 'US',
        'value': 34,
        'name': 'United States',
        'population': 325020000,
        'density': 33
    }
    ...
    ];
```

The following example demonstrates how to display legends for items excluded from color mapping. In this example, color mapping is configured for density values ranging from 0 to 200. Any records with values outside this range will not match the defined color mappings. To assign a color to these excluded items, set only the [`color`](../api/maps/colorMappingSettingsModel#color) property in the [`colorMapping`](https://ej2.syncfusion.com/vue/documentation/api/maps/colorMappingSettingsModel) without specifying range values. Enable the legend by setting the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#visible) property of [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel) to **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs55/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs55" %}

### Hide desired legend items

Control the visibility of individual legend items using the [`showLegend`](https://ej2.syncfusion.com/vue/documentation/api/maps/colorMappingSettingsModel#showlegend) in the [`colorMapping`](https://ej2.syncfusion.com/vue/documentation/api/maps/colorMappingSettingsModel). Setting this property to **false** hides the corresponding legend item, while **true** keeps it visible. This is useful for simplifying legends by removing unnecessary or redundant entries.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs56/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs56" %}

### Hide legend items based on data source value

Legend item visibility can be controlled dynamically based on values in the data source. This allows data-driven control over which legend items appear. Bind the data source field that contains the visibility state to the [`showLegendPath`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#showlegendpath) property of the [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel) to enable this functionality.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/color-mapping-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/color-mapping-cs1" %}

### Binding legend item text from data source

Display dynamic legend text based on data source values using the [`valuePath`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#valuepath) property in the [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel). This property binds a field from the data source to the legend text, allowing for data-driven legend labels.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/color-mapping-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/color-mapping-cs2" %}

### Hide duplicate legend items

To hide the duplicate legend items in Maps, set the [`removeDuplicateLegend`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#removeduplicatelegend) property to **true** in the [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/color-mapping-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/color-mapping-cs3" %}

### Toggle option in legend

The toggle feature allows users to interactively show or hide Maps elements by clicking legend items. When a legend item is toggled, the corresponding Maps shapes change appearance to indicate their toggled state. Enable legend toggling by setting the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/maps/toggleLegendSettingsModel#enable) property of the [`toggleLegendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/toggleLegendSettingsModel) to **true**.

The following properties customize the appearance of toggled Maps elements:

* [`applyShapeSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/toggleLegendSettingsModel#applyshapesettings) – To apply the [`fill`](https://ej2.syncfusion.com/vue/documentation/api/maps/shapeSettingsModel#fill) property value to the shape of the Maps when toggling the legend items.
* [`fill`](https://ej2.syncfusion.com/vue/documentation/api/maps/toggleLegendSettingsModel#fill) - To apply the color to the shape of the Maps for which legend item is toggled.
* [`opacity`](https://ej2.syncfusion.com/vue/documentation/api/maps/toggleLegendSettingsModel#opacity) – To customize the transparency for the shapes for which legend item is toggled.
* [`border`](https://ej2.syncfusion.com/vue/documentation/api/maps/toggleLegendSettingsModel#border) – To customize the color, width and opacity of the border of the shapes in Maps.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/color-mapping-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/color-mapping-cs4" %}

## Enable legend for bubbles

Display a legend for bubble visualizations by setting the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#visible) property of [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel) to **true** and the [`type`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#type) property of [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel) to **Bubbles**. This creates legend entries that represent the bubble data categories or value ranges.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs57/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs57" %}

## Enable legend for markers

Enable marker legends by setting the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#visible) property of [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel) to **true** and [`type`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#type) property of [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel) to **Markers**. The [`legendText`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel#legendtext) property in the [`markerSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel) to define legend text based on data source values, providing clear identification for different marker categories.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs58/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs58" %}

### Map marker shape to legend shape

Match the legend item shape with the actual marker shape displayed on the map by setting the [`useMarkerShape`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel#usemarkershape) property to **true** in the [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel) property. This creates a consistent visual relationship between markers and their legend representations, improving map readability.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs59/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs59" %}