---
layout: post
title: Accessibility customization in Syncfusion Vue Pie chart component.
description: Learn here all about Accessibility customization in Syncfusion Vue Accumulation chart component of Syncfusion Essential JS 2 and more.
control: Accessibility customization
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility customization

The Syncfusion® Vue Accumulation Chart component is structured to visualize data in a graphical manner. It provides robust customization options for accessibility, allowing you to enhance the user experience for those with disabilities. The main attributes of the Vue Accumulation Chart component's accessibility customization are briefly explained in this section.

The accumulation chart component has a number of characteristics that enable accessibility features to be customized, including:

* [`accessibilityDescription`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accessibilityModel/#accessibilitydescription) - Provides a text description for the accumulation chart, improving support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accessibilityModel/#accessibilityrole) - Specifies the role of the accumulation chart, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accessibilityModel/#focusable) - Allows the accumulation chart to receive focus, making it accessible via keyboard navigation.
* [`focusBorderColor`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/#focusbordercolor) - Sets the color of the focus border, enhancing visibility when the accumulation chart is focused.
* [`focusBorderMargin`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/#focusbordermargin) - Defines the margin around the focus border.
* [`focusBorderWidth`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/#focusborderwidth) - Specifies the width of the focus border.
* [`tabIndex`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accessibilityModel/#tabindex) - Specifies the tab order for the accumulation chart element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/pie-chart/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/pie-chart/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/accessibility/pie-chart" %}

## Series

The [`series`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/#series) supports the customization of accessibility for data points, allowing key characteristics to be adjusted for enhanced accessibility, such as:

* [`accessibilityDescription`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accessibilityModel/#accessibilitydescription) - Provides a text description for the series root element, enhancing support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accessibilityModel/#accessibilityrole) - Specifies the role of the series, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accessibilityModel/#focusable) - Allows the series to receive focus, making it accessible via keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accessibilityModel/#tabindex) - Specifies the tab order of the series element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/series/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/series/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/accessibility/series" %}

## Legend

The [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/#legendsettings) provide information about the series shown in the accumulation chart. The following [`accessibility`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/legendSettingsModel/#accessibility) properties in [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/#legendsettings) can be used to alter the accessibility of the accumulation chart's legend:

* [`accessibilityDescription`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accessibilityModel/#accessibilitydescription) - Provides a text description for the legend root element, enhancing support for screen readers..
* [`accessibilityRole`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accessibilityModel/#accessibilityrole) - Specifies the role of the legend items to screen readers, providing appropriate context.
* [`focusable`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accessibilityModel/#focusable) - Specifies whether legend items are focusable via keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accessibilityModel/#tabindex) - Specifies the tab order of the legend element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/legend/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/accessibility/legend/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/accessibility/legend" %}