<template>
  <div id="app">
    <ejs-grid ref="grid" id="grid" :dataSource="data" height="315px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="150" foreignKeyField="CustomerID" foreignKeyValue="ContactName" :dataSource="customerData" :template="'radioTemplate'" >
        </e-column>
        <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="90"></e-column>
        <e-column field="OrderDate" headerText="Order Date" textAlign="Right" type="date" format="yMd" width="120"></e-column>    
      </e-columns>
      <template v-slot:radioTemplate="{ data }">
        <a href="javascript:void(0)" @click="navToAccount(data.OrderID,$event)">{{ data.foreignKeyData.ContactName }}</a>
      </template>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, ForeignKey } from "@syncfusion/ej2-vue-grids";
import { orderDetails,  customerData } from './datasource';

export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
  },
  data() {
    return {
      data:orderDetails,
      customerData: customerData
    };
  },
  methods: {
    navToAccount(Id) {
      window.history.pushState("", "changed", `../Account/AccountDetail.cshtml?custid=0&accountId=${Id}`);
    }
  },
  provide() {
    return {
      grid: [ForeignKey]
    };
  }
};
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
</style>
