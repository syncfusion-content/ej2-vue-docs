---
layout: post
title: Vue Pivot Table: Conditional Formatting | Syncfusion
description: Apply conditional formatting to rows or columns in the Syncfusion EJ2 Vue Pivot Table. Customize cell styles based on values to highlight key data.
control: Apply conditional formatting for specific row or column 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Conditional Formatting for Specific Rows or Columns

You can apply conditional formatting for specific row or column using `label` option in the pivot table. It can be configured using the `conditionalFormatSettings` option through code behind, during initial rendering. The required settings are:

* `label`: Specifies the header name to apply conditions for row or column.
* `conditions`: Specifies the operator type such as equals, greater than, less than, etc.
* `value1`: Specifies the start value.
* `value2`: Specifies the end value.
* `style`: Specifies the style for the cell.

To use the conditional formatting feature, You need to inject the `ConditionalFormatting` module in pivot table.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/pivot_data-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/pivot_data-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/pivot_data-cs6" %}