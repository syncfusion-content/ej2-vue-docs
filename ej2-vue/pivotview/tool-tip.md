---
layout: post
title: Tool tip in Vue Pivot Table component | Syncfusion
description: Learn here all about Tool tip in Syncfusion Vue Pivot Table component of Syncfusion Essential JS 2 and more.
control: Tool tip 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in Vue Pivot Table Component

The tooltip displays contextual information when users hover over value cells in the pivot table. It can be enabled or disabled by setting the [`showTooltip`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#showtooltip) property to **true** or **false**. By default, tooltip is enabled in the pivot table and shows the cell value along with row and column header information.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs256/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs256/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs256" %}

## Tooltip Template

Users can customize the tooltip in the Pivot Table component by setting the [`tooltipTemplate`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#tooltiptemplate) property with their own HTML elements. This property accepts either an HTML string or an element ID. Use the following placeholders within the HTML to display dynamic values:

- `${rowHeaders}` – Displays the row headers for the selected value cell.
- `${columnHeaders}` – Displays the column headers for the selected value cell.
- `${rowFields}` – Displays the row fields of the selected value cell.
- `${columnFields}` – Displays the column fields of the selected value cell.
- `${valueField}` – Displays the value field name of the selected cell.
- `${aggregateType}` – Specifies the aggregate type of the selected value cell.
- `${value}` – Displays the formatted value of the selected value cell.

Tooltip customization can be applied to both pivot table and pivot chart together, or configured individually. To customize the Pivot Table tooltip, define the HTML template via the [`tooltipTemplate`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#tooltiptemplate) property as described above. To set a custom tooltip for the Pivot Chart only, use the [`template`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/pivotTooltipSettingsModel#template) property within the [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/chartSettings#tooltip) object of the [`chartSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/chartSettings) property.

The example below shows how to define the Pivot Table tooltip template in `index.html` and assign it to the [`tooltipTemplate`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#tooltiptemplate) property. The Pivot Chart tooltip is customized by setting an HTML string in the [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/chartSettings#tooltip) property of [`chartSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/chartSettings).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs257/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs257/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs257" %}