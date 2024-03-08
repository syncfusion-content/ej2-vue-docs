---
layout: post
title: Row and column in Vue Pivotview component | Syncfusion
description: Learn here all about Row and column in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Row and column 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD012 -->

# Row and column in Vue Pivotview component

To learn about how to use the row and column options effectively in the Vue Pivot Table, watch this video:

{% youtube "https://www.youtube.com/watch?v=19VTDjTjYOs" %}

## Width and Height

Allows end user to set the pivot table's height and width by using [`height`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#height) and [`width`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#width) properties in pivot table respectively. The supported formats to set [`height`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#height) and [`width`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#width) properties are,

* Pixel: For example - 100, 200, "100px", "200px".
* Percentage: For example - "100%", "200%".
* Auto: It is applicable for [`height`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#height) property alone in-order to render the pivot table beyond its parent container height without vertical scrollbar. The parent container here would show its vertical scrollbar as soon as the component reaches beyond its dimension.

> The pivot table will not be displayed less than **400px**, since it's the minimum width of the component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs205/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs205" %}


## Row Height

Allows end user to set the height of each pivot table rows commonly using the [`rowHeight`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) property in [`gridSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings).

> By default, the [`rowHeight`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) property is set as **36** pixels for desktop layout and **48** pixels for mobile layout.
> The height of the column headers alone may vary when grouping bar feature is enabled.

In the below code sample, the [`rowHeight`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) property is set as **60** pixels.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs206/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs206" %}

## Column Width

Allows end user to set the width of each pivot table columns commonly using the [`columnWidth`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) property in [`gridSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/gridSettings/).

> By default, the [`columnWidth`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) property is set as **110** pixels to each columns except the first column. For first column, **250** pixels and **200** pixels are set respectively with and without grouping bar.

In the below example, the [`columnWidth`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) property is set as **200** pixels.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs207/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs207" %}

## Reorder

Allows end user to reorder a particular column header from one index to another index within the pivot table through drag-and-drop option. It can be enabled by setting the [`allowReordering`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) property in [`gridSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) to **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs208/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs208" %}

## Column Resizing

Allows end user to resize the columns by clicking and dragging the right edge of the column header. While dragging, the width of the respective column will be resized immediately. To enable column resizing option, set the [`allowResizing`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) property in [`gridSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) to **true**.

> By default, the column resizing option is enabled.
> In RTL mode, user can click and drag the left edge of the header cell to resize the column.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs209/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs209" %}

## Text Wrap

Allows end user to wrap the cell content to the next line when it exceeds the boundary of the cell width. To enable text wrap, set the [`allowTextWrap`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) property in [`gridSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) to **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs210/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs210" %}

## Text Align

Allows end user to align the content of the pivot table's row and column headers and value cells by using the [`textAlign`](https://ej2.syncfusion.com/vue/documentation/api/grid/gridColumn/#textalign) and [`headerTextAlign`](https://ej2.syncfusion.com/vue/documentation/api/grid/gridColumn/#headertextalign) properties in the [`columnRender`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) event under [`gridSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings). The following alignments are:

* `Left` - It allows the content to be positioned on the left.
* `Right` - It allows the content to be positioned on the right.
* `Center` - It allows the content to be positioned in the middle.
* `Justify` - It allows the content to be as flexible as possible, when the cell does not occupy the entire available area.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs211/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs211" %}

## AutoFit

Allows the user to fit the Pivot Table columns as wide as the content of the cell without wrapping. It auto fits all of the Pivot Table columns by invoking the [`autoFitColumns`](https://ej2.syncfusion.com/vue/documentation/api/grid/#autofitcolumns) method from the grid instance.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs212/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs212" %}

> The minimum width of 250 pixels is set by default with the grouping bar UI for the first column and cannot be reduced further. So, when the grouping bar is enabled, one can auto fit the Pivot Table columns by calling the [`autoFitColumns`](https://ej2.syncfusion.com/vue/documentation/api/grid/#autofitcolumns) method from the grid instance with the parameter contained pivot table columns field name excluding first column.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs213/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs213" %}

### Autofit specific columns

During initial rendering, the parameter `autoFit` in the [`columnRender`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) event under [`gridSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) can be set to **true** to auto fit specific columns.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs214/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs214" %}

## Grid Lines

Allows end user to display cell border for each cells using [`gridLines`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) property in [`gridSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings).

Available mode of grid lines are:

| Modes | Actions |
|-------|---------|
| Both | Displays both the horizontal and vertical grid lines.|
| None | No grid lines are displayed.|
| Horizontal | Displays the horizontal grid lines only.|
| Vertical | Displays the vertical grid lines only.|
| Default | Displays grid lines based on the theme.|

> By default, pivot table renders grid lines in **Both** mode.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs215/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs215" %}


## Selection

Selection provides an option to highlight a row or a column or a cell. It can be done through simple mouse down or arrow keys. To enable selection in the pivot table, set the [`allowSelection`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) property in [`gridSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) to **true**.

The pivot table supports two types of selection that can be set using [`type`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) property in [`selectionSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings). The selection types are:

* **Single**: It is set by default, and it only allows selection of a single row or a column or a cell.
* **Multiple**: Allows you to select multiple rows or columns or cells.
To perform multi-selection, press and hold "CTRL" key and click the desired rows or cells. To select range of rows or cells, press and hold the "SHIFT" key and click the rows or columns or cells.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs216/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs216" %}

### Selection Mode

The pivot table supports four types of selection mode that can be set using [`mode`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) in [`selectionSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings). The selection modes are:

* **Row**: It is set by default, and allows user to select only rows.
* **Column**: Allows user to select only columns.
* **Cell**: Allows user to select only cells.
* **Both**: Allows user to select rows and columns at the same time.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs217/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs217" %}

### Cell Selection Mode

The pivot table supports two types of cell selection mode that can be set using [`cellSelectionMode`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) in [`selectionSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings). The cell selection modes are:

* **Flow**: It is set by default. The range of cells are selected between the start index and end index that includes in-between cells of rows.
* **Box**: Range of cells are selected from the start and end column indexes that includes in-between cells of rows within the range.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs218/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs218" %}

> Cell selection requires [`mode`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) property in [`selectionSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) to be **Cell** or **Both**, and [`type`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) property should be **Multiple**.

### Changing background color of the selected cell

The background-color of the selected cell can be changed using built-in CSS names. To do so, please refer to the code sample below, which shows that the selected cells are changed to a **green yellow** color.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs219/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs219" %}

### Event

#### CellSelected

The event `cellSelected` is triggered when cell selection gets completed. It provides selected cells information with its corresponding column and row headers. It has following parameters - `selectedCellsInfo`, `currentCell` and `target`. This event allows user to view selected cells information and user can pass those selected cells information to any external component for data binding.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs220/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs220" %}

#### CellSelecting

The event `cellSelecting` triggers before cell gets selected gets completed. It provides selected cells information with its corresponding column and row headers. It has following parameters - `currentCell`, `data` and `cancel`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs221/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs221" %}

## Clip Mode

The clip mode provides options to display its overflow cell content in the pivot table. It can be configured using the [`clipMode`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) property in [`gridSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings). The pivot table supports three types of clip modes which are:

* **Clip**: Truncates the cell content when it overflows its area.
* **Ellipsis**: Displays ellipsis when the cell content overflows its area.
* **EllipsisWithTooltip**: Displays ellipsis when the cell content overflows its area, also it will display the tooltip while hover on ellipsis is applied.

>By default, [`clipMode`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) value is set to **Ellipsis**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs222/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs222" %}

## Cell Template

User can customize the pivot table cell element by using the `cellTemplate` property in pivot table The `cellTemplate` property accepts either an HTML string or the element's ID, which can be used to append additional HTML elements to showcase each cell with custom format.

To learn about the **Cell Template** in the Vue Pivot Table component, you can watch this video.

{% youtube "https://www.youtube.com/watch?v=6XeuaF6Ev4s&t=227s" %}

In this demo, the revenue cost for each year is represented with trend icons.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/renewableEnergy-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/renewableEnergy-cs3" %}



## Events

### QueryCellInfo

The event `queryCellInfo` triggers while rendering row and value cells in the pivot table. It allows the user to customize the element of the current cell.
It has the following parameters:

* `cell` - it holds the current cell info
* `data` - it holds entire row data
* `column` - it holds column information for the current cell
* `pivotview` - it holds pivot instance

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs223/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs223" %}

### HeaderCellInfo

The event `headerCellInfo` triggers while rendering the header cells in the pivot table. It allows the user to customize the element of the current header cell.
It has the following parameters:

* `node` - it holds the current header cell info

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs224/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs224" %}

### ColumnRender

The event [`columnRender`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) triggers while framing each columns for rendering in the pivot table. It allows the user to customize the text alignment, column visibility, autofit, re-ordering, minimum and maximum width for a specific column. It has the following parameters:

* `columns` - It holds the leaf level columns (i.e., value headers) information.
* `dataSourceSettings` - It holds the current data source settings such as input data source, rows, columns, values, filters, format settings and so on.
* `name` - It holds the name of the event.
* `stackedColumns` - It holds the drilled columns (i.e., including column and value headers) information.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs225/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs225" %}

### CellClick

The event [`cellClick`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#cellclick) triggers while clicking a cell in the pivot table. For instance, using this event end-user can either add or remove styles, edit value and also perform any other DOM manipulations. It has the following parameters:

* `currentCell` - It holds the current cell information.
* `data` - It holds the clicked cell's data like axis, formatted text, actual text, row header, column header and value informations.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs226/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs226" %}