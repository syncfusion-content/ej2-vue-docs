---
layout: post
title: Excel Export in Vue Gantt Chart Component | Syncfusion
description: Learn all about Excel export in the Syncfusion Vue Gantt Chart component of Essential JS 2.
control: Excel export
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Excel export in Vue Gantt Chart Component

The Gantt Chart component supports client‑side exporting, allowing you to export its data to Excel and CSV formats. Use the [excelExport](https://ej2.syncfusion.com/vue/documentation/api/gantt#excelexport) and [csvExport](https://ej2.syncfusion.com/vue/documentation/api/gantt#csvexport) methods to perform exporting. To enable Excel export, set the [allowExcelExport](https://ej2.syncfusion.com/vue/documentation/api/gantt#allowexcelexport) property to `true`.

To learn how to configure Excel export in the Gantt Chart component, you can follow the steps explained in this video:
{% youtube "https://www.youtube.com/watch?v=UOx3TGsL48c" %}

To export data to Excel or CSV, you must inject the `ExcelExport` module in the Gantt Chart component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/excel-export-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/excel-export-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/excel-export-cs2" %}