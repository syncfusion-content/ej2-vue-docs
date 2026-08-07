---
layout: post
title: Vue TreeGrid PDF Cell Style Customization | Syncfusion
description: Learn how to customize PDF cell styles in the Vue TreeGrid, including conditional formatting and theme options for PDF export.
control: Pdf cell style customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# PDF Cell Style Customization in Vue TreeGrid

## Conditional cell formatting

TreeGrid cells in the exported PDF can be customized or formatted using [`pdfQueryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#pdfQueryCellInfo) event. In this event, we can format the treegrid cells of exported PDF document based on the column cell value.

In the below sample, we have set the background color for `Duration` column in the exported document by `args.cell` and `backgroundColor` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/pdf/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/pdf/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/pdf/default-cs2" %}

## Theme

PDF export provides an option to include theme for exported PDF document.

To apply theme in exported PDF, define the `theme` in `exportProperties`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/pdf/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/pdf/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/pdf/default-cs3" %}

> By default, material theme is applied to exported PDF document.