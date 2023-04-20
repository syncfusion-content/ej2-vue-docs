---
layout: post
title: Hyper link in Vue Pivotview component | Syncfusion
description: Learn here all about Hyper link in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Hyper link 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Hyper link in Vue Pivotview component

The pivot table allows you to show hyperlink option to the link data for individual cells that display in the pivot table. Also, the hyperlink can be enabled separately for row header, column header, value, and summary cells using the `hyperlinkSettings`. It can be configured through code behind, during initial rendering. The settings available to show hyperlink to the cells are:

* `showHyperlink`: It allows to set the visibility of hyperlink in all cells.
* `showRowHeaderHyperlink`: It allows to set the visibility of hyperlink in row headers.
* `showColumnHeaderHyperlink`: It allows to set the visibility of hyperlink in column headers.
* `showValueCellHyperlink`: It allows to set the visibility of hyperlink in value cells.
* `showSummaryCellHyperlink`: It allows to set the visibility of hyperlink in summary cells.
* `headerText`: It allows to set the visibility of hyperlink based on header text.
* `conditionalSettings`: It allows to set the visibility of hyperlink based on specific condition.

> By default, the hyperlink options are disabled for all cells in the pivot table.

## Hyperlink for all cells

The pivot table has an option to show hyperlink option to all the cells that are currently displaying. To show hyperlink option, you need to set `showHyperlink` to **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs143/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs143" %}

## Hyperlink for row headers

The pivot table has an option to show hyperlink option to row header cells that are currently displaying. To show hyperlink option for row headers alone, you need to set `showRowHeaderHyperlink` to **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs144/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs144" %}

## Hyperlink for column headers

The pivot table has an option to show hyperlink option to columns header cells that are currently displaying. To show hyperlink option for column headers alone, you need to set `showColumnHeaderHyperlink` to **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs145/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs145" %}

## Hyperlink for value cells

The pivot table has an option to show hyperlink option to value cells that are currently displaying. To show hyperlink option for values alone, you need to set `showValueCellHyperlink` to **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs146/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs146" %}

## Hyperlink for summary cells

The pivot table has an option to show hyperlink option to summary value cells that are currently displaying. To show hyperlink option for summary values alone, you need to set `showSummaryCellHyperlink` to **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs147/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs147" %}

## Condition based hyperlink

The pivot table has an option to show hyperlink option to the cells based on specific conditions. It can be configured using the `conditionalSettings` option through code behind, during initial rendering. The settings required to sort are:

* `measure`: Specifies the value field name to get visibility of hyperlink option for specific measure.
* `conditions`: Specifies the operator type such as equals, greater than, less than, etc.
* `value1`: Specifies the start value.
* `value2`: Specifies the end value.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs148/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs148" %}

## Header based hyperlink

The pivot table has an option to show hyperlink option to the cells based on specific row or column. It can be configured using the `headerText` option through code behind, during initial rendering.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs149/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs149" %}

## Event

The event [`hyperlinkCellClick`](https://ej2.syncfusion.com/vue/documentation/api/pivotview#hyperlinkcellclick) fires on every hyperlink cell click.

It has following parameters - `Cancel` and `CurrentCell`. The parameter `CurrentCell` is used to customize the host cell element by any means. Meanwhile, when the parameter `Cancel` is set to **true**, applied customization will not be updated to the host cell element.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs150/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs150" %}

## See Also

* [Apply condition based hyperlink for specific row or column](./how-to/apply-condition-based-hyper-link-for-specific-row-or-column)