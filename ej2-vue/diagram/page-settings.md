---
layout: post
title: Page settings in Vue Diagram component | Syncfusion
description: Learn here all about Page settings in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Page settings 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Page settings in Vue Diagram component

Page settings enable to customize the appearance, width, and height of the diagram page.

## Page size and appearance

* The size and appearance of the diagram pages can be customized with the page settings property.

* The [`width`](https://ej2.syncfusion.com/vue/documentation/api/diagram/pageSettings#width-number) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/diagram/pageSettings#height-number) properties of page settings define the size of the page and based on the size, the [`orientation`](https://ej2.syncfusion.com/vue/documentation/api/diagram/pageSettings#orientation-PageOrientation) will be set for the page. In addition to that, the appearance of the page can be customized with [`source`](https://ej2.syncfusion.com/vue/documentation/api/diagram/background#source-string) and set of appearance specific properties.

* The [`color`](https://ej2.syncfusion.com/vue/documentation/api/diagram/background#color-string) property is used to customize the background color and border color of the page.

* The [`margin`](https://ej2.syncfusion.com/vue/documentation/api/diagram/pageSettings#margin-MarginModel) property is used to define the page margin.

* To explore those properties, refer to [`Page Settings`](https://ej2.syncfusion.com/vue/documentation/api/diagram/pageSettings).

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

Stretch and align the background image anywhere over the diagram area. The [`source`](https://ej2.syncfusion.com/vue/documentation/api/diagram/background#source-string) property of [`background`](https://ej2.syncfusion.com/vue/documentation/api/diagram/pageSettings#background-BackgroundModel) allows you to set the path of the image. The [`scale`](https://ej2.syncfusion.com/vue/documentation/api/diagram/background#scale-string) and the [`align`](https://ej2.syncfusion.com/vue/documentation/api/diagram/background#align-ImageAlignment) properties help to stretch/align the background images.

The following code illustrates how to stretch and align the background image.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/page-settings/BGImage-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/page-settings/BGImage-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/page-settings/BGImage-cs1" %}

## Multiple page and page breaks

When multiple page is enabled, the size of the page dynamically increases or decreases in multiples of page width and height and completely fits diagram within the page boundaries. Page breaks is used as a visual guide to see how pages are split into multiple pages.

The [`multiplePage`](https://ej2.syncfusion.com/vue/documentation/api/diagram/pageSettings#multiplepage-boolean) and [`showPageBreak`](https://ej2.syncfusion.com/vue/documentation/api/diagram/pageSettings#showpagebreaks-boolean) properties of page settings allow you to enable/disable multiple pages and page breaks respectively.
The following code illustrates how to enable multiple page and page break lines.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/page-settings/multiplepage-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/page-settings/multiplepage-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/page-settings/multiplepage-cs1" %}

## Boundary constraints

The diagram provides support to restrict/customize the interactive region, out of which the elements cannot be dragged, resized, or rotated. The [`boundaryConstraints`](https://ej2.syncfusion.com/vue/documentation/api/diagram/pageSettings#boundaryconstraints-BoundaryConstraints) property of page settings allows you to customize the interactive region. To explore the boundary constraints, refer to [`Boundary Constraints`](https://ej2.syncfusion.com/vue/documentation/api/diagram/boundaryConstraints).

The following code example illustrates how to define boundary constraints with respect to the page.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/page-settings/boundaryconstraints-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/page-settings/boundaryconstraints-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/page-settings/boundaryconstraints-cs1" %}