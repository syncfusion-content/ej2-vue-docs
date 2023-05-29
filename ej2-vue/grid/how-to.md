---
layout: post
title: How to in Vue Grid component | Syncfusion
description: Learn here all about How to in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: How to 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to in Vue Grid component

<!--markdownlint-disable MD009-->

## Register the Grid using Vue.Component

Import the `GridComponent` from the `@syncfuion/ej2-vue-grids` package,register the same using the `Vue.component()` with name of the grid selector and the GridComponent as its arguments.

Refer to the code example given below.

```ts
import { GridComponent } from '@syncfusion/ej2-vue-grids';

Vue.component('ejs-grid', GridComponent);
```

Using `Vue.component` will register the grid component alone. Child directives such as `Columns` and `Aggregates` need to be registered separately.

Refer to the code example given below to register column directives

```ts
import { ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-vue-grids';

Vue.component('e-columns', ColumnsDirective);
Vue.component('e-column', ColumnDirective);
```

Refer to the code example given below to register aggregates directives

```ts
import { AggregatesDirective, AggregateDirective, AggregateColumnsDirective, AggregateColumnDirective } from '@syncfusion/ej2-vue-grids';

Vue.component('e-aggregates', AggregatesDirective);
Vue.component('e-aggregate', AggregateDirective);
Vue.component('e-columns', AggregateColumnsDirective);
Vue.component('e-column', AggregateColumnDirective);
```

## How to Refresh the Datasource

You can add/delete the datasource records through an external button. To reflect the datasource changes in grid, you need to invoke the [`refresh`](https://ej2.syncfusion.com/vue/documentation/api/grid/#refresh) method.

Please follow the below steps to refresh the grid after datasource change.

**Step 1**:

Add/delete the datasource record by using the following code.

```ts
    this.data.unshift(customData); // Add a new record.

    this.data.splice(selectedRow, 1); // Delete a record.
```

**Step 2**:

When applied the changes in dataSource then refresh Grid at own.

```ts
    this.data = [...this.data]; // Refresh the Grid dataSource.
```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/default-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/default-cs11" %}

## Enable/Disable Grid and its actions

You can enable/disable the Grid and its actions by applying/removing corresponding CSS styles.

To enable/disable the grid and its actions, follow the given steps:

**Step 1**:

Create CSS class with custom style to override the default style of Grid.

```
    .disablegrid {
        pointer-events: none;
        opacity: 0.4;
    }
    .wrapper {
        cursor: not-allowed;
    }

```

**Step 2**:

Add/Remove the CSS class to the Grid in the click event handler of Button.

```ts
    btnClick(args) {
      if (this.$refs.Grid.$el.classList.contains('disablegrid')) {
          this.$refs.Grid.$el.classList.remove('disablegrid');
          document.getElementById("GridParent").classList.remove('wrapper');
      }
      else {
          this.$refs.Grid.$el.classList.add('disablegrid');
          document.getElementById("GridParent").classList.add('wrapper');
      }
    }

```

In the below demo, the button click will enable/disable the Grid and its actions.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs37/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs37" %}

## Columns

### Customize Column Styles

You can customise the appearance of header and content of the particular column using the
[`customAttributes`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#customattributes) property.

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
{% include code-snippet/grid/how-to/default-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/default-cs12" %}

### Custom Tooltip for Columns

You can achieve the custom tooltip([`EJ2 Tooltip`](../../tooltip/getting-started)) for Grid by using the
[`queryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/grid/#querycellinfo) event.

Render the ToolTip component for the grid cells by using the following code in the
[`queryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/grid/#querycellinfo) event.

```ts
tooltip (args) {
    let tooltip = new Tooltip({
        content: args.data[args.column.field].toString();
    }, args.cell);
}
```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/default-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/default-cs13" %}

### Render other components in a column

You can render any component in a grid column using the [`template`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/dropdown-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/dropdown-cs2" %}

### How to change the Orientation of Header Text

You can change the orientation of the header text by using the [`customAttributes`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#customattributes) property.

To change the Orientation of Header Text, Ensure the following steps:

**Step 1**:

Create a css class with orientation style for grid header cell.

```
.orientationcss .e-headercelldiv {
    transform: rotate(90deg);
}
```

**Step 2**:

Add the custom css class to particular column by using [`customAttributes`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#customattributes) property.

```
    <e-column field='Freight' headerText='Freight' textAlign='Center' format='C2' :customAttributes='customAttributes' width=80></e-column>
```

**Step 3**:

Resize the header cell height by using the following code.

```ts
setHeaderHeight(args) {
    let textWidth = document.querySelector(".orientationcss > div").scrollWidth;//Obtain the width of the headerText content.
    let headerCell = document.querySelectorAll(".e-headercell");
    for(let i = 0; i < headerCell.length; i++) {
       (headerCell.item(i)).style.height = textWidth + 'px'; //Assign the obtained textWidth as the height of the headerCell.
    }
}

```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/default-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/default-cs14" %}

### Customize the icon for column menu

You can customize the column menu icon by overriding the default grid class `.e-icons.e-columnmenu` with a custom property `content` as mentioned below,

```
.e-grid .e-columnheader .e-icons.e-columnmenu::before {
              content: "\e941";
      }
```

In the below sample, grid is rendered with a customized column menu icon.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/default-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/default-cs15" %}

### How to get grid column instance in column template

You can emit values from one component and listen emitted values in other component by using `eventHub`. `eventHub` is a global event bus used to communicate between any components.

In the below example, we have defined template column in grid column definition which emits a value and listen the emitted value in `created` event of the grid component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/template-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/template-cs3" %}

## Editing

### Editing with template column

You can edit template column value by defining `field` for that particular column.

In the below demo, the `ShipCountry` column is rendered with the template.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/default-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/default-cs16" %}

### Customize the Edit Dialog

You can customize the appearance of the edit dialog in the [`actionComplete`](https://ej2.syncfusion.com/vue/documentation/api/grid/#actioncomplete) event based on `requestType` as `beginEdit` or `add`.

In the below example, we have changed the dialog's header text for editing and adding records.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs38/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs38" %}

### Show or Hide columns in Dialog editing

You can show hidden columns or hide visible column's editor in the dialog while editing the grid record using [`actionBegin`](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionbegin) and [`actionComplete`](https://ej2.syncfusion.com/vue/documentation/api/grid/#actioncomplete) events.

In the `actionBegin` event, based on `requestType` as `beginEdit` or  `add`. We can show or hide the editor by using `column.visible` property.

In the `actionComplete` event, based on `requestType` as `save`. We can reset the properties back to the column state.

In the below example, we have rendered the grid columns `CustomerID` as hidden column and `ShipCountry` as visible column. In the edit mode, we have changed the `CustomerID` column to visible state and `ShipCountry` column to hidden state.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs39/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs39" %}

### Cascading DropDownList with Grid editing

You can achieve the Cascading DropDownList with grid Editing by using the Cell Edit Template feature.

In the below demo, Cascading DropDownList rendered for `ShipCountry` and `ShipState` column.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/default-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/default-cs17" %}

### Provide custom data source and enabling filtering to DropDownList

You can provide data source to the DropDownList by using the `columns.edit.params` property.

While setting new data source using edit params, you must specify a new `query` property too for the DropDownList as follows,

```ts
countryParams: {
          params:   {
            allowFiltering: true,
            dataSource: country,
            fields: {text:"countryName",value:"countryName"},
            query: new Query(),
            actionComplete: () => false
            }
      };
```

You can also enable filtering for the DropDownList by passing the `allowFiltering` as `true` to the edit params.

In the below demo, DropDownList is rendered with custom Datasource for the `ShipCountry` column and enabled filtering to search DropDownList items.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/default-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/default-cs18" %}

### Disable editing for a particular row/cell

You can disable the editing for a particular row by using the [`actionBegin`](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionbegin) event of Grid based on `requestType` as `beginEdit`.

In the below demo, the rows which are having the value for `ShipCountry` column as "France" is prevented from editing.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs40/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs40" %}

For batch mode of editing, you can use [`cellEdit`](https://ej2.syncfusion.com/vue/documentation/api/grid/#celledit) event of Grid. In the below demo, the cells which are having the value as "France" is prevented from editing.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs41/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs41" %}

### Perform Grid actions by keyboard shortcut keys

Using keyboard shortcuts, Grid performs navigation and actions.

In addition, You can also perform grid actions with custom keyboard shortcuts. This operation has to be achieved outside of the grid with the help of `keydown` event.

The following example demonstrates on `Adding` a new row when `Enter` key is pressed in the grid.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs42/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs42" %}

### Make a cell editable on a single click with batch editing

You can make a cell editable on a single click with `batch` mode of editing in Grid, by using the **editCell** method.

Bind the click event for the Grid and in the click event handler call the **editCell** method, based on the clicked target element.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs43/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs43" %}

## Filter

### Customizing filter menu operators list

 You can customize the default filter operator list by defining the
  [`filterSettings.operators`](https://ej2.syncfusion.com/vue/documentation/api/grid/filterSettings/#operators) property. The available options are:

* `stringOperator`- defines customized string operator list.
* `numberOperator` - defines customized number operator list.
* `dateOperator` - defines customized date operator list.
* `booleanOperator` - defines customized boolean operator list.

In the following sample, we have customized string filter operators.
{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/default-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/default-cs19" %}

## Sort

### Perform single/multi sorting dynamically

You can perform single-column or multi-column sorting dynamically through an external button.

To perform single-column sorting, use the [`sortColumn`](../api/grid/#sortcolumn) method of Grid.

```ts
    singleSort: function() {
      this.$refs.grid.sortColumn("OrderID","Descending")
    }
```

To perform multi-column sorting, you need to push the columns to be sorted into the [`sortSettings.columns`](https://ej2.syncfusion.com/vue/documentation/api/grid/sortSettings/#columns).

```ts
    multiSort: function() {
      this.$refs.grid.ej2Instances.sortModule.sortSettings.columns.push({ field: 'ShipCity',  direction: 'Ascending' },{ field: 'CustomerID', direction: 'Descending' });
      this.$refs.grid.refresh();
    }
```

In the below demo, click on the corresponding button to perform single-column or multi-column sorting.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/sort-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/sort-cs1" %}

### Dynamically clear sort for particular/entire sorted columns in Grid

You can clear the sorting for a particular column or the entire sorted columns in Grid dynamically through an external button.

To clear sort for a particular column, you need to splice the particular column from the [`sortSettings.columns`](https://ej2.syncfusion.com/vue/documentation/api/grid/sortSettings/#columns).

```ts
    SingleClearSort: function() {
      let column: Column = this.$refs.grid.ej2Instances.sortModule.sortSettings.columns;
      for(let i=0;i < column.length;i++){
          if(column[i].field === "OrderID") {
              column.splice(i,1);
              this.$refs.grid.refresh();
          }
      }
    }
```

To clear sorting for all the sorted columns, use the [`clearSorting`](https://ej2.syncfusion.com/vue/documentation/api/grid/#clearsorting) method of Grid.

```ts
    MultiClearSort: function() {
      this.$refs.grid.clearSorting();
    }
```

In the below demo, click on the corresponding button to clear sort for particular or entire sorted columns in Grid.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/sort-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/sort-cs2" %}

## Foreign Key

### Use Edit Template in Foreign Key Column

By default, foreign key column uses dropdown component for editing.
You can render other than the dropdown by using the [`column.edit`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edit) property.
The following example demonstrates the way of using edit template in foreign column.

In the following example, The `Employee Name` is a foreign key column and while editing, AutoComplete component is rendered instead of DropDownList.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/foreignKey-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/foreignKey-cs4" %}

### Customize filter UI in foreign key column

You can create your own filtering UI by using [`column.filter`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#filter) property.
The following example demonstrates the way to create a custom filtering UI in the foreign column.

In the following example, The `Employee Name` is a foreign key column. DropDownList is rendered using Filter UI.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/foreignKey-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/foreignKey-cs5" %}

### Perform aggregation in Foreign Key Column

Default aggregations are not supported in a foreign key column.
You can achieve aggregation for the foreign key column by using custom the aggregates.
The following example demonstrates the way to achieve aggregation in foreign key column.

In the following example, The `Employee Name` is a foreign key column and the aggregation for the foreign column was calculated in customAggregateFn.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/foreignKey-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/foreignKey-cs6" %}

### Bind foreign key dataSource on dropdown edit

When editing, you can bind foreign key datasource to a dropdown list by using [`column.dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#datasource) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/foreigncolumn-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/foreigncolumn-cs3" %}

> * By default, the foreign key column's `editType` will be set as `dropdownedit`.

## Exporting

### Exporting Grid in Cordova application

Cordova application does not support direct file download. So we have to use the Blob stream to export the Grid.You can use corresponding exporting methods and exportComplete events to get the Blob stream.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/foreignKey-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/foreignKey-cs7" %}

### Exporting Filtered Data Only

You can export the filtered data by defining the resulted data in `exportProperties.dataSource` before export.

In the below Pdf exporting demo, We have gotten the filtered data by applying filter query to the grid data and then defines the resulted data in `exportProperties.dataSource` and pass it to `pdfExport` method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/export-filtered-data-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/export-filtered-data-cs2" %}

## Pager

### Customize Pager DropDown

To customize default values of pager dropdown, you need to define `pageSizes` as array of strings.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/pagerdropdown-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/pagerdropdown-cs1" %}

## Hide the expand/collapse icon in parent row when no records in child grid

By default, the expand/collapse icon will be visible even if the child grid is empty.

You can use [`rowDataBound`](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowdatabound) event to hide the icon when there are no records in child grid.

To hide the expand/collapse icon in parent row when no records in child grid, follow the given steps:

**Step 1**:

Create CSS class with custom style to override the default style of Grid.

```
    .e-row[aria-selected="true"] .e-customizedExpandcell {
        background-color: #e0e0e0;
    }

    .e-grid.e-gridhover tr[role='row']:hover {
        background-color: #eee;
    }

```

**Step 2**:

Add the CSS class to the Grid in the [`rowDataBound`](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowdatabound) event handler of Grid.

```ts
    rowDataBound(args){
      let filter:string = args.data.EmployeeID;
      let childrecord: any = new DataManager(this.$refs.Grid.childGrid.dataSource).executeLocal(new Query().where("EmployeeID", "equal", parseInt(filter), true));
      if(childrecord.length == 0) { 
        //here hide which parent row has no child records
        args.row.querySelector('td').innerHTML=" ";
        args.row.querySelector('td').className = "e-customizedExpandcell";
      }
    }

```

In the below demo, the expand/collapse icon in the row with `EmployeeID` as `1` is hidden as it does not have record in child Grid.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs44/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs44" %}