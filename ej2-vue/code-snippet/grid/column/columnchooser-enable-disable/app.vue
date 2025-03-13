<template>
  <div id="app">
    <div style="padding: 20px 0px 20px 0px;display:flex">
      <label style="padding: 0px 20px 0px 0px;font-weight: bold">Enable and disable search option</label>
      <ejs-switch ref="switch" id="switch" :checked="true" :change="change"></ejs-switch>
    </div>
    <ejs-grid :dataSource="data" :showColumnChooser='true' :toolbar='toolbarOptions' height='272px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='120' textAlign="Right"></e-column>
        <e-column field='CustomerID' headerText='Customer Name' width='150'></e-column>
        <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign="Right"></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' :visible='true' width='150'></e-column>
        <e-column field='ShipCity' headerText='Ship City' :visible='false' width='150'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, ColumnChooser, Toolbar } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-switch": SwitchComponent
  },
  data() {
    return {
      data: data,
      toolbarOptions: ['ColumnChooser']
    };
  },
  methods: {
   change(args){
      this.$refs.grid.ej2Instances.columnChooserSettings.enableSearching = args.checked;
    }
   },
  provide: {
    grid: [ColumnChooser, Toolbar]
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