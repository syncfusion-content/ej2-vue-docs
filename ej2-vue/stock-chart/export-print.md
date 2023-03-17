---
layout: post
title: Export print in Vue Stock chart component | Syncfusion
description: Learn here all about Export print in Syncfusion Vue Stock chart component of Syncfusion Essential JS 2 and more.
control: Export print 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Export print in Vue Stock chart component

The rendered stock chart can be exported to `JPEG`, `PNG`, `SVG`, or `PDF` format using the export dropdown button in the period selector toolbar. You can choose the required format using the export dropdown button in stock-chart.

The rendered stock chart can be printed directly using print button in period selector toolbar.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stockchart/export-print-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/export-print-cs1" %}

## Disable Export and print

To empty the value of `exportType` for to disable the Export button.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stockchart/export-print-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/export-print-cs2" %}