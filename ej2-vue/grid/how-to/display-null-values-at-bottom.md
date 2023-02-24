---
layout: post
title: Display null values at bottom in Vue Grid component | Syncfusion
description: Learn here all about Display null values at bottom in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Display null values at bottom 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Display null values at bottom in Vue Grid component

By default the null values are displayed at bottom of the Grid row while perform sorting in ascending order. As well as this values are displayed at top of the Grid row while perform sorting with descending order. But you can customize this default order to display the null values at always bottom row of the Grid by using [`column.sortComparer`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#sortcomparer) method.

In the below demo we have displayed the null date values at bottom of the Grid row while sorting the **OrderDate** column in both ways.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/null-date-value-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/null-date-value-cs1" %}
