<template>
    <div id="app">
        <ejs-button id='reorderColumn' cssClass='e-info' @click='reorderColumnUsingColumnModel'>Reorder Column</ejs-button>
        <ejs-button id='reorderChildColumn' cssClass='e-info' @click='reorderChildColumnUsingColumnModel'>Reorder mutiple columns</ejs-button>
        <ejs-grid ref='grid' :dataSource="data" :allowReordering='true' height='315px'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' width=100 format="C2" textAlign='Right'></e-column>
            <e-column headerText="Order Details" :columns="orderColumns" textAlign='Center'></e-column>
            <e-column headerText="Ship Details" :columns="shipColumns" textAlign='Center'></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Reorder } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
       orderColumns: [
        {
          field: "OrderDate",
          headerText: "Order Date",
          type: "Date",
          format: "yMd",
          width: 130,
        },
        {
          field: "EmployeeID",
          headerText: "EmployeeID",
          width: 150,
          textAlign: 'Right'
        },
      ],

      shipColumns: [
        {
          field: "ShipName",
          headerText: "Ship Name",
          width: 150,
        },
        {
          field: "ShipCountry",
          headerText: "Ship Country",
          width: 150,
        },
      ],
    };
  },
  provide: {
      grid: [Reorder]
  },
  methods: {
    // Reorder a stacked header column before a normal column.
    reorderColumnUsingColumnModel: function() {
      this.$refs.grid.reorderColumnByModel(this.$refs.grid.ej2Instances.columns[3],this.$refs.grid.ej2Instances.columns[1]);
    },
    // Reorder a child column within a stacked header column.
    reorderChildColumnUsingColumnModel: function() {
      const shipInfo = this.$refs.grid.ej2Instances.columns[4];
      this.$refs.grid.reorderColumnByModel(shipInfo.columns[1], shipInfo.columns[0]); 
    }
  }
}
</script>
<style>
.e-btn.e-info, .e-css.e-btn.e-info {
    margin-right: 4px;
    margin-bottom: 3px;
}
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material3.css";
</style>