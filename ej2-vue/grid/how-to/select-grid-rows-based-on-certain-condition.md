---
layout: post
title: Select grid rows based on certain condition in Vue Grid component | Syncfusion
description: Learn here all about Select grid rows based on certain condition in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Select grid rows based on certain condition 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Select grid rows based on certain condition in Vue Grid component

You can select the specific row in the grid based on a certain condition by using the [`selectRows`](https://ej2.syncfusion.com/vue/documentation/api/grid/#selectrows) method in the [`dataBound`](https://ej2.syncfusion.com/vue/documentation/api/grid/#databound) event of Grid.

In the below demo, we have selected the grid rows only when `EmployeeID` column value greater than `3`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs48/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs48" %}