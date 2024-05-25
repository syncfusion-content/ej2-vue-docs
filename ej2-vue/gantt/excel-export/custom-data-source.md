---
layout: post
title: Custom data source in Vue Gantt component | Syncfusion
description: Learn here all about Custom data source in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Custom data source 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Custom data source in Vue Gantt component

The excel export provides an option to define datasource dynamically before exporting. To export data dynamically, define the `dataSource` in `exportProperties`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/excel-export-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/excel-export-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/excel-export-cs1" %}