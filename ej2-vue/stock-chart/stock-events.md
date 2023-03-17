---
layout: post
title: Stock events in Vue Stock chart component | Syncfusion
description: Learn here all about Stock events in Syncfusion Vue Stock chart component of Syncfusion Essential JS 2 and more.
control: Stock events 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Stock events in Vue Stock chart component

Stock Events visualizes stock events in stock chart. 'SplineSeries' is used to represent selected data value. You can customize the specific data value using `stockEvents` event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stockchart/stock-events-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/stock-events-cs1" %}

**Stock Events for individual series**

By default, stock events will be showed for all series. Now, you can set the stock events for particular series using `seriesIndexes` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stockchart/stock-events-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/stock-events-cs2" %}
