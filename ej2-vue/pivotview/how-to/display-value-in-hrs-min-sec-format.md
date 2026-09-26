---
layout: post
title: Display values in HH:MM:SS format in Vue Pivot Table | Syncfusion
description: Step-by-step example showing how to display values in HH:MM:SS time format in the Vue Pivot Table by overriding the aggregated value via aggregateCellInfo.
platform: ej2-vue
control: Display string value to pivot table values 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# How to display values in HH:MM:SS format in Vue Pivot Table

The Pivot Table allows users to display custom string values in value cells by using the [`aggregateCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#aggregatecellinfo) event. This is useful when you need to format numeric values into readable strings, such as converting seconds to time format or applying custom formatting rules.

## Converting numeric values to time format

The following example demonstrates how to convert numeric values in the **Sold** field to time format (HH:MM:SS) using the [`aggregateCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#aggregatecellinfo) event. The event provides access to cell data through [`args.cellSets`](https://helpej2.syncfusion.com/vue/documentation/api/pivotview/aggregateEventArgs#cellsets), allowing you to customize the display value based on the underlying data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs267/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs267/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs267" %}
