---
layout: post
title: Auto fit columns in Vue Grid component | Syncfusion
description: Learn here all about Auto fit columns in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Auto fit columns 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Auto fit columns in Vue Grid component

The [`autoFitColumns`](https://ej2.syncfusion.com/vue/documentation/api/grid/#autofitcolumns) method resizes the column to fit the widest cell's content without wrapping. You can autofit specific columns at initial rendering by invoking the [`autoFitColumns`](https://ej2.syncfusion.com/vue/documentation/api/grid/#autofitcolumns) method in [`dataBound`](https://ej2.syncfusion.com/vue/documentation/api/grid/#databound) event.

To autofit a column, you need to inject `Resize` module in the `provide` section.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs1" %}

> You can autofit all columns, by invoking the [`autoFitColumns`](https://ej2.syncfusion.com/vue/documentation/api/grid/#autofitcolumns) method without column name.