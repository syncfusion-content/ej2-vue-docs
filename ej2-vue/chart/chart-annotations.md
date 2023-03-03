---
layout: post
title: Chart annotations in Vue Chart component | Syncfusion
description: Learn here all about Chart annotations in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Chart annotations 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Chart annotations in Vue Chart component

Annotations are used to mark the specific area of interest in the chart area with texts, shapes or images.

<!-- markdownlint-disable MD033 -->

You can add annotations to the chart by using the <code>annotations</code> option. By using the [`content`](https://ej2.syncfusion.com/vue/documentation/api/chart/chartAnnotationSettingsModel/#content) option of annotation object, you can specify
the id of the element that needs to be displayed in the chart area.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs1" %}

>Note: To use annotation feature in chart, we need to inject `ChartAnnotation` into the `provide`.

## Region

Annotations can be placed either with respect to `Series` or `Chart`. by default, it will placed with respect
to `Chart`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs2" %}

## Co-ordinate Units

Specified the coordinates units of the annotation either `Pixel` or `Point`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs3" %}

## Alignment

Annotation provides `verticalAlignment` and `horizontalAlignment`. The `verticalAlignment` can be customized
via `Top`, `Bottom` or `Middle` and the `horizontalAlignment` can be customized via `Near`, `Far` or `Center`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs4" %}

## Adding y-axis sub title through on annotation

By setting text div in the `content` option of annotation object you can add sub title to chart y-axis. Specified the `coordinate` value as `pixel` and customize x and y location of the text.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs5" %}