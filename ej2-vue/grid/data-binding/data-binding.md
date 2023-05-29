---
layout: post
title: Data binding in Vue Grid component | Syncfusion
description: Learn here all about Data binding in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Vue Grid component

The Grid uses `DataManager` which supports both RESTful JSON data services binding and local JavaScript object array binding. The [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource) property can be assigned either with the instance of `DataManager` or JavaScript object array collection. It supports two kinds of data binding methods:

* Local data
* Remote data

To learn about Grid data binding quickly, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=Vos7RCR6-uw" %}

## Sending additional parameters to the server

To add a custom parameter to the data request, use the `addParams` method of `Query` class. Assign the `Query` object with additional parameters to the grid [`query`](https://ej2.syncfusion.com/vue/documentation/api/grid/#query) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/databind/remote-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/databind/remote-cs1" %}

> The parameters added using the [`query`](https://ej2.syncfusion.com/vue/documentation/api/grid/#query) property will be sent along with the data request for every grid action.

## Handling HTTP error

During server interaction from the grid, some server-side exceptions may occur, and you can acquire those error messages or exception details in client-side using the [`actionFailure`](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionfailure) event.

The argument passed to the [`actionFailure`](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionfailure) Grid event contains the error details returned from the server.

```
<template>
    <div id="app">
        <ejs-grid :dataSource="data" :actionFailure='actionFailure'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' type='date' width=120></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { DataManager, ODataAdaptor } from "@syncfusion/ej2-data";

Vue.use(GridPlugin);

export default Vue.extend({
  data() {
    return {
      data: new DataManager({
        url: 'http://some.com/invalidUrl',
        adaptor: new ODataAdaptor()
      })
    };
  },
  methods: {
    actionFailure: function() {
       alert('Server exception: 404 Not found');
    }
  }
});
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
```

> The [`actionFailure`](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionfailure) event will be triggered not only for the server errors, but also when there is an exception while processing the grid actions.

## Binding with ajax

You can use Grid [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource) property to bind the datasource to Grid from external ajax request. In the below code we have fetched the datasource from the server with the help of ajax request and provided that to [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource) property by using `onSuccess` event of the ajax.

```
<template>
    <div id="app">
        <ejs-button v-on:click.native="btnClick">Play</ejs-button>
        <ejs-grid>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120 ></e-column>
                <e-column field='CustomerID' headerText='Customer ID' textAlign='Right' width=120 ></e-column>
                <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120 ></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' textAlign='Right' width=120 ></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { Ajax } from '@syncfusion/ej2-base';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

export default Vue.extend({
  data() {
    return {
      data: {}
    };
  },
  methods:{
   btnClick: function (args){
        var grid = document.getElementsByClassName("e-grid")[0].ej2_instances[0]; // Grid instance
        var ajax = new Ajax("https://ej2services.syncfusion.com/production/web-services/api/Orders", "GET");
        ajax.send();
        ajax.onSuccess = function (result) {
        grid.dataSource = JSON.parse(result);
        };
      }
  }
});
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
```

## Custom binding

It is possible to handle data processing externally and bind the result to the grid. This help you to provide your own custom data logic. Grid expects an object as the result of the custom logic and the emitted value should be an object with properties `result` and `count`.

> In this context, we are going to use `Ajax` from our `@syncfusion/ej2-base` library for handling remote interaction, you can choose any HTTP client as per your choice.

```
<template>
    <div id="app">
        <ejs-grid :dataSource='data' :allowPaging='true' :pageSettings='pageOptions' :allowSorting='true' :allowGrouping='true' :dataStateChange='dataStateChange'>
            <e-columns>
                <e-column field= "OrderID" headerText="Order ID" width="130" textAlign='Right' ></e-column>
                <e-column field= "CustomerID" headerText="Customer Name" width="150"></e-column>
                <e-column field= "ShipName" headerText="Ship Name" width="200"></e-column>
                <e-column field= "ShipCity" headerText="Ship City" width="150"></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, DataStateChangeEventArgs, Sorts, Sort, Group, Page, DataResult } from "@syncfusion/ej2-vue-grids";
import { Ajax } from '@syncfusion/ej2-base';

Vue.use(GridPlugin);

export default Vue.extend({
  data() {
    return {
      data: {},
      pageOptions: { pageSize: 10, pageCount: 4 },
      orderService: new OrderService()
    };
  },
  mounted() {
    let state = { skip: 0, take: 10 };
    this.dataStateChange(state);
  },
  methods:{
    dataStateChange: function (state) {
        this.orderService.execute(state).then(( gridData ) => this.data = gridData );
    }
  },
  provide: {
      grid: [Sort, Group, Page]
  }
});
export class OrderService {

    public ajax: Ajax = new Ajax({
        type: 'GET', mode: true,
        onFailure: (e: Error) => { return false; }
    });

    private BASE_URL: string = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders';

    public execute(state: DataStateChangeEventArgs): Promise<DataResult> {
        return this.getData(state);
    }

    private getData(state: DataStateChangeEventArgs): Promise<DataResult> {
        const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
        let sortQuery: string = '';

        if ((state.sorted || []).length) {
            sortQuery = `&$orderby=` + (<any> state).sorted.map((obj: Sorts) => {
                return obj.direction === 'descending' ? `${obj.name} desc` : obj.name;
            }).reverse().join(',');
        }

        this.ajax.url = `${this.BASE_URL}?${pageQuery}${sortQuery}&$inlinecount=allpages&$format=json`;

        return this.ajax.send().then((response: any) => {
            let data: any = JSON.parse(response);
            return <DataResult> { result: data['d']['results'], count: parseInt(data['d']['__count'], 10) };
        });
    }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
```

## Handling Grid actions

For grid actions such as `paging`, `grouping`, `sorting` etc, the `dataStateChange` event will be invoked. You have to query and resolve data using `AJAX` in this event based on the state arguments.

```
<template>
    <div id="app">
        <ejs-grid :dataSource='data' :allowPaging='true' :pageSettings='pageOptions' :allowSorting='true' :allowGrouping='true' :dataStateChange='dataStateChange'>
            <e-columns>
                <e-column field= "OrderID" headerText="Order ID" width="130" textAlign='Right' ></e-column>
                <e-column field= "CustomerID" headerText="Customer Name" width="150"></e-column>
                <e-column field= "ShipName" headerText="Ship Name" width="200"></e-column>
                <e-column field= "ShipCity" headerText="Ship City" width="150"></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, DataStateChangeEventArgs, Sorts, Sort, Group, Page, DataResult } from "@syncfusion/ej2-vue-grids";
import { Ajax } from '@syncfusion/ej2-base';

Vue.use(GridPlugin);

export default Vue.extend({
  data() {
    return {
      data: {},
      pageOptions: { pageSize: 10, pageCount: 4 },
      orderService: new OrderService()
    };
  },
  mounted() {
    let state = { skip: 0, take: 10 };
    this.dataStateChange(state);
  },
  methods:{
    dataStateChange: function (state) {
        this.orderService.execute(state).then(( gridData ) => this.data = gridData );
    }
  },
  provide: {
      grid: [Sort, Group, Page]
  }
});
export class OrderService {

    public ajax: Ajax = new Ajax({
        type: 'GET', mode: true,
        onFailure: (e: Error) => { return false; }
    });
    private BASE_URL: string = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders';
    public execute(state: DataStateChangeEventArgs): Promise<DataResult> {
        return this.getData(state);
    }
    private getData(state: DataStateChangeEventArgs): Promise<DataResult> {
        const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
        let sortQuery: string = '';
        if ((state.sorted || []).length) {
            sortQuery = `&$orderby=` + (state).sorted.map((obj: Sorts) => {
                return obj.direction === 'descending' ? `${obj.name} desc` : obj.name;
            }).reverse().join(',');
        }
        this.ajax.url = `${this.BASE_URL}?${pageQuery}${sortQuery}&$inlinecount=allpages&$format=json`;
        return this.ajax.send().then((response: any) => {
            let data: any = JSON.parse(response);
            return { result: data['d']['results'], count: parseInt(data['d']['__count'], 10) };
        });
    }
  }
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
```

## Perform CRUD operations

The `dataSourceChanged` event will be triggered for updating the grid data. You can perform the save operation based on the event arguments and you need to call the `endEdit` method to indicate the completion of save operation.

```
<template>
    <div id="app">
        <ejs-grid :dataSource='data' :allowPaging='true' :pageSettings='pageOptions' :allowSorting='true' :allowGrouping='true' :dataStateChange='dataStateChange'  :editSettings='editSettings' :toolbar='toolbar'>
            <e-columns>
                <e-column field= "OrderID" headerText="Order ID" :isPrimaryKey='true' width="130" textAlign='Right' ></e-column>
                <e-column field= "CustomerID" headerText="Customer Name" width="150"></e-column>
                <e-column field= "ShipName" headerText="Ship Name" width="200"></e-column>
                <e-column field= "ShipCity" headerText="Ship City" width="150"></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, DataStateChangeEventArgs, Sorts, Sort, Group, Page, DataResult, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { OrderService } from "./order-service";

Vue.use(GridPlugin);

export default Vue.extend({
  data() {
    return {
      data: {},
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      pageOptions: { pageSize: 10, pageCount: 4 },
      orderService: new OrderService()
    };
  },
  mounted() {
    let state = { skip: 0, take: 10 };
    this.dataStateChange(state);
  },
  methods:{
    dataStateChange: function (state) {
        this.orderService.execute(state).then(( gridData ) => this.data = gridData );
    },
    dataSourceChanged: function (state) {
    if (state.action === 'add') {
      this.orderService.addRecord(state).subscribe(() => state.endEdit());
    } else if (state.action === 'edit') {
      this.orderService.updateRecord(state).subscribe(() => state.endEdit());
    } else if (state.requestType === 'delete') {
      this.orderService.deleteRecord(state).subscribe(() => state.endEdit());
    }
  }
  },
  provide: {
      grid: [Sort, Group, Page, Edit, Toolbar]
  }
});
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
```

## Calculate aggregates

The footer aggregate values should be calculated and send along with the `dataSource` property as follows. The aggregate property of the data source should contain the aggregate value assigned to the property named in the `field – type` format. For example, the `Sum` aggregate value for the `Freight` field should be assigned to the property named as `Freight - sum`.

```
{
    result: [{..}, {..}, {..}, ...],
    count: 830,
    aggregates: { 'Freight - sum' : 450,'EmployeeID - min': 1 }
}
```

> The group footer and caption aggregate values will be calculated by the grid itself.

## Provide excel filter data source

The `dataStateChange` event will be triggered with appropriate arguments when the excel filter requests the filter choice data source. You need to resolve the excel filter data source using the `dataSource` resolver function from the state argument as follows.

```
<template>
    <div id="app">
        <ejs-grid :dataSource='data' :allowPaging='true' :pageSettings='pageOptions' :allowSorting='true' :allowGrouping='true' :dataStateChange='dataStateChange' :filterSettings='filterOptions'>
            <e-columns>
                <e-column field= "OrderID" headerText="Order ID" width="130" textAlign='Right' ></e-column>
                <e-column field= "CustomerID" headerText="Customer Name" width="150"></e-column>
                <e-column field= "ShipName" headerText="Ship Name" width="200"></e-column>
                <e-column field= "ShipCity" headerText="Ship City" width="150"></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, DataStateChangeEventArgs, Sorts, Sort, Group, Page, DataResult, Filter } from "@syncfusion/ej2-vue-grids";
import { Ajax } from '@syncfusion/ej2-base';

Vue.use(GridPlugin);

export default Vue.extend({
  data() {
    return {
      data: {},
      filterOptions: { type: 'Excel' },
      pageOptions: { pageSize: 10, pageCount: 4 },
      orderService: new OrderService()
    };
  },
  mounted() {
    let state = { skip: 0, take: 10 };
    this.dataStateChange(state);
  },
  methods:{
    dataStateChange: function (state) {
        if (state.action.requestType === "filterchoicerequest" || state.action.requestType ==="filtersearchbegin") {
      this.orderService.execute(state).then((e) => state.dataSource(e));
    } else {
      this.orderService.execute(state).then(( gridData ) => {this.grid.dataSource = gridData} );
    }
    }
  },
  provide: {
      grid: [Sort, Group, Page, Filter]
  }
});
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
```

> You can find the code at our [`GitHub repository`](https://github.com/SyncfusionExamples)

## See Also

* [How to bind SQL Server data in Vue DataGrid using SqlClient data provider](https://www.syncfusion.com/kb/11454/how-to-bind-sql-server-data-in-vue-datagrid-using-sqlclient-data-provider)