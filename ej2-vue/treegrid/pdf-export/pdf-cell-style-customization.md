---
layout: post
title: Pdf cell style customization in Vue Treegrid component | Syncfusion
description: Learn here all about Pdf cell style customization in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Pdf cell style customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Pdf cell style customization in Vue Treegrid component

## Conditional cell formatting

TreeGrid cells in the exported PDF can be customized or formatted using [`pdfQueryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#pdfQueryCellInfo) event. In this event, we can format the treegrid cells of exported PDF document based on the column cell value.

In the below sample, we have set the background color for `Duration` column in the exported document by `args.cell` and `backgroundColor` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/pdf/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/pdf/default-cs2" %}

## Theme

PDF export provides an option to include theme for exported PDF document.

To apply theme in exported PDF, define the `theme` in `exportProperties`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/pdf/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/pdf/default-cs3" %}

> By default, material theme is applied to exported PDF document.