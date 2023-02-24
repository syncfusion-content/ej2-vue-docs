---
layout: post
title: Pdf cell style customization in Vue Grid component | Syncfusion
description: Learn here all about Pdf cell style customization in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Pdf cell style customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Pdf cell style customization in Vue Grid component

## Conditional cell formatting

Grid cells in the exported PDF can be customized or formatted using [`pdfQueryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/grid/#pdfquerycellinfo) event. In this event, we can format the grid cells of exported PDF document based on the column cell value.

In the below sample, we have set the background color for **Freight** column in the exported document by **args.cell** and **backgroundColor** property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/pdf/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pdf/default-cs5" %}

## Theme

PDF export provides an option to include theme for exported PDF document.

To apply theme in exported PDF, define the **theme** in [`pdfExportProperties`](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfExportProperties) .

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/pdf/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pdf/default-cs6" %}

> By default, material theme is applied to exported PDF document.