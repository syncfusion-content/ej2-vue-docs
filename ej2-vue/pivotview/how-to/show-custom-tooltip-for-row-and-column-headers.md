---
layout: post
title: Show custom header tooltips in Vue Pivot Table | Syncfusion
description: Step-by-step example showing how to show custom tooltips for row and column headers in the Vue Pivot Table by initializing a Tooltip component in dataBound.
platform: ej2-vue
control: Show tooltip for row and column headers 
documentation: ug
domainurl: ##DomainURL##
---

# How to show custom tooltips for headers in Vue Pivot Table

You can display custom tooltips for row and column headers to provide additional context and information. This approach enhances the user experience by showing detailed field information when hovering over header cells in the pivot table.

## Implementation

To display tooltips for row and column headers, initialize an external [`Tooltip`](https://ej2.syncfusion.com/vue/documentation/tooltip/getting-started) component within the Pivot Table's [dataBound](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#databound) event. This ensures the tooltip is created only once, after the Pivot Table has finished rendering and is ready to interact with its elements. The tooltip targets both row and column header elements using specific CSS selectors: `td.e-rowsheader` for row headers and `th.e-columnsheader` for column headers.

For row header tooltips, the formatted text and field name of the current row header are retrieved from the [`pivotValues`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#pivotvalues) and displayed in the tooltip. For column header tooltips, the text content of the respective column header element is extracted and displayed directly in the tooltip.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs263/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs263/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs263" %}
