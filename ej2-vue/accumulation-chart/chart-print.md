---
layout: post
title: Chart print in Vue Accumulation chart component | Syncfusion
description: Learn here all about Chart print in Syncfusion Vue Accumulation chart component of Syncfusion Essential JS 2 and more.
control: Chart print 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Chart print in Vue Accumulation chart component

## Print

The rendered chart can be printed directly from the browser by calling the public method print.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/radius-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/radius-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/radius-cs1" %}

## Export

The rendered chart can be exported to `Image`(jpeg or png) or `SVG` or `PDF` format by using the export method.
Input parameters for this method are `Export` Type for `format` and `fileName` of result.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/radius-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/radius-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/radius-cs2" %}