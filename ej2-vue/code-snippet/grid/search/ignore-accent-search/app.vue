<template>
  <div id="app">
    <div style="display: flex;">
        <label style="margin-right:5px">
        Enable or disable ignoreAccent property
        </label>
        <ejs-switch id="switch" :change="change"></ejs-switch>
      </div>
      <ejs-grid ref='grid' style="padding-top: 10px" :dataSource='data' :toolbar='toolbarOptions' height='272px'>
        <e-columns>
          <e-column field='CategoryName' headerText='Category Name' width='100'></e-column>
          <e-column field='ProductName' headerText='Product Name' width='130'></e-column>
          <e-column field='QuantityPerUnit' headerText='Quantity per unit' width='150' textAlign='Right'></e-column>
          <e-column field='UnitsInStock' headerText='Units In Stock' width='80' textAlign='Right'></e-column>
        </e-columns>
      </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Search } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js'
export default {
name: "App",
components: {
"ejs-switch":SwitchComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      toolbarOptions: ['Search'],
    };
  },
  methods: {
    change: function (args) {
      let grid = this.$refs.grid.ej2Instances;
      if (args.checked) {
        grid.searchSettings.ignoreAccent = true;
      } else {
        grid.searchSettings.ignoreAccent = false;
      }
    }
  },
  provide: {
    grid: [Toolbar, Search]
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