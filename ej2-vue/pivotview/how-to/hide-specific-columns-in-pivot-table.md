---
layout: post
title: How to hide specific columns in Vue Pivot Table | Syncfusion
description: Step-by-step example showing how to hide specific columns in the Vue Pivot Table using the columnRender event inside gridSettings to set the column's visible property to false.
platform: ej2-vue
control: Hide specific columns in pivot table 
documentation: ug
domainurl: ##DomainURL##
---

# How to hide specific columns in Vue Pivot Table

By using the [`columnRender`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/gridSettings#columnrender) event in the [`gridSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/gridSettings), you can hide specific column(s) in the pivot table. In the example below, the **"Units Sold"** column under **"FY 2016"** is hidden by setting its **visible** property to **false** via the [`columnRender`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/gridSettings#columnrender) event.

N> The **dot(.)** character in **FY 2016.Units Sold** is used by default to identify the header levels in the pivot table's row and column. It can be changed by setting the [`headerDelimiter`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/valueSortSettingsModel#headerdelimiter) in the [`valueSortSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings#valuesortsettings) property to any other delimiter instead of the default separator.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs264/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs264/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs264" %}