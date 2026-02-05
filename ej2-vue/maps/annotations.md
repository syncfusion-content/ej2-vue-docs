---
layout: post
title: Annotations in Vue Maps component | Syncfusion
description: Learn here all about Annotations in Syncfusion Vue Maps component of Syncfusion Essential JS 2 and more.
control: Annotations 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Annotations in Vue Maps component

Annotations allow marking specific areas of interest on a map by adding custom content such as text, shapes, images, or HTML elements. Unlike markers and data labels, annotations provide flexibility to overlay any custom HTML content at precise locations. Multiple annotations can be added to the Maps component.

## Adding an annotation

The [`content`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel#content) property of [`e-maps-annotation`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel), accepts text content, the ID of an HTML element, or an HTML string to render custom content on the map.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs1" %}

## Annotation customization

### Changing the z-index

The [`zIndex`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel#zindex) property in the [`e-maps-annotation`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel)controls the stack order of annotation elements. A higher z-index value places the annotation above other Maps elements.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs2" %}

### Positioning an annotation

Annotations can be placed anywhere in the Maps by specifying pixel or percentage values to the [`x`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel#x) and [`y`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel#y) properties in the [`e-maps-annotation`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs3" %}

### Alignment of an annotation

Annotations can be aligned using the [`horizontalAlignment`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel#horizontalalignment) and [`verticalAlignment`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel#verticalalignment) properties in the [`e-maps-annotation`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel). The supported values are **Center**, **Far**, **Near**, and **None**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs4" %}

## Multiple annotation

Multiple annotations can be added to the Maps component by defining an array of annotation objects in the [`e-maps-annotation`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel). Each annotation can be customized individually using the [`e-maps-annotation`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs5" %}

## Creating custom annotation templates

Initialize the Maps component with annotation option, text content or ID of an HTML element or an HTML string can be specified to render a new element that needs to be displayed in the Maps by using the [`content`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel#content) property. To specify the content position with [`x`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel#x) and [`y`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel#y) properties as mentioned in the following example.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs41/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs41" %}