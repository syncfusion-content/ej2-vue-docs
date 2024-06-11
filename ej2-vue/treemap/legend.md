---
layout: post
title: Legend in Vue Treemap component | Syncfusion
description: Learn here all about Legend in Syncfusion Vue Treemap component of Syncfusion Essential JS 2 and more.
control: Legend 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Legend in Vue Treemap component

<!-- markdownlint-disable MD010 -->
Legend is used to provide valuable information for interpreting what the TreeMap displays. The legends can be represented in various colors, shapes or other identifiers based on the data.

## Position and alignment

Legend position is used to place legend in various positions. Based on the legend position, the legend item will be aligned. For example, if the position is top or bottom, the legend items are placed by rows. If the position is left or right, the legend items are placed by columns.

The following options are available to customize the legend position:

* Top
* Bottom
* Left
* Right
* Float

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs34/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs34/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs34" %}

Legend Alignment is used to align the legend items in specific location. The following options are available to customize the legend alignment:

* Near
* Center
* Far

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs35/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs35/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs35" %}

## Legend mode

The TreeMap control supports two different types of legend rendering modes such as `Default` and `Interactive`.

<!-- markdownlint-disable MD036 -->

### Default mode

In default mode, the legends have symbols with legend labels that are used to identify the items in the TreeMap.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs36/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs36/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs36" %}

<!-- markdownlint-disable MD036 -->

### Interactive mode

The legends can be made interactive with an arrow mark that indicates exact range color in the legend when the mouse hovers on the TreeMap item. Enable this option by setting the [`mode`](https://ej2.syncfusion.com/vue/documentation/api/treemap/legendSettings/#mode) property in the [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/treemap/legendSettings/) to **Interactive**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs37/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs37/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs37" %}

## Legend size

Customize the legend size by modifying the [`height`](https://ej2.syncfusion.com/vue/documentation/api/treemap/legendSettings/#height) and [`width`](https://ej2.syncfusion.com/vue/documentation/api/treemap/legendSettings/#width) properties in the [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/treemap/legendSettings/). It accepts values in both percentage and pixel.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs38/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs38/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs38" %}

### Paging support

TreeMap support legend paging, if the legend items cannot be placed within the provided [`height`](https://ej2.syncfusion.com/vue/documentation/api/treemap/legendSettings/#height) and [`width`](https://ej2.syncfusion.com/vue/documentation/api/treemap/legendSettings/#width) of the legend.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs39/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs39/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs39" %}

## Legend for items excluded from color mapping

Based on the mapping ranges in the data source, get the excluded ranges from the color mapping, and show the legend with the excluded range values that are bound to the specific legend.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs40/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs40/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs40" %}

## Hide desired legend items

To enable or disable the desired legend item for each color mapping, set the [`showLegend`](https://ej2.syncfusion.com/vue/documentation/api/treemap/colorMapping/#showlegend) property to **true** in the [`colorMapping`](https://ej2.syncfusion.com/vue/documentation/api/treemap/colorMapping/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs41/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs41/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs41" %}

## Hide legend items based data source value

To enable or disable the legend visibility for each item through the data source, bind the appropriate data source field name to [`showLegendPath`](https://ej2.syncfusion.com/vue/documentation/api/treemap/legendSettings/#showlegendpath) property in the [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/treemap/legendSettings/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs42/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs42/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs42" %}

## Bind legend item text from data source

To show the legend item text from the data source, bind the property name from data source to the [`valuePath`](https://ej2.syncfusion.com/vue/documentation/api/treemap/legendSettings/#valuepath) property in the [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/treemap/legendSettings/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs43/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs43/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs43" %}

## Hide duplicate legend items

To enable or disable the duplicate legend items, set the [`removeDuplicateLegend`](https://ej2.syncfusion.com/vue/documentation/api/treemap/legendSettings/#removeduplicatelegend) property to **true** in the [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/treemap/legendSettings/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs44/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs44/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs44" %}

## Legend Responsiveness

Use a responsive legend that switches positions between the right and the bottom based on the available height and width. To enable the responsive legend, set the [`position`](https://ej2.syncfusion.com/vue/documentation/api/treemap/legendSettings/#position) property to **Auto** in the [`legendSettings`](https://ej2.syncfusion.com/vue/documentation/api/treemap/legendSettings/) and the legend position is changed based on the available height and width.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs45/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs45/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs45" %}