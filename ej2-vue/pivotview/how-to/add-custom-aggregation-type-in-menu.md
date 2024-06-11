---
layout: post
title: Add custom aggregation type to the menu in Vue Pivotview component | Syncfusion
description: Learn here all about how to add custom aggregation type to the menu in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Add custom aggregation type to the menu 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# Add custom aggregation type to the menu in Vue Pivotview component

By using the [`dataBound`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#databound) event, you can add your own custom aggregate type(s) to the pivot table's aggregate menu.

In the following example, we have added the aggregation types **CustomAggregateType 1** and **CustomAggregateType 2** to the aggregate menu. The calculation for those aggregated types can be done using the [`aggregateCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#aggregatecellinfo) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs266/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs266/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs266" %}