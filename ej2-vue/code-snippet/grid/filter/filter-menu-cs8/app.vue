<template>
  <div id="app">
    <div class='message'>{{actionBeginMessage}}</div><div class='message'>{{actionCompleteMessage}}</div>
    <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions' 
      :actionBegin="actionBegin" :actionComplete="actionComplete" height='273px'>
      <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
          <e-column field='Freight' headerText='Freight' width=120></e-column>
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
      actionBeginMessage:'',
      actionCompleteMessage:'',
      filterOptions: {
        type: 'Menu'
      },
    };
  },
  methods: {
    actionBegin: function (args) {
      if (args.requestType == 'filterBeforeOpen' && args.columnType === "number") {
        args.filterModel.customFilterOperators.numberOperator = [
        { value: "equal", text: "Equal" },
        { value: "notequal", text: "Not Equal" }];
        this.actionBeginMessage ='Filter operators for number column were customized using the filterbeforeopen action in the actionBegin event';
    }
    else{
      this.actionBeginMessage = args.requestType + ' action is triggered in actionBegin event'
    }
    if(args.requestType == 'filtering' && args.currentFilteringColumn == 'ShipCity'){
      args.cancel=true;
      this.actionBeginMessage = args.requestType + ' is not allowed for ShipCity column';
    }
    },
    actionComplete: function (args) {
      if (args.requestType === 'filterAfterOpen') {
        this.actionCompleteMessage ='Applied CSS for filter dialog during filterafteropen action';
        args.filterModel.dlgDiv.querySelector('.e-dlg-content').style.background = '#eeeaea';
        args.filterModel.dlgDiv.querySelector('.e-footer-content').style.background = '#30b0ce';
      }
      if(args.requestType == 'filtering'){
        this.actionCompleteMessage = args.requestType + ' action is triggered in actionComplete event';
      }
    }
  },
  provide: {
    grid: [Filter]
  }
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

.message {
  padding: 10px;
  margin-top: 10px;
  display: block;
  color: red;
  text-align: center;
}
</style>