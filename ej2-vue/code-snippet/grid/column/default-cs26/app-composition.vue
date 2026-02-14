<template>
  <div id="app">
    <ejs-button @click="updateColumns"> Update Columns </ejs-button>
    <ejs-grid ref='grid' :dataSource='data' :height='280'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
        <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120
          type='date'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data() {
    return {
      data: data
    };
  },
  methods: {
    updateColumns: function () {
      let grid = this.$refs.grid.$el.ej2_instances[0];
      grid.columns[0].textAlign = 'Center';
      grid.columns[0].width = '100';
      grid.columns[2].visible = false;
      grid.columns[1].customAttributes = { class: 'customcss' };
      // Applying changes to the grid
      grid.refreshColumns();
    },
  }
}
</script>
<style>
#btnId {
  margin-right: 10px;
  margin-bottom: 10px;
}

.customcss {
  background-color: rgb(43, 195, 226);
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
</style>