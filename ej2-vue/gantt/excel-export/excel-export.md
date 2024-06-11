---
layout: post
title: Excel export in Vue Gantt component | Syncfusion
description: Learn here all about Excel export in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Excel export 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Excel export in Vue Gantt component

Gantt supports client-side exporting, which allows you to export its data to the Excel and CSV formats. Use the [`excelExport`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#excelexport) and [`csvExport`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#csvexport) methods for exporting. To enable Excel export in the Gantt, set the [`allowExcelExport`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowexcelexport) to true.

To get a configured Gantt chart Exporting, you can follow the steps outlined in the video linked below:
{% youtube "https://www.youtube.com/watch?v=UOx3TGsL48c" %}

To export data to Excel and CSV, inject the `ExcelExport` module in Gantt.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/excel-export-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/excel-export-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/excel-export-cs2" %}