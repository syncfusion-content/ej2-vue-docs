---
layout: post
title: Color mapping in Vue Treemap component | Syncfusion
description: Learn here all about Color mapping in Syncfusion Vue Treemap component of Syncfusion Essential JS 2 and more.
control: Color mapping 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Color mapping in Vue Treemap component

Color mapping is used to customize the color for each group or item based on the specified types. The following options are available to customize the group and leaf items in the TreeMap.

## Range color mapping

Range color mapping is used to apply color to the items by giving specific ranges in the DataSource, and it should be specifying the data source properties to the [`rangeColorValuePath`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#rangecolorvaluepath). The color mapping ranges to be specified in the [`from`](https://ej2.syncfusion.com/vue/documentation/api/treemap/colorMapping/#from) and [`to`](https://ej2.syncfusion.com/vue/documentation/api/treemap/colorMapping/#to) properties of the [`colorMapping`](https://ej2.syncfusion.com/vue/documentation/api/treemap/colorMapping/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs1" %}

## Equal color mapping

Equal color mapping is used to fill colors to each item by specifying equal value present in the data source, that can be specified in the [`equalColorValuePath`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#equalcolorvaluepath) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs2" %}

## Desaturation color mapping

Desaturation color mapping is used to apply colors to the items based on the [`minOpacity`](https://ej2.syncfusion.com/vue/documentation/api/treemap/colorMapping/#minopacity) and [`maxOpacity`](https://ej2.syncfusion.com/vue/documentation/api/treemap/colorMapping/#maxopacity) properties in the [`colorMapping`](https://ej2.syncfusion.com/vue/documentation/api/treemap/colorMapping/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs3" %}

## Palette color mapping

The palette color mapping is used to fill the color to each group or leaf item by given colors in the [`palette`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#palette) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs4" %}

## Desaturation with multiple colors

Multiple colors are used as gradient effect to specific shapes based on the ranges in datasource. By using [`color`](https://ej2.syncfusion.com/vue/documentation/api/treemap/colorMapping/#color) property, you can set n number of colors.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs5" %}

## Color for items excluded from color mapping

Get the excluded ranges from data source using the color mapping and apply the specific color to those items, without specifying the [`from`](https://ej2.syncfusion.com/vue/documentation/api/treemap/colorMapping/#from) and [`to`](https://ej2.syncfusion.com/vue/documentation/api/treemap/colorMapping/#to) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs6" %}

## Bind the colors to the items from data source

To set the color for each item from the data source, bind the data source property to the [`colorValuePath`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#colorvaluepath).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs7" %}