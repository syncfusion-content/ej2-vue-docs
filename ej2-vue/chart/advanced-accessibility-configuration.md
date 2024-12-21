---
layout: post
title: Accessibility customization in Vue Chart component | Syncfusion
description: Learn here all about Accessibility customization in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Accessibility customization
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility customization in Vue Chart component

The Syncfusion® Vue Chart component is structured to visualize data in a graphical manner. It provides robust customization options for accessibility, allowing you to enhance the user experience for those with disabilities. The main attributes of the Vue Chart component's accessibility customization are briefly explained in this section.

The chart component has a number of characteristics that enable accessibility features to be customized, including:

* [`accessibilityDescription`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#accessibilitydescription) - Provides a text description for the chart, improving support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#accessibilityrole) - Specifies the role of the chart, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#focusable) - Allows the chart to receive focus, making it accessible via keyboard navigation.
* [`focusBorderColor`](https://ej2.syncfusion.com/vue/documentation/api/chart#focusbordercolor) - Sets the color of the focus border, enhancing visibility when the chart is focused.
* [`focusBorderMargin`](https://ej2.syncfusion.com/vue/documentation/api/chart#focusbordermargin) - Defines the margin around the focus border.
* [`focusBorderWidth`](https://ej2.syncfusion.com/vue/documentation/api/chart#focusborderwidth) - Specifies the width of the focus border.
* [`tabIndex`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#tabindex) - Specifies the tab order of the chart element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/line-chart/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/line-chart/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/accessibility/line-chart" %}

## Series

The [`series`](https://ej2.syncfusion.com/vue/documentation/api/chart#series) supports the customization of accessibility for data points, allowing key characteristics to be adjusted for enhanced accessibility, such as:

* [`accessibilityDescription`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesAccessibilityModel/#accessibilitydescription) - Provides a text description for the series root element, enhancing support for screen readers.
* [`accessibilityDescriptionFormat`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesAccessibilityModel/#accessibilitydescriptionformat) - Specifies a format for the accessibility description of each point in the series, allowing dynamic content. The format string can include the placeholders such as ${series.name}, ${point.x}, ${point.y}, ${point.high}, etc. For example, the format "${series.name} : ${point.x}" displays the series name and x-value of the point in the accessibility description. Data point's values like high, low, open, and close are applicable based on the series types.
* [`accessibilityRole`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesAccessibilityModel/#accessibilityrole) - Specifies the role of the series, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesAccessibilityModel/#focusable) - Allows the series to receive focus, making it accessible via keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesAccessibilityModel/#tabindex) - Specifies the tab order of the series element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/column-series/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/column-series/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/accessibility/column-series" %}

## Title and subtitle

In the Vue chart component, the [`titleStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart#titlestyle) and [`subTitleStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart#subtitlestyle) attributes allow you to customize the accessibility of the chart's title and subtitle. The following [`accessibility`](https://ej2.syncfusion.com/vue/documentation/api/chart/titleSettingsModel/#accessibility) properties in [`titleStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart#titlestyle) and [`subTitleStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart#subtitlestyle) can be customized for accessibility:

* [`accessibilityDescription`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#accessibilitydescription) - Provides a text description for the chart title and subtitle, enhancing support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#accessibilityrole) - Specifies the role of the chart title and subtitle, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#focusable) - Enables or disables the keyboard navigation focus for the title and subtitle.
* [`tabIndex`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#tabindex) - Specifies the tab order of the title and subtitle element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/title/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/title/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/accessibility/title" %}

## Annotations

The [`annotations`](https://ej2.syncfusion.com/vue/documentation/api/chart#annotations) property allows you to add annotations to the chart in specific regions. The following [`accessibility`](https://ej2.syncfusion.com/vue/documentation/api/chart/chartAnnotationSettingsModel/#accessibility) properties in [`annotations`](https://ej2.syncfusion.com/vue/documentation/api/chart#annotations) can be customized for accessibility:

* [`accessibilityDescription`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#accessibilitydescription) - Provides a text description for the annotation, enhancing support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#accessibilityrole) - Specifies the role of the annotation, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#focusable) - Specifies whether annotations are focusable via keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#tabindex) - Specifies the tab order of the annotation element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/annotation/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/annotation/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/accessibility/annotation" %}

## Trendline

The [`trendlines`](https://ej2.syncfusion.com/vue/documentation/api/chart#trendlinemodule) property allows you to display trends in the data. The following [`accessibility`](https://ej2.syncfusion.com/vue/documentation/api/chart/trendlineModel/#accessibility) properties in [`trendlines`](https://ej2.syncfusion.com/vue/documentation/api/chart#trendlinemodule) can be customized for accessibility:

* [`accessibilityDescription`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#accessibilitydescription) - Provides a text description for the trendline, enhancing support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#accessibilityrole) - Specifies the role of the trendline, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#focusable) - Specifies whether trendlines are focusable via keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#tabindex) - Specifies the tab order of the trendline element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/trendline/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/trendline/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/accessibility/trendline" %}

## Zooming

The [`zoomSettings`](https://ej2.syncfusion.com/vue/documentation/api/chart#zoomsettings) attributes allow you to adjust the chart's zooming capability. The following [`accessibility`](https://ej2.syncfusion.com/vue/documentation/api/chart/zoomSettingsModel/#accessibility) properties in [`zoomSettings`](https://ej2.syncfusion.com/vue/documentation/api/chart#zoomsettings) offer the parameters for accessibility customization:

* [`accessibilityDescription`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#accessibilitydescription) - Provides a text description for the zoom toolkit items, enhancing support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#accessibilityrole) - Specifies the role of the zoom toolkit items, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#focusable) - Specifies whether zoom toolkit items are focusable via keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#tabindex) - Specifies the tab order of the zooming element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/zoom/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/zoom/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/accessibility/zoom" %}

## Technical indicators

The [`indicators`](https://ej2.syncfusion.com/vue/documentation/api/chart#indicators) property allows you to analyze the trends and patterns in the data. The following [`accessibility`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#accessibility) properties in [`indicators`](https://ej2.syncfusion.com/vue/documentation/api/chart#indicators) can be customized for accessibility:

* [`accessibilityDescription`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#accessibilitydescription) - Provides a text description for the indicators, enhancing support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#accessibilityrole) - Specifies the role of the indicators, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#focusable) - Specifies whether indicators are focusable via keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#tabindex) - Specifies the tab order of the indicators element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/indicator/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/indicator/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/accessibility/indicator" %}

## Legend

The [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/chart#legendsettings) provide information about the series shown in the chart. The following [`accessibility`](https://ej2.syncfusion.com/vue/documentation/api/chart/legendSettingsModel/#accessibility) properties in [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/chart#legendsettings) can be used to alter the accessibility of the chart's legend:

* [`accessibilityDescription`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#accessibilitydescription) - Provides a text description for the legend root element, enhancing support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#accessibilityrole) - Specifies the role of the legend items to screen readers, providing appropriate context.
* [`focusable`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#focusable) - Specifies whether legend items are focusable via keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/vue/documentation/api/chart/accessibilityModel/#tabindex) - Specifies the tab order of the legend element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/chart-legend/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/chart-legend/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/accessibility/chart-legend" %}