---
layout: post
title: Complex column as foreign key column in Vue Grid component | Syncfusion
description: Learn here all about Complex column as foreign key column in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Complex column as foreign key column 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Complex column as foreign key column in Vue Grid component

The following example shows how to set the complex column as foreign key column.

In the following example, `Employee.EmployeeID` is a complex column and also declared as a foreign column which shows `FirstName` column from foreign data.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/foreigncolumn-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/foreigncolumn-cs4" %}

> * For remote data, the sorting and grouping is done based on [`column.foreignKeyField`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#foreignkeyfield) instead of
[`column.foreignKeyValue`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#foreignkeyvalue).
> * If [`column.foreignKeyField`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#foreignkeyfield) is not defined, then the column uses [`column.field`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#field).