<template>
  <div id="app">
    <p id="message">{{message}}</p>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :enableHover='false' :dataSource="data"
       :selectionSettings="selectionOptions" :rowSelected="rowSelected"
       :rowSelecting="rowselecting" :rowDeselected="rowDeselected"
       :rowDeselecting="rowDeselecting">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120">
          </e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="120">
          </e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="130">
          </e-column>
          <e-column field="Freight" headerText="Freight" format="C2" width="100">
          </e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective} from "@syncfusion/ej2-vue-grids";
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
      message:"",
      selectionOptions : { mode: 'Row', type: 'Multiple' },
      pageOptions : { pageSize: 5 }
    };
  },
  methods: {
   rowselecting(args) {
        this.message = `Trigger rowSelecting`;
        if (args.data.CustomerID == 'VINET')
        args.cancel = true;
    },
    rowSelected(args) {
        this.message = ` Trigger rowSelected`;
        if (args.data.Freight > 10 || args.data.Freight <= 140)
            args.row.style.backgroundColor = 'rgb(96, 158, 101)'; 
    },
    rowDeselecting(args) {
       this.message = `Trigger rowDeselecting`;
        if (args.data.Freight > 140)
            args.row.style.backgroundColor = 'yellow';
        },
    rowDeselected(args) {
        this.message = `Trigger rowDeselected`;
        if (args.data.Freight <= 10)
           args.row.style.backgroundColor = 'red';
    }
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
#message {
  color: red;
  text-align: center;
  padding: 0px 0px 10px 0px;
}
</style>