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

Annotations are used to mark the specific area of interest in the Maps with texts, shapes, or images. Any number of annotations can be added to the Maps component.

## Annotation

By using the [`content`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel/#content) property of [`e-maps-annotation`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel/), text content or id of an element or an HTML string can be specified to render a new HTML element in Maps.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs1" %}

## Annotation customization

### Changing the z-index

The stack order of an annotation element can be changed using the [`zIndex`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel/#zindex) property in the [`e-maps-annotation`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel/).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs2" %}

### Positioning an annotation

Annotations can be placed anywhere in the Maps by specifying pixel or percentage values to the [`x`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel/#x) and [`y`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel/#y) properties in the [`e-maps-annotation`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel/).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs3" %}

### Alignment of an annotation

Annotations can be aligned using the [`horizontalAlignment`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel/#horizontalalignment) and [`verticalAlignment`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel/#verticalalignment) properties in the [`e-maps-annotation`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel/). The possible values can be **Center**, **Far**, **Near** and **None**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs4" %}

## Multiple Annotation

Multiple annotations can be added to the Maps by adding multiple [`e-maps-annotation`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel/) in the [`e-maps-annotation`](https://ej2.syncfusion.com/vue/documentation/api/maps/#annotations) and customization for the annotations can be done with the [`e-maps-annotation`](https://ej2.syncfusion.com/vue/documentation/api/maps/annotationModel/).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs5" %}