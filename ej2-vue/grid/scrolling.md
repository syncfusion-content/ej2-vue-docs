---
layout: post
title: Scrolling in Vue Grid component | Syncfusion
description: Learn here all about Scrolling in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Scrolling 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling in Vue Grid component

 The scrollbar will be displayed in the grid when content exceeds the element [`width`](https://ej2.syncfusion.com/vue/documentation/api/grid/#width) or [`height`](https://ej2.syncfusion.com/vue/documentation/api/grid/#height). The vertical and horizontal scrollbars will be displayed based on the following criteria:

* The vertical scrollbar appears when the total height of rows present in the grid exceeds its element height.
* The horizontal scrollbar appears when the sum of columns width exceeds the grid element width.
* The [`height`](https://ej2.syncfusion.com/vue/documentation/api/grid/#height) and [`width`](https://ej2.syncfusion.com/vue/documentation/api/grid/#width) are used to set the grid height and width, respectively.

> The default value for [`height`](https://ej2.syncfusion.com/vue/documentation/api/grid/#height) and [`width`](https://ej2.syncfusion.com/vue/documentation/api/grid/#width) is `auto`.

## Set width and height

To specify the [`width`](https://ej2.syncfusion.com/vue/documentation/api/grid/#width) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/grid/#height) of scroller in pixel, set the pixel value as number.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/scroll/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/scroll/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/scroll/default-cs4" %}

## Responsive with parent container

Specify the [`width`](https://ej2.syncfusion.com/vue/documentation/api/grid/#width) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/grid/#height) as `100%` to make the grid element fill its parent container. Setting the [`height`](https://ej2.syncfusion.com/vue/documentation/api/grid/#height) to `100%` requires the grid parent element to have explicit height.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/scroll/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/scroll/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/scroll/default-cs5" %}

## Sticky Header

You can make the Grid column headers remain fixed while scrolling by using the [`enableStickyHeader`](https://ej2.syncfusion.com/vue/documentation/api/grid/#enablestickyheader) property.

In the below demo, the Grid headers will be sticky while scrolling the Grid's parent div element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/search/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/search/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/search/default-cs1" %}

## Scroll To Selected Row

You can scroll the grid content to the selected row position by using the [`rowSelected`](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowselected) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/scroll/selectrow-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/scroll/selectrow-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/scroll/selectrow-cs1" %}

## Hide the scrollbar when the content is not overflown

You can hide the scrollbar of Grid content by using the [`hideScroll`](https://ej2.syncfusion.com/vue/documentation/api/grid/#hidescroll) method when the content doesn't overflow its parent element.

In the following sample, we have invoked the [`hideScroll`](https://ej2.syncfusion.com/vue/documentation/api/grid/#hidescroll) method inside the [`dataBound`](https://ej2.syncfusion.com/vue/documentation/api/grid/#databound) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/search/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/search/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/search/default-cs2" %}