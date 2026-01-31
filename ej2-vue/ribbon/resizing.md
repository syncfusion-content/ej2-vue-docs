---
layout: post
title: Resizing in Vue Ribbon component | Syncfusion
description:  Learn here all about Resizing in Syncfusion Vue Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
--- 

# Ribbon Resizing

The Syncfusion Vue Ribbon component automatically adjusts the layout of its elements when the available space changes. It expands when the container size increases and collapses when it decreases. This resizing behavior is available in both Classic and Simplified modes.Also, we have an option to resize the ribbon elements in the custom order.

*   **Classic Mode**: As the available width decreases, items transition from `Large` to `Medium` to `Small`. The reverse occurs as the width increases.
*   **Simplified Mode**: Items transition between `Medium` and `Small` sizes based on the available space.

## Defining items allowed size

You can use the [allowedSizes](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#allowedsizes) property to maintain a constant size for a specific item. If `allowedSizes` is set, the item will retain its specified size and will not be affected by the Ribbon resizing.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/itemsSize/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/itemsSize/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/itemsSize" %}

## Defining items active size

The [activeSize](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#activesize) property specifies the initial size of a Ribbon item before any resizing occurs. Its default value is `Medium`. During resizing, the component updates this property based on the `allowedSizes` configuration and the available container space.