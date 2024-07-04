---
layout: post
title: Sorting in Vue Grid component | Syncfusion
description: Learn here all about Sorting in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Sorting 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Sorting in Vue Grid component

The Grid component provides built-in support for sorting data-bound columns in ascending or descending order. To enable sorting in the grid, set the [allowSorting](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowsorting) property to **true**.

To sort a particular column in the grid, click on its column header. Each time you click the header, the order of the column will switch between **Ascending** and **Descending**.

To use the sorting feature, you need to inject the **Sort** module in the **provide** section. 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort/default-cs1" %}

> * Grid column sorted in **Ascending** order. If you click on an already sorted column, then toggles the sort direction.
> * You can apply and clear sorting by using the [sortColumn](https://ej2.syncfusion.com/vue/documentation/api/grid/#sortcolumn) and [clearSorting](https://ej2.syncfusion.com/vue/documentation/api/grid/#clearsorting) methods.
> * To disable sorting for a specific column, set the [columns.allowSorting](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#allowsorting) property to **false**.

## Initial sorting

By default, the grid component does not apply any sorting to its records at initial rendering. However, you can apply initial sorting by setting the [sortSettings.columns](https://ej2.syncfusion.com/vue/documentation/api/grid/sortSettings/#columns) property to the desired [field](https://ej2.syncfusion.com/vue/documentation/api/grid/sortDescriptorModel/#field) and sort [direction](https://ej2.syncfusion.com/vue/documentation/api/grid/sortDescriptorModel/#direction). This feature is helpful when you want to display your data in a specific order when the grid is first loaded.

The following example demonstrates how to set [sortSettings.columns](https://ej2.syncfusion.com/vue/documentation/api/grid/sortSettings/#columns) for **OrderID** and **ShipCity** columns with a specified [direction](https://ej2.syncfusion.com/vue/documentation/api/grid/sortDescriptorModel/#direction).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort/default-cs2" %}

> The initial sorting defined in [sortSettings.columns](https://ej2.syncfusion.com/vue/documentation/api/grid/sortSettings/#columns) will override any sorting applied through individual interaction.

## Multi-column sorting

The Grid component allows to sort more than one column at a time using multi-column sorting. To enable multi-column sorting in the grid, set the [allowSorting](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowsorting) property to **true**, and set the [allowMultiSorting](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowmultisorting) property to **true** which enable the user to sort multiple columns by hold the **CTRL** key and click on the column headers. This feature is useful when you want to sort your data based on multiple criteria to analyze it in various ways.

To clear multi-column sorting for a particular column, press the "Shift + mouse left click".

> * The [allowSorting](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowsorting) must be true while enabling multi-column sort.
> * Set [allowMultiSorting](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowmultisorting) property as **false** to disable multi-column sorting.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort/default-cs3" %}

## Prevent sorting for particular column

The Grid component provides the ability to prevent sorting for a particular column. This can be useful when you have certain columns that you do not want to be included in the sorting process. 

It can be achieved by setting the [allowSorting](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowsorting) property of the particular column to **false**. 

The following example demonstrates, how to disable sorting for **CustomerID** column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/prevent-sort/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/prevent-sort/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort/prevent-sort" %}

## Sort order

By default, the sorting order will be as **ascending -> descending -> none**.

When you click on a column header for the first time, it sorts the column in ascending order. Clicking the same column header again will sort the column in descending order. A repetitive third click on the same column header will clear the sorting.

## Custom sorting 

The Grid component provides a way to customize the default sort action for a column by defining the [column.sortComparer](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#sortcomparer) property. The sort comparer function works similar to the [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) comparer function, and allows to define custom sorting logic for a specific column.

The following example demonstrates how to define custom sort comparer function for the **Customer ID** column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort/default-cs5" %}

> The customSortComparer function takes two parameters: a and b. The a and b parameters are the values to be compared. The function returns -1, 0, or 1, depending on the comparison result.

## Touch interaction

When you tap grid header on touch screen devices, then the selected column header is sorted and display a popup ![Sorting](images/sorting.jpg) for multi-column sorting, tap on the popup to sort multiple columns ![Multi Sorting](images/msorting.jpg) and then tap the desired grid headers.

> The [allowMultiSorting](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowmultisorting) and [allowSorting](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowsorting) should be **true** then only the popup will be shown.

![Touch Interaction](images/touch-sorting.jpg)

## Sort foreign key column based on text

To perform sorting based on foreign key column, the foreign key column can be enabled by using [column.dataSource](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#datasource), [column.foreignKeyField](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#foreignkeyfield) and [column.foreignKeyValue](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#foreignkeyvalue) properties.

**Sort foreign key column based on text for local data**

In the case of local data in the grid, the sorting operation will be performed based on the [foreignKeyValue](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#foreignkeyvalue) property of the column. The `foreignKeyValue` property should be defined in the column definition with the corresponding foreign key value for each row. The grid will sort the foreign key column based on the text representation of the `foreignKeyValue` property.

The following example demonstrates how to perform sorting by enabling a foreign key column, where the **CustomerID** column acts as a foreign column displaying the **ContactName** column from foreign data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/sort-foreign-key/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/sort-foreign-key/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort/sort-foreign-key" %}

> Make sure to inject the **ForeignKey** module in the **provide** section to ensure its availability throughout your application.

**Sort foreign key column based on text for remote data**

In the case of remote data in the grid, the sorting operation will be performed based on the [foreignKeyField](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#foreignkeyfield) property of the column. The `foreignKeyField` property should be defined in the column definition with the corresponding foreign key field name for each row. The grid will send a request to the server-side with the `foreignKeyField` name, and the server-side should handle the sorting operation and return the sorted data to the grid.

```
<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='315' :allowSorting='true'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='EmployeeID' headerText='Employee Name' width=120 foreignKeyValue='FirstName' :dataSource='employeeData'></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' width=80></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=130  ></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, ForeignKey, Sort } from "@syncfusion/ej2-vue-grids";
import { DataManager, ODataV4Adaptor } from "@syncfusion/ej2-data";
import { data, employeeData } from './datasource.js';
      const data: new DataManager({
        url:'/OData/Items',
        adaptor: new ODataV4Adaptor
      }),
      const employeeData: new DataManager({
        url:'/OData/Brands',
        adaptor: new ODataV4Adaptor
      })
  provide('grid',  [ForeignKey, Sort]);
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>
```

The following code example describes the handling of sorting operation at server side.

```
    public class ItemsController : ODataController
    {
        [EnableQuery]
        public IQueryable<Item> Get()
        {
            List<Item> GridData = JsonConvert.DeserializeObject<Item[]>(Properties.Resources.ItemsJson).AsQueryable().ToList();
            List<Brand> empData = JsonConvert.DeserializeObject<Brand[]>(Properties.Resources.BrandsJson).AsQueryable().ToList();
            var queryString = HttpContext.Current.Request.QueryString;
            var allUrlKeyValues = ControllerContext.Request.GetQueryNameValuePairs();
            string key = allUrlKeyValues.LastOrDefault(x => x.Key == "$orderby").Value;
            if (key != null)
            {
                if (key == "EmployeeID") {
                    GridData = SortFor(key); //Only for foreignKey Column ascending
                }
                else if(key == "EmployeeID desc") {
                    GridData = SortFor(key); //Only for foreignKey Column descending
                }
            }
            var count = GridData.Count();
            var data = GridData.AsQueryable();
            return data;
        }

        public List<Item> SortFor(String Sorted)
        {
            List<Item> GridData = JsonConvert.DeserializeObject<Item[]>(Properties.Resources.ItemsJson).AsQueryable().ToList();
            List<Brand> empData = JsonConvert.DeserializeObject<Brand[]>(Properties.Resources.BrandsJson).AsQueryable().ToList();
            if (Sorted == "EmployeeID") //check whether ascending or descending
                empData = empData.OrderBy(e => e.FirstName).ToList();
            else if(Sorted == "EmployeeID desc")
                empData = empData.OrderByDescending(e => e.FirstName).ToList();
            List<Item> or = new List<Item>();
            for (int i = 0; i < empData.Count(); i++) {
                //Select the Field matching records
                IEnumerable<Item> list = GridData.Where(pred => pred.EmployeeID == empData[i].EmployeeID).ToList();
                or.AddRange(list);
            }
            return or;
        }
    }
```

## Perform sorting based on its culture

Perform sorting based on culture in the Grid can be achieved by utilizing the [locale](https://ej2.syncfusion.com/vue/documentation/api/grid/#locale) property. By setting the `locale` property to the desired culture code, you enable sorting based on that specific culture. This allows you to apply locale-specific sorting rules and ensure accurate ordering for different languages and regions.

In the following example, sorting is performed based on the **"ar"** locale using the [column.sortComparer](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#sortcomparer) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/locale-sort/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/locale-sort/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort/locale-sort" %}

## How to customize sort icon

To customize the sort icon in the Grid, you can override the default grid classes **.e-icon-ascending** and **.e-icon-descending** with custom content using CSS. Simply specify the desired icons or symbols using the **content** property as mentioned below

```css
.e-grid .e-icon-ascending::before {
  content: '\e306';
}
	
.e-grid .e-icon-descending::before {
  content: '\e304';
}
```
In the below sample, grid is rendered with a customized sort icon.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/sort-icon/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/sort-icon/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort/sort-icon" %}

## Sort columns externally

The Grid component in Syncfusion's Vue suite allows you to customize the sorting of columns and provides flexibility in sorting based on external interactions. You can sort columns, remove a sort column, and clear sorting using an external button click.

### Add sort columns

To sort a column externally, you can utilize the [sortColumn](https://ej2.syncfusion.com/vue/documentation/api/grid/#sortcolumn) method with parameters **columnName**, **direction** and **isMultiSort** provided by the Grid component. This method allows you to programmatically sort a specific column based on your requirements.

The following example demonstrates how to add sort columns to a grid. It utilizes the **DropDownList** component to select the column and sort direction. When an external button is clicked, the [sortColumn](https://ej2.syncfusion.com/vue/documentation/api/grid/#sortcolumn) method is called with the specified **columnName**, **direction**, and **isMultiSort** parameters.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/sort-columns/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/sort-columns/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort/sort-columns" %}

### Remove sort columns

To remove a sort column externally, you can use the `removeSortColumn` method provided by the Grid component. This method allows you to remove the sorting applied to a specific column.

The following example demonstrates how to remove sort columns. It utilizes the **DropDownList** component to select the column. When an external button is clicked, the `removeSortColumn` method is called to remove the selected sort column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/remove-sort/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/remove-sort/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort/remove-sort" %}

### Clear sorting 

To clear the sorting on an external button click, you can use the [clearSorting](https://ej2.syncfusion.com/vue/documentation/api/grid#clearsorting) method provided by the Grid component. This method clears the sorting applied to all columns in the grid. 

The following example demonstrates how to clear the sorting using `clearSorting` method in the external button click.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/clear-sort/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/clear-sort/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort/clear-sort" %}

## Sorting events

The Grid component provides two events that are triggered during the sorting action such as [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionbegin) and [actionComplete](https://ej2.syncfusion.com/vue/documentation/api/grid/#actioncomplete). These events can be used to perform any custom actions before and after the sorting action is completed.

1. **actionBegin**: [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionbegin) event is triggered before the sorting action begins. It provides a way to perform any necessary operations before the sorting action takes place. This event provides a parameter that contains the current grid state, including the current sorting column, direction, and data.

2. **actionComplete**: [actionComplete](https://ej2.syncfusion.com/vue/documentation/api/grid/#actioncomplete) event is triggered after the sorting action is completed. It provides a way to perform any necessary operations after the sorting action has taken place. This event provides a parameter that contains the current grid state, including the sorted data and column information.

The following example demonstrates how the [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionbegin) and [actionComplete](https://ej2.syncfusion.com/vue/documentation/api/grid/#actioncomplete) events work when sorting is performed. The `actionBegin` event event is used to cancel the sorting of the OrderID column. The `actionComplete` event is used to display a message.
```

```
{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
    <div id="app">
      <div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
      <ejs-grid :dataSource='data' :actionComplete='actionComplete' :actionBegin='actionBegin' :allowSorting='true' height='315px'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
      </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Sort } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const message = ref(null);
const actionBegin = (args) => {
  if (args.requestType === 'sorting' && args.columnName === 'OrderID') {
    args.cancel = true;
    message.value = args.requestType + ' action cancelled for ' + args.columnName + ' column';
  }
}
const actionComplete = (args) => {
  message.value = args.requestType + ' action completed for ' + args.columnName + ' column';
}
  provide('grid',  [Sort]);
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% raw %}
<template>
    <div id="app">
      <div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
      <ejs-grid :dataSource='data' :actionComplete='actionComplete' :actionBegin='actionBegin' :allowSorting='true' height='315px'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
      </ejs-grid>
    </div>
</template>
<script>
import { GridComponent, ColumnDirective, ColumnsDirective, Sort } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      message:''
    };
  },
  methods: {
    actionBegin(args) {
      if (args.requestType === 'sorting' && args.columnName === 'OrderID') {
        args.cancel = true;
        this.message = args.requestType + ' action cancelled for ' + args.columnName + ' column';
      }
    },
    actionComplete(args) {
      this.message = args.requestType + ' action completed for ' + args.columnName + ' column';
    }
  },
  provide: {
    grid: [Sort]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort/default-cs4" %}

> [args.requestType](https://ej2.syncfusion.com/vue/documentation/api/grid/sortEventArgs/#requesttype) refers to the current action being performed. For example in sorting, the `args.requestType` value is **sorting**.

## See also

* [Switching the column sort order between ascending and descending order in Vue Grid](https://www.syncfusion.com/forums/162157/switching-the-column-sort-order-between-ascending-and-descending-order-in-vue-grid)