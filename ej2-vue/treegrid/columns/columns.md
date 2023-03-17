---
layout: post
title: Columns in Vue Treegrid component | Syncfusion
description: Learn here all about Columns in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Columns 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Columns in Vue Treegrid component

The column definitions are used as the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#dataSource) schema in the TreeGrid. This plays a vital role in rendering column values in the required format.
The treegrid operations such as sorting, filtering and searching etc. are performed based on column definitions. The [`field`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#field) property of the [`columns`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#column)
is necessary to map the data source values in TreeGrid columns.

> 1. If the column [`field`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#field) is not specified in the dataSource, the column values will be empty.
> 2. If the [`field`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#field) name contains “dot” operator, it is considered as complex binding.

[`treeColumnIndex`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#treecolumnindex) property denotes the column that is used to expand and collapse child rows.

## Format

To format cell values based on specific culture, use the [`columns.format`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#format) property. The TreeGrid uses [Internalization](../../common/internationalization/) library to format [`number`](../../common/internationalization/#number-formatting) and [`date`](../../common/internationalization/#manipulating-datetime)
values.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/columns/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns/default-cs10" %}

> By default, the [`number`](../../common/internationalization/#number-formatting) and [`date`](../../common/internationalization/#manipulating-datetime) values are formatted in `en-US` locale.

### Number formatting

The number or integer values can be formatted using the below format strings.

Format |Description |Remarks
-----|-----
N | Denotes numeric type. | The numeric format is followed by integer value as N2, N3. etc which denotes the number of precision to be allowed.
C | Denotes currency type. | The currency format is followed by integer value as C2, C3. etc which denotes the number of precision to be allowed.
P | Denotes percentage type | The percentage format expects the input value to be in the range of 0 to 100. For example the cell value `0.2` is formatted as `20%`. The percentage format is followed by integer value as P2, P3. etc which denotes the number of precision to be allowed.

Please refer to the link to know more about [`Number formatting`](../../common/internationalization/#number-formatting).

### Date formatting

You can format date values either using built-in date format string or custom format string.

For built-in date format you can specify [`columns.format`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#format) property as string   (Example: `yMd`). Please refer to the link to know more about [`Date formatting`](../../common/internationalization/#manipulating-datetime).

You can also use custom format string to format the date values. Some of the custom formats and the formatted date values are given in the below table.

Format | Formatted value
-----|-----
{ type:'date', format:'dd/MM/yyyy' } | 04/07/1996
{ type:'date', format:'dd.MM.yyyy' } | 04.07.1996
{ type:'date', skeleton:'short' } | 7/4/96
{ type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' } | 04/07/1996 12:00 AM
{ type: 'dateTime', format: 'MM/dd/yyyy hh:mm:ss a' } | 07/04/1996 12:00:00 AM

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/columns/default-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns/default-cs11" %}

## Lock columns

You can lock columns by using [`column.lockColumn`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#lockcolumn) property. The locked columns will be moved to the first position. Also you can’t reorder its position.

In the below example, duration column is locked and its reordering functionality is disabled.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/columns/default-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns/default-cs12" %}

### Touch interaction

When the right edge of the header cell is tapped, a floating handler will be visible over the right border of the column. To resize the column, tap and drag the floating handler as needed.

The following screenshot represents the column resizing in touch device.

<!-- markdownlint-disable MD033 -->
<img src="/treegrid/images/column-resizing.png" alt="Touch interaction image" style="width:320px;height: 620px">
<!-- markdownlint-enable MD033 -->

## Column type

Column type can be specified using the [`columns.type`](../../api/treegrid/column/#type) property. It specifies the type of data the column binds.

If the [`format`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#format)  is defined for a column, the column uses [`type`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#type) to select the appropriate format option ([number](../../common/internationalization/#number-formatting)
 or [date](../../common/internationalization/#manipulating-datetime)).

TreeGrid column supports the following types:
* string
* number
* boolean
* date
* datetime

> If the [`type`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#type) is not defined, it will be determined from the first record of the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#datasource).

## Checkbox column

To render checkboxes in existing column, you need to set [`columns.showCheckbox`] property as `true`.

It is also possible to select the rows hierarchically using checkboxes in TreeGrid by enabling [`autoCheckHierarchy`] property. When we check on any parent record checkbox then the child record checkboxes will get checked.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/columns/default-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns/default-cs13" %}

## Controlling Tree Grid actions

You can enable or disable treegrid action for a particular column by setting the [`allowFiltering`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#allowfiltering), and [`allowSorting`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#allowsorting) properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/columns/default-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns/default-cs14" %}

## Show/hide columns by external button

You can show or hide treegrid columns dynamically using external buttons by invoking the [`showColumns`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#showcolumns) or [`hideColumns`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#hidecolumns) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/columns/default-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns/default-cs15" %}

## ValueAccessor

The [`valueAccessor`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#valueaccessor) is used to access/manipulate the value of display data. You can achieve custom value formatting by using the [`valueAccessor`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#valueaccessor).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/columns/default-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns/default-cs16" %}

### Display array type columns

You can bind an array of objects in a column by using the [`valueAccessor`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#valueaccessor) property.
In this example, the name field has an array of two objects, FirstName and LastName. These two objects are joined and bound to a column using the
[`valueAccessor`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#valueaccessor).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/columns/default-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns/default-cs17" %}

### Expression column

You can achieve the expression column by using the [`valueAccessor`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#valueaccessor) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/columns/default-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns/default-cs18" %}

## How to render boolean values as checkbox

To render boolean values as checkbox in columns, you need to set [`displayAsCheckBox`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#displayascheckbox) property as `true`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/columns/default-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns/default-cs19" %}