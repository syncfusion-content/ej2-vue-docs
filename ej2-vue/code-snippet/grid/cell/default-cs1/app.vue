<template>
  <div id="app">
    <ejs-grid :dataSource="data" :enableHover='false' :allowSelection='false' height='315' :queryCellInfo='customiseCell'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=80></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

export default {
  name: "App",
  components: {
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
    customiseCell: function (args) {
      if (args.column.field === 'Freight') {
        if (args.data['Freight'] <= 30) {
          args.cell.classList.add('below-30');
        } else if (args.data['Freight'] > 30 & args.data['Freight'] < 80) {
          args.cell.classList.add('below-80');
        } else {
          args.cell.classList.add('above-80');
        }
      }
    }
  }
}
</script>
<style>
.below-30 {
  background-color: orangered;
}

.below-80 {
  background-color: yellow;
}

.above-80 {
  background-color: greenyellow
}

@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";</style>