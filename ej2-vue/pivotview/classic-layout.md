---
layout: post
title: Classic layout in Vue Pivotview component | Syncfusion
description: Learn here all about Classic layout in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Classic Layout
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Classic Layout in Vue Pivot Table component

N> This feature is applicable only to relational data sources.

The classic layout in the Syncfusion<sup style="font-size:70%">&reg;</sup> Pivot Table offers a structured, tabular presentation of data, improving both readability and usability. In this layout, fields in the row axis are displayed side by side in separate columns, making data interpretation and analysis easier. By default, grand totals appear at the end of all rows, while subtotals are placed in a separate row beneath each group. All other features of the pivot table, such as filtering, sorting, drag-and-drop, expand/collapse functionality, and more, remain the same as in the compact layout, which serves as the default hierarchical format of the pivot table.

To enable the classic layout, set the [layout](https://ej2.syncfusion.com/vue/documentation/api/pivotview/gridSettings/#layout) property in the [gridSettings](https://ej2.syncfusion.com/vue/documentation/api/pivotview/gridSettings/) of the Pivot Table to **Tabular**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/classic-layout-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/classic-layout-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/classic-layout-cs1" %}

**Limitations**

* Subtotals at the "Top" position are not supported for row subtotals.