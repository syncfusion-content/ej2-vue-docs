---
layout: post
title: Add params for filtering in Vue Grid component | Syncfusion
description: Learn here all about Add params for filtering in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Add params for filtering 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Add params for filtering in Vue Grid component

You can customize the default settings of the components which are used in Menu filter by using params of filter property in column definition.

In the below sample, OrderID and Freight Columns are numeric columns, while open the filter dialog then you can see that NumericTextBox with spin button is displayed to change/set the filter value. Now using the params option we hide the spin button in NumericTextBox for OrderID Column.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/filter/default-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter/default-cs12" %}