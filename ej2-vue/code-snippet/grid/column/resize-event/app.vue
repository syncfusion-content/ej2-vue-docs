

<template>
    <div id="app">
        <div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
        <ejs-grid ref='grid' :dataSource="data" :allowResizing='true' height='315px' :resizeStart='resizeStart' :resizing='resizing' :resizeStop='resizeStop'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=80></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' textAlign='Right' width=100></e-column>
            <e-column field='ShipAddress' headerText='Ship Address' width=120></e-column>
            <e-column field='Freight' headerText='Freight' width=80></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Resize } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data
    };
  },
  provide: {
      grid: [Resize]
  },
  methods: {
    resizeStart: function (args) {
      this.message = `resizeStart event triggered`;
      if (args.column.field === 'OrderID') {
        args.cancel = true;
      }
    },
    resizing: function (args) {
      this.message = `resizing event triggered`;
    },
    resizeStop: function (args) {
      this.message = `resizeStop event triggered`;
      const headerCell = this.$refs.grid.getColumnHeaderByField(args.column.field);
      headerCell.classList.add('customcss');
      const columnCells = this.$refs.grid.getContentTable()
        .querySelectorAll(`[data-colindex="${args.column.index}"]`);
      columnCells.forEach(cell => {
        cell.style.backgroundColor = 'rgb(43, 195, 226)';
      });
    }
  }
}
</script>
<style>
.e-grid .customcss {
  background-color: rgb(43, 195, 226);
}
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>


