---
layout: post
title: Auto generated columns in Vue Grid component | Syncfusion
description: Learn here all about Auto generated columns in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Auto generated columns 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Auto generated columns in Vue Grid component

The [`columns`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/) are automatically generated when
[`columns`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/) declaration is empty or undefined while initializing the grid. All the columns in the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource) are bound as grid columns.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs2" %}

> When the columns are auto-generated then the column [`type`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#type) will be determined from the first record of the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource).

## How to set isPrimaryKey for auto generated columns when editing is enabled

Primary key can be defined in the declaration of column object of the grid. When we didn't declare the columns, the grid will generate the columns automatically. For these auto generated columns, you can set `isPrimaryKey` column property as true by using the following ways,

If Primary key "column index" is known then refer the following code example

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs3" %}

> If Primary key "column fieldname" is known then you can get the column by using `var column = grid.getColumnByField('OrderID')` and then set primary key by defining `column.isPrimaryKey = 'true'`

## Set column options to auto generated columns

You can set column options such as `format`, `width` to the auto generated columns by using `dataBound` event of the grid.

In the below example, `width` is set for `OrderID` column, `date` type is set for `OrderDate` column and `numeric` type is set for `Freight` column.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs4" %}

## How to auto-generate columns from complex column fields to flat columns

By default, the auto-generated columns will create multiple column fields when grid has complex datasource. Hereby using [`ValueAccessor`](https://ej2.syncfusion.com/vue/documentation/api/grid/valueAccessor) property, complex columns data are combined and generated in a single column.

In the below example, we set the **ValueAccessor** property to those columns whose field type is **Object**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/generate-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/generate-cs1" %}
