---
layout: post
title: Sorting in Vue Grid Component | Syncfusion
description: Learn here all about sorting in Syncfusion Essential Vue Grid component, it's elements and more details.
control: Sorting 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Sorting in Vue Grid Component

The Grid component has support to sort data bound columns in **ascending** or **descending** order. This can be achieved by setting [`allowSorting`](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowsorting) property as true.

To dynamically sort a particular column, click on its column header. The order switch between **Ascending** and **Descending** each time you click a column header for sorting.

To use Sorting, you need to inject [`Sort`](https://ej2.syncfusion.com/vue/documentation/api/grid/sort/) module in the **provide** section.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/sort/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort/default-cs1" %}

> * Grid column sorted in **Ascending** order. If you click on an already sorted column, then toggles the sort direction.
> * You can apply and clear sorting by invoking [`sortColumn`](https://ej2.syncfusion.com/vue/documentation/api/grid/#sortcolumn) and [`clearSorting`](https://ej2.syncfusion.com/vue/documentation/api/grid/#clearsorting) methods.
> * To disable Sorting for a particular column, by specifying [`columns.allowSorting`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#allowsorting) to false.

## Initial Sort

By default, the Grid records are not sorted at initial rendering. To apply sort at initial rendering, set the [`field`](https://ej2.syncfusion.com/vue/documentation/api/grid/sortDescriptorModel/#field) and [`direction`](https://ej2.syncfusion.com/vue/documentation/api/grid/sortDescriptorModel/#direction) in **sortSettings.columns**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/sort/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort/default-cs2" %}

## Multi-column sorting

You can sort more than one column in a Grid. To sort multiple columns, press and hold the **CTRL** key and click the column header. The sorting order will be displayed in the header while performing multi-column sorting.

To clear sorting for a particular column, press the "Shift + mouse left click".

> The [`allowSorting`](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowsorting) must be true while enabling multi-column sort.

> Set [`allowMultiSorting`](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowmultisorting) property as **false** to disable multi-column sorting.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/sort/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort/default-cs3" %}

## Sort order

By default, the sorting order will be as **ascending -> descending -> none**.

When first click a column header it sorts the column in ascending. Again click the same column header, it will sort the column in descending. A repetitive third click on the same column header will clear the sorting.

## Sort foreign key column based on Text

For local data in Grid, sorting will be performed based on the [`foreignKeyValue`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#foreignkeyvalue).

For remote data in Grid, sorting will be performed based on the [`foreignKeyField`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#foreignkeyfield), we need to handle the sorting operation at the server side.

The following code example describes the handling of sorting operation at the server side.

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
<script>
import Vue from "vue";
import { GridPlugin, ForeignKey, Sort } from "@syncfusion/ej2-vue-grids";
import { DataManager, ODataV4Adaptor } from "@syncfusion/ej2-data";
import { data, employeeData } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: new DataManager({
        url:'/OData/Items',
        adaptor: new ODataV4Adaptor
      }),
      employeeData: new DataManager({
        url:'/OData/Brands',
        adaptor: new ODataV4Adaptor
      })
    };
  },
  provide: {
      grid: [ForeignKey, Sort]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
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

## Sorting Events

During the sort action, the Grid component triggers two events. [`actionBegin`](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionbegin) event triggers before the sort action start and [`actionComplete`](https://ej2.syncfusion.com/vue/documentation/api/grid/#actioncomplete) event triggers after the sort action complete. Using these events you can perform any actions.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/sort/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort/default-cs4" %}

> [`args.requestType`](https://ej2.syncfusion.com/vue/documentation/api/grid/sortEventArgs/#requesttype) is current action name. For example in sorting, the [`args.requestType`](https://ej2.syncfusion.com/vue/documentation/api/grid/sortEventArgs/#requesttype) value is **sorting**.

## Sort Comparer

You can customize the default sort action for a column by defining [`column.sortComparer`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#sortcomparer) property. The sort comparer function has the same functionality like [`Array.sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) sort comparer.

In the following example, custom sort comparer function was defined in **Customer ID** column.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/sort/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort/default-cs5" %}

## Touch Interaction

When you tap Grid header on touchscreen devices, then the selected column header is sorted.Also, it will show a popup ![Sorting](images/sorting.jpg)  for multi-column sorting.

To sort multiple columns, tap the popup![Multi Sorting](images/msorting.jpg) and then tap the desired Grid headers.

The [`allowMultiSorting`](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowmultisorting) and [`allowSorting`](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowsorting) should be **true** then only the popup will be shown.

The following screenshot represents a Grid touch sorting in the device.

![Touch Interaction](images/touch-sorting.jpg)

## See Also

* [Switching the column sort order between ascending and descending order in Vue Grid](https://www.syncfusion.com/forums/162157/switching-the-column-sort-order-between-ascending-and-descending-order-in-vue-grid)