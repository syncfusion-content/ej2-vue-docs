

<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource='parentData' height='265px' :childGrid='childGrid' :detailDataBound='onDetailDataBound'>
                <e-columns>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                    <e-column field='FirstName' headerText='FirstName' width=150></e-column>
                    <e-column field='LastName' headerText='Last Name' width=150></e-column>
                    <e-column field='City' headerText='City' width=150></e-column>
                </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, DetailRow } from "@syncfusion/ej2-vue-grids";
import { data, employeeData } from './datasource.js';
import {DataManager,Query} from '@syncfusion/ej2-data';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      parentData: employeeData,
      childGrid: {
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ]
      }
    }
  },
  methods: {
    onDetailDataBound(args) {
      var orderData = data;
      var empIdValue = args.childGrid.parentDetails.parentRowData.EmployeeID;
      var matchedData = new DataManager(data).executeLocal(
        new Query().where("EmployeeID", "equal", empIdValue, true)
      );
      args.childGrid.query = new Query();
      args.childGrid.dataSource = matchedData;
    }
  },
  provide: {
      grid: [DetailRow]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


