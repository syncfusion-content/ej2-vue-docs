---
layout: post
title: Page settings in Vue Diagram component | Syncfusion®
description: Learn here all about Page settings in Syncfusion® Vue Diagram component of Syncfusion Essential® JS 2 and more.
control: Page settings 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Page settings in Vue Diagram component

Page settings allow customization of the appearance, size, and orientation of the diagram page.

## Page size and appearance

The [`width`](https://ej2.syncfusion.com/vue/documentation/api/diagram/pageSettingsModel/#width) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/diagram/pageSettingsModel/#height) properties in page settings determine the size of the page. Additionally, the [`background`](https://ej2.syncfusion.com/vue/documentation/api/diagram/backgroundModel/) property allows customization of the page's appearance. The [`color`](https://ej2.syncfusion.com/vue/documentation/api/diagram/backgroundModel/#color) property of background is used to define the color of the page. The [`margin`](https://ej2.syncfusion.com/vue/documentation/api/diagram/marginModel/) property defines the page margins.

To explore those properties, refer to [`Page Settings`](https://ej2.syncfusion.com/vue/documentation/api/diagram/pageSettingsModel/).

The following example shows the customization of page settings.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/page-settings/pagesettings-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/page-settings/pagesettings-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/page-settings/pagesettings-cs1" %}

## Set background image

A background image can be attached to the page by using the [`source`](https://ej2.syncfusion.com/vue/documentation/api/diagram/backgroundModel/#source) property of [`background`](https://ej2.syncfusion.com/vue/documentation/api/diagram/backgroundmodel/). The [`scale`](https://ej2.syncfusion.com/vue/documentation/api/diagram/backgroundModel/#scale) property adjusts how the background image stretches, while the [`align`](https://ej2.syncfusion.com/vue/documentation/api/diagram/backgroundModel/#align) property aligns the image within the diagram page.

The following code illustrates how to set background image to the diagram page.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/page-settings/BGImage-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/page-settings/BGImage-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/page-settings/BGImage-cs1" %}

## Page orientation

There are two types of page orientations:

- Landscape
- Portrait

Depending on the orientation selected, the width and height properties are adjusted accordingly. By default, the orientation is set to 'Landscape'. In the following example, the height and width properties of pageSettings are swapped when setting the orientation to 'Portrait'.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/page-settings/pagesettings-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/page-settings/pagesettings-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/page-settings/pagesettings-cs1" %}

## Multiple page and page breaks

When multiple pages are enabled, the page size dynamically adjusts in multiples of the specified width and height, ensuring the entire diagram fits within the page boundaries. Page breaks serve as visual guides indicating how pages are split.

The [`multiplePage`](https://ej2.syncfusion.com/vue/documentation/api/diagram/pageSettingsModel/#multiplepage) and [`showPageBreak`](https://ej2.syncfusion.com/vue/documentation/api/diagram/pageSettingsModel/#showpagebreaks) properties in page settings control the ability to enable multiple pages and display page break lines, respectively.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/page-settings/multiplepage-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/page-settings/multiplepage-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/page-settings/multiplepage-cs1" %}

The color of the page break lines can be customized by overriding the styles of the .e-diagram-page-break class. For more details refer to [`CSS customization`](https://ej2.syncfusion.com/vue/documentation/diagram/style#customizing-the-page-breaks)

## Boundary constraints

The diagram supports restricting or customizing the interactive region where elements cannot be dragged, resized, or rotated. You can achieve this using the [`boundaryConstraints`](https://ej2.syncfusion.com/vue/documentation/api/diagram/boundaryConstraints/) property in page settings.

There are three types of boundary constraints. They are:
- Infinity
- Diagram
- Page
To explore these constraints further, refer to [`Boundary Constraints`](https://ej2.syncfusion.com/vue/documentation/diagram/constraints#boundary-constraints).

Below is an example illustrating how to define boundary constraints within the diagram:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/page-settings/boundaryconstraints-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/page-settings/boundaryconstraints-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/page-settings/boundaryconstraints-cs1" %}

## Fit options

The [`fitOptions`](https://ej2.syncfusion.com/vue/documentation/api/diagram/fitOptionsModel/) in page settings control how diagram content is fitted within the diagram page. The [`canFit`](https://ej2.syncfusion.com/vue/documentation/api/diagram/fitOptionsModel/#canfit) property within fitOptions centers the content within the viewport during diagram rendering. Additionally, the [`region`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramRegions/) property specifies whether to fit the page or the content to the center of the viewport. Choosing CustomBounds for the [`region`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramRegions/) allows fitting custom bounds within the diagram by defining them in the [`customBounds`](https://ej2.syncfusion.com/vue/documentation/api/diagram/fitOptionsModel/#custombounds) property of fitOptions. The [`canZoomIn`](https://ej2.syncfusion.com/vue/documentation/api/diagram/fitOptionsModel/#canzoomin) property enables zooming in to fit smaller content within the viewport. Additionally, the [`margin`](https://ej2.syncfusion.com/vue/documentation/api/diagram/marginModel/) property defines the space around the fitted content within the viewport, while the [`mode`](https://ej2.syncfusion.com/vue/documentation/api/diagram/fitModes/) property sets the fitting mode, typically defaulting to 'Page' but also offering options like 'Width' and 'Height' for specific dimension constraints.

The following example demonstrates how fitOptions are utilized in diagram page settings.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/page-settings/fitoptions-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/page-settings/fitoptions-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/page-settings/fitoptions-cs1" %}
