<template>
  <div id="app">
    <div style="padding: 20px 0px 0px 0px">
      <ejs-button @click='onClick'>Clear cell selection</ejs-button>
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource='data' :selectionSettings='selectionOptions'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
          width=120></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120>
          </e-column>
          <e-column field='ShipCountry' headerText='Ship Country' width=130>
          </e-column>
          <e-column field='Freight' headerText='Freight' format= 'C2' width=100>
          </e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
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
      selectionOptions :{ type: 'Multiple', mode: 'Cell' },
    };
  },
 methods: {
    onClick: function () {
        this.$refs.grid.ej2Instances.clearCellSelection();
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
</style>