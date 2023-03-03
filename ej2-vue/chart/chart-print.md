---
layout: post
title: Chart print in Vue Chart component | Syncfusion
description: Learn here all about Chart print in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Chart print 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Chart print in Vue Chart component

## Print

The rendered chart can be printed directly from the browser by calling the public method print. You can pass array of ID of elements or element to this method. By default it take element of the chart.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/polar-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs1" %}

## Export

The rendered chart can be exported to `JPEG`, `PNG`, `SVG`, or `PDF` format using the export method in chart. The input parameters for this method are `Export Type` for format and `fileName` for result.

* `height` - height of chart export.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/polar-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs2" %}

## Multiple Chart Export

You can export the multiple charts in single page by passing the multiple chart objects in the export
method of chart.

To export multiple charts in a single page, follow the given steps:

**Step 1**:

Initially, render more than one chart to export, and then add button to export the multiple charts. In
button click, call the export private method in charts, and then pass the multiple chart objects in the
export method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs12" %}