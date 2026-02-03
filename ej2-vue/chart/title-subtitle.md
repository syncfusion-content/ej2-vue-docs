---
layout: post
title: Chart title in Vue Chart component | Syncfusion
description: Learn here all about Chart title in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Chart title
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Title and Subtitle in Vue Chart Component

Chart titles and subtitles help provide context for the visualized data. The title typically indicates the main subject or metric represented in the chart, while the subtitle adds supporting details such as data sources, time ranges, or explanatory notes. Both elements can be customized in terms of position, alignment, and style to align with application design requirements.

## Chart title

Add a chart title using the [`title`](https://ej2.syncfusion.com/vue/documentation/api/chart/chartModel#title)  property. The title appears at the top of the chart by default and is used to describe the purpose or subject of the visualization.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/chart-title-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/chart-title-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-title-cs5" %}

### Title position

Use the [`position`](https://ej2.syncfusion.com/vue/documentation/api/chart/titleSettings#position) property within [`titleStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart/chartModel#titlestyle) to place the title at the left, right, top, or bottom of the chart. The default position is at the top.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/chart-title-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/chart-title-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-title-cs8" %}

To manually position the title anywhere within the chart, use the [`x`](https://ej2.syncfusion.com/vue/documentation/api/chart/titleSettings#x) and [`y`](https://ej2.syncfusion.com/vue/documentation/api/chart/titleSettings#y) coordinates.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/chart-title-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/chart-title-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-title-cs9" %}

### Title alignment

Align the chart title to the near, center, or far side of the chart using the [`textAlignment`](https://ej2.syncfusion.com/vue/documentation/api/chart/titleSettings#textalignment) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/chart-title-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/chart-title-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-title-cs10" %}

## Chart subTitle

Chart can be given a subtitle using [`subTitle`](https://ej2.syncfusion.com/vue/documentation/api/chart/chartModel#subtitle) property, to show the information about the data plotted.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/chart-title-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/chart-title-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-title-cs6" %}

### Title wrap

Chart can be given a title using [`title`](https://ej2.syncfusion.com/vue/documentation/api/chart/chartModel#title) property, to show the information about the data plotted.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/chart-title-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/chart-title-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-title-cs7" %}