---
layout: post
title: Footer aggregate in Vue Grid component | Syncfusion
description: Learn here all about Footer aggregate in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Footer aggregate 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Footer aggregate in Vue Grid component

Footer aggregate value is calculated from all the rows and it can be displayed in footer cells. Use [`footerTemplate`](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#footertemplate) to render the aggregate value in footer cells.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/aggregates/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates/default-cs2" %}

> The aggregate values must be accessed inside the template using their corresponding [`type`](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#type) name.

## How to format aggregate value

You can format the aggregate value result by using the [`format`](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#format) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/aggregates/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates/default-cs3" %}

## How to place aggregates on top of the Grid

By default, the aggregated values are placed at the bottom of the footer section. It is possible to place the aggregated values at the top of the header. This is achieved by using the [dataBound](https://ej2.syncfusion.com/vue/documentation/api/grid/#databound) event, [getHeaderContent](https://ej2.syncfusion.com/vue/documentation/api/grid/#getheadercontent), and [getFooterContent](https://ej2.syncfusion.com/vue/documentation/api/grid/#getfootercontent) methods of the Grid.

In the following sample, the footer element is appended to the header element using the `getHeaderContent` and `getFooterContent` methods in the `dataBound` event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/aggregates/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates/default-cs4" %}