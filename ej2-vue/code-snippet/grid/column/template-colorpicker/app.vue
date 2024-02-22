

<template>
  <div id="app">
    <ejs-grid ref='grid' id='grid' :dataSource='data' height='315px' >
      <e-columns>
        <e-column field='FirstName' headerText='FirstName' width=100></e-column>
        <e-column field='LastName' headerText='Last Name' width=100></e-column>
        <e-column field='City' headerText='City' width=100></e-column>
        <e-column headerText='Change the color of row' width='120' :template="'colorPickerTemplate'" textAlign='Center'>
      </e-columns>
        <template v-slot:colorPickerTemplate="{data}">
        <div><ejs-colorpicker mode="Palette" :change="change"></ejs-colorpicker></div>
      </template>
    </ejs-grid>
  </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ColorPickerPlugin } from '@syncfusion/ej2-vue-inputs';
import { employeeData } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ColorPickerPlugin);

export default {
  data() {
    return {
      data: employeeData,
    };
  },
  methods: {
    change: function (args) {
      const grid = this.$refs.grid.$el.ej2_instances[0];
      const selectedRows = grid.getSelectedRows();
      for (const row of selectedRows) {
        row.style.backgroundColor = args.value;
      }
      grid.clearSelection();
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


