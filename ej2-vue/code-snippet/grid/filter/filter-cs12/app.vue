<template>
  <div id="app">
    <div class='message'>{{message}}</div>
    <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' height='273px' 
      :actionBegin="actionBegin" :actionComplete="actionComplete" >
      <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
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
      message:'',
    };
  },
  methods: {
    actionBegin: function (args) {
      if(args.requestType == 'filtering' && args.currentFilteringColumn == 'ShipCity'){
        args.cancel=true;
        this.message = args.requestType + ' is not allowed for ShipCity column';
      }
    },
    actionComplete: function (args) {
      if (args.requestType == 'filtering' && args.currentFilteringColumn) {
        this.message = 'The ' + args.type + ' event has been triggered and the ' + args.requestType + ' action for the ' + args.currentFilteringColumn + ' column has been successfully executed';
      } else {
        this.message = '';
      }
    }
  },
  provide: {
    grid: [Filter]
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

.message {
  padding: 10px;
  margin-top: 10px;
  display: block;
  color: red;
  text-align: center;
}
</style>