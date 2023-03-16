---
layout: post
title: Excel export in Vue Treegrid component | Syncfusion
description: Learn here all about Excel export in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Excel export 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Excel export in Vue Treegrid component

The excel export allows exporting TreeGrid data to Excel document. You need to use the [`excelExport`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#excelexport) method for exporting. To enable Excel export in the treegrid, set the [`allowExcelExport`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#allowexcelexport-boolean) as true.

To use excel export, You need to inject the `ExcelExport` module in treegrid.

To get start quickly with excel export feature, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=z2yyy2DMI2k" %}

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/excel/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/excel/default-cs8" %}

## Custom data source

The excel export provides an option to define datasource dynamically before exporting. To export data dynamically, define the `dataSource` in `exportProperties`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/excel/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/excel/default-cs9" %}