---
layout: post
title: Excel cell style customization in Vue Treegrid component | Syncfusion
description: Learn here all about Excel cell style customization in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Excel cell style customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Excel cell style customization in Vue Treegrid component

## Conditional cell formatting

TreeGrid cells in the exported Excel can be customized or formatted using [`excelQueryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#excelQueryCellInfo) event. In this event, we can format the treegrid cells of exported PDF document based on the column cell value.

In the below sample, we have set the background color for `Duration` column in the exported excel by `args.cell` and `backgroundColor` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/excel/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/excel/default-cs2" %}

## Theme

The excel export provides an option to include theme for exported excel document.

To apply theme in exported Excel, define the `theme` in `exportProperties`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/excel/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/excel/default-cs3" %}

>By default, material theme is applied to exported excel document.