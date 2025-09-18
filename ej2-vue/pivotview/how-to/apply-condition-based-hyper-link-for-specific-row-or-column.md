---
layout: post
title: Vue Pivot Table: Conditional Hyperlinks | Syncfusion
description: Apply conditional hyperlinks to rows or columns in the Syncfusion EJ2 Vue Pivot Table. Dynamically create unique cell links based on values.
control: Apply condition based hyper link for specific row or column 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Conditional Hyperlinks for Specific Rows or Columns

You can apply conditions for specific row or column using `label` option to show hyperlink option in the pivot table. It can be configured using the `conditionalSettings` option through code behind, during initial rendering. The required settings are:

* `label`: Specifies the header name to get visibility of hyperlink option for row or column.
* `condition`: Specifies the operator type such as equals, greater than, less than, etc.
* `value1`: Specifies the start value.
* `value2`: Specifies the end value.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs131/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs131/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs131" %}