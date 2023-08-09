---
layout: post
title: Print in Vue Pivotview component | Syncfusion
description: Learn here all about Print in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Print 
documentation: ug
domainurl: ##DomainURL##
---

# Print in Vue Pivotview component

The rendered pivot table can be printed directly from the browser by invoking the [`print`](https://ej2.syncfusion.com/vue/documentation/api/grid/#print) method from the grid's instance. The below sample code illustrates the print option being invoked by an external button click.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs270/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs270" %}

Similarly, to print the pivot chart, use the [`print`](https://ej2.syncfusion.com/vue/documentation/api/chart/#print) method from the chart's instance. The below sample code illustrates the print option being invoked by an external button click.

> To use pivot chart, you need to inject the `PivotChart` module in the pivot table.

> To display the pivot chart, set the [`displayOption`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#displayoption) property to either **Chart** or **Both**. 

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs271/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs271" %}