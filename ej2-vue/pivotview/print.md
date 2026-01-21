---
layout: post
title: Print in Vue Pivot Table component | Syncfusion
description: Learn here all about Print in Syncfusion Vue Pivot Table component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Print 
documentation: ug
domainurl: ##DomainURL##
---

# Print in Vue Pivot Table component

The Vue Pivot Table component supports print functionality, allowing users to print the current state of the pivot table or pivot chart. This feature enables users to generate hard copies of pivot table reports for convenient review and data sharing.

## Print pivot table

The rendered pivot table can be printed by invoking the [print](https://ej2.syncfusion.com/vue/documentation/api/grid#print) method from the underlying [`Grid`](https://ej2.syncfusion.com/vue/documentation/grid/getting-started) component instance. The [`Grid`](https://ej2.syncfusion.com/vue/documentation/grid/getting-started) control manages the print functionality and captures the current state of the pivot table, including all applied filters, sorting, and formatting. The sample code below demonstrates how to trigger the print operation using an external button click.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs270/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs270/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs270" %}

## Print pivot chart

To print the pivot chart, use the [print](https://ej2.syncfusion.com/vue/documentation/api/chart#print) method from the underlying [`Chart`](https://ej2.syncfusion.com/vue/documentation/chart/getting-started) component instance. The [`Chart`](https://ej2.syncfusion.com/vue/documentation/chart/getting-started) control manages the print functionality and preserves all visual elements, including colors, legends, and data labels, in the printed output.

> To use pivot chart functionality, inject the `PivotChart` module into the pivot table.

> To display the pivot chart, set the [`displayOption`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#displayoption) property to either **Chart** or **Both**.

The sample code below illustrates how to print the pivot chart through an external button click.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs271/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs271/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs271" %}

## See Also

* [PivotGrid Printing](https://www.syncfusion.com/blogs/post/pivotgrid-printing)