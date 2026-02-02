---
layout: post
title: Custom Data Source in Vue Gantt Chart Component | Syncfusion
description: Learn how to use a custom data source in the Syncfusion Vue Gantt Chart component.
control: Custom data source
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Custom data source in Vue Gantt Chart Component

The Excel export feature provides an option to define the data source dynamically before exporting. To export data with a custom data source, define the `dataSource` in the `exportProperties`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/excel-export-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/excel-export-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/excel-export-cs1" %}