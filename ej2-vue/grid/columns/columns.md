---
layout: post
title: Columns in Vue Grid component | Syncfusion
description: Learn here all about Columns in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Columns 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Columns in Vue Grid component

The column definitions are used as the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource) schema in the Grid.This plays a vital role in rendering column values in the required format.The grid operations such as sorting, filtering and grouping etc. are performed based on column definitions.
The [`field`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#field) property of the [`columns`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/)
is necessary to map the data source values in Grid columns.

> 1. If the column with [`field`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#field) is not specified in the dataSource, then the column values will be  empty.
> 2. If the [`field`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#field) name contains “dot” operator, it is considered as complex binding.

## Column types

Column type can be specified using the [`columns.type`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#type) property. It specifies the type of data the column binds.

If the [`format`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#format)  is defined for a column,
the column uses [`type`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#type) to select the appropriate format option (`number`
 or `date`).

Grid column supports the following types:
* string
* number
* boolean
* date
* datetime

> If the [`type`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#type) is not defined, then it will be determined from the first record of the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource).
> Incase if the first record of the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource) is null/blank value for a column then it is necessary to define the [`type`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#type) for that column.

## ValueAccessor

The [`valueAccessor`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#valueaccessor) is used to access/manipulate the value of display data.
You can achieve custom value formatting by using [`valueAccessor`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#valueaccessor).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs19" %}

### Display array type columns

You can bind an Array of Objects in a column by using [`valueAccessor`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#valueaccessor) property.
In this example, The Name field has an array of two objects FirstName and LastName. These two objects are joined and bind to a column using [`valueAccessor`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#valueaccessor).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/arraytypecolumn-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/arraytypecolumn-cs1" %}

### Expression column

You can achieve the expression column by using [`valueAccessor`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#valueaccessor) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/expression-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/expression-cs1" %}

## Format

To format cell values based on specific culture, use the [`columns.format`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#format) property. The grid uses `Internalization` library to format `number` and `date` values.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs20" %}

> By default, the `number` and `date` values are formatted in `en-US` locale.

### Number formatting

The number or integer values can be formatted using the below format strings.

Format |Description |Remarks
-----|-----
N | Denotes numeric type. | The numeric format is followed by integer value as N2, N3. etc which denotes the number of precision to be allowed.
C | Denotes currency type. | The currency format is followed by integer value as C2, C3. etc which denotes the number of precision to be allowed.
P | Denotes percentage type | The percentage format expects the input value to be in the range of 0 to 100. For example the cell value `0.2` is formatted as `20%`. The percentage format is followed by integer value as P2, P3. etc which denotes the number of precision to be allowed.

### Date formatting

You can format date values either using built-in date format string or custom format string.

For built-in date format you can specify [`columns.format`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#format) property as string   (Example: `yMd`).

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
{% include code-snippet/grid/column/default-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs21" %}

## Render boolean value as checkbox

To render boolean values as checkbox in columns, you need to set `displayAsCheckBox` property as `true`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs22/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs22" %}

## Visibility

You can hide any particular column in Grid before rendering by defining `visible` property as false. In the below sample `ShipCity` column is defined as visible false.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs23/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs23" %}

## Lock columns

You can lock columns by using [`column.lockColumn`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#lockcolumn) property. The locked columns will be moved to the first position. Also you can’t reorder its position.

In the below example, Ship City column is locked and its reordering functionality is disabled.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs24/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs24" %}

## Controlling Grid actions

You can enable or disable grid action for a particular column by setting the [`allowFiltering`](https://ej2.syncfusion.com/vue/documentation/api/grid/columnModel/#allowfiltering), [`allowGrouping`](https://ej2.syncfusion.com/vue/documentation/api/grid/columnModel/#allowgrouping),[`allowReordering`](https://ej2.syncfusion.com/vue/documentation/api/grid/columnModel/#allowreordering), [`allowEditing`](https://ej2.syncfusion.com/vue/documentation/api/grid/columnModel/#allowediting) and [`allowSorting`](https://ej2.syncfusion.com/vue/documentation/api/grid/columnModel/#allowsorting) properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs25/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs25" %}

## Show or hide columns by external button

You can show or hide the grid columns dynamically through external buttons by invoking the [`showColumns`](https://ej2.syncfusion.com/vue/documentation/api/grid/#showcolumns)/[`hideColumns`](https://ej2.syncfusion.com/vue/documentation/api/grid/#hidecolumns) methods.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs26/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs26" %}

## Customize column styles

You can customize the appearance of header and content of the particular column using the [`customAttributes`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#customattributes) property.

To customize the grid column, follow the given steps:

**Step 1**:

Create a css class with custom style to override the default style for rowcell and headercell.

```
.e-grid .e-rowcell.customcss{
    background-color: #ecedee;
    color: 'red';
    font-family: 'Bell MT';
    font-size: 20px;
}

.e-grid .e-headercell.customcss{
    background-color: #2382c3;
    color: white;
    font-family: 'Bell MT';
    font-size: 20px;
}
```

**Step 2**:

Add the custom css class to particular column by using [`customAttributes`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#customattributes) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/default-cs2" %}

## Display custom tooltip for columns

To display a custom ToolTip ([`EJ2 Tooltip`](../../../tooltip/getting-started)), you can render the Grid control inside the Tooltip component and set the target as `.e-rowcell`. The tooltip is displayed when hovering the grid cells.

Change the tooltip content for the grid cells by using the following code in the [`beforeRender`](https://ej2.syncfusion.com/vue/documentation/api/tooltip/#beforerender) event.

```ts
beforeRender(args) {
  if (args.target.closest("td")) {
  // event triggered before render the tooltip on target element.
    this.$refs.tooltip.content = args.target.innerText;
  }
}
```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/default-cs3" %}

## Align the text of Grid content and header

For aligning the text of Grid content and header part, kindly use [textAlign](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#textalign) and [headerTextAlign](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#headertextalign) properties.

Grid column supports the following alignments:
* Left
* Right
* Center
* Justify

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs27/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs27" %}

## How to prevent checkbox in the blank row

By default, cells in the grid will be blank if the corresponding column values in the data source are null or undefined. The grid also has the option to prevent the rendering of checkboxes in such cases, even if the [displayAsCheckBox](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#displayascheckbox) property is set to true for that column, by using the [rowDataBound](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowdatabound) event of the Grid.

In the following sample, the `rowDataBound` event of the Grid is used to set the innerHTML of the checkbox element to empty.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/blank-row-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/blank-row-cs1" %}

## See Also

* [Group Column by Format](../grouping/#group-by-format)
* [How to set complex column as Foreignkey column](../how-to/complex-column-as-foreign-key-column)
* [Complex Data Binding with list of Array Of Objects](../how-to/list-of-array-of-objects)
* [Custom tooltip for the header in Vue Grid](https://www.syncfusion.com/forums/144654/custom-tooltip-for-the-header-in-vue-grid)
* [Display only multiple field name in one column in Vue Grid](https://www.syncfusion.com/forums/162397/display-only-multiple-field-name-in-one-column-in-vue-grid)