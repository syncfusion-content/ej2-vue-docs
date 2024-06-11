---
layout: post
title: Columns in Vue Gantt component | Syncfusion
description: Learn here all about Columns in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Columns 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Columns in Vue Gantt component

The column displays information from a bound data source, and you can edit the values of column to update the task details through TreeGrid. The operations such as sorting, filtering, and searching can be performed based on column definitions. To display a Gantt column, the [`field`](https://ej2.syncfusion.com/vue/documentation/api/gantt/column/#field) property should be mapped from the data source to the column.

> If the column [`field`](https://ej2.syncfusion.com/vue/documentation/api/gantt/column/#field) is not specified in the dataSource, the column values will be empty.

The [`treeColumnIndex`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#treecolumnindex) property is used to define the expander column in the Gantt component to expand and collapse the child rows.

To learn about Gantt Chart Customize Column Data, you can check on this video:
{% youtube "https://www.youtube.com/watch?v=LvB4lvlm1J8" %}

## Defining columns

Using the [`columns`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#columns) property, you can define the columns in Gantt. If the columns are not defined, then the default columns will be rendered based on the mapped data source fields in the [`taskFields`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#taskfields) property. Refer to the following code example for defining the columns in Gantt along with their widths.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/columns-cs14/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/columns-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/columns-cs14" %}

## Custom column header

The column header text can be defined using the [`headerText`](https://ej2.syncfusion.com/vue/documentation/api/gantt/column/#headertext) property, and you can customize the column headers using the [`headerTemplate`](https://ej2.syncfusion.com/vue/documentation/api/gantt/column/#headertemplate) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/columns-cs15/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/columns-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/columns-cs15" %}

## Format

To format the cell values based on a specific culture, use the [`columns.format`](https://ej2.syncfusion.com/vue/documentation/api/gantt/column/#format) property. The Gantt component uses the [`Internationalization`](../../common/internationalization/) library to format `number` and `date` values.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/columns-cs16/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/columns-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/columns-cs16" %}

> By default, the number and date values are formatted in `en-US` culture.

### Number formatting

The number or integer values can be formatted using the following format strings.

Format |Description |Remarks
-----|-----
N | Denotes numeric type. | The numeric format is followed by an integer value like N2 or N3, which denotes the number of precisions to be allowed.
C | Denotes currency type. | The currency format is followed by an integer value like C2 or C3, which denotes the number of precisions to be allowed.
P | Denotes percentage type | The percentage format expects the input value to be in the range of 0 to 100. For example, the cell value `0.2` is formatted as `20%`. The percentage format is followed by an integer value like P2, P3, which denotes the number of precisions to be allowed.

### Date formatting

You can format date values either using built-in date format string or custom format string.

For the built-in date format, you can specify the [`columns.format`](https://ej2.syncfusion.com/vue/documentation/api/gantt/column/#format) property as string (example: `yMd`).

You can also use the custom format string to format the date values. Some of the custom formats and the formatted date values are given in the following table.

Format | Formatted value
-----|-----
{ type:'date', format:'dd/MM/yyyy' } | 04/07/1996
{ type:'date', format:'dd.MM.yyyy' } | 04.07.1996
{ type:'date', skeleton:'short' } | 7/4/96
{ type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' } | 04/07/1996 12:00 AM
{ type: 'dateTime', format: 'MM/dd/yyyy hh:mm:ss a' } | 07/04/1996 12:00:00 AM

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/columns-cs17/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/columns-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/columns-cs17" %}

## Change tree/expander column

The tree/expander column is a column in the Gantt component, that has icons to expand or collapse the parent records. You can define the tree column index in the Gantt component by using the [`treeColumnIndex`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#treecolumnindex) property and the default value of this property is `0`. The following code example shows how to use this property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/columns-cs19/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/columns-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/columns-cs19" %}

## Show or Hide columns dynamically

You can show or hide gantt columns dynamically using external buttons by invoking the [`showColumn`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#showcolumn) or [`hideColumn`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#hidecolumn) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/columns-cs20/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/columns-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/columns-cs20" %}

## Controlling Gantt column actions

You can enable or disable gantt action for a particular column by setting the [`allowFiltering`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowfiltering), [`allowSorting`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowsorting), [`allowReordering`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowreordering),and [`allowEditing`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#editsettings) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/columns-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/columns-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/columns-cs2" %}

## Column type

Column type can be specified using the `columns.type` property. It specifies the type of data the column binds.

If the `format` is defined for a column, the column uses `type` to select the appropriate format option [number](https://ej2.syncfusion.com/vue/documentation/common/internationalization/#number-formatting) or [date](https://ej2.syncfusion.com/vue/documentation/common/internationalization/#manipulating-datetime).

Gantt column supports the following types:
* string
* number
* boolean
* date
* datetime

> If the `type` is not defined, it will be determined from the first record of the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#datasource).
> In case if the first record of the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#datasource) is null/blank value for a column then it is necessary to define the `type` for that column.