<template>
  <div id="app">
    <div style="padding:0px 0px 20px 0px">
      <ejs-button  @click="next">Change datasource and column</ejs-button >
    </div>
    <ejs-grid ref="grid" :dataSource="dataGrid"  allowPaging="true" :pageSettings="pageSettings" >
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' textAlign='Right' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective,Page} from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"ejs-button": ButtonComponent

},

data() {
  return {
    dataGrid : data,
    pageSettings: { pageSize: 5, pageCount: 3 },
    count : 0,
    newColumn : [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 125 },
        { field: 'CustomerName', headerText: 'Customer Name', width: 125 },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right'},
        { field: 'Freight', headerText: 'Freight', width: 120, textAlign: 'Right'},
    ]
  };
},
methods: {
  next() {
      this.count = this.count + 100;
      this.$refs.grid.ej2Instances.changeDataSource(data.slice(0, this.count + 100), this.newColumn);
    }
},
provide: {
  grid: [Page]
},
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>