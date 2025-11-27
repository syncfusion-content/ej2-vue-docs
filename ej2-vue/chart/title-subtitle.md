---
layout: post
title: Chart title in Vue Chart component | Syncfusion
description: Learn here all about Chart title in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Chart title
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Title and Subtitle in Vue Chart component

## Chart title

Chart can be given a title using [`title`](https://ej2.syncfusion.com/vue/documentation/api/chart/chartModel#title) property, to show the information about the data plotted.

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

By using the [`position`](https://ej2.syncfusion.com/vue/documentation/api/chart/titleSettings#position) property in [`titleStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart/chartModel#titlestyle), you can position the [`title`](https://ej2.syncfusion.com/vue/documentation/api/chart/chartModel#title) at left, right, top or bottom of the chart. The title is positioned at the top of the chart, by default.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/chart-title-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/chart-title-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-title-cs8" %}

* The custom option helps you to position the title anywhere in the chart using [`x`](https://ej2.syncfusion.com/vue/documentation/api/chart/titleSettings#x) and [`y`](https://ej2.syncfusion.com/vue/documentation/api/chart/titleSettings#y) coordinates.

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

You can align the title to the near, far, or center of the chart using the [`textAlignment`](https://ej2.syncfusion.com/vue/documentation/api/chart/titleSettings#textalignment) property.

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