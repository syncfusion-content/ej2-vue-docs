---
layout: post
title: Export multiple grids in Vue Grid component | Syncfusion
description: Learn here all about Export multiple grids in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Export multiple grids 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Export multiple grids in Vue Grid component

The PDF export provides an option to export multiple grids to the same or different pages of a PDF file. Each grid is identified by its unique ID. You can specify which grid to export by listing their **IDs** in the `exportGrids` property.

## Same page

PDF exporting provides support for exporting multiple grids on the same page. To export the grids on the same page, define `multipleExport.type` as **AppendToPage** in `exportProperties`. It also has an option to provide blank space between the grids. This blank space can be defined by using `multipleExport.blankSpace` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/pdf/multiple-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pdf/multiple-cs1" %}

## New page

PDF export functionality enables the exporting of multiple grids into separate pages (each grid on a new page) within the PDF file. To achieve this, you can specify `multipleExport.type` as **NewPage** in `exportProperties`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/pdf/multiple-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pdf/multiple-cs3" %}
