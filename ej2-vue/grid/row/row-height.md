---
layout: post
title: Row height in Vue Grid component | Syncfusion
description: Learn here all about Row height in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Row height 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Row height in Vue Grid component

You can customize the row height of grid rows through the [`rowHeight`](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowheight) property. The `rowHeight` property is used to change the row height of entire grid rows.

In the below example, the `rowHeight` is set as '60px'.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/row/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/default-cs3" %}

## Customize row height for particular row

Grid row height for particular row can be customized using the [`rowDataBound`](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowdatabound) event by setting the `rowHeight` in arguments for each row based on the requirement.

In the below example, the row height for the row with OrderID as '10249' is set as '90px' using the `rowDataBound` event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/row/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/default-cs4" %}

> In virtual scrolling mode, it is not applicable to set the `rowHeight` using the `rowDataBound` event.
